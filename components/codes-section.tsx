"use client"

import { useEffect, useState } from "react"
import { createPortal } from "react-dom"
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
import { TrackedOutboundLink } from "@/components/tracked-outbound-link"
import { Button } from "@/components/ui/button"
import { WikiIllustration } from "@/components/wiki-illustration"
import { ACTIVE_CODES } from "@/lib/codes-data"
import { toPlausibleCodeName, trackPlausible } from "@/lib/analytics"
import { copyToClipboard } from "@/lib/copy-to-clipboard"
import { ROBLOX_GAME_URL } from "@/lib/game-links"
import { cn } from "@/lib/utils"

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

type CopyToast = {
  code: string
  ok: boolean
}

const COPY_TOAST_SUCCESS_MS = 8000
const COPY_TOAST_ERROR_MS = 4000

export function CodesSection() {
  const pathname = usePathname()
  const [copied, setCopied] = useState<string | null>(null)
  const [toast, setToast] = useState<CopyToast | null>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!toast) return

    const duration = toast.ok ? COPY_TOAST_SUCCESS_MS : COPY_TOAST_ERROR_MS
    const timer = window.setTimeout(() => setToast(null), duration)
    return () => window.clearTimeout(timer)
  }, [toast])

  const copy = async (code: string) => {
    const ok = await copyToClipboard(code)

    if (ok) {
      setCopied(code)
      setToast({ code, ok: true })
      const codeName = toPlausibleCodeName(code)
      if (codeName) {
        trackPlausible("copy_code", {
          code: codeName,
          page: pathname,
          source: "codes_table",
        })
      }
      window.setTimeout(() => setCopied((current) => (current === code ? null : current)), 2000)
      return
    }

    setCopied(null)
    setToast({ code, ok: false })
  }

  const openRobloxAfterCopy = (code: string) => {
    const codeName = toPlausibleCodeName(code)
    if (codeName) {
      trackPlausible("codes_open_roblox", {
        code: codeName,
        page: pathname,
      })
    }
    setToast(null)
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

          <p className="border-b border-border/40 px-4 py-2 text-xs text-muted-foreground lg:hidden">
            Tap a code to copy, then paste in Store → Type Code Here.
          </p>

          <div className="hidden grid-cols-[1fr_1.4fr_1.4fr_0.8fr_auto] gap-4 border-b border-border/40 px-4 py-2.5 text-xs font-medium text-muted-foreground lg:grid">
            <span>Code</span>
            <span>Reward</span>
            <span>Source</span>
            <span>Status</span>
            <span className="text-right">Action</span>
          </div>

          <ul className="divide-y divide-border/40">
            {CODES.map((row, i) => {
              const isCopied = copied === row.code

              return (
                <li
                  key={row.code}
                  className="px-4 py-4 transition-colors hover:bg-primary/5 lg:grid lg:grid-cols-[1fr_1.4fr_1.4fr_0.8fr_auto] lg:items-center lg:gap-4"
                >
                  <button
                    type="button"
                    onClick={() => copy(row.code)}
                    aria-label={`Copy code ${row.code}`}
                    className={cn(
                      "flex min-h-11 w-full items-center justify-between gap-3 rounded-xl border px-3 py-3 text-left transition-colors active:scale-[0.99] lg:hidden",
                      isCopied
                        ? "border-primary bg-primary/15"
                        : "border-primary/35 bg-primary/5 hover:bg-primary/10",
                    )}
                  >
                    <div className="min-w-0">
                      <code className="font-mono text-lg font-bold tracking-wider text-primary">
                        {row.code}
                      </code>
                      {row.highlight ? (
                        <span className="mt-0.5 block text-[11px] font-semibold text-boom">
                          {row.highlight}
                        </span>
                      ) : null}
                      <span className="mt-1 block text-xs text-muted-foreground">
                        {isCopied ? "Copied!" : "Tap to copy"}
                      </span>
                    </div>
                    <span
                      className={cn(
                        "flex size-10 shrink-0 items-center justify-center rounded-full border",
                        isCopied
                          ? "border-primary bg-primary/20 text-primary"
                          : "border-primary/30 bg-background text-primary",
                      )}
                      aria-hidden="true"
                    >
                      {isCopied ? (
                        <Check className="size-4" />
                      ) : (
                        <Copy className="size-4" />
                      )}
                    </span>
                  </button>

                  <div className="mt-3 space-y-2 lg:mt-0 lg:contents">
                    <div className="hidden items-center gap-3 lg:flex">
                      <span className="text-xs text-muted-foreground">
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

                    <span className="block text-sm text-foreground lg:contents">
                      <span className="mr-2 text-xs text-muted-foreground lg:hidden">
                        Reward
                      </span>
                      {row.reward}
                    </span>
                    <span className="block text-sm text-muted-foreground lg:contents">
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

                  <div className="hidden lg:block lg:text-right">
                    <Button
                      variant="outline"
                      size="sm"
                      className="rounded-xl border-primary/40 font-mono text-xs font-bold text-primary hover:bg-primary/10"
                      onClick={() => copy(row.code)}
                      aria-label={`Copy code ${row.code}`}
                    >
                      {isCopied ? (
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
              )
            })}
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

      {mounted && toast
        ? createPortal(
            <div
              role="status"
              aria-live="polite"
              className={cn(
                "fixed inset-x-4 z-[100] mx-auto max-w-lg sm:inset-x-auto sm:left-1/2 sm:w-[min(100%,32rem)] sm:-translate-x-1/2",
                "bottom-[max(1rem,env(safe-area-inset-bottom))]",
                "rounded-2xl border px-4 py-4 shadow-xl backdrop-blur-md",
                toast.ok
                  ? "border-primary/40 bg-card/95 text-foreground"
                  : "border-hazard/40 bg-card/95 text-foreground",
              )}
            >
              {toast.ok ? (
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
                  <div className="min-w-0">
                    <p className="text-sm font-semibold">
                      <span className="font-mono text-primary">{toast.code}</span>{" "}
                      copied
                    </p>
                    <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">
                      Open Roblox, then paste in Store → Type Code Here → Redeem.
                    </p>
                  </div>
                  <div className="grid shrink-0 grid-cols-1 gap-2 sm:grid-cols-[auto_auto]">
                    <TrackedOutboundLink
                      href={ROBLOX_GAME_URL}
                      placement="codes_toast"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => openRobloxAfterCopy(toast.code)}
                      className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-primary px-4 text-sm font-bold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-card"
                    >
                      <Gamepad2 className="size-4 shrink-0" aria-hidden="true" />
                      Open Roblox
                    </TrackedOutboundLink>
                    <Button
                      type="button"
                      variant="outline"
                      className="min-h-11 rounded-xl border-border/70"
                      onClick={() => setToast(null)}
                    >
                      Not now
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="flex items-start justify-between gap-3">
                  <p className="text-sm font-semibold text-hazard">
                    Could not copy {toast.code}. Long-press the code to select it
                    manually.
                  </p>
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="shrink-0"
                    onClick={() => setToast(null)}
                  >
                    Close
                  </Button>
                </div>
              )}
            </div>,
            document.body,
          )
        : null}
    </section>
  )
}
