import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import ReportForm from "@/components/report-form"

export default function ReportPage() {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-white mb-4">Report Fake News</h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Help us combat misinformation by reporting suspicious content you encounter online
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <ReportForm />
        </div>

        <div>
          <Card className="bg-gray-800 border-gray-700 mb-8">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-white">Why Report Fake News?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-300">
                Reporting fake news is crucial for maintaining a healthy information ecosystem. Your contributions help:
              </p>

              <div className="space-y-4 mt-4">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-[#8b5cf6]/20 flex items-center justify-center mr-4 mt-0.5">
                    <span className="text-[#8b5cf6] font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="text-white font-medium mb-1">Protect Others</h3>
                    <p className="text-gray-400 text-sm">
                      Prevent others from being misled by false information that could affect their decisions
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-[#8b5cf6]/20 flex items-center justify-center mr-4 mt-0.5">
                    <span className="text-[#8b5cf6] font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="text-white font-medium mb-1">Improve Our AI</h3>
                    <p className="text-gray-400 text-sm">
                      Your reports help train our AI to better detect patterns of misinformation
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-[#8b5cf6]/20 flex items-center justify-center mr-4 mt-0.5">
                    <span className="text-[#8b5cf6] font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="text-white font-medium mb-1">Hold Sources Accountable</h3>
                    <p className="text-gray-400 text-sm">
                      Create transparency about which sources consistently spread misinformation
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-[#8b5cf6]/20 flex items-center justify-center mr-4 mt-0.5">
                    <span className="text-[#8b5cf6] font-bold">4</span>
                  </div>
                  <div>
                    <h3 className="text-white font-medium mb-1">Build a Better Internet</h3>
                    <p className="text-gray-400 text-sm">
                      Contribute to a more truthful and reliable information ecosystem for everyone
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-white">What Happens Next?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h3 className="text-white font-medium">Verification Process</h3>
                <p className="text-gray-300 text-sm">After you submit a report, our system will:</p>
                <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
                  <li>Analyze the content using our AI detection algorithms</li>
                  <li>Cross-reference with our database of known fake news</li>
                  <li>Have human moderators review complex cases</li>
                  <li>Add verified fake news to our public registry</li>
                </ul>
              </div>

              <div className="space-y-2">
                <h3 className="text-white font-medium">Notification</h3>
                <p className="text-gray-300 text-sm">If you provided an email address, we'll notify you when:</p>
                <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
                  <li>Your report has been received</li>
                  <li>The verification process is complete</li>
                  <li>The content has been added to our registry</li>
                </ul>
              </div>

              <div className="space-y-2">
                <h3 className="text-white font-medium">Privacy & Security</h3>
                <p className="text-gray-300 text-sm">We take your privacy seriously:</p>
                <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
                  <li>Your personal information is never shared publicly</li>
                  <li>Reports can be submitted anonymously</li>
                  <li>All data is encrypted and securely stored</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

