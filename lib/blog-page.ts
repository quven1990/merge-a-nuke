import type { BlogPost } from "@/lib/blog-posts"
import type { SeoPageConfig } from "@/lib/seo-pages"

export function buildBlogSeoPage(post: BlogPost): SeoPageConfig {
  return {
    path: `/blog/${post.slug}`,
    title: `${post.title} — Merge a Nuke Wiki`,
    description: post.description,
    h1: post.title,
    intro: post.tldr[0],
    tldr: post.tldr.join(" "),
    breadcrumb: "Blog",
  }
}
