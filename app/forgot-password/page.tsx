"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Loader2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("")
  const [error, setError] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Reset states
    setError("")
    setIsSubmitting(true)

    // Validate email
    if (!email) {
      setError("Email is required")
      setIsSubmitting(false)
      return
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setError("Please enter a valid email address")
      setIsSubmitting(false)
      return
    }

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // Show success message
    setIsSuccess(true)
    setIsSubmitting(false)
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-black to-gray-900 text-white">
      <div className="container flex flex-col items-center justify-center flex-1 px-4 py-12">
        <Link
          href="/login"
          className="absolute top-4 left-4 text-amber-300 hover:text-amber-400 flex items-center gap-2"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Login</span>
        </Link>

        <div className="w-full max-w-md">
          <div className="flex justify-center mb-6">
            <Image
              src="/images/imanu-el-logo.png"
              alt="IMANU'EL RMG Logo"
              width={80}
              height={80}
              className="h-20 w-auto"
            />
          </div>

          <Card className="border-amber-500/20 bg-gray-900/60 backdrop-blur-sm">
            <CardHeader className="space-y-1 text-center">
              <CardTitle className="text-2xl font-bold tracking-tight text-amber-300">Recover Your Access</CardTitle>
              <CardDescription className="text-gray-300">
                Enter your email and we'll send you a reset link
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {isSuccess ? (
                <div className="p-3 bg-green-500/10 border border-green-500/50 rounded text-green-400 text-sm">
                  <p>Reset link sent! Check your email for instructions to reset your password.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {error && (
                    <div className="p-3 bg-red-500/10 border border-red-500/50 rounded text-red-500 text-sm">
                      <p>{error}</p>
                    </div>
                  )}
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium leading-none text-gray-200">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="poseidon@ocean.com"
                      className="bg-gray-800 border-gray-700 text-white"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-amber-500 hover:bg-amber-600 text-black"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      "Send Reset Link"
                    )}
                  </Button>
                </form>
              )}
            </CardContent>
            <CardFooter className="flex justify-center">
              <div className="text-center text-sm text-gray-400">
                Remember your password?{" "}
                <Link href="/login" className="text-teal-400 hover:text-teal-300">
                  Back to login
                </Link>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}
