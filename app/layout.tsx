import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono, Manrope } from 'next/font/google'
import './globals.css'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { ScrollReveal } from '@/components/scroll-reveal'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})
const manrope = Manrope({
  variable: '--font-heading',
  subsets: ['latin'],
  weight: ['600', '700', '800'],
})

export const metadata: Metadata = {
  title: 'Peyote Knitwear | Complete Babieswear Manufacturing',
  description:
    'GOTS Certified & SEDEX Approved babieswear and socks manufacturer in Tiruppur, India. 100,000 pieces/month for global buyers and private-label brands.',
  generator: 'v0.app',
}

export const viewport: Viewport = {
  themeColor: '#1e4fa3',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${manrope.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        <ScrollReveal />
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
