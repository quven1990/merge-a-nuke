import Link from "next/link"
import {
  ArrowUpRight,
  Atom,
  BadgeCheck,
  Bomb,
  Sparkles,
  Swords,
  TrendingUp,
} from "lucide-react"

import { HeroGameLoopCardLazy } from "@/components/hero-game-loop-lazy"
import { Badge } from "@/components/ui/badge"
import { QuickAnswer } from "@/components/quick-answer"
import { WikiIllustration } from "@/components/wiki-illustration"
import { SEO_PAGES } from "@/lib/seo-pages"

const TICKER = [
  "Merge bigger nukes",
  "New codes every Friday",
  "Raid smart, lock often",
  "Fan-made player guide",
] as const

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

export function HeroSection() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-border/60"
    >
      <div className="reactor-grid absolute inset-0 opacity-50" aria-hidden="true" />
      <div
        className="absolute -top-20 left-1/4 size-80 rounded-full bg-primary/20 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-24 right-1/4 size-80 rounded-full bg-boom/15 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-7xl items-start gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-2 lg:items-center lg:gap-10 lg:py-20 lg:px-8">
        <div className="min-w-0">
          <Badge
            variant="outline"
            className="mb-5 gap-1.5 rounded-full border-primary/40 bg-primary/10 text-xs font-medium text-primary"
          >
            <Bomb className="size-3.5" aria-hidden="true" />
            Fan-made Roblox Wiki
          </Badge>
          <h1 className="text-3xl font-extrabold tracking-tight text-balance sm:text-5xl lg:text-6xl">
            Merge a Nuke
            <span className="mt-2 block">
              <span className="inline-block rounded-2xl bg-primary px-4 py-1.5 text-primary-foreground shadow-md glow-primary">
                Wiki
              </span>
            </span>
          </h1>
          <p className="hero-lcp mt-5 max-w-xl text-base leading-relaxed text-muted-foreground text-pretty sm:mt-6 sm:text-lg">
            A fan-made <strong className="text-foreground">Merge a Nuke Wiki</strong>{" "}
            for Roblox players — find working codes, upgrade priorities, nuke
            tier lists, raid strategies, offline cash tips, and rebirth advice
            in one place.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap">
            <Link
              href="/codes"
              className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 text-sm font-bold text-primary-foreground shadow-md hover:bg-primary/90 sm:w-auto"
            >
              <Atom className="size-4" aria-hidden="true" />
              View Working Codes
            </Link>
            <Link
              href="/beginner-guide"
              className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl border border-primary/40 bg-transparent px-6 text-sm font-bold text-foreground hover:bg-primary/10 sm:w-auto"
            >
              <Sparkles className="size-4" aria-hidden="true" />
              Start Beginner Guide
            </Link>
          </div>

          {SEO_PAGES.home.tldr ? (
            <QuickAnswer className="mt-5 max-w-xl" compact>
              {SEO_PAGES.home.tldr}
            </QuickAnswer>
          ) : null}

          <div className="mt-8 grid grid-cols-2 gap-3 sm:mt-10">
            {INFO_CARDS.map((card) => (
              <Link
                key={card.title}
                href={card.href}
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
              </Link>
            ))}
          </div>
        </div>

        <div className="relative min-w-0 space-y-5">
          <WikiIllustration
            src="/images/hero-base-merge.webp"
            alt="Roblox-style illustration of a blocky avatar beside giant yellow studded nukes on a green baseplate"
            variant="hero"
            caption="Fan-made artwork inspired by Merge a Nuke — not an official screenshot"
            priority
          />
          <HeroGameLoopCardLazy />
        </div>
      </div>

      <div className="relative border-t border-primary/15 bg-card/50 px-4 py-2.5">
        <div className="mx-auto flex max-w-7xl items-center gap-3">
          <span
            className="hazard-stripes hidden h-2.5 w-8 shrink-0 rounded-full sm:block"
            aria-hidden="true"
          />
          <span className="shrink-0 text-xs font-semibold text-primary">
            What&apos;s new
          </span>
          <div className="min-w-0 flex-1 overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <div className="flex w-max items-center gap-5 pr-4 text-xs text-muted-foreground sm:pr-0">
              {TICKER.map((t) => (
                <span key={t} className="flex items-center gap-2 whitespace-nowrap">
                  <span className="text-boom">•</span>
                  {t}
                </span>
              ))}
            </div>
          </div>
          <span
            className="hazard-stripes hidden h-2.5 w-8 shrink-0 rounded-full sm:block"
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  )
}
