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
  features: [
    {
      title: "AI Query Generation",
      description:
        "OpenAI generates platform-specific search queries for each directory. JustDial gets category + locality queries. IndiaMART gets product + B2B focus. Google Maps gets service + near me. This means match quality is higher than generic keyword searches because the query is tuned to how each platform indexes listings.",
    },
    {
      title: "Parallel Scraping Engine",
      description:
        "Puppeteer and Playwright run against all three platforms concurrently. Each scraper manages its own session, handles pagination via scroll simulation, and rotates anti-detection headers. Results stream back via WebSocket so you see listings appear in real time as each scraper finishes.",
    },
    {
      title: "10-Field Extraction",
      description:
        "For every listing found, the tool extracts: business name, phone number, email, address, GST number, product categories, ratings, review count, years in business, and website URL. All fields are validated against regex patterns. Phone numbers are normalized to +91 format. Addresses are parsed into structured components.",
    },
    {
      title: "Bulk Import & Export",
      description:
        "Upload an Excel file with company names and categories. The system queues each row and processes them in parallel batches of 10. Results export back to Excel with the original columns plus all extracted fields. Or push directly to Google Sheets via the Sheets API for live collaboration.",
    },
  ],
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
