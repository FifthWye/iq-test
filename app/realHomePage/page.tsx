import type { Metadata } from "next"
import RealHomePage from "../../components/real-home-page"

export const metadata: Metadata = {
  title: "The Truth About Online IQ Tests",
  description:
    "This educational demonstration exposes deceptive online IQ test scams, shares real victim stories, and explains how to recognize legitimate intelligence testing.",
  openGraph: {
    title: "The Truth About Online IQ Tests",
    description:
      "An educational project highlighting deceptive online IQ test scams, with real user stories and guidance on identifying credible testing options.",
    url: "https://iq-test.live/realHomePage",
    type: 'website'
  },
  twitter: {
    title: "The Truth About Online IQ Tests",
    description:
      "Exposing scams disguised as IQ tests—learn how to protect yourself and understand what real intelligence assessment involves.",
  },
}

export default function Page() {
  return <RealHomePage />
}
