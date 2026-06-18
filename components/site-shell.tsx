import type { SeoPageConfig } from "@/lib/seo-pages"

import { PageStructuredData } from "@/components/seo/page-structured-data"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"

export function SiteShell({
  children,
  seoPage,
}: {
  children: React.ReactNode
  seoPage: SeoPageConfig
}) {
  return (
    <div className="relative min-h-screen bg-background">
      <PageStructuredData page={seoPage} />
      <div
        className="reactor-grid pointer-events-none fixed inset-0 opacity-40"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_at_top,transparent_55%,var(--background)_100%)]"
        aria-hidden="true"
      />
      <div className="relative">
        <SiteHeader />
        {children}
        <SiteFooter />
      </div>
    </div>
  )
}
