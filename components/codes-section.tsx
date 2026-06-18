"use client"

import { useState } from "react"
import { usePathname } from "next/navigation"
import {
  AlertTriangle,
  Check,
  Copy,
  Gamepad2,
  MousePointerClick,
  ScrollText,
  Store,
  Ticket,
} from "lucide-react"

import { SectionHeading } from "@/components/hud"
import { Button } from "@/components/ui/button"
import { WikiIllustration } from "@/components/wiki-illustration"
import { ACTIVE_CODES } from "@/lib/codes-data"
import { toPlausibleCodeName, trackPlausible } from "@/lib/analytics"

type CodeEntry = (typeof ACTIVE_CODES)[number]

const CODES: CodeEntry[] = ACTIVE_CODES

const REDEEM_STEPS = [
  {
    icon: Gamepad2,
    title: "Open the game",
    desc: "Launch Merge a Nuke on Roblox and load into your base.",
  },
  {
    icon: Store,
    title: "Open Store",
    desc: "Click the Store button on the left side of the screen.",
  },
  {
    icon: ScrollText,
    title: "Find the code box",
    desc: 'Scroll to the bottom of the Store menu until you see "Type Code Here".',
  },
  {
    icon: MousePointerClick,
    title: "Redeem",
    desc: "Paste the code exactly as written, then click Redeem to claim your reward.",
  },
] as const

export function CodesSection() {
  const pathname = usePathname()
  const [copied, setCopied] = useState<string | null>(null)

  const copy = async (code: string) => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(code)
      const codeName = toPlausibleCodeName(code)
      if (codeName) {
        trackPlausible("copy_code", {
          code: codeName,
          page: pathname,
          source: "codes_table",
        })
      }
      setTimeout(() => setCopied((c) => (c === code ? null : c)), 1500)
    } catch {
      setCopied(null)
    }
  }

  return (
    <section
      id="codes"
      className="relative scroll-mt-20 border-b border-border/60 py-16 lg:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          icon={Ticket}
          kicker="Free codes"
          title="Latest Merge a Nuke Codes"
          tag="Checked weekly"
        />
        <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
          Redeem in this order for the biggest boost:{" "}
          <strong className="text-foreground">ATOMIC</strong> (20 nukes), then{" "}
          <strong className="text-foreground">UPDATE2</strong> (10 nukes), then{" "}
          <strong className="text-foreground">BOOM</strong> ($5,000). Use codes
          before spending cash on upgrades so you don&apos;t waste the free head
          start.
        </p>

        <div className="mt-8 overflow-hidden rounded-2xl border-2 border-primary/25 bg-card/80 shadow-lg glow-border">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border/50 bg-secondary/30 px-4 py-3">
            <span className="text-sm font-semibold text-foreground">
              Working codes — June 2026
            </span>
            <span className="text-xs text-muted-foreground">
              Last checked:{" "}
              <span className="font-medium text-primary">June 18, 2026</span>
              <span className="hidden sm:inline">
                {" "}
                · synced with community code lists
              </span>
            </span>
          </div>

          <div className="hidden grid-cols-[1fr_1.4fr_1.4fr_0.8fr_auto] gap-4 border-b border-border/40 px-4 py-2.5 text-xs font-medium text-muted-foreground lg:grid">
            <span>Code</span>
            <span>Reward</span>
            <span>Source</span>
            <span>Status</span>
            <span className="text-right">Action</span>
          </div>

          <ul className="divide-y divide-border/40">
            {CODES.map((row, i) => (
              <li
                key={row.code}
                className="grid grid-cols-1 items-center gap-3 px-4 py-4 transition-colors hover:bg-primary/5 lg:grid-cols-[1fr_1.4fr_1.4fr_0.8fr_auto] lg:gap-4"
              >
                <div className="flex items-center gap-3">
                  <span className="text-xs text-muted-foreground lg:hidden">
                    Code
                  </span>
                  <span className="hidden text-xs text-muted-foreground lg:inline">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="flex flex-col gap-1">
                    <code className="w-fit rounded-lg border border-primary/40 bg-primary/10 px-3 py-1.5 font-mono text-sm font-bold tracking-wider text-primary">
                      {row.code}
                    </code>
                    {row.highlight ? (
                      <span className="text-[10px] font-semibold text-boom">
                        {row.highlight}
                      </span>
                    ) : null}
                  </div>
                </div>

                <div className="lg:contents">
                  <span className="text-sm text-foreground">
                    <span className="mr-2 text-xs text-muted-foreground lg:hidden">
                      Reward
                    </span>
                    {row.reward}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    <span className="mr-2 text-xs text-muted-foreground lg:hidden">
                      Source
                    </span>
                    {row.source}
                  </span>
                  <span
                    className={
                      row.status === "Active"
                        ? "flex items-center gap-1.5 text-xs font-semibold text-primary"
                        : "flex items-center gap-1.5 text-xs font-semibold text-hazard"
                    }
                  >
                    <span
                      className={
                        row.status === "Active"
                          ? "size-1.5 rounded-full bg-primary"
                          : "size-1.5 rounded-full bg-hazard"
                      }
                    />
                    {row.status}
                  </span>
                </div>

                <div className="lg:text-right">
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full rounded-xl border-primary/40 font-mono text-xs font-bold text-primary hover:bg-primary/10 lg:w-auto"
                    onClick={() => copy(row.code)}
                    aria-label={`Copy code ${row.code}`}
                  >
                    {copied === row.code ? (
                      <>
                        <Check className="size-3.5" /> Copied
                      </>
                    ) : (
                      <>
                        <Copy className="size-3.5" /> Copy
                      </>
                    )}
                  </Button>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 flex flex-col gap-8 lg:grid lg:grid-cols-[1fr_280px] lg:items-start">
          <div className="min-w-0">
            <h2 className="text-lg font-bold text-foreground">
              How to redeem codes
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
              Codes are case-sensitive. Copy and paste them directly to avoid
              typos.
            </p>

            <ol className="mt-6 grid gap-4 sm:grid-cols-2">
              {REDEEM_STEPS.map((step, i) => (
                <li
                  key={step.title}
                  className="flex gap-4 rounded-2xl border border-border/70 bg-card/70 p-4 shadow-sm"
                >
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 text-primary">
                    <step.icon className="size-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold text-primary">
                      Step {i + 1}
                    </p>
                    <p className="mt-0.5 font-semibold text-foreground">
                      {step.title}
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {step.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <WikiIllustration
            src="/images/codes-rewards.webp"
            alt="Roblox-style illustration of code rewards with cash, coins, and small yellow studded nukes"
            variant="float"
            caption="Redeem codes in Store for cash and nukes"
            className="mx-auto w-full max-w-sm lg:max-w-none lg:justify-self-center"
          />
        </div>

        <div className="mt-5 flex items-start gap-3 rounded-2xl border border-warning/40 bg-warning/10 p-4">
          <AlertTriangle
            className="mt-0.5 size-5 shrink-0 text-warning"
            aria-hidden="true"
          />
          <p className="text-sm text-muted-foreground">
            <span className="font-semibold text-warning">Heads up: </span>
            Codes can expire after Friday updates. All three codes below were
            active as of{" "}
            <strong className="text-foreground">June 18, 2026</strong> per
            community trackers — if one fails, try the others in order, rejoin
            the game on a fresh session, and copy codes exactly in Store → Type
            Code Here → Redeem.
          </p>
        </div>
      </div>
    </section>
  )
}
