"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import type { NavItem } from "@/lib/navigation"
import { cn } from "@/lib/utils"

export function SiteHeaderNav({ navItems }: { navItems: NavItem[] }) {
  const pathname = usePathname()

  return (
    <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
      {navItems.map((link) => {
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
  )
}
