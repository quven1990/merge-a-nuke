"use client"

import type { ComponentProps, ReactNode } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { type CtaPlacement, trackPlausible } from "@/lib/analytics"

type TrackedCtaLinkProps = Omit<ComponentProps<typeof Link>, "href"> & {
  href: string
  label: string
  placement: CtaPlacement
  children: ReactNode
}

export function TrackedCtaLink({
  href,
  label,
  placement,
  onClick,
  children,
  ...props
}: TrackedCtaLinkProps) {
  const pathname = usePathname()

  return (
    <Link
      href={href}
      onClick={(event) => {
        trackPlausible("cta_click", {
          label,
          target: href,
          placement,
          page: pathname,
        })

        onClick?.(event)
      }}
      {...props}
    >
      {children}
    </Link>
  )
}
