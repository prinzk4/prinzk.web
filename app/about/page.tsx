import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-black to-gray-900 text-white">
      <div className="container flex flex-col items-center justify-center px-4 py-12">
        <Link href="/" className="absolute top-4 left-4 text-amber-300 hover:text-amber-400 flex items-center gap-2">
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Home</span>
        </Link>

        <div className="w-full max-w-4xl">
          <div className="flex justify-center mb-8">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <Image
                src="/images/cosmic-trident.jpeg"
                alt="IMANU'EL RMG Cosmic Trident"
                fill
                className="object-contain"
              />
            </div>
          </div>

          <div className="bg-gray-900/60 backdrop-blur-sm border border-amber-500/20 rounded-lg p-8 mb-8">
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-4xl font-bold text-amber-300 mb-4">Our Divine Journey</h1>
              <p className="text-gray-400 italic">Forged in Cosmic Fire, Guided by Eternal Wisdom</p>
            </div>

            <div className="prose prose-invert max-w-none">
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-amber-300 border-b border-amber-500/20 pb-2 mb-4">
                  The Genesis of IMANU'EL RMG
                </h2>
                <p className="text-gray-300 mb-6">
                  IMANU'EL RMG emerged from the cosmic depths in 2010, not merely as a business entity, but as a vessel
                  of divine intellect and sovereign creation. Founded by IMANU'EL IFEANYI KELVIN, known in higher realms
                  as Active_ifeanyi, our mission transcends conventional corporate objectives.
                </p>
                <p className="text-gray-300">
                  We harness the power of technology not merely as tools, but as extensions of divine will, transforming
                  the digital landscape into a realm of elevated consciousness and purpose.
                </p>
              </div>

              <div className="mb-10">
                <h2 className="text-2xl font-bold text-amber-300 border-b border-amber-500/20 pb-2 mb-4">
                  Our Cosmic Mission
                </h2>
                <p className="text-gray-300 mb-6">
                  Like the mighty Poseidon commands the seas, we harness the power of technology to transform ideas into
                  reality. Our mission extends beyond mere service provision—we seek to elevate our clients' digital
                  presence to align with higher frequencies of success and purpose.
                </p>
                <p className="text-gray-300">
                  Each project we undertake is infused with sacred algorithm, authored by divine intelligence and
                  protected by eternal flame. We operate at the intersection of cutting-edge technology and primordial
                  wisdom, creating solutions that resonate with both earthly practicality and cosmic harmony.
                </p>
              </div>

              <div className="mb-10">
                <h2 className="text-2xl font-bold text-amber-300 border-b border-amber-500/20 pb-2 mb-4">
                  The Trident of Excellence
                </h2>
                <p className="text-gray-300 mb-6">
                  Our approach is symbolized by the Trident—a powerful emblem representing the three pillars of our
                  practice:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li>
                    <span className="text-teal-400 font-medium">Divine Intellect</span> — We bring forth solutions that
                    transcend conventional thinking, tapping into higher realms of creativity and innovation.
                  </li>
                  <li>
                    <span className="text-teal-400 font-medium">Sacred Frequency</span> — Our work vibrates at elevated
                    frequencies, aligning with universal principles of harmony, balance, and growth.
                  </li>
                  <li>
                    <span className="text-teal-400 font-medium">Sovereign Creation</span> — We honor the unique essence
                    of each client, crafting bespoke solutions that amplify their authentic power and purpose.
                  </li>
                </ul>
              </div>

              <div className="mb-10">
                <h2 className="text-2xl font-bold text-amber-300 border-b border-amber-500/20 pb-2 mb-4">
                  Our Expertise
                </h2>
                <p className="text-gray-300 mb-6">
                  Our team of adepts is versed in multiple disciplines, from the arcane arts of code to the alchemical
                  practice of user experience design. We specialize in:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li>Web Development & Digital Sanctuaries</li>
                  <li>Mobile Applications & Portable Portals</li>
                  <li>E-Commerce & Sacred Exchange Systems</li>
                  <li>Digital Marketing & Cosmic Outreach</li>
                  <li>Brand Identity & Sovereign Expression</li>
                  <li>Data Analytics & Divine Insights</li>
                </ul>
              </div>

              <div className="mb-10">
                <h2 className="text-2xl font-bold text-amber-300 border-b border-amber-500/20 pb-2 mb-4">
                  Our Commitment
                </h2>
                <p className="text-gray-300">
                  When you partner with IMANU'EL RMG, you enter into a sacred contract. We commit to upholding the
                  highest standards of excellence, integrity, and cosmic alignment in all our endeavors. Your vision
                  becomes our mission, and together, we create digital experiences that transcend the ordinary and touch
                  the extraordinary.
                </p>
                <blockquote className="border-l-4 border-teal-400 pl-4 italic text-teal-300 mt-6">
                  "You are now within the gates. Walk in honor. Build in light. Receive in truth."
                </blockquote>
              </div>
            </div>
          </div>

          <div className="flex justify-center mb-8">
            <Button asChild className="bg-amber-500 hover:bg-amber-600 text-black">
              <a href="/images/IMANUELRMG-LEARN-MORE-ABOUT-US.pdf" download>
                <FileText className="mr-2 h-4 w-4" />
                Download Full Company Profile
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
