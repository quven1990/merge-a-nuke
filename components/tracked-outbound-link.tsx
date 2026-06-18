"use client"

import type { ComponentProps } from "react"
import { usePathname } from "next/navigation"

import {
  type OutboundPlacement,
  resolveOutboundDestination,
  trackPlausible,
} from "@/lib/analytics"

type TrackedOutboundLinkProps = ComponentProps<"a"> & {
  placement: OutboundPlacement
}

export function TrackedOutboundLink({
  placement,
  href,
  onClick,
  ...props
}: TrackedOutboundLinkProps) {
  const pathname = usePathname()

  return (
    <a
      href={href}
      onClick={(event) => {
        if (href) {
          trackPlausible("outbound_click", {
            destination: resolveOutboundDestination(href),
            page: pathname,
            placement,
          })
        }

        onClick?.(event)
      }}
      {...props}
    />
  )
}
