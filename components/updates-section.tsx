import Link from "next/link"
import { ArrowRight, Calendar, Sparkles } from "lucide-react"

import { SectionHeading } from "@/components/hud"
import { FRIDAY_PATCH_NOTES, PATCH_UPDATES } from "@/lib/updates-data"

export function UpdatesSection() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 space-y-16">
      <section id="patch-timeline" className="scroll-mt-20">
        <SectionHeading
          icon={Calendar}
          kicker="Patch history"
          title="Merge a Nuke Update Log"
          tag="Verified + community"
        />
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          Nuke The Game ships content every Friday. This log tracks major commander, raid, and
          rebirth changes with links to the guides we updated.
        </p>

        <ol className="mt-10 space-y-6">
          {PATCH_UPDATES.map((patch) => (
            <li
              key={patch.id}
              className="rounded-2xl border border-border/70 bg-card/70 p-5 shadow-sm sm:p-6"
            >
              <div className="flex flex-wrap items-center gap-2">
                <time
                  dateTime={patch.date}
                  className="rounded-full border border-primary/30 bg-primary/10 px-2.5 py-0.5 text-xs font-bold text-primary"
                >
                  {patch.date}
                </time>
                <h2 className="text-lg font-bold text-foreground">{patch.title}</h2>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{patch.summary}</p>
              <ul className="mt-4 space-y-2">
                {patch.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Sparkles className="mt-0.5 size-3.5 shrink-0 text-primary" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex flex-wrap gap-2">
                {patch.links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="inline-flex min-h-9 items-center gap-1.5 rounded-xl border border-primary/35 bg-primary/5 px-3 text-xs font-bold text-primary hover:border-primary/55"
                  >
                    {link.label}
                    <ArrowRight className="size-3.5" aria-hidden="true" />
                  </Link>
                ))}
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section id="friday-workflow" className="scroll-mt-20 rounded-2xl border border-border/70 bg-card/50 p-5 sm:p-6">
        <SectionHeading icon={Sparkles} kicker="Wiki maintenance" title="Friday Patch Checklist" />
        <p className="mt-4 max-w-2xl text-sm text-muted-foreground">
          We run this sequence after each game update so codes, commanders, and IndexNow stay in
          sync with production.
        </p>
        <ol className="mt-6 space-y-3">
          {FRIDAY_PATCH_NOTES.map((step, i) => (
            <li key={step} className="flex items-start gap-3 text-sm text-muted-foreground">
              <span className="flex size-7 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-xs font-bold text-primary">
                {i + 1}
              </span>
              {step}
            </li>
          ))}
        </ol>
      </section>
    </div>
  )
}
