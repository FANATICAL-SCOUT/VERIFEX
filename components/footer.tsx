import Link from "next/link"
import { Facebook, Twitter, Linkedin } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-violet-600/20 backdrop-blur-md border-t border-violet-400/20 py-8 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">VeriFex</h3>
            <p className="text-white/80 text-sm">
              Decentralized AI-powered platform for detecting and reporting fake news.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Features</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/fact-check" className="text-white/80 hover:text-white transition-colors">
                  Fact Checking
                </Link>
              </li>
              <li>
                <Link href="/heatmap" className="text-white/80 hover:text-white transition-colors">
                  Fake News Heatmap
                </Link>
              </li>
              <li>
                <Link href="/deepfake-scanner" className="text-white/80 hover:text-white transition-colors">
                  Deepfake Scanner
                </Link>
              </li>
              <li>
                <Link href="/registry" className="text-white/80 hover:text-white transition-colors">
                  News Registry
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-white/80 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/about#how-it-works" className="text-white/80 hover:text-white transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/about#team" className="text-white/80 hover:text-white transition-colors">
                  Team
                </Link>
              </li>
              <li>
                <Link href="/about#contact" className="text-white/80 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-violet-400/20 text-center text-sm text-white/80">
          <p>© {new Date().getFullYear()} VeriFex. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

