import Link from "next/link"
import {
  ArrowRight,
  Coins,
  Rocket,
  Sparkles,
  Swords,
  Ticket,
  type LucideIcon,
} from "lucide-react"

type JourneyStep = {
  icon: LucideIcon
  label: string
  detail: string
  href: `/${string}`
}

const JOURNEY: JourneyStep[] = [
  {
    icon: Ticket,
    label: "Claim codes",
    detail: "Start with free cash and nukes",
    href: "/codes",
  },
  {
    icon: Sparkles,
    label: "Learn the basics",
    detail: "Merge cleanly and avoid early stalls",
    href: "/beginner-guide",
  },
  {
    icon: Coins,
    label: "Build income",
    detail: "Buy upgrades in the right order",
    href: "/upgrades",
  },
  {
    icon: Swords,
    label: "Raid & go offline",
    detail: "Attack safely and protect your base",
    href: "/raid",
  },
  {
    icon: Rocket,
    label: "Prepare to rebirth",
    detail: "Reset only when growth slows",
    href: "/faq#rebirth",
  },
]

export function PlayerJourney({ compact = false }: { compact?: boolean }) {
  return (
    <section
      aria-labelledby={compact ? "journey-heading-compact" : "journey-heading"}
      className={compact ? "py-10" : "border-b border-border/60 py-12 lg:py-16"}
    >
      <div className={compact ? "" : "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"}>
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">
          Recommended route
        </p>
        <h2
          id={compact ? "journey-heading-compact" : "journey-heading"}
          className="mt-2 text-2xl font-bold tracking-tight"
        >
          From first code to first rebirth
        </h2>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          Follow these guides in order when you want the shortest path forward.
          Each step answers what to do next.
        </p>

        <ol className="mt-6 grid gap-3 md:grid-cols-5">
          {JOURNEY.map((step, index) => (
            <li key={step.href} className="relative">
              <Link
                href={step.href}
                className="group flex h-full min-h-32 flex-col rounded-2xl border border-border/70 bg-card/70 p-4 transition-all hover:-translate-y-0.5 hover:border-primary/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                <span className="flex items-center justify-between">
                  <span className="flex size-9 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 text-primary">
                    <step.icon className="size-4" aria-hidden="true" />
                  </span>
                  <span className="text-xs font-bold text-muted-foreground">
                    {index + 1}
                  </span>
                </span>
                <span className="mt-3 font-bold text-foreground group-hover:text-primary">
                  {step.label}
                </span>
                <span className="mt-1 text-xs leading-relaxed text-muted-foreground">
                  {step.detail}
                </span>
              </Link>
              {index < JOURNEY.length - 1 ? (
                <ArrowRight
                  className="absolute -right-2.5 top-1/2 z-10 hidden size-5 -translate-y-1/2 rounded-full bg-background text-primary md:block"
                  aria-hidden="true"
                />
              ) : null}
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
