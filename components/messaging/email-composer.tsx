"use client"

import type React from "react"

import { useState } from "react"
import { Send, X, Paperclip, Mail, Apple, Chrome } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { toast } from "@/components/ui/use-toast"
import { FileUpload } from "@/components/ui/file-upload"
import { AttachmentPreview, type Attachment } from "@/components/messaging/attachment-preview"

export function EmailComposer() {
  const [isLoading, setIsLoading] = useState(false)
  const [open, setOpen] = useState(false)
  const [showAttachmentDialog, setShowAttachmentDialog] = useState(false)
  const [emailData, setEmailData] = useState({
    to: "",
    subject: "",
    message: "",
    provider: "google",
    priority: "normal",
  })
  const [attachments, setAttachments] = useState<Attachment[]>([])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setEmailData((prev) => ({ ...prev, [name]: value }))
  }

  const handleProviderChange = (value: string) => {
    setEmailData((prev) => ({ ...prev, provider: value }))
  }

  const handlePriorityChange = (value: string) => {
    setEmailData((prev) => ({ ...prev, priority: value }))
  }

  const handleFileSelect = (files: File[]) => {
    const newAttachments: Attachment[] = files.map((file) => {
      const id = Math.random().toString(36).substring(2, 9)
      const isImage = file.type.startsWith("image/")

      const attachment: Attachment = {
        id,
        type: isImage ? "image" : file.type.includes("pdf") ? "pdf" : "document",
        name: file.name,
        size: file.size,
      }

      // Create preview for images
      if (isImage) {
        const reader = new FileReader()
        reader.onload = (e) => {
          if (e.target?.result) {
            setAttachments((prev) => prev.map((a) => (a.id === id ? { ...a, preview: e.target?.result as string } : a)))
          }
        }
        reader.readAsDataURL(file)
      }

      return attachment
    })

    setAttachments((prev) => [...prev, ...newAttachments])
    setShowAttachmentDialog(false)
  }

  const handleLinkAdd = (url: string) => {
    const id = Math.random().toString(36).substring(2, 9)
    const linkName = url.replace(/^https?:\/\//, "").split("/")[0]

    setAttachments((prev) => [
      ...prev,
      {
        id,
        type: "link",
        name: linkName,
        url,
      },
    ])

    setShowAttachmentDialog(false)
  }

  const handleCameraCapture = (imageData: string) => {
    const id = Math.random().toString(36).substring(2, 9)

    setAttachments((prev) => [
      ...prev,
      {
        id,
        type: "camera",
        name: "Camera Photo",
        preview: imageData,
      },
    ])

    setShowAttachmentDialog(false)
  }

  const removeAttachment = (id: string) => {
    setAttachments((prev) => prev.filter((attachment) => attachment.id !== id))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Validate form
    if (!emailData.to || !emailData.subject || !emailData.message) {
      toast({
        title: "Missing information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      })
      setIsLoading(false)
      return
    }

    // Simulate sending email
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // Show success message
    toast({
      title: "Email sent successfully",
      description: `Your message has been sent via ${
        emailData.provider === "google" ? "Google" : "Apple"
      } Mail with ${attachments.length} attachment(s).`,
    })

    // Reset form and close dialog
    setEmailData({
      to: "",
      subject: "",
      message: "",
      provider: "google",
      priority: "normal",
    })
    setAttachments([])
    setIsLoading(false)
    setOpen(false)
  }

  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button className="bg-teal-500 hover:bg-teal-600 text-black w-full">
            <Mail className="mr-2 h-4 w-4" />
            Compose New Message
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[600px] bg-gray-900 border-gray-700 text-white p-0 overflow-hidden">
          <div className="bg-gray-800 p-4 border-b border-gray-700">
            <DialogTitle className="text-teal-400">Compose New Message</DialogTitle>
            <DialogDescription className="text-gray-400">
              Create and send an email through your connected accounts.
            </DialogDescription>
          </div>

          <Tabs defaultValue="google" onValueChange={handleProviderChange} className="w-full">
            <TabsList className="grid grid-cols-2 bg-gray-800 rounded-none border-b border-gray-700">
              <TabsTrigger
                value="google"
                className="rounded-none data-[state=active]:bg-blue-600 data-[state=active]:text-white"
              >
                <Chrome className="mr-2 h-4 w-4" />
                Google Mail
              </TabsTrigger>
              <TabsTrigger
                value="apple"
                className="rounded-none data-[state=active]:bg-gray-600 data-[state=active]:text-white"
              >
                <Apple className="mr-2 h-4 w-4" />
                Apple Mail
              </TabsTrigger>
            </TabsList>

            <TabsContent value="google" className="mt-0 p-4">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="to" className="text-sm font-medium text-gray-300">
                    To:
                  </label>
                  <Input
                    id="to"
                    name="to"
                    value={emailData.to}
                    onChange={handleChange}
                    placeholder="recipient@example.com"
                    className="bg-gray-800 border-gray-700 text-white"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-gray-300">
                    Subject:
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={emailData.subject}
                    onChange={handleChange}
                    placeholder="Message subject"
                    className="bg-gray-800 border-gray-700 text-white"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-gray-300">
                    Message:
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={emailData.message}
                    onChange={handleChange}
                    placeholder="Type your message here..."
                    className="min-h-[200px] bg-gray-800 border-gray-700 text-white"
                  />
                </div>

                <AttachmentPreview attachments={attachments} onRemove={removeAttachment} />

                <div className="flex items-center gap-2">
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    className="border-gray-700 text-gray-300"
                    onClick={() => setShowAttachmentDialog(true)}
                  >
                    <Paperclip className="h-4 w-4 mr-1" />
                    Attach
                  </Button>
                  <Select defaultValue={emailData.priority} onValueChange={handlePriorityChange}>
                    <SelectTrigger className="w-32 bg-gray-800 border-gray-700 text-white">
                      <SelectValue placeholder="Priority" />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-800 border-gray-700 text-white">
                      <SelectItem value="high">High</SelectItem>
                      <SelectItem value="normal">Normal</SelectItem>
                      <SelectItem value="low">Low</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <DialogFooter className="pt-4 border-t border-gray-700">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setOpen(false)}
                    className="border-gray-700 text-gray-300"
                  >
                    <X className="h-4 w-4 mr-1" />
                    Cancel
                  </Button>
                  <Button type="submit" disabled={isLoading} className="bg-blue-600 hover:bg-blue-700 text-white">
                    {isLoading ? (
                      <div className="flex items-center">
                        <svg
                          className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Sending...
                      </div>
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-1" />
                        Send with Google
                      </>
                    )}
                  </Button>
                </DialogFooter>
              </form>
            </TabsContent>

            <TabsContent value="apple" className="mt-0 p-4">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="to-apple" className="text-sm font-medium text-gray-300">
                    To:
                  </label>
                  <Input
                    id="to-apple"
                    name="to"
                    value={emailData.to}
                    onChange={handleChange}
                    placeholder="recipient@example.com"
                    className="bg-gray-800 border-gray-700 text-white"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject-apple" className="text-sm font-medium text-gray-300">
                    Subject:
                  </label>
                  <Input
                    id="subject-apple"
                    name="subject"
                    value={emailData.subject}
                    onChange={handleChange}
                    placeholder="Message subject"
                    className="bg-gray-800 border-gray-700 text-white"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message-apple" className="text-sm font-medium text-gray-300">
                    Message:
                  </label>
                  <Textarea
                    id="message-apple"
                    name="message"
                    value={emailData.message}
                    onChange={handleChange}
                    placeholder="Type your message here..."
                    className="min-h-[200px] bg-gray-800 border-gray-700 text-white"
                  />
                </div>

                <AttachmentPreview attachments={attachments} onRemove={removeAttachment} />

                <div className="flex items-center gap-2">
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    className="border-gray-700 text-gray-300"
                    onClick={() => setShowAttachmentDialog(true)}
                  >
                    <Paperclip className="h-4 w-4 mr-1" />
                    Attach
                  </Button>
                  <Select defaultValue={emailData.priority} onValueChange={handlePriorityChange}>
                    <SelectTrigger className="w-32 bg-gray-800 border-gray-700 text-white">
                      <SelectValue placeholder="Priority" />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-800 border-gray-700 text-white">
                      <SelectItem value="high">High</SelectItem>
                      <SelectItem value="normal">Normal</SelectItem>
                      <SelectItem value="low">Low</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <DialogFooter className="pt-4 border-t border-gray-700">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setOpen(false)}
                    className="border-gray-700 text-gray-300"
                  >
                    <X className="h-4 w-4 mr-1" />
                    Cancel
                  </Button>
                  <Button type="submit" disabled={isLoading} className="bg-gray-600 hover:bg-gray-700 text-white">
                    {isLoading ? (
                      <div className="flex items-center">
                        <svg
                          className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Sending...
                      </div>
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-1" />
                        Send with Apple
                      </>
                    )}
                  </Button>
                </DialogFooter>
              </form>
            </TabsContent>
          </Tabs>
        </DialogContent>
      </Dialog>

      <Dialog open={showAttachmentDialog} onOpenChange={setShowAttachmentDialog}>
        <DialogContent className="sm:max-w-[600px] bg-gray-900 border-gray-700 text-white">
          <DialogHeader>
            <DialogTitle className="text-teal-400">Add Attachment</DialogTitle>
            <DialogDescription className="text-gray-400">
              Upload files, add links, or capture photos to attach to your email.
            </DialogDescription>
          </DialogHeader>

          <FileUpload onFileSelect={handleFileSelect} onLinkAdd={handleLinkAdd} onCameraCapture={handleCameraCapture} />

          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              onClick={() => setShowAttachmentDialog(false)}
              className="border-gray-700 text-gray-300"
            >
              Cancel
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}
