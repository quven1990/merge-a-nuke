import Link from "next/link"
import { Anchor, Info, MapPin } from "lucide-react"

import { SectionHeading } from "@/components/hud"
import { EVENT_DROP_TIPS, EVENT_MAP_DROPS } from "@/lib/event-rebirth-data"

export function EventMapDropsSection() {
  return (
    <section id="event-drops" className="scroll-mt-20">
      <SectionHeading
        icon={MapPin}
        kicker="Event farming"
        title="Commander Event Drop Tables"
        tag="Community reports"
      />
      <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
        Rotating maps — Downtown, Shipping Port, Harbor, Oil Rig, Military Compound, and holiday
        events — are the main free path to exclusive commanders. Weights below are{" "}
        <strong className="text-foreground">community-reported</strong> until verified in-game.
      </p>

      <div className="mt-8 overflow-hidden rounded-2xl border border-border/60 bg-card/50">
        <div className="hidden grid-cols-[140px_140px_90px_1fr] gap-4 border-b border-border/40 px-5 py-3 text-xs font-medium text-muted-foreground lg:grid">
          <span>Map</span>
          <span>Commander</span>
          <span>Rarity</span>
          <span>Reported weight</span>
        </div>
        <ul className="divide-y divide-border/40">
          {EVENT_MAP_DROPS.map((row) => (
            <li key={`${row.map}-${row.commander}`}>
              <Link
                href={row.href}
                className="grid gap-2 px-4 py-4 transition-colors hover:bg-primary/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary lg:grid-cols-[140px_140px_90px_1fr] lg:items-center lg:gap-4 lg:px-5"
              >
                <span className="flex items-center gap-2 text-sm font-semibold text-foreground">
                  <Anchor className="size-3.5 shrink-0 text-primary" aria-hidden="true" />
                  {row.map}
                </span>
                <span className="text-sm font-bold text-foreground">
                  {row.commander}
                  {row.pending ? (
                    <span className="ml-1.5 rounded-full bg-primary/15 px-1.5 py-0.5 text-[10px] font-bold uppercase text-primary align-middle">
                      Pending
                    </span>
                  ) : null}
                </span>
                <span className="text-sm text-muted-foreground">{row.rarity}</span>
                <span className="text-sm text-muted-foreground">{row.weight}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <ul className="mt-6 space-y-2">
        {EVENT_DROP_TIPS.map((tip) => (
          <li key={tip} className="flex items-start gap-2 text-sm text-muted-foreground">
            <Info className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
            {tip}
          </li>
        ))}
      </ul>
    </section>
  )
}
