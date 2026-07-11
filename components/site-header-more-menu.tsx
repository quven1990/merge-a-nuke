"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronDown } from "lucide-react"
import { useEffect, useRef, useState } from "react"

import type { NavItem } from "@/lib/navigation"
import { cn } from "@/lib/utils"

const linkClass = (active: boolean) =>
  cn(
    "block rounded-lg px-3 py-2 text-sm font-medium transition-colors",
    active
      ? "bg-primary/15 text-primary"
      : "text-muted-foreground hover:bg-primary/10 hover:text-primary",
  )

export function SiteHeaderMoreMenu({ items }: { items: NavItem[] }) {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const rootRef = useRef<HTMLDivElement>(null)
  const moreActive = items.some((item) => pathname === item.href)

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    if (!open) return

    const onPointerDown = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false)
      }
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false)
    }

    document.addEventListener("mousedown", onPointerDown)
    document.addEventListener("keydown", onKeyDown)
    return () => {
      document.removeEventListener("mousedown", onPointerDown)
      document.removeEventListener("keydown", onKeyDown)
    }
  }, [open])

  if (items.length === 0) return null

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        aria-expanded={open}
        aria-haspopup="menu"
        onClick={() => setOpen((value) => !value)}
        className={cn(
          "inline-flex items-center gap-1 rounded-lg px-2.5 py-1.5 text-[13px] font-medium transition-colors",
          moreActive || open
            ? "bg-primary/15 text-primary"
            : "text-muted-foreground hover:bg-primary/10 hover:text-primary",
        )}
      >
        More
        <ChevronDown
          className={cn("size-3.5 transition-transform", open && "rotate-180")}
          aria-hidden="true"
        />
      </button>

      {open ? (
        <div
          role="menu"
          className="absolute right-0 top-full z-50 mt-1.5 min-w-[11rem] rounded-xl border border-border/70 bg-background/95 p-1.5 shadow-lg backdrop-blur-md"
        >
          {items.map((link) => {
            const active = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                role="menuitem"
                aria-current={active ? "page" : undefined}
                className={linkClass(active)}
                onClick={() => setOpen(false)}
              >
                {link.navLabel ?? link.label}
              </Link>
            )
          })}
        </div>
      ) : null}
    </div>
  )
}
