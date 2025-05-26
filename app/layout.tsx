import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'IQ Test Pro',
  description: 'Try your inelegance',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
