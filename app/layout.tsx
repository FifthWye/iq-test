import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Free IQ Test - Discover Your Intelligence Score",
  description:
    "Take our free, scientifically designed IQ test and discover your cognitive abilities. Get instant results with detailed analysis.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-LCXNR1DPG8"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-LCXNR1DPG8');
            `,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
