import Link from "next/link"
import { Calendar, CheckCircle2, RefreshCw, Rocket } from "lucide-react"

import { SectionHeading } from "@/components/hud"
import { REBIRTH_GUIDE } from "@/lib/event-rebirth-data"

export function RebirthGuideSection() {
  return (
    <section
      id="rebirth"
      className="relative scroll-mt-20 border-b border-border/60 py-16 lg:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading icon={Rocket} kicker="Long-term scaling" title={REBIRTH_GUIDE.title} />
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          {REBIRTH_GUIDE.summary}
        </p>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-primary/25 bg-primary/5 p-5">
            <p className="flex items-center gap-2 text-sm font-bold text-foreground">
              <CheckCircle2 className="size-4 text-primary" aria-hidden="true" />
              When to rebirth
            </p>
            <ul className="mt-4 space-y-2">
              {REBIRTH_GUIDE.whenToRebirth.map((item) => (
                <li key={item} className="text-sm leading-relaxed text-muted-foreground">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <div className="rounded-2xl border border-border/70 bg-card/70 p-5">
              <p className="flex items-center gap-2 text-sm font-bold text-foreground">
                <RefreshCw className="size-4 text-hazard" aria-hidden="true" />
                What resets
              </p>
              <ul className="mt-3 space-y-1.5">
                {REBIRTH_GUIDE.whatResets.map((item) => (
                  <li key={item} className="text-sm text-muted-foreground">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-border/70 bg-card/70 p-5">
              <p className="flex items-center gap-2 text-sm font-bold text-foreground">
                <Calendar className="size-4 text-primary" aria-hidden="true" />
                What you keep
              </p>
              <ul className="mt-3 space-y-1.5">
                {REBIRTH_GUIDE.whatPersists.map((item) => (
                  <li key={item} className="text-sm text-muted-foreground">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          {REBIRTH_GUIDE.rebirth7Note} Pair rebirth timing with{" "}
          <Link href="/commanders" className="font-medium text-primary hover:underline">
            commanders
          </Link>{" "}
          — they persist across resets and accelerate your next run.
        </p>
      </div>
    </section>
  )
}
