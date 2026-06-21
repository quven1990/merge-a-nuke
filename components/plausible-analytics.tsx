import Script from "next/script"

import { PLAUSIBLE_ENABLED, PLAUSIBLE_SCRIPT_URL } from "@/lib/analytics"

export function PlausibleAnalytics() {
  if (!PLAUSIBLE_ENABLED) {
    return null
  }

  return (
    <>
      <Script async src={PLAUSIBLE_SCRIPT_URL} strategy="afterInteractive" />
      <Script id="plausible-init" strategy="afterInteractive">
        {`window.plausible=window.plausible||function(){(plausible.q=plausible.q||[]).push(arguments)},plausible.init=plausible.init||function(i){plausible.o=i||{}};
plausible.init()`}
      </Script>
    </>
  )
}
