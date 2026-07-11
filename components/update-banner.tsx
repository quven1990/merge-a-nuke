import { ArrowRight, Sparkles } from "lucide-react"

import { TrackedCtaLink } from "@/components/tracked-cta-link"

const UPDATE_DATE = "July 4, 2026"

export function UpdateBanner() {
  return (
    <section
      aria-labelledby="whats-new-heading"
      className="border-b border-border/60 bg-primary/5"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <div className="flex items-start gap-3">
          <span className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-xl border border-primary/30 bg-primary/10">
            <Sparkles className="size-4 text-primary" aria-hidden="true" />
          </span>
          <div className="min-w-0">
            <p
              id="whats-new-heading"
              className="flex flex-wrap items-center gap-2 text-sm font-bold text-foreground"
            >
              <span className="rounded-full bg-primary px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-primary-foreground">
                New
              </span>
              What&apos;s New · {UPDATE_DATE}
            </p>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
              LTM &amp; 4th of July patch — Military Compound, 4 new commanders,
              PvP wars, Mystery Supply Drops, and Rebirth 7.
            </p>
          </div>
        </div>
        <TrackedCtaLink
          href="/updates"
          label="Whats New July 4 LTM"
          placement="home_update"
          className="inline-flex min-h-10 shrink-0 items-center gap-2 self-start rounded-xl border border-primary/40 bg-card/90 px-4 text-sm font-bold text-primary shadow-sm transition-colors hover:border-primary/60 hover:bg-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:self-center"
        >
          See update log
          <ArrowRight className="size-4 shrink-0" aria-hidden="true" />
        </TrackedCtaLink>
      </div>
    </section>
  )
}
