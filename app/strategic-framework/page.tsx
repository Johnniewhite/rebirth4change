"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Target, Compass, BarChart, FileText, ExternalLink, ArrowUpRight, LightbulbIcon, Zap, Network } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function StrategicFrameworkPage() {
  const pillars = [
    {
      icon: Target,
      title: "Strategic Pillar 1",
      description: "Expanding our reach to more displaced communities across Nigeria and neighboring countries.",
      color: "from-blue-500 to-indigo-600",
      textColor: "text-blue-700",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-100"
    },
    {
      icon: Compass,
      title: "Strategic Pillar 2",
      description: "Strengthening our core programs through improved monitoring, evaluation, and learning systems.",
      color: "from-purple-500 to-violet-600",
      textColor: "text-purple-700",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-100"
    },
    {
      icon: Network,
      title: "Strategic Pillar 3",
      description: "Fostering strategic partnerships with governments, NGOs, and private sector organizations.",
      color: "from-indigo-500 to-blue-600",
      textColor: "text-indigo-700",
      bgColor: "bg-indigo-50",
      borderColor: "border-indigo-100"
    }
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-700 py-24 md:py-32">
          <div className="absolute inset-0 z-0 opacity-30">
            <div className="absolute inset-0 bg-[url('/pattern-dots.svg')] bg-repeat opacity-20"></div>
            <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-blue-400 blur-3xl"></div>
            <div className="absolute -right-24 top-24 h-64 w-64 rounded-full bg-indigo-400 blur-3xl"></div>
          </div>
          
          <div className="container relative z-10 mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <span className="inline-block rounded-full bg-blue-200 px-4 py-1 text-sm font-semibold uppercase tracking-wide text-blue-900">
                Our Future Direction
              </span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-6 text-4xl font-bold tracking-tight text-white md:text-6xl"
            >
              <span className="block">2022-2026 Strategic Framework</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mx-auto max-w-3xl text-lg text-blue-100 md:text-xl"
            >
              Our roadmap for empowering women and driving sustainable change over the next five years.
            </motion.p>
          </div>
          
          <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
            <svg viewBox="0 0 1440 120" xmlns="http://www.w3.org/2000/svg">
              <path fill="#ffffff" fillOpacity="1" d="M0,32L80,58.7C160,85,320,139,480,149.3C640,160,800,128,960,117.3C1120,107,1280,117,1360,122.7L1440,128L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
            </svg>
          </div>
        </section>

        {/* Framework Overview Section */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4">
            <div className="mb-16 text-center">
              <span className="mb-4 inline-block rounded-full bg-indigo-100 px-4 py-1 text-sm font-semibold text-indigo-800">
                Overview
              </span>
              <h2 className="mb-4 text-3xl font-bold text-gray-800 md:text-4xl">
                Guiding Our Path Forward
              </h2>
              <div className="mx-auto mb-6 h-1 w-24 rounded-full bg-indigo-500"></div>
              <p className="mx-auto max-w-3xl text-lg text-gray-600">
                Our strategic framework outlines key priorities, goals, and initiatives that will shape Project Rebirth's work from 2022 to 2026. It reflects our commitment to maximizing impact and ensuring long-term sustainability.
              </p>
            </div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative mx-auto mb-20 max-w-5xl overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-700 p-8 text-white shadow-xl md:p-12"
            >
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white opacity-10"></div>
              <div className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-white opacity-10"></div>
              
              <div className="relative z-10">
                <Zap className="mb-6 h-16 w-16 text-blue-200" />
                <h3 className="mb-4 text-2xl font-bold">Our Vision for 2026</h3>
                <p className="mb-6 text-lg leading-relaxed text-blue-100">
                  By 2026, Project Rebirth aims to be the leading catalyst for women's economic empowerment across West Africa, creating sustainable livelihood opportunities for over 10,000 women and establishing replicable models that can be scaled by other organizations.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm backdrop-blur-sm">
                    <span className="h-3 w-3 rounded-full bg-blue-300"></span>
                    Expanded geographic reach
                  </div>
                  <div className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm backdrop-blur-sm">
                    <span className="h-3 w-3 rounded-full bg-blue-300"></span>
                    Strengthened programs
                  </div>
                  <div className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm backdrop-blur-sm">
                    <span className="h-3 w-3 rounded-full bg-blue-300"></span>
                    Strategic partnerships
                  </div>
                  <div className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm backdrop-blur-sm">
                    <span className="h-3 w-3 rounded-full bg-blue-300"></span>
                    Enhanced M&E systems
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Strategic Pillars */}
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {pillars.map((pillar, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`group relative overflow-hidden rounded-2xl border ${pillar.borderColor} ${pillar.bgColor} p-8 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl`}
                >
                  <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-white opacity-50 transition-transform duration-300 group-hover:scale-110"></div>
                  <div className="relative">
                    <div className={`mb-6 inline-flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-r ${pillar.color} text-white`}>
                      <pillar.icon className="h-8 w-8" />
                    </div>
                    <h3 className={`mb-4 text-xl font-bold ${pillar.textColor} md:text-2xl`}>{pillar.title}</h3>
                    <p className="mb-6 text-gray-600">{pillar.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Download Link (Placeholder) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-16 text-center"
            >
              <div className="inline-block overflow-hidden rounded-2xl bg-indigo-50 p-8 shadow-md">
                <FileText className="mx-auto mb-4 h-12 w-12 text-indigo-600" />
                <h3 className="mb-4 text-xl font-bold text-gray-800">Full Framework Document</h3>
                <p className="mb-6 text-gray-600">
                  Our detailed strategic framework outlines our approach, goals, and implementation timeline.
                </p>
                <Button disabled variant="outline" className="border-indigo-600 text-indigo-600 opacity-50 cursor-not-allowed">
                  <FileText className="mr-2 h-5 w-5" />
                  Document Coming Soon
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Key Objectives Section */}
        <section className="bg-indigo-50 py-20 md:py-28">
          <div className="container mx-auto px-4">
            <div className="mb-16 text-center">
              <span className="mb-4 inline-block rounded-full bg-blue-100 px-4 py-1 text-sm font-semibold text-blue-800">
                Our Objectives
              </span>
              <h2 className="mb-4 text-3xl font-bold text-gray-800 md:text-4xl">
                Strategic Priorities
              </h2>
              <div className="mx-auto mb-6 h-1 w-24 rounded-full bg-blue-500"></div>
            </div>
            
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="rounded-2xl bg-white p-8 shadow-md"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                  <span className="text-lg font-bold">01</span>
                </div>
                <h3 className="mb-3 text-xl font-bold text-gray-800">Expand Our Reach</h3>
                <p className="text-gray-600">Increase the number of women served by 150% by 2026, expanding to three additional states within Nigeria and exploring opportunities in neighboring countries.</p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="rounded-2xl bg-white p-8 shadow-md"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                  <span className="text-lg font-bold">02</span>
                </div>
                <h3 className="mb-3 text-xl font-bold text-gray-800">Enhance Program Quality</h3>
                <p className="text-gray-600">Implement rigorous monitoring and evaluation systems to measure impact, refine program models, and ensure maximum effectiveness of interventions.</p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="rounded-2xl bg-white p-8 shadow-md"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                  <span className="text-lg font-bold">03</span>
                </div>
                <h3 className="mb-3 text-xl font-bold text-gray-800">Build Strategic Partnerships</h3>
                <p className="text-gray-600">Develop collaborations with governments, NGOs, and private sector entities to leverage resources, extend reach, and create more sustainable impact models.</p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="rounded-2xl bg-white p-8 shadow-md"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                  <span className="text-lg font-bold">04</span>
                </div>
                <h3 className="mb-3 text-xl font-bold text-gray-800">Strengthen Organization Capacity</h3>
                <p className="text-gray-600">Invest in staff development, technology infrastructure, and processes to build a more resilient and effective organization capable of scaling our impact.</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-700 py-20 md:py-28">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-[url('/pattern-grid.svg')] bg-repeat opacity-10"></div>
            <div className="absolute -left-20 top-20 h-80 w-80 rounded-full bg-white opacity-10 blur-3xl"></div>
            <div className="absolute -bottom-40 -right-20 h-96 w-96 rounded-full bg-blue-300 opacity-20 blur-3xl"></div>
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
                Be Part of Our Strategic Journey
              </h2>
              <p className="mb-10 text-lg text-blue-100">
                Join us as we implement our framework and work to create lasting change for women and communities across West Africa.
              </p>
              
              <div className="flex flex-wrap justify-center gap-6">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Button 
                    size="lg" 
                    asChild 
                    className="relative overflow-hidden bg-white px-8 py-6 font-semibold text-blue-600 shadow-lg transition-all duration-300 hover:shadow-blue-200/50"
                  >
                    <Link href="/contact" className="flex items-center gap-2">
                      <span className="absolute -left-10 -top-10 h-20 w-20 rounded-full bg-blue-100 opacity-50"></span>
                      <span className="absolute -bottom-10 -right-10 h-20 w-20 rounded-full bg-indigo-100 opacity-50"></span>
                      <span className="relative z-10 flex items-center gap-2">
                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100">📧</span> 
                        Contact Us
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
                    className="group relative overflow-hidden border-2 border-white bg-transparent px-8 py-6 font-semibold text-white backdrop-blur-sm transition-all duration-500 hover:bg-white hover:text-indigo-700"
                  >
                    <Link href="/ethical-impact" className="flex items-center gap-2">
                      <span className="relative z-10 flex items-center gap-2">
                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 transition-colors duration-500 group-hover:bg-indigo-100">📊</span>
                        See Our Impact
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