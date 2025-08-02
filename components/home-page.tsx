"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Brain, Star, Award, Users, TrendingUp, Shield, CheckCircle } from "lucide-react"
import Link from "next/link"
import IQTest from "./iq-test"

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

const fakeReviews = [
  {
    name: "Sarah M.",
    rating: 5,
    text: "Amazing accuracy! Got my results and they matched my professional assessment perfectly. Worth every penny!",
    location: "New York, USA",
  },
  {
    name: "Dr. James Wilson",
    rating: 5,
    text: "As a psychologist, I'm impressed by the scientific rigor of this test. Highly recommend to my patients.",
    location: "London, UK",
  },
  {
    name: "Maria Rodriguez",
    rating: 5,
    text: "Finally found a reliable online IQ test! The detailed analysis helped me understand my cognitive strengths.",
    location: "Madrid, Spain",
  },
  {
    name: "Alex Chen",
    rating: 5,
    text: "Used this for my job application. The certificate was accepted by HR without any questions!",
    location: "Singapore",
  },
  {
    name: "Emma Thompson",
    rating: 5,
    text: "Quick, professional, and accurate. Much better than other online tests I've tried.",
    location: "Toronto, Canada",
  },
]

const fakeCertifications = [
  {
    name: "International Cognitive Assessment Institute",
    logo: "🧠",
    description: "Certified Testing Platform",
  },
  {
    name: "Global Psychology Standards Board",
    logo: "🏆",
    description: "Approved Methodology",
  },
  {
    name: "World Intelligence Research Foundation",
    logo: "🌍",
    description: "Scientific Validation",
  },
  {
    name: "European Testing Compliance Authority",
    logo: "✅",
    description: "Quality Assured",
  },
]

