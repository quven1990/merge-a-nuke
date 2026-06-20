import Link from "next/link"
import {
  ArrowUpRight,
  Boxes,
  Clock,
  Coins,
  Combine,
  Lock,
  Rocket,
  Swords,
  Ticket,
} from "lucide-react"

import { SectionHeading } from "@/components/hud"

const STEPS = [
  {
    icon: Ticket,
    title: "Redeem all active codes",
    desc: "Grab every working code first so you start with extra cash and nukes.",
    href: "/codes",
  },
  {
    icon: Combine,
    title: "Merge starter nukes",
    desc: "Combine your lowest bombs quickly to free up space and raise income.",
    href: "/beginner-guide#how-to-merge",
  },
  {
    icon: Combine,
    title: "Spend on Store upgrades",
    desc: "Buy Spawn Speed, then Spawn Tier and Max Spawn — see the Upgrades guide for order.",
    href: "/upgrades",
  },
  {
    icon: Boxes,
    title: "Keep your base organized",
    desc: "A tidy layout makes merging faster and prevents costly mistakes.",
    href: "/beginner-guide#how-to-merge",
  },
  {
    icon: Rocket,
    title: "Unlock stronger nukes",
    desc: "Push toward higher tiers once your income can support the jump.",
    href: "/progression",
  },
  {
    icon: Swords,
    title: "Try raids only when income is stable",
    desc: "Raiding too early stalls your growth — build a steady base first.",
    href: "/raid",
  },
  {
    icon: Lock,
    title: "Lock your base before going offline",
    desc: "Protect your progress so you return to a safe, productive base.",
    href: "/offline-cash",
  },
]

export function QuickStart() {
  return (
    <section
      id="quick-start"
      className="relative scroll-mt-20 border-b border-border/60 py-16 lg:py-20"
    >
      <div className="reactor-dots absolute inset-0 opacity-40" aria-hidden="true" />
      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          icon={Clock}
          kicker="New player route"
          title="First 30 Minutes"
          tag="7 easy steps"
        />
        <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
          A simple beginner route to give your base a strong, fast start. Follow
          these steps in order before experimenting on your own.
        </p>

        <ol className="relative mt-10 space-y-6 border-l-2 border-border/70 pl-8">
          {STEPS.map((step, i) => (
            <li key={step.title} className="relative">
              <span className="absolute -left-[41px] flex size-8 items-center justify-center rounded-full border border-primary/40 bg-card text-primary shadow-sm">
                <step.icon className="size-4" aria-hidden="true" />
              </span>
              <Link
                href={step.href}
                className="group block min-h-11 rounded-2xl border border-border/70 bg-card/70 p-4 shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary/50 hover:bg-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                aria-label={`${step.title} — open guide`}
              >
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold text-primary">
                    Step {i + 1}
                  </span>
                </div>
                <h3 className="mt-1 font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {step.desc}
                </p>
                <span className="mt-3 inline-flex items-center gap-1.5 text-xs font-bold text-primary">
                  Open this guide
                  <ArrowUpRight
                    className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden="true"
                  />
                </span>
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
