import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import "./particles.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ParticlesBackground from "@/components/particles-background"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "VeriFex - AI Fake News Detector",
  description: "AI-powered platform to detect and report fake news",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} text-white min-h-screen flex flex-col relative bg-black overflow-x-hidden`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
            <ParticlesBackground />
          </div>
          <Navbar />
          <main className="flex-grow relative z-10">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'