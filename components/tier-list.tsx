import Link from "next/link"
import { AlertTriangle, Info, Lightbulb, Trophy } from "lucide-react"

import { cn } from "@/lib/utils"
import {
  NUKE_TIER_ROWS,
  TIER_BADGE,
  TIER_PRO_TIPS,
} from "@/lib/tier-list-data"

export function TierList() {
  return (
    <section
      id="tier-list"
      className="relative scroll-mt-20 border-b border-border/60 py-16 lg:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center gap-3">
          <span className="flex size-9 items-center justify-center rounded-2xl border border-primary/40 bg-primary/10">
            <Trophy className="size-5 text-primary" aria-hidden="true" />
          </span>
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Nuke Tier Rankings
          </h2>
          <span className="rounded-full border border-warning/40 bg-warning/10 px-2.5 py-0.5 text-xs font-semibold text-warning">
            Community estimates
          </span>
        </div>
        <p className="mt-4 max-w-3xl text-muted-foreground leading-relaxed">
          Rankings use merge levels (2 → 4 → 8 → 16…) and community-reported
          nuke names from gameplay footage. Cross-check the in-game Index after
          Friday updates — exact stats change often.
        </p>

        <div className="mt-6 flex items-start gap-3 rounded-2xl border border-warning/35 bg-warning/10 p-4">
          <AlertTriangle
            className="mt-0.5 size-5 shrink-0 text-warning"
            aria-hidden="true"
          />
          <p className="text-sm text-muted-foreground">
            <span className="font-semibold text-warning">Community-sourced</span>{" "}
            — pending full in-game verification. Use this as a merge priority
            guide, not fixed DPS numbers.
          </p>
        </div>

        <div className="mt-8 overflow-hidden rounded-2xl border-2 border-primary/25 bg-card/80 shadow-lg glow-border">
          <div className="hidden border-b border-border/50 bg-secondary/30 px-4 py-3 text-xs font-medium text-muted-foreground lg:grid lg:grid-cols-[72px_0.7fr_1.2fr_1fr_1fr_1.2fr] lg:gap-4">
            <span>Tier</span>
            <span>Merge level</span>
            <span>Nuke name</span>
            <span>Cash / sec</span>
            <span>Raid value</span>
            <span>Notes</span>
          </div>

          <ul className="divide-y divide-border/40">
            {NUKE_TIER_ROWS.map((row) => {
              const style = TIER_BADGE[row.tier]
              return (
                <li
                  key={`${row.tier}-${row.mergeLevel}-${row.nuke}`}
                  className={cn(
                    "grid gap-3 px-4 py-4 lg:grid-cols-[72px_0.7fr_1.2fr_1fr_1fr_1.2fr] lg:items-center lg:gap-4",
                    style.accent,
                  )}
                >
                  <div className="flex items-center gap-3 lg:block">
                    <span className="text-xs font-medium text-muted-foreground lg:hidden">
                      Tier
                    </span>
                    <span
                      className={cn(
                        "inline-flex size-12 shrink-0 items-center justify-center rounded-xl text-xl font-extrabold",
                        style.badge,
                      )}
                    >
                      {row.tier}
                    </span>
                  </div>

                  <div>
                    <span className="mb-1 block text-xs font-medium text-muted-foreground lg:hidden">
                      Merge level
                    </span>
                    <p className="font-mono text-sm font-semibold text-foreground">
                      {row.mergeLevel}
                    </p>
                  </div>

                  <div>
                    <span className="mb-1 block text-xs font-medium text-muted-foreground lg:hidden">
                      Nuke name
                    </span>
                    <p className="font-semibold text-foreground">{row.nuke}</p>
                  </div>

                  <div>
                    <span className="mb-1 block text-xs font-medium text-muted-foreground lg:hidden">
                      Cash / sec
                    </span>
                    <p className="text-sm text-foreground">{row.cashPerSec}</p>
                  </div>

                  <div>
                    <span className="mb-1 block text-xs font-medium text-muted-foreground lg:hidden">
                      Raid value
                    </span>
                    <p className="text-sm text-foreground">{row.raidValue}</p>
                  </div>

                  <div>
                    <span className="mb-1 block text-xs font-medium text-muted-foreground lg:hidden">
                      Notes
                    </span>
                    <p className="text-sm text-muted-foreground">{row.notes}</p>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>

        <div className="mt-8 rounded-2xl border border-border/70 bg-card/70 p-5 shadow-sm">
          <div className="flex items-center gap-2">
            <Lightbulb
              className="size-5 text-primary"
              aria-hidden="true"
            />
            <h3 className="text-lg font-bold text-foreground">Pro tips</h3>
          </div>
          <ul className="mt-4 space-y-2">
            {TIER_PRO_TIPS.map((tip) => (
              <li
                key={tip}
                className="flex gap-2 text-sm text-muted-foreground"
              >
                <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                {tip}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-5 flex items-start gap-3 rounded-2xl border border-border/70 bg-card/60 p-4">
          <Info className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
          <p className="text-sm text-muted-foreground">
            Friday patches can rebalance nukes, offline rates, and raid damage.
            After each update, re-check this tier list alongside the{" "}
            <Link href="/codes" className="font-medium text-primary hover:underline">
              Codes
            </Link>
            ,{" "}
            <Link
              href="/commanders"
              className="font-medium text-primary hover:underline"
            >
              Commanders
            </Link>
            , and{" "}
            <Link
              href="/progression"
              className="font-medium text-primary hover:underline"
            >
              Progression
            </Link>{" "}
            guides.
          </p>
        </div>
      </div>
    </section>
  )
}
