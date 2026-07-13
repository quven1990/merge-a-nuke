import {
  Anchor,
  ArrowRight,
  Coins,
  Crown,
  Info,
  Layers,
  Package,
  ShieldAlert,
  ShoppingBag,
  Sparkles,
  Star,
  Swords,
  Target,
  Trophy,
  Zap,
} from "lucide-react"

import { SectionHeading } from "@/components/hud"
import { CommanderRoster } from "@/components/commander-roster"
import { CommanderTierList } from "@/components/commander-tier-list"
import { EventMapDropsSection } from "@/components/event-map-drops-section"
import { TrackedCtaLink } from "@/components/tracked-cta-link"
import { ACQUIRE_METHODS, COMMANDERS } from "@/lib/commanders-data"

const ACQUIRE_ICON = [Target, ShoppingBag, Trophy, Anchor, Sparkles, Package]

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

export function CommandersSection() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 space-y-20">

      {/* PATCH UPDATE BANNER — July 13 Advanced Warfare */}
      <section
        id="commanders-july13"
        aria-labelledby="commanders-july13-heading"
        className="rounded-2xl border border-hazard/30 bg-hazard/5 p-5 sm:p-6"
      >
        <div className="flex items-center gap-2.5">
          <span className="flex size-8 shrink-0 items-center justify-center rounded-xl border border-hazard/30 bg-hazard/10">
            <Sparkles className="size-4 text-hazard" aria-hidden="true" />
          </span>
          <h2
            id="commanders-july13-heading"
            className="text-base font-bold tracking-tight text-foreground sm:text-lg"
          >
            Update: Advanced Warfare Pack (July 13, 2026)
          </h2>
        </div>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          Six new commanders from the{" "}
          <strong className="text-foreground">Advanced Warfare Commander Pack</strong>:{" "}
          <strong className="text-foreground">Grifter</strong> (Rare, 35%),{" "}
          <strong className="text-foreground">Scout</strong> (Rare, 30%),{" "}
          <strong className="text-foreground">Sapper</strong> (Epic, 20%),{" "}
          <strong className="text-foreground">Medic</strong> (Epic, 10%),{" "}
          <strong className="text-yellow-400">Recon</strong> (Legendary, 4.5%), and{" "}
          <strong className="text-rose-400">Drone</strong> (Admiral, 0.5%). Recon can also spawn
          through the base commander pool. Ability cards are{" "}
          <strong className="text-foreground">pending verification</strong> on this wiki.
        </p>
      </section>

      {/* PATCH UPDATE BANNER — July 4 LTM */}
      <section
        id="commanders-july4"
        aria-labelledby="commanders-july4-heading"
        className="rounded-2xl border border-hazard/30 bg-hazard/5 p-5 sm:p-6"
      >
        <div className="flex items-center gap-2.5">
          <span className="flex size-8 shrink-0 items-center justify-center rounded-xl border border-hazard/30 bg-hazard/10">
            <Sparkles className="size-4 text-hazard" aria-hidden="true" />
          </span>
          <h2
            id="commanders-july4-heading"
            className="text-base font-bold tracking-tight text-foreground sm:text-lg"
          >
            Update: LTM &amp; 4th of July (July 4, 2026)
          </h2>
        </div>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          Four new commanders joined the roster:{" "}
          <strong className="text-foreground">Uncle Sam</strong> (Common, 4th of July
          event), <strong className="text-foreground">Sergeant</strong> (Rare),{" "}
          <strong className="text-foreground">Tank</strong> (Epic), and{" "}
          <strong className="text-yellow-400">Stalker</strong> (Legendary) from the{" "}
          <strong className="text-foreground">Military Compound</strong> LTM (~2-hour
          rotation).{" "}
          <strong className="text-foreground">Mystery Supply Drops</strong> also roll a
          random commander when destroyed.
        </p>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          Balance changes: <strong className="text-foreground">Sovereign</strong> auto-attack
          rate was significantly nerfed, and <strong className="text-foreground">Apache</strong>{" "}
          map spawn dropped from 0.2% to 0.05%. New unit abilities are pending in-game
          verification.
        </p>
      </section>

      {/* PATCH UPDATE BANNER — Commanders Pt. 2 */}
      <section
        id="commanders-pt2"
        aria-labelledby="commanders-pt2-heading"
        className="rounded-2xl border border-primary/30 bg-primary/5 p-5 sm:p-6"
      >
        <div className="flex items-center gap-2.5">
          <span className="flex size-8 shrink-0 items-center justify-center rounded-xl border border-primary/30 bg-primary/10">
            <Sparkles className="size-4 text-primary" aria-hidden="true" />
          </span>
          <h2
            id="commanders-pt2-heading"
            className="text-base font-bold tracking-tight text-foreground sm:text-lg"
          >
            Update: Commanders Pt. 2 (June 28, 2026)
          </h2>
        </div>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          The Commanders Pt. 2 patch added a brand-new{" "}
          <strong className="text-rose-400">Admiral</strong> rarity plus 8 units:{" "}
          <strong className="text-foreground">Broker</strong> and{" "}
          <strong className="text-foreground">Foreman</strong> (Common),{" "}
          <strong className="text-foreground">Artillery</strong>,{" "}
          <strong className="text-foreground">Barrier</strong> and{" "}
          <strong className="text-foreground">Looter</strong> (Rare),{" "}
          <strong className="text-foreground">Overclocker</strong> (Epic), and{" "}
          <strong className="text-foreground">Apache</strong> and{" "}
          <strong className="text-foreground">Carrier</strong> (Admiral). A
          limited-time <strong className="text-foreground">Conquerors pack</strong>{" "}
          adds two more.
        </p>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          Two new event maps —{" "}
          <strong className="text-foreground">Harbor</strong> and{" "}
          <strong className="text-foreground">Oil Rig</strong> — each spawn two
          event-exclusive commanders, and{" "}
          <strong className="text-foreground">
            Salvager, Engineer, Gunner and Spotter
          </strong>{" "}
          are now ground units. New unit abilities are pending in-game
          verification.
        </p>
      </section>

      {/* WHAT ARE COMMANDERS — GEO definition block */}
      <section id="what-are-commanders" className="scroll-mt-20">
        <SectionHeading
          icon={Crown}
          kicker="Overview"
          title="What Are Commanders?"
        />
        <div className="mt-5 max-w-2xl space-y-3 text-sm leading-relaxed text-muted-foreground">
          <p>
            <strong className="text-foreground">Commanders are special units</strong> you can
            equip in Merge a Nuke to give your island passive buffs. Each commander has a unique
            ability — from automatically merging your lowest nukes every minute, to boosting
            the cash output of nearby nukes every 30 seconds, to adding a flat +15% damage
            bonus to every nuke attack you launch.
          </p>
          <p>
            After the July 13, 2026 update there are 5 rarity tiers:{" "}
            <strong className="text-foreground">Common</strong> (6 commanders),{" "}
            <strong className="text-blue-400">Rare</strong> (8 commanders),{" "}
            <strong className="text-purple-400">Epic</strong> (5 commanders),{" "}
            <strong className="text-yellow-400">Legendary</strong> (3 commanders), and{" "}
            <strong className="text-rose-400">Admiral</strong> (3 commanders).
            Higher rarity means stronger and rarer abilities. Multiple commanders can be
            active at the same time.
          </p>
          <p>
            Commanders first appear as enemy units on the shared map — they arrive by boat and
            have an HP bar. Any player can attack them, but only the player who lands the
            killing blow captures the commander.
          </p>
        </div>
      </section>

      {/* HOW TO GET */}
      <section id="how-to-get" className="scroll-mt-20">
        <SectionHeading
          icon={Target}
          kicker="Unlock methods"
          title="How to Get Commanders"
          tag="6 ways"
        />
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          Commanders can be unlocked in six ways. Capturing them on event maps —
          Harbor, Oil Rig, Military Compound, and Military Base — is the most reliable
          free method for exclusives, while the Advanced Warfare Pack and Mystery Supply
          Drops add Robux and passive RNG paths.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
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
          tag={`${COMMANDERS.length} commanders`}
        />
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          Abilities sourced from community gameplay footage — verify exact values
          in-game after Friday patches. Units marked{" "}
          <span className="font-semibold text-primary">New</span> have unverified
          abilities. <span className="font-semibold text-hazard">LTM</span> marks
          limited-time event units. Tap any commander to open its full guide page.
        </p>

        <CommanderRoster />

        <p className="mt-3 text-xs text-muted-foreground">
          Priority rating: S = must-have · A = strong pick · B = situational · C = skip unless you have it
        </p>
      </section>

      <CommanderTierList />

      <EventMapDropsSection />

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
