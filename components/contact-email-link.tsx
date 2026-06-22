"use client"

import { useEffect, useState } from "react"

import { CONTACT_EMAIL } from "@/lib/site-contact"

/**
 * Renders the contact email only on the client side so that Cloudflare's
 * Email Address Obfuscation never sees the plain-text address in the SSR HTML,
 * preventing /cdn-cgi/l/email-protection 404s in SEO crawlers.
 */
export function ContactEmailLink({
  className,
}: {
  className?: string
}) {
  const [show, setShow] = useState(false)

  useEffect(() => {
    setShow(true)
  }, [])

  if (!show) {
    return (
      <span className={className} aria-label="Contact email">
        contact [at] mergeanuke.site
      </span>
    )
  }

  return (
    <a href={`mailto:${CONTACT_EMAIL}`} className={className}>
      {CONTACT_EMAIL}
    </a>
  )
}
