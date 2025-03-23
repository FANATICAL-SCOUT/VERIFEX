import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Brain, Database, Globe, Lock, MessageSquare, Shield, Users, Twitter, Facebook, Linkedin } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-white mb-4">About VeriFex</h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Learn about our mission, technology, and the team behind the decentralized AI fake news detector
        </p>
      </div>

      {/* Mission Section */}
      <section className="mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
            <p className="text-gray-300 mb-4">
              At VeriFex, we're committed to combating the spread of misinformation and fake news through innovative AI
              technology and community collaboration.
            </p>
            <p className="text-gray-300 mb-4">
              We believe that access to accurate information is essential for a functioning democracy and informed
              decision-making. Our platform empowers users to verify content, identify manipulated media, and contribute
              to a more truthful information ecosystem.
            </p>
            <p className="text-gray-300">
              By combining advanced artificial intelligence with human oversight, we're building a decentralized
              solution that's transparent, accessible, and effective at separating fact from fiction.
            </p>
          </div>
          <div className="bg-gray-800 rounded-lg p-8 border border-gray-700">
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-[#8b5cf6]/20 flex items-center justify-center mx-auto mb-4">
                  <Shield className="text-[#8b5cf6]" size={32} />
                </div>
                <h3 className="text-white font-medium">Protect Truth</h3>
                <p className="text-gray-400 text-sm">Safeguarding factual information in the digital age</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-[#8b5cf6]/20 flex items-center justify-center mx-auto mb-4">
                  <Brain className="text-[#8b5cf6]" size={32} />
                </div>
                <h3 className="text-white font-medium">AI Innovation</h3>
                <p className="text-gray-400 text-sm">Leveraging cutting-edge technology to detect misinformation</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-[#8b5cf6]/20 flex items-center justify-center mx-auto mb-4">
                  <Users className="text-[#8b5cf6]" size={32} />
                </div>
                <h3 className="text-white font-medium">Community Driven</h3>
                <p className="text-gray-400 text-sm">Empowering users to contribute to fact verification</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-[#8b5cf6]/20 flex items-center justify-center mx-auto mb-4">
                  <Globe className="text-[#8b5cf6]" size={32} />
                </div>
                <h3 className="text-white font-medium">Global Impact</h3>
                <p className="text-gray-400 text-sm">Fighting misinformation across borders and languages</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="mb-16" id="how-it-works">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">How Our AI Works</h2>
        <Card className="bg-gray-800 border-gray-700">
          <CardContent className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full bg-[#8b5cf6]/20 flex items-center justify-center mb-6">
                  <Brain className="text-[#8b5cf6]" size={36} />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">AI Analysis</h3>
                <div className="space-y-4">
                  <p className="text-gray-300">
                    Our advanced neural networks analyze content across multiple dimensions:
                  </p>
                  <ul className="text-gray-400 space-y-2 text-left">
                    <li>• Linguistic pattern recognition</li>
                    <li>• Source credibility assessment</li>
                    <li>• Cross-reference with verified facts</li>
                    <li>• Image manipulation detection</li>
                    <li>• Contextual inconsistency identification</li>
                  </ul>
                </div>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full bg-[#8b5cf6]/20 flex items-center justify-center mb-6">
                  <Database className="text-[#8b5cf6]" size={36} />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Decentralized Verification</h3>
                <div className="space-y-4">
                  <p className="text-gray-300">Our platform leverages blockchain technology to ensure:</p>
                  <ul className="text-gray-400 space-y-2 text-left">
                    <li>• Transparent verification processes</li>
                    <li>• Immutable record of fact-checks</li>
                    <li>• Distributed consensus mechanisms</li>
                    <li>• Resistance to manipulation</li>
                    <li>• Public auditability of results</li>
                  </ul>
                </div>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full bg-[#8b5cf6]/20 flex items-center justify-center mb-6">
                  <Users className="text-[#8b5cf6]" size={36} />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Community Oversight</h3>
                <div className="space-y-4">
                  <p className="text-gray-300">Human intelligence complements our AI through:</p>
                  <ul className="text-gray-400 space-y-2 text-left">
                    <li>• Expert review of complex cases</li>
                    <li>• Community voting on verification results</li>
                    <li>• Continuous feedback loops</li>
                    <li>• Reporting of new fake news</li>
                    <li>• Collaborative knowledge building</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <h3 className="text-xl font-bold text-white mb-4">Technical Architecture</h3>
              <div className="bg-gray-900 p-6 rounded-lg max-w-3xl mx-auto">
                <p className="text-gray-300 mb-4">
                  Our system employs a multi-layered approach to fake news detection:
                </p>
                <ol className="text-gray-400 space-y-4 text-left">
                  <li className="flex items-start">
                    <span className="w-6 h-6 rounded-full bg-[#8b5cf6]/20 flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-[#8b5cf6] text-sm font-bold">1</span>
                    </span>
                    <div>
                      <span className="text-white font-medium">Content Analysis Layer</span> - Processes text, images,
                      and video using specialized neural networks trained on millions of verified and fake news samples.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="w-6 h-6 rounded-full bg-[#8b5cf6]/20 flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-[#8b5cf6] text-sm font-bold">2</span>
                    </span>
                    <div>
                      <span className="text-white font-medium">Verification Layer</span> - Cross-references content with
                      our database of known facts and previously identified fake news patterns.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="w-6 h-6 rounded-full bg-[#8b5cf6]/20 flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-[#8b5cf6] text-sm font-bold">3</span>
                    </span>
                    <div>
                      <span className="text-white font-medium">Blockchain Layer</span> - Records verification results on
                      a distributed ledger for transparency and immutability.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="w-6 h-6 rounded-full bg-[#8b5cf6]/20 flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-[#8b5cf6] text-sm font-bold">4</span>
                    </span>
                    <div>
                      <span className="text-white font-medium">Community Layer</span> - Enables expert and user input to
                      improve results and handle edge cases.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="w-6 h-6 rounded-full bg-[#8b5cf6]/20 flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-[#8b5cf6] text-sm font-bold">5</span>
                    </span>
                    <div>
                      <span className="text-white font-medium">Learning Layer</span> - Continuously improves the system
                      based on new data and feedback.
                    </div>
                  </li>
                </ol>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Team Section */}
      <section className="mb-16" id="team">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-gray-800 border-gray-700 hover:border-[#8b5cf6] transition-colors">
            <CardContent className="p-6 text-center">
              <div className="w-24 h-24 rounded-full bg-gray-700 mx-auto mb-4 overflow-hidden">
                <img
                  src="/placeholder.svg?height=96&width=96"
                  alt="Team member"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-white mb-1">Dr. Sarah Chen</h3>
              <p className="text-[#8b5cf6] mb-4">Founder & AI Director</p>
              <p className="text-gray-400 text-sm mb-4">
                Former AI research lead at MIT with 15+ years of experience in machine learning and natural language
                processing.
              </p>
              <div className="flex justify-center space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <Twitter size={18} />
                  <span className="sr-only">Twitter</span>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <Linkedin size={18} />
                  <span className="sr-only">LinkedIn</span>
                </a>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border-gray-700 hover:border-[#8b5cf6] transition-colors">
            <CardContent className="p-6 text-center">
              <div className="w-24 h-24 rounded-full bg-gray-700 mx-auto mb-4 overflow-hidden">
                <img
                  src="/placeholder.svg?height=96&width=96"
                  alt="Team member"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-white mb-1">Michael Rodriguez</h3>
              <p className="text-[#8b5cf6] mb-4">CTO & Blockchain Lead</p>
              <p className="text-gray-400 text-sm mb-4">
                Blockchain expert with experience at Ethereum Foundation and previous startups in the decentralized
                technology space.
              </p>
              <div className="flex justify-center space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <Twitter size={18} />
                  <span className="sr-only">Twitter</span>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <Linkedin size={18} />
                  <span className="sr-only">LinkedIn</span>
                </a>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border-gray-700 hover:border-[#8b5cf6] transition-colors">
            <CardContent className="p-6 text-center">
              <div className="w-24 h-24 rounded-full bg-gray-700 mx-auto mb-4 overflow-hidden">
                <img
                  src="/placeholder.svg?height=96&width=96"
                  alt="Team member"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-white mb-1">Dr. Aisha Okafor</h3>
              <p className="text-[#8b5cf6] mb-4">Head of Research</p>
              <p className="text-gray-400 text-sm mb-4">
                Computational linguist specializing in misinformation patterns with previous experience at fact-checking
                organizations.
              </p>
              <div className="flex justify-center space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <Twitter size={18} />
                  <span className="sr-only">Twitter</span>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <Linkedin size={18} />
                  <span className="sr-only">LinkedIn</span>
                </a>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-gray-800 border-gray-700 hover:border-[#8b5cf6] transition-colors">
            <CardContent className="p-6 text-center">
              <div className="w-24 h-24 rounded-full bg-gray-700 mx-auto mb-4 overflow-hidden">
                <img
                  src="/placeholder.svg?height=96&width=96"
                  alt="Team member"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-white mb-1">James Wilson</h3>
              <p className="text-[#8b5cf6] mb-4">Chief Security Officer</p>
              <p className="text-gray-400 text-sm mb-4">
                Cybersecurity expert with a background in protecting digital platforms from manipulation and ensuring
                data integrity.
              </p>
              <div className="flex justify-center space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <Twitter size={18} />
                  <span className="sr-only">Twitter</span>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <Linkedin size={18} />
                  <span className="sr-only">LinkedIn</span>
                </a>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-400">
            Our team also includes AI researchers, software engineers, UX designers, and journalism experts from around
            the world.
          </p>
        </div>
      </section>

      {/* Privacy & Security Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">Privacy & Security</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="flex items-center text-white">
                <Lock className="mr-2 text-[#8b5cf6]" size={24} />
                Data Privacy
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-300">We're committed to protecting your privacy while fighting misinformation:</p>
              <ul className="text-gray-400 space-y-2">
                <li>• No personal data is required to use our verification tools</li>
                <li>• All user contributions can be made anonymously</li>
                <li>• We never sell or share your data with third parties</li>
                <li>• All stored data is encrypted using industry-standard methods</li>
                <li>• You can request deletion of any personal information</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="flex items-center text-white">
                <Shield className="mr-2 text-[#8b5cf6]" size={24} />
                Platform Security
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-300">Our platform is built with security as a core principle:</p>
              <ul className="text-gray-400 space-y-2">
                <li>• Decentralized architecture resistant to single points of failure</li>
                <li>• Regular security audits by independent third parties</li>
                <li>• Open-source code for transparency and community review</li>
                <li>• Advanced measures to prevent manipulation of verification results</li>
                <li>• Continuous monitoring for potential security threats</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">Contact Us</h2>
        <Card className="bg-gray-800 border-gray-700">
          <CardContent className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Get in Touch</h3>
                <p className="text-gray-300 mb-6">
                  Have questions, feedback, or want to collaborate? We'd love to hear from you.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <MessageSquare className="text-[#8b5cf6] mr-3 mt-1" size={20} />
                    <div>
                      <h4 className="text-white font-medium">Email</h4>
                      <p className="text-gray-400">contact@verifex.org</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Globe className="text-[#8b5cf6] mr-3 mt-1" size={20} />
                    <div>
                      <h4 className="text-white font-medium">Headquarters</h4>
                      <p className="text-gray-400">San Francisco, CA</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Users className="text-[#8b5cf6] mr-3 mt-1" size={20} />
                    <div>
                      <h4 className="text-white font-medium">Social Media</h4>
                      <div className="flex space-x-4 mt-2">
                        <a href="#" className="text-gray-400 hover:text-white">
                          <Twitter size={20} />
                          <span className="sr-only">Twitter</span>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white">
                          <Facebook size={20} />
                          <span className="sr-only">Facebook</span>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white">
                          <Linkedin size={20} />
                          <span className="sr-only">LinkedIn</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-center">
                <h3 className="text-xl font-bold text-white mb-4">Join Our Mission</h3>
                <p className="text-gray-300 mb-6">
                  Interested in contributing to our platform or joining our team? We're always looking for passionate
                  individuals to help us combat misinformation.
                </p>
                <div className="space-y-4">
                  <Link href="/fact-check">
                    <Button className="w-full bg-[#8b5cf6] hover:bg-[#8b5cf6]/90 text-white py-6">
                      Start Fact-Checking
                    </Button>
                  </Link>
                  <Link href="/report">
                    <Button variant="outline" className="w-full border-gray-600 text-white hover:bg-gray-700 py-6">
                      Report Fake News
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}

