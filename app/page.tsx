import type { Metadata } from "next"
import HomePage from "../components/home-page"

type Props = {
  searchParams: { [key: string]: string | string[] | undefined }
}

// Reverse mapping for decoding IQ keys
const KEY_IQ_MAP: { [key: string]: number } = {
  xk9: 75,
  m2p: 85,
  r7w: 145,
  q4z: 160,
  n8v: 180,
  b5j: 200,
}

// Simple decoding function for names
const decodeName = (encoded: string): string => {
  try {
    // Add padding if needed
    const padded = encoded + "==".substring(0, (4 - (encoded.length % 4)) % 4)
    return atob(padded)
  } catch {
    return "Someone"
  }
}

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const params = await searchParams

  let iqScore: number | undefined
  let decodedName: string | undefined

  // NEW FORMAT: Check for encoded parameters first
  const testKey = params?.t // random key for IQ score
  const hashKey = params?.h // encoded name

  if (testKey && hashKey) {
    // Decode the IQ score from the random key
    iqScore = KEY_IQ_MAP[testKey as string]
    // Decode the name
    decodedName = decodeName(hashKey as string)
  } else {
    // OLD FORMAT: Fallback to previous URL parameters for backward compatibility
    const score = params?.s // old obscure parameter for score
    const user = params?.u // old obscure parameter for user

    if (score && user) {
      iqScore = Number(score)
      decodedName = decodeURIComponent(user as string)
    }
  }

  // If we have valid shared result data (from either format)
  if (iqScore && decodedName) {
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
