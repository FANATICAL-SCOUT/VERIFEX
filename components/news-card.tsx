import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { AlertTriangle, CheckCircle, Clock } from "lucide-react"

interface NewsCardProps {
  title: string
  source: string
  date: string
  snippet: string
  verificationStatus: "real" | "fake" | "unverified"
  confidenceScore?: number
  imageUrl?: string
}

const NewsCard = ({ title, source, date, snippet, verificationStatus, confidenceScore, imageUrl }: NewsCardProps) => {
  const getStatusColor = () => {
    switch (verificationStatus) {
      case "real":
        return "bg-violet-600 text-white"
      case "fake":
        return "bg-[#FF5252] text-white"
      default:
        return "bg-gray-600 text-white"
    }
  }

  const getStatusIcon = () => {
    switch (verificationStatus) {
      case "real":
        return <CheckCircle size={16} className="mr-1" />
      case "fake":
        return <AlertTriangle size={16} className="mr-1" />
      default:
        return <Clock size={16} className="mr-1" />
    }
  }

  return (
    <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:border-white/30 transition-all overflow-hidden">
      {imageUrl && (
        <div className="w-full h-48 overflow-hidden">
          <img
            src={imageUrl || "/placeholder.svg"}
            alt={title}
            className="w-full h-full object-cover transition-transform hover:scale-105"
          />
        </div>
      )}
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-semibold text-white line-clamp-2">{title}</h3>
          <Badge className={`ml-2 flex items-center ${getStatusColor()}`}>
            {getStatusIcon()}
            {verificationStatus.charAt(0).toUpperCase() + verificationStatus.slice(1)}
          </Badge>
        </div>
        <div className="text-sm text-white/70 mt-1">
          {source} • {date}
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-white/90 line-clamp-3">{snippet}</p>
      </CardContent>
      <CardFooter className="border-t border-white/20 pt-3">
        {confidenceScore !== undefined && (
          <div className="w-full">
            <div className="flex justify-between text-sm mb-1">
              <span className="text-white/70">AI Confidence</span>
              <span className="text-white font-medium">{confidenceScore}%</span>
            </div>
            <div className="w-full bg-white/20 rounded-full h-2">
              <div
                className={`h-2 rounded-full ${verificationStatus === "fake" ? "bg-[#FF5252]" : "bg-violet-600"}`}
                style={{ width: `${confidenceScore}%` }}
              ></div>
            </div>
          </div>
        )}
      </CardFooter>
    </Card>
  )
}

export default NewsCard

