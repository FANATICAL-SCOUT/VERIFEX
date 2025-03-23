"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { AlertCircle, CheckCircle, Loader2 } from "lucide-react"
import FileUpload from "./file-upload"

const ReportForm = () => {
  const [formData, setFormData] = useState({
    url: "",
    title: "",
    source: "",
    description: "",
    reason: "",
  })
  const [file, setFile] = useState<File | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")
  const [showSuccessNotification, setShowSuccessNotification] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleFileSelect = (selectedFile: File) => {
    setFile(selectedFile)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")
    setErrorMessage("")

    // Validate form
    if (!formData.url && !formData.title) {
      setErrorMessage("Please provide either a URL or a title of the news article")
      setSubmitStatus("error")
      setIsSubmitting(false)
      return
    }

    if (!formData.reason) {
      setErrorMessage("Please explain why you believe this is fake news")
      setSubmitStatus("error")
      setIsSubmitting(false)
      return
    }

    // Simulate API call
    try {
      // In a real app, this would be an API call to submit the report
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Show notification instead of full success screen
      setShowSuccessNotification(true)
      setTimeout(() => setShowSuccessNotification(false), 3000)

      // Reset form
      setFormData({
        url: "",
        title: "",
        source: "",
        description: "",
        reason: "",
      })
      setFile(null)
    } catch (error) {
      setSubmitStatus("error")
      setErrorMessage("An error occurred while submitting your report. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Card className="bg-gray-800 border-gray-700">
      <CardHeader>
        <CardTitle className="text-xl font-bold text-white">Report Fake News</CardTitle>
        <CardDescription className="text-gray-400">
          Help us combat misinformation by reporting suspicious content
        </CardDescription>
      </CardHeader>
      <CardContent>
        {submitStatus === "success" ? (
          <div className="flex flex-col items-center justify-center py-8">
            <div className="w-16 h-16 rounded-full bg-[#00C853]/20 flex items-center justify-center mb-4">
              <CheckCircle size={32} className="text-[#00C853]" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Report Submitted</h3>
            <p className="text-gray-400 text-center mb-6">
              Thank you for helping us combat misinformation. Our team will review your report.
            </p>
            <Button onClick={() => setSubmitStatus("idle")} className="bg-[#00C853] hover:bg-[#00C853]/90 text-white">
              Submit Another Report
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {submitStatus === "error" && (
              <div className="bg-[#FF5252]/10 border border-[#FF5252]/30 rounded-md p-4 flex items-start">
                <AlertCircle className="text-[#FF5252] mr-3 mt-0.5" size={18} />
                <div>
                  <p className="text-[#FF5252] font-medium">Error</p>
                  <p className="text-gray-300 text-sm">{errorMessage}</p>
                </div>
              </div>
            )}

            <div className="space-y-4">
              <div>
                <Label htmlFor="url" className="text-white">
                  News Article URL
                </Label>
                <Input
                  id="url"
                  name="url"
                  value={formData.url}
                  onChange={handleChange}
                  placeholder="https://example.com/article"
                  className="bg-gray-700 border-gray-600 text-white"
                />
              </div>

              <div className="text-center my-2">
                <span className="text-gray-400 text-sm">OR</span>
              </div>

              <div>
                <Label htmlFor="title" className="text-white">
                  Article Title
                </Label>
                <Input
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="Enter the headline of the article"
                  className="bg-gray-700 border-gray-600 text-white"
                />
              </div>

              <div>
                <Label htmlFor="source" className="text-white">
                  Source
                </Label>
                <Input
                  id="source"
                  name="source"
                  value={formData.source}
                  onChange={handleChange}
                  placeholder="Where was this published?"
                  className="bg-gray-700 border-gray-600 text-white"
                />
              </div>

              <div>
                <Label htmlFor="description" className="text-white">
                  Article Content
                </Label>
                <Textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Paste the content of the article here"
                  className="bg-gray-700 border-gray-600 text-white min-h-[100px]"
                />
              </div>

              <div>
                <Label htmlFor="reason" className="text-white">
                  Why do you believe this is fake news? <span className="text-[#FF5252]">*</span>
                </Label>
                <Textarea
                  id="reason"
                  name="reason"
                  value={formData.reason}
                  onChange={handleChange}
                  placeholder="Explain why you think this content is misleading or false"
                  className="bg-gray-700 border-gray-600 text-white min-h-[100px]"
                  required
                />
              </div>

              <div>
                <Label className="text-white mb-2 block">Evidence (Optional)</Label>
                <FileUpload onFileSelect={handleFileSelect} accept="image/*" label="Upload screenshots or evidence" />
              </div>
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#8b5cf6] hover:bg-[#8b5cf6]/90 text-white py-6"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Submitting...
                </>
              ) : (
                "Submit Report"
              )}
            </Button>
          </form>
        )}
        {/* Success Notification */}
        {showSuccessNotification && (
          <div className="fixed bottom-4 right-4 bg-[#8b5cf6] text-white px-4 py-3 rounded-md shadow-lg z-50 flex items-center">
            <CheckCircle className="mr-2" size={18} />
            Report submitted successfully! Thank you for your contribution.
          </div>
        )}
      </CardContent>
    </Card>
  )
}

export default ReportForm

