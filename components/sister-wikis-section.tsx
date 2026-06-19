import { ExternalLink } from "lucide-react"

import { SISTER_WIKIS } from "@/lib/sister-wikis"

export function SisterWikisSection() {
  return (
    <div className="mt-6 rounded-2xl border border-border/70 bg-card/70 p-5 shadow-sm sm:p-6">
      <h3 className="text-base font-semibold text-foreground">
        Are there guides for other Roblox games?
      </h3>
      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
        Yes. These independent fan wikis cover other Roblox games — not official
        Roblox or developer sites:
      </p>
      <ul className="mt-4 space-y-3">
        {SISTER_WIKIS.map((wiki) => (
          <li key={wiki.href}>
            <a
              href={wiki.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-foreground transition-colors hover:text-primary"
            >
              {wiki.name}
              <ExternalLink className="size-3.5 opacity-60" aria-hidden="true" />
            </a>
            <p className="mt-0.5 text-sm text-muted-foreground">{wiki.description}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
