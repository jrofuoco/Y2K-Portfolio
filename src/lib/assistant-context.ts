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

function truncateText(text: string, maxLen: number): string {
  const clean = text.replace(/\s+/g, ' ').trim();
  if (clean.length <= maxLen) return clean;
  return clean.slice(0, maxLen - 1).trimEnd() + '…';
}

export function buildPortfolioSystemPrompt(): string {
  const experienceLines = aboutInfo.items
    .map((item) =>
      item.details
        ? `- ${item.title} (${item.subtitle}): ${truncateText(item.details, 180)}`
        : `- ${item.title} (${item.subtitle})`
    )
    .join('\n');

  const contactLines = contactInfo.items
    .map((item) => `- ${item.title}: ${item.subtitle}${item.href ? ` (${item.href})` : ''}`)
    .join('\n');

  const serviceLines = services
    .map((svc) => `- ${svc.title}: ${svc.subtitle}`)
    .join('\n');

  const skillLines = skillCategories
    .map((cat) => `- ${cat.category}: ${cat.technologies.join(', ')}`)
    .join('\n');

  const projectSummaries = projects
    .map((p) => {
      const stack = p.techStack?.length ? p.techStack.join(', ') : p.category;
      const live = p.liveUrl ? ` | Live: ${p.liveUrl}` : '';
      return `- ${p.title} (/projects/${p.slug}) | ${p.category}, ${p.year} | Client: ${p.client} | Stack: ${stack}${live} — ${truncateText(p.summary, 140)}`;
    })
    .join('\n');

  return [
    `You are DUA, the AI Assistant in ${aboutInfo.name}'s Y2K Portfolio (named after Joshua's real-life nickname / Tagalog palayaw, "Dua").`,
    `GROUNDING: Only state facts from the data below or get_project_details. Never invent projects, dates, employers, metrics, or URLs.`,
    ``,
    `== STYLE ==`,
    `- Start with 1 punchy sentence; use short ### headings and "- **Label:** value" bullets.`,
    `- No emojis, no wide Markdown tables, and never ask visitors for internal slugs/numbers.`,
    `- Link pages with Markdown, e.g. [Audit Portal](/projects/audit-portal), [Projects](/projects), [Contact](/contact).`,
    `- For broad questions ("all projects", "tech stack", "skills"), answer directly from PROJECTS INDEX and SKILLS WITHOUT calling get_project_details. Only call get_project_details when asked deeply about 1–2 specific projects.`,
    ``,
    `== JOSHUA ==`,
    `Name: ${aboutInfo.name} (Nickname/Palayaw: Dua) | ${aboutInfo.role} | ${aboutInfo.location} | Born ${aboutInfo.birthDate} (${aboutInfo.age})`,
    `Bio: ${aboutInfo.bio}`,
    experienceLines,
    ``,
    `== SKILLS ==`,
    skillLines,
    ``,
    `== SERVICES ==`,
    serviceLines,
    ``,
    `== CONTACT ==`,
    `Email: ${contactInfo.email}`,
    contactLines,
    ``,
    `== PROJECTS INDEX ==`,
    projectSummaries,
    ``,
    `== ROUTES ==`,
    `/ | /about | /services | /projects | /projects/<slug> | /contact`,
    ``,
    `== EMAIL TOOL ==`,
    `To email Joshua, collect visitor name, valid email, opportunity type (Android Application, Website / Web App, Junior Engineer Role, or General Inquiry), and message—ask for any missing fields, then call prepare_contact_email.`,
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
