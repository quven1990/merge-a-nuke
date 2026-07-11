import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { BlogArticle } from "@/components/blog-article"
import { RelatedGuides } from "@/components/related-guides"
import { SiteShell } from "@/components/site-shell"
import { buildBlogSeoPage } from "@/lib/blog-page"
import { getAllBlogSlugs, getBlogPost } from "@/lib/blog-posts"
import { createPageMetadata } from "@/lib/page-metadata"

type PageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getBlogPost(slug)
  if (!post) return {}
  return createPageMetadata(buildBlogSeoPage(post))
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params
  const post = getBlogPost(slug)
  if (!post) notFound()

  const seoPage = buildBlogSeoPage(post)

  return (
    <SiteShell seoPage={seoPage}>
      <main>
        <BlogArticle post={post} />
        <RelatedGuides current={`/blog/${slug}` as `/${string}`} />
      </main>
    </SiteShell>
  )
}
