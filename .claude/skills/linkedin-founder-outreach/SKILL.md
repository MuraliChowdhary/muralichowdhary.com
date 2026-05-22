---
name: linkedin-founder-outreach
description: Use this skill whenever the user wants help cold-messaging startup founders on LinkedIn (or by email/Twitter) to get hired, especially for product engineer, founding engineer, or early-stage engineering roles. Trigger on phrases like "reach out to founders," "cold DM," "LinkedIn outreach," "message founders," "follow-up sequence," "job hunting on LinkedIn," "get hired at a startup," "founding engineer outreach," or any request for a mermaid flowchart of an outreach workflow. Push to use this skill even when the user describes the situation in their own words without naming "outreach" explicitly. The skill provides the full message sequence, follow-up cadence (Day 0 / +3 / +7-10 / +17-21), branch logic for every reply type, a mermaid flowchart in plain language, and copy-paste templates.
---

# LinkedIn Founder Outreach Playbook

A research-backed workflow for cold-messaging startup founders to get hired as a product engineer or founding engineer. Built from Reddit/HN practitioner threads, Lenny's Newsletter, First Round Review, YC's job guide, Sahil Bloom, Justin Welsh, Steli Efti, and the public hiring patterns of Linear, Vercel, PostHog, Stripe, and Cal.com.

## When to use this skill

Use this whenever a user is planning outreach to startup founders for a job, or asks for a follow-up cadence, or wants a flowchart of how to handle replies. If they describe wanting to "message founders on LinkedIn" without using the word "outreach," still use this skill.

## What makes this different from generic job outreach

Founders hiring for product engineer / founding engineer roles screen on **taste + speed + ownership**, not resume keywords. The outreach must show, not tell:

- Build something for the founder before the first DM (a Loom, a redesign, a microfeature)
- The artifact qualifies the candidate before the message is read
- Loom or built artifact lifts reply rate from ~4% to ~22% at the same volume

## Numbers that drive the cadence

| Lever | Data |
|---|---|
| Free connection request with personalised note | 35-45% accept vs 15-25% for InMail |
| Loom / built artifact attached | 4% → 22% reply rate |
| Message under 80 words / 400 chars | +22% reply lift |
| Cadence covering Day 0 → Day 17 | Captures ~93% of all replies that will ever come |
| Cumulative reply lift per follow-up | T2 +21%, T3 +25%, T4 +28%, diminishes after |
| Best send window | Tue-Thu 9-11am recipient local; founders also over-index Sun eve / Sat morn |
| Hiring sequence ceiling | 4-5 touches max; past that reads desperate |
| Breakup message alone | Triggers 30-50% of total sequence replies |

## Pre-flight checklist (before any DM)

1. Public footprint up: portfolio site shipped on the founder's stack, 1-2 build-in-public posts, GitHub green
2. Pick ONE concrete role to ask for ("first product engineer" / "founding engineer") — never "anything"
3. Build the artifact for THIS founder: 60-90 sec Loom OR redesign of their broken page OR working microfeature
4. Find founder's `founder@` or `first.last@` email as the channel-2 backup

## The flowchart

