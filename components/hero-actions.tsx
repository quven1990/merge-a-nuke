"use client"

import {
  ArrowUpRight,
  Combine,
  Coins,
  Lock,
  Swords,
} from "lucide-react"

import { TrackedCtaLink } from "@/components/tracked-cta-link"
import { cn } from "@/lib/utils"

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
