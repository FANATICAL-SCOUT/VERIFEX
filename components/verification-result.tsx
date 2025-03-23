"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { AlertTriangle, CheckCircle, ThumbsDown, ThumbsUp } from "lucide-react"

interface VerificationResultProps {
  title: string
  source?: string
  fakeScore: number
  realScore: number
  summary: string
  onVoteReal?: () => void
  onVoteFake?: () => void
}

const VerificationResult = ({
  title,
  source,
  fakeScore,
  realScore,
  summary,
  onVoteReal,
  onVoteFake,
}: VerificationResultProps) => {
  const isFake = fakeScore > realScore

  return (
    <Card className="bg-gray-800 border-gray-700">
      <CardHeader className="pb-2">
        <CardTitle className="text-xl font-bold text-white">{title}</CardTitle>
        {source && <p className="text-sm text-gray-400">{source}</p>}
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex items-center justify-center p-6 bg-gray-900 rounded-lg">
          <div className="text-center">
            {isFake ? (
              <div className="flex flex-col items-center">
                <div className="w-24 h-24 rounded-full bg-[#FF5252]/20 flex items-center justify-center mb-4">
                  <AlertTriangle size={48} className="text-[#FF5252]" />
                </div>
                <h3 className="text-2xl font-bold text-[#FF5252]">Likely Fake</h3>
                <p className="text-gray-400 mt-2">Our AI detected this content as potentially misleading</p>
              </div>
            ) : (
              <div className="flex flex-col items-center">
                <div className="w-24 h-24 rounded-full bg-[#00C853]/20 flex items-center justify-center mb-4">
                  <CheckCircle size={48} className="text-[#00C853]" />
                </div>
                <h3 className="text-2xl font-bold text-[#00C853]">Likely Real</h3>
                <p className="text-gray-400 mt-2">Our AI detected this content as potentially reliable</p>
              </div>
            )}
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="text-lg font-medium text-white">AI Confidence Scores</h4>
          <div className="space-y-3">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-400">Fake Probability</span>
                <span className="text-white font-medium">{fakeScore}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2.5">
                <div className="h-2.5 rounded-full bg-[#FF5252]" style={{ width: `${fakeScore}%` }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-400">Real Probability</span>
                <span className="text-white font-medium">{realScore}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2.5">
                <div className="h-2.5 rounded-full bg-[#00C853]" style={{ width: `${realScore}%` }}></div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="text-lg font-medium text-white">AI Summary</h4>
          <p className="text-gray-300">{summary}</p>
        </div>

        <div className="space-y-4">
          <h4 className="text-lg font-medium text-white">Do you agree?</h4>
          <div className="flex space-x-4">
            <Button
              onClick={() => onVoteReal && onVoteReal()}
              variant="outline"
              className="flex-1 border-gray-600 hover:bg-[#00C853]/20 hover:text-[#00C853] hover:border-[#00C853]"
            >
              <ThumbsUp className="mr-2 h-4 w-4" />
              Real
            </Button>
            <Button
              onClick={() => onVoteFake && onVoteFake()}
              variant="outline"
              className="flex-1 border-gray-600 hover:bg-[#FF5252]/20 hover:text-[#FF5252] hover:border-[#FF5252]"
            >
              <ThumbsDown className="mr-2 h-4 w-4" />
              Fake
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default VerificationResult

