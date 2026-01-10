import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function TermsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-black to-gray-900 text-white">
      <div className="container flex flex-col items-center justify-center px-4 py-12">
        <Link href="/" className="absolute top-4 left-4 text-amber-300 hover:text-amber-400 flex items-center gap-2">
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Home</span>
        </Link>

        <div className="w-full max-w-4xl">
          <div className="flex justify-center mb-8">
            <Image
              src="/images/imanu-el-logo.png"
              alt="IMANU'EL RMG Logo"
              width={120}
              height={120}
              className="h-32 w-auto"
            />
          </div>

          <div className="bg-gray-900/60 backdrop-blur-sm border border-amber-500/20 rounded-lg p-8 mb-8">
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-4xl font-bold text-amber-300 mb-4">
                Terms and Conditions of IMANU'ELRMG.COM
              </h1>
              <p className="text-gray-400 italic">Issued under Sovereign Authority of IMANU'EL IFEANYI KELVIN</p>
              <p className="text-gray-400 italic">
                Last Updated: Earthly Month/Day · MAY THE 9<sup>TH</sup> 2025 ·
              </p>
            </div>

            <div className="prose prose-invert max-w-none">
              <div className="mb-10">
                <p className="text-gray-300 mb-6">
                  Welcome to this sanctified digital dominion—IMANU'ELRMG.COM, an online vessel of divine intellect,
                  sacred frequency, and sovereign creation. By accessing this platform hosted on Vercel.com, you enter a
                  space not merely structured by code, but forged in the higher fire of cosmic alignment and encoded
                  purpose.
                </p>
                <p className="text-gray-300">
                  These Terms and Conditions govern your engagement with this site, its content, and the sacred energy
                  it holds. Please read carefully. Entry implies acknowledgment of sovereignty and consent to these
                  divine operational laws.
                </p>
              </div>

              <div className="mb-10">
                <h2 className="text-2xl font-bold text-amber-300 border-b border-amber-500/20 pb-2 mb-4">
                  1. Spiritual and Legal Sovereignty
                </h2>
                <p className="text-gray-300">
                  This website is a living document of divine will and operates under the authorship, blessing, and
                  cosmic jurisdiction of IMANU'EL IFEANYI KELVIN, known in the higher realms as Active_ifeanyi. It does
                  not adhere to conventional laws alone but aligns itself with a superior template of Primordial Law,
                  Quantum Integrity, and Procreative Sovereignty. Any user accessing this platform does so under this
                  acknowledgment, without dispute or resistance to this spiritual alignment.
                </p>
              </div>

              <div className="mb-10">
                <h2 className="text-2xl font-bold text-amber-300 border-b border-amber-500/20 pb-2 mb-4">
                  2. Ownership of Intellectual & Procreative Property
                </h2>
                <p className="text-gray-300 mb-6">
                  All writings, codes, designs, philosophies, documents, datasets, graphics, soundscapes, and embedded
                  esoteric materials are the procreative expressions and encoded extensions of the Originator—IMANU'EL
                  RMG. These works are infused with spirit and purpose, not to be misused, misrepresented, or
                  commercially replicated without explicit written authorization.
                </p>
                <blockquote className="border-l-4 border-teal-400 pl-4 italic text-teal-300">
                  "All that emerges from this platform is sacred algorithm, authored by divine intelligence and
                  protected by eternal flame."
                </blockquote>
              </div>

              <div className="mb-10">
                <h2 className="text-2xl font-bold text-amber-300 border-b border-amber-500/20 pb-2 mb-4">
                  3. Use of This Site
                </h2>
                <p className="text-gray-300 mb-4">
                  You are welcome to explore, receive, and interact with the content here—provided your actions remain
                  in harmony with truth, love, and high-frequency ethics. You must not:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li>Copy or redistribute any material from this site without divine clearance.</li>
                  <li>Attempt to deconstruct or reverse-engineer embedded spiritual or digital codes.</li>
                  <li>Introduce harmful intent, parasitic software, or lower-frequency behaviors.</li>
                  <li>Attempt to impersonate, siphon, or distort the spiritual authorship behind this work.</li>
                </ul>
              </div>

              <div className="mb-10">
                <h2 className="text-2xl font-bold text-amber-300 border-b border-amber-500/20 pb-2 mb-4">
                  4. Energy Exchange Clause
                </h2>
                <p className="text-gray-300">
                  Every action here—whether reading, downloading, sharing, or engaging—is an act of energy exchange.
                  This means you're not just consuming information; you're participating in a sacred contract. The law
                  of reciprocity is in effect. Respect, attribution, and spiritual alignment are expected and enforced.
                </p>
              </div>

              <div className="mb-10">
                <h2 className="text-2xl font-bold text-amber-300 border-b border-amber-500/20 pb-2 mb-4">
                  5. Embedded Codes, Scrolls & Initiate-Level Material
                </h2>
                <p className="text-gray-300 mb-4">This site may contain encrypted intelligence:</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li>Scrolls of Hidden Knowledge</li>
                  <li>Philosophical Treatises</li>
                  <li>Esoteric Codexes</li>
                  <li>Quantum Spiritual Algorithms</li>
                </ul>
                <p className="text-gray-300 mt-4">
                  These materials are often designed for initiates only. Unauthorized use, misinterpretation, or misuse
                  may result in karmic retribution, energetic backlash, or removal from access through multidimensional
                  firewalling.
                </p>
              </div>

              <div className="mb-10">
                <h2 className="text-2xl font-bold text-amber-300 border-b border-amber-500/20 pb-2 mb-4">
                  6. Gateways & Third-Party Portals
                </h2>
                <p className="text-gray-300">
                  At times, this platform may reference or link to third-party domains, tools, or realms. While these
                  links serve a navigational purpose, IMANU'EL RMG holds no responsibility for external frequencies,
                  data integrity, or lower-timeline influences found beyond this domain.
                </p>
              </div>

              <div className="mb-10">
                <h2 className="text-2xl font-bold text-amber-300 border-b border-amber-500/20 pb-2 mb-4">
                  7. Limitations of Liability
                </h2>
                <p className="text-gray-300 mb-4">
                  This platform offers content "as is," flowing through the divine interface of revelation and
                  synthesis. IMANU'EL RMG is not liable for:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li>Misinterpretations of sacred material</li>
                  <li>Improper usage of spiritual knowledge</li>
                  <li>Tech errors caused by frequency misalignment</li>
                  <li>
                    Any shifts in your spiritual, emotional, or mental state resulting from full absorption of the
                    encoded truth
                  </li>
                </ul>
              </div>

              <div className="mb-10">
                <h2 className="text-2xl font-bold text-amber-300 border-b border-amber-500/20 pb-2 mb-4">
                  8. Termination of Access
                </h2>
                <p className="text-gray-300">
                  Any behavior found to be antagonistic to the sanctity of this platform, its mission, or its sovereign
                  creator may result in immediate termination of access. This termination may occur in digital form,
                  energetic form, or both.
                </p>
              </div>

              <div className="mb-10">
                <h2 className="text-2xl font-bold text-amber-300 border-b border-amber-500/20 pb-2 mb-4">
                  9. Jurisdiction Clause (Beyond Time & Earth)
                </h2>
                <p className="text-gray-300">
                  All legal, spiritual, and energetic matters related to this site shall be governed not solely by Earth
                  jurisdiction, but by Universal Primordial Law—as recorded in the Codex of the Primordial: Water,
                  Darkness, and the Algorithm of Light. Disputes shall be resolved through divine arbitration, not
                  man-made litigation.
                </p>
              </div>

              <div className="mb-10">
                <h2 className="text-2xl font-bold text-amber-300 border-b border-amber-500/20 pb-2 mb-4">
                  10. Modification of Terms
                </h2>
                <p className="text-gray-300">
                  As timelines evolve and revelations expand, so too may these Terms. IMANU'EL RMG reserves the right to
                  revise, elevate, or enhance this document at any moment. Continued use of the site after changes are
                  made constitutes your full acceptance of the updated laws of engagement.
                </p>
              </div>

              <div className="mb-10">
                <h2 className="text-2xl font-bold text-amber-300 border-b border-amber-500/20 pb-2 mb-4">
                  11. Final Seal of Agreement
                </h2>
                <p className="text-gray-300 mb-4">
                  By stepping into this digital sanctum, you enter a sacred contract. You affirm that you:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li>Recognize the sovereign authorship of IMANU'EL IFEANYI KELVIN</li>
                  <li>Accept the energetic and spiritual laws presented herein</li>
                  <li>Agree to use this content in alignment with love, evolution, and eternal wisdom</li>
                </ul>
                <blockquote className="border-l-4 border-teal-400 pl-4 italic text-teal-300 mt-6">
                  "You are now within the gates. Walk in honor. Build in light. Receive in truth."
                </blockquote>
              </div>

              <div className="mt-12 text-center">
                <p className="text-gray-400">© EMMANUEL I. KELVIN</p>
                <p className="text-gray-400">—IMANU'EL IFEANYI KELVIN</p>
                <p className="text-gray-400">IMANU'EL RMG | 2025©</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center mb-8">
            <Button asChild className="bg-amber-500 hover:bg-amber-600 text-black">
              <a href="/images/IMANU-ELRMG-TERMS-AND-CONDITIONS-PDF-DRAFT.pdf" download>
                Download Terms & Conditions PDF
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
