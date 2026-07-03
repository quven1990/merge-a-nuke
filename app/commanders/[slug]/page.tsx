import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { CommanderDetail } from "@/components/commander-detail"
import { PageIntro } from "@/components/page-intro"
import { RelatedGuides } from "@/components/related-guides"
import { SiteShell } from "@/components/site-shell"
import { buildCommanderSeoPage } from "@/lib/commander-page"
import { getAllCommanderSlugs, getCommanderBySlug } from "@/lib/commanders-data"
import { createPageMetadata } from "@/lib/page-metadata"

type PageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return getAllCommanderSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const commander = getCommanderBySlug(slug)
  if (!commander) return {}
  return createPageMetadata(buildCommanderSeoPage(commander))
}

export default async function CommanderDetailPage({ params }: PageProps) {
  const { slug } = await params
  const commander = getCommanderBySlug(slug)
  if (!commander) notFound()

  const page = buildCommanderSeoPage(commander)

  return (
    <SiteShell seoPage={page}>
      <main>
        <PageIntro
          current={page.breadcrumb}
          parent={{ label: "Commanders", href: "/commanders" }}
          title={page.h1}
          description={page.intro}
          tldr={page.tldr}
        />
        <CommanderDetail commander={commander} />
        <RelatedGuides current="/commanders" />
      </main>
    </SiteShell>
  )
}
