import type React from "react"
import type { Metadata } from "next"
import GoogleAnalytics from "../components/google-analytics"
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
      <body><GoogleAnalytics />{children}</body>
    </html>
  )
}
