import type { Metadata } from "next"

import { CodesSection } from "@/components/codes-section"
import { PageFaqSection } from "@/components/page-faq-section"
import { PageIntro } from "@/components/page-intro"
import { RelatedGuides } from "@/components/related-guides"
import { SiteShell } from "@/components/site-shell"
import { createPageMetadata } from "@/lib/page-metadata"
import { SEO_PAGES } from "@/lib/seo-pages"

const page = SEO_PAGES.codes

export const metadata: Metadata = createPageMetadata(page)

export default function CodesPage() {
  return (
    <SiteShell seoPage={page}>
      <main>
        <PageIntro
          current={page.breadcrumb}
          title={page.h1}
          description={page.intro}
          tldr={page.tldr}
        />
        <CodesSection />
        <PageFaqSection pagePath={page.path} />
        <RelatedGuides current={page.path} />
      </main>
    </SiteShell>
  )
}
