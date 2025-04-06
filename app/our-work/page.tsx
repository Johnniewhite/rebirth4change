"use client";

import Image from "next/image";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Leaf, Users, Banknote, ArrowRight, Award, ChevronRight, ExternalLink, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function OurWorkPage() {
  const workItems = [
    {
      icon: Leaf,
      title: "HerFarm Initiative",
      description: "Training young women from displacement camps in sustainable agriculture and linking them with mentors and markets.",
      color: "from-green-500 to-emerald-600",
      textColor: "text-green-700",
      bgColor: "bg-green-50",
      borderColor: "border-green-100",
      iconBg: "bg-green-100"
    },
    {
      icon: Award,
      title: "Women's Skills & Entrepreneurship Training",
      description: "Teaching business development, financial literacy, and practical vocational skills to ensure long-term economic independence.",
      color: "from-blue-500 to-indigo-600",
      textColor: "text-blue-700",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-100",
      iconBg: "bg-blue-100"
    },
    {
      icon: Banknote,
      title: "Access to Capital",
      description: "Providing small business grants and microloans to women entrepreneurs, enabling them to scale their ventures.",
      color: "from-purple-500 to-violet-600",
      textColor: "text-purple-700",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-100",
      iconBg: "bg-purple-100"
    },
    {
      icon: Users,
      title: "Community Development & Leadership",
      description: "Encouraging women to take active roles in their communities through leadership training and advocacy programs.",
      color: "from-orange-500 to-amber-600",
      textColor: "text-orange-700",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-100",
      iconBg: "bg-orange-100"
    }
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-r from-emerald-600 to-teal-700 py-24 md:py-36">
          <div className="absolute inset-0 z-0 opacity-30">
            <div className="absolute inset-0 bg-[url('/pattern-dots.svg')] bg-repeat opacity-20"></div>
            <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-emerald-400 blur-3xl"></div>
            <div className="absolute -right-24 top-24 h-64 w-64 rounded-full bg-teal-400 blur-3xl"></div>
          </div>
          
          <div className="container relative z-10 mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <span className="inline-block rounded-full bg-emerald-200 px-4 py-1 text-sm font-semibold uppercase tracking-wide text-emerald-900">
                Creating Change
              </span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-6 text-4xl font-bold tracking-tight text-white md:text-6xl"
            >
              <span className="block">Our Work</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mx-auto max-w-3xl text-lg text-emerald-100 md:text-xl"
            >
              Empowering women through targeted initiatives designed for sustainable economic and social transformation.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-12"
            >
              <Button size="lg" asChild className="group rounded-full bg-white font-semibold text-emerald-700 transition-all duration-300 hover:bg-emerald-50">
                <Link href="#programs" className="inline-flex items-center">
                  Explore Our Programs
                  <ChevronRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
            </motion.div>
          </div>
          
          <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
            <svg viewBox="0 0 1440 120" xmlns="http://www.w3.org/2000/svg">
              <path fill="#ffffff" fillOpacity="1" d="M0,96L80,85.3C160,75,320,53,480,58.7C640,64,800,96,960,101.3C1120,107,1280,85,1360,74.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
            </svg>
          </div>
        </section>

        {/* Empowering Women Section */}
        <section id="programs" className="py-20 md:py-28">
          <div className="container mx-auto px-4">
            <div className="mb-16 text-center">
              <span className="mb-4 inline-block rounded-full bg-teal-100 px-4 py-1 text-sm font-semibold text-teal-800">
                Our Programs
              </span>
              <h2 className="mb-4 text-3xl font-bold text-gray-800 md:text-4xl">
                Empowering Women Through
              </h2>
              <div className="mx-auto mb-6 h-1 w-24 rounded-full bg-teal-500"></div>
              <p className="mx-auto max-w-3xl text-lg text-gray-600">
                Each program is tailored to address the unique needs of the women we serve, ensuring that they gain both the confidence and the tools to build their futures.
              </p>
            </div>
            
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {workItems.map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`group relative overflow-hidden rounded-2xl border ${item.borderColor} ${item.bgColor} p-8 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl`}
                >
                  <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-white opacity-50 transition-transform duration-300 group-hover:scale-110"></div>
                  <div className="relative">
                    <div className={`mb-6 inline-flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-r ${item.color} text-white`}>
                      <item.icon className="h-8 w-8" />
                    </div>
                    <h3 className={`mb-4 text-xl font-bold ${item.textColor} md:text-2xl`}>{item.title}</h3>
                    <p className="mb-6 text-gray-600">{item.description}</p>
                    <Link href={`/our-work/${item.title.toLowerCase().replace(/\s+/g, '-')}`} className={`inline-flex items-center font-medium ${item.textColor} hover:underline`}>
                      Learn more <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Image Section */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mt-20 overflow-hidden rounded-2xl"
            >
              <div className="relative h-96 w-full overflow-hidden md:h-[500px]">
                <Image 
                  src="/hero-pattern.jpg" 
                  alt="Women entrepreneurs working together" 
                  fill
                  className="object-cover object-top transition-transform duration-10000 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8 text-white md:max-w-lg">
                  <h3 className="mb-3 text-2xl font-bold">Our Impact in Action</h3>
                  <p className="mb-4 text-emerald-100">See how our programs are transforming lives and communities across Nigeria, creating new opportunities for women to thrive.</p>
                  <Button variant="outline" className="border-2 border-white bg-transparent text-white backdrop-blur-sm hover:bg-white/20">
                    View Success Stories
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-emerald-50 py-20 md:py-28">
          <div className="container mx-auto px-4">
            <div className="mb-16 text-center">
              <span className="mb-4 inline-block rounded-full bg-emerald-100 px-4 py-1 text-sm font-semibold text-emerald-800">
                Our Approach
              </span>
              <h2 className="mb-4 text-3xl font-bold text-gray-800 md:text-4xl">
                How We Make a Difference
              </h2>
              <div className="mx-auto mb-0 h-1 w-24 rounded-full bg-emerald-500"></div>
            </div>
            
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="overflow-hidden rounded-2xl bg-white p-8 shadow-md"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                  <span className="text-xl font-bold">01</span>
                </div>
                <h3 className="mb-3 text-xl font-bold text-gray-800">Tailored Programs</h3>
                <p className="text-gray-600">We design interventions specific to the unique needs of each community, ensuring cultural relevance and maximum impact.</p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="overflow-hidden rounded-2xl bg-white p-8 shadow-md"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                  <span className="text-xl font-bold">02</span>
                </div>
                <h3 className="mb-3 text-xl font-bold text-gray-800">Sustainable Models</h3>
                <p className="text-gray-600">Our initiatives are designed to create long-term change, with frameworks that continue to operate beyond our direct involvement.</p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="overflow-hidden rounded-2xl bg-white p-8 shadow-md"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                  <span className="text-xl font-bold">03</span>
                </div>
                <h3 className="mb-3 text-xl font-bold text-gray-800">Measurable Impact</h3>
                <p className="text-gray-600">We track progress and outcomes carefully, ensuring that our interventions are creating meaningful change in women's lives.</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="relative overflow-hidden bg-gradient-to-r from-teal-600 to-emerald-700 py-20 md:py-28">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-[url('/pattern-grid.svg')] bg-repeat opacity-10"></div>
            <div className="absolute -left-20 top-20 h-80 w-80 rounded-full bg-white opacity-10 blur-3xl"></div>
            <div className="absolute -bottom-40 -right-20 h-96 w-96 rounded-full bg-teal-300 opacity-20 blur-3xl"></div>
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
                Join Us in Creating a World Where Every Woman Has the Power to Thrive
              </h2>
              <p className="mb-10 text-lg text-teal-100">
                Your support makes a real difference in the lives of women and their communities. Together, we can break cycles of poverty and create lasting change.
              </p>
              
              <div className="flex flex-wrap justify-center gap-6">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Button 
                    size="lg" 
                    asChild 
                    className="relative overflow-hidden bg-white px-8 py-6 font-semibold text-emerald-700 shadow-lg transition-all duration-300 hover:shadow-emerald-200/50"
                  >
                    <Link href="/get-involved#donate" className="flex items-center gap-2">
                      <span className="absolute -left-10 -top-10 h-20 w-20 rounded-full bg-emerald-100 opacity-50"></span>
                      <span className="absolute -bottom-10 -right-10 h-20 w-20 rounded-full bg-teal-100 opacity-50"></span>
                      <span className="relative z-10 flex items-center gap-2">
                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100">💚</span> 
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
                    className="relative overflow-hidden border-0 bg-gradient-to-r from-emerald-500 to-teal-500 px-8 py-6 font-semibold text-white shadow-lg transition-all duration-300 hover:from-emerald-600 hover:to-teal-600 hover:shadow-emerald-700/30"
                  >
                    <Link href="/get-involved#volunteer" className="flex items-center gap-2">
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
                    className="group relative overflow-hidden border-2 border-white bg-transparent px-8 py-6 font-semibold text-white backdrop-blur-sm transition-all duration-500 hover:bg-white hover:text-emerald-700"
                  >
                    <Link href="/get-involved#partner" className="flex items-center gap-2">
                      <span className="relative z-10 flex items-center gap-2">
                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 transition-colors duration-500 group-hover:bg-emerald-100">🌟</span>
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