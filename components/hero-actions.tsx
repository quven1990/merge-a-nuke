"use client"

import {
  ArrowUpRight,
  Atom,
  BadgeCheck,
  Combine,
  Coins,
  Lock,
  Sparkles,
  Swords,
  TrendingUp,
} from "lucide-react"

import { TrackedCtaLink } from "@/components/tracked-cta-link"
import { cn } from "@/lib/utils"

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
    icon: Swords,
    title: "Raid & Defense Tips",
    note: "Attack and protect",
    href: "/raid",
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

export function HeroPrimaryActions() {
  return (
    <>
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

      <div className="mt-8 grid grid-cols-2 gap-3 sm:mt-10">
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
    </>
  )
}

const GAME_LOOP = [
  {
    icon: Combine,
    title: "Merge",
    desc: "Combine bombs into bigger nukes",
    href: "/beginner-guide",
    color: "border-primary/40 bg-primary/15 text-primary",
  },
  {
    icon: Coins,
    title: "Earn",
    desc: "Cash every second, even offline",
    href: "/offline-cash",
    color: "border-hazard/40 bg-hazard/15 text-hazard",
  },
  {
    icon: Swords,
    title: "Raid",
    desc: "Steal cash from other bases",
    href: "/raid",
    color: "border-boom/40 bg-boom/15 text-boom",
  },
  {
    icon: Lock,
    title: "Lock",
    desc: "Protect your base before you leave",
    href: "/raid",
    color: "border-primary/40 bg-primary/15 text-primary",
  },
] as const

export function HeroGameLoopCard() {
  return (
    <div className="rounded-3xl border-2 border-primary/25 bg-card/90 p-4 shadow-xl glow-border sm:p-5">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border/50 pb-3">
        <h2 className="text-lg font-bold text-foreground">How the game works</h2>
        <span className="rounded-full bg-boom/15 px-2.5 py-0.5 text-xs font-semibold text-boom">
          Core loop
        </span>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-3">
        {GAME_LOOP.map((item) => (
          <TrackedCtaLink
            key={item.title}
            href={item.href}
            label={item.title}
            placement="hero_loop"
            className={cn(
              "group relative rounded-2xl border p-3 transition-all hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-card",
              item.color,
            )}
            aria-label={`${item.title}: ${item.desc}`}
          >
            <item.icon
              className="mb-1.5 size-4 transition-transform group-hover:scale-110"
              aria-hidden="true"
            />
            <p className="text-sm font-bold text-foreground">{item.title}</p>
            <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">
              {item.desc}
            </p>
            <ArrowUpRight
              className="absolute top-2.5 right-2.5 size-3 text-muted-foreground/40 transition-colors group-hover:text-foreground"
              aria-hidden="true"
            />
          </TrackedCtaLink>
        ))}
      </div>

      <p className="mt-4 text-center text-sm text-muted-foreground">
        Merge nukes. Stack your arsenal. Raid everyone.
      </p>
    </div>
  )
}
