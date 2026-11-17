export interface ScreenshotGroup {
  overline: string;
  title: string;
  titleAccent: string;
  description: string;
  portrait?: boolean;
  items: { src: string; caption: string; tag: string }[];
}

export interface Project {
  slug: string;
  number: string;
  category: string;
  tag: string;
  title: string;
  subtitle: string;
  year: string;
  client: string;
  role: string;
  summary: string;
  challenge: string;
  solution: string;
  deliverables: string[];
  metrics: { label: string; value: string }[];
  artClass: string;
  cropPosition?: string;
  techStack?: string[];
  liveUrl?: string;
  confidentialTitle?: string;
  confidentialNote?: string;
  clearanceBadge?: string;
  screenshots?: { src: string; caption: string; tag: string }[];
  screenshotGroups?: ScreenshotGroup[];
  povPhotos?: { src: string; caption: string; tag: string }[];
}

export interface Service {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  symbol: string;
  description: string;
  deliverables: string[];
  hudCode: string;
}

export interface AboutDossierItem {
  number: string;
  title: string;
  subtitle: string;
  symbol: '+' | '—';
  details?: string;
}

export interface ContactChannelItem {
  number: string;
  title: string;
  subtitle: string;
  href?: string;
  external?: boolean;
}

export const aboutInfo = {
  name: 'Joshua Orlina',
  bio: 'I’m a junior Android engineer and web developer from Calabarzon, Philippines. I enjoy turning practical problems into clear, reliable digital products.',
  location: 'Calabarzon, Philippines',
  role: 'Junior Android Engineer & Web Developer',
  birthDate: 'August 08, 2002',
  age: '24 years old',
  items: [
    {
      number: '01',
      title: 'Megaworld Corporation',
      subtitle: 'Junior Developer Intern · Feb—Jun 2025',
      symbol: '+',
      details:
        'Engineered the internal Enterprise Audit Portal from scratch using Laravel—leading the full lifecycle from initial brainstorming and relational database architecture to role-based access control, interactive social feed features (posts, comments, likes), and deployment.',
    },
    {
      number: '02',
      title: 'JIMAC Incorporated',
      subtitle: 'Android Developer · Feb 2026—Present',
      symbol: '+',
      details:
        'Developing, maintaining, and optimizing production Android applications with a focus on performance, hardware/POS reliability, and clean user workflows.',
    },
    {
      number: '03',
      title: 'Pamantasan ng Lungsod ng San Pablo',
      subtitle: 'Education',
      symbol: '—',
    },
    {
      number: '04',
      title: 'Android & web development',
      subtitle: 'Primary technical focus',
      symbol: '—',
    },
    {
      number: '05',
      title: 'August 08, 2002',
      subtitle: '24 years old',
      symbol: '—',
    },
  ] as AboutDossierItem[],
};

export const contactInfo = {
  intro:
    'Need an Android application, a website, or a junior engineer for your team? Send me an email or connect with me online.',
  email: 'joshuaorlina08@gmail.com',
  items: [
    {
      number: '01',
      title: 'Email',
      subtitle: 'joshuaorlina08@gmail.com',
      href: 'mailto:joshuaorlina08@gmail.com',
      external: false,
    },
    {
      number: '02',
      title: 'LinkedIn',
      subtitle: 'Connect with Joshua',
      href: 'https://www.linkedin.com/in/joshua-orlina-549862363/',
      external: true,
    },
    {
      number: '03',
      title: 'GitHub',
      subtitle: 'View my code',
      href: 'https://github.com/jrofuoco',
      external: true,
    },
    {
      number: '04',
      title: 'Instagram',
      subtitle: '@jrofuoco',
      href: 'https://www.instagram.com/jrofuoco/',
      external: true,
    },
    {
      number: '05',
      title: 'Facebook',
      subtitle: 'FuocoW',
      href: 'https://www.facebook.com/FuocoW',
      external: true,
    },
    {
      number: '06',
      title: 'Calabarzon, Philippines',
      subtitle: 'Open to Android and web opportunities',
    },
  ] as ContactChannelItem[],
};

