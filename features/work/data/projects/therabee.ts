import { WorkProject } from "../../types/project";

export const therabee: WorkProject = {
  slug: "therabee",
  title: "Therabee",
  featured: true,
  status: "ended",
  thumbnail: "/work/therabee.png",
  oneLiner:
    "Recurring scheduling and virtual session platform for consultations. Eliminated ~96% unnecessary writes by redesigning scheduling from eager generation to intent-driven session creation.",
  role: "Full Stack Engineer",
  company: "Therabee",
  period: "2025",

  highlights: [
    "Eliminated ~96% redundant database writes by redesigning recurring scheduling logic",
    "Reduced booking latency through just-in-time session generation instead of pre-populating months of records",
    "Automated Zoom meeting lifecycle with resilient API + webhook orchestration",
    "Built scalable recurring booking architecture supporting cancellations, pauses, and reschedules without data explosion",
  ],

  features: [
    {
      title: "Recurring Scheduling Engine",
      description:
        "Built a rule-based recurring scheduling system where a single recurrence rule dynamically generates sessions when needed rather than pre-creating months of future records.",
    },
    {
      title: "Automated Virtual Session Coordination",
      description:
        "Integrated Zoom APIs and webhooks for automatic meeting creation, lifecycle updates, and session coordination without manual intervention.",
    },
    {
      title: "Booking & Session Lifecycle",
      description:
        "Designed booking flows supporting recurring appointments, rescheduling, cancellations, pauses, and dynamic state transitions with minimal operational overhead.",
    },
    {
      title: "Async Processing & Reliability",
      description:
        "Redis-backed background jobs orchestrated session generation, retries, and asynchronous coordination to keep booking experiences fast and resilient.",
    },
    {
      title: "Scalable Data Modeling",
      description:
        "Separated booking intent from generated session state to prevent database bloat and simplify long-term maintainability as scheduling volume increased.",
    },
  ],

  liveUrl: "https://therabee.in",
  problem:
    "Recurring scheduling systems often scale poorly because they treat intent as completed state. A single recurring booking generated dozens of sessions, slots, and Zoom placeholders upfront — even when those sessions might never happen. This created unnecessary writes, database growth, slower booking flows, and operational complexity for rescheduling and cancellations.",

  whatIBuilt:
    "Designed and engineered a production-ready recurring scheduling platform for virtual consultations. Instead of pre-generating future sessions, I introduced an intent-driven scheduling model that stores a recurring rule and dynamically generates sessions only when required. Integrated Zoom APIs for automated meeting coordination, Redis-backed job queues for asynchronous workflows, and PostgreSQL-backed relational modeling for bookings, sessions, and lifecycle management. Built resilient flows for recurring bookings, cancellations, pauses, rescheduling, and session automation while significantly reducing infrastructure overhead.",

  stats: [
    { label: "Database Write Reduction", value: "~96%" },
    { label: "Booking Model", value: "Intent-Driven" },
    { label: "Session Generation", value: "Just-In-Time" },
    { label: "Meeting Automation", value: "Zoom API" },
    { label: "Processing Model", value: "Async Jobs" },
    { label: "Scalability", value: "Production Ready" },
  ],

  tech: [
    "Next.js",
    "TypeScript",
    "Node.js",
    "PostgreSQL",
    "Redis",
    "BullMQ",
    "Zoom API",
    "JWT",
    "REST API",
    "Webhooks",
    "Prisma ORM",
  ],
}