```mermaid
flowchart TD
    Start([Pick a founder<br/>Build something small for them]) --> Connect[Send connect request<br/>Add a short personal note<br/>Best time: Tue-Thu, 9-11am]

    Connect --> Accept{Did they accept<br/>in 3 days?}
    Accept -->|No, waited a week| Email1[Try email instead<br/>Send same hook + your demo link]
    Accept -->|Yes| T1[Day 0: First DM<br/>Keep it under 5 lines<br/>Say what you built for them<br/>Drop the link<br/>Ask one small question]

    T1 --> R1{Did they reply<br/>in 3 days?}
    R1 -->|Yes| Triage[Read what they said]
    R1 -->|No| T2[Day 3: Follow-up #1<br/>Do NOT say 'just checking in'<br/>Share one new idea or demo]

    T2 --> R2{Did they reply<br/>in 4 days?}
    R2 -->|Yes| Triage
    R2 -->|No| T3[Day 7-10: Follow-up #2<br/>Switch to email now<br/>Make the ask smaller<br/>Send your 30-day plan]

    T3 --> R3{Did they reply<br/>in 7 days?}
    R3 -->|Yes| Triage
    R3 -->|No| T4[Day 17-21: Final message<br/>The 'breakup' email<br/>Ask: 'Just say pass or<br/>maybe later, all good either way']

    T4 --> R4{Did they reply?}
    R4 -->|Yes| Triage
    R4 -->|No| Lateral[Try someone else at the company<br/>Cofounder, investor, or<br/>another founder in their network]

    Lateral --> Trigger[Watch their company<br/>Set Google Alerts<br/>Wait for news to drop]
    Trigger --> T5{News in next 90 days?<br/>Funding, launch, hiring?}
    T5 -->|Yes, after 45+ days| Reengage[Reach out again<br/>Tie message to the news]
    T5 -->|No news in 90 days| Archive([Move on<br/>Keep building in public])
    Reengage --> R1

    Email1 --> R1

    Triage --> Type{What did they say?}

    Type -->|Yes! Let's talk| Positive[Reply within 2 hours<br/>Offer 2 specific times this week<br/>Send 1-page resume<br/>+ short video walkthrough]
    Positive --> Prep[Prep your story:<br/>Why this company<br/>Why this role<br/>Why now<br/>Bring a 30-60-90 day plan]
    Prep --> Win([You got the call<br/>Interview or paid trial])

    Type -->|Not hiring right now| Soft[Say thanks, keep it warm<br/>Ask: 'Can I check in next quarter?'<br/>Offer to keep sharing what you build]
    Soft --> SoftShip[2-4 weeks later<br/>Send them something new<br/>A demo or redesign, no ask attached]
    SoftShip --> Trigger

    Type -->|Not a fit| Hard[Thank them<br/>Ask for one intro<br/>to a similar founder<br/>Close warmly]
    Hard --> Archive

    Type -->|Maybe later / vague| Vague[Do not bug them<br/>Wait for real news<br/>Then come back]
    Vague --> Trigger

    style Start fill:#1f2937,stroke:#10b981,color:#fff
    style Win fill:#065f46,stroke:#10b981,color:#fff
    style Archive fill:#374151,stroke:#9ca3af,color:#fff
    style T1 fill:#1e3a8a,stroke:#3b82f6,color:#fff
    style T2 fill:#1e3a8a,stroke:#3b82f6,color:#fff
    style T3 fill:#7c2d12,stroke:#f97316,color:#fff
    style T4 fill:#7c2d12,stroke:#f97316,color:#fff
    style Positive fill:#065f46,stroke:#10b981,color:#fff
    style Soft fill:#713f12,stroke:#eab308,color:#fff
    style Hard fill:#7f1d1d,stroke:#ef4444,color:#fff
```

## Cadence at a glance

| Touch | Day | Channel | Purpose |
|---|---|---|---|
| Connect | 0 | LinkedIn | Free request + personalised note (no pitch inside) |
| T1 | +0 from accept | LinkedIn DM | Hook + Loom/artifact + tiny ask |
| T2 | +3 | LinkedIn DM | NEW value, second artifact |
| T3 | +7-10 | Email (switch channel) | Smaller ask, 30-day plan |
| T4 | +17-21 | Email | Breakup: "pass or circle-back?" |
| T5 | +45 onwards | Email/LinkedIn | Only on trigger event (fund/launch/hire) |

## Message templates

### Connection note (under 280 chars)
> Hi {first name} — saw your post on {specific thing, last 14 days}. Built a {Loom / redesign / micro-feature} for {their product} that fixes {specific pain}. Mind if I send it over?

