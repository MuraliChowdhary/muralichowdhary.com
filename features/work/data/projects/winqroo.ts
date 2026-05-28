import type { WorkProject } from "../../types/project"

export const winqroo: WorkProject = {
  slug: "winqroo",
  title: "Winqroo",
  featured: true,
  status: "shipped",
  thumbnail: "/work/winqroo.png",
  thumbnailType: "banner",

  oneLiner:
    "Influencer collaboration platform connecting brands and creators through intelligent discovery, search, and campaign workflows.",

  role: "Full-Stack Developer",
  company: "Winqroo",
  period: "Feb 2025 to June 2025",

  highlights: [
    "Built an end-to-end influencer collaboration platform enabling seamless brand–creator partnerships",
    "Reduced API response times from 1.2s to 200ms through PostgreSQL query optimization, indexing, and caching",
    "Improved niche-based creator discovery with Elasticsearch analyzers, increasing search precision by 70%",
    "Reduced search query latency by 65% through relevance tuning and optimized search pipelines",
  ],

  problem:
    "Brands struggle to discover relevant creators while influencers lack efficient ways to connect with sponsorship opportunities. Existing workflows are fragmented, making creator discovery, niche matching, and collaboration management slow and inefficient.",

  whatIBuilt:
    "Built a full-stack influencer collaboration platform that enabled brands and creators to discover, connect, and collaborate efficiently. Designed scalable REST APIs, optimized PostgreSQL queries for high-performance data access, and integrated Elasticsearch-powered niche discovery to improve creator matching, search precision, and platform responsiveness.",

  features: [
    {
      title: "Brand & Creator Collaboration",
      description:
        "Built workflows enabling brands to discover creators, manage partnerships, and streamline influencer collaboration across campaigns.",
    },
    {
      title: "High-Performance API System",
      description:
        "Designed secure REST APIs and optimized backend performance using PostgreSQL indexing, query tuning, and caching strategies, reducing response times from 1.2s to 200ms.",
    },
    {
      title: "Elasticsearch Niche Discovery",
      description:
        "Implemented niche-mapping search with custom analyzers and relevance tuning to improve creator discovery accuracy and reduce query latency.",
    },
    {
      title: "Search & Discovery Optimization",
      description:
        "Enabled advanced creator filtering, keyword-based search, and ranking systems for better influencer recommendations and campaign matching.",
    },
  ],
  liveUrl: "https://winqroo.vercel.app/",

  stats: [
    { label: "API Latency", value: "200ms" },
    { label: "Search Precision", value: "+70%" },
    { label: "Query Latency", value: "-65%" },
    { label: "Platform Type", value: "Influencer SaaS" },
  ],

  tech: [
    "Next.js",
    "Node.js",
    "PostgreSQL",
    "Elasticsearch",
    "REST APIs",
    "Tailwind CSS",
    "Redis",
    "GCP",
    "Docker",
    "Git"
  ],

  // architectureImage: "winqroo-architecture.jpeg",
}
