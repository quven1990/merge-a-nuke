"use client"

import { useState } from "react"
import { usePathname } from "next/navigation"
import { Check, Copy, Ticket } from "lucide-react"

import { ACTIVE_CODES } from "@/lib/codes-data"
import { toPlausibleCodeName, trackPlausible } from "@/lib/analytics"
import { copyToClipboard } from "@/lib/copy-to-clipboard"
import { REDEEM_SHORT_PATH } from "@/lib/redeem-guide-data"
import { TrackedCtaLink } from "@/components/tracked-cta-link"
import { cn } from "@/lib/utils"

export function HeroCodesChips({ className }: { className?: string }) {
  const pathname = usePathname()
  const [copied, setCopied] = useState<string | null>(null)

  const copy = async (code: string) => {
    try {
      const ok = await copyToClipboard(code)

      if (!ok) {
        setCopied(null)
        return
      }

      setCopied(code)
      const codeName = toPlausibleCodeName(code)
      if (codeName) {
        trackPlausible("copy_code", {
          code: codeName,
          page: pathname,
          source: "hero_chips",
        })
      }
      window.setTimeout(() => setCopied((current) => (current === code ? null : current)), 2000)
    } catch {
      setCopied(null)
    }
  }

  return (
    <div className={cn("notranslate max-w-xl", className)} translate="no">
      <div className="flex items-center gap-2">
        <Ticket className="size-4 text-primary" aria-hidden="true" />
        <p className="text-sm font-semibold text-foreground">Working codes — tap to copy</p>
      </div>
      <ul className="mt-3 flex flex-col gap-2 sm:flex-row sm:flex-wrap">
        {ACTIVE_CODES.map((entry) => {
          const isCopied = copied === entry.code

          return (
            <li key={entry.code}>
              <button
                type="button"
                onClick={() => void copy(entry.code)}
                className={cn(
                  "flex w-full min-w-0 items-center justify-between gap-3 rounded-xl border px-3 py-2.5 text-left shadow-sm transition-all sm:w-auto",
                  isCopied
                    ? "border-primary bg-primary/15"
                    : "border-primary/35 bg-card/80 hover:border-primary/60 hover:bg-card",
                )}
                aria-label={`Copy code ${entry.code} for ${entry.reward}`}
              >
                <span className="min-w-0">
                  <span className="block font-mono text-sm font-bold text-primary">
                    {entry.code}
                  </span>
                  <span className="mt-0.5 block text-xs text-muted-foreground">
                    {entry.reward}
                  </span>
                </span>
                <span
                  className={cn(
                    "inline-flex shrink-0 items-center gap-1 rounded-lg px-2 py-1 text-xs font-semibold",
                    isCopied
                      ? "bg-primary text-primary-foreground"
                      : "bg-primary/10 text-primary",
                  )}
                >
                  {isCopied ? (
                    <>
                      <Check className="size-3.5" aria-hidden="true" />
                      Copied
                    </>
                  ) : (
                    <>
                      <Copy className="size-3.5" aria-hidden="true" />
                      Copy
                    </>
                  )}
                </span>
              </button>
            </li>
          )
        })}
      </ul>
      <p className="mt-2 text-xs text-muted-foreground">
        Redeem via {REDEEM_SHORT_PATH}.{" "}
        <TrackedCtaLink
          href="/codes"
          label="Full redeem guide"
          placement="hero_chips"
          className="inline-block rounded-md py-1 font-medium text-primary underline decoration-primary/40 underline-offset-2 hover:decoration-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
        >
          Full redeem guide
        </TrackedCtaLink>
      </p>
    </div>
  )
}
