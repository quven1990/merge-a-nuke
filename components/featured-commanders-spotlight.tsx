import { ArrowRight, Crown, Sparkles } from "lucide-react"

import { TrackedCtaLink } from "@/components/tracked-cta-link"

const HIGHLIGHTS = [
  "All 28 commanders ranked by rarity — Contract Board, Advanced Warfare Pack, July 4 LTM, and Admiral tier",
  "How to capture them on event maps, Mystery Supply Drops, the Shop, and map spawns",
  "Best picks for early, mid, and endgame — Salvager, Spotter, Sovereign, and more",
] as const

export function FeaturedCommandersSpotlight() {
  return (
    <section
      id="commanders"
      className="relative scroll-mt-20 border-b border-border/60 py-16 lg:py-20"
    >
      <div className="reactor-grid absolute inset-0 opacity-30" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-2xl border border-primary/35 bg-gradient-to-br from-primary/10 via-card/80 to-card/70 p-6 shadow-md sm:p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="min-w-0">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                <Sparkles className="size-3.5" aria-hidden="true" />
                Updated · July 13 Advanced Warfare
              </div>
              <h2 className="mt-4 text-2xl font-bold tracking-tight sm:text-3xl">
                Merge a Nuke Commanders Guide
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                The fastest-growing topic on this wiki — every commander by rarity,
                how to unlock each one, and which to chase first after the July 4
                patch.
              </p>
              <ul className="mt-5 space-y-2.5">
                {HIGHLIGHTS.map((point) => (
                  <li
                    key={point}
                    className="flex gap-2.5 text-sm text-muted-foreground"
                  >
                    <Crown
                      className="mt-0.5 size-4 shrink-0 text-primary"
                      aria-hidden="true"
                    />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
            <TrackedCtaLink
              href="/commanders"
              label="Full commanders guide"
              placement="guide_cards"
              className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 self-start rounded-xl border border-primary/40 bg-primary px-5 text-sm font-bold text-primary-foreground shadow-md transition-colors hover:bg-primary/90 lg:self-center"
            >
              Read the full guide
              <ArrowRight className="size-4 shrink-0" aria-hidden="true" />
            </TrackedCtaLink>
          </div>
        </div>
      </div>
    </section>
  )
}
