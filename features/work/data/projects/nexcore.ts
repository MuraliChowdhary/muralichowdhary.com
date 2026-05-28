import { WorkProject } from "../../types/project";

export const nexcore: WorkProject = {
  slug: "nexcore",
  title: "NexCore",
  featured: true,
  status: "shipped",
  thumbnail: "/work/nexcore.png",
  architectureImage: "nexcore-architecture.png",
  oneLiner:
    "Developer collaboration platform for finding teammates, managing projects, and shipping together through intelligent matching, real-time collaboration, and microservice-driven architecture.",

  role: "Product Engineer",
  company: "Side Project",
  period: "2026",
  liveUrl: "https://nexcore.app",
  githubUrl: "https://github.com/MuraliChowdhary/nexcore",

  highlights: [
    "Designed a modular microservice architecture with Bun runtime, separating auth, project management, messaging, notifications, matching, and task orchestration for independent scaling",
    "Built real-time collaboration system with channels, instant messaging, presence indicators, and event-driven notifications for frictionless teamwork",
    "Implemented skill-based project matching engine connecting developers to relevant teams using profile signals, skills, and project intent",
    "Unified collaboration workflows — replacing fragmented tooling across Discord, LinkedIn, GitHub, and project boards into one developer-first workspace",
  ],

  features: [
    {
      title: "Smart Project Discovery & Matching",
      description:
        "Developers discover projects and teammates using skill-based matching powered by profile signals, project metadata, collaboration intent, and role compatibility scoring.",
    },
    {
      title: "Microservice Architecture",
      description:
        "System decomposed into dedicated services: Auth Service, Project Service, Matching Service, Task Service, Messaging Service, Notification Service, Presence Service, and Analytics Service. Each service owns its domain boundaries for independent scaling and maintainability.",
    },
    {
      title: "Real-Time Collaboration Workspace",
      description:
        "Built Slack-style team collaboration with real-time channels, threaded messaging, typing indicators, online presence, and workspace communication optimized for developer teams shipping products together.",
    },
    {
      title: "Project & Sprint Management",
      description:
        "Integrated project boards, sprint tracking, task ownership, progress monitoring, milestones, and team coordination workflows directly into the collaboration layer.",
    },
    {
      title: "Authentication & Identity",
      description:
        "Dedicated Auth Service supporting secure JWT sessions, OAuth providers, role-based permissions, workspace membership isolation, and session management across services.",
    },
    {
      title: "Notifications & Event Processing",
      description:
        "Event-driven notification system handling invites, mentions, task updates, sprint events, collaborator requests, and workspace activity with asynchronous delivery.",
    },
    {
      title: "Developer Ecosystem",
      description:
        "Unified workspace replacing fragmented context switching between GitHub, Discord, LinkedIn, project trackers, and messaging apps into a single developer productivity platform.",
    },
  ],

  problem:
    "Building software with strangers is fragmented. Developers discover collaborators on LinkedIn, communicate through Discord, manage tasks elsewhere, and share repositories on GitHub. Teams spend more time context switching than shipping. Existing tools solve communication, networking, or project management independently — but not collaborative product building as a unified workflow.",

  whatIBuilt:
    "A developer-first collaboration platform designed to streamline idea-to-product execution. Built a modular microservice system powered by Bun runtime and Next.js where developers discover projects, match with teammates, communicate in real-time, and manage execution inside a unified workspace. Architected dedicated services for authentication, project management, messaging, notifications, matching, tasks, analytics, and presence. Real-time collaboration supports team channels, sprint coordination, task ownership, file sharing, and instant updates while maintaining clean domain boundaries for scalability and future extraction.",

  stats: [
    { label: "Architecture", value: "Microservices" },
    { label: "Core Services", value: "8+" },
    { label: "Runtime", value: "Bun" },
    { label: "Collaboration", value: "Real-Time" },
    { label: "Authentication", value: "JWT + OAuth" },
    { label: "Communication", value: "Channels + Messaging" },
    { label: "Matching", value: "Skill-Based" },
  ],

  tech: [
    "Next.js",
    "TypeScript",
    "Bun",
    "Node.js",
    "PostgreSQL",
    "Redis",
    "Prisma ORM",
    "WebSockets",
    "JWT",
    "OAuth",
    "Docker",
    "REST API",
    "Tailwind CSS",
    "shadcn/ui",
  ],
}