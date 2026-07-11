import Link from "next/link"
import { ArrowRight, Newspaper } from "lucide-react"

import { SectionHeading } from "@/components/hud"
import { BLOG_POSTS } from "@/lib/blog-posts"

export function BlogIndex() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <SectionHeading icon={Newspaper} kicker="Articles" title="Merge a Nuke Blog" tag="Sourced" />
      <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
        Short articles built from verified wiki data plus cited gameplay footage — not AI guesses. Each post lists
        sources and links to the full guide pages.
      </p>

      <ul className="mt-10 space-y-4">
        {BLOG_POSTS.map((post) => (
          <li key={post.slug}>
            <Link
              href={`/blog/${post.slug}`}
              className="group block rounded-2xl border border-border/70 bg-card/70 p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary/50"
            >
              <time dateTime={post.published} className="text-xs font-semibold text-primary">
                {post.published}
              </time>
              <h2 className="mt-1 text-lg font-bold text-foreground group-hover:text-primary">{post.title}</h2>
              <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted-foreground">{post.description}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-primary">
                Read article
                <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
