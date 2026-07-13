import Script from 'next/script'
import type { Metadata } from 'next'
import './globals.css'
const LOGO = '/BlanK.png'
const SITE = 'https://blankbot.vercel.app'
export const metadata: Metadata = {
  title: { default: 'BlanK-AsseT', template: '%s — BlanK-AsseT' },
  description: 'The Discord bot built for serious servers. Powerful moderation, smart automation, and advanced server management — free, always.',
  metadataBase: new URL(SITE),
  openGraph: {
    title: 'BlanK-AsseT — Discord Bot',
    description: 'The Discord bot built for serious servers. Powerful moderation, smart automation, and advanced server management — free, always.',
    url: SITE,
    siteName: 'BlanK-AsseT',
    images: [{ url: LOGO, width: 1080, height: 1080, alt: 'BlanK-AsseT' }],
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'BlanK-AsseT — Discord Bot',
    description: 'The Discord bot built for serious servers.',
    images: [LOGO],
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/BlanK.png', type: 'image/png', sizes: '1080x1080' },
    ],
    shortcut: '/favicon.ico',
    apple: '/BlanK.png',
  },
}
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <Script id="gtm-script" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-598KPWW9');
          `}
        </Script>
      </head>
      <body>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-598KPWW9"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {children}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-REQZCSSBMB"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-REQZCSSBMB');
          `}
        </Script>
      </body>
    </html>
  )
}
