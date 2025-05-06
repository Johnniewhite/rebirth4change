"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import { X, Menu } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { usePathname } from "next/navigation"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  // Close mobile menu when window is resized to desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  // Function to determine if a link is active
  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true
    if (path !== "/" && pathname.startsWith(path)) return true
    return false
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.png" alt="Project Rebirth Logo" width={40} height={40} className="h-10 w-auto" />
            <span className="hidden font-bold text-emerald-700 sm:inline-block">Project Rebirth</span>
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link 
            href="/" 
            className={`text-sm font-medium ${isActive("/") 
              ? "text-emerald-700 relative after:absolute after:bottom-[-16px] after:left-0 after:h-[3px] after:w-full after:bg-emerald-600" 
              : "text-gray-700 hover:text-emerald-600"}`}
          >
            Home
          </Link>
          <Link 
            href="/our-story" 
            className={`text-sm font-medium ${isActive("/our-story") 
              ? "text-emerald-700 relative after:absolute after:bottom-[-16px] after:left-0 after:h-[3px] after:w-full after:bg-emerald-600" 
              : "text-gray-700 hover:text-emerald-600"}`}
          >
            Our Story
          </Link>
          <Link 
            href="/our-work" 
            className={`text-sm font-medium ${isActive("/our-work") 
              ? "text-emerald-700 relative after:absolute after:bottom-[-16px] after:left-0 after:h-[3px] after:w-full after:bg-emerald-600" 
              : "text-gray-700 hover:text-emerald-600"}`}
          >
            Our Work
          </Link>
          <Link 
            href="/ethical-impact" 
            className={`text-sm font-medium ${isActive("/ethical-impact") 
              ? "text-emerald-700 relative after:absolute after:bottom-[-16px] after:left-0 after:h-[3px] after:w-full after:bg-emerald-600" 
              : "text-gray-700 hover:text-emerald-600"}`}
          >
            Ethical Impact
          </Link>
          <Link 
            href="/strategic-framework" 
            className={`text-sm font-medium ${isActive("/strategic-framework") 
              ? "text-emerald-700 relative after:absolute after:bottom-[-16px] after:left-0 after:h-[3px] after:w-full after:bg-emerald-600" 
              : "text-gray-700 hover:text-emerald-600"}`}
          >
            2022-2026 Strategic Framework
          </Link>
          <Link 
            href="/partners" 
            className={`text-sm font-medium ${isActive("/partners") 
              ? "text-emerald-700 relative after:absolute after:bottom-[-16px] after:left-0 after:h-[3px] after:w-full after:bg-emerald-600" 
              : "text-gray-700 hover:text-emerald-600"}`}
          >
            Our Partners
          </Link>
          <Link 
            href="/press" 
            className={`text-sm font-medium ${isActive("/press") 
              ? "text-emerald-700 relative after:absolute after:bottom-[-16px] after:left-0 after:h-[3px] after:w-full after:bg-emerald-600" 
              : "text-gray-700 hover:text-emerald-600"}`}
          >
            Press
          </Link>
        </nav>
        
        <div className="flex items-center gap-4">
          <Button className="hidden md:flex bg-emerald-600 hover:bg-emerald-700">Donate Now</Button>
          <Button 
            variant="outline" 
            size="icon" 
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white border-t"
          >
            <div className="container py-4 space-y-4">
              <Link 
                href="/" 
                className={`block text-base font-medium ${
                  isActive("/") ? "text-emerald-700 font-semibold" : "text-gray-700 hover:text-emerald-600"
                }`}
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/our-story" 
                className={`block text-base font-medium ${
                  isActive("/our-story") ? "text-emerald-700 font-semibold" : "text-gray-700 hover:text-emerald-600"
                }`}
                onClick={() => setIsOpen(false)}
              >
                Our Story
              </Link>
              <Link 
                href="/our-work" 
                className={`block text-base font-medium ${
                  isActive("/our-work") ? "text-emerald-700 font-semibold" : "text-gray-700 hover:text-emerald-600"
                }`}
                onClick={() => setIsOpen(false)}
              >
                Our Work
              </Link>
              <Link 
                href="/ethical-impact" 
                className={`block text-base font-medium ${
                  isActive("/ethical-impact") ? "text-emerald-700 font-semibold" : "text-gray-700 hover:text-emerald-600"
                }`}
                onClick={() => setIsOpen(false)}
              >
                Ethical Impact
              </Link>
              <Link 
                href="/strategic-framework" 
                className={`block text-base font-medium ${
                  isActive("/strategic-framework") ? "text-emerald-700 font-semibold" : "text-gray-700 hover:text-emerald-600"
                }`}
                onClick={() => setIsOpen(false)}
              >
                2022-2026 Strategic Framework
              </Link>
              <Link 
                href="/team" 
                className={`block text-base font-medium ${
                  isActive("/team") ? "text-emerald-700 font-semibold" : "text-gray-700 hover:text-emerald-600"
                }`}
                onClick={() => setIsOpen(false)}
              >
                The Team
              </Link>
              <Link 
                href="/partners" 
                className={`block text-base font-medium ${
                  isActive("/partners") ? "text-emerald-700 font-semibold" : "text-gray-700 hover:text-emerald-600"
                }`}
                onClick={() => setIsOpen(false)}
              >
                Our Partners
              </Link>
              <Link 
                href="/press" 
                className={`block text-base font-medium ${
                  isActive("/press") ? "text-emerald-700 font-semibold" : "text-gray-700 hover:text-emerald-600"
                }`}
                onClick={() => setIsOpen(false)}
              >
                Press
              </Link>
              <Button 
                className="w-full bg-emerald-600 hover:bg-emerald-700"
                onClick={() => setIsOpen(false)}
              >
                <Link href="mailto:team@rebirth4change.org?subject=Donation%20Inquiry" className="text-white w-full block">
                  Donate Now
                </Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
} 