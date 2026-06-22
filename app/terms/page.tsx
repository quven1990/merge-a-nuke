import type { Metadata } from "next"
import Link from "next/link"

import { LegalDocument } from "@/components/legal-document"
import { SiteShell } from "@/components/site-shell"
import { createPageMetadata } from "@/lib/page-metadata"
import { SEO_PAGES } from "@/lib/seo-pages"
import { ContactEmailLink } from "@/components/contact-email-link"
import { SITE_NAME } from "@/lib/site"

const page = SEO_PAGES.terms

export const metadata: Metadata = createPageMetadata(page)

export default function TermsPage() {
  return (
    <SiteShell seoPage={page}>
      <main>
        <LegalDocument
          title={page.h1}
          lastUpdated="June 18, 2026"
          intro={`These Terms of Use govern your access to ${SITE_NAME} at mergeanuke.site. By using this site, you agree to these terms.`}
          sections={[
            {
              title: "Fan-made site — not official",
              content: (
                <p>
                  {SITE_NAME} is an independent fan guide. We are not
                  affiliated with, endorsed by, or sponsored by Roblox
                  Corporation, Nuke The Game, or the developers of Merge a Nuke.
                  Game names and trademarks belong to their respective owners.
                </p>
              ),
            },
            {
              title: "Informational content only",
              content: (
                <>
                  <p>
                    Guides, codes, tier lists, and tips are provided for
                    entertainment and education. Game mechanics, codes, and
                    balance can change without notice — especially after Friday
                    updates.
                  </p>
                  <ul>
                    <li>
                      We do not guarantee that any code will work at the time you
                      redeem it.
                    </li>
                    <li>
                      Tier rankings and cash/sec figures are community estimates
                      unless cited to an official source.
                    </li>
                    <li>
                      We do not guarantee in-game results, earnings, or raid
                      outcomes.
                    </li>
                  </ul>
                </>
              ),
            },
            {
              title: "Acceptable use",
              content: (
                <ul>
                  <li>Use the site for personal, non-commercial reference.</li>
                  <li>
                    Do not scrape, overload, or attempt to disrupt the site or
                    its hosting infrastructure.
                  </li>
                  <li>
                    Do not misrepresent this site as an official Roblox or
                    developer resource.
                  </li>
                  <li>
                    Do not copy substantial portions of our original writing for
                    republication without permission.
                  </li>
                </ul>
              ),
            },
            {
              title: "Intellectual property",
              content: (
                <>
                  <p>
                    Original text and fan-made illustrations on this site are
                    owned by the wiki operators unless otherwise noted. They are
                    inspired by the game&apos;s Roblox style and are not
                    official game assets or screenshots.
                  </p>
                  <p>
                    Roblox, Merge a Nuke, and related marks are trademarks of
                    their respective owners. This site uses them descriptively to
                    identify the game being discussed.
                  </p>
                </>
              ),
            },
            {
              title: "Third-party links",
              content: (
                <p>
                  Links to Roblox and other external sites are provided for
                  convenience. We are not responsible for third-party content,
                  policies, or services. Your use of Roblox is subject to
                  Roblox&apos;s own terms and policies.
                </p>
              ),
            },
            {
              title: "Disclaimer of warranties",
              content: (
                <p>
                  This site is provided &quot;as is&quot; and &quot;as
                  available&quot; without warranties of any kind, express or
                  implied, including accuracy, completeness, or fitness for a
                  particular purpose.
                </p>
              ),
            },
            {
              title: "Limitation of liability",
              content: (
                <p>
                  To the fullest extent permitted by law, we are not liable for
                  any indirect, incidental, or consequential damages arising from
                  your use of this site or reliance on its content.
                </p>
              ),
            },
            {
              title: "Changes",
              content: (
                <p>
                  We may update these terms or site content at any time. The
                  &quot;Last updated&quot; date at the top reflects the latest
                  revision. Continued use after changes means you accept the
                  updated terms.
                </p>
              ),
            },
            {
              title: "Contact",
              content: (
                <p>
                  Questions about these terms:{" "}
                  <ContactEmailLink />. See
                  also our <Link href="/privacy">Privacy Policy</Link>.
                </p>
              ),
            },
          ]}
        />
      </main>
    </SiteShell>
  )
}
