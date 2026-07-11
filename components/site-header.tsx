import Link from "next/link"
import { Radiation } from "lucide-react"

import { HeaderCodesCta } from "@/components/header-codes-cta"

import { SiteHeaderMobileMenu } from "@/components/site-header-mobile-menu"
import { SiteHeaderNav } from "@/components/site-header-nav"
import { Badge } from "@/components/ui/badge"
import { getHeaderMoreNavItems, getHeaderPrimaryNavItems, getMobileNavItems } from "@/lib/navigation"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="relative mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
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
            className="ml-1 hidden shrink-0 rounded-full border-boom/50 bg-boom/10 text-boom xl:inline-flex"
          >
            Fan Guide
          </Badge>
        </Link>

        <SiteHeaderNav
          primaryItems={getHeaderPrimaryNavItems()}
          moreItems={getHeaderMoreNavItems()}
        />

        <div className="flex items-center gap-2">
          <HeaderCodesCta />
          <SiteHeaderMobileMenu navItems={getMobileNavItems()} />
        </div>
      </div>
    </header>
  )
}
