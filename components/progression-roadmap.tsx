import Link from "next/link"
import {
  Bomb,
  ChevronRight,
  Coins,
  type LucideIcon,
  Rocket,
  ShieldCheck,
  Swords,
  Zap,
} from "lucide-react"

type Stage = {
  icon: LucideIcon
  stage: string
  goal: string
  focus: string
  mistake: string
}

const STAGES: Stage[] = [
  {
    icon: Bomb,
    stage: "Starter Bombs",
    goal: "Clear early clutter",
    focus: "Merge low tiers fast to open space.",
    mistake: "Holding onto weak bombs too long.",
  },
  {
    icon: Zap,
    stage: "Better Nukes",
    goal: "Reach mid-tier nukes",
    focus: "Merge upward to unlock stronger units.",
    mistake: "Skipping merges to rush a single nuke.",
  },
  {
    icon: Coins,
    stage: "Income Upgrades",
    goal: "Build steady cash flow",
    focus: "Boost earnings before anything else.",
    mistake: "Spending on cosmetics over income.",
  },
  {
    icon: Swords,
    stage: "Raid Preparation",
    goal: "Get raid-ready",
    focus: "Stabilize income and stock resources.",
    mistake: "Raiding with a fragile economy.",
  },
  {
    icon: ShieldCheck,
    stage: "Base Defense",
    goal: "Protect your progress",
    focus: "Lock and organize before you leave.",
    mistake: "Leaving the base open and exposed.",
  },
  {
    icon: Rocket,
    stage: "Rebirth",
    goal: "Reset for long-term gains",
    focus: "Rebirth once growth clearly slows down.",
    mistake: "Rebirthing far too early for small bonuses.",
  },
]

export function ProgressionRoadmap() {
  return (
    <section
      id="progression"
      className="relative scroll-mt-20 border-b border-border/60 py-16 lg:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
          Progression Roadmap
        </h2>
        <p className="mt-4 max-w-2xl text-muted-foreground leading-relaxed">
          Follow this path from your first bombs to rebirth. Each stage builds
          on the last, so don&apos;t skip ahead before your base is ready.
        </p>
        <p className="mt-2 text-xs text-muted-foreground lg:hidden">
          Swipe sideways to see all stages →
        </p>

        <div className="mt-10 flex gap-4 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] snap-x snap-mandatory lg:grid lg:grid-cols-6 lg:gap-3 lg:overflow-visible lg:pb-0 [&::-webkit-scrollbar]:hidden">
          {STAGES.map((stage, i) => (
            <div
              key={stage.stage}
              className="relative flex min-w-[min(85vw,240px)] shrink-0 snap-start flex-col rounded-2xl border border-border/70 bg-card/70 p-4 shadow-sm lg:min-w-0"
            >
              <span className="mb-3 flex size-10 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 text-primary">
                <stage.icon className="size-5" aria-hidden="true" />
              </span>
              <span className="text-[10px] font-medium text-muted-foreground">
                Stage {i + 1}
              </span>
              <h3 className="mt-0.5 font-semibold text-foreground">
                {stage.stage}
              </h3>

              <dl className="mt-3 space-y-2 text-xs">
                <div>
                  <dt className="font-medium text-primary">Goal</dt>
                  <dd className="text-muted-foreground">{stage.goal}</dd>
                </div>
                <div>
                  <dt className="font-medium text-foreground">Focus</dt>
                  <dd className="text-muted-foreground">{stage.focus}</dd>
                </div>
                <div>
                  <dt className="font-medium text-warning">Common mistake</dt>
                  <dd className="text-muted-foreground">{stage.mistake}</dd>
                </div>
              </dl>

              {i < STAGES.length - 1 && (
                <ChevronRight
                  className="absolute -right-3.5 top-1/2 hidden size-5 -translate-y-1/2 text-primary/60 lg:block"
                  aria-hidden="true"
                />
              )}
            </div>
          ))}
        </div>

        <p className="mt-8 text-sm text-muted-foreground">
          Stage 3 (Income Upgrades) maps to the in-game Store — see the full{" "}
          <Link
            href="/upgrades"
            className="font-medium text-primary hover:underline"
          >
            Store upgrades guide
          </Link>{" "}
          for Spawn Tier, Spawn Speed, and Lock Base priorities. After income is
          stable, unlock passive buffs via{" "}
          <Link
            href="/commanders"
            className="font-medium text-primary hover:underline"
          >
            commanders
          </Link>{" "}
          — start with Salvager or Spotter. Redeem free cash first on the{" "}
          <Link href="/codes" className="font-medium text-primary hover:underline">
            codes page
          </Link>
          .
        </p>
      </div>
    </section>
  )
}
