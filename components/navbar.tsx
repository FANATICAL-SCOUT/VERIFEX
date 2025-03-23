"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, Shield, X } from "lucide-react"
import WalletConnect from "./wallet-connect"
import Image from 'next/image'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Fact-Check", href: "/fact-check" },
    { name: "Heatmap", href: "/heatmap" },
    { name: "Deepfake Scanner", href: "/deepfake-scanner" },
    { name: "Registry", href: "/registry" },
    { name: "Report News", href: "/report" },
    { name: "About", href: "/about" },
  ]

  return (
    <nav className="z-50 border-b border-white/10 bg-black/30 backdrop-blur-md sticky top-0 left-0 right-0 w-full">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center pl-2">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <div className="flex items-center">
                <Image src="/images/logo.png" width={200} height={50}/>
                {/*<span className="text-white font-bold text-xl">VeriFex</span>*/}
              </div>
            </Link>
          </div>

          {/* Desktop menu - centered */}
          <div className="hidden md:flex items-center justify-center flex-1">
            <div className="flex items-center space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="px-3 py-2 rounded-md text-sm font-medium text-white hover:text-white hover:bg-white/10 transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Wallet Connect button - right aligned */}
          <div className="hidden md:flex items-center pr-2">
            <WalletConnect />
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center">
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-violet-600/30 backdrop-blur-md border-t border-violet-400/20">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-white hover:bg-white/10 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            {/* Add wallet connect in mobile menu */}
            <div className="px-3 py-2">
              <WalletConnect />
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar