import type { Metadata } from 'next'
import './globals.css'
import { Providers } from './GlobalRedux/provider'

export const metadata: Metadata = {
  title: 'Empire Shield',
  description: 'By Mirza Hajric',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
        {children}
        </Providers>
      </body>
    </html>
  )
}
