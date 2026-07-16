import Link from "next/link"
import { ArrowRight, Calendar, CheckCircle2, RefreshCw, Rocket } from "lucide-react"

import { SectionHeading } from "@/components/hud"
import { REBIRTH_GUIDE } from "@/lib/event-rebirth-data"

export function Rebirth8RequirementsPanel() {
  return (
    <section className="border-b border-border/60 bg-primary/5 py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-5 rounded-3xl border border-primary/25 bg-background/80 p-5 shadow-sm sm:p-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">
              Rebirth 8 quick answer
            </p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-foreground">
              {REBIRTH_GUIDE.rebirth8RequirementTitle}
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              {REBIRTH_GUIDE.rebirth8RequirementSummary}
            </p>
          </div>

          <div className="rounded-2xl border border-border/70 bg-card/70 p-4">
            <ul className="space-y-2.5">
              {REBIRTH_GUIDE.rebirth8Requirements.map((item) => (
                <li key={item} className="flex gap-2 text-sm leading-relaxed text-muted-foreground">
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-wrap gap-3 lg:col-span-2">
            <Link
              href="/commanders/overclocker"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
            >
              Check Overclocker
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
            <Link
              href="/commanders/barrier"
              className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary transition hover:bg-primary/15"
            >
              Check Barrier
            </Link>
            <Link
              href="/blog/rebirth-8-requirements-overclocker-barrier-july-2026"
              className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-card px-4 py-2 text-sm font-semibold text-foreground transition hover:border-primary/50 hover:text-primary"
            >
              Read the Rebirth 8 guide
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export function RebirthGuideSection() {
  return (
    <section
      id="rebirth"
      className="relative scroll-mt-20 border-b border-border/60 py-16 lg:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading icon={Rocket} kicker="Long-term scaling" title={REBIRTH_GUIDE.title} />
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          {REBIRTH_GUIDE.summary}
        </p>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-primary/25 bg-primary/5 p-5">
            <p className="flex items-center gap-2 text-sm font-bold text-foreground">
              <CheckCircle2 className="size-4 text-primary" aria-hidden="true" />
              When to rebirth
            </p>
            <ul className="mt-4 space-y-2">
              {REBIRTH_GUIDE.whenToRebirth.map((item) => (
                <li key={item} className="text-sm leading-relaxed text-muted-foreground">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <div className="rounded-2xl border border-border/70 bg-card/70 p-5">
              <p className="flex items-center gap-2 text-sm font-bold text-foreground">
                <RefreshCw className="size-4 text-hazard" aria-hidden="true" />
                What resets
              </p>
              <ul className="mt-3 space-y-1.5">
                {REBIRTH_GUIDE.whatResets.map((item) => (
                  <li key={item} className="text-sm text-muted-foreground">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-border/70 bg-card/70 p-5">
              <p className="flex items-center gap-2 text-sm font-bold text-foreground">
                <Calendar className="size-4 text-primary" aria-hidden="true" />
                What you keep
              </p>
              <ul className="mt-3 space-y-1.5">
                {REBIRTH_GUIDE.whatPersists.map((item) => (
                  <li key={item} className="text-sm text-muted-foreground">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          {REBIRTH_GUIDE.rebirth7Note}
        </p>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          {REBIRTH_GUIDE.rebirth8Note} Use the quick requirement panel above, then pair
          rebirth timing with{" "}
          <Link href="/commanders/overclocker" className="font-medium text-primary hover:underline">
            Overclocker
          </Link>{" "}
          and{" "}
          <Link href="/commanders/barrier" className="font-medium text-primary hover:underline">
            Barrier
          </Link>{" "}
          if you are chasing Rebirth 8 — commanders persist across resets and accelerate your next
          run.
        </p>
      </div>
    </section>
  )
}
