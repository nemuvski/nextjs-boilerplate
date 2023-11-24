import type { Metadata, Viewport } from 'next'
import type { FC, PropsWithChildren } from 'react'

/**
 * @see https://nextjs.org/docs/app/api-reference/functions/generate-metadata
 */
export const metadata: Metadata = {
  title: { absolute: 'Next App', template: '%s | Next App' },
  description: 'Next App',
  generator: null,
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },
  robots: { index: false, follow: false },
  icons: [{ rel: 'icon', type: 'image/svg+xml', url: '/favicon.svg' }],
}

/**
 * @see https://nextjs.org/docs/app/api-reference/functions/generate-viewport
 */
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html dir='ltr'>
      <head>
        <meta name='ui-version' content={process.env.APP_VERSION} />
      </head>

      <body>{children}</body>
    </html>
  )
}

export default RootLayout
