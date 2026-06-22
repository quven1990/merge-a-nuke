import Link from "next/link"
import { ExternalLink, Gamepad2, Radiation, Users } from "lucide-react"

import { TrackedOutboundLink } from "@/components/tracked-outbound-link"
import { ContactEmailLink } from "@/components/contact-email-link"
import { NAV_ITEMS } from "@/lib/navigation"
import { ROBLOX_GAME_ABOUT_URL, ROBLOX_GAME_URL } from "@/lib/game-links"

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden">
      <div
        className="hazard-stripes h-1.5 w-full opacity-80"
        aria-hidden="true"
      />
      <div className="reactor-dots absolute inset-0 opacity-30" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex size-9 items-center justify-center rounded-2xl border border-primary/40 bg-primary/10">
                <Radiation className="size-5 text-primary" aria-hidden="true" />
              </span>
              <span className="text-base font-bold">
                Merge a Nuke <span className="text-primary">Wiki</span>
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground leading-relaxed">
              A community-built strategy hub for Merge a Nuke players. Codes,
              guides, tier lists, and tips — written from scratch by fans.
            </p>
            <p className="mt-3 max-w-sm text-xs text-muted-foreground">
              Content may change after Friday game updates — check the Codes
              page for the latest rewards.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">
              Quick Links
            </h3>
            <ul className="mt-4 grid grid-cols-2 gap-2">
              {NAV_ITEMS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">
              Official game links
            </h3>
            <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
              Roblox game and developer group — not this fan wiki.
            </p>
            <ul className="mt-4 space-y-2">
              <li>
                <TrackedOutboundLink
                  href={ROBLOX_GAME_URL}
                  placement="footer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  <Gamepad2 className="size-4 shrink-0" aria-hidden="true" />
                  Play on Roblox
                  <ExternalLink className="size-3 opacity-60" aria-hidden="true" />
                </TrackedOutboundLink>
              </li>
              <li>
                <TrackedOutboundLink
                  href={ROBLOX_GAME_ABOUT_URL}
                  placement="footer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  <Users className="size-4 shrink-0" aria-hidden="true" />
                  Group &amp; Discord
                  <ExternalLink className="size-3 opacity-60" aria-hidden="true" />
                </TrackedOutboundLink>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-border/60 pt-6">
          <nav
            aria-label="Legal"
            className="flex flex-wrap gap-x-4 gap-y-2 text-xs"
          >
            <Link
              href="/privacy"
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              Terms of Use
            </Link>
            <ContactEmailLink className="text-muted-foreground transition-colors hover:text-primary" />
          </nav>
          <p className="mt-4 text-xs text-muted-foreground leading-relaxed">
            Disclaimer: This is a fan-made guide and is not affiliated with,
            endorsed by, or sponsored by Roblox Corporation or the developers of
            Merge a Nuke. All game names and trademarks belong to their
            respective owners. Site illustrations are fan-made artwork inspired by
            the game&apos;s Roblox style, not official screenshots or assets.
          </p>
          <p className="mt-3 text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Merge a Nuke Wiki — Fan Guide. All
            original content.
          </p>
        </div>
      </div>
    </footer>
  )
}
