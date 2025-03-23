"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Upload, X, Image } from "lucide-react"

interface FileUploadProps {
  onFileSelect: (file: File) => void
  accept?: string
  maxSize?: number // in MB
  label?: string
}

const FileUpload = ({
  onFileSelect,
  accept = "image/*",
  maxSize = 5, // 5MB default
  label = "Upload an image to verify",
}: FileUploadProps) => {
  const [dragActive, setDragActive] = useState(false)
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [preview, setPreview] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  const inputRef = useRef<HTMLInputElement>(null)

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()

    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true)
    } else if (e.type === "dragleave") {
      setDragActive(false)
    }
  }

  const validateFile = (file: File): boolean => {
    // Check file type
    if (!file.type.match(accept.replace("*", ""))) {
      setError(`Invalid file type. Please upload ${accept.replace("*", "")} files.`)
      return false
    }

    // Check file size
    if (file.size > maxSize * 1024 * 1024) {
      setError(`File is too large. Maximum size is ${maxSize}MB.`)
      return false
    }

    setError(null)
    return true
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0]
      handleFile(file)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()

    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]
      handleFile(file)
    }
  }

  const handleFile = (file: File) => {
    if (validateFile(file)) {
      setSelectedFile(file)
      onFileSelect(file)

      // Create preview for images
      if (file.type.startsWith("image/")) {
        const reader = new FileReader()
        reader.onloadend = () => {
          setPreview(reader.result as string)
        }
        reader.readAsDataURL(file)
      } else {
        setPreview(null)
      }
    }
  }

  const removeFile = () => {
    setSelectedFile(null)
    setPreview(null)
    if (inputRef.current) {
      inputRef.current.value = ""
    }
  }

  const openFileDialog = () => {
    if (inputRef.current) {
      inputRef.current.click()
    }
  }

  return (
    <div className="w-full">
      <input ref={inputRef} type="file" accept={accept} onChange={handleChange} className="hidden" />

      {!selectedFile ? (
        <Card
          className={`border-2 border-dashed ${
            dragActive ? "border-[#00C853]" : "border-gray-600"
          } bg-gray-800 hover:border-gray-500 transition-colors cursor-pointer`}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
          onClick={openFileDialog}
        >
          <CardContent className="flex flex-col items-center justify-center py-12">
            <div className="w-16 h-16 rounded-full bg-gray-700 flex items-center justify-center mb-4">
              {accept.includes("image") ? (
                <Image size={32} className="text-gray-400" />
              ) : (
                <Upload size={32} className="text-gray-400" />
              )}
            </div>
            <p className="text-lg font-medium text-white mb-2">{label}</p>
            <p className="text-sm text-gray-400 mb-4">Drag & drop or click to browse</p>
            <p className="text-xs text-gray-500">
              Supported formats: {accept.replace("image/", "").replace("*", "all images")} (Max: {maxSize}MB)
            </p>
            {error && <p className="text-sm text-[#FF5252] mt-2">{error}</p>}
          </CardContent>
        </Card>
      ) : (
        <Card className="bg-gray-800 border-gray-700">
          <CardContent className="p-4">
            <div className="flex items-center">
              {preview ? (
                <div className="w-16 h-16 mr-4 rounded overflow-hidden">
                  <img src={preview || "/placeholder.svg"} alt="Preview" className="w-full h-full object-cover" />
                </div>
              ) : (
                <div className="w-16 h-16 mr-4 rounded bg-gray-700 flex items-center justify-center">
                  <Upload size={24} className="text-gray-400" />
                </div>
              )}
              <div className="flex-1">
                <p className="text-white font-medium truncate">{selectedFile.name}</p>
                <p className="text-sm text-gray-400">{(selectedFile.size / (1024 * 1024)).toFixed(2)} MB</p>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={(e) => {
                  e.stopPropagation()
                  removeFile()
                }}
                className="text-gray-400 hover:text-white"
              >
                <X size={20} />
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}

export default FileUpload

