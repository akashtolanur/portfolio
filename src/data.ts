export const profile = {
  name: 'Akash Tolanur',
  role: 'Full Stack Developer',
  basedIn: 'Bengaluru, India',
  status: 'open to remote roles',
  stack: 'React · Node · MySQL · GCP',
  headline: 'I build the systems that move people.',
  tagline:
    "Booking, billing, dispatch and payroll — I've spent the last year building a corporate transport platform end to end, from the MySQL schema to the cloud bill. Currently finishing an MCA and looking at what's next.",
  email: 'akashtolanur171717@gmail.com',
  github: 'https://github.com/akashtolanur',
  githubLabel: 'github.com/akashtolanur',
  linkedin: 'https://linkedin.com/in/akash-tolanur',
  linkedinLabel: 'in/akash-tolanur',
}

export const aboutCopy = [
  "I'm a full stack developer at Lavi Carz, where I've spent the past year building Comutoo — a B2B corporate transport platform handling bookings, billing, dispatch and payroll for companies that move employees on fixed shifts.",
  "Most of what I've learned has come from owning problems end to end: designing the schema, writing the middleware, then watching the cloud bill and rewriting the infrastructure when it got too expensive. I moved into engineering from a safety science analyst role at Fortrea, and I'm now finishing an MCA through distance learning alongside the day job.",
  "Outside of work I'm picking up new tools, going deep on system design — how large-scale systems at big tech are actually put together — and starting DSA prep to sharpen the fundamentals.",
]

export const stats = [
  { num: '~90%', label: 'cut in monthly cloud costs after migrating off managed Cloud SQL' },
  { num: '20+', label: 'production screens shipped across the platform' },
  { num: '3', label: 'permission tiers in the RBAC system I designed' },
]

export type Role = {
  title: string
  org: string
  dates: string
  past?: boolean
  bullets: string[]
}

export const roles: Role[] = [
  {
    title: 'Full Stack Developer',
    org: 'Lavi Carz Pvt Ltd — Bengaluru, India',
    dates: 'Jul 2025 — Present',
    bullets: [
      'Architected and launched **Comutoo**, a full-stack transport booking and billing platform — 20+ screens, backend business logic, and a complete relational MySQL schema (React, Node.js, Express, GCP).',
      'Cut monthly cloud costs by **~90%** by moving off managed Cloud SQL onto a self-provisioned Compute Engine VM, and secured credentials through GCP Secret Manager.',
      'Built a **role-based access control** system with three permission tiers (superadmin, admin, clientadmin) using JWT auth and module-level middleware to gate features by role.',
      'Designed the invoice system and **payroll module** from scratch — GST-aware billing, effective-dated salary history, and monthly payroll snapshots.',
      'Integrated Microsoft Graph API to sync HR leads by email into the CRM, alongside manual lead ingestion from Hunter.io and Apollo.io.',
      'Automated recurring billing and reporting with GCP Cloud Scheduler, and containerized a service with Docker for staging.',
      "Integrated Meta's WhatsApp Business Cloud API for customer notifications and Google Maps for live trip tracking, backed by Upstash Redis to cut redundant DB reads.",
      'Built and published a driver-facing companion app in Expo/React Native — signature capture at drop-off, stored in Cloud Storage and embedded into tripsheet PDFs, live on Google Play.',
      'Improved frontend performance with route-level code splitting and TanStack Query caching, cutting redundant API calls by **~70%**, and set up zero-downtime CI/CD with GitHub Actions to Cloud Run and Firebase Hosting.',
    ],
  },
  {
    title: 'Safety Science Analyst',
    org: 'Fortrea (Wissen Infotech) — Bengaluru, India',
    dates: 'Feb 2024 — Jun 2025',
    past: true,
    bullets: [
      'Managed large-scale enterprise data processing under strict compliance and validation standards, holding a 99%+ accuracy benchmark.',
      'Worked across cross-functional technical and operational teams to streamline internal data workflows and documentation.',
    ],
  },
]

export type SkillRow = { label: string; value: string }

export const skills: SkillRow[] = [
  {
    label: 'frontend',
    value:
      'React.js, React Router, Context API, custom hooks, TanStack Query, React Hook Form, Tailwind CSS, Vite, code splitting & lazy loading',
  },
  {
    label: 'backend',
    value:
      'Node.js, Express.js, MySQL, RESTful APIs, JWT auth, role-based access control, MVC architecture, singleton DB pattern',
  },
  {
    label: 'cloud & devops',
    value:
      'Google Cloud Platform — Cloud Run, Compute Engine, Cloud SQL, Cloud Storage, Secret Manager, Cloud Scheduler; Docker; Firebase; AWS S3; Cloudflare CDN; GitHub Actions CI/CD',
  },
  {
    label: 'ai & ml',
    value:
      'Retrieval-Augmented Generation (RAG), LLM API integration (OpenAI / Anthropic / Gemini), AI-assisted development',
  },
  {
    label: 'tooling',
    value: 'Postman, Chrome DevTools, Jest, Git & GitHub, Microsoft Graph API, ESLint, Prettier',
  },
]

export type Project = {
  code: string
  name: string
  description: string
  tags: string[]
  status: string
  isPrivate?: boolean
}

export const projects: Project[] = [
  {
    code: 'PLATFORM / 001',
    name: 'Comutoo',
    description:
      'Transport booking & billing management system for corporate clients — bookings, dispatch, invoicing and payroll in one platform, built and run solo.',
    tags: ['React.js', 'Node.js', 'MySQL', 'GCP', 'Firebase'],
    status: 'private — internal B2B platform',
    isPrivate: true,
  },
  {
    code: 'PROJECT / 002',
    name: 'AI-powered contextual chatbot',
    description:
      'An assistant built on a Retrieval-Augmented Generation pipeline — indexes unstructured documents as dense vector embeddings and answers against them with streamed, context-accurate responses.',
    tags: ['Node.js', 'Express', 'React.js', 'Gemini API'],
    status: 'in progress',
  },
  {
    code: 'PROJECT / 003',
    name: 'Corporate transport website',
    description:
      'A production static site — designed the UI and configured the full hosting pipeline myself, from S3 bucket to CDN to deploy.',
    tags: ['JavaScript', 'AWS S3', 'Cloudflare CDN', 'GitHub Actions'],
    status: 'shipped',
  },
]

export type EduRow = { name: string; sub: string }

export const education: EduRow[] = [
  { name: 'Master of Computer Applications (MCA)', sub: 'Andhra University, Distance Learning — 2025–2027 (expected)' },
  { name: "Bachelor's Degree", sub: 'Pune University — 2019–2023 · CGPA 8.03/10' },
]
