"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Atom, Menu, Radiation, X } from "lucide-react"

import { TrackedCtaLink } from "@/components/tracked-cta-link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { NAV_ITEMS } from "@/lib/navigation"
import { trackPlausible } from "@/lib/analytics"
import { cn } from "@/lib/utils"

export function SiteHeader() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b backdrop-blur-md transition-all duration-300",
        scrolled
          ? "border-primary/40 bg-background/85 shadow-[0_4px_30px_-12px_var(--primary)]"
          : "border-border/60 bg-background/60",
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex min-w-0 items-center gap-2 sm:gap-2.5">
          <span className="relative flex size-9 shrink-0 items-center justify-center rounded-2xl border border-primary/40 bg-primary/15 shadow-sm sm:size-10">
            <Radiation className="size-5 text-primary" aria-hidden="true" />
          </span>
          <span className="flex min-w-0 flex-col leading-none">
            <span className="truncate text-sm font-bold tracking-tight text-foreground sm:text-base">
              Merge a Nuke <span className="text-primary">Wiki</span>
            </span>
            <span className="mt-0.5 hidden text-xs text-muted-foreground sm:block">
              Roblox player guide
            </span>
          </span>
          <Badge
            variant="outline"
            className="ml-1 hidden shrink-0 rounded-full border-boom/50 bg-boom/10 text-boom sm:inline-flex"
          >
            Fan Guide
          </Badge>
        </Link>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-1 lg:flex"
        >
          {NAV_ITEMS.map((link) => {
            const active = pathname === link.href
            return (
              <Link
                key={link.label}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "rounded-lg px-2.5 py-1.5 text-sm font-medium transition-colors",
                  active
                    ? "bg-primary/15 text-primary"
                    : "text-muted-foreground hover:bg-primary/10 hover:text-primary",
                )}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>

        <div className="flex items-center gap-2">
          <TrackedCtaLink
            href="/codes"
            label="Check Codes"
            placement="header"
            aria-current={pathname === "/codes" ? "page" : undefined}
            className={cn(
              "inline-flex min-h-11 items-center justify-center gap-2 rounded-xl px-3 text-sm font-bold shadow-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:px-4",
              pathname === "/codes"
                ? "border border-primary/50 bg-primary/15 text-primary"
                : "bg-primary text-primary-foreground hover:-translate-y-0.5 hover:bg-primary/90",
            )}
          >
            <Atom className="size-4" aria-hidden="true" />
            <span className="sm:hidden">Codes</span>
            <span className="hidden sm:inline">
              {pathname === "/codes" ? "Viewing Codes" : "Check Codes"}
            </span>
          </TrackedCtaLink>
          <Button
            variant="outline"
            size="icon"
            className="lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => {
              setOpen((value) => {
                if (!value) {
                  trackPlausible("nav_open", { page: pathname })
                }
                return !value
              })
            }}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </Button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border/60 bg-background/95 backdrop-blur-md lg:hidden">
          <nav
            aria-label="Mobile"
            className="mx-auto grid max-w-7xl grid-cols-2 gap-1 px-4 py-4 sm:px-6"
          >
            {NAV_ITEMS.map((link) => {
              const active = pathname === link.href
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "rounded-md px-3 py-2 text-sm font-medium transition-colors",
                    active
                      ? "bg-primary/15 text-primary"
                      : "text-muted-foreground hover:bg-primary/10 hover:text-primary",
                  )}
                >
                  {link.label}
                </Link>
              )
            })}
          </nav>
        </div>
      )}
    </header>
  )
}
