import type { APIRoute } from 'astro';
import {
  buildPortfolioSystemPrompt,
  findProjectDetails,
  normalizeOpportunityType,
  type EmailDraft,
} from '../../lib/assistant-context';

export const prerender = false;

const GROQ_ENDPOINT = 'https://api.groq.com/openai/v1/chat/completions';
const GROQ_MODELS = ['openai/gpt-oss-20b', 'openai/gpt-oss-120b'] as const;
const MAX_HISTORY_MESSAGES = 10;
const MAX_MESSAGE_CHARS = 2000;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

interface ClientChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

interface GroqToolCall {
  id: string;
  type: 'function';
  function: {
    name: string;
    arguments: string;
  };
}

interface GroqMessage {
  role: 'system' | 'user' | 'assistant' | 'tool';
  content: string | null;
  tool_calls?: GroqToolCall[];
  tool_call_id?: string;
}

const TOOLS = [
  {
    type: 'function',
    function: {
      name: 'get_project_details',
      description:
        'Fetch full case-study details (challenge, solution, deliverables, metrics, tech stack, live URL) for any portfolio project by slug, number, title, or keyword.',
      parameters: {
        type: 'object',
        properties: {
          query: {
            type: 'string',
            description: 'Project slug, title, number (e.g. 01), or tech keyword.',
          },
        },
        required: ['query'],
      },
    },
  },
  {
    type: 'function',
    function: {
      name: 'prepare_contact_email',
      description:
        'Prepare a direct email transmission to Joshua Orlina once the visitor has provided their name, email address, opportunity type, and message.',
      parameters: {
        type: 'object',
        properties: {
          name: {
            type: 'string',
            description: "The visitor's full name or company name.",
          },
          email: {
            type: 'string',
            description: "The visitor's valid reply-to email address.",
          },
          service: {
            type: 'string',
            enum: [
              'Android Application',
              'Website / Web App',
              'Junior Engineer Role',
              'General Inquiry',
            ],
            description: 'Category of the inquiry.',
          },
          message: {
            type: 'string',
            description: 'The body of the email message to send to Joshua.',
          },
        },
        required: ['name', 'email', 'service', 'message'],
      },
    },
  },
];

function jsonResponse(payload: Record<string, unknown>, status = 200): Response {
  return new Response(JSON.stringify(payload), {
    status,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-store',
    },
  });
}

function shouldFallbackToNextModel(status: number, errorBody: string): boolean {
  if ([429, 413, 500, 502, 503, 504].includes(status)) return true;
  const lower = errorBody.toLowerCase();
  return (
    lower.includes('rate_limit') ||
    lower.includes('rate limit') ||
    lower.includes('limit') ||
    lower.includes('capacity') ||
    lower.includes('overloaded') ||
    lower.includes('too many requests')
  );
}

async function callGroqWithFallback(
  apiKey: string,
  messages: GroqMessage[],
  enableTools: boolean
): Promise<{
  message: GroqMessage;
  modelUsed: string;
  fallbackUsed: boolean;
}> {
  let lastErrorStatus = 500;
  let lastErrorMessage = 'Groq request failed.';

  for (let i = 0; i < GROQ_MODELS.length; i++) {
    const model = GROQ_MODELS[i];
    const response = await fetch(GROQ_ENDPOINT, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model,
        messages,
        ...(enableTools ? { tools: TOOLS, tool_choice: 'auto' } : {}),
        temperature: 0.4,
        max_completion_tokens: 700,
      }),
    });

    if (response.ok) {
      const data = await response.json();
      const choice = data?.choices?.[0]?.message as GroqMessage | undefined;
      if (!choice) {
        throw new Error('Groq returned an empty response.');
      }
      return {
        message: choice,
        modelUsed: model,
        fallbackUsed: i > 0,
      };
    }

    const rawError = await response.text();
    lastErrorStatus = response.status;
    try {
      const parsed = JSON.parse(rawError);
      lastErrorMessage = parsed?.error?.message || rawError;
    } catch {
      lastErrorMessage = rawError || `HTTP ${response.status}`;
    }

    const hasNextModel = i < GROQ_MODELS.length - 1;
    if (hasNextModel && shouldFallbackToNextModel(response.status, lastErrorMessage)) {
      continue;
    }

    const err = new Error(lastErrorMessage) as Error & { status?: number };
    err.status = lastErrorStatus;
    throw err;
  }

  const err = new Error(lastErrorMessage) as Error & { status?: number };
  err.status = lastErrorStatus;
  throw err;
}

function safeParseJson(raw: string): Record<string, unknown> {
  try {
    const parsed = JSON.parse(raw);
    return parsed && typeof parsed === 'object' ? (parsed as Record<string, unknown>) : {};
  } catch {
    return {};
  }
}

