import type { ElementType } from "react"
import Link from "next/link"
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Coins,
  Crown,
  ShieldAlert,
  Sparkles,
  Swords,
  Target,
  Zap,
} from "lucide-react"

import { TrackedCtaLink } from "@/components/tracked-cta-link"
import { WikiIllustration } from "@/components/wiki-illustration"
import {
  ACQUIRE_METHODS,
  type Commander,
  getCommanderPath,
  PRIORITY_STYLE,
  RARITY_STYLE,
} from "@/lib/commanders-data"
import { getRelatedCommanders } from "@/lib/commander-page"

const ROLE_META: Record<
  Commander["role"],
  { label: string; icon: ElementType }
> = {
  income: { label: "Income", icon: Coins },
  offense: { label: "Offense", icon: Swords },
  defense: { label: "Defense", icon: ShieldAlert },
  automation: { label: "Automation", icon: Zap },
}

export function CommanderDetail({ commander }: { commander: Commander }) {
  const { badge, border } = RARITY_STYLE[commander.rarity]
  const role = ROLE_META[commander.role]
  const RoleIcon = commander.pending ? Sparkles : role.icon
  const related = getRelatedCommanders(commander)
  const hasAcquireGuide = Boolean(commander.acquireSummary || commander.acquireSteps?.length)

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <TrackedCtaLink
        href="/commanders"
        label="Back to all commanders"
        placement="guide_cards"
        className="inline-flex min-h-10 items-center gap-2 text-sm font-semibold text-muted-foreground transition-colors hover:text-primary"
      >
        <ArrowLeft className="size-4" aria-hidden="true" />
        All commanders
      </TrackedCtaLink>

      <div className={`mt-6 rounded-2xl border bg-card/80 p-6 sm:p-8 ${border}`}>
        <div className="flex flex-wrap items-start gap-4">
          <span className="flex size-14 shrink-0 items-center justify-center rounded-2xl border border-primary/30 bg-primary/10">
            <RoleIcon className="size-7 text-primary" aria-hidden="true" />
          </span>
          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-2">
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                {commander.name}
              </h2>
              {commander.pending ? (
                <span className="rounded-full bg-primary/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-primary">
                  New
                </span>
              ) : null}
              {commander.limited ? (
                <span className="rounded-full bg-hazard/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-hazard">
                  LTM
                </span>
              ) : null}
            </div>
            <div className="mt-3 flex flex-wrap items-center gap-2">
              <span className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${badge}`}>
                {commander.rarity}
              </span>
              <span className="rounded-full border border-border/70 bg-background px-2.5 py-0.5 text-xs font-semibold text-muted-foreground">
                {role.label}
              </span>
              <span className={`text-sm ${PRIORITY_STYLE[commander.priority]}`}>
                Priority {commander.priority}
              </span>
            </div>
          </div>
        </div>

        {commander.image ? (
          <WikiIllustration
            src={commander.image}
            alt={`${commander.name} commander in Merge a Nuke`}
            variant="banner"
            caption={`${commander.name} — Merge a Nuke commander`}
            className="mt-6"
          />
        ) : null}

        {commander.acquireSummary ? (
          <div className="mt-6 rounded-2xl border border-primary/25 bg-primary/5 p-4 sm:p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              Quick answer
            </p>
            <p className="mt-2 text-sm font-semibold text-foreground">
              How to get {commander.name}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {commander.acquireSummary}
            </p>
          </div>
        ) : null}

        {commander.rebirth8Note ? (
          <div className="mt-4 rounded-2xl border border-hazard/30 bg-hazard/5 p-4 sm:p-5">
            <p className="text-sm font-bold text-foreground">Rebirth 8 requirement</p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {commander.rebirth8Note}
            </p>
            <div className="mt-3 flex flex-wrap gap-3 text-sm">
              {commander.name !== "Overclocker" ? (
                <Link
                  href="/commanders/overclocker"
                  className="font-semibold text-primary hover:underline"
                >
                  Overclocker
                </Link>
              ) : null}
              {commander.name !== "Barrier" ? (
                <Link
                  href="/commanders/barrier"
                  className="font-semibold text-primary hover:underline"
                >
                  Barrier
                </Link>
              ) : null}
              <Link href="/progression" className="font-semibold text-primary hover:underline">
                Rebirth 8 checklist
              </Link>
            </div>
          </div>
        ) : null}

        {hasAcquireGuide && commander.acquireSteps?.length ? (
          <div className="mt-6">
            <h3 className="text-base font-bold text-foreground">
              Step-by-step: how to get {commander.name}
            </h3>
            <ul className="mt-4 space-y-2.5">
              {commander.acquireSteps.map((step) => (
                <li
                  key={step}
                  className="flex gap-2 text-sm leading-relaxed text-muted-foreground"
                >
                  <CheckCircle2
                    className="mt-0.5 size-4 shrink-0 text-primary"
                    aria-hidden="true"
                  />
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        {commander.pending ? (
          <p className="mt-6 rounded-xl border border-border/70 bg-card/60 px-4 py-3 text-sm text-muted-foreground">
            Passive ability text is still pending in-game verification
            {commander.acquireSummary
              ? " — use the how-to-get steps above meanwhile."
              : ". This page will update once a card read is confirmed."}
          </p>
        ) : null}

        <dl className="mt-8 space-y-5">
          <div>
            <dt className="text-sm font-bold uppercase tracking-wide text-primary">
              Ability
            </dt>
            <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {commander.ability}
            </dd>
          </div>
          <div>
            <dt className="text-sm font-bold uppercase tracking-wide text-primary">
              Best for
            </dt>
            <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {commander.bestFor}
            </dd>
          </div>
          {commander.notes ? (
            <div>
              <dt className="text-sm font-bold uppercase tracking-wide text-primary">
                Notes
              </dt>
              <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {commander.notes}
              </dd>
            </div>
          ) : null}
        </dl>
      </div>

      <section className="mt-10">
        <h3 className="text-lg font-bold text-foreground">
          {hasAcquireGuide ? "Other ways to get commanders" : `How to get ${commander.name}`}
        </h3>
        {hasAcquireGuide ? (
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            {commander.name}&apos;s primary path is above. These fallback methods apply to the
            wider commander pool and may not drop Contract Board exclusives.
          </p>
        ) : (
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            {commander.eventMap
              ? `${commander.name} is tied to the ${commander.eventMap} event. While that event is live, clear the map or defeat the spawned commander — last hit captures it.`
              : "Commanders can be captured on the map, bought in the Shop, earned from milestones, rolled from Mystery Supply Drops, or dropped from event maps depending on the unit."}
          </p>
        )}
        <ul className={`space-y-3 ${hasAcquireGuide ? "mt-3" : "mt-5"}`}>
          {ACQUIRE_METHODS.map((method) => (
            <li
              key={method.id}
              className="rounded-xl border border-border/70 bg-card/70 p-4 text-sm text-muted-foreground"
            >
              <p className="font-semibold text-foreground">{method.title}</p>
              <p className="mt-1 leading-relaxed">{method.how}</p>
            </li>
          ))}
        </ul>
        {commander.eventMap ? (
          <p className="mt-4 text-sm text-muted-foreground">
            See the{" "}
            <Link href="/raid" className="font-medium text-primary hover:underline">
              raid guide
            </Link>{" "}
            for event map timers, war mechanics, and Mystery Supply Drop tips.
          </p>
        ) : null}
      </section>

      {related.length > 0 ? (
        <section className="mt-10">
          <h3 className="text-lg font-bold text-foreground">
            Other {commander.rarity} commanders
          </h3>
          <ul className="mt-4 grid gap-3 sm:grid-cols-3">
            {related.map((item) => (
              <li key={item.name}>
                <Link
                  href={getCommanderPath(item)}
                  className="group flex items-center justify-between rounded-xl border border-border/70 bg-card/70 px-4 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary/50 hover:text-primary"
                >
                  {item.name}
                  <ArrowRight
                    className="size-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-primary"
                    aria-hidden="true"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      <div className="mt-10 flex flex-wrap gap-3">
        <TrackedCtaLink
          href="/commanders"
          label="All commanders"
          placement="guide_cards"
          className="inline-flex min-h-10 items-center gap-2 rounded-xl bg-primary px-4 text-sm font-bold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
        >
          <Crown className="size-4" aria-hidden="true" />
          All commanders
        </TrackedCtaLink>
        <TrackedCtaLink
          href="/raid"
          label="Raid guide"
          placement="guide_cards"
          className="inline-flex min-h-10 items-center gap-2 rounded-xl border border-primary/40 bg-card/90 px-4 text-sm font-bold text-primary shadow-sm transition-colors hover:border-primary/60 hover:bg-card"
        >
          <Target className="size-4" aria-hidden="true" />
          Raid guide
        </TrackedCtaLink>
      </div>
    </div>
  )
}
