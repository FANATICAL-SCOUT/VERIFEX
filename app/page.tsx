import Link from "next/link"
import { Button } from "@/components/ui/button"
import NewsCard from "@/components/news-card"
import { ArrowRight, BarChart2, FileText, Image, Shield } from "lucide-react"

// Mock data for trending fake news
const trendingNews = [
  {
    id: "1",
    title: "Scientists Discover New Species of Talking Plants in Amazon Rainforest",
    source: "Nature Daily",
    date: "2 hours ago",
    snippet:
      "Researchers claim to have found plants that can communicate in human language, raising concerns about scientific integrity.",
    verificationStatus: "fake" as const,
    confidenceScore: 92,
    imageUrl: "/placeholder.svg?height=200&width=400",
  },
  {
    id: "2",
    title: "Government Announces Universal Basic Income Program Starting Next Month",
    source: "Economic Times",
    date: "5 hours ago",
    snippet: "Officials deny claims of a nationwide UBI program that has been circulating on social media platforms.",
    verificationStatus: "fake" as const,
    confidenceScore: 88,
    imageUrl: "/placeholder.svg?height=200&width=400",
  },
  {
    id: "3",
    title: "Major Tech Company Develops Mind-Reading Smartphone Technology",
    source: "Tech Insider",
    date: "1 day ago",
    snippet: "Reports of a new smartphone that can read thoughts have been debunked by industry experts.",
    verificationStatus: "fake" as const,
    confidenceScore: 95,
    imageUrl: "/placeholder.svg?height=200&width=400",
  },
]

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Detect <span className="text-white">Truth</span> from <span className="text-[#FF5252]">Fiction</span>
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Our AI-powered platform helps you verify news articles, detect deepfakes, and combat misinformation in
              real-time.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/about">
                <Button variant="outline" className="border-white text-white hover:bg-white/10 py-6 px-8">
                  Learn How It Works
                </Button>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-16">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20 hover:border-white/30 transition-colors">
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mb-4">
                <FileText className="text-white" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Article Verification</h3>
              <p className="text-white/80">Analyze news articles for factual accuracy and detect misleading content.</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20 hover:border-white/30 transition-colors">
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mb-4">
                <Image className="text-white" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Deepfake Detection</h3>
              <p className="text-white/80">Identify AI-generated images and manipulated media with high accuracy.</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20 hover:border-white/30 transition-colors">
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mb-4">
                <BarChart2 className="text-white" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Global Heatmap</h3>
              <p className="text-white/80">Visualize fake news hotspots and track misinformation trends worldwide.</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20 hover:border-white/30 transition-colors">
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mb-4">
                <Shield className="text-white" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Decentralized Verification</h3>
              <p className="text-white/80">Community-driven fact-checking backed by transparent AI algorithms.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trending Fake News Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-white">Trending Fake News</h2>
            <Link href="/registry" className="text-white hover:text-white/80 flex items-center">
              View All <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {trendingNews.map((news) => (
              <NewsCard
                key={news.id}
                title={news.title}
                source={news.source}
                date={news.date}
                snippet={news.snippet}
                verificationStatus={news.verificationStatus}
                confidenceScore={news.confidenceScore}
                imageUrl={news.imageUrl}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Fighting Misinformation Together</h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              Join thousands of users worldwide in our mission to create a more truthful information ecosystem.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg text-center">
              <div className="text-4xl font-bold text-white mb-2">5M+</div>
              <div className="text-white/80">Articles Verified</div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg text-center">
              <div className="text-4xl font-bold text-white mb-2">98%</div>
              <div className="text-white/80">Detection Accuracy</div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg text-center">
              <div className="text-4xl font-bold text-white mb-2">150K</div>
              <div className="text-white/80">Active Users</div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg text-center">
              <div className="text-4xl font-bold text-white mb-2">75+</div>
              <div className="text-white/80">Countries Covered</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

