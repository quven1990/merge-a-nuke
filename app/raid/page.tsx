import type { Metadata } from "next"

import { PageIntro } from "@/components/page-intro"
import { PageFaqSection } from "@/components/page-faq-section"
import { RaidDefense } from "@/components/raid-defense"
import { RelatedGuides } from "@/components/related-guides"
import { SiteShell } from "@/components/site-shell"
import { createPageMetadata } from "@/lib/page-metadata"
import { SEO_PAGES } from "@/lib/seo-pages"

const page = SEO_PAGES.raid

export const metadata: Metadata = createPageMetadata(page)

export default function RaidPage() {
  return (
    <SiteShell seoPage={page}>
      <main>
        <PageIntro
          current={page.breadcrumb}
          title={page.h1}
          description={page.intro}
          tldr={page.tldr}
        />
        <RaidDefense />
        <PageFaqSection pagePath={page.path} />
        <RelatedGuides current={page.path} />
      </main>
    </SiteShell>
  )
}
