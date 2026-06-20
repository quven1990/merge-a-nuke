import Link from "next/link"
import { MessageCircleQuestion } from "lucide-react"

import type { SeoPageConfig } from "@/lib/seo-pages"
import { getPageFaqHeading, getPageFaqs } from "@/lib/page-faqs"

export function PageFaqSection({ pagePath }: { pagePath: SeoPageConfig["path"] }) {
  const faqs = getPageFaqs(pagePath)
  if (faqs.length === 0) return null

  const heading = getPageFaqHeading(pagePath)
  const sectionId = `${pagePath.replace(/^\//, "") || "home"}-faq`

  return (
    <section
      id={sectionId}
      aria-labelledby={`${sectionId}-heading`}
      className="border-t border-border/60 bg-card/20 py-12 lg:py-14"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <span className="flex size-9 items-center justify-center rounded-2xl border border-primary/40 bg-primary/10">
            <MessageCircleQuestion
              className="size-5 text-primary"
              aria-hidden="true"
            />
          </span>
          <h2
            id={`${sectionId}-heading`}
            className="text-xl font-bold tracking-tight sm:text-2xl"
          >
            {heading}
          </h2>
        </div>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          Short answers for this guide. For the full wiki FAQ, visit{" "}
          <Link href="/faq" className="font-semibold text-primary hover:underline">
            all questions
          </Link>
          .
        </p>

        <div className="mt-6 space-y-3">
          {faqs.map((item) => (
            <article
              key={item.q}
              className="rounded-2xl border border-border/70 bg-card/70 p-4 shadow-sm sm:p-5"
            >
              <h3 className="text-base font-semibold text-foreground">{item.q}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {item.a}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
