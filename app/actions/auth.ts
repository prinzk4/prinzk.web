"use server"

import { cookies } from "next/headers"
import { redirect } from "next/navigation"

export type AuthError = {
  email?: string[]
  password?: string[]
  _form?: string[]
}

export async function login(prevState: any, formData: FormData) {
  // Add a small delay to simulate network request
  await new Promise((resolve) => setTimeout(resolve, 1000))

  const email = formData.get("email") as string
  const password = formData.get("password") as string

  // Validate form inputs
  const errors: AuthError = {}

  if (!email) {
    errors.email = ["Email is required"]
  } else if (!/^\S+@\S+\.\S+$/.test(email)) {
    errors.email = ["Please enter a valid email address"]
  }

  if (!password) {
    errors.password = ["Password is required"]
  } else if (password.length < 6) {
    errors.password = ["Password must be at least 6 characters"]
  }

  // Return errors if validation fails
  if (Object.keys(errors).length > 0) {
    return { errors, success: false }
  }

  try {
    // This is where you would normally connect to your authentication service
    // For demo purposes, we'll just check for a specific test account
    if (email === "poseidon@ocean.com" && password === "trident123") {
      // Set a cookie to simulate authentication
      cookies().set("auth-token", "demo-token-" + Date.now(), {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 60 * 60 * 24 * 7, // 1 week
        path: "/",
      })

      // Redirect to dashboard on successful login
      redirect("/dashboard")
    }

    // If credentials don't match our test account
    return {
      errors: {
        _form: ["Invalid email or password"],
      },
      success: false,
    }
  } catch (error) {
    return {
      errors: {
        _form: ["An error occurred during login. Please try again."],
      },
      success: false,
    }
  }
}

export async function loginWithProvider(provider: "google" | "apple") {
  "use server"

  // This is a placeholder for social login implementation
  // In a real application, you would redirect to the OAuth provider

  // For demo purposes, we'll set a cookie and redirect to dashboard
  cookies().set("auth-token", `demo-${provider}-token-${Date.now()}`, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 24 * 7, // 1 week
    path: "/",
  })

  redirect("/dashboard")
}
