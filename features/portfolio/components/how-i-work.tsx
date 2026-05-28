import {
  SearchCheckIcon,
  LayersIcon,
  WorkflowIcon,
} from "lucide-react"
import { Panel, PanelHeader, PanelTitle } from "./panel"

const STEPS = [
  {
    icon: SearchCheckIcon,
    number: "01",
    title: "Observe before acting",
    description:
      "When something breaks, I don’t start by changing code. I start with logs, traces, metrics, and behaviour. I try to understand what the system is actually telling me before touching implementation.",
    metric: "Signal",
    metricLabel: "over assumptions",
  },
  {
    icon: LayersIcon,
    number: "02",
    title: "Think in systems, not symptoms",
    description:
      "I approach problems layer by layer — backend, database, infrastructure, queues, network, caching. The goal is not guessing what failed, but eliminating what didn’t.",
    metric: "Root",
    metricLabel: "cause thinking",
  },
  {
    icon: WorkflowIcon,
    number: "03",
    title: "Optimize decisions, not code",
    description:
      "I care about tradeoffs more than cleverness. Sometimes the best engineering decision is removing complexity, delaying state, or redesigning assumptions instead of writing more code.",
    metric: "Right",
    metricLabel: "before fast",
  },
]

export function HowIWork() {
  return (
    <Panel id="process">
      <PanelHeader>
        <PanelTitle>How I Think</PanelTitle>
      </PanelHeader>

      <div className="grid grid-cols-1 sm:grid-cols-3">
        {STEPS.map((step, i) => {
          const Icon = step.icon

          return (
            <div
              key={step.number}
              className={`flex flex-col p-4 pb-5 sm:pb-4 ${
                i < STEPS.length - 1
                  ? "screen-line-bottom sm:border-r sm:border-line"
                  : ""
              }`}
            >
              {/* top */}
              <div className="mb-3 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-muted-foreground/15 bg-muted text-muted-foreground">
                    <Icon className="h-4 w-4" />
                  </div>

                  <span className="font-mono text-xs text-muted-foreground">
                    {step.number}
                  </span>
                </div>

                {/* mobile metric */}
                <div className="flex items-baseline gap-1 sm:hidden">
                  <span className="font-mono text-sm font-semibold tracking-tight">
                    {step.metric}
                  </span>

                  <span className="font-mono text-[10px] text-muted-foreground">
                    {step.metricLabel}
                  </span>
                </div>
              </div>

              {/* title */}
              <h3 className="font-semibold leading-snug">
                {step.title}
              </h3>

              {/* description */}
              <p className="mt-2 flex-1 font-mono text-[13px] leading-relaxed text-muted-foreground sm:text-xs">
                {step.description}
              </p>

              {/* desktop metric */}
              <div className="mt-4 hidden border-t border-line pt-3 sm:block">
                <span className="font-mono text-lg font-semibold tracking-tight">
                  {step.metric}
                </span>

                <span className="ml-1.5 font-mono text-xs text-muted-foreground">
                  {step.metricLabel}
                </span>
              </div>
            </div>
          )
        })}
      </div>
    </Panel>
  )
}