"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { useFormState, useFormStatus } from "react-dom"
import { ArrowLeft, Loader2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { login, loginWithProvider } from "../actions/auth"

function LoginButton() {
  const { pending } = useFormStatus()

  return (
    <Button className="w-full bg-amber-500 hover:bg-amber-600 text-black" disabled={pending}>
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Logging in...
        </>
      ) : (
        "Login to Your Account"
      )}
    </Button>
  )
}

function SocialLoginButton({ provider }: { provider: "google" | "apple" }) {
  const [isPending, setIsPending] = useState(false)

  const handleClick = async () => {
    setIsPending(true)
    // In a real implementation, this would be handled differently
    // For demo purposes, we'll just call our server action
    await loginWithProvider(provider)
  }

  return (
    <Button
      variant="outline"
      className="border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white"
      disabled={isPending}
      onClick={handleClick}
    >
      {isPending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
      {provider === "google" ? "Google" : "Apple"}
    </Button>
  )
}

export default function LoginPage() {
  const [state, formAction] = useFormState(login, { errors: {}, success: false })

  return (
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

          <Card className="border-amber-500/20 bg-gray-900/60 backdrop-blur-sm">
            <CardHeader className="space-y-1 text-center">
              <CardTitle className="text-2xl font-bold tracking-tight text-amber-300">Command Your Domain</CardTitle>
              <CardDescription className="text-gray-300">Enter your credentials to access your realm</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {state.errors?._form ? (
                <div className="p-3 bg-red-500/10 border border-red-500/50 rounded text-red-500 text-sm">
                  {state.errors._form.map((error, i) => (
                    <p key={i}>{error}</p>
                  ))}
                </div>
              ) : null}

              <form action={formAction} className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium leading-none text-gray-200">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="poseidon@ocean.com"
                    className="bg-gray-800 border-gray-700 text-white"
                    aria-describedby={state.errors?.email ? "email-error" : undefined}
                  />
                  {state.errors?.email ? (
                    <p id="email-error" className="text-sm text-red-500">
                      {state.errors.email[0]}
                    </p>
                  ) : null}
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <label htmlFor="password" className="text-sm font-medium leading-none text-gray-200">
                      Password
                    </label>
                    <Link href="/forgot-password" className="text-sm text-teal-400 hover:text-teal-300">
                      Forgot password?
                    </Link>
                  </div>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    className="bg-gray-800 border-gray-700 text-white"
                    aria-describedby={state.errors?.password ? "password-error" : undefined}
                  />
                  {state.errors?.password ? (
                    <p id="password-error" className="text-sm text-red-500">
                      {state.errors.password[0]}
                    </p>
                  ) : null}
                </div>
                <LoginButton />
              </form>
            </CardContent>
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
                <SocialLoginButton provider="google" />
                <SocialLoginButton provider="apple" />
              </div>
              <div className="text-center text-sm text-gray-400">
                Don't have an account?{" "}
                <Link href="/register" className="text-teal-400 hover:text-teal-300">
                  Register
                </Link>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}
