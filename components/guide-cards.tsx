import type { ComponentType } from "react"
import {
  Coins,
  Combine,
  Lock,
  ScrollText,
  Sparkles,
  Swords,
  Ticket,
  TrendingUp,
  Trophy,
} from "lucide-react"

import { TrackedCtaLink } from "@/components/tracked-cta-link"
import { SectionHeading } from "@/components/hud"

type Guide = {
  icon: ComponentType<{ className?: string }>
  title: string
  desc: string
  href: string
}

const GUIDES: Guide[] = [
  {
    icon: Ticket,
    title: "Codes",
    desc: "Find active codes and learn the quickest way to redeem them.",
    href: "/codes",
  },
  {
    icon: Sparkles,
    title: "Beginner Guide",
    desc: "A simple route for new players who want faster early growth.",
    href: "/beginner-guide",
  },
  {
    icon: TrendingUp,
    title: "Progression",
    desc: "Know what to upgrade first and how to steadily grow your base.",
    href: "/progression",
  },
  {
    icon: TrendingUp,
    title: "Upgrades",
    desc: "Spawn Tier, Spawn Speed, Max Spawn, and Lock Base — what to buy first.",
    href: "/upgrades",
  },
  {
    icon: Combine,
    title: "How to Merge",
    desc: "Same-level rules, doubling chain, and board space tips.",
    href: "/beginner-guide",
  },
  {
    icon: Swords,
    title: "Raid Guide",
    desc: "Learn when to raid, what to protect, and how to avoid wasted runs.",
    href: "/raid",
  },
  {
    icon: Trophy,
    title: "Tier List",
    desc: "Compare nuke tiers and decide what to merge toward next.",
    href: "/tier-list",
  },
  {
    icon: Coins,
    title: "Offline Cash",
    desc: "Prepare your base properly before you leave the game.",
    href: "/offline-cash",
  },
  {
    icon: Combine,
    title: "Merging",
    desc: "Master efficient merge order to keep your grid clean and fast.",
    href: "/beginner-guide#how-to-merge",
  },
  {
    icon: Lock,
    title: "Base Lock",
    desc: "Keep your progress safe while you are away or merging.",
    href: "/raid",
  },
  {
    icon: ScrollText,
    title: "FAQ",
    desc: "Quick answers to the most common Merge a Nuke questions.",
    href: "/faq",
  },
]

export function GuideCards() {
  return (
    <section
      id="guides"
      className="relative scroll-mt-20 border-b border-border/60 py-16 lg:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          icon={Boxes}
          kicker="Pick a guide"
          title="Wiki Guides"
          tag="11 topics"
        />
        <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
          Each topic has its own page with a focused guide. Browse here on the
          homepage, or open the full article from the navigation bar.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {GUIDES.map((guide, i) => (
            <TrackedCtaLink
              key={guide.title}
              href={guide.href}
              label={guide.title}
              placement="guide_cards"
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-border/70 bg-card/70 p-5 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-primary/50 hover:shadow-md"
            >
              <span
                className="hazard-stripes absolute inset-x-0 top-0 h-1 opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                aria-hidden="true"
              />
              <div className="mb-4 flex items-center justify-between">
                <span className="flex size-11 items-center justify-center rounded-2xl border border-primary/30 bg-primary/10 text-primary transition-transform duration-200 group-hover:scale-105">
                  <guide.icon className="size-5" aria-hidden="true" />
                </span>
                <span className="text-[10px] font-medium text-muted-foreground/70">
                  #{i + 1}
                </span>
              </div>
              <h3 className="font-bold tracking-tight text-foreground">
                {guide.title}
              </h3>
              <p className="mt-1.5 flex-1 text-sm leading-relaxed text-muted-foreground">
                {guide.desc}
              </p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground transition-colors group-hover:text-primary">
                <span className="size-1.5 rounded-full bg-muted-foreground/40 transition-colors group-hover:bg-primary" />
                Open guide →
              </span>
            </TrackedCtaLink>
          ))}
        </div>
      </div>
    </section>
  )
}

function Boxes(props: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={props.className}
      aria-hidden="true"
    >
      <path d="M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z" />
      <path d="m7 16.5-4.74-2.85" />
      <path d="m7 16.5 5-3" />
      <path d="m7 16.5v5.17" />
      <path d="M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z" />
      <path d="m17 16.5-5-3" />
      <path d="m17 16.5 4.74-2.85" />
      <path d="M17 16.5v5.17" />
      <path d="M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z" />
      <path d="M12 8 7.26 5.15" />
      <path d="m12 8 4.74-2.85" />
      <path d="M12 13.5V8" />
    </svg>
  )
}
