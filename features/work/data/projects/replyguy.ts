import type { WorkProject } from "../../types/project"

export const replyguy: WorkProject = {
  slug: "replyguy",
  title: "ReplyGuy",
  status: "shipped",
  featured: true,
  oneLiner:
    "Chrome extension that scores every tweet in your feed, generates strategic replies using 6 named engagement strategies, and writes in your voice.",
  role: "Solo Builder",
  company: "Side Project",
  period: "2026",
  githubUrl: "https://github.com/Devansh-365/replyguy",
  problem:
    "Generic reply tools dump AI text into a tweet box and call it done. You still have to scroll through your entire feed to find which tweets are worth engaging with, decide what angle to take, and fix the reply so it doesn't sound like a chatbot. Most tools give you a tone slider. None of them tell you where to spend your time.",
  whatIBuilt:
    "A Chrome extension (MV3, Preact, Shadow DOM) that runs entirely inside X as you scroll. Every tweet gets a 0-100 score in real time based on four factors: freshness (35%), reply gap — views vs replies ratio (30%), ICP keyword match (20%), and velocity (15%). High-scoring tweets get a green border so you know where to focus without opening anything. Click the lightning bolt on any tweet, pick one of six named strategies — Contrarian, Question, Story, Agree and Amplify, Hot Take, Insightful — and get three replies, each one referencing something specific from the original post. Paste your best tweets once to generate a compressed voice profile; every reply after that matches your tone, vocabulary, and sentence patterns. A built-in rate guard with rolling 30m/1h/24h windows and auto-backoff keeps usage well below X's automation detection thresholds. The backend is a Vercel serverless app with NeonDB for streak tracking. Platform adapter architecture means adding a new site is one new file plus one import line.",
  stats: [
    { label: "Reply strategies", value: "6" },
    { label: "Scoring factors", value: "4" },
    { label: "Safe daily limit", value: "55 replies" },
    { label: "Auto-backoff", value: "45 min" },
  ],
  tech: [
    "TypeScript",
    "Preact",
    "Vite",
    "Chrome MV3",
    "Shadow DOM",
    "Vercel",
    "Node.js",
    "Zod",
    "NeonDB",
  ],
}
