"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Eye, EyeOff, Lock, Mail, Loader2, Shield } from "lucide-react"

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const router = useRouter()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate authentication
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsLoading(false)
    router.push("/")
  }

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate account creation
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsLoading(false)
    router.push("/")
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-2">
            <div className="w-12 h-12 rounded-full bg-[#00C853]/20 flex items-center justify-center">
              <Shield className="text-[#00C853]" size={24} />
            </div>
          </div>
          <h1 className="text-2xl font-bold text-white">VeriFex</h1>
          <p className="text-gray-400 mt-2">Combat misinformation with AI-powered fact checking</p>
        </div>

        <Tabs defaultValue="login" className="w-full">
          <TabsList className="grid grid-cols-2 mb-6 bg-gray-700">
            <TabsTrigger value="login" className="data-[state=active]:bg-[#00C853] data-[state=active]:text-white">
              Login
            </TabsTrigger>
            <TabsTrigger value="signup" className="data-[state=active]:bg-[#00C853] data-[state=active]:text-white">
              Sign Up
            </TabsTrigger>
          </TabsList>

          <TabsContent value="login">
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-white">Welcome back</CardTitle>
                <CardDescription className="text-gray-400">Sign in to your VeriFex account</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleLogin} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="login-email" className="text-white">
                      Email
                    </Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                      <Input
                        id="login-email"
                        type="email"
                        placeholder="Enter your email"
                        className="pl-10 bg-gray-700 border-gray-600 text-white"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <Label htmlFor="login-password" className="text-white">
                        Password
                      </Label>
                      <Link href="#" className="text-[#00C853] hover:underline">
                        Forgot password?
                      </Link>
                    </div>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                      <Input
                        id="login-password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter your password"
                        className="pl-10 pr-10 bg-gray-700 border-gray-600 text-white"
                        required
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-1 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                      >
                        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox id="remember" className="data-[state=checked]:bg-[#00C853] border-gray-500" />
                    <Label htmlFor="remember" className="text-gray-300 text-sm">
                      Remember me
                    </Label>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-[#00C853] hover:bg-[#00C853]/90 text-white"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Logging in...
                      </>
                    ) : (
                      "Sign in"
                    )}
                  </Button>
                </form>
              </CardContent>
              <CardFooter className="flex justify-center border-t border-gray-700 pt-4">
                <div className="text-sm text-gray-400">
                  Don't have an account?{" "}
                  <button
                    onClick={() => document.querySelector('[data-value="signup"]')?.click()}
                    className="text-[#00C853] hover:underline"
                  >
                    Sign up
                  </button>
                </div>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="signup">
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-white">Create an account</CardTitle>
                <CardDescription className="text-gray-400">
                  Join TruthGuard to help combat misinformation
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSignup} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="first-name" className="text-white">
                        First name
                      </Label>
                      <Input
                        id="first-name"
                        placeholder="First name"
                        className="bg-gray-700 border-gray-600 text-white"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="last-name" className="text-white">
                        Last name
                      </Label>
                      <Input
                        id="last-name"
                        placeholder="Last name"
                        className="bg-gray-700 border-gray-600 text-white"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="signup-email" className="text-white">
                      Email
                    </Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                      <Input
                        id="signup-email"
                        type="email"
                        placeholder="Enter your email"
                        className="pl-10 bg-gray-700 border-gray-600 text-white"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="signup-password" className="text-white">
                      Password
                    </Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                      <Input
                        id="signup-password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Create a password"
                        className="pl-10 pr-10 bg-gray-700 border-gray-600 text-white"
                        required
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-1 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                      >
                        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                      </Button>
                    </div>
                    <p className="text-xs text-gray-400 mt-1">Password must be at least 8 characters long</p>
                  </div>

                  <div className="flex items-start space-x-2">
                    <Checkbox id="terms" className="data-[state=checked]:bg-[#00C853] border-gray-500 mt-1" required />
                    <Label htmlFor="terms" className="text-gray-300 text-sm">
                      I agree to the{" "}
                      <Link href="#" className="text-[#00C853] hover:underline">
                        Terms of Service
                      </Link>{" "}
                      and{" "}
                      <Link href="#" className="text-[#00C853] hover:underline">
                        Privacy Policy
                      </Link>
                    </Label>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-[#00C853] hover:bg-[#00C853]/90 text-white"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Creating account...
                      </>
                    ) : (
                      "Create account"
                    )}
                  </Button>
                </form>
              </CardContent>
              <CardFooter className="flex justify-center border-t border-gray-700 pt-4">
                <div className="text-sm text-gray-400">
                  Already have an account?{" "}
                  <button
                    onClick={() => document.querySelector('[data-value="login"]')?.click()}
                    className="text-[#00C853] hover:underline"
                  >
                    Sign in
                  </button>
                </div>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