export const projects: Project[] = [
  {
    slug: 'audit-portal',
    number: '01',
    category: 'WEB',
    tag: 'LARAVEL / ENTERPRISE INTERNAL PORTAL',
    title: 'AUDIT PORTAL',
    subtitle: 'Enterprise Internal Web Portal & Interactive Social Platform',
    year: '2025',
    client: 'Megaworld Corporation (Internal)',
    role: 'Full-Stack Laravel Developer (Brainstorming → DB Architecture → Deployment)',
    summary:
      'An end-to-end internal enterprise web portal built from scratch with Laravel during my internship at Megaworld Corporation—combining audit operations dashboards with an interactive social workspace where employees can post, comment, react/like, join groups, and track events.',
    challenge:
      'The organization needed a unified internal platform that didn’t feel like a rigid legacy intranet. It had to bring together announcements, department groups, event calendars, and an interactive social feed (AuditFeed) while enforcing strict role-based permissions and content moderation.',
    solution:
      'Built the entire system from the ground up in Laravel—starting from initial requirement brainstorming and relational database schema design through backend implementation, UI workflows, and deployment. Engineered the interactive AuditFeed (posts, comments, likes, flag moderation, approvals), Role-Based Access Control (Admin, Account Manager, Moderator, Event Manager, QA, Standard Users), analytics widgets, and multi-view event calendar.',
    deliverables: [
      'End-to-End Laravel Full-Stack Architecture',
      'Relational Database Schema & Migrations',
      'AuditFeed Social Engine (Posts, Comments, Likes & Flagging)',
      'Granular Role-Based Access Control (RBAC) & Approvals',
      'Interactive Multi-View Calendar, Groups & Leaderboards',
      'Executive Dashboard, Leave Tracker & Production Deployment',
    ],
    metrics: [
      { label: 'FRAMEWORK', value: 'LARAVEL' },
      { label: 'LIFECYCLE', value: 'END-TO-END' },
      { label: 'RBAC ROLES', value: '6+ TIERS' },
    ],
    techStack: ['Laravel', 'PHP', 'MySQL / Relational DB', 'JavaScript', 'RBAC & Permissions', 'REST / AJAX', 'Full-Stack Deployment'],
    clearanceBadge: 'PERMISSION GRANTED · TEST DATA ONLY',
    confidentialTitle: '● PUBLIC SHOWCASE CLEARANCE // APPROVED NON-SENSITIVE SCREENS',
    confidentialNote:
      'Disclaimer: All Audit Portal screenshots and behind-the-build photos shown here are displayed with explicit permission. Everything visible inside the screens is dummy/test data I created myself during active development and testing—no real company records, confidential financial figures, or private employee information are exposed. Beyond the screens below, the internal system also includes the interactive AuditFeed social stream (posts, comments, likes, flagging, and approvals), department Groups, and Auditor Leaderboards.',
    screenshots: [
      {
        src: '/assets/projects/audit-portal/dashboard.jpg',
        tag: '01 // MAIN DASHBOARD',
        caption: 'Central hub featuring Featured Auditor of the Day, live Taguig weather, On-Leave tracker, Announcements/News feed, Analytics, Online presence insights, and Photo Album.',
      },
      {
        src: '/assets/projects/audit-portal/roles-rbac.jpg',
        tag: '02 // RBAC & ADMIN TOOLS',
        caption: 'Granular Role-Based Access Control managing Admin, Account Manager, Moderator, Event Manager, QA Representative, and Standard User permissions, plus Approvals and Flag Feed.',
      },
      {
        src: '/assets/projects/audit-portal/calendar.jpg',
        tag: '03 // INTERACTIVE CALENDAR',
        caption: 'Full-featured Month/Week/Day/List event scheduler with color-coded category filtering (Business, Announcement, News, Holiday, Birthday).',
      },
      {
        src: '/assets/projects/audit-portal/login.jpg',
        tag: '04 // AUTHENTICATION PORTAL',
        caption: 'Secure internal sign-in and account registration gateway for audit department personnel.',
      },
    ],
    povPhotos: [
      {
        src: '/assets/projects/audit-portal/pov-architecture-meeting.jpg',
        tag: 'POV 01 // 6-HOUR ARCHITECTURE SESSION',
        caption: 'Initial brainstorming and database architecture session—mapping out system flowcharts and relational schemas in the conference room.',
      },
      {
        src: '/assets/projects/audit-portal/pov-auditfeed-code.jpg',
        tag: 'POV 02 // AUDITFEED & LARAVEL BLADE DEV',
        caption: 'Split-screen development of the interactive AuditFeed social stream (posts, photo uploads, reactions, and comments) alongside VS Code Blade templates.',
      },
      {
        src: '/assets/projects/audit-portal/pov-user-profile.jpg',
        tag: 'POV 03 // EMPLOYEE PROFILE & HIGHLIGHTS',
        caption: 'Testing the social user profile module featuring Trainings & Seminars, Highlights & Updates, user posts, and featured photo galleries.',
      },
      {
        src: '/assets/projects/audit-portal/pov-leaderboards-activity.jpg',
        tag: 'POV 04 // LEADERBOARDS & ACTIVITY LOG',
        caption: 'Live LAN testing of Auditor Leaderboards, point rankings, and the real-time social activity feed tracking post reactions and comments.',
      },
      {
        src: '/assets/projects/audit-portal/pov-dashboard-dev.jpg',
        tag: 'POV 05 // DASHBOARD & ANALYTICS BUILD',
        caption: 'Iterating on the main dashboard layout with announcement reactions, metrics, and department analytics.',
      },
      {
        src: '/assets/projects/audit-portal/pov-boardroom-review.jpg',
        tag: 'POV 06 // BOARDROOM DEMO & RBAC REVIEW',
        caption: 'Presenting the live Audit Portal Role Permissions matrix and admin controls during a team review session.',
      },
    ],
    artClass: 'art-audit-portal',
  },
  {
    slug: 'owe-debt-collect',
    number: '02',
    category: 'ANDROID & WEB',
    tag: 'KOTLIN COMPOSE + NEXT.JS 15 + SUPABASE (IN PROGRESS // AI CHAT SOON)',
    title: 'OWE. / DEBT COLLECT',
    subtitle: 'Peer-to-Peer Loan & Repayment Ecosystem with Kotlin Compose Android App & Next.js 15 Admin Console (In Progress)',
    year: '2026 · WIP',
    client: 'DUA / OWE Financial Utility Ecosystem',
    role: 'Lead Android (Kotlin / Jetpack Compose) & Full-Stack Next.js Developer',
    summary:
      'An actively developed cross-platform peer-to-peer loan and debt management ecosystem pairing a native Android mobile application (Kotlin 2.1, Jetpack Compose Material 3, Ktor, and Supabase Kotlin SDK v3) with a Next.js 15, React 19, TypeScript, and Tailwind CSS v4 Web Administration Console. Currently in active development, with an integrated AI Chat System coming soon to assist lenders and borrowers with smart repayment insights, automated reminders, and conversational debt queries.',
    challenge:
      'Informal lending and borrowing between individuals often suffers from disputed balances, lost GCash/bank reference numbers, and forgotten installment dates. Both lenders and borrowers needed a shared, transparent ledger where loan terms, installment schedules, and payment confirmations are mutually verified—backed by an administrative operations console for auditing, support triage, and remote app configuration.',
    solution:
      'Engineered a dual-application ecosystem on Supabase. Built OWE_Mobile natively for Android using Kotlin 2.1 and Jetpack Compose (Material 3), featuring a unified Lender ("Money I Lent") and Borrower ("Money I Owe") workflow, automated Flat-Rate (₱) and Percentage (%) installment calculators, 7-day expiring Borrower Invite Codes (DC-XXXXXX), GCash/Maya/Bank payment submission with lender verification, cascading PSGC Philippine address selection, offline LocalDiskCache, and Google AdMob + OWE Pro subscription tiers. Paired it with OWE_Admin in Next.js 15 (App Router, Turbopack, Server Actions) and React 19 for portfolio collection analytics, immutable audit logs, support ticket triage, real-time broadcast announcements, and remote feature flags—with an in-app AI Chat System currently in progress.',
    deliverables: [
      'Native Android App (Kotlin 2.1, Jetpack Compose Material 3, Navigation Compose, MVVM)',
      'Next.js 15 & React 19 Admin Console (App Router, Server Actions, TypeScript, Tailwind CSS v4)',
      'Supabase PostgreSQL Views (debt_summary), RLS Policies, Auth & Realtime Channels',
      'Dual Lender & Borrower Engine with 7-Day Expiring Invite Codes (DC-XXXXXX)',
      'Installment Calculator (Flat Rate ₱ / Percentage %, 3m–24m) & Payment Verification Flow',
      'Upcoming Roadmap: Integrated AI Chat System for Smart Loan & Repayment Assistance (In Progress)',
    ],
    metrics: [
      { label: 'MOBILE STACK', value: 'KOTLIN COMPOSE' },
      { label: 'ADMIN STACK', value: 'NEXT.JS 15 + TS' },
      { label: 'STATUS / NEXT', value: 'WIP · AI CHAT' },
    ],
    techStack: [
      'Kotlin 2.1',
      'Jetpack Compose (Material 3)',
      'Next.js 15 (App Router & Turbopack)',
      'React 19 & TypeScript 5',
      'Tailwind CSS v4',
      'Supabase (PostgreSQL, Auth, Realtime, SSR)',
      'Ktor Client & Kotlinx Serialization',
      'Google AdMob SDK',
      'AI Chat System (Coming Soon)',
    ],
    confidentialTitle: '● ACTIVE DEVELOPMENT // UPCOMING AI CHAT SYSTEM ROADMAP',
    confidentialNote:
      'Status Note: OWE. (Debt Collect) is actively in progress. The next major milestone on the roadmap is an integrated AI Chat System built directly into the ecosystem—enabling users to ask natural-language questions about their loan balances, get smart repayment schedules and financial insights, and receive automated conversational assistance.',
    screenshotGroups: [
      {
        overline: 'ROLE MODULE 01 // KOTLIN & JETPACK COMPOSE ANDROID APP (18 SCREENS)',
        title: 'Lender & Borrower',
        titleAccent: 'Android app.',
        portrait: true,
        description:
          'Native Android application built with Kotlin 2.1, Jetpack Compose (Material 3), Ktor, and Supabase Kotlin SDK—unifying Lender and Borrower workflows with invite-code loan linking, installment calculation, GCash/Maya payment verification, PSGC address lookup, and OWE Pro upgrades.',
        items: [
          {
            src: '/assets/projects/owe/mobile-onboarding.png',
            tag: 'APP 01 // ONBOARDING WALKTHROUGH',
            caption: 'Interactive onboarding slide ("01 · BORROW & LEND — Borrow & Lend with Clarity") introducing instant loan creation and invite-code linking.',
          },
          {
            src: '/assets/projects/owe/mobile-login.png',
            tag: 'APP 02 // AUTHENTICATION GATEWAY',
            caption: 'OWE. sign-in screen featuring the signature owl emblem ("BORROW · TRACK · SETTLE"), email/password login, Remember Me, and password recovery.',
          },
          {
            src: '/assets/projects/owe/mobile-register.png',
            tag: 'APP 03 // ACCOUNT REGISTRATION & PSGC ADDRESS',
            caption: 'Structured account creation capturing Personal Information and cascading Philippine Standard Geographic Code (PSGC) Address Details (Province, Municipality/City, Barangay).',
          },
          {
            src: '/assets/projects/owe/mobile-reset-password.png',
            tag: 'APP 04 // OTP PASSWORD RECOVERY',
            caption: 'Password reset flow dispatching a 6-digit email verification code via Supabase Auth.',
          },
          {
            src: '/assets/projects/owe/mobile-home-lender.png',
            tag: 'APP 05 // LENDER HOME & PORTFOLIO DASHBOARD',
            caption: 'Home dashboard with Money I Lent / Money I Owe mode switcher, Total Outstanding card (₱125,000.00), Total Lent (₱174,620.00), Collected (₱49,620.00), status filters, and active debt progress.',
          },
          {
            src: '/assets/projects/owe/mobile-new-debt.png',
            tag: 'APP 06 // CREATE DEBT & INSTALLMENT CALCULATOR',
            caption: 'New Debt builder supporting Flat Rate (₱) and Percentage (%) interest, duration chips (3m, 6m, 12m, 24m), monthly Pay Day (1–31), and live Monthly Payment & Total to Collect calculation.',
          },
          {
            src: '/assets/projects/owe/mobile-share-invite-code.png',
            tag: 'APP 07 // BORROWER INVITE CODE GENERATOR',
            caption: 'Post-creation screen generating a 7-day expiring Borrower Invite Code (DC-73772B) with direct sharing via Messenger, WhatsApp, SMS, Copy Link, or code regeneration.',
          },
          {
            src: '/assets/projects/owe/mobile-notifications.png',
            tag: 'APP 08 // REAL-TIME NOTIFICATIONS FEED',
            caption: 'Real-time alert center notifying the lender when a borrower accepts and joins a loan record using their invite code.',
          },
          {
            src: '/assets/projects/owe/mobile-all-debts-lender.png',
            tag: 'APP 09 // LENDER MASTER DEBTS LEDGER',
            caption: 'All Debts tab with All Debts / Money Lent / Money Owed filters, pending invite alert banner, Active/Overdue/Fully Paid counters, and status-badged loan cards.',
          },
          {
            src: '/assets/projects/owe/mobile-debt-details-lender.png',
            tag: 'APP 10 // LENDER DEBT DETAILS & SCHEDULE',
            caption: 'Lender loan breakdown displaying Borrower info, ₱125,000.00 remaining balance (16% paid), 2 of 12 paid installments (₱12,500.00/mo), next due date, and confirmed GCash payments.',
          },
          {
            src: '/assets/projects/owe/mobile-debt-payment-records.png',
            tag: 'APP 11 // CONFIRMED INSTALLMENT RECORDS',
            caption: 'Verified payment history view tracking each installment amount, GCash payment method, reference number, and confirmation status.',
          },
          {
            src: '/assets/projects/owe/mobile-recent-activity.png',
            tag: 'APP 12 // MONTHLY COLLECTION & ACTIVITY TIMELINE',
            caption: 'Recent Activity stream with category filters (All Activity, Payments, Debts Created, Pending), Collected This Month banner (₱49,620.00 · 9 events), and chronological ledger updates.',
          },
          {
            src: '/assets/projects/owe/mobile-borrower-debts.png',
            tag: 'APP 13 // BORROWER DEBTS OVERVIEW',
            caption: 'Borrower-side All Debts view displaying active and fully paid loans owed to lender Dua Orlina with real-time progress bars.',
          },
          {
            src: '/assets/projects/owe/mobile-borrower-debt-details.png',
            tag: 'APP 14 // BORROWER REPAYMENT BREAKDOWN',
            caption: 'Borrower loan detail view showing the Lender profile (Dua Orlina), remaining balance, monthly installment schedule, payment history, and Submit Payment CTA.',
          },
          {
            src: '/assets/projects/owe/mobile-submit-payment.png',
            tag: 'APP 15 // SUBMIT INSTALLMENT PAYMENT',
            caption: 'Borrower payment submission form with auto-filled installment amount, Pay full balance shortcut, Payment Method pills (Cash, GCash, Maya, Bank Transfer, Other), Reference Number input, and installment tracker (Installment 3 of 12).',
          },
          {
            src: '/assets/projects/owe/mobile-profile-settings.png',
            tag: 'APP 16 // VERIFIED PROFILE & OWE PRO UPGRADE',
            caption: 'User profile and settings screen featuring Verified Account badge, Upgrade to OWE Pro banner (₱99/mo for unlimited debts, PDF export & no ads), security controls, and build version.',
          },
          {
            src: '/assets/projects/owe/mobile-change-password-modal.png',
            tag: 'APP 17 // SECURITY & PASSWORD UPDATE MODAL',
            caption: 'In-app Change Password bottom sheet dialog validating current and new account credentials.',
          },
          {
            src: '/assets/projects/owe/mobile-help-support-modal.png',
            tag: 'APP 18 // IN-APP HELP & SUPPORT TICKET MODAL',
            caption: 'Direct Help & Support ticket composer allowing users to submit issues straight into the OWE Admin Support Tickets queue.',
          },
        ],
      },
      {
        overline: 'ROLE MODULE 02 // NEXT.JS 15 & TAILWIND v4 WEB ADMIN CONSOLE (9 SCREENS)',
        title: 'Next.js 15 Admin',
        titleAccent: 'web console.',
        description:
          'Full-stack operations and analytics console built with Next.js 15 (App Router, Turbopack, Server Actions), React 19, TypeScript, Tailwind CSS v4, and Supabase Service-Role SSR—monitoring portfolio collection health, users, debts, payments, audit trails, support tickets, real-time announcements, and dynamic JSONB app config.',
        items: [
          {
            src: '/assets/projects/owe/admin-dashboard.png',
            tag: 'ADMIN 01 // EXECUTIVE OVERVIEW & COLLECTION ANALYTICS',
            caption: 'Admin Overview featuring Total Collected (₱49,620.00), KPI cards, Collection Rate radial gauge (28% Collected of ₱174,894.29 portfolio), 6-Month Collections bar chart, Portfolio Health breakdown, Payments by Method (GCash), and Recent Debt Audit Activity.',
          },
          {
            src: '/assets/projects/owe/admin-users.png',
            tag: 'ADMIN 02 // REGISTERED USERS & PSGC DIRECTORY',
            caption: 'Paginated user profiles table displaying Full Name, Supabase User UUID, Phone number, PSGC Barangay/Municipality/Province location, and Joined date.',
          },
          {
            src: '/assets/projects/owe/admin-debts.png',
            tag: 'ADMIN 03 // MASTER DEBTS SUMMARY LEDGER',
            caption: 'All debt records queried from the PostgreSQL debt_summary view showing Outstanding Balance (₱125,274.29), Overdue count, Total, Paid, Remaining balance, Due Date, and status badges (Awaiting Borrower, Active, Paid).',
          },
          {
            src: '/assets/projects/owe/admin-payments.png',
            tag: 'ADMIN 04 // PAYMENT VERIFICATION & REFERENCE LOG',
            caption: 'Master ledger of submitted, confirmed, and rejected borrower payments displaying Amount, Payment Method (GCASH), Reference Number, Date, Status badge, and Proof.',
          },
          {
            src: '/assets/projects/owe/admin-subscriptions.png',
            tag: 'ADMIN 05 // OWE PRO SUBSCRIPTIONS & BILLING',
            caption: 'Subscription monitoring module tracking OWE Pro user plans, billing statuses, start dates, and expiration timestamps.',
          },
          {
            src: '/assets/projects/owe/admin-audit-logs.png',
            tag: 'ADMIN 06 // IMMUTABLE DEBT AUDIT LOGS',
            caption: 'Immutable audit trail logging system-wide events (Invite Code Generated, Debt Joined, Payment Confirmed, Payment Rejected, Debt Paid) with Debt title/UUID, Actor UUID, and timestamp.',
          },
          {
            src: '/assets/projects/owe/admin-support-tickets.png',
            tag: 'ADMIN 07 // SUPPORT TICKETS TRIAGE CONSOLE',
            caption: 'Customer support management table with status filter tabs (All, Open, In Progress, Resolved, Closed), user email, ticket message, and live status dropdown actions.',
          },
          {
            src: '/assets/projects/owe/admin-announcements.png',
            tag: 'ADMIN 08 // REAL-TIME MOBILE BROADCAST ANNOUNCEMENTS',
            caption: 'Broadcast composer and history manager for publishing Info, Promo, Warning, and Maintenance banners directly to the Android app via Supabase Realtime.',
          },
          {
            src: '/assets/projects/owe/admin-app-config.png',
            tag: 'ADMIN 09 // REMOTE APP CONFIG & FEATURE FLAGS',
            caption: 'Dynamic JSONB remote configuration panel (app_config) controlling ads_enabled, free_active_debt_limit, interstitial_cooldown_minutes, maintenance_mode, pro_lifetime_price, and pro_monthly_price in real time.',
          },
        ],
      },
    ],
    artClass: 'art-owe',
  },
  {
    slug: 'scilab-reserve',
    number: '03',
    category: 'WEB',
    tag: 'SUPABASE + FLUTTER DESKTOP + WEB ECOSYSTEM',
    title: 'SCILAB RESERVE 3.0',
    subtitle: 'Science Laboratory Inventory & Multi-Tier Reservation Ecosystem (Web + Windows Admin App)',
    year: '2026',
    client: 'Academic Science Laboratory (Confidential Institution)',
    role: 'Full-Stack Web & Flutter Desktop Developer',
    summary:
      'A unified Science Laboratory Inventory and Reservation platform consisting of a Professor & Student Web Portal (deployed on Vercel) and a cross-platform Flutter Windows Desktop Admin Application—powered by Supabase PostgreSQL, PL/pgSQL atomic RPC functions, and Supabase Realtime.',
    challenge:
      'Managing laboratory rooms, chemical stock/expiration, glassware, and equipment across courses and student sections required a strict two-tier verification workflow (Professor endorsement followed by Laboratory Admin approval), atomic inventory holds to prevent double-booking, and full audit trail accountability.',
    solution:
      'Architected a dual-app ecosystem backed by Supabase. Built the Student & Professor web portals with Vanilla JS and Supabase JS v2 (featuring SMTP Edge Function OTP signup, cart-based resource borrowing, an interactive 30-minute time-slot scheduler, and the read-only Lab AI assistant widget), paired with a Flutter Material 3 Windows Desktop Admin app featuring fl_chart analytics, atomic PL/pgSQL inventory hold RPCs, real-time notifications, audit logs, and PDF/Excel report exports.',
    deliverables: [
      'Student & Professor Web Portals (JavaScript, Supabase JS v2, Vercel)',
      'Flutter Windows Desktop Admin Application (Dart, Material 3, Inno Setup)',
      'Supabase PostgreSQL Schema (12 Tables) & PL/pgSQL Inventory Hold RPCs',
      'Two-Tier Approval Engine (Professor Review → Admin Final Approval)',
      'Read-Only Lab AI Assistant (Availability, Stock, Reservation Status & Policy Q&A)',
      'Real-Time Notifications, Audit Trail Logging & Stock History',
      'fl_chart Analytics, PDF & Excel Export Reporting',
    ],
    metrics: [
      { label: 'ECOSYSTEM', value: 'WEB + DESKTOP' },
      { label: 'DB TABLES', value: '12 TABLES' },
      { label: 'APPROVAL FLOW', value: '2-TIER RPC' },
    ],
    techStack: [
      'JavaScript (ES6+)',
      'Flutter & Dart (Windows Desktop)',
      'Supabase (PostgreSQL & Auth)',
      'PL/pgSQL RPC Functions',
      'Supabase Realtime & Edge Functions',
      'fl_chart / PDF & Excel Export',
      'Vercel',
    ],
    clearanceBadge: 'CLIENT PRIVACY · REDACTED SCREENS',
    confidentialTitle: '● CLIENT CONFIDENTIALITY // BLURRED & REDACTED DETAILS',
    confidentialNote:
      'Disclaimer: Because SciLab Reserve 3.0 was built for a real client institution, certain areas in the screenshots below have been intentionally blurred or removed to protect the client’s identity, institutional branding, and private records.',
    screenshotGroups: [
      {
        overline: 'ROLE MODULE 01 // PROFESSOR PORTAL (10 SCREENS)',
        title: 'Professor',
        titleAccent: 'portal.',
        description:
          'Dedicated faculty interface for booking laboratory sessions, reviewing and approving student reservation requests, verifying advisory student accounts, and monitoring unreturned equipment.',
        items: [
          {
            src: '/assets/projects/scilab/professor-dashboard.png',
            tag: 'PROF 01 // PROFESSOR DASHBOARD',
            caption: 'Professor overview displaying reservation metrics, quick actions, upcoming sessions, and weekly schedule preview.',
          },
          {
            src: '/assets/projects/scilab/professor-notifications.png',
            tag: 'PROF 02 // REAL-TIME NOTIFICATIONS DRAWER',
            caption: 'Live Supabase Realtime notification drawer alerting the professor to new student reservation requests.',
          },
          {
            src: '/assets/projects/scilab/professor-new-reservation.png',
            tag: 'PROF 03 // CREATE LAB RESERVATION',
            caption: 'Professor resource catalog for reserving Chemicals, Equipment, and Glassware for upcoming class sessions.',
          },
          {
            src: '/assets/projects/scilab/professor-student-approvals.png',
            tag: 'PROF 04 // STUDENT RESERVATION APPROVALS',
            caption: 'First-tier approval queue where professors review, approve, or decline student laboratory reservation requests.',
          },
          {
            src: '/assets/projects/scilab/professor-reservation-modal.png',
            tag: 'PROF 05 // RESERVATION BREAKDOWN MODAL',
            caption: 'Detailed modal showing student course/section, dual approval badges (Professor + Admin), and borrowed resources.',
          },
          {
            src: '/assets/projects/scilab/professor-approved-students.png',
            tag: 'PROF 06 // APPROVED STUDENT RESERVATIONS',
            caption: 'Confirmed student reservations endorsed by the professor with quick-view details.',
          },
          {
            src: '/assets/projects/scilab/professor-account-approvals.png',
            tag: 'PROF 07 // STUDENT ACCOUNT VERIFICATION',
            caption: 'Advisory verification table for approving newly registered students under the professor.',
          },
          {
            src: '/assets/projects/scilab/professor-students-unreturned.png',
            tag: 'PROF 08 // UNRETURNED ITEMS MONITORING',
            caption: 'Accountability table tracking students with unreturned laboratory equipment or glassware.',
          },
          {
            src: '/assets/projects/scilab/professor-history.png',
            tag: 'PROF 09 // PROFESSOR RESERVATION HISTORY',
            caption: 'Complete historical log of the professor’s past laboratory reservations and statuses.',
          },
          {
            src: '/assets/projects/scilab/professor-settings.png',
            tag: 'PROF 10 // PROFESSOR PROFILE & SECURITY',
            caption: 'Professor account settings, role badge, and password security management.',
          },
        ],
      },
      {
        overline: 'ROLE MODULE 02 // STUDENT PORTAL (14 SCREENS)',
        title: 'Student',
        titleAccent: 'portal.',
        description:
          'Student experience featuring OTP registration, interactive Chemicals/Equipment/Glassware catalogs, cart drawer, 30-minute time-slot scheduler, and two-tier approval tracking.',
        items: [
          {
            src: '/assets/projects/scilab/student-dashboard.png',
            tag: 'STU 01 // STUDENT DASHBOARD',
            caption: 'Student portal home showing active reservations, pending requests, announcements, and weekly schedule timeline.',
          },
          {
            src: '/assets/projects/scilab/student-notifications.png',
            tag: 'STU 02 // STUDENT NOTIFICATIONS DRAWER',
            caption: 'Real-time updates notifying the student when a Professor or Admin approves or declines their request.',
          },
          {
            src: '/assets/projects/scilab/student-reservation-chemicals.png',
            tag: 'STU 03 // CATALOG — CHEMICALS INVENTORY',
            caption: 'Interactive laboratory resource browser for Chemicals with live stock counts and availability checks.',
          },
          {
            src: '/assets/projects/scilab/student-reservation-equipment.png',
            tag: 'STU 04 // CATALOG — LAB EQUIPMENT',
            caption: 'Equipment inventory catalog (Microscopes, Bunsen burners, Hot plates, Iron stands) with instant cart selection.',
          },
          {
            src: '/assets/projects/scilab/student-reservation-glassware.png',
            tag: 'STU 05 // CATALOG — GLASSWARE',
            caption: 'Glassware catalog (Erlenmeyer flasks, Beakers, Test tubes, Burettes) with floating reservation cart.',
          },
          {
            src: '/assets/projects/scilab/student-cart.png',
            tag: 'STU 06 // RESERVATION CART DRAWER',
            caption: 'Slide-out resource cart allowing students to adjust item quantities before choosing their schedule.',
          },
          {
            src: '/assets/projects/scilab/student-datetime-modal.png',
            tag: 'STU 07 // INTERACTIVE DATE & TIME-SLOT SCHEDULER',
            caption: 'Calendar date picker paired with an interactive 30-minute timeline selector (7:00 AM – 7:30 PM) and course/professor auto-fill.',
          },
          {
            src: '/assets/projects/scilab/student-pending-status.png',
            tag: 'STU 08 // TWO-TIER PENDING APPROVALS',
            caption: 'Student pending approvals table tracking both Professor Approval and Admin Approval statuses in real time.',
          },
          {
            src: '/assets/projects/scilab/student-pending-modal.png',
            tag: 'STU 09 // PENDING RESERVATION DETAILS MODAL',
            caption: 'Full breakdown of a pending student request showing dual approval states and allocated items.',
          },
          {
            src: '/assets/projects/scilab/student-approved.png',
            tag: 'STU 10 // APPROVED RESERVATIONS',
            caption: 'Confirmed student laboratory bookings ready for equipment and chemical release.',
          },
          {
            src: '/assets/projects/scilab/student-history.png',
            tag: 'STU 11 // STUDENT RESERVATION HISTORY',
            caption: 'Historical log of completed, declined, and past laboratory reservations.',
          },
          {
            src: '/assets/projects/scilab/student-settings.png',
            tag: 'STU 12 // STUDENT PROFILE & ADVISER SETTINGS',
            caption: 'Student profile displaying Course, Year & Section, assigned Adviser Professor, and security settings.',
          },
          {
            src: '/assets/projects/scilab/login.png',
            tag: 'STU 13 // AUTHENTICATION GATEWAY',
            caption: 'Unified SciLabReserve 2.0 sign-in portal for Students and Professors.',
          },
          {
            src: '/assets/projects/scilab/signup.png',
            tag: 'STU 14 // OTP STUDENT REGISTRATION',
            caption: 'Student registration with Year & Section, Course selection, Adviser Professor assignment, and email OTP verification.',
          },
        ],
      },
      {
        overline: 'ROLE MODULE 03 // FLUTTER WINDOWS DESKTOP ADMIN APP (17 SCREENS)',
        title: 'Admin Desktop',
        titleAccent: 'application.',
        description:
          'Native Windows Desktop administration suite built with Flutter & Dart (Material 3) and Supabase—featuring fl_chart analytics, final reservation approvals, room & chemical stock management, audit trail logging, OTP account provisioning, and PDF/Excel report generation.',
        items: [
          {
            src: '/assets/projects/scilab/admin-dashboard.png',
            tag: 'ADM 01 // ADMIN DASHBOARD & ANALYTICS',
            caption: 'Central command overview with reservation totals, quick actions, Top Courses by Reservations bar chart (fl_chart), status breakdown, and recent activity feed.',
          },
          {
            src: '/assets/projects/scilab/admin-audit-logs.png',
            tag: 'ADM 02 // SYSTEM AUDIT TRAIL LOGS',
            caption: 'Comprehensive audit trail tracking LOGIN, APPROVE, UPDATE, and LOGOUT actions across entities with filters and report generation.',
          },
          {
            src: '/assets/projects/scilab/admin-new-reservation.png',
            tag: 'ADM 03 // DIRECT ADMIN RESERVATION',
            caption: 'Immediate-approval reservation builder allowing admins to book Laboratory Rooms, Chemicals, Equipment, and Glassware.',
          },
          {
            src: '/assets/projects/scilab/admin-reservation-cart.png',
            tag: 'ADM 04 // ADMIN RESOURCE CART MODAL',
            caption: 'Resource cart dialog with quantity controls before assigning a room or schedule.',
          },
          {
            src: '/assets/projects/scilab/admin-reservation-datetime.png',
            tag: 'ADM 05 // ADMIN SCHEDULE & SLOT PICKER',
            caption: 'Interactive date and 30-minute time-slot grid displaying Available, Reserved, Past, and Selected states.',
          },
          {
            src: '/assets/projects/scilab/admin-reservation-history.png',
            tag: 'ADM 06 // MASTER RESERVATION HISTORY & REPORTS',
            caption: 'Complete history across Students and Professors with search, status filters, Export by Account, and Generate Report (PDF/Excel).',
          },
          {
            src: '/assets/projects/scilab/admin-professor-reservations.png',
            tag: 'ADM 07 // PROFESSOR RESERVATIONS APPROVAL QUEUE',
            caption: 'Dedicated admin review queue for pending faculty laboratory reservations.',
          },
          {
            src: '/assets/projects/scilab/admin-student-reservations.png',
            tag: 'ADM 08 // STUDENT RESERVATIONS APPROVAL QUEUE',
            caption: 'Second-tier admin approval queue for student reservations already endorsed by their professor.',
          },
          {
            src: '/assets/projects/scilab/admin-ongoing-reservations.png',
            tag: 'ADM 09 // ONGOING & OVERDUE MONITOR',
            caption: 'Live tracker monitoring Ongoing, Overdue, Due Soon, and Completed laboratory sessions.',
          },
          {
            src: '/assets/projects/scilab/admin-upcoming-reservations.png',
            tag: 'ADM 10 // UPCOMING RESERVATIONS SCHEDULE',
            caption: 'Master schedule of upcoming approved Student and Professor bookings with resource summaries.',
          },
          {
            src: '/assets/projects/scilab/admin-room-monitor.png',
            tag: 'ADM 11 // LABORATORY ROOM MONITOR',
            caption: 'Real-time room status manager (Physics Lab, Lecture Room, Chemistry Lab) toggling Available and Maintenance states.',
          },
          {
            src: '/assets/projects/scilab/admin-inventory.png',
            tag: 'ADM 12 // INVENTORY & CHEMICAL EXPIRATION MANAGER',
            caption: 'Full inventory control for Chemicals (with expiration dates and stock updates), Equipment, and Glassware plus report export.',
          },
          {
            src: '/assets/projects/scilab/admin-unreturned-items.png',
            tag: 'ADM 13 // UNRETURNED ITEMS & RETURN PROCESSING',
            caption: 'Tracks unreturned equipment across students and professors with one-click Return processing and report generation.',
          },
          {
            src: '/assets/projects/scilab/admin-announcements.png',
            tag: 'ADM 14 // ANNOUNCEMENTS BROADCAST MANAGER',
            caption: 'Publishes system-wide laboratory announcements directly to the Student and Professor web portals.',
          },
          {
            src: '/assets/projects/scilab/admin-manage-professors.png',
            tag: 'ADM 15 // MANAGE PROFESSOR ACCOUNTS',
            caption: 'Admin user management for provisioning new Professor accounts via OTP, editing profiles, or revoking access.',
          },
          {
            src: '/assets/projects/scilab/admin-manage-students.png',
            tag: 'ADM 16 // MANAGE STUDENT ACCOUNTS',
            caption: 'Student directory and OTP account creation linking students to their Course, Year & Section, and Adviser Professor.',
          },
          {
            src: '/assets/projects/scilab/admin-login.png',
            tag: 'ADM 17 // WINDOWS DESKTOP AUTHENTICATION',
            caption: 'Native Windows desktop sign-in screen for SciLabReserve 2.0 laboratory administrators.',
          },
        ],
      },
      {
        overline: 'FEATURE MODULE 04 // LAB AI ASSISTANT (3 SCREENS)',
        title: 'AI',
        titleAccent: 'assistant.',
        description:
          'Embedded read-only Scilab Assistant ("Lab AI") floating chat widget integrated into the web portal—helping users check live room and item availability, look up chemical stock and expiration status, summarize pending reservations, and answer SciLab policy questions without modifying bookings.',
        items: [
          {
            src: '/assets/projects/scilab/ai-assistant-intro.png',
            tag: 'AI 01 // LAB AI ASSISTANT WIDGET',
            caption: 'Floating Lab AI chat drawer introducing Scilab Assistant as a read-only availability, status, and policy helper.',
          },
          {
            src: '/assets/projects/scilab/ai-assistant-stock-query.jpg',
            tag: 'AI 02 // REAL-TIME STOCK & EXPIRATION QUERY',
            caption: 'Natural-language inventory lookup resolving chemical queries (e.g., Ethanol C2H5OH) with live stock volume and non-expired status.',
          },
          {
            src: '/assets/projects/scilab/ai-assistant-reservation-status.png',
            tag: 'AI 03 // RESERVATION & APPROVAL STATUS SUMMARY',
            caption: 'Instant reservation status check summarizing scheduled date, time window, and pending Admin approval state.',
          },
        ],
      },
    ],
    artClass: 'art-scilab',
  },
  {
    slug: 'water-meter-billing',
    number: '04',
    category: 'ANDROID & DESKTOP',
    tag: 'ANDROID STUDIO + JAVAFX + ROBOFLOW VISION + POSTGRESQL',
    title: 'WATER METER BILLING & READING',
    subtitle: '3-User Municipal Water Utility Ecosystem with Roboflow Machine Vision OCR, Android Apps & JavaFX Admin',
    year: '2023',
    client: 'Municipal Water Office (Liliw, Laguna)',
    role: 'Android Studio, JavaFX & Machine Vision Developer',
    summary:
      'A 3-user water utility billing and meter reading ecosystem built in 2023—combining native Android applications (for Field Meter Readers and Household Consumers), a custom Machine Vision model trained on Roboflow (using the Roboflow Inference API to automatically read water meter digits from camera snaps), and a JavaFX Desktop Administration Suite backed by a centralized PostgreSQL database.',
    challenge:
      'Municipal water utility operations relied on manual field reading logs and disconnected billing sheets, leading to delayed bill computation, human transcription errors when reading physical analog/digital water meters in the field, and limited visibility for household consumers checking their monthly cubic-meter consumption and unpaid balances.',
    solution:
      'Engineered an integrated 3-role platform backed by PostgreSQL and Computer Vision. Trained a custom Machine Vision model on Roboflow and integrated its Inference API into the Android Studio Meter Reader app—allowing field readers to tap "Snap", send the meter photo to the Roboflow Inference API, and automatically extract the 8-digit meter reading. Paired this with a Consumer Android app (for real-time billing statements and consumption tracking) and a 12-module JavaFX Desktop Admin application handling consumer connections, residential/commercial rate computation, billing posting, official receipt payment processing, and barangay revenue analytics.',
    deliverables: [
      'Custom Machine Vision Model Trained on Roboflow + Inference API Integration',
      'Android Studio Field Meter Reader App (Camera Snap OCR, Barangay Queue & Digital Entry)',
      'Android Studio Consumer Mobile App (Live Billing Statement & Consumption View)',
      'JavaFX Desktop Admin Application (12 Operational & Analytics Modules)',
      'Centralized PostgreSQL Relational Database & Multi-Role Authentication',
      'Automated Residential & Commercial Cubic-Meter (m³) Tariff Computation',
    ],
    metrics: [
      { label: 'USER ROLES', value: '3 APPS / ROLES' },
      { label: 'AI / VISION', value: 'ROBOFLOW API' },
      { label: 'DATABASE', value: 'POSTGRESQL' },
    ],
    techStack: [
      'Android Studio (Java)',
      'Roboflow Machine Vision',
      'Roboflow Inference API',
      'JavaFX (Desktop UI)',
      'PostgreSQL',
      'JDBC / REST API',
      'Multi-Role Architecture (Admin / Reader / Consumer)',
    ],
    screenshotGroups: [
      {
        overline: 'ROLE MODULE 01 // JAVAFX DESKTOP ADMIN APPLICATION (12 SCREENS)',
        title: 'JavaFX Admin',
        titleAccent: 'desktop app.',
        description:
          'Full-featured desktop administration suite for the Municipal Water Office—covering consumer registration, meter connection charges, manual/list reading entry, residential & commercial rate computation, billing posting, cashier payment receipts, and barangay analytics.',
        items: [
          {
            src: '/assets/projects/water-meter/desktop-menu-charges.jpg',
            tag: 'DESK 01 // 12-MODULE ADMIN DASHBOARD & BASIC CHARGES',
            caption: 'Main JavaFX command center featuring 12 operational modules (Connection, Reading, Bills & Payment, Consumers Info, User Management, Posting, Transaction History, Analytics, Billing Summary, Reports, Basic Charges, Announcement) with the Residential & Commercial tariff configuration modal.',
          },
          {
            src: '/assets/projects/water-meter/desktop-analytics.jpg',
            tag: 'DESK 02 // CONSUMER & BILLING ANALYTICS',
            caption: 'Executive dashboard displaying Total Revenue Collected, Outstanding Balance, Active Consumers, Unpaid Accounts, Barangay Data bar chart, and Outstanding Payments distribution pie chart.',
          },
          {
            src: '/assets/projects/water-meter/desktop-reading.jpg',
            tag: 'DESK 03 // WATER METER READING & COMPUTATION',
            caption: 'Meter reading workspace with Manual and Reading List tabs, consumer details, Previous/Current reading in cubic meters (m³), disconnection flagging, and automated Residential rate computation.',
          },
          {
            src: '/assets/projects/water-meter/desktop-posting.jpg',
            tag: 'DESK 04 // BILLING POSTING MODULE',
            caption: 'Billing verification and posting screen where admins review consumer meter readings, inspect computation details, edit readings if needed, and post official bills to consumer accounts.',
          },
          {
            src: '/assets/projects/water-meter/desktop-bills-payment.png',
            tag: 'DESK 05 // BILLS & PAYMENT PROCESSING',
            caption: 'Cashier payment terminal calculating bill amounts, penalties, and total payables, tracking outstanding bills, and issuing Official Receipt numbers.',
          },
          {
            src: '/assets/projects/water-meter/desktop-billing-summary.jpg',
            tag: 'DESK 06 // BILLING SUMMARY (PAID & UNPAID)',
            caption: 'Filterable master ledger of Paid and Unpaid consumer bills with Official Receipt records, payment dates, status filtering, and downloadable reports.',
          },
          {
            src: '/assets/projects/water-meter/desktop-meter-connection.jpg',
            tag: 'DESK 07 // NEW METER CONNECTION SETUP',
            caption: 'Service connection registration capturing Consumer Details, Meter Details (brand, serial number, size), Installation Breakdown, and Other Charges with receipt generation.',
          },
          {
            src: '/assets/projects/water-meter/desktop-consumer-list.jpg',
            tag: 'DESK 08 // MASTER CONSUMER DIRECTORY',
            caption: 'Searchable directory of registered water consumers showing Account No, Name, Barangay, Connection Type (Residential/Commercial), Contact Info, Meter No, and Date Applied.',
          },
          {
            src: '/assets/projects/water-meter/desktop-consumer-info.jpg',
            tag: 'DESK 09 // CONSUMER INFORMATION & ACCOUNT EDITOR',
            caption: 'Consumer account management module with side-panel editing for updating household details, contact information, and barangay codes.',
          },
          {
            src: '/assets/projects/water-meter/desktop-user-management.jpg',
            tag: 'DESK 10 // STAFF & READER USER MANAGEMENT',
            caption: 'Role-based user administration for creating and managing desktop staff and field meter reader credentials.',
          },
          {
            src: '/assets/projects/water-meter/desktop-barangay-list.png',
            tag: 'DESK 11 // BARANGAY MASTER CONFIGURATION',
            caption: 'Reference table mapping municipal Barangay Codes (B01–B15+) to their respective barangay names for routing and analytics.',
          },
          {
            src: '/assets/projects/water-meter/desktop-login.jpg',
            tag: 'DESK 12 // JAVAFX DESKTOP AUTHENTICATION',
            caption: 'Municipal Water Office (Liliw, Laguna) JavaFX desktop login portal.',
          },
        ],
      },
      {
        overline: 'ROLE MODULE 02 // ANDROID STUDIO APPS + ROBOFLOW MACHINE VISION (6 SCREENS)',
        title: 'Reader & Consumer',
        titleAccent: 'Android apps.',
        portrait: true,
        description:
          'Two native Android applications built in Android Studio connected to PostgreSQL: a Field Meter Reader app powered by a custom Roboflow Machine Vision model & Inference API for automated meter digit recognition, and a Consumer app for viewing real-time water bills and consumption.',
        items: [
          {
            src: '/assets/projects/water-meter/mobile-reader-login.jpg',
            tag: 'READER APP 01 // METER READER SIGN-IN',
            caption: 'Native Android login screen for field meter readers.',
          },
          {
            src: '/assets/projects/water-meter/mobile-reader-dashboard.jpg',
            tag: 'READER APP 02 // FIELD PROGRESS DASHBOARD',
            caption: 'Meter Reader dashboard tracking total households, completed readings (Done Reading), remaining houses (House to go), and barangays left.',
          },
          {
            src: '/assets/projects/water-meter/mobile-reader-queue.png',
            tag: 'READER APP 03 // BARANGAY HOUSEHOLD QUEUE',
            caption: 'Barangay consumer list (e.g., Bagong Anyo) displaying Meter No, Consumer Name, and Account No for quick field selection.',
          },
          {
            src: '/assets/projects/water-meter/mobile-reader-input.png',
            tag: 'READER APP 04 // ROBOFLOW MACHINE VISION SNAP & 8-DIGIT INPUT',
            caption: 'Digital meter reading card showing Last Month’s reading (00000068) and This Month’s 8-digit boxes—tapping "Snap" captures the physical water meter and calls the custom Roboflow Inference API to detect and return the meter digits automatically.',
          },
          {
            src: '/assets/projects/water-meter/mobile-consumer-login.jpg',
            tag: 'CONSUMER APP 01 // CONSUMER SIGN-IN',
            caption: 'Native Android login screen for household water consumers.',
          },
          {
            src: '/assets/projects/water-meter/mobile-consumer-bill.jpg',
            tag: 'CONSUMER APP 02 // LIVE WATER BILL & CONSUMPTION VIEW',
            caption: 'Consumer billing dashboard showing current Amount to Pay, Unpaid Bills access, Billing Period, Meter No, Previous/Current Reading, Cubic-Meter Consumption (m³), and due date reminder.',
          },
        ],
      },
    ],
    artClass: 'art-water-meter',
  },
  {
    slug: 'plspcart',
    number: '05',
    category: 'WEB',
    tag: 'PHP + POSTGRESQL / CAMPUS E-COMMERCE',
    title: 'PLSPCART',
    subtitle: 'University Campus E-Commerce & Peer-to-Peer Buy & Sell Marketplace',
    year: '2022',
    client: 'Pamantasan ng Lungsod ng San Pablo (PLSP)',
    role: 'Full-Stack PHP & PostgreSQL Developer',
    summary:
      'An online campus marketplace and e-commerce platform built in 2022 using PHP and PostgreSQL for the students of Pamantasan ng Lungsod ng San Pablo (PLSP)—connecting students to official college uniforms, department shirts, textbooks, and a moderated student-to-student Buy & Sell marketplace.',
    challenge:
      'Students needed a centralized, trustworthy campus platform to purchase official college merchandise (across CNAHS, CAS, CBA, CCST, COA, and COE departments), find course textbooks, and safely buy or sell pre-loved school essentials with fellow students without relying on scattered social media groups.',
    solution:
      'Engineered PLSPCart from the ground up using PHP and a relational PostgreSQL database. Built a dual-mode e-commerce experience featuring department category filtering, a student Buy & Sell listing workflow, shopping cart and checkout supporting both Cash on Delivery and School Counter Pick-Up, and a full Admin Portal for managing inventory, processing student orders, and moderating user registrations and peer-to-peer product listings.',
    deliverables: [
      'Full-Stack PHP E-Commerce Storefront & Shopping Cart',
      'PostgreSQL Relational Database Schema (Products, Orders, Users, Seller Requests)',
      'College Department Catalog Filtering (CNAHS, CAS, CBA, CCST, COA, COE)',
      'Checkout Engine (Cash on Delivery & School Counter Pick-Up) & Order Tracking',
      'Peer-to-Peer Student Buy & Sell Marketplace with Admin Sell Approval',
      'Admin Dashboard for Inventory CRUD, Order Fulfillment & User Verification',
    ],
    metrics: [
      { label: 'BACKEND', value: 'PHP + POSTGRES' },
      { label: 'DEPARTMENTS', value: '6 COLLEGES' },
      { label: 'WORKFLOW', value: 'B2C + P2P SELL' },
    ],
    techStack: [
      'PHP',
      'PostgreSQL',
      'SQL',
      'HTML5 & CSS3',
      'JavaScript',
      'E-Commerce & Cart Session Management',
      'Role-Based Admin Moderation',
    ],
    screenshotGroups: [
      {
        overline: 'ROLE MODULE 01 // STUDENT CAMPUS STOREFRONT & CHECKOUT (10 SCREENS)',
        title: 'Campus Storefront',
        titleAccent: '& checkout.',
        description:
          'Student-facing marketplace for browsing department uniforms, shirts, pins, and textbooks across 6 colleges, complete with search/category filtering, cart checkout, and order confirmation.',
        items: [
          {
            src: '/assets/projects/plspcart/store-home.png',
            tag: 'STORE 01 // CAMPUS MARKETPLACE LANDING PAGE',
            caption: 'PLSPCart hero banner ("Your campus marketplace, anytime, anywhere") with value highlights for Hot Deals, Real-Time Order Updates, Hassle-Free Checkouts, and Student Savings.',
          },
          {
            src: '/assets/projects/plspcart/store-about-categories.png',
            tag: 'STORE 02 // ABOUT US & 6 COLLEGE DEPARTMENT CATEGORIES',
            caption: 'Mission overview and quick-filter cards for the 6 university colleges: CNAHS, CAS, CBA, CCST, COA, and COE.',
          },
          {
            src: '/assets/projects/plspcart/store-featured.jpg',
            tag: 'STORE 03 // FEATURED DEPARTMENT MERCHANDISE',
            caption: 'Featured campus items including CHK, CAS, and COE Department Shirts and CBA Pin Sets.',
          },
          {
            src: '/assets/projects/plspcart/store-catalog.jpg',
            tag: 'STORE 04 // PRODUCTS & BUY-AND-SELL CATALOG',
            caption: 'Full product catalog with Products / Buy & Sell mode switcher, keyword search, college category filter, and sorting.',
          },
          {
            src: '/assets/projects/plspcart/store-product-uniform.jpg',
            tag: 'STORE 05 // PRODUCT DETAIL — OFFICIAL UNIFORM',
            caption: 'Detailed item view for the CNAHS Nursing Uniform showing pricing, seller contact information, description, and related department items.',
          },
          {
            src: '/assets/projects/plspcart/store-product-books.jpg',
            tag: 'STORE 06 // PRODUCT DETAIL — COURSE TEXTBOOKS',
            caption: 'Product listing for Nursing Books Set 1 with seller details and recommended course materials.',
          },
          {
            src: '/assets/projects/plspcart/store-checkout.png',
            tag: 'STORE 07 // CHECKOUT & PAYMENT METHOD SELECTION',
            caption: 'Order summary and checkout form supporting Cash on Delivery and Pay on the Counter (School Pick Up), plus shipping address and order notes.',
          },
          {
            src: '/assets/projects/plspcart/store-order-confirmed.png',
            tag: 'STORE 08 // ORDER CONFIRMATION RECEIPT',
            caption: 'Post-checkout confirmation screen displaying Order Number, Payment Method, Pending status, itemized breakdown, and delivery instructions.',
          },
          {
            src: '/assets/projects/plspcart/store-login.jpg',
            tag: 'STORE 09 // STUDENT & ADMIN AUTHENTICATION',
            caption: 'Sign-in gateway for registered PLSP students, peer sellers, and marketplace administrators.',
          },
          {
            src: '/assets/projects/plspcart/store-newsletter-footer.jpg',
            tag: 'STORE 10 // NEWSLETTER & CAMPUS SUPPORT FOOTER',
            caption: 'Storefront newsletter subscription and quick navigation links for FAQs, shipping policy, and student Buy & Sell.',
          },
        ],
      },
      {
        overline: 'ROLE MODULE 02 // ADMIN & SELLER MODERATION PORTAL (7 SCREENS)',
        title: 'Admin & Seller',
        titleAccent: 'moderation.',
        description:
          'Back-office administration suite for monitoring store revenue, adding/editing products, fulfilling student orders, and approving student accounts and peer-to-peer Buy & Sell product listings.',
        items: [
          {
            src: '/assets/projects/plspcart/admin-dashboard.jpg',
            tag: 'ADMIN 01 // ADMIN DASHBOARD & REVENUE KPI',
            caption: 'Overview of Total Products, Total Orders, Total Users, Total Revenue (₱), Recent Orders table, and quick-action navigation.',
          },
          {
            src: '/assets/projects/plspcart/admin-products.jpg',
            tag: 'ADMIN 02 // INVENTORY & PRODUCT MANAGEMENT',
            caption: 'Admin catalog view with instant Edit and Delete controls on every product card across all college categories.',
          },
          {
            src: '/assets/projects/plspcart/admin-edit-modal.jpg',
            tag: 'ADMIN 03 // EDIT PRODUCT MODAL',
            caption: 'In-place modal editor for updating product name, price, description, college category, and product photo.',
          },
          {
            src: '/assets/projects/plspcart/admin-add-product.png',
            tag: 'ADMIN 04 // ADD NEW PRODUCT MODULE',
            caption: 'Product creation form with Name, Description, Price (₱), Stock quantity, Category selector, Featured toggle, and image upload.',
          },
          {
            src: '/assets/projects/plspcart/admin-order-management.png',
            tag: 'ADMIN 05 // ORDER FULFILLMENT & STATUS MANAGER',
            caption: 'Detailed order management screen with search/status/date filters, customer details, ordered item cards, and live order status updates.',
          },
          {
            src: '/assets/projects/plspcart/admin-sell-approval.jpg',
            tag: 'ADMIN 06 // STUDENT BUY & SELL LISTING APPROVALS',
            caption: 'Moderation queue for reviewing Sell Approval requests and student-submitted products pending approval before they go live.',
          },
          {
            src: '/assets/projects/plspcart/admin-user-approval.jpg',
            tag: 'ADMIN 07 // STUDENT USER ACCOUNT APPROVAL',
            caption: 'User verification queue allowing administrators to Approve or Reject newly registered campus accounts.',
          },
        ],
      },
    ],
    artClass: 'art-plspcart',
  },
];

