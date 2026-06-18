import Link from "next/link"
import { AlertTriangle, Combine } from "lucide-react"

import { SectionHeading } from "@/components/hud"
import {
  MERGE_MISTAKES,
  MERGE_RULES,
  MERGE_STEPS,
} from "@/lib/merge-guide-data"

export function MergeGuide() {
  return (
    <section
      id="how-to-merge"
      className="relative scroll-mt-20 border-b border-border/60 py-16 lg:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          icon={Combine}
          kicker="Core mechanic"
          title="How to Merge Nukes"
          tag="Same level only"
        />
        <p className="mt-4 max-w-3xl leading-relaxed text-muted-foreground">
          Merging is the heart of Merge a Nuke. Drag identical tiers together,
          double the level each time, and climb toward stronger passive income
          and raid damage.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {MERGE_RULES.map((rule) => (
            <div
              key={rule.title}
              className="rounded-2xl border border-border/70 bg-card/70 p-5 shadow-sm"
            >
              <h3 className="font-semibold text-foreground">{rule.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{rule.desc}</p>
            </div>
          ))}
        </div>

        <h2 className="mt-10 text-xl font-bold text-foreground">
          Step-by-step merge flow
        </h2>
        <ol className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {MERGE_STEPS.map((step) => (
            <li
              key={step.step}
              className="rounded-2xl border border-primary/20 bg-card/70 p-4 shadow-sm"
            >
              <span className="text-xs font-bold text-primary">
                Step {step.step}
              </span>
              <h3 className="mt-1 font-semibold text-foreground">
                {step.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">{step.desc}</p>
            </li>
          ))}
        </ol>

        <div className="mt-8 flex items-start gap-3 rounded-2xl border border-warning/35 bg-warning/10 p-4">
          <AlertTriangle
            className="mt-0.5 size-5 shrink-0 text-warning"
            aria-hidden="true"
          />
          <div>
            <p className="text-sm font-semibold text-warning">
              Common mistakes
            </p>
            <ul className="mt-2 space-y-1.5">
              {MERGE_MISTAKES.map((mistake) => (
                <li
                  key={mistake}
                  className="text-sm text-muted-foreground"
                >
                  — {mistake}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-5 text-sm text-muted-foreground">
          Faster spawns come from{" "}
          <Link href="/upgrades" className="font-medium text-primary hover:underline">
            Store upgrades
          </Link>
          . See which nuke names to chase on the{" "}
          <Link href="/tier-list" className="font-medium text-primary hover:underline">
            Tier List
          </Link>
          .
        </p>
      </div>
    </section>
  )
}
