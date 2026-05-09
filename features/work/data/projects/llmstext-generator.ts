import type { WorkProject } from "../../types/project"

export const llmstextGenerator: WorkProject = {
  slug: "llmstext-generator",
  title: "llms.txt Generator",
  status: "shipped",
  oneLiner:
    "Generate structured llms.txt files from any website. Enter a URL, get LLM-ready content. Open source.",
  role: "Solo Builder",
  company: "Side Project",
  period: "2025",
  githubUrl: "https://github.com/Devansh-365/llmstext",
  highlights: [
    "Crawls up to 20 pages via Firecrawl and produces both llms.txt (concise index) and llms-full.txt (full markdown content) in a single run",
    "Real-time crawl progress streams to the browser via Server-Sent Events, rendered in a terminal-style UI so you can watch pages arrive as they are processed",
    "Zero server-side storage: the API key never leaves the request, output files are generated in memory and delivered directly as downloads",
  ],
  problem:
    "The llms.txt standard gives AI crawlers a structured entry point into your site, but creating one manually means reading every page, writing summaries, and formatting them to spec. For a 20-page site that is two to three hours of work most developers skip entirely. Existing generators either cover only the homepage or produce unstructured dumps that defeat the purpose of the standard.",
  whatIBuilt:
    "A single-page tool built on React and Hono where you paste a URL and get two standards-compliant files back. The Hono backend accepts the URL and a Firecrawl API key, then walks up to 20 pages of the site, respecting internal link structure. As each page is processed, a progress event streams back over SSE and renders in a terminal-style log in the UI so you can see exactly which pages were crawled and which were skipped. The first output file, llms.txt, is a concise index: one entry per page with the title, URL, and a short description extracted from the page content. The second, llms-full.txt, contains the complete cleaned markdown body of every crawled page, formatted so an LLM can ingest the entire site in a single context window. Nothing is stored server-side. The Firecrawl key is passed per-request and never persisted. Both files download immediately after crawling completes. The frontend is Vite with shadcn/ui components and Tailwind. MIT licensed.",
  stats: [
    { label: "Pages Crawled", value: "20" },
    { label: "Output Files", value: "2" },
    { label: "Streaming", value: "SSE" },
    { label: "Storage", value: "Zero" },
  ],
  tech: [
    "React",
    "TypeScript",
    "Vite",
    "Hono",
    "Firecrawl",
    "Tailwind CSS",
    "shadcn/ui",
  ],
}
