import type { Metadata } from "next"

import { BlogIndex } from "@/components/blog-index"
import { PageIntro } from "@/components/page-intro"
import { RelatedGuides } from "@/components/related-guides"
import { SiteShell } from "@/components/site-shell"
import { createPageMetadata } from "@/lib/page-metadata"
import { SEO_PAGES } from "@/lib/seo-pages"

const page = SEO_PAGES.blog

export const metadata: Metadata = createPageMetadata(page)

export default function BlogPage() {
  return (
    <SiteShell seoPage={page}>
      <main>
        <PageIntro
          current={page.breadcrumb}
          title={page.h1}
          description={page.intro}
          tldr={page.tldr}
        />
        <BlogIndex />
        <RelatedGuides current={page.path} />
      </main>
    </SiteShell>
  )
}
