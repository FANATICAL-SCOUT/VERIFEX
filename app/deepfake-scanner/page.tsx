"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Loader2, AlertTriangle, CheckCircle, LinkIcon } from "lucide-react"
import FileUpload from "@/components/file-upload"

export default function DeepfakeScannerPage() {
  const [activeTab, setActiveTab] = useState("upload")
  const [imageUrl, setImageUrl] = useState("")
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [showResults, setShowResults] = useState(false)
  const [isFake, setIsFake] = useState(true)
  const [confidenceScore, setConfidenceScore] = useState(94)
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)

  const handleFileSelect = (file: File) => {
    setSelectedFile(file)

    // Create preview URL
    const reader = new FileReader()
    reader.onloadend = () => {
      setPreviewUrl(reader.result as string)
    }
    reader.readAsDataURL(file)
  }

  const handleUrlSubmit = () => {
    if (imageUrl.trim()) {
      setIsAnalyzing(true)
      // Simulate API call
      setTimeout(() => {
        setIsAnalyzing(false)
        setShowResults(true)
        // For demo purposes, we'll set this image as fake
        setIsFake(true)
        setConfidenceScore(94)
        setPreviewUrl(imageUrl)
      }, 2000)
    }
  }

  const handleUploadSubmit = () => {
    if (selectedFile) {
      setIsAnalyzing(true)
      // Simulate API call
      setTimeout(() => {
        setIsAnalyzing(false)
        setShowResults(true)
        // For demo purposes, we'll set this image as fake
        setIsFake(true)
        setConfidenceScore(94)
      }, 2000)
    }
  }

  const handleReset = () => {
    setShowResults(false)
    setSelectedFile(null)
    setPreviewUrl(null)
    setImageUrl("")
  }

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-white mb-4">Deepfake & Image Verification</h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Detect AI-generated or manipulated images with our advanced deepfake detection technology
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          {!showResults ? (
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-white">Verify an Image</CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                  <TabsList className="grid grid-cols-2 mb-6 bg-gray-700">
                    <TabsTrigger
                      value="upload"
                      className="data-[state=active]:bg-[#8b5cf6] data-[state=active]:text-white"
                    >
                      Upload Image
                    </TabsTrigger>
                    <TabsTrigger
                      value="url"
                      className="data-[state=active]:bg-[#8b5cf6] data-[state=active]:text-white"
                    >
                      Image URL
                    </TabsTrigger>
                  </TabsList>
                  <TabsContent value="upload" className="mt-0">
                    <div className="space-y-6">
                      <FileUpload onFileSelect={handleFileSelect} accept="image/*" label="Upload an image to verify" />

                      <Button
                        onClick={handleUploadSubmit}
                        disabled={isAnalyzing || !selectedFile}
                        className="w-full bg-[#8b5cf6] hover:bg-[#8b5cf6]/90 text-white py-6"
                      >
                        {isAnalyzing ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Analyzing...
                          </>
                        ) : (
                          "Verify Image"
                        )}
                      </Button>
                    </div>
                  </TabsContent>
                  <TabsContent value="url" className="mt-0">
                    <div className="space-y-6">
                      <div className="flex w-full items-center space-x-2">
                        <div className="relative flex-grow">
                          <Input
                            type="text"
                            placeholder="Enter image URL..."
                            value={imageUrl}
                            onChange={(e) => setImageUrl(e.target.value)}
                            className="pl-10 bg-gray-700 border-gray-600 text-white py-6"
                          />
                          <LinkIcon
                            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                            size={16}
                          />
                        </div>
                        <Button
                          onClick={handleUrlSubmit}
                          disabled={isAnalyzing || !imageUrl.trim()}
                          className="bg-[#8b5cf6] hover:bg-[#8b5cf6]/90 text-white py-6 px-6"
                        >
                          {isAnalyzing ? (
                            <>
                              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                              Analyzing...
                            </>
                          ) : (
                            "Verify"
                          )}
                        </Button>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>

                {isAnalyzing && (
                  <div className="flex flex-col items-center justify-center py-12">
                    <Loader2 size={48} className="text-[#00C853] animate-spin mb-4" />
                    <p className="text-white text-lg font-medium">Analyzing image...</p>
                    <p className="text-gray-400 mt-2">Our AI is checking for signs of manipulation and AI generation</p>
                  </div>
                )}
              </CardContent>
            </Card>
          ) : (
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-xl font-bold text-white">Verification Results</CardTitle>
                <Button
                  variant="outline"
                  onClick={handleReset}
                  className="border-gray-600 text-white hover:bg-gray-700"
                >
                  Verify Another Image
                </Button>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="w-full md:w-1/2">
                    {previewUrl && (
                      <div className="rounded-lg overflow-hidden border border-gray-700">
                        <img src={previewUrl || "/placeholder.svg"} alt="Analyzed image" className="w-full h-auto" />
                      </div>
                    )}
                  </div>

                  <div className="w-full md:w-1/2 flex flex-col justify-center">
                    <div className="flex flex-col items-center text-center p-6 bg-gray-900 rounded-lg mb-6">
                      {isFake ? (
                        <div className="flex flex-col items-center">
                          <div className="w-24 h-24 rounded-full bg-[#FF5252]/20 flex items-center justify-center mb-4">
                            <AlertTriangle size={48} className="text-[#FF5252]" />
                          </div>
                          <h3 className="text-2xl font-bold text-[#FF5252]">Likely Fake</h3>
                          <p className="text-gray-400 mt-2">
                            Our AI detected this image as potentially manipulated or AI-generated
                          </p>
                        </div>
                      ) : (
                        <div className="flex flex-col items-center">
                          <div className="w-24 h-24 rounded-full bg-[#00C853]/20 flex items-center justify-center mb-4">
                            <CheckCircle size={48} className="text-[#00C853]" />
                          </div>
                          <h3 className="text-2xl font-bold text-[#00C853]">Likely Real</h3>
                          <p className="text-gray-400 mt-2">Our AI detected this image as potentially authentic</p>
                        </div>
                      )}
                    </div>

                    <div className="space-y-4">
                      <h4 className="text-lg font-medium text-white">AI Confidence Score</h4>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-gray-400">Fake Probability</span>
                          <span className="text-white font-medium">{confidenceScore}%</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2.5">
                          <div
                            className="h-2.5 rounded-full bg-[#FF5252]"
                            style={{ width: `${confidenceScore}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="text-lg font-medium text-white">Analysis Details</h4>
                  <div className="space-y-4 bg-gray-900 p-4 rounded-lg">
                    <div>
                      <h5 className="text-white font-medium mb-2">Detected Manipulation Techniques</h5>
                      <ul className="list-disc list-inside text-gray-300 space-y-1">
                        <li>GAN-based image generation</li>
                        <li>Inconsistent lighting and shadows</li>
                        <li>Unnatural facial features</li>
                        <li>Texture inconsistencies</li>
                      </ul>
                    </div>

                    <div>
                      <h5 className="text-white font-medium mb-2">AI Model Assessment</h5>
                      <p className="text-gray-300">
                        This image shows multiple indicators of being generated by an AI model, likely using a
                        Generative Adversarial Network (GAN). The facial features show subtle inconsistencies in texture
                        and symmetry that are characteristic of AI-generated content. Background elements also display
                        unnatural blending patterns typical of synthetic images.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
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
                  <h3 className="text-white font-medium mb-1">Upload or Link</h3>
                  <p className="text-gray-400 text-sm">
                    Upload an image file or provide a URL to an image you want to verify
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
                    Our advanced AI examines the image for signs of manipulation or AI generation
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
                    Receive a detailed analysis with fake probability score and manipulation indicators
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-white">Deepfake Detection Tips</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h3 className="text-white font-medium">Check for Unnatural Features</h3>
                <p className="text-gray-400 text-sm">
                  Look for inconsistencies in facial features, such as asymmetrical eyes, unnatural skin texture, or
                  blurry areas.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-white font-medium">Examine Lighting and Shadows</h3>
                <p className="text-gray-400 text-sm">
                  Inconsistent lighting or shadows that don't match the environment can indicate manipulation.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-white font-medium">Look for Background Anomalies</h3>
                <p className="text-gray-400 text-sm">
                  Check for distorted or blurry backgrounds, especially around the edges of subjects.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-white font-medium">Verify the Source</h3>
                <p className="text-gray-400 text-sm">
                  If possible, trace the image back to its original source to confirm authenticity.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-white font-medium">Use Multiple Detection Tools</h3>
                <p className="text-gray-400 text-sm">
                  For critical verification, use multiple deepfake detection tools to cross-reference results.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

