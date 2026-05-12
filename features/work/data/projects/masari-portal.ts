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
  features: [
    {
      title: "Announcement Canvas Creator",
      description:
        "Comms staff pick from 6 templates, set dimensions, write bilingual Arabic/English content in a rich text editor (Tiptap), and export to PNG for digital signage or email. Templates include event posters, policy updates, achievement announcements, and holiday notices. All exports are retina-ready at 2x resolution.",
    },
    {
      title: "Document Management",
      description:
        "In-browser PDF viewer with search, zoom, and annotation. Documents are organized by department and access level. Version history tracks who uploaded what and when. Microsoft ADFS SSO integration means employees access documents with their existing corporate credentials. Local fallback auth for contractors without AD accounts.",
    },
    {
      title: "Onboarding & Compliance",
      description:
        "Multi-step onboarding flow: personal info, department assignment, asset allocation, compliance acknowledgments, and training schedule. Compliance tracking shows which employees have signed which policies and flags overdue acknowledgments. Managers get a dashboard view of their team's compliance status.",
    },
    {
      title: "Notification System",
      description:
        "Infinite scroll notification feed with category filters (announcements, tasks, alerts). Real-time updates via WebSocket push. Notification preferences let users choose which categories trigger push, email, or in-app badges. Unread count persists across sessions.",
    },
  ],
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
