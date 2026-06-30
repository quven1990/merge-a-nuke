import type { Metadata } from "next"

import { BelowFold } from "@/components/below-fold"
import { CodesSection } from "@/components/codes-section"
import { FeaturedCommandersSpotlight } from "@/components/featured-commanders-spotlight"
import { GameOverview } from "@/components/game-overview"
import { GuideCards } from "@/components/guide-cards"
import { HazardDivider } from "@/components/hud"
import { HeroSection } from "@/components/hero-section"
import { HomeFaqTeaser } from "@/components/home-faq-teaser"
import { QuickStart } from "@/components/quick-start"
import { SiteShell } from "@/components/site-shell"
import { UpdateBanner } from "@/components/update-banner"
import { createPageMetadata } from "@/lib/page-metadata"
import { SEO_PAGES } from "@/lib/seo-pages"

const page = SEO_PAGES.home

export const metadata: Metadata = createPageMetadata(page)

export default function Page() {
  return (
    <SiteShell seoPage={page}>
      <main>
        <HeroSection />
        <UpdateBanner />
        <BelowFold>
          <HazardDivider />
          <CodesSection />
          <HazardDivider />
          <QuickStart />
          <HazardDivider />
          <FeaturedCommandersSpotlight />
          <HazardDivider />
          <GuideCards />
          <HazardDivider />
          <HomeFaqTeaser />
          <HazardDivider />
          <GameOverview />
        </BelowFold>
      </main>
    </SiteShell>
  )
}
