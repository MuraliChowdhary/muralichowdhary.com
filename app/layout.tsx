import "@/styles/globals.css"

import { Metadata } from "next"

import { siteConfig } from "@/config/site"
import { fontMono, fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { Toaster } from "@/components/ui/sonner"
import { PageWrapper } from "@/components/page-wrapper"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { Spotlight } from "@/components/spotlight"
import { TailwindIndicator } from "@/components/tailwind-indicator"
import { ThemeProvider } from "@/components/theme-provider"
import { ScrollProgress } from "@/components/scroll-progress"

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Product Engineer India",
    "AI Infrastructure Engineer",
    "LLM Gateway",
    "Multi-Provider AI Routing",
    "AI Cost Optimization",
    "AI Product Engineer",
    "AI Engineer India",
    "Freelance AI Engineer",
  ],
  authors: [{ name: siteConfig.author, url: siteConfig.siteUrl }],
  creator: siteConfig.author,
  publisher: siteConfig.author,
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large" as const,
    "max-snippet": -1,
    "max-video-preview": -1,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.siteUrl,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    creator: siteConfig.twitterHandle,
    images: [`${siteConfig.siteUrl}/opengraph-image`],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/profile.png",
  },
  manifest: "/manifest.json",
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head>
          <link
            rel="alternate"
            type="text/plain"
            href="/llms.txt"
            title="LLM Context"
          />
          <link
            rel="alternate"
            type="application/rss+xml"
            href="/rss"
            title="Murali Sudireddy — RSS Feed"
          />
          {/* Plausible Analytics */}
          <script
            async
            src="https://plausible.io/js/pa-O0dfp6Ujr5y3-Y7HnFkzv.js"
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `window.plausible=window.plausible||function(){(plausible.q=plausible.q||[]).push(arguments)},plausible.init=plausible.init||function(i){plausible.o=i||{}};plausible.init()`,
            }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "WebSite",
                "@id": "https://www.muralichowdhary.vercel.app/#website",
                url: "https://www.muralichowdhary.vercel.app",
                name: "Murali Sudireddy",
                description: siteConfig.description,
                publisher: { "@id": "https://www.muralichowdhary.vercel.app/#person" },
                inLanguage: "en-US",
              }),
            }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Person",
                "@id": "https://www.muralichowdhary.vercel.app/#person",
                name: "Murali Sudireddy",
                givenName: "Murali",
                familyName: "Sudireddy",
                url: "https://www.muralichowdhary.vercel.app",
                mainEntityOfPage: "https://www.muralichowdhary.vercel.app/about",
                image: "https://www.muralichowdhary.vercel.app/profile.png",
                jobTitle: "Software Engineer",
                description:
                  "AI product engineer focused on cost-optimized LLM infrastructure, multi-provider routing, and shipping AI products end to end. NextLeap PM Fellowship graduate. Available for freelance and consulting.",
                email: "mailto:muralisudireddy@gmail.com",
                telephone: "+919285555222",
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Warangal Telangana",
                  addressCountry: "IN",
                },
                alumniOf: {
                  "@type": "CollegeOrUniversity",
                  name: "CVR COLLEGE OF ENGINEERING",
                  sameAs: "https://cvr.ac.in/",
                },
                sameAs: [
                  "https://github.com/MuraliChowdhary",
                  "https://www.linkedin.com/in/sudireddy-murali-05a10b277/",
                  "https://x.com/MSudireddy2547",
                  "https://medium.com/@muralisudireddy0",
                  "https://dev.to/muralisudireddy",
                  "https://hashnode.com/@MuraliChowdhary",
                  "https://www.indiehackers.com/muralisudireddy",
                  "https://www.producthunt.com/@murali_sudireddy",
                  "https://peerlist.io/muralisudireddy",
                  "https://apify.com/muralisudireddy",
                  "https://www.muralichowdhary.vercel.app",
                ],
                knowsAbout: [
                  "AI Product Development",
                  "Product Management",
                  "SaaS Product Validation",
                  "AI/LLM Systems",
                  "RAG Pipelines",
                  "React",
                  "Next.js",
                  "TypeScript",
                  "Node.js",
                  "Python",
                  "E-commerce Personalization",
                  "Full Stack Development",
                  "Startup Building",
                  "Voice AI",
                  "Conversational AI",
                ],
                hasOccupation: [
                  {
                    "@type": "Occupation",
                    name: "AI Product Engineer",
                    occupationalCategory: "15-1252.00",
                    skills:
                      "TypeScript, React, Next.js, Node.js, Python, AI/LLM Systems, RAG, PostgreSQL",
                  },
                  {
                    "@type": "Occupation",
                    name: "AI Product Engineer",
                    description:
                      "Building AI infrastructure and end-to-end products, with a focus on cost-optimized LLM routing and multi-provider orchestration.",
                  },
                ],
              }),
            }}
          />
        </head>
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable,
            fontMono.variable
          )}
        >
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
            <ScrollProgress />
            <Spotlight />
            <div className="relative flex min-h-screen flex-col">
              <SiteHeader />
              <PageWrapper>
                <main className="flex-1">
                  {/* <Hero /> */}
                  {children}
                </main>
              </PageWrapper>
              <SiteFooter />
            </div>
            <Toaster />
            <TailwindIndicator />
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}
