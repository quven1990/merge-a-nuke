import Link from "next/link"

import { NAV_ITEMS } from "@/lib/navigation"

export function RelatedGuides({ current }: { current: `/${string}` }) {
  const links = NAV_ITEMS.filter((item) => item.href !== current)

  return (
    <section
      aria-labelledby="related-guides-heading"
      className="border-t border-border/60 bg-card/30 py-12 lg:py-14"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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
