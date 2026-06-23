import Link from "next/link"
import {
  ArrowRight,
  Coins,
  Crown,
  Info,
  Layers,
  ShieldAlert,
  ShoppingBag,
  Star,
  Swords,
  Target,
  Trophy,
  Zap,
} from "lucide-react"

import { SectionHeading } from "@/components/hud"
import { TrackedCtaLink } from "@/components/tracked-cta-link"
import {
  ACQUIRE_METHODS,
  COMMANDERS,
  PRIORITY_STYLE,
  RARITY_STYLE,
  type Commander,
} from "@/lib/commanders-data"

const ROLE_ICON: Record<Commander["role"], React.ElementType> = {
  income: Coins,
  offense: Swords,
  defense: ShieldAlert,
  automation: Zap,
}

const ACQUIRE_ICON = [Target, ShoppingBag, Trophy]

const PICK_GUIDE = [
  {
    stage: "New player",
    icon: Zap,
    pick: "Salvager",
    reason: "Auto-merges your lowest nukes so you don't have to micromanage the grid.",
  },
  {
    stage: "Income focus",
    icon: Coins,
    pick: "Spotter",
    reason: "Cash boost every 30 seconds scales with nuke tier — best passive income multiplier.",
  },
  {
    stage: "PvP raider",
    icon: Swords,
    pick: "Gunner + Siege Breaker",
    reason: "Gunner raises damage; Siege Breaker punches through locked bases and buffs your next shot.",
  },
  {
    stage: "Late game",
    icon: Crown,
    pick: "Sovereign",
    reason: "+15% damage everywhere, and it auto-farms the city so you don't have to be online.",
  },
]

const UPGRADE_STEPS = [
  "Equip the commander from your Commanders tab after capturing them.",
  "Defeat or purchase a duplicate of the same commander to raise their level cap.",
  "Upgrade their tier — higher tiers increase the strength of their passive ability.",
  "Stack multiple commanders for compound bonuses (e.g. Gunner + Siege Breaker for PvP).",
]

const FAQ_ITEMS = [
  {
    q: "Can another player steal a commander I'm attacking?",
    a: "Yes. Commanders are captured by whoever deals the killing blow. Attack fast with your strongest nuke — don't chip slowly while others build up.",
  },
  {
    q: "How many commanders can I equip at once?",
    a: "Multiple commanders can be active simultaneously. Prioritize non-overlapping roles (e.g. Spotter for income + Gunner for raids).",
  },
  {
    q: "Do commanders work while I'm offline?",
    a: "Sovereign auto-attacks city events but only triggers while you are active in-game. Passive stat bonuses (damage, cash) still apply while offline.",
  },
  {
    q: "What is the best commander overall?",
    a: "Sovereign (Legendary). +15% nuke damage passively plus auto city attacks makes it the highest-value commander at any stage of the game.",
  },
  {
    q: "How often do commanders spawn on the map?",
    a: "Spawns are not on a fixed timer — they appear periodically throughout a session. Stay active and watch for the boat arrival notification.",
  },
]

