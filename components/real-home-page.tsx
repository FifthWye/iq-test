"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Brain, AlertTriangle, Shield, BookOpen, Home } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import ScamReports from "./scam-reports"

// Mapping IQ scores to random keys
const IQ_KEY_MAP: { [key: number]: string } = {
  75: "xk9",
  85: "m2p",
  145: "r7w",
  160: "q4z",
  180: "n8v",
  200: "b5j",
}

// Reverse mapping for decoding
const KEY_IQ_MAP: { [key: string]: number } = {
  xk9: 75,
  m2p: 85,
  r7w: 145,
  q4z: 160,
  n8v: 180,
  b5j: 200,
}

// Simple encoding/decoding functions
const encodeName = (name: string): string => {
  return btoa(name).replace(/[+=]/g, "").substring(0, 8)
}

const decodeName = (encoded: string): string => {
  try {
    // Add padding if needed
    const padded = encoded + "==".substring(0, (4 - (encoded.length % 4)) % 4)
    return atob(padded)
  } catch {
    return "Someone"
  }
}

export default function RealHomePage() {
  const [selectedFakeIQ, setSelectedFakeIQ] = useState(160)
  const [fakeName, setFakeName] = useState("")
  const [shareURL, setShareURL] = useState("")
  const [copied, setCopied] = useState(false)

  const generateShareURL = () => {
    const baseURL = window.location.origin
    const name = fakeName || "Someone"
    const iqScore = selectedFakeIQ

    // Get the random key for this IQ score
    const iqKey = IQ_KEY_MAP[iqScore]
    // Encode the name
    const encodedName = encodeName(name)

    const url = `${baseURL}?t=${iqKey}&h=${encodedName}`

    setShareURL(url)
  }

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(shareURL)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy: ", err)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-100">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Shield className="h-16 w-16 text-green-600" />
              <h1 className="text-5xl font-bold text-gray-900">The Truth About Online IQ Tests</h1>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              This website is an educational project designed to expose the deceptive practices of online IQ testing
              scams and educate people about real intelligence assessment.
            </p>
          </div>

          {/* Warning Section */}
          <Card className="mb-8 border-orange-200 bg-orange-50">
            <CardHeader>
              <div className="flex items-center gap-3">
                <AlertTriangle className="h-8 w-8 text-orange-600" />
                <CardTitle className="text-2xl text-orange-800">Important: This Was a Demonstration</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-orange-700 text-lg">
                If you just tried to pay for an IQ test result, you've experienced firsthand how these scams work. This
                entire website is a parody designed to educate you about online testing fraud.
              </p>
            </CardContent>
          </Card>

          {/* Scam Reports Section */}
          <div className="mb-12">
            <ScamReports />
          </div>

          {/* Main Content */}
          <div className="grid md:grid-cols-1 gap-8 mb-12">
            <Card className="shadow-lg">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Brain className="h-8 w-8 text-blue-600" />
                  <CardTitle className="text-2xl">The Reality About IQ Testing</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-green-700">✅ What Real IQ Tests Are:</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">•</span>
                      <span>
                        <strong>Administered by qualified psychologists</strong> in controlled environments
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">•</span>
                      <span>
                        <strong>Standardized tests</strong> like WAIS-IV, Stanford-Binet, or Raven's Progressive
                        Matrices
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">•</span>
                      <span>
                        <strong>Take 1-3 hours</strong> to complete properly
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">•</span>
                      <span>
                        <strong>Cost varies</strong> but legitimate testing is available through schools, healthcare, or
                        research
                      </span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3 text-red-700">❌ What Online IQ Scams Do:</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 mt-1">•</span>
                      <span>
                        <strong>Promise "professional results"</strong> from 20-minute online tests
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 mt-1">•</span>
                      <span>
                        <strong>Use fake certifications</strong> and made-up organizations
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 mt-1">•</span>
                      <span>
                        <strong>Charge money</strong> for results or "detailed analysis"
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 mt-1">•</span>
                      <span>
                        <strong>Create fake urgency</strong> with limited-time offers
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 mt-1">•</span>
                      <span>
                        <strong>Show fake testimonials</strong> and inflated statistics
                      </span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <BookOpen className="h-8 w-8 text-purple-600" />
                  <CardTitle className="text-2xl">The Truth About Intelligence</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">IQ is just one measure</h4>
                  <p className="text-blue-700">
                    Intelligence is multifaceted. IQ tests measure specific cognitive abilities but don't capture
                    creativity, emotional intelligence, practical skills, or many other forms of intelligence.
                  </p>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">Intelligence can be developed</h4>
                  <p className="text-green-700">
                    Unlike what many believe, cognitive abilities can be improved through learning, practice, and new
                    experiences. Your potential isn't fixed by a single test score.
                  </p>
                </div>

                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-800 mb-2">Context matters</h4>
                  <p className="text-purple-700">
                    Test performance can be affected by stress, fatigue, cultural background, education, and many other
                    factors. A single online test tells you very little.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-green-200 bg-green-50">
              <CardHeader>
                <CardTitle className="text-2xl text-green-800">How to Protect Yourself</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-green-700">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">🛡️</span>
                    <span>
                      <strong>Never pay</strong> for online IQ test results
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">🔍</span>
                    <span>
                      <strong>Research organizations</strong> before trusting their "certifications"
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">⏰</span>
                    <span>
                      <strong>Be skeptical</strong> of tests that take less than an hour
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">🎓</span>
                    <span>
                      <strong>Consult professionals</strong> if you need legitimate cognitive assessment
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">💡</span>
                    <span>
                      <strong>Remember</strong> that intelligence is complex and can't be reduced to a single number
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-blue-200 bg-blue-50">
              <CardHeader>
                <CardTitle className="text-2xl text-blue-800">Prank Your Friends (Educational Purpose)</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-blue-700 mb-6">
                  Now that you understand how these scams work, you can educate your friends by giving them the same
                  experience! Generate a fake IQ result to share and see if they fall for the payment trick.
                </p>

                <div className="space-y-4">
                  <div>
                    <Label htmlFor="fakeIQ" className="text-blue-800 font-medium">
                      Choose a fake IQ score:
                    </Label>
                    <select
                      id="fakeIQ"
                      value={selectedFakeIQ}
                      onChange={(e) => setSelectedFakeIQ(Number(e.target.value))}
                      className="w-full mt-1 p-2 border border-blue-300 rounded-md bg-white"
                    >
                      <option value={160}>160 - "I'm as smart as Einstein!" 🧠</option>
                      <option value={180}>180 - "I'm a certified genius!" 🎓</option>
                      <option value={145}>145 - "I'm in the top 0.1%!" ⭐</option>
                      <option value={200}>200 - "I broke the IQ scale!" 🚀</option>
                      <option value={85}>85 - "Maybe I should retake this..." 😅</option>
                      <option value={75}>75 - "The test must be broken..." 🤔</option>
                    </select>
                  </div>

                  <div>
                    <Label htmlFor="fakeName" className="text-blue-800 font-medium">
                      Your name (optional):
                    </Label>
                    <Input
                      id="fakeName"
                      value={fakeName}
                      onChange={(e) => setFakeName(e.target.value)}
                      placeholder="Enter your name"
                      className="mt-1 border-blue-300"
                    />
                  </div>

                  <Button onClick={generateShareURL} className="w-full bg-blue-600 hover:bg-blue-700">
                    Generate Prank Link
                  </Button>

                  {shareURL && (
                    <div className="mt-4 p-4 bg-white border border-blue-300 rounded-lg">
                      <p className="text-blue-800 font-medium mb-2">Share this link with your friends:</p>
                      <div className="flex gap-2">
                        <Input value={shareURL} readOnly className="flex-1 text-sm" />
                        <Button onClick={copyToClipboard} variant="outline" className="border-blue-300 bg-transparent">
                          {copied ? "Copied!" : "Copy"}
                        </Button>
                      </div>
                      <p className="text-sm text-blue-600 mt-2">
                        When they click this link, they'll see your fake result and be tempted to take the test
                        themselves!
                      </p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Footer */}
          <div className="text-center">
            <p className="text-gray-600 mb-6">
              This educational project was created to raise awareness about online scams and promote critical thinking
              about intelligence testing.
            </p>
            <Link href="/">
              <Button className="bg-blue-600 hover:bg-blue-700">
                <Home className="h-5 w-5 mr-2" />
                Back to Demo
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
