"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { SiteHeaderMoreMenu } from "@/components/site-header-more-menu"
import type { NavItem } from "@/lib/navigation"
import { cn } from "@/lib/utils"

type SiteHeaderNavProps = {
  primaryItems: NavItem[]
  moreItems: NavItem[]
}

export function SiteHeaderNav({ primaryItems, moreItems }: SiteHeaderNavProps) {
  const pathname = usePathname()

  return (
    <nav aria-label="Primary" className="hidden items-center gap-0.5 lg:flex">
      {primaryItems.map((link) => {
        const active = pathname === link.href
        return (
          <Link
            key={link.href}
            href={link.href}
            aria-current={active ? "page" : undefined}
            className={cn(
              "rounded-lg px-2.5 py-1.5 text-[13px] font-medium transition-colors",
              active
                ? "bg-primary/15 text-primary"
                : "text-muted-foreground hover:bg-primary/10 hover:text-primary",
            )}
          >
            {link.navLabel ?? link.label}
          </Link>
        )
      })}
      <SiteHeaderMoreMenu items={moreItems} />
    </nav>
  )
}
