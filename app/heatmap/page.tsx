"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Heatmap from "@/components/heatmap"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import NewsCard from "@/components/news-card"

// Mock data for heatmap
const heatmapData = [
  { country: "United States", count: 245, lat: 37.0902, lng: -95.7129 },
  { country: "Brazil", count: 180, lat: -14.235, lng: -51.9253 },
  { country: "India", count: 210, lat: 20.5937, lng: 78.9629 },
  { country: "Russia", count: 150, lat: 61.524, lng: 105.3188 },
  { country: "Nigeria", count: 120, lat: 9.082, lng: 8.6753 },
  { country: "United Kingdom", count: 95, lat: 55.3781, lng: -3.436 },
  { country: "France", count: 85, lat: 46.2276, lng: 2.2137 },
  { country: "China", count: 190, lat: 35.8617, lng: 104.1954 },
  { country: "Australia", count: 70, lat: -25.2744, lng: 133.7751 },
  { country: "Mexico", count: 110, lat: 23.6345, lng: -102.5528 },
  { country: "South Africa", count: 90, lat: -30.5595, lng: 22.9375 },
  { country: "Indonesia", count: 130, lat: -0.7893, lng: 113.9213 },
]

// Mock data for trending fake news by region
const trendingByRegion = {
  "North America": [
    {
      title: "Government Implementing Nationwide Microchip Program",
      source: "Liberty News Network",
      date: "2 days ago",
      snippet: "Claims about mandatory microchipping have been debunked by multiple fact-checking organizations.",
      verificationStatus: "fake" as const,
      confidenceScore: 94,
    },
    {
      title: "New Study Links Common Food Additive to Serious Health Risks",
      source: "Health Freedom Today",
      date: "1 day ago",
      snippet:
        "The study cited in this article does not exist, and the claims contradict established scientific consensus.",
      verificationStatus: "fake" as const,
      confidenceScore: 89,
    },
  ],
  Europe: [
    {
      title: "EU Secretly Planning to Ban Private Car Ownership by 2030",
      source: "European Daily",
      date: "3 days ago",
      snippet: "No such EU policy exists. This claim misrepresents climate initiatives that aim to reduce emissions.",
      verificationStatus: "fake" as const,
      confidenceScore: 91,
    },
    {
      title: "Major Currency Collapse Imminent, Experts Warn",
      source: "Financial Freedom",
      date: "5 hours ago",
      snippet:
        "The 'experts' cited in this article are not recognized economists, and the claims lack credible evidence.",
      verificationStatus: "fake" as const,
      confidenceScore: 87,
    },
  ],
  Asia: [
    {
      title: "Revolutionary Cancer Cure Being Suppressed by Pharmaceutical Companies",
      source: "Health Truth Asia",
      date: "1 day ago",
      snippet:
        "The treatment described has not undergone clinical trials and is not recognized by medical authorities.",
      verificationStatus: "fake" as const,
      confidenceScore: 96,
    },
    {
      title: "Ancient Technology Found That Defies Laws of Physics",
      source: "Discovery Today",
      date: "4 days ago",
      snippet: "Archaeologists have confirmed this is a hoax. The artifacts shown are modern creations.",
      verificationStatus: "fake" as const,
      confidenceScore: 92,
    },
  ],
  Africa: [
    {
      title: "Foreign Aid Organizations Secretly Testing Experimental Drugs",
      source: "African Truth Network",
      date: "2 days ago",
      snippet: "These allegations have been investigated and found to be false by international health organizations.",
      verificationStatus: "fake" as const,
      confidenceScore: 93,
    },
    {
      title: "Newly Discovered Natural Resource Will Make Country Richest in World",
      source: "Resource Monitor",
      date: "3 days ago",
      snippet: "Geological surveys contradict these claims. No such discovery has been confirmed by experts.",
      verificationStatus: "fake" as const,
      confidenceScore: 88,
    },
  ],
}

export default function HeatmapPage() {
  const [selectedRegion, setSelectedRegion] = useState("North America")

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-white mb-4">Fake News Heatmap</h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Visualize the global distribution of fake news and misinformation hotspots
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8">
        <Heatmap data={heatmapData} />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <CardTitle className="text-xl font-bold text-white">Trending Fake News by Region</CardTitle>
                  <Select value={selectedRegion} onValueChange={setSelectedRegion}>
                    <SelectTrigger className="w-[180px] bg-gray-700 border-gray-600">
                      <SelectValue placeholder="Select region" />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-700 border-gray-600">
                      <SelectItem value="North America">North America</SelectItem>
                      <SelectItem value="Europe">Europe</SelectItem>
                      <SelectItem value="Asia">Asia</SelectItem>
                      <SelectItem value="Africa">Africa</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {trendingByRegion[selectedRegion as keyof typeof trendingByRegion].map((news, index) => (
                    <NewsCard
                      key={index}
                      title={news.title}
                      source={news.source}
                      date={news.date}
                      snippet={news.snippet}
                      verificationStatus={news.verificationStatus}
                      confidenceScore={news.confidenceScore}
                    />
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-white">Misinformation Insights</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-white font-medium mb-2">Top Fake News Categories</h3>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-400">Health & Medicine</span>
                        <span className="text-white font-medium">32%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div className="h-2 rounded-full bg-[#FF5252]" style={{ width: "32%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-400">Politics</span>
                        <span className="text-white font-medium">28%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div className="h-2 rounded-full bg-[#FF5252]" style={{ width: "28%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-400">Science & Technology</span>
                        <span className="text-white font-medium">21%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div className="h-2 rounded-full bg-[#FF5252]" style={{ width: "21%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-400">Finance & Economy</span>
                        <span className="text-white font-medium">14%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div className="h-2 rounded-full bg-[#FF5252]" style={{ width: "14%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-400">Environment</span>
                        <span className="text-white font-medium">5%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div className="h-2 rounded-full bg-[#FF5252]" style={{ width: "5%" }}></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-white font-medium mb-2">Distribution Channels</h3>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-400">Social Media</span>
                        <span className="text-white font-medium">64%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div className="h-2 rounded-full bg-[#FF5252]" style={{ width: "64%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-400">Messaging Apps</span>
                        <span className="text-white font-medium">18%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div className="h-2 rounded-full bg-[#FF5252]" style={{ width: "18%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-400">Websites</span>
                        <span className="text-white font-medium">12%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div className="h-2 rounded-full bg-[#FF5252]" style={{ width: "12%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-400">Email</span>
                        <span className="text-white font-medium">6%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div className="h-2 rounded-full bg-[#FF5252]" style={{ width: "6%" }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

