import type { Metadata } from "next"

import { CommandersSection } from "@/components/commanders-section"
import { PageFaqSection } from "@/components/page-faq-section"
import { PageIntro } from "@/components/page-intro"
import { RelatedGuides } from "@/components/related-guides"
import { SiteShell } from "@/components/site-shell"
import { createPageMetadata } from "@/lib/page-metadata"
import { SEO_PAGES } from "@/lib/seo-pages"

const page = SEO_PAGES.commanders

export const metadata: Metadata = createPageMetadata(page)

export default function CommandersPage() {
  return (
    <SiteShell seoPage={page}>
      <main>
        <PageIntro
          current={page.breadcrumb}
          title={page.h1}
          description={page.intro}
          tldr={page.tldr}
        />
        <CommandersSection />
        <PageFaqSection pagePath={page.path} />
        <RelatedGuides current={page.path} />
      </main>
    </SiteShell>
  )
}