export function CommandersSection() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 space-y-20">

      {/* HOW TO GET */}
      <section id="how-to-get" className="scroll-mt-20">
        <SectionHeading
          icon={Target}
          kicker="Unlock methods"
          title="How to Get Commanders"
          tag="3 ways"
        />
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          Commanders can be unlocked in three ways. Capturing them on the map is
          the most reliable free method — the other two are faster but cost
          resources.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {ACQUIRE_METHODS.map((method, i) => {
            const Icon = ACQUIRE_ICON[i]
            return (
              <div
                key={method.id}
                className="flex flex-col gap-3 rounded-2xl border border-border/70 bg-card/70 p-5 shadow-sm"
              >
                <span className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-primary/30 bg-primary/10">
                  <Icon className="size-5 text-primary" aria-hidden="true" />
                </span>
                <div>
                  <p className="font-semibold text-foreground">{method.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {method.how}
                  </p>
                  <div className="mt-3 flex items-start gap-2 rounded-xl border border-primary/20 bg-primary/5 px-3 py-2.5">
                    <Info className="mt-0.5 size-3.5 shrink-0 text-primary" aria-hidden="true" />
                    <p className="text-xs leading-relaxed text-muted-foreground">
                      {method.tip}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* ALL COMMANDERS TABLE */}
      <section id="all-commanders" className="scroll-mt-20">
        <SectionHeading
          icon={Layers}
          kicker="Full roster"
          title="All Commanders by Rarity"
          tag="7 commanders"
        />
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          Abilities sourced from community gameplay footage — verify exact values
          in-game after Friday patches.
        </p>

        {/* Mobile cards */}
        <div className="mt-8 space-y-3 lg:hidden">
          {COMMANDERS.map((cmd) => {
            const { badge, border } = RARITY_STYLE[cmd.rarity]
            const RoleIcon = ROLE_ICON[cmd.role]
            return (
              <div
                key={cmd.name}
                className={`rounded-2xl border ${border} bg-card/70 p-4`}
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <span className="flex size-9 items-center justify-center rounded-xl border border-primary/25 bg-primary/10">
                      <RoleIcon className="size-4 text-primary" aria-hidden="true" />
                    </span>
                    <span className="font-bold text-foreground">{cmd.name}</span>
                  </div>
                  <span className={`shrink-0 rounded-full px-2.5 py-0.5 text-xs font-semibold ${badge}`}>
                    {cmd.rarity}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {cmd.ability}
                </p>
                <div className="mt-3 flex items-center justify-between text-xs">
                  <span className="text-muted-foreground">{cmd.bestFor}</span>
                  <span className={PRIORITY_STYLE[cmd.priority]}>
                    {cmd.priority}-tier
                  </span>
                </div>
              </div>
            )
          })}
        </div>

        {/* Desktop table */}
        <div className="mt-8 hidden overflow-hidden rounded-2xl border border-border/60 bg-card/50 lg:block">
          <div className="grid grid-cols-[120px_90px_1fr_160px_60px] gap-4 border-b border-border/40 px-5 py-3 text-xs font-medium text-muted-foreground">
            <span>Commander</span>
            <span>Rarity</span>
            <span>Ability</span>
            <span>Best for</span>
            <span className="text-right">Priority</span>
          </div>
          <ul className="divide-y divide-border/40">
            {COMMANDERS.map((cmd) => {
              const { badge, border } = RARITY_STYLE[cmd.rarity]
              const RoleIcon = ROLE_ICON[cmd.role]
              return (
                <li
                  key={cmd.name}
                  className="grid grid-cols-[120px_90px_1fr_160px_60px] items-start gap-4 px-5 py-4 hover:bg-primary/5 transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <span className="flex size-8 shrink-0 items-center justify-center rounded-lg border border-primary/25 bg-primary/10">
                      <RoleIcon className="size-3.5 text-primary" aria-hidden="true" />
                    </span>
                    <span className="text-sm font-bold text-foreground">{cmd.name}</span>
                  </div>
                  <span className={`w-fit rounded-full px-2.5 py-0.5 text-xs font-semibold ${badge}`}>
                    {cmd.rarity}
                  </span>
                  <div>
                    <p className="text-sm text-foreground">{cmd.ability}</p>
                    {cmd.notes && (
                      <p className="mt-1 text-xs text-muted-foreground">{cmd.notes}</p>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">{cmd.bestFor}</p>
                  <p className={`text-right text-sm ${PRIORITY_STYLE[cmd.priority]}`}>
                    {cmd.priority}
                  </p>
                </li>
              )
            })}
          </ul>
        </div>

        <p className="mt-3 text-xs text-muted-foreground">
          Priority rating: S = must-have · A = strong pick · B = situational · C = skip unless you have it
        </p>
      </section>

      {/* WHICH COMMANDER FIRST */}
      <section id="best-commanders" className="scroll-mt-20">
        <SectionHeading
          icon={Star}
          kicker="Recommendations"
          title="Which Commander to Get First"
          tag="by stage"
        />
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          The best commander depends on where you are in the game. Follow this
          order if you're unsure.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {PICK_GUIDE.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.stage}
                className="flex gap-4 rounded-2xl border border-border/70 bg-card/70 p-5 shadow-sm"
              >
                <span className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-primary/30 bg-primary/10">
                  <Icon className="size-5 text-primary" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                    {item.stage}
                  </p>
                  <p className="mt-0.5 font-bold text-foreground">{item.pick}</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {item.reason}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* HOW TO UPGRADE */}
      <section id="upgrade-commanders" className="scroll-mt-20">
        <SectionHeading
          icon={Layers}
          kicker="Progression"
          title="How to Upgrade Commanders"
        />
        <ol className="mt-6 space-y-3">
          {UPGRADE_STEPS.map((step, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="flex size-7 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-xs font-bold text-primary">
                {i + 1}
              </span>
              <p className="mt-0.5 text-sm leading-relaxed text-muted-foreground">
                {step}
              </p>
            </li>
          ))}
        </ol>
      </section>

      {/* FAQ */}
      <section id="faq" className="scroll-mt-20">
        <SectionHeading
          icon={Info}
          kicker="Quick answers"
          title="Commanders FAQ"
          tag={`${FAQ_ITEMS.length} questions`}
        />
        <dl className="mt-6 divide-y divide-border/60">
          {FAQ_ITEMS.map((item) => (
            <div key={item.q} className="py-4">
              <dt className="font-semibold text-foreground">{item.q}</dt>
              <dd className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                {item.a}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      {/* CTA */}
      <div className="rounded-2xl border border-primary/25 bg-primary/5 p-6">
        <p className="text-sm font-semibold text-foreground">
          Ready to use your commanders in raids?
        </p>
        <p className="mt-1 text-sm text-muted-foreground">
          Pair Gunner or Siege Breaker with a strong nuke tier for the best
          PvP results. Check the raid guide for timing and target selection.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <TrackedCtaLink
            href="/raid"
            label="Raid Guide"
            placement="guide_cards"
            className="inline-flex min-h-10 items-center gap-2 rounded-xl bg-primary px-4 text-sm font-bold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            Raid Guide
            <ArrowRight className="size-4 shrink-0" aria-hidden="true" />
          </TrackedCtaLink>
          <TrackedCtaLink
            href="/codes"
            label="Get Codes"
            placement="guide_cards"
            className="inline-flex min-h-10 items-center gap-2 rounded-xl border border-primary/40 bg-card/90 px-4 text-sm font-bold text-primary shadow-sm transition-colors hover:border-primary/60 hover:bg-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            Get Codes
            <ArrowRight className="size-4 shrink-0" aria-hidden="true" />
          </TrackedCtaLink>
        </div>
      </div>

    </div>
  )
}