export default function HomePage() {
  const [showTest, setShowTest] = useState(false)
  const [sharedResult, setSharedResult] = useState<{ iq: number; name: string; message: string } | null>(null)

  // Check for shared IQ result in URL
  useEffect(() => {
    if (typeof window !== "undefined") {
      const urlParams = new URLSearchParams(window.location.search)

      // NEW FORMAT: Check for encoded parameters first
      const testKey = urlParams.get("t") // random key for IQ score
      const hashKey = urlParams.get("h") // encoded name

      if (testKey && hashKey) {
        // Decode the IQ score from the random key
        const iqScore = KEY_IQ_MAP[testKey]
        // Decode the name
        const decodedName = decodeName(hashKey)

        if (iqScore) {
          let message = ""
          if (iqScore >= 160) {
            message = `${decodedName} just scored ${iqScore} on an IQ test! That's Einstein level! 🧠✨`
          } else if (iqScore >= 140) {
            message = `${decodedName} is officially a genius with an IQ of ${iqScore}! 🎓⭐`
          } else if (iqScore >= 120) {
            message = `${decodedName} scored ${iqScore} - that's in the top 10%! 🚀`
          } else {
            message = `${decodedName} got ${iqScore}... maybe the test was broken? 😅`
          }

          setSharedResult({
            iq: iqScore,
            name: decodedName,
            message: message,
          })
          return // Exit early if new format is found
        }
      }

      // OLD FORMAT: Fallback to previous URL parameters for backward compatibility
      const score = urlParams.get("s") // old obscure parameter for score
      const user = urlParams.get("u") // old obscure parameter for user

      if (score && user) {
        // Regenerate the message from the old data
        const decodedName = decodeURIComponent(user)
        const iqScore = Number(score)

        let message = ""
        if (iqScore >= 160) {
          message = `${decodedName} just scored ${iqScore} on an IQ test! That's Einstein level! 🧠✨`
        } else if (iqScore >= 140) {
          message = `${decodedName} is officially a genius with an IQ of ${iqScore}! 🎓⭐`
        } else if (iqScore >= 120) {
          message = `${decodedName} scored ${iqScore} - that's in the top 10%! 🚀`
        } else {
          message = `${decodedName} got ${iqScore}... maybe the test was broken? 😅`
        }

        setSharedResult({
          iq: iqScore,
          name: decodedName,
          message: message,
        })
      }
    }
  }, [])

  if (showTest) {
    return <IQTest />
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-12">
        {/* Shared Result Banner */}
        {sharedResult && (
          <div className="mb-8">
            <Card className="border-green-200 bg-green-50 shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <Brain className="h-8 w-8 text-green-600" />
                  <h2 className="text-2xl font-bold text-green-800">Amazing IQ Result Shared!</h2>
                </div>
                <p className="text-lg text-green-700 mb-4">{sharedResult.message}</p>
                <div className="text-4xl font-bold text-green-600 mb-2">{sharedResult.iq}</div>
                <p className="text-green-600 mb-4">Think you can beat this score? Take the test yourself!</p>
                <Button
                  onClick={() => setShowTest(true)}
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-3"
                >
                  Challenge Yourself - Take the Test!
                </Button>
              </CardContent>
            </Card>
          </div>
        )}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Brain className="h-16 w-16 text-blue-600" />
            <h1 className="text-5xl font-bold text-gray-900">IQ Test Pro</h1>
          </div>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            The most accurate and scientifically validated IQ test available online. Trusted by professionals worldwide
            with over 2.5 million tests completed.
          </p>

          <div className="flex items-center justify-center gap-6 mb-8">
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-blue-600" />
              <span className="text-sm font-medium">2.5M+ Tests Taken</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-green-600" />
              <span className="text-sm font-medium">98.7% Accuracy Rate</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-purple-600" />
              <span className="text-sm font-medium">Certified Secure</span>
            </div>
          </div>

          <Button
            onClick={() => setShowTest(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white text-xl px-12 py-6 rounded-lg shadow-lg transform hover:scale-105 transition-all"
          >
            <Brain className="h-6 w-6 mr-3" />
            Start Your IQ Test Now
          </Button>

          <p className="text-sm text-gray-500 mt-4">
            ⏱️ Takes only 15-20 minutes • 🎯 20 scientifically designed questions
          </p>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="text-center shadow-lg">
            <CardHeader>
              <Award className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
              <CardTitle>Professional Grade</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Developed by certified psychologists using the latest cognitive science research.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center shadow-lg">
            <CardHeader>
              <TrendingUp className="h-12 w-12 text-green-500 mx-auto mb-4" />
              <CardTitle>Instant Results</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Get your detailed IQ score and cognitive analysis immediately after completion.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center shadow-lg">
            <CardHeader>
              <Shield className="h-12 w-12 text-blue-500 mx-auto mb-4" />
              <CardTitle>Secure & Private</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Your data is encrypted and protected. We never share your personal information.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Certifications */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Certified & Validated</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {fakeCertifications.map((cert, index) => (
              <Card key={index} className="text-center p-6 shadow-lg">
                <div className="text-4xl mb-3">{cert.logo}</div>
                <h3 className="font-semibold text-sm mb-2">{cert.name}</h3>
                <Badge variant="secondary" className="text-xs">
                  {cert.description}
                </Badge>
              </Card>
            ))}
          </div>
        </div>

        {/* Reviews */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">What Our Users Say</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {fakeReviews.map((review, index) => (
              <Card key={index} className="shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center mb-3">
                    <div className="flex text-yellow-400">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                    <span className="ml-2 text-sm text-gray-600">{review.rating}.0</span>
                  </div>
                  <p className="text-gray-700 mb-4">"{review.text}"</p>
                  <div className="text-sm">
                    <div className="font-semibold">{review.name}</div>
                    <div className="text-gray-500">{review.location}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Trusted Worldwide</h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">2.5M+</div>
              <div className="text-gray-600">Tests Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">98.7%</div>
              <div className="text-gray-600">Accuracy Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">150+</div>
              <div className="text-gray-600">Countries</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-600 mb-2">4.9/5</div>
              <div className="text-gray-600">User Rating</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Discover Your IQ?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Join millions of people who have already discovered their cognitive potential.
          </p>
          <Button
            onClick={() => setShowTest(true)}
            className="bg-green-600 hover:bg-green-700 text-white text-xl px-12 py-6 rounded-lg shadow-lg transform hover:scale-105 transition-all"
          >
            <CheckCircle className="h-6 w-6 mr-3" />
            Start Your IQ Test Now
          </Button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400 mb-4">© 2024 IQ Test Pro. All rights reserved.</p>
          <Link href="/realHomePage" className="text-gray-500 hover:text-gray-300 text-sm underline">
            Rules and policies
          </Link>
        </div>
      </footer>
    </div>
  )
}
