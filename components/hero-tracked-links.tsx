"use client"

import {
  ArrowUpRight,
  Atom,
  BadgeCheck,
  Sparkles,
  TrendingUp,
} from "lucide-react"

import { TrackedCtaLink } from "@/components/tracked-cta-link"

const INFO_CARDS = [
  {
    icon: BadgeCheck,
    title: "Codes Updated",
    note: "Fresh reward drops",
    href: "/codes",
  },
  {
    icon: Sparkles,
    title: "Beginner Friendly",
    note: "Easy early route",
    href: "/beginner-guide",
  },
  {
    icon: TrendingUp,
    title: "Progression Guide",
    note: "Grow your base",
    href: "/progression",
  },
] as const

const QUICK_LINK_CLASS =
  "group relative flex flex-col rounded-2xl border border-border/70 bg-card/70 p-3 shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary/50 hover:bg-card hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"

export function HeroPrimaryTrackedLinks() {
  return (
    <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap">
      <TrackedCtaLink
        href="/codes"
        label="View Working Codes"
        placement="hero_primary"
        className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 text-sm font-bold text-primary-foreground shadow-md hover:bg-primary/90 sm:w-auto"
      >
        <Atom className="size-4" aria-hidden="true" />
        View Working Codes
      </TrackedCtaLink>
      <TrackedCtaLink
        href="/beginner-guide"
        label="Start Beginner Guide"
        placement="hero_primary"
        className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl border border-primary/40 bg-transparent px-6 text-sm font-bold text-foreground hover:bg-primary/10 sm:w-auto"
      >
        <Sparkles className="size-4" aria-hidden="true" />
        Start Beginner Guide
      </TrackedCtaLink>
    </div>
  )
}

export function HeroInfoCardTrackedLinks() {
  return (
    <div className="mt-8 hidden grid-cols-3 gap-3 sm:mt-10 sm:grid">
        {INFO_CARDS.map((card) => (
          <TrackedCtaLink
            key={card.title}
            href={card.href}
            label={card.title}
            placement="hero_card"
            className={QUICK_LINK_CLASS}
            aria-label={`${card.title}: ${card.note}`}
          >
            <card.icon
              className="mb-2 size-5 text-primary transition-transform group-hover:scale-110"
              aria-hidden="true"
            />
            <p className="text-sm font-semibold text-foreground group-hover:text-primary">
              {card.title}
            </p>
            <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">
              {card.note}
            </p>
            <ArrowUpRight
              className="absolute top-3 right-3 size-3.5 text-muted-foreground/50 transition-colors group-hover:text-primary"
              aria-hidden="true"
            />
          </TrackedCtaLink>
        ))}
    </div>
  )
}
