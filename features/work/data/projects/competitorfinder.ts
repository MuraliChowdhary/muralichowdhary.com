import type { WorkProject } from "../../types/project"

export const competitorfinder: WorkProject = {
  slug: "competitorfinder",
  title: "CompetitorFinder",
  status: "shipped",
  oneLiner:
    "Find competitors for any business across JustDial, IndiaMART, and Google Maps. AI-generated search queries, parallel scraping, export to Excel.",
  role: "Solo Builder",
  company: "Side Project",
  period: "2025",
  githubUrl: "https://github.com/Devansh-365/competitorfinder",
  highlights: [
    "AI generates targeted search queries per platform so scraping starts from relevant category pages, not a generic keyword dump",
    "Puppeteer and Playwright run against all 3 platforms in parallel with anti-detection headers, pulling 10+ fields per listing automatically",
    "Bulk Excel import lets you queue an entire lead list at once; results export back to Excel or push directly to Google Sheets",
  ],
  problem:
    "Sales teams and founders waste hours manually searching JustDial, IndiaMART, and Google Maps to find competitors. Copy-pasting business names, phone numbers, and addresses into spreadsheets takes a full afternoon for one market segment. Three platforms, three different UIs, zero automation, and the data ages out before the sheet is finished.",
  whatIBuilt:
    "A competitor research tool that takes a company name and business category, uses OpenAI to generate platform-specific search queries for each of the three directories, then fans out Puppeteer and Playwright scrapers in parallel. Each scraper handles session management, scrolling, and anti-detection headers independently. For every listing it finds, the tool extracts business name, phone number, email, address, GST number, product categories, and ratings. Ten fields per result, automatically. Supabase persists the results so you can revisit past searches without re-scraping. Bulk import from Excel lets you queue an entire list of target businesses at once. Results export to Excel or push to Google Sheets via the Sheets API. The AI query layer is the part that makes the scraping actually useful: instead of searching the same keyword across every platform, it generates queries tuned to how each directory categorizes businesses, which meaningfully improves match quality.",
  stats: [
    { label: "Data Sources", value: "3" },
    { label: "Fields Extracted", value: "10+" },
    { label: "Scraping", value: "Parallel" },
    { label: "Export", value: "Excel" },
  ],
  tech: [
    "Next.js",
    "TypeScript",
    "Supabase",
    "OpenAI",
    "Puppeteer",
    "Playwright",
    "Vercel AI SDK",
  ],
}
