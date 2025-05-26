"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Brain, Clock, CheckCircle, CreditCard, Smartphone, DollarSign, Laugh } from "lucide-react"

interface Question {
  id: number
  question: string
  options: string[]
  correct: number
  type: string
}

const questions: Question[] = [
  {
    id: 1,
    question: "What comes next in the sequence: 2, 4, 8, 16, ?",
    options: ["24", "32", "30", "28"],
    correct: 1,
    type: "Mathematical Sequence",
  },
  {
    id: 2,
    question: "If all Bloops are Razzles and all Razzles are Lazzles, then all Bloops are definitely:",
    options: ["Lazzles", "Not Lazzles", "Sometimes Lazzles", "Cannot be determined"],
    correct: 0,
    type: "Logical Reasoning",
  },
  {
    id: 3,
    question: "Which number should replace the question mark: 3, 7, 15, 31, ?",
    options: ["47", "63", "55", "71"],
    correct: 1,
    type: "Mathematical Sequence",
  },
  {
    id: 4,
    question: "Book is to Reading as Fork is to:",
    options: ["Eating", "Kitchen", "Spoon", "Food"],
    correct: 0,
    type: "Analogies",
  },
  {
    id: 5,
    question: "What comes next: ○ ◐ ● ◑ ?",
    options: ["○", "◐", "●", "◑"],
    correct: 0,
    type: "Pattern Recognition",
  },
  {
    id: 6,
    question: "If you rearrange the letters 'CIFAIPC', you would have the name of a:",
    options: ["City", "Animal", "Ocean", "Country"],
    correct: 2,
    type: "Verbal Reasoning",
  },
  {
    id: 7,
    question: "What is the missing number: 1, 1, 2, 3, 5, 8, ?",
    options: ["11", "13", "15", "10"],
    correct: 1,
    type: "Mathematical Sequence",
  },
  {
    id: 8,
    question: "Which word does NOT belong: Dog, Cat, Bird, Car",
    options: ["Dog", "Cat", "Bird", "Car"],
    correct: 3,
    type: "Classification",
  },
  {
    id: 9,
    question:
      "If 5 machines make 5 widgets in 5 minutes, how many minutes would it take 100 machines to make 100 widgets?",
    options: ["100", "20", "5", "1"],
    correct: 2,
    type: "Logical Reasoning",
  },
  {
    id: 10,
    question: "What comes next: A1, B4, C9, D16, ?",
    options: ["E25", "E20", "F25", "E24"],
    correct: 0,
    type: "Pattern Recognition",
  },
  {
    id: 11,
    question: "Mirror is to Reflection as Echo is to:",
    options: ["Sound", "Voice", "Repetition", "Noise"],
    correct: 0,
    type: "Analogies",
  },
  {
    id: 12,
    question: "What number comes next: 100, 96, 88, 72, ?",
    options: ["40", "48", "56", "64"],
    correct: 0,
    type: "Mathematical Sequence",
  },
  {
    id: 13,
    question: "Which figure completes the pattern: △ ▲ ○ ● □ ?",
    options: ["■", "◇", "☆", "▽"],
    correct: 0,
    type: "Pattern Recognition",
  },
  {
    id: 14,
    question: "If some Smurfs are blue and all blue things are cold, then:",
    options: ["All Smurfs are cold", "Some Smurfs are cold", "No Smurfs are cold", "Cannot be determined"],
    correct: 1,
    type: "Logical Reasoning",
  },
  {
    id: 15,
    question: "What is the next letter in this sequence: A, D, G, J, ?",
    options: ["K", "L", "M", "N"],
    correct: 2,
    type: "Pattern Recognition",
  },
  {
    id: 16,
    question: "Clock is to Time as Thermometer is to:",
    options: ["Heat", "Temperature", "Weather", "Measurement"],
    correct: 1,
    type: "Analogies",
  },
  {
    id: 17,
    question:
      "If you have 12 balls and one is heavier, what's the minimum number of weighings needed to find it using a balance scale?",
    options: ["2", "3", "4", "5"],
    correct: 1,
    type: "Logical Reasoning",
  },
  {
    id: 18,
    question: "What comes next: 1, 4, 9, 16, 25, ?",
    options: ["30", "35", "36", "49"],
    correct: 2,
    type: "Mathematical Sequence",
  },
  {
    id: 19,
    question: "Which word can be made from these letters: TNESIL",
    options: ["LISTEN", "SILENT", "ENLIST", "All of the above"],
    correct: 3,
    type: "Verbal Reasoning",
  },
  {
    id: 20,
    question: "If all roses are flowers and some flowers fade quickly, then:",
    options: ["All roses fade quickly", "Some roses fade quickly", "No roses fade quickly", "Cannot be determined"],
    correct: 3,
    type: "Logical Reasoning",
  },
]

