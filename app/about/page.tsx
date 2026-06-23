import type { Metadata } from "next"
import Link from "next/link"
import { BookOpen, CalendarCheck, Mail, Radiation, ShieldCheck } from "lucide-react"

import { PageIntro } from "@/components/page-intro"
import { SiteShell } from "@/components/site-shell"
import { ContactEmailLink } from "@/components/contact-email-link"
import { createPageMetadata } from "@/lib/page-metadata"
import { SEO_PAGES } from "@/lib/seo-pages"

const page = SEO_PAGES.about

export const metadata: Metadata = createPageMetadata(page)

const SECTIONS = [
  {
    icon: BookOpen,
    title: "Why this wiki exists",
    content: (
      <>
        <p>
          I built mergeanuke.site because I couldn&apos;t find a single clean
          resource for the game. Everything I came across was either buried in
          ads, missing the actual redeem steps, or hadn&apos;t been touched
          since a patch three updates ago.
        </p>
        <p className="mt-3">
          So I put together the guide I wished I&apos;d had — one page per
          topic, no padding, updated after each Friday patch.
        </p>
      </>
    ),
  },
  {
    icon: CalendarCheck,
    title: "How content is maintained",
    content: (
      <>
        <p>
          Merge a Nuke updates every Friday. I check for new codes and patch
          changes after each update and revise any guide that&apos;s affected.
          The codes page shows the exact date it was last verified.
        </p>
        <p className="mt-3">
          Guide content is researched from direct gameplay, community footage,
          and cross-referenced against multiple code trackers — RoCodes,
          PCGamesN, Pocket Tactics, and the official Roblox group. Where
          something isn&apos;t confirmed, I say so on the page.
        </p>
      </>
    ),
  },
  {
    icon: ShieldCheck,
    title: "What this site is (and isn't)",
    content: (
      <ul className="space-y-2">
        <li className="flex gap-2">
          <span className="mt-0.5 shrink-0 text-primary">✓</span>
          <span>
            An independent fan-made wiki — written from scratch, not scraped
            from other sites.
          </span>
        </li>
        <li className="flex gap-2">
          <span className="mt-0.5 shrink-0 text-primary">✓</span>
          <span>
            Free to use — no account, no paywall, no code generators.
          </span>
        </li>
        <li className="flex gap-2">
          <span className="mt-0.5 shrink-0 text-muted-foreground">✕</span>
          <span className="text-muted-foreground">
            Not affiliated with Nuke The Game or Roblox Corporation in any way.
          </span>
        </li>
        <li className="flex gap-2">
          <span className="mt-0.5 shrink-0 text-muted-foreground">✕</span>
          <span className="text-muted-foreground">
            Not an official source — always cross-check the in-game Index after
            Friday updates.
          </span>
        </li>
      </ul>
    ),
  },
  {
    icon: Mail,
    title: "Get in touch",
    content: (
      <p>
        Found an error, expired code, or missing guide? Reach me at{" "}
        <ContactEmailLink /> — I read everything and update quickly when
        something&apos;s wrong.
      </p>
    ),
  },
]

export default function AboutPage() {
  return (
    <SiteShell seoPage={page}>
      <main>
        <PageIntro
          current={page.breadcrumb}
          title={page.h1}
          description={page.intro}
        />

        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="max-w-2xl">

            {/* Author card */}
            <div className="flex items-center gap-4 rounded-2xl border border-primary/25 bg-card/70 p-5 shadow-sm">
              <span className="flex size-14 shrink-0 items-center justify-center rounded-2xl border border-primary/30 bg-primary/10">
                <Radiation className="size-7 text-primary" aria-hidden="true" />
              </span>
              <div>
                <p className="font-bold text-foreground">Remy</p>
                <p className="text-sm text-muted-foreground">
                  Independent wiki maintainer · fan player
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  Updating since June 2026 · synced with Friday patches
                </p>
              </div>
            </div>

            {/* Sections */}
            <div className="mt-10 space-y-10">
              {SECTIONS.map((section) => (
                <section key={section.title}>
                  <div className="flex items-center gap-3">
                    <span className="flex size-8 shrink-0 items-center justify-center rounded-xl border border-primary/30 bg-primary/10">
                      <section.icon className="size-4 text-primary" aria-hidden="true" />
                    </span>
                    <h2 className="text-lg font-bold text-foreground">
                      {section.title}
                    </h2>
                  </div>
                  <div className="mt-3 pl-11 text-sm leading-relaxed text-muted-foreground">
                    {section.content}
                  </div>
                </section>
              ))}
            </div>

            {/* Footer links */}
            <div className="mt-12 flex flex-wrap gap-x-4 gap-y-2 border-t border-border/60 pt-6 text-sm text-muted-foreground">
              <Link href="/" className="hover:text-primary transition-colors">
                ← Back to Wiki
              </Link>
              <Link href="/privacy" className="hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-primary transition-colors">
                Terms of Use
              </Link>
            </div>
          </div>
        </div>
      </main>
    </SiteShell>
  )
}
