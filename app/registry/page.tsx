"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import NewsTable from "@/components/news-table"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Loader2 } from "lucide-react"

// Mock data for news registry
const newsData = [
  {
    id: "1",
    headline: "Scientists Discover New Species of Talking Plants in Amazon Rainforest",
    source: "Nature Daily",
    date: "2023-03-15",
    status: "fake" as const,
    confidenceScore: 92,
  },
  {
    id: "2",
    headline: "Government Announces Universal Basic Income Program Starting Next Month",
    source: "Economic Times",
    date: "2023-03-14",
    status: "fake" as const,
    confidenceScore: 88,
  },
  {
    id: "3",
    headline: "Major Tech Company Develops Mind-Reading Smartphone Technology",
    source: "Tech Insider",
    date: "2023-03-13",
    status: "fake" as const,
    confidenceScore: 95,
  },
  {
    id: "4",
    headline: "New Study Shows Benefits of Regular Exercise for Mental Health",
    source: "Health Journal",
    date: "2023-03-12",
    status: "real" as const,
    confidenceScore: 96,
  },
  {
    id: "5",
    headline: "Global Climate Report Indicates Accelerating Temperature Rise",
    source: "Climate Monitor",
    date: "2023-03-11",
    status: "real" as const,
    confidenceScore: 97,
  },
  {
    id: "6",
    headline: "Revolutionary Cancer Cure Being Suppressed by Pharmaceutical Companies",
    source: "Health Truth",
    date: "2023-03-10",
    status: "fake" as const,
    confidenceScore: 91,
  },
  {
    id: "7",
    headline: "Ancient Technology Found That Defies Laws of Physics",
    source: "Discovery Today",
    date: "2023-03-09",
    status: "fake" as const,
    confidenceScore: 89,
  },
  {
    id: "8",
    headline: "New Research on Renewable Energy Storage Solutions",
    source: "Science Daily",
    date: "2023-03-08",
    status: "real" as const,
    confidenceScore: 94,
  },
  {
    id: "9",
    headline: "Major Breakthrough in Quantum Computing Announced",
    source: "Tech Review",
    date: "2023-03-07",
    status: "real" as const,
    confidenceScore: 92,
  },
  {
    id: "10",
    headline: "Foreign Aid Organizations Secretly Testing Experimental Drugs",
    source: "Global Health Watch",
    date: "2023-03-06",
    status: "fake" as const,
    confidenceScore: 93,
  },
  {
    id: "11",
    headline: "Newly Discovered Natural Resource Will Make Country Richest in World",
    source: "Resource Monitor",
    date: "2023-03-05",
    status: "fake" as const,
    confidenceScore: 90,
  },
  {
    id: "12",
    headline: "Study Finds Link Between Diet and Longevity",
    source: "Nutrition Science",
    date: "2023-03-04",
    status: "real" as const,
    confidenceScore: 95,
  },
  {
    id: "13",
    headline: "New Educational Approach Shows Improved Learning Outcomes",
    source: "Education Weekly",
    date: "2023-03-03",
    status: "real" as const,
    confidenceScore: 91,
  },
  {
    id: "14",
    headline: "EU Secretly Planning to Ban Private Car Ownership by 2030",
    source: "European Daily",
    date: "2023-03-02",
    status: "fake" as const,
    confidenceScore: 87,
  },
  {
    id: "15",
    headline: "Major Currency Collapse Imminent, Experts Warn",
    source: "Financial Freedom",
    date: "2023-03-01",
    status: "fake" as const,
    confidenceScore: 89,
  },
]