export const servicesInfo = {
  intro:
    'I primarily develop Android applications and also create responsive websites for individuals, organizations, and businesses.',
};

export const services: Service[] = [
  {
    id: 'android-app-development',
    number: '01',
    title: 'Android app development',
    subtitle: 'My primary specialization',
    symbol: '—',
    description:
      'Developing reliable, user-focused native Android applications built for real-world performance, clean workflows, and long-term maintainability.',
    deliverables: [
      'Native Android Development (Kotlin / Java)',
      'Clean UI & Material / Custom Layouts',
      'Local Storage & Offline-Ready Workflows',
      'Hardware, POS & Device Feature Integration',
    ],
    hudCode: 'SYS // AND-01',
  },
  {
    id: 'website-development',
    number: '02',
    title: 'Website development',
    subtitle: 'Responsive websites for different needs',
    symbol: '—',
    description:
      'Creating fast, responsive websites and web applications tailored for individuals, organizations, and businesses across mobile and desktop.',
    deliverables: [
      'Responsive Multi-Page Websites',
      'Business, Organization & Portfolio Sites',
      'Interactive Frontend & GSAP Animations',
      'Performance & Cross-Device Optimization',
    ],
    hudCode: 'SYS // WEB-02',
  },
  {
    id: 'api-database-integration',
    number: '03',
    title: 'API & database integration',
    subtitle: 'Connecting applications to real services',
    symbol: '—',
    description:
      'Connecting Android apps and websites to backend APIs, databases, and third-party services so data stays synchronized and dependable.',
    deliverables: [
      'RESTful API Integration & Networking',
      'SQL / Cloud Database Connectivity',
      'Authentication & Real-Time Data Sync',
      'Third-Party Service Integration',
    ],
    hudCode: 'SYS // API-03',
  },
];

