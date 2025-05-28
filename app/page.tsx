import type { Metadata } from "next"
import HomePage from "../components/home-page"

type Props = {
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const params = await searchParams

  // Check if this is a shared result URL
  const isShared = params?.share === "true"
  const iq = params?.iq
  const name = params?.name
  const message = params?.message

  if (isShared && iq && name && message) {
    const decodedName = decodeURIComponent(name as string)
    const iqScore = iq as string

    return {
      title: `${decodedName} scored ${iqScore} on IQ Test! Can you beat this score?`,
      description: `${decodedName} just completed an IQ test and scored ${iqScore}! Think you're smarter? Take the free IQ test and find out your score!`,
      openGraph: {
        title: `${decodedName} scored ${iqScore} on IQ Test!`,
        description: `${decodedName} just completed an IQ test and scored ${iqScore}! Think you're smarter? Take the free IQ test and find out your score!`,
        type: "website",
      },
      twitter: {
        card: "summary_large_image",
        title: `${decodedName} scored ${iqScore} on IQ Test!`,
        description: `${decodedName} just completed an IQ test and scored ${iqScore}! Think you're smarter? Take the free IQ test and find out your score!`,
      },
    }
  }

  // Default metadata for non-shared URLs
  return {
    title: "Free IQ Test - Discover Your Intelligence Score",
    description:
      "Take our free, scientifically designed IQ test and discover your cognitive abilities. Get instant results with detailed analysis.",
    openGraph: {
      title: "Free IQ Test - Discover Your Intelligence Score",
      description:
        "Take our free, scientifically designed IQ test and discover your cognitive abilities. Get instant results with detailed analysis.",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Free IQ Test - Discover Your Intelligence Score",
      description: "Take our free, scientifically designed IQ test and discover your cognitive abilities.",
    },
  }
}

export default function Page() {
  return <HomePage />
}