### T1 — Day 0 (after connection accepted)
> Thanks for connecting. Quick context: I'm a product engineer (shipped {1 specific outcome}). Noticed {specific thing on their product / their recent post}. Built this in {timeframe}: {Loom link}. If it's useful, happy to walk you through how I'd extend it. If not, no worries — figured it was easier to show than tell.

### T2 — Day 3 bump (NEW value, never "just following up")
> One more thought on {topic from T1}: {1 insight or second artifact}. {Link}. Worth a 15-min chat?

### T3 — Day 7-10 channel switch (EMAIL)
> {first name} — sent you a Loom on LinkedIn last week ({link}). Smaller ask: can I send you a 30-day plan for what I'd ship as your first product engineer? One page, no call needed.

### T4 — Day 17-21 breakup
> Last note from me on this — totally understand if the timing is off. Would a one-word reply help? "pass" or "circle back" and I'll respect either. Either way, will keep building.

### Positive reply
> Awesome — I'm free {slot 1} or {slot 2} this week. Sending a 1-page resume + the 30/60/90 I'd run in your first quarter. Loom walkthrough here: {link}.

### Soft-no reply
> Totally get it — appreciate the honesty. Mind if I keep building things in your space and share when something's worth your time? Will only ping when there's a real artifact attached.

### Hard-no reply
> Understood, thanks for the straight answer. One ask: any other founder in your network building something similar I should be talking to?

## Hard rules

These are non-negotiable because each one is backed by either reply-rate data or a documented founder-blocker pattern:

1. Never attach a CV to a cold DM — link to a portfolio page instead. Founders won't open attachments from strangers
2. Never send a default "I'd like to add you" connection request — costs 30+ points of acceptance rate
3. Never pitch inside the connection note — connect first, DM second
4. Never send T2/T3 with "just following up" — every touch must carry new value
5. Never escalate to a personal email or to the cofounder after a hard no
6. Never mass-send across 3+ people at the same 5-person startup — looks like spam to all of them
7. Always message Tue-Thu 9-11am local OR Sun eve / Sat morn for founders specifically
8. Always ship the artifact before the first DM — the artifact qualifies you faster than any sentence
9. Cap LinkedIn follow-ups at 2 — third touch switches channel, fourth is the breakup
10. One concrete role, not "anything" — picking signals taste

## Volume + funnel math

Tight personalisation per founder takes 20-30 min (artifact + research). Don't scale by volume — scale by artifact quality.

Expected funnel at this quality bar:
- 30 connection requests → ~12-14 accepts (40%)
- 12 T1 sends → ~3-4 replies after full sequence (22-30% with artifact)
- 3-4 conversations → 1-2 work trials / serious processes
- Time to first real conversation: typically 7-21 days from T1

Target list size: 30-50 founders matching your stack/category. Not 500.

## How to use this skill in practice

When a user asks for help with founder outreach:

1. Confirm the role they're targeting (product engineer? founding engineer? designer-engineer?) and their target company list size
2. Walk them through the pre-flight checklist and check what they already have built
3. If they have no artifact ready, pause outreach planning and help them ship one first — that's the single highest-ROI lever in the whole sequence
4. Present the flowchart and adapt the templates to their voice, the founder's name, and the specific artifact
5. Set up the cadence as calendar reminders or a tracking sheet (one row per founder, columns for each touch + reply status)
6. When the user comes back with a reply they received, classify it (positive / soft no / hard no / vague) and walk them through the matching branch

## Source research

The cadence numbers, day/time data, and reply-rate lift figures come from:
- Steli Efti / Close.io cold email follow-up plan
- Sahil Bloom's cold email guide
- Justin Welsh's cold DM newsletter
- YC Startup Job Guide and First Round Review's "Mine Your Network for Early-Stage Hiring Gold"
- Loom + Intercom case studies on artifact-attached reply rates
- Apollo, Salesbread, and Gong cold outreach personalisation data
- Linear, Vercel, PostHog public statements on hiring product engineers (Karri Saarinen, Guillermo Rauch, Lee Robinson)
