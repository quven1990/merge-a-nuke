import type { Metadata } from "next"

import { OfflineCash } from "@/components/offline-cash"
import { PageIntro } from "@/components/page-intro"
import { RelatedGuides } from "@/components/related-guides"
import { SiteShell } from "@/components/site-shell"
import { createPageMetadata } from "@/lib/page-metadata"
import { SEO_PAGES } from "@/lib/seo-pages"

const page = SEO_PAGES.offlineCash

export const metadata: Metadata = createPageMetadata(page)

export default function OfflineCashPage() {
  return (
    <SiteShell seoPage={page}>
      <main>
        <PageIntro
          current={page.breadcrumb}
          title={page.h1}
          description={page.intro}
          tldr={page.tldr}
        />
        <OfflineCash />
        <RelatedGuides current={page.path} />
      </main>
    </SiteShell>
  )
}
