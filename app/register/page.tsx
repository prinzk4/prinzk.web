"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Loader2 } from "lucide-react"
import { Chrome, Apple } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { SocialLogin } from "@/components/social-login"
import { ToastProvider, Toaster } from "@/components/ui/use-toast"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"

type FormErrors = {
  firstName?: string
  lastName?: string
  email?: string
  password?: string
  confirmPassword?: string
  terms?: string
  _form?: string
}

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    terms: false,
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [socialDialog, setSocialDialog] = useState<{ open: boolean; provider: "google" | "apple" } | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))
  }

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required"
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }

    if (!formData.password) {
      newErrors.password = "Password is required"
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters"
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match"
    }

    if (!formData.terms) {
      newErrors.terms = "You must agree to the terms and conditions"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // Show success message
    setIsSuccess(true)
    setIsSubmitting(false)
  }

  const handleSocialLogin = (provider: "google" | "apple") => {
    setSocialDialog({ open: true, provider })
  }

  const handleSocialLoginSuccess = (email: string, provider: string) => {
    // In a real app, you would handle the successful login here
    // For now, we'll just close the dialog and show success
    setSocialDialog(null)
    setFormData((prev) => ({ ...prev, email }))

    // Simulate API call
    setTimeout(() => {
      setIsSuccess(true)
    }, 500)
  }

  return (
    <ToastProvider>
      <div className="min-h-screen flex flex-col bg-gradient-to-b from-black to-gray-900 text-white">
        <div className="container flex flex-col items-center justify-center flex-1 px-4 py-12">
          <Link href="/" className="absolute top-4 left-4 text-amber-300 hover:text-amber-400 flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Home</span>
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

            <Card className="border-teal-500/20 bg-gray-900/60 backdrop-blur-sm">
              <CardHeader className="space-y-1 text-center">
                <CardTitle className="text-2xl font-bold tracking-tight text-teal-400">Begin Your Journey</CardTitle>
                <CardDescription className="text-gray-300">
                  Create your account and harness the power of the seas
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {isSuccess ? (
                  <div className="p-4 bg-green-500/10 border border-green-500/50 rounded text-center">
                    <h3 className="text-xl font-bold text-green-400 mb-2">Registration Successful!</h3>
                    <p className="text-gray-300 mb-4">Your account has been created.</p>
                    <Link href="/login">
                      <Button className="bg-teal-500 hover:bg-teal-600 text-black">Proceed to Login</Button>
                    </Link>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {errors._form && (
                      <div className="p-3 bg-red-500/10 border border-red-500/50 rounded text-red-500 text-sm">
                        <p>{errors._form}</p>
                      </div>
                    )}

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="first-name" className="text-sm font-medium leading-none text-gray-200">
                          First Name
                        </label>
                        <Input
                          id="first-name"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          placeholder="Poseidon"
                          className="bg-gray-800 border-gray-700 text-white"
                        />
                        {errors.firstName && <p className="text-sm text-red-500">{errors.firstName}</p>}
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="last-name" className="text-sm font-medium leading-none text-gray-200">
                          Last Name
                        </label>
                        <Input
                          id="last-name"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          placeholder="Neptune"
                          className="bg-gray-800 border-gray-700 text-white"
                        />
                        {errors.lastName && <p className="text-sm text-red-500">{errors.lastName}</p>}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium leading-none text-gray-200">
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="poseidon@ocean.com"
                        className="bg-gray-800 border-gray-700 text-white"
                      />
                      {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="password" className="text-sm font-medium leading-none text-gray-200">
                        Password
                      </label>
                      <Input
                        id="password"
                        name="password"
                        type="password"
                        value={formData.password}
                        onChange={handleChange}
                        className="bg-gray-800 border-gray-700 text-white"
                      />
                      {errors.password && <p className="text-sm text-red-500">{errors.password}</p>}
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="confirm-password" className="text-sm font-medium leading-none text-gray-200">
                        Confirm Password
                      </label>
                      <Input
                        id="confirm-password"
                        name="confirmPassword"
                        type="password"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        className="bg-gray-800 border-gray-700 text-white"
                      />
                      {errors.confirmPassword && <p className="text-sm text-red-500">{errors.confirmPassword}</p>}
                    </div>

                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="terms"
                        name="terms"
                        checked={formData.terms}
                        onCheckedChange={(checked) => setFormData((prev) => ({ ...prev, terms: checked === true }))}
                        className="border-gray-700 data-[state=checked]:bg-teal-500"
                      />
                      <label
                        htmlFor="terms"
                        className="text-sm font-medium leading-none text-gray-200 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        I agree to the{" "}
                        <Link href="/terms" className="text-teal-400 hover:text-teal-300">
                          terms and conditions
                        </Link>
                      </label>
                    </div>
                    {errors.terms && <p className="text-sm text-red-500">{errors.terms}</p>}

                    <Button
                      type="submit"
                      className="w-full bg-teal-500 hover:bg-teal-600 text-black"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Creating Account...
                        </>
                      ) : (
                        "Create Your Account"
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
              {!isSuccess && (
                <CardFooter className="flex flex-col space-y-4">
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <span className="w-full border-t border-gray-700" />
                    </div>
                    <div className="relative flex justify-center text-xs">
                      <span className="bg-gray-900 px-2 text-gray-400">Or continue with</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <SocialLogin provider="google" onSuccess={handleSocialLoginSuccess} />
                    <SocialLogin provider="apple" onSuccess={handleSocialLoginSuccess} />
                  </div>
                  <div className="text-center text-sm text-gray-400">
                    Already have an account?{" "}
                    <Link href="/login" className="text-amber-400 hover:text-amber-300">
                      Login
                    </Link>
                  </div>
                </CardFooter>
              )}
            </Card>
          </div>
        </div>

        {/* Social Login Dialog */}
        {socialDialog && (
          <Dialog open={socialDialog.open} onOpenChange={(open) => !open && setSocialDialog(null)}>
            <DialogContent className="sm:max-w-[425px] bg-gray-900 border-gray-700 text-white">
              <DialogHeader>
                <DialogTitle className="text-teal-400">
                  {socialDialog.provider === "google" ? "Google" : "Apple"} Login
                </DialogTitle>
                <DialogDescription className="text-gray-400">
                  Connect with your {socialDialog.provider === "google" ? "Google" : "Apple"} account. We only retain
                  your email and termination access.
                </DialogDescription>
              </DialogHeader>
              <div className="flex flex-col items-center justify-center py-6">
                {socialDialog.provider === "google" ? (
                  <div className="bg-white p-6 rounded-full mb-4">
                    <Chrome className="h-12 w-12 text-[#4285F4]" />
                  </div>
                ) : (
                  <div className="bg-black p-6 rounded-full mb-4">
                    <Apple className="h-12 w-12 text-white" />
                  </div>
                )}
                <p className="text-center text-sm text-gray-300 mb-4">
                  By continuing, you agree to allow IMANU'EL RMG to access your email address only. No other personal
                  information will be collected.
                </p>
                <SocialLogin provider={socialDialog.provider} onSuccess={handleSocialLoginSuccess} className="w-full" />
              </div>
            </DialogContent>
          </Dialog>
        )}
      </div>
      <Toaster />
    </ToastProvider>
  )
}
