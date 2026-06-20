import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { getNavItem, NAV_ITEMS } from "@/lib/navigation"

const NEXT_GUIDE: Partial<Record<`/${string}`, `/${string}`>> = {
  "/codes": "/beginner-guide",
  "/beginner-guide": "/upgrades",
  "/progression": "/raid",
  "/upgrades": "/tier-list",
  "/tier-list": "/raid",
  "/raid": "/offline-cash",
  "/offline-cash": "/faq#rebirth",
  "/faq": "/codes",
}

export function RelatedGuides({ current }: { current: `/${string}` }) {
  const links = NAV_ITEMS.filter((item) => item.href !== current)
  const nextHref = NEXT_GUIDE[current]
  const nextBaseHref = nextHref?.split("#")[0] as `/${string}` | undefined
  const next = nextBaseHref ? getNavItem(nextBaseHref) : undefined

  return (
    <section
      aria-labelledby="related-guides-heading"
      className="border-t border-border/60 bg-card/30 py-12 lg:py-14"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {nextHref && next ? (
          <Link
            href={nextHref}
            className="group mb-10 flex min-h-24 flex-col justify-between gap-4 rounded-2xl border-2 border-primary/35 bg-primary/10 p-5 transition-all hover:-translate-y-0.5 hover:border-primary/60 sm:flex-row sm:items-center"
          >
            <span>
              <span className="text-xs font-bold uppercase tracking-[0.16em] text-primary">
                Recommended next step
              </span>
              <span className="mt-1 block text-lg font-bold text-foreground group-hover:text-primary">
                {current === "/offline-cash" ? "Decide when to rebirth" : next.label}
              </span>
              <span className="mt-1 block text-sm text-muted-foreground">
                {current === "/offline-cash"
                  ? "Use the rebirth checklist once your current growth starts to slow."
                  : next.description}
              </span>
            </span>
            <span className="inline-flex shrink-0 items-center gap-2 text-sm font-bold text-primary">
              Continue
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </span>
          </Link>
        ) : null}
        <h2
          id="related-guides-heading"
          className="text-xl font-bold tracking-tight sm:text-2xl"
        >
          More Merge a Nuke Guides
        </h2>
        <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
          Explore other topics on this fan-made Merge a Nuke Wiki.
        </p>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="block rounded-2xl border border-border/70 bg-card/70 p-4 text-sm font-semibold text-foreground transition-colors hover:border-primary/50 hover:text-primary"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
