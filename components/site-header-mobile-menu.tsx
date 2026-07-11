"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import type { NavItem } from "@/lib/navigation"
import { trackPlausible } from "@/lib/analytics"
import { cn } from "@/lib/utils"

export function SiteHeaderMobileMenu({ navItems }: { navItems: NavItem[] }) {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <>
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

      {open ? (
        <div className="absolute inset-x-0 top-full border-t border-border/60 bg-background/95 backdrop-blur-md lg:hidden">
          <nav
            aria-label="Mobile"
            className="mx-auto grid max-w-7xl grid-cols-2 gap-1 px-4 py-4 sm:grid-cols-3 sm:px-6"
          >
            {navItems.map((link) => {
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
      ) : null}
    </>
  )
}
