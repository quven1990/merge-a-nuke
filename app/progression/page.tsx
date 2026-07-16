import type { Metadata } from "next"

import { PageFaqSection } from "@/components/page-faq-section"
import { PageIntro } from "@/components/page-intro"
import { ProgressionRoadmap } from "@/components/progression-roadmap"
import { Rebirth8RequirementsPanel, RebirthGuideSection } from "@/components/rebirth-guide-section"
import { RelatedGuides } from "@/components/related-guides"
import { SiteShell } from "@/components/site-shell"
import { createPageMetadata } from "@/lib/page-metadata"
import { SEO_PAGES } from "@/lib/seo-pages"

const page = SEO_PAGES.progression

export const metadata: Metadata = createPageMetadata(page)

export default function ProgressionPage() {
  return (
    <SiteShell seoPage={page}>
      <main>
        <PageIntro
          current={page.breadcrumb}
          title={page.h1}
          description={page.intro}
          tldr={page.tldr}
        />
        <Rebirth8RequirementsPanel />
        <ProgressionRoadmap />
        <RebirthGuideSection />
        <PageFaqSection pagePath={page.path} />
        <RelatedGuides current={page.path} />
      </main>
    </SiteShell>
  )
}
