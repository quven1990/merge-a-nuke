import type { Metadata } from "next"

import { CommunitySection } from "@/components/community-section"
import { PageIntro } from "@/components/page-intro"
import { RelatedGuides } from "@/components/related-guides"
import { SiteShell } from "@/components/site-shell"
import { createPageMetadata } from "@/lib/page-metadata"
import { SEO_PAGES } from "@/lib/seo-pages"

const page = SEO_PAGES.community

export const metadata: Metadata = createPageMetadata(page)

export default function CommunityPage() {
  return (
    <SiteShell seoPage={page}>
      <main>
        <PageIntro
          current={page.breadcrumb}
          title={page.h1}
          description={page.intro}
          tldr={page.tldr}
        />
        <CommunitySection />
        <RelatedGuides current={page.path} />
      </main>
    </SiteShell>
  )
}
