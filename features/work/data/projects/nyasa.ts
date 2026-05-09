import type { WorkProject } from "../../types/project"

export const nyasa: WorkProject = {
  slug: "nyasa",
  title: "nyasa",
  featured: false,
  status: "shipped",
  thumbnail: "/work/nyasa.png",
  architectureImage: "nyasa-architecture.png",
  oneLiner:
    "Browser SDK that classifies sessions as human, authorized AI agent, or unauthorized bot. 24 signals, 6 detection rules, published to npm.",
  role: "Sole Engineer",
  company: "Side Project",
  period: "2026",
  liveUrl: "https://nyasa.devanshtiwari.com",
  githubUrl: "https://github.com/Devansh-365/nyasa",
  highlights: [
    "Built isLLMAgent detection using 7 independent behavioral signals including machine-speed keystroke bursts under 20ms and mouse stillness above 70%, catching LLM agents that pass every fingerprint check",
    "Feature extraction layer computes 8 shared derived metrics once per session so no detection rule duplicates the same math or risks diverging from a sibling rule",
    "Near-miss composition in isMultimodalBot reads sibling DetectionResults directly rather than re-sampling raw signals, eliminating an entire class of cross-rule inconsistency",
    "Ships as ESM for bundlers and IIFE for script tags from a single tsup build, covering both install paths without forking the source",
  ],
  features: [
    {
      title: "Three-Actor Classification",
      description:
        "Every session gets one verdict: Human (no rules fired), AuthorizedAgent (valid cryptographic identity claim via window.__nyasaAgentSignature or meta tag), or UnauthorizedBot (one or more rules fired). The third bucket is the product differentiation. Authorized AI agents are not threats and should not be blocked.",
    },
    {
      title: "Behavioral Collectors (13)",
      description:
        "Keystroke dwell and flight time, mouse path and curvature, touch, paste ratio, scroll depth, backspace corrections, click precision (center offset), session rhythm (burst-pause gaps), field-level timing, input origin (typed vs pasted vs dropped vs programmatic), file upload mechanics, and tab visibility. All attach to the mount element or document and accumulate silently.",
    },
    {
      title: "Fingerprint Signals (8)",
      description:
        "Webdriver and CDP markers, iframe vs parent plugin consistency, canvas fingerprint hash, WebGL renderer string (SwiftShader and LLVMpipe detection), audio fingerprint via OfflineAudioContext, incognito mode via storage quota probe, timezone vs navigator.language region consistency, and a persistent device UUID in localStorage with an isNew flag.",
    },
    {
      title: "Detection Rules (6)",
      description:
        "isHeadless catches automation markers. isScripted catches bot-like typing patterns. isLLMAgent catches LLM behavioral fingerprints via 7 signals including machine-speed bursts and mouse stillness. isAuthorizedAgent reads the agent signature claim. isUploadAutomation catches programmatic file attachment. isMultimodalBot catches cross-signal contradictions and near-miss compositions from sibling rules.",
    },
    {
      title: "Client Verdict (noisy-OR scoring)",
      description:
        "deriveVerdict applies noisy-OR weighting over fired rules. More rules firing increases confidence non-linearly. isAuthorizedAgent short-circuits to AuthorizedAgent when detected. Consumers get a verdict type, confidence score, and badge labels. Client-side triage only. The scoring API stays authoritative for production.",
    },
    {
      title: "Dual Packaging and sendBeacon Delivery",
      description:
        "Ships ESM for bundlers (Vite, webpack, esbuild) and IIFE for script-tag installs (window.BehaviorSDK) from one tsup build. Payload delivered via navigator.sendBeacon: non-blocking, survives page unload, cannot be cancelled. collect(selector, options) returns flush and stop handles for SPA flows without a form submit.",
    },
  ],
  problem:
    "CAPTCHA and device fingerprinting were built for a world where bots were clumsy. Today, LLM agents fill forms with realistic typing cadence, headless browsers patch out webdriver flags, and CAPTCHA farms solve challenges at $0.50 each. But the deeper issue is the actor model. Almost every detection system treats sessions as human or bot. That breaks in 2026 because there is now a third category: AI agents acting legitimately on behalf of real users. A shopping assistant, an automated onboarding flow, a fintech API integration. These look like bots by every traditional signal. Blocking them means turning away real business.",
  whatIBuilt:
    "A browser SDK that embeds into any page and classifies every session before you need a decision. Thirteen behavioral collectors attach to the mount element and accumulate signals while the user interacts: keystroke timing, mouse curvature, paste vs typed ratio, click precision, session burst-pause rhythm, and more. Eight fingerprint checks read the browser environment once. Three network signals capture reaction time, connection type, and page load timing. When the session ends, six detection rules run against the collected signals and a noisy-OR scoring function derives a verdict with confidence. The payload ships via sendBeacon, non-blocking. Published to npm as @devanshhq/nyasa with dual ESM and IIFE builds. Live demo and full docs at nyasa.devanshtiwari.com.",
  stats: [
    { label: "Behavioral Signals", value: "13" },
    { label: "Fingerprint Signals", value: "8" },
    { label: "Detection Rules", value: "6" },
    {
      label: "npm",
      value: "@devanshhq/nyasa",
      url: "https://www.npmjs.com/package/@devanshhq/nyasa",
    },
  ],
  tech: [
    "TypeScript",
    "tsup",
    "Next.js",
    "Tailwind CSS",
    "Fumadocs",
    "npm",
    "Web APIs",
  ],
}
