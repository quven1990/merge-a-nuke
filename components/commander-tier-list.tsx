import Link from "next/link"
import { Coins, MapPin, Swords, Trophy } from "lucide-react"

import { SectionHeading } from "@/components/hud"
import {
  COMMANDER_LOADOUTS,
  COMMANDER_TIER_EVENT,
  COMMANDER_TIER_INCOME,
  COMMANDER_TIER_PVP,
  getCommanderTierHref,
  type CommanderTierEntry,
} from "@/lib/commander-tier-lists"

const TIER_STYLE: Record<CommanderTierEntry["tier"], string> = {
  S: "bg-yellow-500/15 text-yellow-400 border-yellow-500/30",
  A: "bg-primary/15 text-primary border-primary/30",
  B: "bg-muted text-muted-foreground border-border/60",
  C: "bg-muted/60 text-muted-foreground/80 border-border/40",
}

const CATEGORIES = [
  {
    id: "commander-tier-pvp",
    icon: Swords,
    kicker: "PvP & raids",
    title: "Commander Tier List — PvP",
    entries: COMMANDER_TIER_PVP,
  },
  {
    id: "commander-tier-income",
    icon: Coins,
    kicker: "Passive income",
    title: "Commander Tier List — Income",
    entries: COMMANDER_TIER_INCOME,
  },
  {
    id: "commander-tier-event",
    icon: MapPin,
    kicker: "Events & LTM",
    title: "Commander Tier List — Event Maps",
    entries: COMMANDER_TIER_EVENT,
  },
] as const

function TierTable({ entries }: { entries: CommanderTierEntry[] }) {
  return (
    <div className="mt-6 overflow-hidden rounded-2xl border border-border/60 bg-card/50">
      <div className="hidden grid-cols-[72px_140px_1fr] gap-4 border-b border-border/40 px-5 py-3 text-xs font-medium text-muted-foreground sm:grid">
        <span>Tier</span>
        <span>Commander</span>
        <span>Why</span>
      </div>
      <ul className="divide-y divide-border/40">
        {entries.map((item) => (
          <li key={item.name}>
            <Link
              href={getCommanderTierHref(item.name)}
              className="grid gap-2 px-4 py-4 transition-colors hover:bg-primary/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary sm:grid-cols-[72px_140px_1fr] sm:items-start sm:gap-4 sm:px-5"
            >
              <span
                className={`inline-flex w-fit rounded-full border px-2.5 py-0.5 text-xs font-bold ${TIER_STYLE[item.tier]}`}
              >
                {item.tier}
              </span>
              <span className="font-bold text-foreground">
                {item.name}
                {item.pending ? (
                  <span className="ml-1.5 rounded-full bg-primary/15 px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-primary align-middle">
                    Pending
                  </span>
                ) : null}
              </span>
              <span className="text-sm leading-relaxed text-muted-foreground">{item.summary}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function CommanderTierList() {
  return (
    <section id="commander-tier-list" className="scroll-mt-20">
      <SectionHeading
        icon={Trophy}
        kicker="Rankings"
        title="Commander Tier List"
        tag="PvP · Income · Events"
      />
      <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
        Separate from the{" "}
        <Link href="/tier-list" className="font-medium text-primary hover:underline">
          nuke tier list
        </Link>
        . Rankings use verified abilities first, then community reports marked{" "}
        <span className="font-semibold text-primary">Pending</span>. Tap any row for the full
        commander guide.
      </p>

      <div className="mt-10 space-y-14">
        {CATEGORIES.map((cat) => (
          <div key={cat.id} id={cat.id} className="scroll-mt-20">
            <SectionHeading icon={cat.icon} kicker={cat.kicker} title={cat.title} />
            <TierTable entries={cat.entries} />
          </div>
        ))}
      </div>

      <div className="mt-12">
        <SectionHeading icon={Swords} kicker="Loadouts" title="Suggested Commander Loadouts" />
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {COMMANDER_LOADOUTS.map((loadout) => (
            <div
              key={loadout.id}
              className="rounded-2xl border border-border/70 bg-card/70 p-5 shadow-sm"
            >
              <p className="font-bold text-foreground">{loadout.title}</p>
              <p className="mt-2 flex flex-wrap gap-1.5">
                {loadout.picks.map((name) => (
                  <Link
                    key={name}
                    href={getCommanderTierHref(name)}
                    className="rounded-full border border-primary/30 bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary hover:border-primary/50"
                  >
                    {name}
                  </Link>
                ))}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{loadout.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
