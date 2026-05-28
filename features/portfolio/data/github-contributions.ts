import { unstable_cache } from "next/cache"

import type { Activity } from "@/components/kibo-ui/contribution-graph"

const GITHUB_USERNAME = "MuraliChowdhary"
const USER_AGENT = "http://muralichowdharyportfolio.vercel.app/"

// Most reliable source. Requires GITHUB_TOKEN env var (read-only PAT,
// public_repo scope). Authenticated requests get 5000/hr, so this
// effectively never rate-limits at portfolio traffic levels.
async function fetchFromGitHubGraphQL(): Promise<Activity[]> {
  const token = process.env.GITHUB_TOKEN
  if (!token) return []

  const res = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      "User-Agent": USER_AGENT,
    },
    body: JSON.stringify({
      query: `query($login: String!) {
        user(login: $login) {
          contributionsCollection {
            contributionCalendar {
              weeks {
                contributionDays {
                  date
                  contributionCount
                  contributionLevel
                }
              }
            }
          }
        }
      }`,
      variables: { login: GITHUB_USERNAME },
    }),
    signal: AbortSignal.timeout(7000),
  })

  if (!res.ok) return []

  const json = (await res.json()) as {
    data?: {
      user?: {
        contributionsCollection?: {
          contributionCalendar?: {
            weeks?: Array<{
              contributionDays?: Array<{
                date: string
                contributionCount: number
                contributionLevel: string
              }>
            }>
          }
        }
      }
    }
  }

  const weeks =
    json?.data?.user?.contributionsCollection?.contributionCalendar?.weeks
  if (!Array.isArray(weeks)) return []

  const levelMap: Record<string, number> = {
    NONE: 0,
    FIRST_QUARTILE: 1,
    SECOND_QUARTILE: 2,
    THIRD_QUARTILE: 3,
    FOURTH_QUARTILE: 4,
  }

  const activities: Activity[] = []
  for (const week of weeks) {
    for (const day of week.contributionDays ?? []) {
      activities.push({
        date: day.date,
        count: day.contributionCount,
        level: levelMap[day.contributionLevel] ?? 0,
      })
    }
  }
  return activities
}

async function fetchFromJogruber(): Promise<Activity[]> {
  const res = await fetch(
    `https://github-contributions-api.jogruber.de/v4/${GITHUB_USERNAME}?y=last`,
    { signal: AbortSignal.timeout(7000) }
  )
  if (!res.ok) return []
  const data = (await res.json()) as { contributions: Activity[] }
  return data.contributions || []
}

// Scrapes GitHub's own public contribution endpoint. No token required.
// GitHub renders this HTML fragment for every public profile via XHR.
async function fetchFromGitHubDirect(): Promise<Activity[]> {
  const res = await fetch(
    `https://github.com/users/${GITHUB_USERNAME}/contributions`,
    {
      headers: {
        "X-Requested-With": "XMLHttpRequest",
        "User-Agent": USER_AGENT,
      },
      signal: AbortSignal.timeout(10000),
    }
  )
  if (!res.ok) return []
  const html = await res.text()

  const activities: Activity[] = []
  const elementRegex = /<(?:td|rect)\s+([^>]*?)>/g
  for (const match of html.matchAll(elementRegex)) {
    const attrs = match[1]
    if (!attrs.includes("data-date")) continue
    const date = attrs.match(/data-date="(\d{4}-\d{2}-\d{2})"/)?.[1]
    const countStr = attrs.match(/data-count="(\d+)"/)?.[1]
    const levelStr = attrs.match(/data-level="(\d+)"/)?.[1]
    if (date && countStr !== undefined) {
      activities.push({
        date,
        count: parseInt(countStr, 10),
        level: levelStr ? parseInt(levelStr, 10) : 0,
      })
    }
  }
  return activities
}

// Throws when all sources fail so unstable_cache does NOT persist the
// empty result. Previously a single moment of upstream failure pinned
// "Unable to load contributions" for the full 24h cache TTL.
const getCachedContributions = unstable_cache(
  async (): Promise<Activity[]> => {
    try {
      const data = await fetchFromGitHubGraphQL()
      if (data.length > 0) return data
    } catch {}

    try {
      const data = await fetchFromJogruber()
      if (data.length > 0) return data
    } catch {}

    try {
      const data = await fetchFromGitHubDirect()
      if (data.length > 0) return data
    } catch {}

    throw new Error("All GitHub contribution sources failed")
  },
  ["github-contributions"],
  { revalidate: 86400 }
)

export async function getGitHubContributions(): Promise<Activity[]> {
  try {
    return await getCachedContributions()
  } catch {
    return []
  }
}
