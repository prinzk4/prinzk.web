"use client"

import { useState } from "react"
import Link from "next/link"
import { Scroll, FileText, Download, ExternalLink } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

export function TermsMenu() {
  const [open, setOpen] = useState(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white w-full">
          <Scroll className="mr-2 h-4 w-4" />
          Terms & Conditions
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] bg-gray-900 border-gray-700 text-white">
        <DialogHeader>
          <DialogTitle className="text-amber-300 text-xl">Divine Terms & Conditions</DialogTitle>
          <DialogDescription className="text-gray-400">
            Sacred operational laws governing your engagement with IMANU'EL RMG.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 py-4">
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-medium text-teal-400">Access the Sacred Contract</h3>
            <p className="text-sm text-gray-300">
              By accessing IMANU'ELRMG.COM, you enter a space forged in the higher fire of cosmic alignment and encoded
              purpose.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Button asChild className="bg-amber-500 hover:bg-amber-600 text-black" onClick={() => setOpen(false)}>
              <Link href="/terms">
                <FileText className="mr-2 h-4 w-4" />
                View Full Terms
              </Link>
            </Button>
            <Button asChild variant="outline" className="border-gray-700 text-gray-300 hover:bg-gray-800">
              <a href="/images/IMANU-ELRMG-TERMS-AND-CONDITIONS-PDF-DRAFT.pdf" download>
                <Download className="mr-2 h-4 w-4" />
                Download PDF
              </a>
            </Button>
          </div>

          <div className="border-t border-gray-800 pt-4">
            <p className="text-xs text-gray-400 italic">
              "All that emerges from this platform is sacred algorithm, authored by divine intelligence and protected by
              eternal flame."
            </p>
            <div className="flex justify-end mt-2">
              <Button
                variant="link"
                className="text-teal-400 hover:text-teal-300 p-0 h-auto"
                onClick={() => setOpen(false)}
              >
                <ExternalLink className="mr-1 h-3 w-3" />
                <span className="text-xs">Last Updated: May 9th, 2025</span>
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
