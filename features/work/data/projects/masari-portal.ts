import type { WorkProject } from "../../types/project"

export const masariPortal: WorkProject = {
  slug: "masari-portal",
  title: "Masari Employee Portal",
  status: "shipped",
  thumbnail: "/work/masari.png",
  oneLiner:
    "Bilingual intranet for a Saudi government entity. 33 pages, 1,800+ translation keys, sole frontend dev.",
  role: "Sole Frontend Developer",
  company: "OSIT / Masari",
  period: "Jun to Dec 2024",
  problem:
    "A Saudi government entity working on a Vision 2030 mega-project needed a custom portal for 500+ employees. SharePoint failed on two fronts: Arabic-first UX with proper RTL layout, and domain-specific workflows like visual announcement creation and compliance tracking.",
  whatIBuilt:
    "33 pages covering the full employee lifecycle. Announcement canvas creator where comms staff pick templates, choose dimensions, write bilingual content through a rich text editor, and export to PNG. Document management with in-browser PDF viewer. Microsoft ADFS SSO with local fallback. Multi-step onboarding flow with compliance tracking. Notification system with infinite scroll. Full Arabic/English RTL with 1,800+ translation keys.",
  stats: [
    { label: "Pages", value: "33" },
    { label: "Translation Keys", value: "1,800+" },
    { label: "Content Types", value: "8" },
    { label: "Duration", value: "6 months" },
  ],
  tech: [
    "React",
    "TypeScript",
    "Redux Toolkit",
    "Tailwind CSS",
    "shadcn/ui",
    "Strapi CMS",
    "i18next",
    "ADFS SSO",
    "Tiptap",
  ],
  architectureImage: "masari-portal-architecture.jpeg",
}
