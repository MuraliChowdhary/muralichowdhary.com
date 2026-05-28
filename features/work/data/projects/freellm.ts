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
  githubUrl: "https://github.com/MuraliChowdhary//freellm",
  thumbnail: "/work/freellm.png",
  problem:
    "Every free LLM tier rate-limits you within an hour of real use. Groq gives 30 RPM, Gemini gives 15, Mistral gives 1. To ship anything you end up juggling 4 SDKs, 4 sets of keys, and 4 different error shapes. Switch providers and your client code changes. Hit a 429 and your app stops. Nobody wants to write that plumbing again.",
  whatIBuilt:
    "An Express gateway that speaks the OpenAI Chat Completions API and routes requests across Groq, Gemini, Mistral, Cerebras, OpenRouter, and Ollama. Three virtual models (free-fast, free-smart, free) pick the right backend automatically. Per-provider circuit breakers with CLOSED/OPEN/HALF-OPEN states absorb 429s and 5xx without surfacing them. Multi-key rotation per provider multiplies free quota linearly. SHA-256 response cache cuts repeat-prompt cost to zero. Token usage tracked per provider on a rolling 24h window and surfaced in a React dashboard. Ships as a pnpm monorepo with the gateway, the dashboard, and an Astro Starlight docs site. MIT licensed, deploys to Vercel in 2 minutes.",
  features: [
    {
      title: "OpenAI-Compatible Gateway",
      description:
        "Speaks the full Chat Completions API spec: streaming, function calling, JSON mode, system prompts, and multi-turn. Existing OpenAI clients work with a one-line baseURL change. No SDK swap needed.",
    },
    {
      title: "Virtual Model Routing",
      description:
        "Three virtual models (free-fast, free-smart, free) abstract away provider choice. free-fast routes to Groq first for sub-100ms latency. free-smart routes to Gemini for reasoning tasks. free picks the cheapest available provider. Routing logic is a priority queue with fallback chains.",
    },
    {
      title: "Circuit Breaker Resilience",
      description:
        "Each provider has an independent circuit breaker with CLOSED/OPEN/HALF-OPEN states. After 5 consecutive errors, the circuit opens for 30 seconds. A background health checker probes the HALF-OPEN state every 10 seconds. Failed requests never surface to the client.",
    },
    {
      title: "Multi-Key Rotation",
      description:
        "Each provider accepts up to 10 API keys. The router round-robins across keys per request, multiplying free quota linearly. Groq at 30 RPM with 3 keys becomes 90 RPM. Key health is tracked independently so a dead key is skipped automatically.",
    },
    {
      title: "SHA-256 Response Cache",
      description:
        "Identical prompts hash to the same SHA-256 key and return the cached response in under 1ms. Cache TTL is configurable per model. Streaming responses are cached as chunked arrays and replayed identically. Cuts repeat-prompt cost to zero for deterministic workloads.",
    },
  ],
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
