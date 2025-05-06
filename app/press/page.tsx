"use client";

import { Button } from "@/components/ui/button";
import { Newspaper, Mic, Camera, ExternalLink, FileText, Calendar, ChevronRight, ArrowUpRight, Share2, Download, Play, Video } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

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

export default function PressPage() {
  const [activeTab, setActiveTab] = useState('coverage');

  // Press mentions with logos
  const pressMentions = [
    { 
      name: "Women of the Future UK", 
      logo: "/womenofthefuture.webp", 
      link: "#",
      date: "March 15, 2023",
      type: "Feature Article"
    },
    { 
      name: "Global Solutions Initiative", 
      logo: "/globalsolutions.webp", 
      link: "https://www.global-solutions-initiative.org/young-global-changers/alumni/class-of-2023/",
      date: "January 22, 2023",
      type: "Interview"
    },
    { 
      name: "Maputo Protocol Solidarity Awards", 
      logo: "/maputo.png", 
      link: "https://equalitynow.org/news_and_insights/20-for-20-solidarity-awards-advancing-the-maputo-protocol/#:~:text=The%2020%20for%2020%20Solidarity%20Awards%20recognize%20and%20celebrate%20individuals,identified%20in%209%20distinct%20categories.",
      date: "August 3, 2023",
      type: "Award Feature"
    },
  ];

  // Press releases
  const pressReleases = [
    {
      title: "Project Rebirth Launches New Sustainable Farming Initiative",
      date: "April 10, 2023",
      summary: "Project Rebirth announced the launch of its new 'HerFarm' initiative, targeting women in rural communities.",
      downloadLink: "#"
    },
    {
      title: "Over 200 Women Complete Skills Training Program",
      date: "February 2, 2023",
      summary: "A milestone achievement as 200+ women graduate from our vocational skills and entrepreneurship program.",
      downloadLink: "#"
    },
    {
      title: "Project Rebirth Receives Recognition at Global Forum",
      date: "October 18, 2022",
      summary: "Our initiative was highlighted at the Global Solutions Forum as an innovative approach to women's empowerment.",
      downloadLink: "#"
    }
  ];

  // Media resources
  // const mediaResources = [
  //   {
  //     title: "Project Rebirth Logo Package",
  //     description: "Download high-resolution logos for media use",
  //     icon: FileText,
  //     downloadLink: "#"
  //   },
  //   {
  //     title: "Official Photos",
  //     description: "High-quality images from our programs and events",
  //     icon: Camera,
  //     downloadLink: "#"
  //   },
  //   {
  //     title: "Fact Sheet 2023",
  //     description: "Key statistics and information about our impact",
  //     icon: FileText,
  //     downloadLink: "#"
  //   }
  // ];

  // Videos section - New content
  const videos = [
    {
      title: "YGC Recoupling Awards 2023 - Project Rebirth",
      thumbnail: "/youtube1.png", // Using a placeholder image, you can replace this with actual thumbnails
      youtubeUrl: "https://www.youtube.com/watch?v=iRh9FdOCPQU",
      date: "July 15, 2023"
    },
    {
      title: "Project Rebirth Documentary",
      thumbnail: "/work1.jpg", // Using a placeholder image, you can replace this with actual thumbnails
      youtubeUrl: "https://www.youtube.com/watch?v=bQC6whYlSbY",
      date: "June 22, 2023"
    }
  ];

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-white to-blue-50/30">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-cyan-600 via-blue-600 to-sky-600 pt-24 pb-16 md:pt-32 md:pb-24">
          <div className="absolute inset-0 z-0 opacity-30">
            <div className="absolute inset-0 bg-[url('/pattern-dots.svg')] bg-repeat opacity-20"></div>
            <motion.div 
              initial={{ scale: 0.8, opacity: 0.5 }}
              animate={{ scale: 1, opacity: 0.6 }}
              transition={{ duration: 10, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
              className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-cyan-400 blur-[100px]"
            />
            <motion.div 
              initial={{ scale: 0.9, opacity: 0.5 }}
              animate={{ scale: 1.1, opacity: 0.6 }}
              transition={{ duration: 8, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 1 }}
              className="absolute -right-24 top-24 h-96 w-96 rounded-full bg-blue-400 blur-[100px]"
            />
          </div>
          
          <div className="container relative z-10 mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <span className="inline-block rounded-full bg-white/20 backdrop-blur-sm px-6 py-2 text-sm font-bold uppercase tracking-wider text-white">
                Media Center
              </span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-6 text-5xl font-bold tracking-tight text-white md:text-7xl"
            >
              <span className="block">Press & <span className="relative">Media
                <span className="absolute -bottom-2 left-0 h-2 w-full bg-cyan-400 opacity-70"></span>
              </span></span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mx-auto max-w-3xl text-lg text-cyan-100 md:text-xl"
            >
              Sharing the story of Project Rebirth and the inspiring women we work with across Nigeria's communities.
            </motion.p>
          </div>
          
          <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
            <svg viewBox="0 0 1440 120" xmlns="http://www.w3.org/2000/svg">
              <path fill="#ffffff" fillOpacity="1" d="M0,64L80,58.7C160,53,320,43,480,53.3C640,64,800,96,960,106.7C1120,117,1280,107,1360,101.3L1440,96L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
            </svg>
          </div>
        </section>

        {/* Press Content Tabs */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mb-12 flex flex-wrap justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setActiveTab('coverage')}
                className={`rounded-full px-6 py-3 font-medium transition-all duration-200 ${
                  activeTab === 'coverage' 
                    ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-md' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Media Coverage
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setActiveTab('videos')}
                className={`rounded-full px-6 py-3 font-medium transition-all duration-200 ${
                  activeTab === 'videos' 
                    ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-md' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Videos
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setActiveTab('releases')}
                className={`rounded-full px-6 py-3 font-medium transition-all duration-200 ${
                  activeTab === 'releases' 
                    ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-md' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Press Releases
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setActiveTab('resources')}
                className={`rounded-full px-6 py-3 font-medium transition-all duration-200 ${
                  activeTab === 'resources' 
                    ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-md' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Media Resources
              </motion.button>
            </div>

            {/* Media Coverage Tab */}
            {activeTab === 'coverage' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
              >
                {pressMentions.map((mention, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -8, transition: { duration: 0.3 } }}
                    className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-8 shadow-xl"
                  >
                    <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gradient-to-br from-white via-blue-50 to-blue-100 opacity-50 transition-transform duration-500 group-hover:scale-125"></div>
                    
                    <div className="relative z-10">
                      <div className="mb-2 flex justify-between">
                        <span className="inline-block rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
                          {mention.type}
                        </span>
                        <span className="inline-block rounded-full bg-gray-50 px-3 py-1 text-xs font-medium text-gray-700">
                          {mention.date}
                        </span>
                      </div>
                      
                      {/* Logo */}
                      <div className="mb-6 flex h-24 w-full items-center justify-center rounded-lg border border-gray-100 bg-white p-4 shadow-md group-hover:shadow-lg transition-shadow duration-300">
                        <Image 
                          src={mention.logo} 
                          alt={mention.name} 
                          width={160} 
                          height={80} 
                          className="h-full w-auto object-contain"
                        />
                      </div>
                      
                      <h3 className="mb-4 text-xl font-bold text-gray-800">{mention.name}</h3>
                      
                      <Link 
                        href={mention.link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="group/link inline-flex items-center text-sm font-medium text-cyan-600 transition-colors hover:text-cyan-800"
                      >
                        Read Feature <ExternalLink className="ml-1 h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {/* Videos Tab - New content */}
            {activeTab === 'videos' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 gap-8 md:grid-cols-2"
              >
                {videos.map((video, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -8, transition: { duration: 0.3 } }}
                    className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-6 shadow-xl"
                  >
                    <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gradient-to-br from-white via-blue-50 to-blue-100 opacity-50 transition-transform duration-500 group-hover:scale-125"></div>
                    
                    <div className="relative z-10">
                      <div className="mb-4 flex justify-between">
                        <span className="inline-block rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
                          Video Feature
                        </span>
                        <span className="inline-block rounded-full bg-gray-50 px-3 py-1 text-xs font-medium text-gray-700">
                          {video.date}
                        </span>
                      </div>
                      
                      {/* Thumbnail with play button overlay */}
                      <Link 
                        href={video.youtubeUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="relative mb-6 block aspect-video w-full overflow-hidden rounded-lg border border-gray-100 bg-gray-50 shadow-md group-hover:shadow-lg transition-shadow duration-300"
                      >
                        <Image 
                          src={video.thumbnail} 
                          alt={video.title} 
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/30 transition-opacity group-hover:bg-black/40">
                          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 text-blue-600 transition-transform group-hover:scale-110">
                            <Play className="h-8 w-8 fill-current" />
                          </div>
                        </div>
                      </Link>
                      
                      <h3 className="mb-4 text-xl font-bold text-gray-800">{video.title}</h3>
                      
                      <Link 
                        href={video.youtubeUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="group/link inline-flex items-center text-sm font-medium text-cyan-600 transition-colors hover:text-cyan-800"
                      >
                        Watch on YouTube <ExternalLink className="ml-1 h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {/* Press Releases Tab */}
            {/* {activeTab === 'releases' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                {pressReleases.map((release, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="group overflow-hidden rounded-xl border border-gray-100 bg-white p-6 shadow-md transition-all duration-300 hover:shadow-lg"
                  >
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <div className="mb-1 flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-cyan-500" />
                          <span className="text-sm text-gray-500">{release.date}</span>
                        </div>
                        <h3 className="mb-2 text-xl font-bold text-gray-800">{release.title}</h3>
                        <p className="text-gray-600">{release.summary}</p>
                      </div>
                      <div className="flex shrink-0 items-center gap-3">
                        <Button 
                          asChild
                          variant="outline" 
                          size="sm"
                          className="rounded-full border-cyan-200 text-cyan-700 hover:bg-cyan-50 hover:text-cyan-800"
                        >
                          <Link href={release.downloadLink}>
                            <Download className="mr-1 h-4 w-4" /> PDF
                          </Link>
                        </Button>
                        <Button 
                          asChild
                          variant="outline" 
                          size="sm"
                          className="rounded-full border-cyan-200 text-cyan-700 hover:bg-cyan-50 hover:text-cyan-800"
                        >
                          <Link href={`#share-${index}`}>
                            <Share2 className="mr-1 h-4 w-4" /> Share
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )} */}

            {/* Media Resources Tab */}
            {/* {activeTab === 'resources' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="rounded-2xl bg-gradient-to-br from-cyan-50 to-blue-50 p-8">
                  <h3 className="mb-6 text-xl font-bold text-gray-800">Media Kit Resources</h3>
                  
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                    {mediaResources.map((resource, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        whileHover={{ y: -5, backgroundColor: "rgba(255,255,255,0.9)" }}
                        className="group rounded-xl bg-white/80 p-6 shadow-sm transition-all duration-300 hover:shadow-md"
                      >
                        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white">
                          <resource.icon className="h-6 w-6" />
                        </div>
                        <h4 className="mb-2 text-lg font-semibold text-gray-800">{resource.title}</h4>
                        <p className="mb-4 text-sm text-gray-600">{resource.description}</p>
                        <Link 
                          href={resource.downloadLink}
                          className="inline-flex items-center text-sm font-medium text-cyan-600 transition-colors hover:text-cyan-800"
                        >
                          Download <Download className="ml-1 h-4 w-4" />
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )} */}
          </div>
        </section>

        {/* Media Inquiries Section */}
        <section className="relative overflow-hidden bg-gradient-to-r from-cyan-700 via-blue-700 to-sky-700 py-20 md:py-28">
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
              className="absolute -bottom-40 -right-20 h-96 w-96 rounded-full bg-cyan-300 opacity-20 blur-3xl"
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
              <Mic className="mx-auto mb-6 h-16 w-16 text-cyan-200" />
              <h2 className="mb-6 text-3xl font-bold text-white md:text-5xl">
                Media Inquiries
              </h2>
              <p className="mb-10 text-lg text-cyan-100">
                For press inquiries, interviews, or additional media resources, please contact our communications team. We're committed to sharing our story accurately and promptly.
              </p>
              
              <div className="flex flex-wrap justify-center gap-6">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Button 
                    size="lg" 
                    asChild 
                    className="relative overflow-hidden bg-white px-8 py-6 font-semibold text-cyan-700 shadow-lg transition-all duration-300 hover:shadow-cyan-200/50"
                  >
                    <Link href="/contact?subject=Media Inquiry" className="flex items-center gap-2">
                      <span className="absolute -left-10 -top-10 h-20 w-20 rounded-full bg-cyan-100 opacity-50"></span>
                      <span className="absolute -bottom-10 -right-10 h-20 w-20 rounded-full bg-blue-100 opacity-50"></span>
                      <span className="relative z-10 flex items-center gap-2">
                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-100">📱</span> 
                        Contact Communications
                        <ArrowUpRight className="ml-1 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
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