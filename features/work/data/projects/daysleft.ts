import type { WorkProject } from "../../types/project"

export const daysleft: WorkProject = {
  slug: "daysleft",
  title: "Days Left",
  status: "shipped",
  featured: false,
  thumbnail: "/work/daysleft.jpg",
  oneLiner:
    "macOS menu bar utility that shows days remaining in the year, month, and week. One number. Always visible. Zero noise.",
  role: "Solo Builder",
  company: "Personal",
  period: "2025",
  githubUrl: "https://github.com/Devansh-365/daysleft",
  highlights: [
    "Built midnight refresh using a Timer aligned to 00:00:00 combined with NSWorkspace.didWakeNotification — count is always accurate even after an overnight sleep",
    "Zero external dependencies — MenuBarExtra, ServiceManagement, SwiftUI, and XCTest are the entire stack. No package graph to audit, no breakage on macOS updates",
    "303 lines of Swift 6 total including tests — scope was a constraint, not an accident. Every line justifies itself",
    "Ships as a signed DMG via a Makefile pipeline: swift build → bundle copy → hdiutil create → notarize-ready output in one command",
  ],
  features: [
    {
      title: "Always-On Time Visibility",
      description:
        "The current days-remaining count lives in the menu bar at all times. No app to open, no gesture to remember. The number is just there — ambient urgency without demanding attention.",
    },
    {
      title: "Three-Level Breakdown",
      description:
        "Click the menu bar item to see days left in the year, the month, and the week in a single clean popover. Enough context to decide whether today's work is strategic or tactical.",
    },
    {
      title: "Smart Refresh",
      description:
        "A midnight-aligned Timer fires at 00:00:00 to flip the count. NSWorkspace.didWakeNotification catches Mac wake events so the count is correct after an overnight sleep — no stale numbers the morning after.",
    },
    {
      title: "Zero Footprint",
      description:
        "No Dock icon. No notifications. No background telemetry. No external package dependencies. One menu bar item, one popover, one preferences toggle for launch-at-login. Ships as a 303-line Swift 6 codebase.",
    },
  ],
  problem:
    "Most annual goals die quietly — not because people forget them, but because they never feel the year shrinking. A calendar requires an intentional open. A widget lives behind windows. Urgency is invisible until it's too late. You hit November and wonder where October went. The problem isn't motivation. It's the absence of an ambient signal.",
  whatIBuilt:
    "A macOS menu bar app that puts one number in front of you all day: days left in the year. Click it and see the full breakdown — year, month, week — in a clean popover that dismisses the moment you move on. Built in Swift 6 with zero external dependencies. 303 lines of code doing one thing precisely: making time visible without getting in the way. Midnight refresh and Mac wake detection keep the count accurate. Optional launch at login. Ships as a signed DMG.",
  stats: [
    { label: "Lines of Swift", value: "303" },
    { label: "Dependencies", value: "0" },
    { label: "macOS Support", value: "13+" },
    {
      label: "GitHub",
      value: "daysleft",
      url: "https://github.com/Devansh-365/daysleft",
    },
  ],
  tech: ["Swift 6", "SwiftUI", "macOS", "ServiceManagement", "XCTest", "Make"],
}
