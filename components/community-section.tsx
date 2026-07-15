import { ExternalLink, Gamepad2, Users } from "lucide-react"

import { SectionHeading } from "@/components/hud"
import { TrackedOutboundLink } from "@/components/tracked-outbound-link"
import { GAME_FACTS, ROBLOX_GAME_ABOUT_URL, ROBLOX_GAME_URL } from "@/lib/game-links"

const TESTER_APPLICATION_FORM_URL = "https://forms.gle/8tFRTymU4HQq8U6i6"

export function CommunitySection() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <SectionHeading
        icon={Users}
        kicker="Official sources"
        title="Community & Official Links"
      />
      <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
        This wiki is fan-made. For codes, group rewards, and Discord, use the official Roblox game
        page — we link out instead of copying unverified social posts.
      </p>

      <div className="mt-8 rounded-2xl border border-primary/30 bg-primary/5 p-5 shadow-sm sm:p-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-sm font-bold text-foreground">Tester applications re-opened</p>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              Nuke The Game is looking for more Merge a Nuke testers. Applicants must be 15+, active
              for most test sessions, and professional in their responses. Applications are listed as
              open until <span className="font-semibold text-foreground">July 19, 2026 at 06:00</span>,
              but may close early if enough eligible testers are found.
            </p>
          </div>
          <TrackedOutboundLink
            href={TESTER_APPLICATION_FORM_URL}
            placement="community_tester_application"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-10 shrink-0 items-center justify-center gap-2 rounded-xl bg-primary px-4 text-sm font-bold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
          >
            Apply via Google Form
            <ExternalLink className="size-4 shrink-0" aria-hidden="true" />
          </TrackedOutboundLink>
        </div>
        <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
          Use only the form linked from the announcement. This wiki is not involved in reviewing
          applications or announcing results.
        </p>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <TrackedOutboundLink
          href={ROBLOX_GAME_URL}
          placement="community_play"
          target="_blank"
          rel="noopener noreferrer"
          className="flex gap-4 rounded-2xl border border-border/70 bg-card/70 p-5 shadow-sm transition-colors hover:border-primary/50"
        >
          <span className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-primary/30 bg-primary/10">
            <Gamepad2 className="size-5 text-primary" aria-hidden="true" />
          </span>
          <span>
            <span className="flex items-center gap-1.5 font-bold text-foreground">
              Play Merge a Nuke
              <ExternalLink className="size-3.5 text-muted-foreground" aria-hidden="true" />
            </span>
            <span className="mt-1 block text-sm text-muted-foreground">
              Open the live Roblox experience by Nuke The Game.
            </span>
          </span>
        </TrackedOutboundLink>

        <TrackedOutboundLink
          href={ROBLOX_GAME_ABOUT_URL}
          placement="community_about"
          target="_blank"
          rel="noopener noreferrer"
          className="flex gap-4 rounded-2xl border border-border/70 bg-card/70 p-5 shadow-sm transition-colors hover:border-primary/50"
        >
          <span className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-primary/30 bg-primary/10">
            <Users className="size-5 text-primary" aria-hidden="true" />
          </span>
          <span>
            <span className="flex items-center gap-1.5 font-bold text-foreground">
              Game About tab
              <ExternalLink className="size-3.5 text-muted-foreground" aria-hidden="true" />
            </span>
            <span className="mt-1 block text-sm text-muted-foreground">
              Developer group, Discord, and social links listed by the studio on Roblox.
            </span>
          </span>
        </TrackedOutboundLink>
      </div>

      <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {GAME_FACTS.map((fact) => (
          <li
            key={fact.label}
            className="rounded-xl border border-border/60 bg-card/50 px-4 py-3 text-sm"
          >
            <span className="block text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              {fact.label}
            </span>
            <span className="mt-0.5 font-medium text-foreground">{fact.value}</span>
          </li>
        ))}
      </ul>

      <p className="mt-8 text-sm text-muted-foreground">
        Join the developer group on the About tab for free nuke rewards when promotions are active.
        New codes usually drop on Fridays — check our{" "}
        <a href="/updates" className="font-medium text-primary hover:underline">
          update log
        </a>{" "}
        and{" "}
        <a href="/codes" className="font-medium text-primary hover:underline">
          codes page
        </a>{" "}
        after each patch.
      </p>
    </div>
  )
}
