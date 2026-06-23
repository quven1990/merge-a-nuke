"use client"

import { useEffect, useState } from "react"
import { createPortal } from "react-dom"
import { usePathname } from "next/navigation"
import {
  AlertTriangle,
  ArrowRight,
  Check,
  Copy,
  Gamepad2,
  MousePointerClick,
  ScrollText,
  Store,
  Ticket,
} from "lucide-react"

import { SectionHeading } from "@/components/hud"
import { TrackedCtaLink } from "@/components/tracked-cta-link"
import { TrackedOutboundLink } from "@/components/tracked-outbound-link"
import { WikiIllustration } from "@/components/wiki-illustration"
import { ACTIVE_CODES } from "@/lib/codes-data"
import { toPlausibleCodeName, trackPlausible } from "@/lib/analytics"
import { getContentCheckedDate, getContentMonthYear } from "@/lib/content-freshness"
import { copyToClipboard } from "@/lib/copy-to-clipboard"
import { ROBLOX_GAME_URL } from "@/lib/game-links"
import { REDEEM_SHORT_PATH, REDEEM_STEPS } from "@/lib/redeem-guide-data"
import { cn } from "@/lib/utils"

const CODES_MONTH_YEAR = getContentMonthYear()
const CODES_CHECKED_DATE = getContentCheckedDate()

type CodeEntry = (typeof ACTIVE_CODES)[number]

const CODES: CodeEntry[] = ACTIVE_CODES

const REDEEM_STEP_ICONS = {
  "open-game": Gamepad2,
  "open-shop": Store,
  "scroll-to-code-box": ScrollText,
  redeem: MousePointerClick,
} as const

const REDEEM_STEPS_WITH_ICONS = REDEEM_STEPS.map((step) => ({
  ...step,
  icon: REDEEM_STEP_ICONS[step.id],
}))

const REDEEM_LINK_CLASS =
  "inline-block rounded-md py-1 font-semibold text-primary underline decoration-primary/40 underline-offset-2 hover:decoration-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-card"

type CopyToast = {
  code: string
  ok: boolean
}

const COPY_TOAST_SUCCESS_MS = 8000
const COPY_TOAST_ERROR_MS = 4000

const DESKTOP_COPY_BUTTON_CLASS =
  "inline-flex h-7 items-center justify-center gap-1 rounded-xl border border-primary/40 bg-background px-2.5 font-mono text-xs font-bold text-primary transition-colors hover:bg-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"

const TOAST_OUTLINE_BUTTON_CLASS =
  "inline-flex min-h-11 items-center justify-center rounded-xl border border-border/70 bg-background px-4 text-sm font-medium transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-card"

const TOAST_GHOST_BUTTON_CLASS =
  "inline-flex h-7 shrink-0 items-center justify-center rounded-lg px-2.5 text-sm font-medium transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"

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
    try {
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
    } catch {
      setCopied(null)
      setToast({ code, ok: false })
    }
  }

  const renderRedeemStepDesc = (step: (typeof REDEEM_STEPS_WITH_ICONS)[number]) => {
    if (step.id === "open-game") {
      return (
        <>
          Launch{" "}
          <TrackedOutboundLink
            href={ROBLOX_GAME_URL}
            placement="codes_redeem"
            target="_blank"
            rel="noopener noreferrer"
            className={REDEEM_LINK_CLASS}
          >
            Merge a Nuke on Roblox
          </TrackedOutboundLink>{" "}
          and load into your base.
        </>
      )
    }

    return step.desc
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
      translate="no"
      className="notranslate relative scroll-mt-20 border-b border-border/60 py-16 lg:py-20"
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
              Working codes — {CODES_MONTH_YEAR}
            </span>
            <span className="text-xs text-muted-foreground">
              Last checked:{" "}
              <span className="font-medium text-primary">{CODES_CHECKED_DATE}</span>
              <span className="hidden sm:inline">
                {" "}
                · synced with community code lists
              </span>
            </span>
          </div>

          <p className="border-b border-border/40 px-4 py-2 text-xs text-muted-foreground lg:hidden">
            Tap a code to copy, then redeem via {REDEEM_SHORT_PATH}.
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
                    onClick={() => void copy(row.code)}
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
                    <button
                      type="button"
                      className={DESKTOP_COPY_BUTTON_CLASS}
                      onClick={() => void copy(row.code)}
                      aria-label={`Copy code ${row.code}`}
                    >
                      {isCopied ? (
                        <>
                          <Check className="size-3.5" aria-hidden="true" /> Copied
                        </>
                      ) : (
                        <>
                          <Copy className="size-3.5" aria-hidden="true" /> Copy
                        </>
                      )}
                    </button>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>

        <div className="mt-3 flex justify-end">
          <TrackedCtaLink
            href="/codes"
            label="Full codes page"
            placement="codes_redeem"
            className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            Full Merge a Nuke codes page
            <ArrowRight className="size-3.5 shrink-0" aria-hidden="true" />
          </TrackedCtaLink>
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
              {REDEEM_STEPS_WITH_ICONS.map((step, i) => (
                <li
                  key={step.id}
                  className="flex gap-4 rounded-2xl border border-border/70 bg-card/70 p-4 shadow-sm"
                >
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 text-primary">
                    <step.icon className="size-5" aria-hidden="true" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold text-primary">
                      Step {i + 1}
                    </p>
                    <p className="mt-0.5 font-semibold text-foreground">
                      {step.title}
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {renderRedeemStepDesc(step)}
                    </p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="mt-5 rounded-2xl border border-primary/25 bg-primary/5 p-4 sm:p-5">
              <p className="text-sm text-muted-foreground">
                After redeeming codes in Shop:
              </p>
              <TrackedCtaLink
                href="/beginner-guide"
                label="Beginner Guide"
                placement="codes_redeem"
                className="mt-3 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl border border-primary/40 bg-card/90 px-4 text-sm font-bold text-primary shadow-sm transition-colors hover:border-primary/60 hover:bg-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:w-auto"
              >
                Start the Beginner Guide
                <ArrowRight className="size-4 shrink-0" aria-hidden="true" />
              </TrackedCtaLink>
            </div>
          </div>

          <WikiIllustration
            src="/images/codes-rewards.webp"
            alt="Roblox-style illustration of code rewards with cash, coins, and small yellow studded nukes"
            variant="float"
            caption="Redeem codes in Shop for cash and nukes"
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
            the game on a fresh session, and follow {REDEEM_SHORT_PATH}.
          </p>
        </div>
      </div>

      {mounted && toast
        ? createPortal(
            <div
              role="status"
              aria-live="polite"
              translate="no"
              className={cn(
                "notranslate fixed inset-x-4 z-[100] mx-auto max-w-lg sm:inset-x-auto sm:left-1/2 sm:w-[min(100%,32rem)] sm:-translate-x-1/2",
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
                      Open Roblox, then {REDEEM_SHORT_PATH}.
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
                    <button
                      type="button"
                      className={TOAST_OUTLINE_BUTTON_CLASS}
                      onClick={() => setToast(null)}
                    >
                      Not now
                    </button>
                  </div>
                </div>
              ) : (
                <div className="flex items-start justify-between gap-3">
                  <p className="text-sm font-semibold text-hazard">
                    Could not copy {toast.code}. Long-press the code to select it
                    manually.
                  </p>
                  <button
                    type="button"
                    className={TOAST_GHOST_BUTTON_CLASS}
                    onClick={() => setToast(null)}
                  >
                    Close
                  </button>
                </div>
              )}
            </div>,
            document.body,
          )
        : null}
    </section>
  )
}
