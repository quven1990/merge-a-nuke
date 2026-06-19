import { HelpCircle } from "lucide-react"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { SisterWikisSection } from "@/components/sister-wikis-section"
import { FAQS } from "@/lib/faqs"

export function FaqSection({ showSisterWikis = false }: { showSisterWikis?: boolean }) {
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
        <p className="mt-4 max-w-2xl text-muted-foreground leading-relaxed">
          Quick answers about codes, offline cash, raids, updates, mobile play,
          and this independent Merge a Nuke Wiki.
        </p>

        <div className="mt-8 rounded-2xl border border-border/70 bg-card/70 px-5 shadow-sm">
          <Accordion>
            {FAQS.map((item, i) => (
              <AccordionItem key={item.q} value={`faq-${i}`}>
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
        {showSisterWikis ? <SisterWikisSection /> : null}
      </div>
    </section>
  )
}
