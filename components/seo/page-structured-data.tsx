import type { SeoPageConfig } from "@/lib/seo-pages"
import { buildPageStructuredData } from "@/lib/structured-data"

export function PageStructuredData({ page }: { page: SeoPageConfig }) {
  const payload = buildPageStructuredData(page)

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(payload) }}
    />
  )
}
