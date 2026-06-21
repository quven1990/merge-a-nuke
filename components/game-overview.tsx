import {
  Calendar,
  ExternalLink,
  Gamepad2,
  Info,
  Users,
} from "lucide-react"

import { TrackedCtaLink } from "@/components/tracked-cta-link"
import { TrackedOutboundLink } from "@/components/tracked-outbound-link"
import { GAME_FACTS, ROBLOX_GAME_ABOUT_URL, ROBLOX_GAME_URL } from "@/lib/game-links"

export function GameOverview() {
  return (
    <section
      id="about"
      className="relative scroll-mt-20 border-b border-border/60 py-16 lg:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <span className="flex size-9 items-center justify-center rounded-2xl border border-primary/40 bg-primary/10">
            <Info className="size-5 text-primary" aria-hidden="true" />
          </span>
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            About Merge a Nuke
          </h2>
        </div>

        <p className="mt-4 max-w-3xl leading-relaxed text-muted-foreground">
          <strong className="text-foreground">Merge a Nuke</strong> is a Roblox
          game by{" "}
          <strong className="text-foreground">Nuke The Game</strong>. Buy or earn
          bombs, merge identical ones into stronger nukes, stack passive cash
          (even offline), raid other bases for loot, and lock your base before you
          log off. Use this independent fan wiki for working codes, upgrade
          priorities, tier lists, raid strategies, offline cash tips, and rebirth
          advice. It is not affiliated with the developer.
        </p>

        <dl className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {GAME_FACTS.map((fact) => (
            <div
              key={fact.label}
              className="rounded-2xl border border-border/70 bg-card/70 p-4 shadow-sm"
            >
              <dt className="text-xs font-semibold uppercase tracking-wide text-primary">
                {fact.label}
              </dt>
              <dd className="mt-1.5 text-sm font-medium text-foreground">
                {fact.value}
              </dd>
            </div>
          ))}
        </dl>

        <div className="mt-8 rounded-2xl border border-primary/25 bg-primary/5 p-5 sm:p-6">
          <h3 className="text-sm font-bold uppercase tracking-wide text-primary">
            Game links (Roblox)
          </h3>
          <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
            These point to the official Roblox game page and developer group —
            not this fan wiki. New codes often drop on Fridays through the group.
          </p>
          <ul className="mt-4 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <li>
              <TrackedOutboundLink
                href={ROBLOX_GAME_URL}
                placement="game_overview"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-border/70 bg-card px-4 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-primary/50 hover:text-primary"
              >
                <Gamepad2 className="size-4 shrink-0" aria-hidden="true" />
                Play on Roblox
                <ExternalLink className="size-3.5 opacity-60" aria-hidden="true" />
              </TrackedOutboundLink>
            </li>
            <li>
              <TrackedOutboundLink
                href={ROBLOX_GAME_ABOUT_URL}
                placement="game_overview"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-border/70 bg-card px-4 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-primary/50 hover:text-primary"
              >
                <Users className="size-4 shrink-0" aria-hidden="true" />
                Group &amp; Discord
                <ExternalLink className="size-3.5 opacity-60" aria-hidden="true" />
              </TrackedOutboundLink>
            </li>
            <li>
              <TrackedCtaLink
                href="/codes"
                label="Working codes list"
                placement="game_overview"
                className="inline-flex items-center gap-2 rounded-xl border border-border/70 bg-card px-4 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-primary/50 hover:text-primary"
              >
                <Calendar className="size-4 shrink-0" aria-hidden="true" />
                Working codes list
              </TrackedCtaLink>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
