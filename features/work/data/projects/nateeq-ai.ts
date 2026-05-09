import type { WorkProject } from "../../types/project"

export const nateeqAi: WorkProject = {
  slug: "nateeq-ai",
  title: "Nateeq AI",
  featured: true,
  status: "shipped",
  thumbnail: "/work/nateeqai.png",
  oneLiner:
    "White-label platform for deploying branded AI voice assistants. Multi-tenant SaaS with embeddable widgets.",
  role: "Lead Engineer",
  company: "OSIT",
  period: "Nov 2025 to Jan 2026",
  highlights: [
    "Took the platform from infrastructure to a shippable product in 6 weeks",
    "One-line embed code with API key auth reduced tenant time-to-deploy from 'hire a developer' to copy-paste",
    "Built AI lead extraction module that turned voice conversations from a cost center into a revenue driver",
    "Schema-per-tenant data isolation with cross-domain CORS for subdomain-per-tenant routing",
  ],
  problem:
    "ElevenLabs sells a powerful voice AI API. But APIs don't sell to business buyers. A Saudi IT company needed to resell AI voice assistants to GCC enterprises. ElevenLabs gives you agent creation and conversation endpoints. It does not give you multi-tenant isolation, embed code generation, lead extraction, billing, branding, or Arabic support.",
  whatIBuilt:
    "Took the platform from infrastructure to a shippable product in 6 weeks. Tenants create agents, test with live voice, generate a one-line embed code, deploy on any website, and see extracted leads in a dashboard. Built the ElevenLabs integration layer, widget embedding with cross-domain CORS, AI-powered lead extraction that turns voice conversations into a lead gen tool, and the admin console with RTL. Schema-per-tenant data isolation.",
  stats: [
    { label: "Built In", value: "6 weeks" },
    { label: "Architecture", value: "Monorepo" },
    { label: "Tenancy", value: "Schema-per-tenant" },
    { label: "Embed Code", value: "1 line" },
  ],
  tech: [
    "NestJS",
    "Next.js",
    "Prisma",
    "PostgreSQL",
    "pgvector",
    "ElevenLabs ConvAI",
    "Turborepo",
    "RBAC",
  ],
  architectureImage: "nateeq-ai-architecture.jpeg",
}
