import Link from "next/link"
import { Lightbulb, ShoppingBag, Zap } from "lucide-react"

import { SectionHeading } from "@/components/hud"
import {
  EARLY_UPGRADE_ROUTE,
  STORE_UPGRADES,
  UPGRADE_PRO_TIPS,
} from "@/lib/upgrades-data"
import { cn } from "@/lib/utils"

const PRIORITY_STYLE: Record<
  (typeof STORE_UPGRADES)[number]["priority"],
  string
> = {
  Essential: "border-primary/40 bg-primary/10 text-primary",
  High: "border-hazard/40 bg-hazard/10 text-hazard",
  Medium: "border-warning/40 bg-warning/10 text-warning",
  "Late-game": "border-border bg-muted/40 text-muted-foreground",
}

export function StoreUpgrades() {
  return (
    <section
      id="upgrades"
      className="relative scroll-mt-20 border-b border-border/60 py-16 lg:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          icon={ShoppingBag}
          kicker="Store menu"
          title="Merge a Nuke Upgrades"
          tag="Free route first"
        />
        <p className="mt-4 max-w-3xl leading-relaxed text-muted-foreground">
          Most growth comes from the in-game Store — not random buys. This
          priority list mirrors what successful early sessions do: faster spawns,
          higher spawn tiers, then defense.
        </p>

        <div className="mt-8 rounded-2xl border border-primary/25 bg-primary/5 p-5 sm:p-6">
          <div className="flex items-center gap-2">
            <Zap className="size-5 text-primary" aria-hidden="true" />
            <h2 className="text-lg font-bold text-foreground">
              Early-game upgrade order
            </h2>
          </div>
          <ol className="mt-4 space-y-2">
            {EARLY_UPGRADE_ROUTE.map((step, i) => (
              <li
                key={step}
                className="flex gap-3 text-sm text-muted-foreground"
              >
                <span className="flex size-6 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-card text-xs font-bold text-primary">
                  {i + 1}
                </span>
                {step}
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-10 overflow-hidden rounded-2xl border-2 border-primary/25 bg-card/80 shadow-lg glow-border">
          <div className="hidden border-b border-border/50 bg-secondary/30 px-4 py-3 text-xs font-medium text-muted-foreground lg:grid lg:grid-cols-[1.2fr_0.7fr_1.4fr_1.2fr] lg:gap-4">
            <span>Upgrade</span>
            <span>Priority</span>
            <span>What it does</span>
            <span>When to buy</span>
          </div>

          <ul className="divide-y divide-border/40">
            {STORE_UPGRADES.map((upgrade) => (
              <li
                key={upgrade.name}
                className="grid gap-3 px-4 py-4 lg:grid-cols-[1.2fr_0.7fr_1.4fr_1.2fr] lg:items-start lg:gap-4"
              >
                <div>
                  <span className="mb-1 block text-xs font-medium text-muted-foreground lg:hidden">
                    Upgrade
                  </span>
                  <p className="font-semibold text-foreground">{upgrade.name}</p>
                  <p className="mt-1 text-xs text-muted-foreground lg:hidden">
                    {upgrade.freeRoute}
                  </p>
                </div>

                <div>
                  <span className="mb-1 block text-xs font-medium text-muted-foreground lg:hidden">
                    Priority
                  </span>
                  <span
                    className={cn(
                      "inline-flex rounded-full border px-2.5 py-0.5 text-xs font-semibold",
                      PRIORITY_STYLE[upgrade.priority],
                    )}
                  >
                    {upgrade.priority}
                  </span>
                </div>

                <div>
                  <span className="mb-1 block text-xs font-medium text-muted-foreground lg:hidden">
                    What it does
                  </span>
                  <p className="text-sm text-muted-foreground">
                    {upgrade.whatItDoes}
                  </p>
                </div>

                <div>
                  <span className="mb-1 block text-xs font-medium text-muted-foreground lg:hidden">
                    When to buy
                  </span>
                  <p className="text-sm text-muted-foreground">
                    {upgrade.whenToBuy}
                  </p>
                  <p className="mt-2 hidden text-xs text-muted-foreground lg:block">
                    {upgrade.freeRoute}
                  </p>
                </div>
              </li>
            ))}
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
            {UPGRADE_PRO_TIPS.map((tip) => (
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

        <p className="mt-5 text-sm text-muted-foreground">
          Pair upgrades with the{" "}
          <Link href="/beginner-guide" className="font-medium text-primary hover:underline">
            Beginner Guide
          </Link>{" "}
          merge rules and the{" "}
          <Link href="/tier-list" className="font-medium text-primary hover:underline">
            Tier List
          </Link>{" "}
          to know what you are merging toward.
        </p>
      </div>
    </section>
  )
}