export interface SkillCategory {
  number: string;
  category: string;
  context: string;
  experience: string;
  technologies: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    number: '01',
    category: 'ANDROID & MOBILE',
    context: 'PRODUCTION · POS & CONSUMER APPS',
    experience:
      'Developing and maintaining production Android applications at JIMAC Incorporated with hardware/POS reliability, alongside native Kotlin & Jetpack Compose apps such as OWE. / Debt Collect.',
    technologies: ['Kotlin', 'Java', 'Jetpack Compose', 'Material 3', 'Android Studio', 'Offline Cache'],
  },
  {
    number: '02',
    category: 'WEB & FULL-STACK',
    context: 'ENTERPRISE & MODERN WEB',
    experience:
      'Built Megaworld Corporation’s internal Audit Portal end-to-end in Laravel, paired with Next.js 15 / React 19 admin consoles and Astro + GSAP interactive sites.',
    technologies: ['Laravel (PHP)', 'Next.js 15', 'React 19', 'TypeScript', 'Astro', 'HTML / CSS / JS', 'Tailwind CSS'],
  },
  {
    number: '03',
    category: 'BACKEND, APIS & DATA',
    context: 'SYSTEMS & INTEGRATION',
    experience:
      'Designing relational schemas, granular role-based access control (RBAC), REST/AJAX endpoints, and real-time auth & data sync with Supabase and SQL databases.',
    technologies: ['MySQL / SQL', 'Supabase', 'REST APIs', 'Ktor', 'RBAC & Auth', 'Relational DB Design'],
  },
  {
    number: '04',
    category: 'UI/UX & DELIVERY',
    context: 'WHITEBOARD TO DEPLOYMENT',
    experience:
      'Translating operational requirements into clear multi-role dashboards, responsive mobile workflows, and stakeholder-ready demos from initial architecture through deployment.',
    technologies: ['UI/UX Systems', 'GSAP Animations', 'Responsive Design', 'System Flowcharts', 'Stakeholder Demos'],
  },
];