export const POST: APIRoute = async ({ request }) => {
  const apiKey = (import.meta.env.GROQ_API_KEY || process.env.GROQ_API_KEY || '').trim();
  if (!apiKey) {
    console.error('[api/chat] Missing GROQ_API_KEY environment variable.');
    return jsonResponse(
      {
        error: 'Assistant service is temporarily unavailable. Please use the /contact page.',
      },
      500
    );
  }

  let body: { messages?: unknown };
  try {
    body = await request.json();
  } catch {
    return jsonResponse({ error: 'Invalid JSON request body.' }, 400);
  }

  if (!Array.isArray(body?.messages) || body.messages.length === 0) {
    return jsonResponse({ error: 'Messages array is required.' }, 400);
  }

  const sanitizedHistory: ClientChatMessage[] = body.messages
    .filter(
      (msg): msg is ClientChatMessage =>
        Boolean(msg) &&
        typeof msg === 'object' &&
        ((msg as ClientChatMessage).role === 'user' ||
          (msg as ClientChatMessage).role === 'assistant') &&
        typeof (msg as ClientChatMessage).content === 'string' &&
        (msg as ClientChatMessage).content.trim().length > 0
    )
    .slice(-MAX_HISTORY_MESSAGES)
    .map((msg) => ({
      role: msg.role,
      content: msg.content.trim().slice(0, MAX_MESSAGE_CHARS),
    }));

  if (sanitizedHistory.length === 0) {
    return jsonResponse({ error: 'No valid messages provided.' }, 400);
  }

  const conversation: GroqMessage[] = [
    { role: 'system', content: buildPortfolioSystemPrompt() },
    ...sanitizedHistory,
  ];

  let emailDraft: EmailDraft | null = null;

  try {
    for (let step = 0; step < 3; step++) {
      const enableTools = step < 2;
      const result = await callGroqWithFallback(apiKey, conversation, enableTools);

      const assistantMsg = result.message;
      const toolCalls = assistantMsg.tool_calls;

      if (!toolCalls || toolCalls.length === 0) {
        return jsonResponse({
          reply: assistantMsg.content?.trim() || 'Transmission complete.',
          emailDraft,
        });
      }

      conversation.push({
        role: 'assistant',
        content: assistantMsg.content ?? null,
        tool_calls: toolCalls,
      });

      let readyToReturnDraft = false;

      for (const toolCall of toolCalls) {
        const args = safeParseJson(toolCall.function.arguments);

        if (toolCall.function.name === 'get_project_details') {
          const query = typeof args.query === 'string' ? args.query : '';
          const details = findProjectDetails(query);
          conversation.push({
            role: 'tool',
            tool_call_id: toolCall.id,
            content: JSON.stringify(details),
          });
        } else if (toolCall.function.name === 'prepare_contact_email') {
          const name = typeof args.name === 'string' ? args.name.trim() : '';
          const email = typeof args.email === 'string' ? args.email.trim() : '';
          const message = typeof args.message === 'string' ? args.message.trim() : '';
          const service = normalizeOpportunityType(args.service);

          if (!name || !EMAIL_REGEX.test(email) || !message) {
            conversation.push({
              role: 'tool',
              tool_call_id: toolCall.id,
              content: JSON.stringify({
                ok: false,
                error:
                  'Missing or invalid fields. Ask the visitor for a valid name, email address, and message.',
              }),
            });
          } else {
            emailDraft = { name, email, service, message };
            readyToReturnDraft = true;
            conversation.push({
              role: 'tool',
              tool_call_id: toolCall.id,
              content: JSON.stringify({
                ok: true,
                status: 'draft_ready_for_user_confirmation',
                recipient: 'joshuaorlina08@gmail.com',
              }),
            });
          }
        } else {
          conversation.push({
            role: 'tool',
            tool_call_id: toolCall.id,
            content: JSON.stringify({ error: `Unknown tool: ${toolCall.function.name}` }),
          });
        }
      }

      if (readyToReturnDraft && emailDraft) {
        const inlineReply = assistantMsg.content?.trim();
        return jsonResponse({
          reply:
            inlineReply ||
            `Transmission draft ready for **${emailDraft.name}** (${emailDraft.email}). Review the details below and click **SEND EMAIL** to deliver it directly to Joshua.`,
          emailDraft,
        });
      }
    }

    return jsonResponse({
      reply:
        'I gathered the details, but reached the step limit. Please ask a follow-up question or visit /contact.',
      emailDraft,
    });
  } catch (err: any) {
    const status = typeof err?.status === 'number' && err.status >= 400 ? err.status : 502;
    const isRateLimit = status === 429;
    console.error('[api/chat] Upstream error:', status, err?.message || err);
    return jsonResponse(
      {
        error: isRateLimit
          ? 'DUA is handling high traffic right now. Please wait a moment and try again, or use the /contact page.'
          : 'Assistant relay is temporarily unavailable. Please try again or use the /contact page.',
      },
      isRateLimit ? 429 : 502
    );
  }
};
