"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function MobileMenu() {
  const [open, setOpen] = useState(false)

  const handleLinkClick = () => {
    setOpen(false)
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="bg-gray-900 text-white border-gray-800">
        <div className="flex flex-col space-y-6 mt-8">
          <Link href="#features" className="text-lg font-medium hover:text-amber-300" onClick={handleLinkClick}>
            Features
          </Link>
          <Link href="#about" className="text-lg font-medium hover:text-amber-300" onClick={handleLinkClick}>
            About
          </Link>
          <Link href="#testimonials" className="text-lg font-medium hover:text-amber-300" onClick={handleLinkClick}>
            Testimonials
          </Link>
          <Link href="#contact" className="text-lg font-medium hover:text-amber-300" onClick={handleLinkClick}>
            Contact
          </Link>
          <div className="pt-4 border-t border-gray-800">
            <Link href="/login" onClick={handleLinkClick}>
              <Button variant="outline" className="w-full mb-2 border-gray-700 text-white hover:bg-gray-800">
                Log in
              </Button>
            </Link>
            <Link href="/register" onClick={handleLinkClick}>
              <Button className="w-full bg-amber-500 hover:bg-amber-600 text-black">Get Started</Button>
            </Link>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
