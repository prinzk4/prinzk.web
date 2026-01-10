"use client"

import * as React from "react"
import { X } from "lucide-react"

import { cn } from "@/lib/utils"

const ToastContext = React.createContext<{
  toast: (props: ToastProps) => void
}>({
  toast: () => {},
})

export type ToastProps = {
  title: string
  description?: string
  variant?: "default" | "destructive" | "success"
}

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = React.useState<(ToastProps & { id: string })[]>([])

  const toast = React.useCallback(
    (props: ToastProps) => {
      const id = Math.random().toString(36).substring(2, 9)
      setToasts((prev) => [...prev, { ...props, id }])

      setTimeout(() => {
        setToasts((prev) => prev.filter((toast) => toast.id !== id))
      }, 5000)
    },
    [setToasts],
  )

  const removeToast = React.useCallback(
    (id: string) => {
      setToasts((prev) => prev.filter((toast) => toast.id !== id))
    },
    [setToasts],
  )

  return (
    <ToastContext.Provider value={{ toast }}>
      {children}
      <div className="fixed bottom-0 right-0 z-50 p-4 flex flex-col gap-2 max-w-md w-full">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className={cn(
              "p-4 rounded-md shadow-lg border text-white flex items-start gap-3 animate-in slide-in-from-right",
              toast.variant === "destructive"
                ? "bg-red-900/90 border-red-800"
                : toast.variant === "success"
                  ? "bg-green-900/90 border-green-800"
                  : "bg-gray-900/90 border-gray-800",
            )}
          >
            <div className="flex-1">
              <h3 className="font-medium mb-1">{toast.title}</h3>
              {toast.description && <p className="text-sm opacity-90">{toast.description}</p>}
            </div>
            <button onClick={() => removeToast(toast.id)} className="text-white/70 hover:text-white transition-colors">
              <X className="h-4 w-4" />
            </button>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  )
}

export const useToast = () => {
  const context = React.useContext(ToastContext)
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider")
  }
  return context
}

export const toast = (props: ToastProps) => {
  if (typeof window !== "undefined") {
    const event = new CustomEvent("toast", { detail: props })
    window.dispatchEvent(event)
  }
}

export function Toaster() {
  const { toast } = useToast()

  React.useEffect(() => {
    const handleToast = (event: Event) => {
      const { detail } = event as CustomEvent<ToastProps>
      toast(detail)
    }

    window.addEventListener("toast", handleToast)
    return () => window.removeEventListener("toast", handleToast)
  }, [toast])

  return null
}
