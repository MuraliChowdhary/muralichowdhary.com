export const siteConfig = {
  // Site Info
  siteUrl: "https://www.muralichowdhary.com",
  name: "Murali Sudireddy",
  title: "Murali Sudireddy — AI Product Engineer",
  description:
    "AI product engineer. Writing about cost-optimized LLM infrastructure, multi-provider routing, and shipping AI products end to end. Available for freelance and consulting.",
  language: "en-US",
  locale: "en_US",

  // Timezone used to interpret bare YYYY-MM-DD publish dates in blog frontmatter.
  // A post with date: '2026-04-21' goes live at 00:00 in this zone, not 00:00 UTC.
  publishTimezone: "Asia/Kolkata",

  // Author Info
  author: "Murali Sudireddy",
  email: "muralisudireddy@gmail.com",
  calUrl: "https://cal.com/muralisudireddy/15min",

  // SEO & Social
  socialBanner: "/profile.png",
  siteLogo: "/profile.png",
  twitterHandle: "@MSudireddy2547",

  // Navigation
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Work",
      href: "/work",
    },
    {
      title: "Blog",
      href: "/blog",
    },
    {
      title: "Resume",
      href: "/resume",
    },
  ],

  // Social Links
  links: {
    twitter: "https://x.com/MSudireddy2547",
    github: "https://github.com/MuraliChowdhary",
  },
}

export type SiteConfig = typeof siteConfig

// Named exports for component compatibility
export const MAIN_NAV = siteConfig.mainNav

export const SITE_INFO = {
  name: siteConfig.name,
  url: siteConfig.siteUrl,
  description: siteConfig.description,
}

export const SOURCE_CODE_GITHUB_URL = siteConfig.links.github

export const UTM_PARAMS = {
  utm_source: "muralichowdhary.com",
}
