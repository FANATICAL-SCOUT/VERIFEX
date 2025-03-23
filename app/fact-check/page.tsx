"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import SearchBar from "@/components/search-bar"
import VerificationResult from "@/components/verification-result"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Loader2, CheckCircle } from "lucide-react"

export default function FactCheckPage() {
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [showResults, setShowResults] = useState(false)
  const [activeTab, setActiveTab] = useState("url")
  const [articleText, setArticleText] = useState("")

  // Mock verification result
  const [verificationResult, setVerificationResult] = useState({
    title: "",
    source: "",
    fakeScore: 0,
    realScore: 0,
    summary: "",
  })

  const generateResults = (query: string) => {
    // Simulating different results based on input
    const fakeScore = Math.floor(Math.random() * 70) + 30
    const realScore = 100 - fakeScore

    return {
      title: query.length > 30 ? query.substring(0, 30) + "..." : query,
      source: query.includes("http") ? new URL(query).hostname : "Unknown Source",
      fakeScore: fakeScore,
      realScore: realScore,
      summary: `Our analysis shows that this content has a ${fakeScore}% probability of being fake news. ${
        fakeScore > 50
          ? "The content contains several indicators of misinformation, including unverified claims and questionable sources."
          : "While some claims may be accurate, we recommend verifying with additional sources."
      }`,
    }
  }

  const handleSearch = (query: string) => {
    if (query.trim()) {
      setIsAnalyzing(true)
      // Simulate API call
      setTimeout(() => {
        const results = generateResults(query)
        setVerificationResult(results)
        setIsAnalyzing(false)
        setShowResults(true)
      }, 2000)
    }
  }

  const handleTextAnalysis = () => {
    if (articleText.trim()) {
      setIsAnalyzing(true)
      // Simulate API call
      setTimeout(() => {
        const results = generateResults(articleText)
        setVerificationResult(results)
        setIsAnalyzing(false)
        setShowResults(true)
      }, 2000)
    }
  }

  const [showVoteSuccess, setShowVoteSuccess] = useState(false)

  const handleVote = (type: string) => {
    // In a real app, this would send the vote to the backend
    console.log(`Vote submitted: ${type}`)
    setShowVoteSuccess(true)
    setTimeout(() => setShowVoteSuccess(false), 3000)
  }

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-white mb-4">Fact Check</h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Verify the authenticity of news articles using our AI-powered fact-checking system
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-white">Submit Content for Verification</CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="grid grid-cols-2 mb-6 bg-gray-700">
                  <TabsTrigger value="url" className="data-[state=active]:bg-[#8b5cf6] data-[state=active]:text-white">
                    URL
                  </TabsTrigger>
                  <TabsTrigger value="text" className="data-[state=active]:bg-[#8b5cf6] data-[state=active]:text-white">
                    Text
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="url" className="mt-0">
                  <SearchBar placeholder="Enter news article URL..." buttonText="Analyze" onSearch={handleSearch} />
                </TabsContent>
                <TabsContent value="text" className="mt-0">
                  <div className="space-y-4">
                    <Textarea
                      placeholder="Paste the news article text here..."
                      className="min-h-[200px] bg-gray-700 border-gray-600 text-white"
                      value={articleText}
                      onChange={(e) => setArticleText(e.target.value)}
                    />
                    <Button
                      onClick={handleTextAnalysis}
                      disabled={isAnalyzing || !articleText.trim()}
                      className="w-full bg-[#8b5cf6] hover:bg-[#8b5cf6]/90 text-white py-6"
                    >
                      {isAnalyzing ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Analyzing...
                        </>
                      ) : (
                        "Analyze"
                      )}
                    </Button>
                  </div>
                </TabsContent>
              </Tabs>

              {isAnalyzing && (
                <div className="flex flex-col items-center justify-center py-12">
                  <Loader2 size={48} className="text-[#00C853] animate-spin mb-4" />
                  <p className="text-white text-lg font-medium">Analyzing content...</p>
                  <p className="text-gray-400 mt-2">
                    Our AI is checking facts, analyzing sources, and verifying claims
                  </p>
                </div>
              )}
            </CardContent>
          </Card>

          {showResults && (
            <div className="mt-8">
              <VerificationResult
                title={verificationResult.title}
                source={verificationResult.source}
                fakeScore={verificationResult.fakeScore}
                realScore={verificationResult.realScore}
                summary={verificationResult.summary}
                onVoteReal={() => handleVote("real")}
                onVoteFake={() => handleVote("fake")}
              />
            </div>
          )}
        </div>

        <div>
          <Card className="bg-gray-800 border-gray-700 mb-8">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-white">How It Works</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start">
                <div className="w-8 h-8 rounded-full bg-[#8b5cf6]/20 flex items-center justify-center mr-4 mt-0.5">
                  <span className="text-[#8b5cf6] font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-white font-medium mb-1">Submit Content</h3>
                  <p className="text-gray-400 text-sm">
                    Enter a URL or paste the text of a news article you want to verify
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-8 h-8 rounded-full bg-[#8b5cf6]/20 flex items-center justify-center mr-4 mt-0.5">
                  <span className="text-[#8b5cf6] font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-white font-medium mb-1">AI Analysis</h3>
                  <p className="text-gray-400 text-sm">
                    Our AI analyzes the content, checks against verified sources, and evaluates credibility
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-8 h-8 rounded-full bg-[#8b5cf6]/20 flex items-center justify-center mr-4 mt-0.5">
                  <span className="text-[#8b5cf6] font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-white font-medium mb-1">Get Results</h3>
                  <p className="text-gray-400 text-sm">
                    Receive a detailed analysis with fake/real probability scores and explanation
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-8 h-8 rounded-full bg-[#8b5cf6]/20 flex items-center justify-center mr-4 mt-0.5">
                  <span className="text-[#8b5cf6] font-bold">4</span>
                </div>
                <div>
                  <h3 className="text-white font-medium mb-1">Community Verification</h3>
                  <p className="text-gray-400 text-sm">
                    Vote on the results to help improve our AI and contribute to the community
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-white">Tips for Spotting Fake News</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h3 className="text-white font-medium">Check the Source</h3>
                <p className="text-gray-400 text-sm">
                  Investigate the website and author. Look for about pages, contact information, and credibility.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-white font-medium">Read Beyond Headlines</h3>
                <p className="text-gray-400 text-sm">
                  Headlines can be sensationalized. Read the full article before sharing.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-white font-medium">Check the Date</h3>
                <p className="text-gray-400 text-sm">
                  Old news shared as new can be misleading. Verify when the article was published.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-white font-medium">Look for Supporting Sources</h3>
                <p className="text-gray-400 text-sm">
                  Credible articles cite multiple sources. Check if other reputable outlets are reporting the same.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      {showVoteSuccess && (
        <div className="fixed bottom-4 right-4 bg-[#00C853] text-white px-4 py-3 rounded-md shadow-lg z-50 flex items-center">
          <CheckCircle className="mr-2" size={18} />
          Thank you! Your vote has been submitted
        </div>
      )}
    </div>
  )
}