const funnyGifs = [
  "https://media.giphy.com/media/3o7btPCcdNniyf0ArS/giphy.gif",
  "https://media.giphy.com/media/26ufdipQqU2lhNA4g/giphy.gif",
  "https://media.giphy.com/media/l3q2K5jinAlChoCLS/giphy.gif",
  "https://media.giphy.com/media/xT9IgHCTfp8CRshfQk/giphy.gif",
  "https://media.giphy.com/media/26n6Gx9moCgs1pUuk/giphy.gif",
]

const funnyTexts = [
  "If you were ready to pay for this IQ test, you might want to retake it... for free! 😂",
  "Congratulations! You just failed the first IQ question: 'Should I pay for a free online test?' 🤦‍♂️",
  "Plot twist: The real IQ test was whether you'd pay for it. You didn't pass! 😅",
  "Good news: The test is free! Bad news: You were about to pay for it... 🙃",
  "Your IQ score for trying to pay: 404 - Intelligence not found! 😜",
]

export default function Component() {
  const [screen, setScreen] = useState<"payment" | "gotcha" | "test" | "results">("test")
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>(new Array(20).fill(-1))
  const [timeStarted, setTimeStarted] = useState<number>(0)
  const [randomGif] = useState(funnyGifs[Math.floor(Math.random() * funnyGifs.length)])
  const [randomText] = useState(funnyTexts[Math.floor(Math.random() * funnyTexts.length)])

  const handlePaymentAttempt = () => {
    setScreen("gotcha")
  }

  const startFreeTest = () => {
    setTimeStarted(Date.now())
    setScreen("test")
  }

  const handleAnswerSelect = (answerIndex: number) => {
    const newAnswers = [...selectedAnswers]
    newAnswers[currentQuestion] = answerIndex
    setSelectedAnswers(newAnswers)
  }

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setScreen("payment")
    }
  }

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  const calculateIQ = () => {
    const correctAnswers = selectedAnswers.reduce((count, answer, index) => {
      return answer === questions[index].correct ? count + 1 : count
    }, 0)

    const percentage = (correctAnswers / questions.length) * 100

    let iq = 100
    if (percentage >= 95) iq = 145
    else if (percentage >= 90) iq = 130
    else if (percentage >= 85) iq = 120
    else if (percentage >= 75) iq = 115
    else if (percentage >= 65) iq = 110
    else if (percentage >= 55) iq = 105
    else if (percentage >= 45) iq = 100
    else if (percentage >= 35) iq = 95
    else if (percentage >= 25) iq = 90
    else if (percentage >= 15) iq = 85
    else if (percentage >= 10) iq = 80
    else iq = 75

    return { iq, correctAnswers, percentage }
  }

  const getIQInterpretation = (iq: number) => {
    if (iq >= 140) return "Genius or near genius"
    if (iq >= 120) return "Very superior intelligence"
    if (iq >= 110) return "Superior intelligence"
    if (iq >= 90) return "Normal or average intelligence"
    if (iq >= 80) return "Dullness"
    return "Borderline deficiency"
  }

  // Payment Screen
  if (screen === "payment") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
        <div className="max-w-md mx-auto">
          <Card className="shadow-xl">
            <CardHeader className="text-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-t-lg">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Brain className="h-8 w-8" />
                <CardTitle className="text-2xl">Unlock Your Results!</CardTitle>
              </div>
              <p className="text-blue-100">Pay to see how well you did!</p>
            </CardHeader>
            <CardContent className="p-6">
              <div className="text-center mb-6">
                <div className="text-3xl font-bold text-green-600 mb-2">$29.99</div>
                <p className="text-gray-600">Unlock your cognitive potential</p>
                <div className="mt-4 space-y-2 text-sm text-gray-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Detailed cognitive analysis</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Professional IQ certificate</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <Label htmlFor="cardNumber">Card Number</Label>
                  <Input id="cardNumber" placeholder="1234 5678 9012 3456" className="mt-1" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="expiry">Expiry Date</Label>
                    <Input id="expiry" placeholder="MM/YY" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="cvv">CVV</Label>
                    <Input id="cvv" placeholder="123" className="mt-1" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="name">Cardholder Name</Label>
                  <Input id="name" placeholder="John Doe" className="mt-1" />
                </div>

                <Button onClick={handlePaymentAttempt} className="w-full bg-green-600 hover:bg-green-700">
                  <CreditCard className="h-4 w-4 mr-2" />
                  Pay $29.99
                </Button>

                <div className="text-center text-gray-500 text-sm">or pay with</div>

                <div className="grid grid-cols-3 gap-2">
                  <Button variant="outline" onClick={handlePaymentAttempt} className="flex items-center justify-center">
                    <DollarSign className="h-4 w-4" />
                    <span className="ml-1 text-xs">PayPal</span>
                  </Button>
                  <Button variant="outline" onClick={handlePaymentAttempt} className="flex items-center justify-center">
                    <Smartphone className="h-4 w-4" />
                    <span className="ml-1 text-xs">Google</span>
                  </Button>
                  <Button variant="outline" onClick={handlePaymentAttempt} className="flex items-center justify-center">
                    <Smartphone className="h-4 w-4" />
                    <span className="ml-1 text-xs">Apple</span>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  // Gotcha Screen
  if (screen === "gotcha") {
    const { iq, correctAnswers, percentage } = calculateIQ()
    const timeElapsed = Math.floor((Date.now() - timeStarted) / 1000 / 60)

    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-100 p-4">
        <div className="max-w-2xl mx-auto">
          <Card className="shadow-xl">
            <CardHeader className="text-center bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-t-lg">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Laugh className="h-8 w-8" />
                <CardTitle className="text-2xl">Gotcha! 😂</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="p-8 text-center">
              <div className="mb-6">
                <img
                  src={randomGif || "/placeholder.svg"}
                  alt="Funny reaction GIF"
                  className="w-64 h-48 mx-auto rounded-lg object-cover"
                />
              </div>

              <div className="text-xl font-semibold text-gray-800 mb-6">{randomText}</div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
                <p className="text-gray-700">
                  <strong>Pro tip:</strong> Real IQ tests don't require payment on random websites. This was your first
                  intelligence test - and it was free! 🎉
                </p>
              </div>

              <div className="mb-8">
                <div className="text-3xl font-bold text-blue-600 mb-2">Anyway, your IQ is probably something like:</div>
                <div className="text-6xl font-bold text-blue-600 mb-2">{iq}</div>
                <div className="text-xl text-gray-600 mb-4">Based on your answers</div>
                <div className="text-lg font-medium text-gray-800 mb-6">{getIQInterpretation(iq)}</div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className="bg-green-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">{correctAnswers}/20</div>
                  <div className="text-sm text-gray-600">Correct Answers</div>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">{percentage.toFixed(1)}%</div>
                  <div className="text-sm text-gray-600">Accuracy</div>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600">{timeElapsed}m</div>
                  <div className="text-sm text-gray-600">Time Taken</div>
                </div>
              </div>

              <Button onClick={() => window.location.reload()} className="bg-blue-600 hover:bg-blue-700">
                Take Test Again
              </Button>

              <p className="text-sm text-gray-500 mt-4">(Yes, it's completely free. We promise this time! 😉)</p>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  // Test Results Screen
  if (screen === "results") {
    const { iq, correctAnswers, percentage } = calculateIQ()
    const timeElapsed = Math.floor((Date.now() - timeStarted) / 1000 / 60)

    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
        <div className="max-w-2xl mx-auto">
          <Card className="shadow-xl">
            <CardHeader className="text-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-t-lg">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Brain className="h-8 w-8" />
                <CardTitle className="text-2xl">IQ Test Results</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="p-8 text-center">
              <div className="mb-8">
                <div className="text-6xl font-bold text-blue-600 mb-2">{iq}</div>
                <div className="text-xl text-gray-600 mb-4">Your IQ Score</div>
                <div className="text-lg font-medium text-gray-800 mb-6">{getIQInterpretation(iq)}</div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className="bg-green-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">{correctAnswers}/20</div>
                  <div className="text-sm text-gray-600">Correct Answers</div>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">{percentage.toFixed(1)}%</div>
                  <div className="text-sm text-gray-600">Accuracy</div>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600">{timeElapsed}m</div>
                  <div className="text-sm text-gray-600">Time Taken</div>
                </div>
              </div>

              <div className="text-sm text-gray-600 mb-6">
                <p className="mb-2">
                  <strong>Note:</strong> This is a simplified IQ assessment for demonstration purposes.
                </p>
                <p>Professional IQ tests are administered under controlled conditions by qualified psychologists.</p>
                <p className="mt-2 text-green-600 font-medium">And remember - it's completely FREE! 🎉</p>
              </div>

              <Button onClick={() => window.location.reload()} className="bg-blue-600 hover:bg-blue-700">
                Take Test Again
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  // Test Screen
  const progress = ((currentQuestion + 1) / questions.length) * 100
  const timeElapsed = Math.floor((Date.now() - timeStarted) / 1000 / 60)
  const currentQ = questions[currentQuestion]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-2xl mx-auto">
        <Card className="shadow-xl">
          <CardHeader className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-t-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Brain className="h-6 w-6" />
                <CardTitle>FREE IQ Test</CardTitle>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Clock className="h-4 w-4" />
                <span>{timeElapsed}m</span>
              </div>
            </div>
            <div className="mt-4">
              <div className="flex justify-between text-sm mb-2">
                <span>
                  Question {currentQuestion + 1} of {questions.length}
                </span>
                <span>{Math.round(progress)}% Complete</span>
              </div>
              <Progress value={progress} className="bg-blue-200" />
            </div>
          </CardHeader>

          <CardContent className="p-6">
            <div className="mb-4">
              <div className="text-sm text-blue-600 font-medium mb-2">{currentQ.type}</div>
              <h2 className="text-xl font-semibold mb-6">{currentQ.question}</h2>
            </div>

            <RadioGroup
              value={selectedAnswers[currentQuestion]?.toString() || ""}
              onValueChange={(value) => handleAnswerSelect(Number.parseInt(value))}
              className="space-y-3"
            >
              {currentQ.options.map((option, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <RadioGroupItem value={index.toString()} id={`option-${index}`} />
                  <Label
                    htmlFor={`option-${index}`}
                    className="flex-1 cursor-pointer p-3 rounded-lg border hover:bg-gray-50 transition-colors"
                  >
                    {option}
                  </Label>
                </div>
              ))}
            </RadioGroup>

            <div className="flex justify-between mt-8">
              <Button variant="outline" onClick={prevQuestion} disabled={currentQuestion === 0}>
                Previous
              </Button>

              <Button
                onClick={nextQuestion}
                disabled={selectedAnswers[currentQuestion] === -1}
                className="bg-blue-600 hover:bg-blue-700"
              >
                {currentQuestion === questions.length - 1 ? (
                  <>
                    <CheckCircle className="h-4 w-4 mr-2" />
                    Finish Test
                  </>
                ) : (
                  "Next Question"
                )}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
