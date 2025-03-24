import Image from "next/image"
import { ArrowRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function OurStory() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/hero-pattern.jpg" alt="Women working together" fill className="object-cover opacity-30" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-900 to-emerald-700 opacity-80"></div>
        </div>

        <div className="container relative z-10 min-h-[650px] flex items-center">
          <div className="max-w-3xl mx-auto text-center py-28">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl mb-6">Our Story</h1>
            <p className="text-xl text-emerald-50 mb-8 leading-relaxed">
              A journey of hope, resilience, and transformation — empowering women to break the cycle of inequality and
              create sustainable futures.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <span className="inline-block px-3 py-1 rounded-full bg-white/20 text-white text-sm font-medium backdrop-blur-sm">
                Founded in 2018
              </span>
              <span className="inline-block px-3 py-1 rounded-full bg-white/20 text-white text-sm font-medium backdrop-blur-sm">
                Women-Led Initiative
              </span>
              <span className="inline-block px-3 py-1 rounded-full bg-white/20 text-white text-sm font-medium backdrop-blur-sm">
                Sustainable Fashion
              </span>
              <span className="inline-block px-3 py-1 rounded-full bg-white/20 text-white text-sm font-medium backdrop-blur-sm">
                Economic Empowerment
              </span>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="text-white">
            <path
              fill="currentColor"
              fillOpacity="1"
              d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,224C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </section>

      {/* Founder's Vision */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-emerald-100 rounded-full z-0"></div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-emerald-200 rounded-full z-0"></div>
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/dami.jpg"
                  alt="Founder of Project Rebirth"
                  width={600}
                  height={700}
                  className="w-full object-cover"
                />
              </div>
            </div>

            <div className="space-y-6">
              <div className="inline-block rounded-lg bg-emerald-100 px-3 py-1 text-sm font-medium text-emerald-800">
                Founder's Vision
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                A Dream Born from Necessity
              </h2>
              <div className="relative pl-6 border-l-2 border-emerald-500 italic text-gray-700">
                <Quote className="absolute -left-4 -top-1 text-emerald-500 h-8 w-8" />
                <p className="text-lg">
                  I witnessed firsthand how women in my community struggled to break free from economic dependence.
                  Their resilience inspired me to create a platform where women could harness their creativity, develop
                  sustainable skills, and build financial independence.
                </p>
              </div>
              <p className="text-gray-600">
                In 2018, after returning from a visit to rural communities in Northern Nigeria, our founder was struck
                by the stark reality faced by women. Despite their incredible skills and determination, they lacked
                opportunities to generate sustainable income and break free from cycles of poverty.
              </p>
              <p className="text-gray-600">
                What began as a small workshop with five women has grown into a movement that has empowered hundreds
                across marginalized communities, proving that when women are given the right tools and opportunities,
                they can transform not just their own lives, but entire communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-16 md:py-24 bg-emerald-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">Our Journey</h2>
            <p className="max-w-2xl mx-auto text-lg text-gray-600">
              From a small idea to a transformative movement — each step in our journey has been guided by our
              commitment to women's economic empowerment.
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-emerald-200"></div>

            {/* Timeline Items */}
            <div className="space-y-16">
              {/* 2018 */}
              <div className="relative">
                <div className="flex items-center justify-center">
                  <div className="z-10 flex items-center justify-center w-12 h-12 bg-emerald-600 rounded-full text-white font-bold shadow-lg">
                    2018
                  </div>
                </div>
                <div className="mt-6 grid md:grid-cols-2 gap-8">
                  <div className="bg-white p-6 rounded-xl shadow-md md:text-right order-2 md:order-1">
                    <h3 className="text-xl font-bold text-emerald-800 mb-2">The Beginning</h3>
                    <p className="text-gray-600">
                      Project Rebirth started with a small workshop of five women in a rural community, focusing on
                      basic sewing skills and sustainable fabric use.
                    </p>
                  </div>
                  <div className="relative h-48 md:h-auto order-1 md:order-2">
                    <Image
                      src="/hero-pattern.jpg"
                      alt="Project Rebirth in 2018"
                      fill
                      className="rounded-xl object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* 2019 */}
              <div className="relative">
                <div className="flex items-center justify-center">
                  <div className="z-10 flex items-center justify-center w-12 h-12 bg-emerald-600 rounded-full text-white font-bold shadow-lg">
                    2019
                  </div>
                </div>
                <div className="mt-6 grid md:grid-cols-2 gap-8">
                  <div className="relative h-48 md:h-auto">
                    <Image
                      src="/hero-pattern.jpg"
                      alt="Project Rebirth in 2019"
                      fill
                      className="rounded-xl object-cover"
                    />
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <h3 className="text-xl font-bold text-emerald-800 mb-2">First Collection Launch</h3>
                    <p className="text-gray-600">
                      Our first eco-friendly fashion collection was launched, featuring traditional designs with modern
                      elements. The collection sold out within weeks, providing income for 15 women.
                    </p>
                  </div>
                </div>
              </div>

              {/* 2020 */}
              <div className="relative">
                <div className="flex items-center justify-center">
                  <div className="z-10 flex items-center justify-center w-12 h-12 bg-emerald-600 rounded-full text-white font-bold shadow-lg">
                    2020
                  </div>
                </div>
                <div className="mt-6 grid md:grid-cols-2 gap-8">
                  <div className="bg-white p-6 rounded-xl shadow-md md:text-right order-2 md:order-1">
                    <h3 className="text-xl font-bold text-emerald-800 mb-2">Pandemic Pivot</h3>
                    <p className="text-gray-600">
                      When COVID-19 hit, we quickly adapted by producing face masks, creating jobs for 50 more women
                      when they needed income most. Our masks reached thousands across Nigeria.
                    </p>
                  </div>
                  <div className="relative h-48 md:h-auto order-1 md:order-2">
                    <Image
                      src="/hero-pattern.jpg"
                      alt="Project Rebirth in 2020"
                      fill
                      className="rounded-xl object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* 2021 */}
              <div className="relative">
                <div className="flex items-center justify-center">
                  <div className="z-10 flex items-center justify-center w-12 h-12 bg-emerald-600 rounded-full text-white font-bold shadow-lg">
                    2021
                  </div>
                </div>
                <div className="mt-6 grid md:grid-cols-2 gap-8">
                  <div className="relative h-48 md:h-auto">
                    <Image
                      src="/hero-pattern.jpg"
                      alt="Project Rebirth in 2021"
                      fill
                      className="rounded-xl object-cover"
                    />
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <h3 className="text-xl font-bold text-emerald-800 mb-2">Training Expansion</h3>
                    <p className="text-gray-600">
                      We expanded our training programs to include business management, digital literacy, and financial
                      planning, empowering women with comprehensive skills for long-term success.
                    </p>
                  </div>
                </div>
              </div>

              {/* 2022 */}
              <div className="relative">
                <div className="flex items-center justify-center">
                  <div className="z-10 flex items-center justify-center w-12 h-12 bg-emerald-600 rounded-full text-white font-bold shadow-lg">
                    2022
                  </div>
                </div>
                <div className="mt-6 grid md:grid-cols-2 gap-8">
                  <div className="bg-white p-6 rounded-xl shadow-md md:text-right order-2 md:order-1">
                    <h3 className="text-xl font-bold text-emerald-800 mb-2">International Recognition</h3>
                    <p className="text-gray-600">
                      Project Rebirth received international recognition for our sustainable approach to women's
                      economic empowerment, opening doors to global markets for our products.
                    </p>
                  </div>
                  <div className="relative h-48 md:h-auto order-1 md:order-2">
                    <Image
                      src="/hero-pattern.jpg"
                      alt="Project Rebirth in 2022"
                      fill
                      className="rounded-xl object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* 2023 */}
              <div className="relative">
                <div className="flex items-center justify-center">
                  <div className="z-10 flex items-center justify-center w-12 h-12 bg-emerald-600 rounded-full text-white font-bold shadow-lg">
                    2023
                  </div>
                </div>
                <div className="mt-6 grid md:grid-cols-2 gap-8">
                  <div className="relative h-48 md:h-auto">
                    <Image
                      src="/hero-pattern.jpg"
                      alt="Project Rebirth in 2023"
                      fill
                      className="rounded-xl object-cover"
                    />
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <h3 className="text-xl font-bold text-emerald-800 mb-2">Community Hubs</h3>
                    <p className="text-gray-600">
                      We established three community hubs across Nigeria, creating spaces where women can work, learn,
                      and support each other while accessing resources and markets.
                    </p>
                  </div>
                </div>
              </div>

              {/* Today */}
              <div className="relative">
                <div className="flex items-center justify-center">
                  <div className="z-10 flex items-center justify-center w-12 h-12 bg-emerald-600 rounded-full text-white font-bold shadow-lg">
                    Today
                  </div>
                </div>
                <div className="mt-6 grid md:grid-cols-2 gap-8">
                  <div className="bg-white p-6 rounded-xl shadow-md md:text-right order-2 md:order-1">
                    <h3 className="text-xl font-bold text-emerald-800 mb-2">Growing Movement</h3>
                    <p className="text-gray-600">
                      Today, Project Rebirth has empowered over 500 women across Nigeria, with our products reaching
                      customers in 15 countries. We continue to expand our impact while staying true to our mission of
                      sustainable economic empowerment.
                    </p>
                  </div>
                  <div className="relative h-48 md:h-auto order-1 md:order-2">
                    <Image
                      src="/hero-pattern.jpg"
                      alt="Project Rebirth today"
                      fill
                      className="rounded-xl object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Voices of Change */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">Voices of Change</h2>
            <p className="max-w-2xl mx-auto text-lg text-gray-600">
              The women of Project Rebirth share their stories of transformation and hope.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {/* Testimonial 1 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="relative h-64">
                <Image src="/work2.jpg" alt="Amina's story" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-white">Amina</h3>
                  <p className="text-emerald-200">Seamstress & Entrepreneur</p>
                </div>
              </div>
              <div className="p-6">
                <div className="relative pl-6 border-l-2 border-emerald-500 italic text-gray-700 mb-4">
                  <Quote className="absolute -left-4 -top-1 text-emerald-500 h-6 w-6" />
                  <p>
                    Before Project Rebirth, I struggled to feed my children. Now I own my own small business and can
                    send all three of my children to school.
                  </p>
                </div>
                <p className="text-gray-600">
                  Amina joined Project Rebirth in 2019 after her husband passed away. Through our training program, she
                  mastered tailoring skills and now runs a successful small business in her community, employing two
                  other women.
                </p>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="relative h-64">
                <Image src="/work2.jpg" alt="Fatima's story" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-white">Fatima</h3>
                  <p className="text-emerald-200">Master Trainer</p>
                </div>
              </div>
              <div className="p-6">
                <div className="relative pl-6 border-l-2 border-emerald-500 italic text-gray-700 mb-4">
                  <Quote className="absolute -left-4 -top-1 text-emerald-500 h-6 w-6" />
                  <p>
                    I never imagined I would one day be teaching others. Project Rebirth didn't just give me skills—it
                    gave me confidence and purpose.
                  </p>
                </div>
                <p className="text-gray-600">
                  Fatima was in our first cohort of trainees in 2018. Today, she leads our training programs, having
                  helped over 100 women develop their skills. Her designs have been featured in national exhibitions.
                </p>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="relative h-64">
                <Image src="/work2.jpg" alt="Zainab's story" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-white">Zainab</h3>
                  <p className="text-emerald-200">Community Leader</p>
                </div>
              </div>
              <div className="p-6">
                <div className="relative pl-6 border-l-2 border-emerald-500 italic text-gray-700 mb-4">
                  <Quote className="absolute -left-4 -top-1 text-emerald-500 h-6 w-6" />
                  <p>
                    The impact goes beyond income. We've created a sisterhood where women support each other and
                    challenge harmful traditions together.
                  </p>
                </div>
                <p className="text-gray-600">
                  Zainab coordinates our rural outreach program, bringing training to remote communities. Her advocacy
                  has helped change local attitudes about women's economic roles and rights.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 md:py-24 bg-emerald-900 text-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Our Core Values</h2>
            <p className="max-w-2xl mx-auto text-lg text-emerald-100">
              The principles that guide our work and shape our impact.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="bg-emerald-800/50 p-8 rounded-xl hover:bg-emerald-800/70 transition-colors">
              <div className="w-16 h-16 bg-emerald-700 rounded-full flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Women-Centered</h3>
              <p className="text-emerald-100">
                We believe in the power, potential, and leadership of women. Our programs are designed by women, for
                women, with their needs and perspectives at the center.
              </p>
            </div>

            <div className="bg-emerald-800/50 p-8 rounded-xl hover:bg-emerald-800/70 transition-colors">
              <div className="w-16 h-16 bg-emerald-700 rounded-full flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Innovation</h3>
              <p className="text-emerald-100">
                We constantly seek creative solutions to complex challenges, blending traditional craftsmanship with
                modern design and sustainable practices.
              </p>
            </div>

            <div className="bg-emerald-800/50 p-8 rounded-xl hover:bg-emerald-800/70 transition-colors">
              <div className="w-16 h-16 bg-emerald-700 rounded-full flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Compassion</h3>
              <p className="text-emerald-100">
                We approach our work with empathy and understanding, recognizing the unique challenges faced by each
                woman and community we serve.
              </p>
            </div>

            <div className="bg-emerald-800/50 p-8 rounded-xl hover:bg-emerald-800/70 transition-colors">
              <div className="w-16 h-16 bg-emerald-700 rounded-full flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Sustainability</h3>
              <p className="text-emerald-100">
                We are committed to environmental and social sustainability in all aspects of our work, from the
                materials we use to the economic models we develop.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Looking Forward */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block rounded-lg bg-emerald-100 px-3 py-1 text-sm font-medium text-emerald-800">
                Looking Forward
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Vision for the Future</h2>
              <p className="text-lg text-gray-600">
                As we look to the future, we envision a world where every woman has the opportunity to achieve economic
                independence and contribute to sustainable development.
              </p>
              <p className="text-lg text-gray-600">Our 2022-2026 Strategic Framework outlines our ambitious goals:</p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg
                    className="h-6 w-6 text-emerald-500 mr-2 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Expand our reach to 10 more communities across West Africa</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-6 w-6 text-emerald-500 mr-2 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Train 1,000 more women in sustainable fashion and business skills</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-6 w-6 text-emerald-500 mr-2 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Establish a global marketplace for products made by our artisans</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-6 w-6 text-emerald-500 mr-2 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Advocate for policies that support women's economic empowerment</span>
                </li>
              </ul>
              <div className="pt-4">
                <Button className="bg-emerald-600 hover:bg-emerald-700">
                  Read Our Strategic Framework <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-emerald-100 rounded-full z-0"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-emerald-200 rounded-full z-0"></div>
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/home1.jpg"
                  alt="Our vision for the future"
                  width={600}
                  height={700}
                  className="w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Our Story */}
      <section className="py-16 md:py-24 bg-emerald-50">
        <div className="container">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl overflow-hidden shadow-xl">
            <div className="p-8 md:p-12 text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-4">Become Part of Our Story</h2>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Our story continues to unfold with each woman who joins our community and each person who supports our
                mission. We invite you to become part of this journey of transformation.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button className="bg-emerald-600 hover:bg-emerald-700">Support Our Work</Button>
                <Button variant="outline" className="border-emerald-600 text-emerald-600 hover:bg-emerald-50">
                  Meet Our Team
                </Button>
                <Button variant="outline" className="border-emerald-600 text-emerald-600 hover:bg-emerald-50">
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

