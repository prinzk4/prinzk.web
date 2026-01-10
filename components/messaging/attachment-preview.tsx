"use client"

import { X, FileText, ImageIcon, FileArchive, Link } from "lucide-react"
import { Button } from "@/components/ui/button"

export type Attachment = {
  id: string
  type: "image" | "document" | "pdf" | "link" | "camera"
  name: string
  size?: number
  url?: string
  preview?: string
}

interface AttachmentPreviewProps {
  attachments: Attachment[]
  onRemove: (id: string) => void
}

export function AttachmentPreview({ attachments, onRemove }: AttachmentPreviewProps) {
  if (attachments.length === 0) return null

  const formatFileSize = (bytes?: number) => {
    if (!bytes) return ""
    if (bytes < 1024) return `${bytes} B`
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`
  }

  const getIcon = (type: Attachment["type"]) => {
    switch (type) {
      case "image":
      case "camera":
        return <ImageIcon className="h-4 w-4 text-blue-400" />
      case "document":
        return <FileText className="h-4 w-4 text-green-400" />
      case "pdf":
        return <FileArchive className="h-4 w-4 text-red-400" />
      case "link":
        return <Link className="h-4 w-4 text-purple-400" />
    }
  }

  return (
    <div className="space-y-2 mt-4">
      <h4 className="text-sm font-medium text-gray-300">Attachments ({attachments.length})</h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {attachments.map((attachment) => (
          <div
            key={attachment.id}
            className="flex items-center p-2 bg-gray-800 border border-gray-700 rounded-md group relative"
          >
            <div className="flex-shrink-0 mr-2">
              {attachment.type === "image" || attachment.type === "camera" ? (
                attachment.preview ? (
                  <div className="w-10 h-10 rounded-md overflow-hidden bg-gray-700">
                    <img
                      src={attachment.preview || "/placeholder.svg"}
                      alt={attachment.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ) : (
                  getIcon(attachment.type)
                )
              ) : (
                getIcon(attachment.type)
              )}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-300 truncate">{attachment.name}</p>
              {attachment.type === "link" ? (
                <a
                  href={attachment.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-blue-400 hover:underline truncate block"
                >
                  {attachment.url}
                </a>
              ) : (
                <p className="text-xs text-gray-500">{formatFileSize(attachment.size)}</p>
              )}
            </div>
            <Button
              type="button"
              variant="ghost"
              size="sm"
              className="opacity-0 group-hover:opacity-100 transition-opacity absolute right-1 top-1 h-6 w-6 p-0"
              onClick={() => onRemove(attachment.id)}
            >
              <X className="h-4 w-4" />
              <span className="sr-only">Remove</span>
            </Button>
          </div>
        ))}
      </div>
    </div>
  )
}
