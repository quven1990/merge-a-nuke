import type { Metadata } from "next"

import { MergeGuide } from "@/components/merge-guide"
import { PageIntro } from "@/components/page-intro"
import { QuickStart } from "@/components/quick-start"
import { RelatedGuides } from "@/components/related-guides"
import { SiteShell } from "@/components/site-shell"
import { createPageMetadata } from "@/lib/page-metadata"
import { SEO_PAGES } from "@/lib/seo-pages"

const page = SEO_PAGES.beginnerGuide

export const metadata: Metadata = createPageMetadata(page)

export default function BeginnerGuidePage() {
  return (
    <SiteShell seoPage={page}>
      <main>
        <PageIntro
          current={page.breadcrumb}
          title={page.h1}
          description={page.intro}
          tldr={page.tldr}
        />
        <QuickStart />
        <MergeGuide />
        <RelatedGuides current={page.path} />
      </main>
    </SiteShell>
  )
}
