import Link from "next/link"
import { ArrowRight, ExternalLink } from "lucide-react"

import type { BlogPost, BlogSection } from "@/lib/blog-posts"

function SectionBlock({ section }: { section: BlogSection }) {
  switch (section.type) {
    case "h2":
      return (
        <h2 className="mt-10 text-xl font-bold tracking-tight text-foreground first:mt-0 sm:text-2xl">
          {section.text}
        </h2>
      )
    case "p":
      return <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">{section.text}</p>
    case "ul":
      return (
        <ul className="mt-4 space-y-2">
          {section.items.map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
      )
    case "callout":
      return (
        <div className="mt-6 rounded-2xl border border-warning/40 bg-warning/10 p-4 sm:p-5">
          <p className="text-sm font-bold text-foreground">{section.title}</p>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{section.text}</p>
        </div>
      )
    default:
      return null
  }
}

export function BlogArticle({ post }: { post: BlogPost }) {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <header className="border-b border-border/60 pb-8">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">Blog · sourced gameplay</p>
        <h1 className="mt-2 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">{post.title}</h1>
        <p className="mt-3 text-sm text-muted-foreground">
          Published{" "}
          <time dateTime={post.published}>{post.published}</time>
          {post.updated !== post.published ? (
            <>
              {" "}
              · Updated <time dateTime={post.updated}>{post.updated}</time>
            </>
          ) : null}
        </p>
        <ul className="mt-5 space-y-2 rounded-2xl border border-primary/25 bg-primary/5 p-4">
          {post.tldr.map((line) => (
            <li key={line} className="text-sm leading-relaxed text-muted-foreground">
              <span className="font-semibold text-foreground">TL;DR: </span>
              {line}
            </li>
          ))}
        </ul>
      </header>

      <div className="prose-custom">
        {post.sections.map((section, i) => (
          <SectionBlock key={`${section.type}-${i}`} section={section} />
        ))}
      </div>

      {post.endCta ? (
        <section
          className="mt-12 overflow-hidden rounded-2xl border border-primary/35 bg-gradient-to-br from-primary/10 via-card/80 to-card/70 p-5 shadow-md sm:p-6"
          aria-labelledby="blog-end-cta-heading"
        >
          <h2 id="blog-end-cta-heading" className="text-lg font-bold text-foreground sm:text-xl">
            {post.endCta.title}
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">{post.endCta.description}</p>
          <div className="mt-5 flex flex-col gap-3">
            {post.endCta.links
              .filter((link) => link.primary)
              .map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
                >
                  {link.label}
                  <ArrowRight className="size-4 shrink-0" aria-hidden="true" />
                </Link>
              ))}
            {post.endCta.links.some((link) => !link.primary) ? (
              <ul className="grid gap-2 sm:grid-cols-2">
                {post.endCta.links
                  .filter((link) => !link.primary)
                  .map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="flex items-center justify-between rounded-xl border border-border/70 bg-background/60 px-4 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary/50 hover:text-primary"
                      >
                        {link.label}
                        <ArrowRight className="size-4 shrink-0" aria-hidden="true" />
                      </Link>
                    </li>
                  ))}
              </ul>
            ) : null}
          </div>
        </section>
      ) : null}

      <section className="mt-12 rounded-2xl border border-border/70 bg-card/70 p-5 sm:p-6">
        <h2 className="text-lg font-bold text-foreground">Sources</h2>
        <ul className="mt-4 space-y-3">
          {post.sources.map((source) => (
            <li key={source.url}>
              <a
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
              >
                {source.label}
                <ExternalLink className="size-3.5" aria-hidden="true" />
              </a>
              {source.note ? <p className="mt-0.5 text-xs text-muted-foreground">{source.note}</p> : null}
            </li>
          ))}
        </ul>
        <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
          Ability numbers quoted from YouTube narration are not treated as verified until matched to an in-game
          commander card on this wiki.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-lg font-bold text-foreground">Related guides</h2>
        <ul className="mt-4 grid gap-2 sm:grid-cols-2">
          {post.relatedLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="flex items-center justify-between rounded-xl border border-border/70 bg-card/70 px-4 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary/50 hover:text-primary"
              >
                {link.label}
                <ArrowRight className="size-4 shrink-0" aria-hidden="true" />
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </article>
  )
}
