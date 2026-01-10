import Image from "next/image"
import Link from "next/link"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import { LogOut, Mail, BarChart3, FolderKanban } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { EmailComposer } from "@/components/messaging/email-composer"
import { MessageList } from "@/components/messaging/message-list"
import { ToastProvider, Toaster } from "@/components/ui/use-toast"
// Import the TermsMenu component
import { TermsMenu } from "@/components/terms-menu"

export default function DashboardPage() {
  // Check if user is authenticated
  const authToken = cookies().get("auth-token")

  if (!authToken) {
    redirect("/login")
  }

  return (
    <ToastProvider>
      <div className="min-h-screen flex flex-col bg-gradient-to-b from-black to-gray-900 text-white">
        <header className="border-b border-gray-800 bg-gray-900/80 backdrop-blur-sm">
          <div className="container flex h-16 items-center justify-between">
            <div className="flex items-center gap-2">
              <Image
                src="/images/imanu-el-logo.png"
                alt="IMANU'EL RMG Logo"
                width={40}
                height={40}
                className="h-10 w-auto"
              />
              <Link href="/" className="font-serif text-lg font-bold text-amber-300">
                IMANU'EL RMG
              </Link>
            </div>
            <form
              action={async () => {
                "use server"
                cookies().delete("auth-token")
                redirect("/login")
              }}
            >
              <Button variant="ghost" className="text-gray-300 hover:text-white">
                <LogOut className="mr-2 h-4 w-4" />
                Logout
              </Button>
            </form>
          </div>
        </header>

        <div className="container flex-1 py-12">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-amber-300 mb-2">Welcome to Your Realm</h1>
            <p className="text-gray-300">Your domain awaits your command, mighty ruler of the digital seas.</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="bg-gray-800/60 border-gray-700">
              <CardHeader>
                <CardTitle className="text-teal-400 flex items-center">
                  <BarChart3 className="h-5 w-5 mr-2" />
                  Analytics
                </CardTitle>
                <CardDescription className="text-gray-400">View your performance metrics</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-40 flex items-center justify-center border border-dashed border-gray-700 rounded-md">
                  <p className="text-gray-500">Analytics dashboard coming soon</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/60 border-gray-700">
              <CardHeader>
                <CardTitle className="text-teal-400 flex items-center">
                  <FolderKanban className="h-5 w-5 mr-2" />
                  Projects
                </CardTitle>
                <CardDescription className="text-gray-400">Manage your ongoing projects</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-40 flex items-center justify-center border border-dashed border-gray-700 rounded-md">
                  <p className="text-gray-500">Project management coming soon</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/60 border-gray-700 lg:row-span-2">
              <CardHeader>
                <CardTitle className="text-teal-400 flex items-center">
                  <Mail className="h-5 w-5 mr-2" />
                  Messages
                </CardTitle>
                <CardDescription className="text-gray-400">Check your communications</CardDescription>
              </CardHeader>
              <CardContent className="p-0 h-[400px] flex flex-col">
                <MessageList />
              </CardContent>
            </Card>

            <Card className="bg-gray-800/60 border-gray-700 md:col-span-2 lg:col-span-2">
              <CardHeader>
                <CardTitle className="text-teal-400">Quick Actions</CardTitle>
                <CardDescription className="text-gray-400">Frequently used tools and shortcuts</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <EmailComposer />
                  <div className="grid grid-cols-1 gap-2">
                    <Button className="bg-amber-500 hover:bg-amber-600 text-black w-full">
                      <FolderKanban className="mr-2 h-4 w-4" />
                      Create New Project
                    </Button>
                    <TermsMenu />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <Toaster />
    </ToastProvider>
  )
}
