import {
  aboutInfo,
  contactInfo,
  projects,
  services,
  skillCategories,
  type Project,
} from '../data/portfolio';

export interface EmailDraft {
  name: string;
  email: string;
  service:
    | 'Android Application'
    | 'Website / Web App'
    | 'Junior Engineer Role'
    | 'General Inquiry';
  message: string;
}

const VALID_SERVICES = new Set<EmailDraft['service']>([
  'Android Application',
  'Website / Web App',
  'Junior Engineer Role',
  'General Inquiry',
]);

export function normalizeOpportunityType(value: unknown): EmailDraft['service'] {
  if (typeof value === 'string' && VALID_SERVICES.has(value as EmailDraft['service'])) {
    return value as EmailDraft['service'];
  }
  const lower = typeof value === 'string' ? value.toLowerCase() : '';
  if (lower.includes('android') || lower.includes('mobile')) return 'Android Application';
  if (lower.includes('web') || lower.includes('site') || lower.includes('app')) {
    return 'Website / Web App';
  }
  if (lower.includes('job') || lower.includes('hire') || lower.includes('role') || lower.includes('engineer')) {
    return 'Junior Engineer Role';
  }
  return 'General Inquiry';
}

export function buildPortfolioSystemPrompt(): string {
  const experienceLines = aboutInfo.items
    .map((item) =>
      item.details
        ? `- ${item.title} (${item.subtitle}): ${item.details}`
        : `- ${item.title} (${item.subtitle})`
    )
    .join('\n');

  const contactLines = contactInfo.items
    .map((item) => `- ${item.title}: ${item.subtitle}${item.href ? ` (${item.href})` : ''}`)
    .join('\n');

  const serviceLines = services
    .map((svc) => `- ${svc.title} [${svc.subtitle}]: ${svc.description}`)
    .join('\n');

  const skillLines = skillCategories
    .map((cat) => `- ${cat.category} (${cat.context}): ${cat.technologies.join(', ')} — ${cat.experience}`)
    .join('\n');

  const projectSummaries = projects
    .map((p) => {
      const stack = p.techStack?.length ? p.techStack.join(', ') : p.category;
      const live = p.liveUrl ? ` | Live: ${p.liveUrl}` : '';
      return `- [${p.number}] ${p.title} (slug: ${p.slug}) | ${p.category} | ${p.year} | Client: ${p.client} | Role: ${p.role} | Stack: ${stack}${live} — ${p.summary}`;
    })
    .join('\n');

  return [
    `You are DUA, the AI Assistant embedded in ${aboutInfo.name}'s Y2K Portfolio website (named after Joshua's real-life nickname / Tagalog palayaw, "Dua").`,
    `STRICT GROUNDING: Only state facts present in the portfolio data below or returned by get_project_details. Never invent projects, dates, employers, metrics, or URLs. If something isn't listed, say so and offer to send Joshua an email.`,
    ``,
    `== RESPONSE STYLE & LAYOUT ==`,
    `Format EVERY response so it is super easy to scan, crisp, and catchy inside a compact chat terminal:`,
    `- Lead with a sharp 1-sentence direct answer or hook (no robotic filler).`,
    `- Organize details with short ### headings and scannable bullet points using **Bold Labels:** (e.g., "- **Stack:** Kotlin, Jetpack Compose").`,
    `- Keep paragraphs short (1-2 sentences max) and use whitespace cleanly.`,
    `- Do NOT use wide Markdown tables (use clean bullet lists instead so mobile & chat stay effortless to read).`,
    `- Include clickable markdown links to portfolio pages when relevant, e.g. [Audit Portal](/projects/audit-portal), [Projects](/projects), [Contact](/contact).`,
    `- Never ask visitors for internal slugs or project numbers; refer to projects by name and call get_project_details yourself when needed.`,
    `- When helpful, close with a crisp 1-line next action (e.g., offering project metrics or drafting an email to Joshua).`,
    ``,
    `== WHO JOSHUA IS ==`,
    `Name: ${aboutInfo.name} (Nickname / Palayaw: Dua)`,
    `Role: ${aboutInfo.role}`,
    `Location: ${aboutInfo.location}`,
    `Birth Date: ${aboutInfo.birthDate} (${aboutInfo.age})`,
    `Bio: ${aboutInfo.bio}`,
    `Experience & Education:`,
    experienceLines,
    ``,
    `== SKILLS ==`,
    skillLines,
    ``,
    `== SERVICES ==`,
    serviceLines,
    ``,
    `== CONTACT CHANNELS ==`,
    `Primary Email: ${contactInfo.email}`,
    contactLines,
    ``,
    `== PROJECTS INDEX (call get_project_details for full challenge, solution, deliverables & metrics) ==`,
    projectSummaries,
    ``,
    `== PORTFOLIO ROUTES ==`,
    `- Home: / | About: /about | Services: /services | All Projects: /projects | Project Page: /projects/<slug> | Contact: /contact`,
    ``,
    `== EMAIL CAPABILITY ==`,
    `When a visitor asks to email, message, hire, or contact Joshua directly:`,
    `1. Ensure you have: visitor's name, visitor's valid email address, opportunity type (Android Application, Website / Web App, Junior Engineer Role, or General Inquiry), and message.`,
    `2. If any required detail (name, email, or message) is missing, ask politely for just the missing details first.`,
    `3. Once you have name, email, and message, call prepare_contact_email. The UI will show a transmission confirmation card so the visitor can click Send to deliver it directly to ${contactInfo.email}.`,
  ].join('\n');
}

export function findProjectDetails(query: string): Record<string, unknown> {
  const normalized = query.trim().toLowerCase();
  if (!normalized) {
    return {
      found: false,
      error: 'Empty query. Available slugs: ' + projects.map((p) => p.slug).join(', '),
    };
  }

  const exact = projects.find(
    (p) =>
      p.slug.toLowerCase() === normalized ||
      p.number.toLowerCase() === normalized ||
      p.title.toLowerCase() === normalized
  );

  const partial =
    exact ||
    projects.find(
      (p) =>
        p.slug.toLowerCase().includes(normalized) ||
        p.title.toLowerCase().includes(normalized) ||
        p.subtitle.toLowerCase().includes(normalized) ||
        p.category.toLowerCase().includes(normalized) ||
        (p.techStack || []).some((t) => t.toLowerCase().includes(normalized))
    );

  if (!partial) {
    return {
      found: false,
      availableProjects: projects.map((p) => ({
        number: p.number,
        slug: p.slug,
        title: p.title,
      })),
    };
  }

  return serializeProjectForTool(partial);
}

function serializeProjectForTool(p: Project): Record<string, unknown> {
  return {
    found: true,
    number: p.number,
    slug: p.slug,
    url: `/projects/${p.slug}`,
    title: p.title,
    subtitle: p.subtitle,
    category: p.category,
    tag: p.tag,
    year: p.year,
    client: p.client,
    role: p.role,
    summary: p.summary,
    challenge: p.challenge,
    solution: p.solution,
    deliverables: p.deliverables,
    metrics: p.metrics,
    techStack: p.techStack || [],
    liveUrl: p.liveUrl || null,
    isConfidential: Boolean(p.confidentialTitle),
    confidentialNote: p.confidentialNote || null,
  };
}
