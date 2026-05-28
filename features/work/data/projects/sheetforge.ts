import type { WorkProject } from "../../types/project"

export const sheetforge: WorkProject = {
  slug: "sheetforge",
  title: "sheetforge",
  status: "in-progress",
  oneLiner:
    "Google Sheets as a real backend. Serialized writes, idempotent retries, typed TypeScript SDKs generated live from your sheet's headers.",
  role: "Solo Builder",
  company: "Side Project",
  period: "2026",
  githubUrl: "https://github.com/MuraliChowdhary//sheetforge",
  highlights: [
    "Per-sheet write queue with Postgres advisory-lock fencing turns Google Sheets into a serializable backend. 50 parallel POSTs land as 50 ordered rows, every time.",
    "Idempotency via partial unique index on (sheet_id, idempotency_key). Network flakes never double-write.",
    "Typed TypeScript SDK generated live from the sheet's header row. Literal unions inferred from sample cells. Compiler catches drift when you rename a column.",
    "Upstash REST adapter written alongside the ioredis one so the same code runs on Cloudflare Workers later. Core packages ship MIT, npm-publishable.",
  ],
  problem:
    "Google Sheets is the default backend for indie MVPs. Fast to iterate, free to host, shareable by link. Except the Sheets API has a documented concurrency bug: two parallel values.append calls can resolve to the same target row and one silently overwrites the other. Four POSTs, three rows. Every 'Sheets as a backend' wrapper on the market (SheetDB, Sheety, NoCodeAPI) forwards your request straight to the broken primitive and inherits the bug. Fine for a demo. Not fine when your signup form catches an HN spike.",
  whatIBuilt:
    "A per-sheet write queue with Postgres-advisory-lock fencing. Every write goes through submitWrite, which inserts a ledger row (partial unique index on sheet plus idempotency key so retries dedupe) and pushes to the sheet's Redis stream. The processor takes a Postgres advisory lock keyed by the stream, runs the handler inside a transaction, and acks Redis only after commit. Crash mid-handler, the transaction rolls back, Redis redelivers the message, the idempotency key catches the replay. No token protocol. No lease clock skew. The second half of the product generates a typed TypeScript SDK from the sheet's header row: literal unions inferred from sample cells, compile-time drift detection when you rename a column. On top sits a Next.js 15 dashboard with Google OAuth, an Upstash REST adapter so the same code runs on Cloudflare Workers later, and a public 'slam 50 parallel writes' demo on the landing page that paints a 50-tile grid as writes land. Core packages (queue, codegen, sdk-ts) ship under MIT once the V0 concurrency acceptance demo passes.",
  features: [
    {
      title: "Per-Sheet Write Queue",
      description:
        "Every Google Sheet gets its own Redis stream and Postgres advisory lock. Writes are ordered by stream position and processed serially per sheet. 50 parallel POSTs to the same sheet land as 50 ordered rows with zero drops. The lock is advisory, not a table lock, so other sheets process concurrently.",
    },
    {
      title: "Idempotency by Design",
      description:
        "Each write carries an idempotency key. A partial unique index on (sheet_id, idempotency_key) prevents duplicates. Network flakes, retries, and redeliveries all resolve to a single row. The ledger table tracks every attempt so you can audit what happened.",
    },
    {
      title: "Typed SDK Generation",
      description:
        "Reads the sheet's header row and generates a TypeScript SDK with literal unions inferred from sample cells. Rename a column and the SDK type changes at compile time. Zod schemas are generated alongside types for runtime validation. The SDK handles auth, batching, and error handling.",
    },
    {
      title: "Crash-Safe Processing",
      description:
        "The processor runs inside a Postgres transaction. If the handler crashes mid-write, the transaction rolls back and Redis redelivers the message. The idempotency key catches the replay and deduplicates. No messages are lost, no rows are partially written, no manual recovery needed.",
    },
  ],
  stats: [
    { label: "Parallel Writes", value: "50 ordered" },
    { label: "Row Drops", value: "0" },
    { label: "OSS Packages", value: "MIT" },
    { label: "Self-host", value: "60s" },
  ],
  tech: [
    "TypeScript",
    "Next.js",
    "Hono",
    "PostgreSQL",
    "Drizzle ORM",
    "Redis Streams",
    "Upstash",
    "Zod",
    "Turborepo",
    "Biome",
    "Google Sheets API",
  ],
}
