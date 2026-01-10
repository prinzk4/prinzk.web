import Link from "next/link"
import { ArrowRight, CheckCircle, Globe, Mail, MapPin, Phone } from "lucide-react"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { MobileMenu } from "@/components/mobile-menu"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src="/images/imanu-el-logo.png"
              alt="IMANU'EL RMG Logo"
              width={50}
              height={50}
              className="h-10 w-auto"
            />
            <Link href="/" className="font-serif text-lg font-bold text-amber-300 dark:text-amber-200">
              IMANU'EL RMG
            </Link>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#features" className="text-sm font-medium hover:text-primary">
              Features
            </Link>
            <Link href="#about" className="text-sm font-medium hover:text-primary">
              About
            </Link>
            <Link href="#testimonials" className="text-sm font-medium hover:text-primary">
              Testimonials
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-primary">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Link href="/login" className="hidden md:block">
              <Button variant="outline">Log in</Button>
            </Link>
            <Link href="/register" className="hidden md:block">
              <Button>
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <MobileMenu />
          </div>
        </div>
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-black to-gray-900 text-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:gap-16">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                    <span className="text-amber-300">Your Vision</span>, <br />
                    <span className="text-teal-400">Our Dominion</span>
                  </h1>
                  <p className="max-w-[600px] text-gray-300 md:text-xl">
                    Like the mighty Poseidon commands the seas, we harness the power of technology to transform your
                    ideas into reality. Rule your industry with our unmatched expertise and strength.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/register">
                    <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-black">
                      Command Your Future
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="#features">
                    <Button size="lg" variant="outline" className="border-teal-400 text-teal-400 hover:bg-teal-400/10">
                      Discover Our Power
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center relative">
                <div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 to-amber-500/20 rounded-xl"></div>
                <Image
                  src="/images/imanu-el-logo.png"
                  alt="IMANU'EL RMG - Power and Excellence"
                  width={550}
                  height={550}
                  className="relative z-10 mx-auto max-w-full h-auto object-contain p-8"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="w-full bg-gray-50 py-12 md:py-24 lg:py-32 dark:bg-gray-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">Features</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Divine Capabilities</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Our platform provides all the tools you need to succeed. From powerful analytics to seamless
                  integrations, we've got you covered.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Powerful Analytics",
                  description: "Gain valuable insights with our comprehensive analytics tools.",
                },
                {
                  title: "Seamless Integration",
                  description: "Connect with your favorite tools and services without any hassle.",
                },
                {
                  title: "Advanced Security",
                  description: "Rest easy knowing your data is protected with enterprise-grade security.",
                },
                {
                  title: "24/7 Support",
                  description: "Our dedicated team is always available to help you with any issues.",
                },
                {
                  title: "Scalable Solutions",
                  description: "Grow your business with solutions that scale with your needs.",
                },
                {
                  title: "Custom Development",
                  description: "Get tailored solutions designed specifically for your business requirements.",
                },
              ].map((feature, index) => (
                <div key={index} className="flex flex-col items-center space-y-2 rounded-lg border p-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white">
                    <CheckCircle className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold">{feature.title}</h3>
                  <p className="text-center text-gray-500 dark:text-gray-400">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">About Us</div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Story</h2>
                  <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    Founded in 2010, we've been on a mission to help businesses leverage technology to achieve their
                    goals. Our team of experts is passionate about delivering exceptional results.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button variant="outline">Learn More About Us</Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <img
                  alt="Team Photo"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                  src="/placeholder.svg?height=550&width=750"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="w-full bg-gray-50 py-12 md:py-24 lg:py-32 dark:bg-gray-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                  Testimonials
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">What Our Clients Say</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Don't just take our word for it. Here's what our clients have to say about working with us.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  name: "Sarah Johnson",
                  role: "CEO, TechStart",
                  content:
                    "Working with this team has been a game-changer for our business. Their expertise and dedication are unmatched.",
                },
                {
                  name: "Michael Chen",
                  role: "Marketing Director, GrowthCo",
                  content:
                    "The solutions provided have helped us increase our conversion rates by 40%. Highly recommended!",
                },
                {
                  name: "Emily Rodriguez",
                  role: "Founder, InnovateNow",
                  content:
                    "From concept to execution, they delivered beyond our expectations. A truly professional team.",
                },
              ].map((testimonial, index) => (
                <div key={index} className="flex flex-col items-center space-y-4 rounded-lg border p-6">
                  <div className="h-16 w-16 rounded-full bg-gray-200" />
                  <div className="space-y-2 text-center">
                    <h3 className="text-xl font-bold">{testimonial.name}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
                  </div>
                  <p className="text-center text-gray-500 dark:text-gray-400">"{testimonial.content}"</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">Contact Us</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Get in Touch</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Have questions or ready to start your project? Reach out to us today.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 lg:grid-cols-2">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  <p>111 Most High Ave Hills</p>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-primary" />
                  <p>Lordx111@icloud.com</p>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-primary" />
                  <p>Officialprinzk@icloud.com</p>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="h-5 w-5 text-primary" />
                  <p>IMANU'ELRMGWEB.COM</p>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="grid gap-2">
                    <label
                      htmlFor="name"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div className="grid gap-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>
                <div className="grid gap-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Enter your message"
                  />
                </div>
                <Button size="lg">
                  Send Message
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t bg-gray-50 py-6 dark:bg-gray-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex items-center gap-2">
              <Image
                src="/images/imanu-el-logo.png"
                alt="IMANU'EL RMG Logo"
                width={40}
                height={40}
                className="h-8 w-auto"
              />
              <span className="font-serif text-lg font-bold text-amber-300 dark:text-amber-200">IMANU'EL RMG</span>
            </div>
            <p className="text-center text-sm text-gray-500 dark:text-gray-400">
              © {new Date().getFullYear()} IMANU'ELRMGWEB.COM. All rights reserved.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-gray-500 hover:text-primary dark:text-gray-400">
                Terms
              </Link>
              <Link href="#" className="text-gray-500 hover:text-primary dark:text-gray-400">
                Privacy
              </Link>
              <Link href="#" className="text-gray-500 hover:text-primary dark:text-gray-400">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
