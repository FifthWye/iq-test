"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Brain, Trophy, RotateCcw, Home, Calendar, Clock, Target } from "lucide-react"
import Link from "next/link"
import ScamReports from "./scam-reports"

interface FirstTryData {
  iq: number
  correctAnswers: number
  percentage: number
  timeElapsed: number
  completedAt: string
  totalQuestions: number
}

export default function FirstTryResults() {
  const [firstTryData, setFirstTryData] = useState<FirstTryData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Get first try data from localStorage
    const savedData = localStorage.getItem("iqTestFirstTry")
    if (savedData) {
      try {
        const parsedData = JSON.parse(savedData)
        setFirstTryData(parsedData)
      } catch (error) {
        console.error("Error parsing first try data:", error)
      }
    }
    setLoading(false)
  }, [])

  const getIQInterpretation = (iq: number) => {
    if (iq >= 140) return "Genius or near genius"
    if (iq >= 120) return "Very superior intelligence"
    if (iq >= 110) return "Superior intelligence"
    if (iq >= 90) return "Normal or average intelligence"
    if (iq >= 80) return "Dullness"
    return "Borderline deficiency"
  }

  const clearFirstTryData = () => {
    localStorage.removeItem("iqTestFirstTry")
    setFirstTryData(null)
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="text-center">
          <Brain className="h-16 w-16 text-blue-600 mx-auto mb-4 animate-pulse" />
          <p className="text-xl text-gray-600">Loading your first try results...</p>
        </div>
      </div>
    )
  }

  if (!firstTryData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4">
        <div className="max-w-2xl mx-auto">
          <Card className="shadow-xl">
            <CardHeader className="text-center bg-gradient-to-r from-gray-600 to-gray-700 text-white rounded-t-lg">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Brain className="h-8 w-8" />
                <CardTitle className="text-2xl">No First Try Found</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="p-8 text-center">
              <div className="mb-6">
                <div className="text-6xl mb-4">🤔</div>
                <div className="text-xl text-gray-700 mb-4">
                  You haven't taken your first IQ test yet, or your results weren't saved.
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
                <p className="text-blue-700">
                  Take the IQ test to see your results saved here! Your first attempt will be automatically saved so you
                  can always come back and see how you did.
                </p>
              </div>

              <div className="space-y-4">
                <Link href="/">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    <Brain className="h-5 w-5 mr-2" />
                    Take Your First IQ Test
                  </Button>
                </Link>

                <Link href="/realHomePage">
                  <Button variant="outline" className="w-full">
                    <Home className="h-5 w-5 mr-2" />
                    Learn About IQ Tests
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  const completedDate = new Date(firstTryData.completedAt)

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-100 p-4">
      <div className="max-w-2xl mx-auto">
        <Card className="shadow-xl">
          <CardHeader className="text-center bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-t-lg">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Trophy className="h-8 w-8" />
              <CardTitle className="text-2xl">Your First Try Results</CardTitle>
            </div>
            <p className="text-purple-100">Here's how you did on your first attempt!</p>
          </CardHeader>
          <CardContent className="p-8 text-center">
            <div className="mb-8">
              <div className="text-6xl font-bold text-purple-600 mb-2">{firstTryData.iq}</div>
              <div className="text-xl text-gray-600 mb-4">Your IQ Score</div>
              <div className="text-lg font-medium text-gray-800 mb-6">{getIQInterpretation(firstTryData.iq)}</div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="bg-green-50 p-4 rounded-lg">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Target className="h-5 w-5 text-green-600" />
                  <div className="text-lg font-bold text-green-600">
                    {firstTryData.correctAnswers}/{firstTryData.totalQuestions}
                  </div>
                </div>
                <div className="text-sm text-gray-600">Correct Answers</div>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Clock className="h-5 w-5 text-blue-600" />
                  <div className="text-lg font-bold text-blue-600">{firstTryData.timeElapsed}m</div>
                </div>
                <div className="text-sm text-gray-600">Time Taken</div>
              </div>
            </div>

            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 mb-6">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Calendar className="h-5 w-5 text-purple-600" />
                <div className="text-sm font-medium text-purple-800">Test Completed</div>
              </div>
              <div className="text-sm text-purple-700">
                {completedDate.toLocaleDateString("en-US", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-8">
              <p className="text-yellow-800 text-sm">
                <strong>Remember:</strong> This was just a demonstration! Real IQ tests are administered by qualified
                professionals and take much longer to complete accurately.
              </p>
            </div>

            {/* Scam Reports Section */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-red-700 mb-4">Learn About Real IQ Test Scams</h3>
              <ScamReports />
            </div>

            <div className="space-y-4">
              <Link href="/">
                <Button className="w-full bg-purple-600 hover:bg-purple-700">
                  <RotateCcw className="h-5 w-5 mr-2" />
                  Take Test Again
                </Button>
              </Link>

              <div className="flex gap-4">
                <Link href="/realHomePage" className="flex-1">
                  <Button variant="outline" className="w-full">
                    <Home className="h-5 w-5 mr-2" />
                    Learn More
                  </Button>
                </Link>

                <Button
                  variant="outline"
                  onClick={clearFirstTryData}
                  className="flex-1 text-red-600 border-red-300 hover:bg-red-50"
                >
                  Clear Data
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
