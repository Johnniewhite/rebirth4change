"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { MapPin, Users, Banknote, BarChart3, Globe, HeartHandshake, Scale, ArrowUpRight, ExternalLink } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function EthicalImpactPage() {
  const impactStats = [
    {
      icon: MapPin,
      value: "4 States",
      label: "Operating across 2 geopolitical zones in Nigeria"
    },
    {
      icon: Banknote,
      value: "₦10M+",
      label: "Disbursed in loans to women farmers"
    },
    {
      icon: Users,
      value: "85%+ Team",
      label: "Young women leading the change"
    },
    {
      icon: BarChart3,
      value: "Hundreds",
      label: "Women empowered with skills & finance"
    }
  ];

  const sdgGoals = [
    { sdg: 1, title: "No Poverty", color: "bg-red-500", description: "Creating sustainable livelihood opportunities." },
    { sdg: 2, title: "Zero Hunger", color: "bg-yellow-500", description: "Empowering women farmers through HerFarm initiative." },
    { sdg: 5, title: "Gender Equality", color: "bg-orange-500", description: "Championing women's economic and social transformation." },
    { sdg: 8, title: "Decent Work & Economic Growth", color: "bg-purple-600", description: "Providing skills for financial independence." },
    { sdg: 13, title: "Climate Justice", color: "bg-green-600", description: "Promoting sustainable agricultural practices." },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        {/* Hero Section with Parallax Effect */}
        <section className="relative overflow-hidden bg-gradient-to-r from-amber-600 to-orange-600 py-24 md:py-32">
          <div className="absolute inset-0 z-0 opacity-20">
            <div className="absolute inset-0 bg-[url('/impact-pattern.svg')] bg-repeat opacity-20"></div>
            <div className="absolute -bottom-16 left-0 h-48 w-48 rounded-full bg-yellow-400 blur-3xl"></div>
            <div className="absolute -right-16 top-24 h-64 w-64 rounded-full bg-orange-300 blur-3xl"></div>
          </div>
          
          <div className="container relative z-10 mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <span className="inline-block rounded-full bg-amber-200 px-4 py-1 text-sm font-semibold uppercase tracking-wide text-amber-900">
                Measuring Our Impact
              </span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-6 text-4xl font-bold tracking-tight text-white md:text-6xl"
            >
              <span className="block">Ethical Impact</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mx-auto max-w-3xl text-lg text-amber-100 md:text-xl"
            >
              Measuring our success by the positive change we create in women's lives and their communities, 
              guided by ethical principles and the Sustainable Development Goals.
            </motion.p>
          </div>
          
          <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
            <svg viewBox="0 0 1440 120" xmlns="http://www.w3.org/2000/svg">
              <path fill="#ffffff" fillOpacity="1" d="M0,64L80,85.3C160,107,320,149,480,149.3C640,149,800,107,960,96C1120,85,1280,107,1360,117.3L1440,128L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
            </svg>
          </div>
        </section>

        {/* Our Reach Section - Redesigned with Modern Cards */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4">
            <div className="mb-16 text-center">
              <span className="mb-4 inline-block rounded-full bg-orange-100 px-4 py-1 text-sm font-semibold text-orange-800">
                By The Numbers
              </span>
              <h2 className="mb-4 text-3xl font-bold text-gray-800 md:text-4xl">
                Our Reach & Impact
              </h2>
              <div className="mx-auto mb-0 h-1 w-24 rounded-full bg-orange-500"></div>
            </div>
            
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {impactStats.map((stat, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative overflow-hidden rounded-2xl border border-orange-100 bg-white p-8 text-center shadow-lg transition-all duration-300 hover:border-orange-200 hover:shadow-xl"
                >
                  <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br from-orange-100 to-orange-50 opacity-80 transition-all duration-300 group-hover:scale-110"></div>
                  <div className="relative">
                    <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-white">
                      <stat.icon className="h-8 w-8" />
                    </div>
                    <p className="mb-2 text-4xl font-bold text-orange-600">{stat.value}</p>
                    <p className="text-gray-600">{stat.label}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SDG Focus Section - More Engaging Design */}
        <section className="bg-gray-50 py-20 md:py-28">
          <div className="container mx-auto px-4">
            <div className="mb-16 text-center">
              <span className="mb-4 inline-block rounded-full bg-amber-100 px-4 py-1 text-sm font-semibold text-amber-800">
                Global Goals
              </span>
              <h2 className="mb-4 text-3xl font-bold text-gray-800 md:text-4xl">
                Advancing Sustainable Development Goals
              </h2>
              <div className="mx-auto mb-6 h-1 w-24 rounded-full bg-amber-500"></div>
              <p className="mx-auto max-w-3xl text-lg text-gray-600">
                Our programs are intentionally designed to contribute to these global goals, 
                ensuring our impact is both meaningful and sustainable.
              </p>
            </div>
            
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {sdgGoals.map((goal, index) => (
                <motion.div 
                  key={goal.sdg} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative overflow-hidden rounded-xl p-8 shadow-lg transition-transform duration-300 hover:-translate-y-1 ${goal.color}`}
                >
                  <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-white opacity-10"></div>
                  <div className="mb-6 flex items-center gap-3">
                    <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-white font-bold ${goal.color.replace('bg-', 'text-')}`}>
                      {goal.sdg}
                    </div>
                    <h3 className="text-2xl font-bold text-white">{goal.title}</h3>
                  </div>
                  <p className="text-white opacity-90">{goal.description}</p>
                  <Link href="#" className="mt-6 inline-flex items-center text-white underline decoration-2 underline-offset-4 hover:opacity-90">
                    Learn more <ArrowUpRight className="ml-1 h-4 w-4" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stories of Change Section - More Engaging Placeholder */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4">
            <div className="mb-16 text-center">
              <span className="mb-4 inline-block rounded-full bg-purple-100 px-4 py-1 text-sm font-semibold text-purple-800">
                Inspiration
              </span>
              <h2 className="mb-4 text-3xl font-bold text-gray-800 md:text-4xl">
                Stories of Transformation
              </h2>
              <div className="mx-auto mb-6 h-1 w-24 rounded-full bg-purple-500"></div>
              <p className="mx-auto max-w-3xl text-lg text-gray-600">
                Read inspiring stories from the women whose lives have been transformed through Project Rebirth.
              </p>
            </div>
            
            {/* Placeholder for testimonials - Made more engaging */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative mx-auto max-w-5xl overflow-hidden rounded-2xl bg-gradient-to-r from-purple-50 to-amber-50 p-8 shadow-md md:p-12"
            >
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-orange-100 opacity-60"></div>
              <div className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-purple-100 opacity-60"></div>
              
              <div className="relative z-10 text-center">
                <HeartHandshake className="mx-auto mb-8 h-16 w-16 text-purple-500 opacity-90" />
                <h3 className="mb-4 text-2xl font-bold text-gray-800">Coming Soon</h3>
                <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-600">
                  We're collecting powerful stories from the women in our programs. 
                  Check back soon to read about their journeys, challenges, and triumphs.
                </p>
                <Button className="bg-gradient-to-r from-purple-600 to-orange-600 transition-all duration-300 hover:from-purple-700 hover:to-orange-700">
                  Be notified when stories are published
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section - Reimagined */}
        <section className="relative overflow-hidden bg-gradient-to-r from-amber-500 to-orange-600 py-20 md:py-28">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-[url('/dots-pattern.svg')] bg-repeat opacity-10"></div>
            <div className="absolute -left-20 top-20 h-80 w-80 rounded-full bg-white opacity-10 blur-3xl"></div>
            <div className="absolute -bottom-40 -right-20 h-96 w-96 rounded-full bg-yellow-300 opacity-20 blur-3xl"></div>
          </div>
          
          <div className="container relative z-10 mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mx-auto max-w-3xl"
            >
              <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl">
                Join Us in Creating Lasting Change
              </h2>
              <p className="mb-10 text-lg text-amber-100">
                Your contribution helps us reach more women and expand our programs, 
                creating ripples of positive change across communities.
              </p>
              
              <div className="flex flex-wrap justify-center gap-6">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Button 
                    size="lg" 
                    asChild 
                    className="relative overflow-hidden bg-white px-8 py-6 font-semibold text-orange-600 shadow-lg transition-all duration-300 hover:shadow-orange-200/50"
                  >
                    <Link href="/get-involved#donate" className="flex items-center gap-2">
                      <span className="absolute -left-10 -top-10 h-20 w-20 rounded-full bg-amber-100 opacity-50"></span>
                      <span className="absolute -bottom-10 -right-10 h-20 w-20 rounded-full bg-orange-100 opacity-50"></span>
                      <span className="relative z-10 flex items-center gap-2">
                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-100">❤️</span> 
                        Donate Now
                        <ArrowUpRight className="ml-1 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                    </Link>
                  </Button>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Button 
                    size="lg" 
                    asChild 
                    className="relative overflow-hidden border-0 bg-gradient-to-r from-orange-500 to-amber-500 px-8 py-6 font-semibold text-white shadow-lg transition-all duration-300 hover:from-orange-600 hover:to-amber-600 hover:shadow-orange-700/30"
                  >
                    <Link href="mailto:team@rebirth4change.org?subject=Volunteer%20Inquiry" className="flex items-center gap-2">
                      <span className="absolute -left-10 -top-10 h-20 w-20 rounded-full bg-white opacity-10"></span>
                      <span className="absolute -bottom-10 -right-10 h-20 w-20 rounded-full bg-white opacity-10"></span>
                      <span className="relative z-10 flex items-center gap-2">
                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20">🤝</span>
                        Volunteer With Us
                      </span>
                    </Link>
                  </Button>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Button 
                    size="lg" 
                    asChild 
                    className="group relative overflow-hidden border-2 border-white bg-transparent px-8 py-6 font-semibold text-white backdrop-blur-sm transition-all duration-500 hover:bg-white hover:text-orange-600"
                  >
                    <Link href="/get-involved#partner" className="flex items-center gap-2">
                      <span className="relative z-10 flex items-center gap-2">
                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 transition-colors duration-500 group-hover:bg-amber-100">🌟</span>
                        Become a Partner
                      </span>
                    </Link>
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
} 