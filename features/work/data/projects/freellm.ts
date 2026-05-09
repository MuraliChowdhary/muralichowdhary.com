import type { WorkProject } from "../../types/project"

export const freellm: WorkProject = {
  slug: "freellm",
  title: "FreeLLM",
  status: "shipped",
  oneLiner:
    "OpenAI-compatible gateway that pools 6 free LLM tiers into one endpoint. Multi-key rotation, circuit breakers, response cache.",
  role: "Solo Builder",
  company: "Side Project",
  period: "2026",
  liveUrl: "https://freellms.vercel.app",
  githubUrl: "https://github.com/Devansh-365/freellm",
  thumbnail: "/work/freellm.png",
  problem:
    "Every free LLM tier rate-limits you within an hour of real use. Groq gives 30 RPM, Gemini gives 15, Mistral gives 1. To ship anything you end up juggling 4 SDKs, 4 sets of keys, and 4 different error shapes. Switch providers and your client code changes. Hit a 429 and your app stops. Nobody wants to write that plumbing again.",
  whatIBuilt:
    "An Express gateway that speaks the OpenAI Chat Completions API and routes requests across Groq, Gemini, Mistral, Cerebras, OpenRouter, and Ollama. Three virtual models (free-fast, free-smart, free) pick the right backend automatically. Per-provider circuit breakers with CLOSED/OPEN/HALF-OPEN states absorb 429s and 5xx without surfacing them. Multi-key rotation per provider multiplies free quota linearly. SHA-256 response cache cuts repeat-prompt cost to zero. Token usage tracked per provider on a rolling 24h window and surfaced in a React dashboard. Ships as a pnpm monorepo with the gateway, the dashboard, and an Astro Starlight docs site. MIT licensed, deploys to Vercel in 2 minutes.",
  stats: [
    { label: "Providers", value: "6" },
    { label: "Free Capacity", value: "~360 RPM" },
    { label: "Cache Layer", value: "SHA-256" },
    { label: "Cost", value: "$0" },
  ],
  tech: [
    "TypeScript",
    "Express 5",
    "Node.js 22",
    "React",
    "Vite",
    "Tailwind CSS",
    "Astro Starlight",
    "Zod",
    "Docker",
  ],
  architectureImage: "freellm-architecture.png",
}
