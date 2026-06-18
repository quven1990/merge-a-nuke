import Link from "next/link"
import {
  Building2,
  Lock,
  Radar,
  ShieldCheck,
  Swords,
  Target,
  Timer,
} from "lucide-react"

import { WikiIllustration } from "@/components/wiki-illustration"
import {
  CENTER_CITY_GUIDE,
  PVP_RAID_STEPS,
  RAID_CONSEQUENCES,
  SHIELD_MECHANICS,
} from "@/lib/raid-guide-data"

const RAID_POINTS = [
  "Raid only when your income and defense are both ready.",
  "Check if the target has Lock Base active before you launch.",
  "Use raids to accelerate progression — not as a constant grind.",
]

const DEFENSE_POINTS = [
  "Lock your base before going offline, every single time.",
  "Protect your highest-tier nukes — raids can wipe your board.",
  "Upgrade Lock duration and cooldown in the Store when lobbies get aggressive.",
]

export function RaidDefense() {
  return (
    <section
      id="raid"
      className="relative scroll-mt-20 border-b border-border/60 py-16 lg:py-20"
    >
      <div className="reactor-grid absolute inset-0 opacity-40" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
          <Radar className="size-3.5" aria-hidden="true" /> Raid &amp; defense
        </div>
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
          Raid &amp; Base Defense
        </h2>
        <p className="mt-4 max-w-2xl text-muted-foreground leading-relaxed">
          PvP raids steal from players. The center city is separate PvE with
          huge payouts. Win more by attacking smart, locking often, and knowing
          when each target is worth it.
        </p>

        <WikiIllustration
          src="/images/raid-action.webp"
          alt="Roblox-style illustration of a blocky avatar pressing the red launch button next to a giant yellow nuke"
          variant="banner"
          caption="Check shields before you launch — locked bases block raids"
          className="mt-8"
        />

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          <div className="rounded-2xl border border-primary/30 bg-card/80 p-6 shadow-md">
            <div className="flex items-center gap-3 border-b border-border/60 pb-4">
              <span className="flex size-10 items-center justify-center rounded-xl border border-primary/40 bg-primary/10 text-primary">
                <Swords className="size-5" aria-hidden="true" />
              </span>
              <div>
                <h2 className="text-lg font-bold text-foreground">
                  PvP Raid Strategy
                </h2>
                <p className="text-xs text-muted-foreground">
                  Attack other players
                </p>
              </div>
            </div>
            <ul className="mt-4 space-y-3">
              {RAID_POINTS.map((point) => (
                <li key={point} className="flex gap-3 text-sm">
                  <Target
                    className="mt-0.5 size-4 shrink-0 text-primary"
                    aria-hidden="true"
                  />
                  <span className="text-muted-foreground">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-boom/30 bg-card/80 p-6 shadow-md">
            <div className="flex items-center gap-3 border-b border-border/60 pb-4">
              <span className="flex size-10 items-center justify-center rounded-xl border border-boom/40 bg-boom/10 text-boom">
                <ShieldCheck className="size-5" aria-hidden="true" />
              </span>
              <div>
                <h2 className="text-lg font-bold text-foreground">
                  Base Lock &amp; Defense
                </h2>
                <p className="text-xs text-muted-foreground">Stay protected</p>
              </div>
            </div>
            <ul className="mt-4 space-y-3">
              {DEFENSE_POINTS.map((point) => (
                <li key={point} className="flex gap-3 text-sm">
                  <Lock
                    className="mt-0.5 size-4 shrink-0 text-boom"
                    aria-hidden="true"
                  />
                  <span className="text-muted-foreground">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 rounded-2xl border border-border/70 bg-card/70 p-5 sm:p-6">
          <h3 className="text-lg font-bold text-foreground">
            PvP raid step-by-step
          </h3>
          <ol className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {PVP_RAID_STEPS.map((step, i) => (
              <li
                key={step.title}
                className="rounded-xl border border-border/60 bg-card/80 p-4"
              >
                <span className="text-xs font-bold text-primary">
                  Step {i + 1}
                </span>
                <p className="mt-1 font-semibold text-foreground">
                  {step.title}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {step.desc}
                </p>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-8 rounded-2xl border border-hazard/30 bg-hazard/5 p-5 sm:p-6">
          <h3 className="text-lg font-bold text-foreground">
            What happens if you get raided?
          </h3>
          <ul className="mt-4 space-y-2">
            {RAID_CONSEQUENCES.map((item) => (
              <li
                key={item}
                className="flex gap-2 text-sm text-muted-foreground"
              >
                <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-hazard" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          <div className="rounded-2xl border border-boom/25 bg-card/80 p-5 sm:p-6">
            <div className="flex items-center gap-2">
              <Timer className="size-5 text-boom" aria-hidden="true" />
              <h3 className="text-lg font-bold text-foreground">
                Lock Base &amp; shield mechanics
              </h3>
            </div>
            <ul className="mt-4 space-y-4">
              {SHIELD_MECHANICS.map((item) => (
                <li key={item.title}>
                  <p className="font-semibold text-foreground">{item.title}</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {item.desc}
                  </p>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-muted-foreground">
              Upgrade lock duration and cooldown in the{" "}
              <Link
                href="/upgrades"
                className="font-medium text-primary hover:underline"
              >
                Store upgrades guide
              </Link>
              .
            </p>
          </div>

          <div className="rounded-2xl border border-primary/30 bg-primary/5 p-5 sm:p-6">
            <div className="flex items-center gap-2">
              <Building2 className="size-5 text-primary" aria-hidden="true" />
              <h3 className="text-lg font-bold text-foreground">
                {CENTER_CITY_GUIDE.title}
              </h3>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">
              {CENTER_CITY_GUIDE.summary}
            </p>
            <ul className="mt-4 space-y-2">
              {CENTER_CITY_GUIDE.points.map((point) => (
                <li
                  key={point}
                  className="flex gap-2 text-sm text-muted-foreground"
                >
                  <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                  {point}
                </li>
              ))}
            </ul>
            <p className="mt-4 rounded-xl border border-primary/20 bg-card/60 p-3 text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">PvP vs PvE: </span>
              {CENTER_CITY_GUIDE.vsPvp}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
