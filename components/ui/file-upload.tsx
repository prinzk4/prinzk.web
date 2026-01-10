"use client"

import type React from "react"

import { useState, useRef } from "react"
import { FileText, ImageIcon, FileArchive, Link, Upload, Camera } from "lucide-react"
import { Button } from "@/components/ui/button"

type FileType = "image" | "document" | "pdf" | "link" | "camera"

interface FileUploadProps {
  onFileSelect: (files: File[]) => void
  onLinkAdd: (link: string) => void
  onCameraCapture: (imageData: string) => void
  accept?: string
  multiple?: boolean
}

export function FileUpload({
  onFileSelect,
  onLinkAdd,
  onCameraCapture,
  accept = ".png,.jpg,.jpeg,.pdf,.docx",
  multiple = true,
}: FileUploadProps) {
  const [activeTab, setActiveTab] = useState<FileType>("image")
  const [linkUrl, setLinkUrl] = useState("")
  const [isCapturing, setIsCapturing] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const filesArray = Array.from(e.target.files)
      onFileSelect(filesArray)
      // Reset the input value so the same file can be selected again
      e.target.value = ""
    }
  }

  const handleLinkSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (linkUrl.trim()) {
      onLinkAdd(linkUrl)
      setLinkUrl("")
    }
  }

  const startCamera = async () => {
    setIsCapturing(true)
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true })
      if (videoRef.current) {
        videoRef.current.srcObject = stream
      }
    } catch (err) {
      console.error("Error accessing camera:", err)
      setIsCapturing(false)
    }
  }

  const capturePhoto = () => {
    if (videoRef.current && canvasRef.current) {
      const video = videoRef.current
      const canvas = canvasRef.current
      const context = canvas.getContext("2d")

      // Set canvas dimensions to match video
      canvas.width = video.videoWidth
      canvas.height = video.videoHeight

      // Draw the current video frame on the canvas
      context?.drawImage(video, 0, 0, canvas.width, canvas.height)

      // Convert canvas to data URL
      const imageData = canvas.toDataURL("image/png")
      onCameraCapture(imageData)

      // Stop the camera stream
      const stream = video.srcObject as MediaStream
      if (stream) {
        stream.getTracks().forEach((track) => track.stop())
      }
      setIsCapturing(false)
    }
  }

  const stopCamera = () => {
    if (videoRef.current) {
      const stream = videoRef.current.srcObject as MediaStream
      if (stream) {
        stream.getTracks().forEach((track) => track.stop())
      }
      setIsCapturing(false)
    }
  }

  const getTabIcon = (type: FileType) => {
    switch (type) {
      case "image":
        return <ImageIcon className="h-4 w-4" />
      case "document":
        return <FileText className="h-4 w-4" />
      case "pdf":
        return <FileArchive className="h-4 w-4" />
      case "link":
        return <Link className="h-4 w-4" />
      case "camera":
        return <Camera className="h-4 w-4" />
    }
  }

  const getAcceptByType = (type: FileType) => {
    switch (type) {
      case "image":
        return ".png,.jpg,.jpeg,.gif,.webp"
      case "document":
        return ".doc,.docx"
      case "pdf":
        return ".pdf"
      default:
        return accept
    }
  }

  return (
    <div className="w-full bg-gray-800 border border-gray-700 rounded-md overflow-hidden">
      <div className="flex border-b border-gray-700">
        <button
          type="button"
          onClick={() => setActiveTab("image")}
          className={`flex items-center justify-center px-4 py-2 text-sm ${
            activeTab === "image" ? "bg-gray-700 text-white" : "text-gray-400 hover:bg-gray-700/50"
          }`}
        >
          <ImageIcon className="h-4 w-4 mr-2" />
          Images
        </button>
        <button
          type="button"
          onClick={() => setActiveTab("document")}
          className={`flex items-center justify-center px-4 py-2 text-sm ${
            activeTab === "document" ? "bg-gray-700 text-white" : "text-gray-400 hover:bg-gray-700/50"
          }`}
        >
          <FileText className="h-4 w-4 mr-2" />
          Documents
        </button>
        <button
          type="button"
          onClick={() => setActiveTab("pdf")}
          className={`flex items-center justify-center px-4 py-2 text-sm ${
            activeTab === "pdf" ? "bg-gray-700 text-white" : "text-gray-400 hover:bg-gray-700/50"
          }`}
        >
          <FileArchive className="h-4 w-4 mr-2" />
          PDF
        </button>
        <button
          type="button"
          onClick={() => setActiveTab("link")}
          className={`flex items-center justify-center px-4 py-2 text-sm ${
            activeTab === "link" ? "bg-gray-700 text-white" : "text-gray-400 hover:bg-gray-700/50"
          }`}
        >
          <Link className="h-4 w-4 mr-2" />
          Link
        </button>
        <button
          type="button"
          onClick={() => setActiveTab("camera")}
          className={`flex items-center justify-center px-4 py-2 text-sm ${
            activeTab === "camera" ? "bg-gray-700 text-white" : "text-gray-400 hover:bg-gray-700/50"
          }`}
        >
          <Camera className="h-4 w-4 mr-2" />
          Camera
        </button>
      </div>

      <div className="p-4">
        {activeTab === "link" ? (
          <form onSubmit={handleLinkSubmit} className="flex gap-2">
            <input
              type="url"
              value={linkUrl}
              onChange={(e) => setLinkUrl(e.target.value)}
              placeholder="Paste or type a link"
              className="flex-1 px-3 py-2 bg-gray-900 border border-gray-700 rounded-md text-white text-sm"
            />
            <Button type="submit" size="sm" disabled={!linkUrl.trim()}>
              Add Link
            </Button>
          </form>
        ) : activeTab === "camera" ? (
          <div className="flex flex-col items-center">
            {isCapturing ? (
              <div className="space-y-4">
                <div className="relative w-full max-w-md mx-auto border-2 border-gray-700 rounded-md overflow-hidden">
                  <video ref={videoRef} autoPlay className="w-full" />
                </div>
                <div className="flex justify-center gap-2">
                  <Button onClick={capturePhoto} size="sm" className="bg-teal-500 hover:bg-teal-600 text-black">
                    Capture
                  </Button>
                  <Button onClick={stopCamera} size="sm" variant="outline" className="border-gray-700 text-gray-300">
                    Cancel
                  </Button>
                </div>
                <canvas ref={canvasRef} className="hidden" />
              </div>
            ) : (
              <Button onClick={startCamera} className="bg-gray-700 hover:bg-gray-600">
                <Camera className="h-4 w-4 mr-2" />
                Start Camera
              </Button>
            )}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center p-6 border-2 border-dashed border-gray-700 rounded-md">
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              accept={getAcceptByType(activeTab)}
              multiple={multiple}
              className="hidden"
            />
            {getTabIcon(activeTab)}
            <p className="mt-2 text-sm text-gray-400">
              {activeTab === "image"
                ? "Upload PNG, JPG, or GIF files"
                : activeTab === "document"
                  ? "Upload DOC or DOCX files"
                  : "Upload PDF files"}
            </p>
            <Button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="mt-4 bg-gray-700 hover:bg-gray-600"
            >
              <Upload className="h-4 w-4 mr-2" />
              Select {activeTab === "image" ? "Images" : activeTab === "document" ? "Documents" : "PDFs"}
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
