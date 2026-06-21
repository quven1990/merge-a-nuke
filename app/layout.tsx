import type { Metadata, Viewport } from 'next'
import { Geist } from 'next/font/google'

import { DeferredSecondaryAnalytics } from '@/components/deferred-secondary-analytics'
import { PlausibleAnalytics } from '@/components/plausible-analytics'
import { SEO_PAGES } from '@/lib/seo-pages'
import { getSiteUrl, SITE_NAME } from '@/lib/site'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  display: 'swap',
  adjustFontFallback: true,
  preload: true,
})

const siteUrl = getSiteUrl()

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: SEO_PAGES.home.title,
    template: '%s',
  },
  applicationName: SITE_NAME,
  keywords: [
    'Merge a Nuke Wiki',
    'Merge a Nuke',
    'Merge a Nuke codes',
    'Merge a Nuke Roblox',
    'Merge a Nuke upgrades',
    'Merge a Nuke tier list',
    'Merge a Nuke beginner guide',
    'Merge a Nuke raid guide',
    'Merge a Nuke offline cash',
    'Merge a Nuke how to merge',
    'Spawn Tier Merge a Nuke',
    'ATOMIC code',
    'UPDATE2 code',
    'BOOM code',
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      {
        url: '/icon-light-32x32.png',
        sizes: '32x32',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        sizes: '32x32',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#2a3358',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        {children}
        <PlausibleAnalytics />
        <DeferredSecondaryAnalytics />
      </body>
    </html>
  )
}
