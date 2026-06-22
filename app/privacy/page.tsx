import type { Metadata } from "next"
import Link from "next/link"

import { LegalDocument } from "@/components/legal-document"
import { SiteShell } from "@/components/site-shell"
import { createPageMetadata } from "@/lib/page-metadata"
import { SEO_PAGES } from "@/lib/seo-pages"
import { ContactEmailLink } from "@/components/contact-email-link"
import { SITE_NAME } from "@/lib/site"

const page = SEO_PAGES.privacy

export const metadata: Metadata = createPageMetadata(page)

export default function PrivacyPage() {
  return (
    <SiteShell seoPage={page}>
      <main>
        <LegalDocument
          title={page.h1}
          lastUpdated="June 18, 2026"
          intro={`${SITE_NAME} (mergeanuke.site) is an independent fan-made guide for the Roblox game Merge a Nuke. This Privacy Policy explains what information we collect, how we use it, and your choices.`}
          sections={[
            {
              title: "Information we collect",
              content: (
                <>
                  <p>
                    This site is a static information wiki. We do not offer
                    accounts, payments, file uploads, or comment forms.
                  </p>
                  <ul>
                    <li>
                      <strong className="text-foreground">
                        Information you provide:
                      </strong>{" "}
                      None. We do not ask you to submit personal data through
                      this website.
                    </li>
                    <li>
                      <strong className="text-foreground">
                        Automatic data:
                      </strong>{" "}
                      When you visit, our hosting provider (Cloudflare) may
                      process standard server logs such as IP address, browser
                      type, referring page, and request timestamps for security
                      and performance.
                    </li>
                    <li>
                      <strong className="text-foreground">
                        Client-side actions:
                      </strong>{" "}
                      The codes page can copy text to your device clipboard
                      using your browser&apos;s Clipboard API. That action stays
                      on your device and is not sent to our servers.
                    </li>
                    <li>
                      <strong className="text-foreground">Cookies:</strong>{" "}
                      We do not set first-party cookies for advertising.
                      Plausible Analytics does not use cookies. Google Analytics
                      and Microsoft Clarity may use cookies and similar
                      technologies for analytics. Cloudflare may use cookies for
                      security and bot protection.
                    </li>
                  </ul>
                </>
              ),
            },
            {
              title: "How we use information",
              content: (
                <ul>
                  <li>Operate, secure, and improve the website</li>
                  <li>Understand aggregate traffic patterns</li>
                  <li>Respond to privacy-related requests</li>
                </ul>
              ),
            },
            {
              title: "Third-party services",
              content: (
                <ul>
                  <li>
                    <strong className="text-foreground">Cloudflare</strong> —
                    hosting, CDN, and security. See{" "}
                    <a
                      href="https://www.cloudflare.com/privacypolicy/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Cloudflare&apos;s Privacy Policy
                    </a>
                    .
                  </li>
                  <li>
                    <strong className="text-foreground">Roblox</strong> — when
                    you follow outbound links to play the game or visit the
                    developer group. Roblox has its own privacy practices. See{" "}
                    <a
                      href="https://en.help.roblox.com/hc/en-us/articles/115000708248-Roblox-Privacy-and-Cookie-Policy"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Roblox Privacy and Cookie Policy
                    </a>
                    .
                  </li>
                  <li>
                    <strong className="text-foreground">Google Analytics 4</strong>{" "}
                    — website traffic and usage measurement. Google may collect
                    page views, referral sources, device/browser information,
                    and general interaction data through cookies (such as{" "}
                    <code className="text-foreground">_ga</code>). See{" "}
                    <a
                      href="https://policies.google.com/privacy"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Google&apos;s Privacy Policy
                    </a>
                    .
                  </li>
                  <li>
                    <strong className="text-foreground">Microsoft Clarity</strong>{" "}
                    — session analytics, heatmaps, and interaction recordings to
                    help us improve the site. Clarity may collect page views,
                    clicks, scroll behavior, and device/browser information. See{" "}
                    <a
                      href="https://privacy.microsoft.com/en-us/privacystatement"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Microsoft Privacy Statement
                    </a>
                    .
                  </li>
                  <li>
                    <strong className="text-foreground">Plausible Analytics</strong>{" "}
                    — privacy-friendly, cookieless traffic measurement. Plausible
                    collects page views and basic device/browser information in
                    aggregate. It does not use cookies and does not track you
                    across other websites. See{" "}
                    <a
                      href="https://plausible.io/data-policy"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Plausible&apos;s Data Policy
                    </a>
                    .
                  </li>
                </ul>
              ),
            },
            {
              title: "Children",
              content: (
                <p>
                  Merge a Nuke is a Roblox game that may appeal to younger
                  players. We do not knowingly collect personal information from
                  children through this fan wiki. If you believe a child has
                  provided personal data to us, contact us and we will address
                  it promptly.
                </p>
              ),
            },
            {
              title: "Your choices",
              content: (
                <ul>
                  <li>
                    You can use browser settings to block or delete cookies.
                  </li>
                  <li>
                    You can stop visiting this site at any time. No account is
                    required.
                  </li>
                  <li>
                    For Roblox-related data practices, use Roblox account and
                    privacy settings on their platform.
                  </li>
                </ul>
              ),
            },
            {
              title: "Data retention",
              content: (
                <p>
                  We do not maintain a user database for this wiki. Hosting
                  logs retained by Cloudflare follow their standard retention
                  schedules. Original wiki content may be updated or removed as
                  the game changes.
                </p>
              ),
            },
            {
              title: "Contact",
              content: (
                <p>
                  Privacy questions:{" "}
                  <ContactEmailLink />. See
                  also our <Link href="/terms">Terms of Use</Link>.
                </p>
              ),
            },
          ]}
        />
      </main>
    </SiteShell>
  )
}
