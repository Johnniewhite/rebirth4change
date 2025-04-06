"use client";

import { Button } from "@/components/ui/button";
import { Handshake, Mail, Building, Star, ArrowUpRight, Globe, ArrowRight, ExternalLink, Users, Award, Heart, Target } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.15,
      ease: [0.215, 0.61, 0.355, 1]
    }
  })
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.3
    }
  }
};

export default function PartnersPage() {
  // State for tracking animations on scroll
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Partner categories with data
  const partnerCategories = [
    {
      title: "Corporate Partners",
      subtitle: "Businesses driving sustainable change",
      partners: [],
      icon: Building,
      color: "from-indigo-500 to-violet-600",
      bgColor: "bg-indigo-50",
      decorColor: "bg-indigo-300"
    },
    {
      title: "NGO Collaborators",
      subtitle: "Organizations amplifying our mission",
      partners: [],
      icon: Users,
      color: "from-pink-500 to-rose-600",
      bgColor: "bg-pink-50",
      decorColor: "bg-pink-300"
    },
    {
      title: "Educational Institutions",
      subtitle: "Knowledge partners empowering through education",
      partners: [],
      icon: Award,
      color: "from-amber-500 to-orange-600",
      bgColor: "bg-amber-50",
      decorColor: "bg-amber-300"
    }
  ];

  // Empty testimonials array to avoid displaying fictional testimonials
  const testimonials = [];

  // Impact statistics
  const impactStats = [
    { number: "4", label: "States in Nigeria", icon: Globe },
    { number: "10M+", label: "Naira in Loans", icon: Target },
    { number: "85%", label: "Women-Led Team", icon: Users },
    { number: "100s", label: "Women Empowered", icon: Heart }
  ];

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-white to-purple-50/30">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-purple-600 via-violet-600 to-pink-600 pt-24 pb-16 md:pt-32 md:pb-24">
          <div className="absolute inset-0 z-0 opacity-30">
            <div className="absolute inset-0 bg-[url('/pattern-dots.svg')] bg-repeat opacity-20"></div>
            <motion.div 
              initial={{ scale: 0.8, opacity: 0.5 }}
              animate={{ scale: 1, opacity: 0.6 }}
              transition={{ duration: 10, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
              className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-purple-400 blur-[100px]"
            />
            <motion.div 
              initial={{ scale: 0.9, opacity: 0.5 }}
              animate={{ scale: 1.1, opacity: 0.6 }}
              transition={{ duration: 8, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 1 }}
              className="absolute -right-24 top-24 h-96 w-96 rounded-full bg-pink-400 blur-[100px]"
            />
          </div>
          
          <div className="container relative z-8 mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <span className="inline-block rounded-full bg-white/20 backdrop-blur-sm px-6 py-2 text-sm font-bold uppercase tracking-wider text-white">
                Collaboration for Impact
              </span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-6 text-5xl font-bold tracking-tight text-white md:text-7xl"
            >
              <span className="block">Our <span className="relative">Partners
                <span className="absolute -bottom-2 left-0 h-2 w-full bg-pink-400 opacity-70"></span>
              </span></span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mx-auto max-w-3xl text-lg text-purple-100 md:text-xl"
            >
              Project Rebirth is a women-led initiative dedicated to equipping women in refugee camps, displacement camps, and rural communities with the skills, resources, and economic opportunities they need to build sustainable futures.
            </motion.p>

            {/* Impact Stats Cards */}
            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4 lg:mx-auto lg:max-w-5xl"
            >
              {impactStats.map((stat, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  custom={i}
                  className="group relative overflow-hidden rounded-xl bg-white/10 backdrop-blur-sm p-4 text-white hover:bg-white/15 transition-colors duration-300"
                >
                  <div className="absolute -right-4 -top-4 h-16 w-16 rounded-full bg-white opacity-5 group-hover:scale-150 transition-transform duration-700"></div>
                  <div className="flex flex-col items-center">
                    <stat.icon className="mb-2 h-6 w-6 text-pink-300" />
                    <span className="text-3xl font-bold">{stat.number}</span>
                    <span className="mt-1 text-sm font-medium text-purple-100">{stat.label}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
          
          <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
            <svg viewBox="0 0 1440 120" xmlns="http://www.w3.org/2000/svg">
              <path fill="#ffffff" fillOpacity="1" d="M0,96L80,80C160,64,320,32,480,42.7C640,53,800,107,960,117.3C1120,128,1280,96,1360,80L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
            </svg>
          </div>
        </section>

        {/* Our Work Section */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4">
            <div className="mx-auto mb-20 max-w-3xl text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <span className="mb-4 inline-block rounded-full bg-purple-100 px-4 py-1 text-sm font-semibold text-purple-800">
                  Our Work
                </span>
                <h2 className="mb-4 text-3xl font-bold text-gray-800 md:text-5xl">
                  Empowering Women Through
                </h2>
                <div className="mx-auto mb-6 h-1 w-24 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"></div>
                <p className="mx-auto max-w-3xl text-lg text-gray-600">
                  Through skills training, access to financing, and entrepreneurship support, we empower women to break cycles of poverty and create lasting change for themselves and their communities.
                </p>
              </motion.div>
            </div>
            
            {/* Our Initiatives */}
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:mx-auto lg:max-w-5xl">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-8 shadow-xl"
              >
                <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gradient-to-br from-white via-green-50 to-green-100 opacity-50 transition-transform duration-500 group-hover:scale-125"></div>
                
                <div className="relative z-10">
                  <div className="mb-2 flex justify-between">
                    <span className="inline-block rounded-full px-3 py-1 text-xs font-medium bg-green-50 text-green-700">
                      Agriculture
                    </span>
                  </div>
                  
                  <h3 className="mb-3 text-xl font-bold text-gray-800">HerFarm Initiative</h3>
                  <p className="mb-6 text-gray-600">Training young women from displacement camps in sustainable agriculture and linking them with mentors and markets.</p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-8 shadow-xl"
              >
                <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gradient-to-br from-white via-blue-50 to-blue-100 opacity-50 transition-transform duration-500 group-hover:scale-125"></div>
                
                <div className="relative z-10">
                  <div className="mb-2 flex justify-between">
                    <span className="inline-block rounded-full px-3 py-1 text-xs font-medium bg-blue-50 text-blue-700">
                      Education
                    </span>
                  </div>
                  
                  <h3 className="mb-3 text-xl font-bold text-gray-800">Skills & Entrepreneurship Training</h3>
                  <p className="mb-6 text-gray-600">Teaching business development, financial literacy, and practical vocational skills to ensure long-term economic independence.</p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-8 shadow-xl"
              >
                <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gradient-to-br from-white via-amber-50 to-amber-100 opacity-50 transition-transform duration-500 group-hover:scale-125"></div>
                
                <div className="relative z-10">
                  <div className="mb-2 flex justify-between">
                    <span className="inline-block rounded-full px-3 py-1 text-xs font-medium bg-amber-50 text-amber-700">
                      Funding
                    </span>
                  </div>
                  
                  <h3 className="mb-3 text-xl font-bold text-gray-800">Access to Capital</h3>
                  <p className="mb-6 text-gray-600">Providing small business grants and microloans to women entrepreneurs, enabling them to scale their ventures.</p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-8 shadow-xl"
              >
                <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gradient-to-br from-white via-purple-50 to-purple-100 opacity-50 transition-transform duration-500 group-hover:scale-125"></div>
                
                <div className="relative z-10">
                  <div className="mb-2 flex justify-between">
                    <span className="inline-block rounded-full px-3 py-1 text-xs font-medium bg-purple-50 text-purple-700">
                      Leadership
                    </span>
                  </div>
                  
                  <h3 className="mb-3 text-xl font-bold text-gray-800">Community Development & Leadership</h3>
                  <p className="mb-6 text-gray-600">Encouraging women to take active roles in their communities through leadership training and advocacy programs.</p>
                </div>
              </motion.div>
            </div>
            
            {/* As seen on section */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-20 mb-0 rounded-3xl bg-gradient-to-b from-indigo-50 to-purple-50 p-8 md:p-16"
            >
              <div className="mb-8 text-center">
                <span className="mb-4 inline-block rounded-full bg-indigo-100 px-4 py-1 text-sm font-semibold text-indigo-800">
                  Recognition
                </span>
                <h3 className="mb-4 text-3xl font-bold text-gray-800">As Seen On</h3>
                <div className="mx-auto h-1 w-24 rounded-full bg-indigo-500"></div>
              </div>
              
              <div className="mx-auto max-w-4xl">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                  <div className="group flex flex-col items-center justify-center rounded-lg border border-indigo-100 bg-white p-6 text-center shadow-md transition-all duration-300 hover:shadow-lg">
                    <Image 
                      src="/womenofthefuture.webp" 
                      alt="Women of the Future UK" 
                      width={200} 
                      height={80} 
                      className="h-16 object-contain"
                    />
                  </div>
                  
                  <div className="group flex flex-col items-center justify-center rounded-lg border border-indigo-100 bg-white p-6 text-center shadow-md transition-all duration-300 hover:shadow-lg">
                    <Image 
                      src="/globalsolutions.webp" 
                      alt="Global Solutions Initiative" 
                      width={200} 
                      height={80} 
                      className="h-16 object-contain"
                    />
                  </div>
                  
                  <div className="group flex flex-col items-center justify-center rounded-2xl border border-indigo-100 bg-white text-center shadow-md transition-all duration-300 hover:shadow-lg">
                    <Image 
                      src="/maputo.png" 
                      alt="Maputo Protocol Solidarity Awards" 
                      width={200} 
                      height={80} 
                      className="w-full h-full rounded-lg border object-contain"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Partnership Benefits */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mt-24 mb-24 overflow-hidden rounded-3xl shadow-2xl"
            >
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute h-full w-full">
                    <div className="h-full w-full bg-[url('/partners-image.jpg')] bg-cover bg-center"></div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-0 left-0 w-full p-8 text-white">
                    <h3 className="mb-2 text-2xl font-bold">Impact Stories</h3>
                    <p className="text-purple-100">Transforming lives through sustainable partnerships</p>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-purple-700 to-indigo-800 p-8 text-white md:p-12">
                  <h3 className="mb-8 text-2xl font-bold">Why Partner With Us?</h3>
                  <ul className="space-y-6">
                    <motion.li 
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.1 }}
                      className="flex items-start gap-4"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/20 text-white">
                        <Star className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="mb-1 font-semibold">Meaningful Impact</h4>
                        <p className="text-purple-100">Create transformative social impact for vulnerable women in Nigerian communities</p>
                      </div>
                    </motion.li>
                    <motion.li 
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.2 }}
                      className="flex items-start gap-4"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/20 text-white">
                        <Star className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="mb-1 font-semibold">Sustainable Development Goals</h4>
                        <p className="text-purple-100">Align with UN SDGs including gender equality, poverty reduction, and economic growth</p>
                      </div>
                    </motion.li>
                    <motion.li 
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.3 }}
                      className="flex items-start gap-4"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/20 text-white">
                        <Star className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="mb-1 font-semibold">Brand Enhancement</h4>
                        <p className="text-purple-100">Build your brand's reputation through meaningful social responsibility initiatives</p>
                      </div>
                    </motion.li>
                    <motion.li 
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.4 }}
                      className="flex items-start gap-4"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/20 text-white">
                        <Star className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="mb-1 font-semibold">Local Expertise</h4>
                        <p className="text-purple-100">Access our established networks across 4 states and 2 geopolitical zones in Nigeria</p>
                      </div>
                    </motion.li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Become a Partner Section */}
        <section className="relative overflow-hidden bg-gradient-to-r from-indigo-700 via-violet-700 to-purple-700 py-20 md:py-28">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-[url('/pattern-grid.svg')] bg-repeat opacity-10"></div>
            <motion.div
              initial={{ scale: 1 }}
              animate={{ scale: 1.2 }}
              transition={{ duration: 15, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
              className="absolute -left-20 top-20 h-80 w-80 rounded-full bg-white opacity-10 blur-3xl"
            />
            <motion.div 
              initial={{ scale: 1 }}
              animate={{ scale: 1.3 }}
              transition={{ duration: 18, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 2 }}
              className="absolute -bottom-40 -right-20 h-96 w-96 rounded-full bg-pink-300 opacity-20 blur-3xl"
            />
          </div>
          
          <div className="container relative z-10 mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mx-auto max-w-3xl"
            >
              <Handshake className="mx-auto mb-6 h-16 w-16 text-indigo-200" />
              <h2 className="mb-6 text-3xl font-bold text-white md:text-5xl">
                Join Our Mission
              </h2>
              <p className="mb-10 text-lg text-indigo-100">
                Are you an organization, foundation, or individual looking to make a lasting difference in the lives of women? Let's collaborate to empower communities and drive sustainable change together.
              </p>
              
              <div className="flex flex-wrap justify-center gap-6">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Button 
                    size="lg" 
                    asChild 
                    className="relative overflow-hidden bg-white px-8 py-6 font-semibold text-indigo-700 shadow-lg transition-all duration-300 hover:shadow-indigo-200/50"
                  >
                    <Link href="/contact?subject=Partnership Inquiry" className="flex items-center gap-2">
                      <span className="absolute -left-10 -top-10 h-20 w-20 rounded-full bg-indigo-100 opacity-50"></span>
                      <span className="absolute -bottom-10 -right-10 h-20 w-20 rounded-full bg-pink-100 opacity-50"></span>
                      <span className="relative z-10 flex items-center gap-2">
                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-100">🤝</span> 
                        Partner With Us
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
                    <Link href="/our-work" className="flex items-center gap-2">
                      <span className="relative z-10 flex items-center gap-2">
                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 transition-colors duration-500 group-hover:bg-indigo-100">🔍</span>
                        Explore Our Impact
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