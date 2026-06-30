import { ArrowRight, HelpCircle } from "lucide-react"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { TrackedCtaLink } from "@/components/tracked-cta-link"
import { getHomeFaqTeaser } from "@/lib/faqs"

export function HomeFaqTeaser() {
  const items = getHomeFaqTeaser()

  return (
    <section
      id="faq"
      className="relative scroll-mt-20 border-b border-border/60 py-16 lg:py-20"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <span className="flex size-9 items-center justify-center rounded-2xl border border-primary/40 bg-primary/10">
            <HelpCircle className="size-5 text-primary" aria-hidden="true" />
          </span>
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Frequently Asked Questions
          </h2>
        </div>
        <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
          Quick answers to the most common Merge a Nuke questions. Open the full
          FAQ for codes, rebirth, raids, and wiki scope.
        </p>

        <div className="mt-8 rounded-2xl border border-border/70 bg-card/70 px-5 shadow-sm">
          <Accordion>
            {items.map((item, i) => (
              <AccordionItem key={item.q} value={`home-faq-${i}`}>
                <AccordionTrigger className="text-base font-semibold text-foreground hover:no-underline hover:text-primary">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <TrackedCtaLink
          href="/faq"
          label="Full FAQ page"
          placement="guide_cards"
          className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-xl border border-primary/40 bg-card/90 px-4 text-sm font-bold text-primary shadow-sm transition-colors hover:border-primary/60 hover:bg-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          See all FAQ answers
          <ArrowRight className="size-4 shrink-0" aria-hidden="true" />
        </TrackedCtaLink>
      </div>
    </section>
  )
}
