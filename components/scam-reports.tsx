import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertTriangle, ExternalLink } from "lucide-react"
import Link from "next/link"

export default function ScamReports() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-center text-red-700 flex items-center justify-center gap-2">
        <AlertTriangle className="h-6 w-6" />
        Real People, Real Scams
      </h2>

      <p className="text-center text-gray-700 mb-6">
        These are real stories from people who were scammed by fake IQ test websites. Learn from their experiences to
        protect yourself.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Reddit Scam Report */}
        <Card className="border-red-200 shadow-md">
          <CardHeader className="bg-red-50 border-b border-red-200">
            <CardTitle className="text-lg flex items-center gap-2">
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                <path
                  fill="#FF4500"
                  d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"
                />
              </svg>
              Reddit: Scammed by IQInstitute.org
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-4">
            <div className="space-y-3">
              <p className="text-sm text-gray-700">
                <span className="font-semibold">User reports:</span> "I was scammed by IQInstitute.org. They charged me
                $19.99 for an 'IQ certificate' that was completely worthless. When I tried to get a refund, they ignored
                all my messages."
              </p>

              <div className="bg-amber-50 p-3 rounded-md border border-amber-200">
                <p className="text-sm text-amber-800">
                  <span className="font-semibold">Warning signs:</span> Charging for certificates, fake credentials, no
                  contact information, and poor website security.
                </p>
              </div>

              <div className="flex justify-between items-center pt-2">
                <span className="text-xs text-gray-500">Posted 3 months ago</span>
                <Link
                  href="https://www.reddit.com/r/Scams/comments/1hhq2d8/scammed_by_iqinstitute_org_fraudulent_company/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs flex items-center gap-1 text-blue-600 hover:text-blue-800"
                >
                  Read full story
                  <ExternalLink className="h-3 w-3" />
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* PayPal Community Scam Report */}
        <Card className="border-red-200 shadow-md">
          <CardHeader className="bg-red-50 border-b border-red-200">
            <CardTitle className="text-lg flex items-center gap-2">
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                <path
                  fill="#0070BA"
                  d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106zm14.146-14.42a3.35 3.35 0 0 0-.4-.04c-.524-.06-1.167-.06-1.167-.06H14.74c-.524 0-.968.382-1.05.9L12.52 14.15c-.082.518.302.9.826.9h1.91c3.429 0 5.332-1.65 5.332-1.65.82-4.704.82-6.483-.366-6.483z"
                />
              </svg>
              PayPal Community: Brainety IQ Test Scam
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-4">
            <div className="space-y-3">
              <p className="text-sm text-gray-700">
                <span className="font-semibold">User reports:</span> "I was scammed by an IQ test website called
                Brainety. They charged me $29.99 for 'premium results' but never delivered anything. They refused my
                refund request and I had to dispute through PayPal."
              </p>

              <div className="bg-amber-50 p-3 rounded-md border border-amber-200">
                <p className="text-sm text-amber-800">
                  <span className="font-semibold">Warning signs:</span> Free test with paid results, misleading pricing,
                  no privacy policy, and fake testimonials with stock photos.
                </p>
              </div>

              <div className="flex justify-between items-center pt-2">
                <span className="text-xs text-gray-500">Posted 1 year ago</span>
                <Link
                  href="https://www.paypal-community.com/t5/Security-and-Fraud/I-was-scammed-by-an-IQ-test-website-called-Brainety-please-help/td-p/3129923"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs flex items-center gap-1 text-blue-600 hover:text-blue-800"
                >
                  Read full story
                  <ExternalLink className="h-3 w-3" />
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="bg-red-50 p-4 rounded-lg border border-red-200 mt-4">
        <p className="text-sm text-red-800 text-center">
          <strong>Remember:</strong> Legitimate IQ tests don't charge for basic results, use pressure tactics, or make
          unrealistic claims. Always research a site before providing payment information.
        </p>
      </div>
    </div>
  )
}
