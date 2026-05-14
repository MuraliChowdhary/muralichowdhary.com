// Maps project.tech strings → Simple Icons slugs (https://simpleicons.org)
// If a tech name has no entry here, the tag renders text-only (no icon)
// We force /000000 (black) in the URL so dark:invert reliably flips them white
const TECH_ICON_MAP: Record<string, string> = {
  // Languages
  "TypeScript": "typescript",
  "JavaScript": "javascript",
  "Python": "python",
  "Swift": "swift",
  "Swift 6": "swift",
  "Rust": "rust",
  "Go": "go",

  // Frontend frameworks
  "React": "react",
  "Next.js": "nextdotjs",
  "Preact": "preact",
  "React Native": "react",
  "Expo": "expo",
  "Vue": "vuedotjs",
  "Svelte": "svelte",
  "Astro": "astro",
  "Astro Starlight": "astro",
  "Vite": "vite",

  // Styling
  "Tailwind CSS": "tailwindcss",
  "shadcn/ui": "shadcnui",
  "NativeWind": "tailwindcss",

  // Backend / Runtime
  "Node.js": "nodedotjs",
  "Node.js 22": "nodedotjs",
  "NestJS": "nestjs",
  "Express": "express",
  "Express 5": "express",
  "Hono": "hono",
  "Bun": "bun",
  "tRPC": "trpc",
  "GraphQL": "graphql",

  // State / Data fetching
  "Redux Toolkit": "redux",
  "React Query": "reactquery",

  // Build tools
  "Turborepo": "turborepo",
  "Biome": "biomejs",
  "Zod": "zod",
  "npm": "npm",

  // Databases / ORMs
  "PostgreSQL": "postgresql",
  "MongoDB": "mongodb",
  "Redis": "redis",
  "Redis Streams": "redis",
  "Prisma": "prisma",
  "Drizzle": "drizzle",
  "Drizzle ORM": "drizzle",
  "Supabase": "supabase",
  "Firebase": "firebase",
  "Pinecone": "pinecone",
  "Neon Postgres": "neon",
  "NeonDB": "neon",
  "Upstash": "upstash",
  "Upstash Redis": "upstash",
  "Convex": "convex",

  // AI / ML
  "OpenAI": "openai",
  "Anthropic": "anthropic",
  "Claude API": "anthropic",
  "Claude Sonnet": "anthropic",
  "Gemini 2.5 Flash": "googlegemini",
  "Groq Llama 3.3": "groq",
  "DeepSeek": "deepseek",
  "LangChain": "langchain",
  "Vercel AI SDK": "vercel",
  "OpenRouter": "openrouter",
  "ElevenLabs ConvAI": "elevenlabs",

  // Testing / Automation
  "Playwright": "playwright",
  "Puppeteer": "puppeteer",

  // Real-time / Comms
  "Socket.io": "socketdotio",

  // Platform / Infra
  "Docker": "docker",
  "Vercel": "vercel",
  "AWS": "amazonaws",
  "Cloudflare": "cloudflare",
  "Stripe": "stripe",
  "Razorpay": "razorpay",
  "Clerk": "clerk",
  "Git": "git",
  "GitHub": "github",

  // Google services
  "Google Maps": "googlemaps",
  "Google Maps API": "googlemaps",
  "Google Sheets API": "googlesheets",
  "Google Embeddings": "google",

  // CMS / Content
  "Strapi CMS": "strapi",
  "Tiptap": "tiptap",

  // Browser
  "Chrome MV3": "googlechrome",

  // Design / Analytics
  "Figma": "figma",
  "PostHog": "posthog",

  // Apple ecosystem
  "SwiftUI": "swift",
  "macOS": "apple",
  "iOS": "apple",
}

export function getTechIconUrl(tech: string): string | null {
  const slug = TECH_ICON_MAP[tech]
  if (!slug) return null
  // Force black fill so dark:invert CSS reliably flips to white in dark mode
  return `https://cdn.simpleicons.org/${slug}/000000`
}
