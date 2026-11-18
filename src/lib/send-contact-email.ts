export const DEFAULT_WEB3FORMS_ACCESS_KEY = '654169fc-f8ef-4f1c-bc67-d88443af5f34';
export const PORTFOLIO_EMAIL = 'joshuaorlina08@gmail.com';

export interface ContactEmailPayload {
  name: string;
  email: string;
  service: string;
  message: string;
  accessKey?: string;
  botcheck?: FormDataEntryValue | string;
}

export async function sendContactEmail({
  name,
  email,
  service,
  message,
  accessKey = DEFAULT_WEB3FORMS_ACCESS_KEY,
  botcheck = '',
}: ContactEmailPayload): Promise<void> {
  const cleanName = name.trim();
  const cleanEmail = email.trim();
  const cleanService = (service || 'General Inquiry').trim();
  const cleanMessage = message.trim();
  const cleanKey = accessKey.trim();

  if (!cleanName || !cleanEmail || !cleanMessage) {
    throw new Error('Name, email, and message are required.');
  }

  let response: Response;

  if (cleanKey && cleanKey !== 'YOUR_WEB3FORMS_ACCESS_KEY') {
    response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        access_key: cleanKey,
        subject: `[Portfolio] ${cleanService} — from ${cleanName}`,
        from_name: 'Joshua Orlina Portfolio',
        name: cleanName,
        email: cleanEmail,
        replyto: cleanEmail,
        opportunity_type: cleanService,
        message: cleanMessage,
        botcheck,
      }),
    });
  } else {
    response = await fetch(`https://formsubmit.co/ajax/${PORTFOLIO_EMAIL}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        _subject: `[Portfolio] ${cleanService} — from ${cleanName}`,
        _replyto: cleanEmail,
        _template: 'table',
        Name: cleanName,
        Email: cleanEmail,
        'Opportunity Type': cleanService,
        Message: cleanMessage,
      }),
    });
  }

  const result = await response.json();

  if (!response.ok || !(result.success === true || result.success === 'true')) {
    throw new Error(result.message || 'Submission failed');
  }
}
