import type { Metadata } from "next"

import { MergeGuide } from "@/components/merge-guide"
import { CodesSection } from "@/components/codes-section"
import { FaqSection } from "@/components/faq-section"
import { GameOverview } from "@/components/game-overview"
import { GuideCards } from "@/components/guide-cards"
import { HazardDivider } from "@/components/hud"
import { HeroSection } from "@/components/hero-section"
import { OfflineCash } from "@/components/offline-cash"
import { ProgressionRoadmap } from "@/components/progression-roadmap"
import { QuickStart } from "@/components/quick-start"
import { RaidDefense } from "@/components/raid-defense"
import { SiteShell } from "@/components/site-shell"
import { TierList } from "@/components/tier-list"
import { createPageMetadata } from "@/lib/page-metadata"
import { SEO_PAGES } from "@/lib/seo-pages"

export const metadata: Metadata = createPageMetadata(SEO_PAGES.home)

export default function Page() {
  return (
    <SiteShell seoPage={SEO_PAGES.home}>
      <main>
        <HeroSection />
        <HazardDivider />
        <GameOverview />
        <HazardDivider />
        <CodesSection />
        <HazardDivider />
        <MergeGuide />
        <HazardDivider />
        <QuickStart />
        <HazardDivider />
        <GuideCards />
        <HazardDivider />
        <ProgressionRoadmap />
        <HazardDivider />
        <TierList />
        <HazardDivider />
        <RaidDefense />
        <HazardDivider />
        <OfflineCash />
        <HazardDivider />
        <FaqSection />
      </main>
    </SiteShell>
  )
}
