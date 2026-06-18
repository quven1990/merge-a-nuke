import Script from "next/script"

import { GA_ENABLED, GA_MEASUREMENT_ID } from "@/lib/analytics"

export function Ga4Analytics() {
  if (!GA_ENABLED) {
    return null
  }

  return (
    <>
      <Script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];
function gtag(){dataLayer.push(arguments);}
gtag('js',new Date());
gtag('config','${GA_MEASUREMENT_ID}');`}
      </Script>
    </>
  )
}