const RegistryPage = () => {
  const [activeTab, setActiveTab] = useState("all")
  const [loading, setLoading] = useState(false)

  // Filter data based on active tab
  const filteredData = newsData.filter((item) => {
    if (activeTab === "all") return true
    if (activeTab === "fake") return item.status === "fake"
    if (activeTab === "real") return item.status === "real"
    return true
  })

  const handleTabChange = (value: string) => {
    setLoading(true)
    // Simulate loading
    setTimeout(() => {
      setActiveTab(value)
      setLoading(false)
    }, 300)
  }

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-white mb-4">Fact-Checked News Registry</h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Browse our database of verified news articles and see which ones have been identified as fake
        </p>
      </div>

      <Card className="bg-gray-800 border-gray-700">
        <CardHeader>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <CardTitle className="text-xl font-bold text-white">News Registry</CardTitle>
            <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full sm:w-auto">
              <TabsList className="grid grid-cols-3 bg-gray-700">
                <TabsTrigger value="all" className="data-[state=active]:bg-[#00C853] data-[state=active]:text-white">
                  All
                </TabsTrigger>
                <TabsTrigger value="fake" className="data-[state=active]:bg-[#FF5252] data-[state=active]:text-white">
                  Fake
                </TabsTrigger>
                <TabsTrigger value="real" className="data-[state=active]:bg-[#00C853] data-[state=active]:text-white">
                  Real
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="flex justify-center items-center py-12">
              <Loader2 className="animate-spin text-[#00C853]" size={32} />
            </div>
          ) : (
            <NewsTable data={filteredData} />
          )}
        </CardContent>
      </Card>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-white">Registry Statistics</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-white font-medium mb-2">Verification Results</h3>
              <div className="flex items-center">
                <div className="w-full bg-gray-700 rounded-full h-4">
                  <div className="flex h-4 rounded-full overflow-hidden">
                    <div className="bg-[#00C853] h-full" style={{ width: "42%" }}></div>
                    <div className="bg-[#FF5252] h-full" style={{ width: "58%" }}></div>
                  </div>
                </div>
              </div>
              <div className="flex justify-between mt-2 text-sm">
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-[#00C853] mr-2"></div>
                  <span className="text-gray-300">Real (42%)</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-[#FF5252] mr-2"></div>
                  <span className="text-gray-300">Fake (58%)</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-white font-medium mb-2">Monthly Submissions</h3>
              <div className="grid grid-cols-6 gap-1 h-32">
                {[35, 42, 58, 75, 62, 80].map((height, i) => (
                  <div key={i} className="flex flex-col items-center justify-end">
                    <div className="w-full bg-[#00C853] rounded-t-sm" style={{ height: `${height}%` }}></div>
                    <span className="text-xs text-gray-400 mt-1">{["Jan", "Feb", "Mar", "Apr", "May", "Jun"][i]}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-white font-medium mb-2">Top Sources of Fake News</h3>
              <div className="space-y-2">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-400">Health Truth Network</span>
                    <span className="text-white font-medium">24%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="h-2 rounded-full bg-[#FF5252]" style={{ width: "24%" }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-400">Liberty News</span>
                    <span className="text-white font-medium">18%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="h-2 rounded-full bg-[#FF5252]" style={{ width: "18%" }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-400">Global Truth Report</span>
                    <span className="text-white font-medium">15%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="h-2 rounded-full bg-[#FF5252]" style={{ width: "15%" }}></div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-white">About the Registry</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-300">
              The Fact-Checked News Registry is a comprehensive database of news articles that have been analyzed by our
              AI system and verified by our community. It serves as a public record of content that has been identified
              as either authentic or fake.
            </p>

            <div className="space-y-2">
              <h3 className="text-white font-medium">How Articles Are Added</h3>
              <p className="text-gray-300">Articles are added to the registry through:</p>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                <li>User submissions via our Fact-Check tool</li>
                <li>Automated monitoring of high-traffic news sources</li>
                <li>Community reports of suspicious content</li>
                <li>Partnerships with fact-checking organizations</li>
              </ul>
            </div>

            <div className="space-y-2">
              <h3 className="text-white font-medium">Verification Process</h3>
              <p className="text-gray-300">Each article undergoes a multi-step verification process:</p>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                <li>AI analysis for linguistic patterns and content reliability</li>
                <li>Source credibility assessment</li>
                <li>Cross-reference with established facts</li>
                <li>Community voting and expert review for borderline cases</li>
              </ul>
            </div>

            <div className="space-y-2">
              <h3 className="text-white font-medium">Using the Registry</h3>
              <p className="text-gray-300">You can use this registry to:</p>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                <li>Check if a specific article has been verified</li>
                <li>Identify unreliable news sources</li>
                <li>Research trends in misinformation</li>
                <li>Access verified information on important topics</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default RegistryPage

