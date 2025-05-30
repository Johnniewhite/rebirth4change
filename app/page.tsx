"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ChevronRight, Heart, Users, Leaf, ExternalLink, DollarSign, Sprout, Scale, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import { NewsletterModal } from "@/components/NewsletterModal"
import { ClientOnly } from "@/components/ClientOnly"

export default function Home() {
  const [isNewsletterOpen, setIsNewsletterOpen] = useState(false)

  useEffect(() => {
    // Check if user has already seen the newsletter
    const hasSeenNewsletter = localStorage.getItem("hasSeenNewsletter")
    
    if (!hasSeenNewsletter) {
      // Open newsletter after 5 seconds
      const timer = setTimeout(() => {
        setIsNewsletterOpen(true)
      }, 5000)

      return () => clearTimeout(timer)
    }
  }, [])

  const handleCloseNewsletter = () => {
    setIsNewsletterOpen(false)
    localStorage.setItem("hasSeenNewsletter", "true")
  }

  return (
    <div className="flex min-h-screen flex-col">
      <ClientOnly>
        <NewsletterModal 
          isOpen={isNewsletterOpen} 
          onClose={handleCloseNewsletter}
        />
      </ClientOnly>
      <main className="flex-1">
        <section className="relative overflow-hidden bg-gradient-to-r from-emerald-900 to-emerald-700 py-20 md:py-32">
          <div className="absolute inset-0 z-0 opacity-20">
            <Image src="/hero-pattern.jpg" alt="Background Pattern" fill className="object-cover" priority />
          </div>
          <div className="container relative z-10 grid gap-8 md:grid-cols-2 items-center">
            <div className="space-y-6 text-center md:text-left">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
                Empowering Women in Marginalized Communities
              </h1>
              <p className="text-xl text-emerald-50">
              A young feminist led social enterprise providing economic opportunities for displaced, marginalized women and underserved groups in conflict affected areas to foster gender equality and development.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Link href="mailto:team@rebirth4change.org?subject=Get%20Involved%20with%20Project%20Rebirth">
                  <Button size="lg" className="bg-white text-emerald-700 hover:bg-emerald-50">
                    Get Involved <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/our-work">
                <Button size="lg" variant="outline" className="border-white text-emerald-700 hover:bg-white/10">
                  Learn More
                </Button>
                </Link>
              </div>
            </div>
            <div className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="/hero-pattern.jpg"
                alt="Women working together on sustainable fashion"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </section>

        <section className="py-16 bg-emerald-50">
          <div className="container">
            <div className="mx-auto max-w-4xl text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-emerald-800 sm:text-4xl">
                By Women, With Women, and For Women
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Breaking the cycle of inequality through sustainable income generation, skills acquisition, and advocacy.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100">
                  <Heart className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Economic Empowerment</h3>
                <p className="text-gray-600 text-sm">
                  Creating sustainable income opportunities through eco-friendly fashion and entrepreneurship.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100">
                  <Users className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Skills Acquisition</h3>
                <p className="text-gray-600 text-sm">
                  Providing free entrepreneurial and vocational skills training for low-income women.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100">
                  <Leaf className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Sustainable Fashion</h3>
                <p className="text-gray-600 text-sm">
                  Promoting eco-friendly design as a vehicle for financial inclusion and empowerment.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100">
                  <DollarSign className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Micro Loans</h3>
                <p className="text-gray-600 text-sm">
                  Offering access to capital through small business grants and microloans for women entrepreneurs.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100">
                  <Sprout className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Her Farm Initiative</h3>
                <p className="text-gray-600 text-sm">
                  Training women in sustainable agriculture and connecting them to markets.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100">
                  <Scale className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Policy Advocacy</h3>
                <p className="text-gray-600 text-sm">
                  Working towards systemic change by advocating for policies that support women's rights.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100">
                  <Globe className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Gender & Climate Justice</h3>
                <p className="text-gray-600 text-sm">
                  Addressing the interconnectedness of gender inequality and climate change impacts.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container">
            <div className="grid gap-8 md:grid-cols-2 items-center">
              <div className="space-y-6">
                <div className="inline-block rounded-lg bg-emerald-100 px-3 py-1 text-sm font-medium text-emerald-800">
                  Our Impact
                </div>
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Breaking the Cycle of Inequality
                </h2>
                <p className="text-lg text-gray-600">
                  Over 60% of poor Nigerians are women due to factors including sexism, unequal access to opportunity,
                  social, economic, normative, cultural, religious and political factors.
                </p>
                <p className="text-lg text-gray-600">
                  Rural communities are often marginalized globally. In Nigeria, there are limited opportunities for
                  women to break this cycle of inequality and achieve a sustainable source of income generation.
                </p>
                <div className="pt-4">
                  <Link href="/our-work">
                  <Button className="bg-emerald-600 hover:bg-emerald-700">
                    Learn About Our Work <ChevronRight className="ml-2 h-5 w-5" />
                  </Button>
                  </Link>
                </div>
              </div>
              <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl">
                <Image src="/home1.jpg" alt="Women in training session" fill className="object-cover" />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-emerald-800 text-white">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Join Our Mission</h2>
              <p className="mt-4 text-lg text-emerald-100">
                Help us empower more women through sustainable fashion and skills development.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="bg-emerald-700/50 p-6 rounded-lg hover:bg-emerald-700/70 transition-colors">
                <h3 className="text-xl font-bold mb-2">Volunteer</h3>
                <p className="text-emerald-100 mb-4">
                  Share your skills and time to support our programs and initiatives.
                </p>
                <Link href="mailto:team@rebirth4change.org?subject=Volunteer%20Inquiry" className="inline-flex items-center text-white font-medium hover:underline">
                  Learn more <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
              <div className="bg-emerald-700/50 p-6 rounded-lg hover:bg-emerald-700/70 transition-colors">
                <h3 className="text-xl font-bold mb-2">Donate</h3>
                <p className="text-emerald-100 mb-4">Your financial support helps us expand our reach and impact.</p>
                <Link href="mailto:team@rebirth4change.org?subject=Donation%20Inquiry" className="inline-flex items-center text-white font-medium hover:underline">
                  Support us <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
              <div className="bg-emerald-700/50 p-6 rounded-lg hover:bg-emerald-700/70 transition-colors">
                <h3 className="text-xl font-bold mb-2">Partner</h3>
                <p className="text-emerald-100 mb-4">
                  Collaborate with us to create sustainable change in communities.
                </p>
                <Link href="mailto:team@rebirth4change.org?subject=Partnership%20Inquiry" className="inline-flex items-center text-white font-medium hover:underline">
                  Join forces <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container">
            <div id="success-stories" className="mx-auto max-w-3xl text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Success Stories</h2>
              <p className="mt-4 text-lg text-gray-600">
                Meet the women whose lives have been transformed through our programs.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <Image src="/work1.jpg" alt="Success story" fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Oluwaseunfunmi's Journey</h3>
                  <p className="text-gray-600 mb-4">
                    From struggling to support her family to becoming a skilled fashion designer and entrepreneur.
                  </p>
                  <Link
                    href="https://drive.google.com/file/d/10j9ZBKeC8oSygzU48agpLi5-njhddTEk/view"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-emerald-600 font-medium hover:text-emerald-700"
                  >
                    Watch her story <ExternalLink className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
              <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <Image src="/home2.jpg" alt="Success story" fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Fatima's Transformation</h3>
                  <p className="text-gray-600 mb-4">
                    How skills training helped Fatima create a sustainable business and inspire her community.
                  </p>
                  <Link
                    href="https://drive.google.com/file/d/10j9ZBKeC8oSygzU48agpLi5-njhddTEk/view"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-emerald-600 font-medium hover:text-emerald-700"
                  >
                    Read her story <ExternalLink className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
              <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <Image src="/home1.jpg" alt="Success story" fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">The Cooperative's Impact</h3>
                  <p className="text-gray-600 mb-4">
                    How a group of women formed a cooperative that transformed their rural community.
                  </p>
                  <Link
                    href="https://drive.google.com/file/d/10j9ZBKeC8oSygzU48agpLi5-njhddTEk/view"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-emerald-600 font-medium hover:text-emerald-700"
                  >
                    Read their story <ExternalLink className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
            {/* <div className="mt-12 text-center">
              <Button variant="outline" className="border-emerald-600 text-emerald-600 hover:bg-emerald-50">
                View All Stories
              </Button>
            </div> */}
          </div>
        </section>

        {/* Photo Gallery Section */}
        <section className="py-16 bg-gray-50">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Gallery</h2>
              <p className="mt-4 text-lg text-gray-600">
                Glimpses of our community, events, and the inspiring women we work with.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="relative aspect-square">
                  <Image 
                    src="/second.jpeg" 
                    alt="Gallery Image" 
                    fill 
                    className="object-cover hover:scale-105 transition-transform duration-500" 
                  />
                </div>
              </div>
              <div className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="relative aspect-square">
                  <Image 
                    src="/third.jpeg" 
                    alt="Gallery Image" 
                    fill 
                    className="object-cover hover:scale-105 transition-transform duration-500" 
                  />
                </div>
              </div>
              <div className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="relative aspect-square">
                  <Image 
                    src="/seventh.jpeg" 
                    alt="Gallery Image" 
                    fill 
                    className="object-cover hover:scale-105 transition-transform duration-500" 
                  />
                </div>
              </div>
              <div className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="relative aspect-square">
                  <Image 
                    src="/sixth.jpeg" 
                    alt="Gallery Image" 
                    fill 
                    className="object-cover hover:scale-105 transition-transform duration-500" 
                  />
                </div>
              </div>
              <div className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="relative aspect-square">
                  <Image 
                    src="/fifth.jpeg" 
                    alt="Gallery Image" 
                    fill 
                    className="object-cover hover:scale-105 transition-transform duration-500" 
                  />
                </div>
              </div>
              <div className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="relative aspect-square">
                  <Image 
                    src="/first.jpeg" 
                    alt="Gallery Image" 
                    fill 
                    className="object-cover hover:scale-105 transition-transform duration-500" 
                  />
                </div>
              </div>
            </div>
            
          </div>
        </section>

        <section className="py-16 bg-emerald-50">
          <div className="container">
            <div className="mx-auto max-w-4xl bg-white rounded-2xl overflow-hidden shadow-xl">
              <div className="grid md:grid-cols-2">
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-4">Subscribe to Our Newsletter</h2>
                  <p className="text-gray-600 mb-6">
                    Stay updated with our latest initiatives, success stories, and opportunities to get involved.
                  </p>
                  <form className="space-y-4">
                    <div>
                      <label htmlFor="email" className="sr-only">
                        Email address
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        className="w-full rounded-md border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-500 focus:border-emerald-500 focus:ring-emerald-500"
                        placeholder="Enter your email"
                      />
                    </div>
                    <Button className="w-full bg-emerald-600 hover:bg-emerald-700">Subscribe</Button>
                  </form>
                </div>
                <div className="relative hidden md:block">
                  <Image src="/work2.jpg" alt="Women in a workshop" fill className="object-cover" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

