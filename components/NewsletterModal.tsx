"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { X, Send, CheckCircle2, AlertCircle, Sparkles, ArrowRight, Mail, Loader2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { cn } from "@/lib/utils"

type NewsletterModalProps = {
  isOpen: boolean
  onClose: () => void
}

type SubscriptionStatus = "idle" | "loading" | "success" | "error"

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
}

export function NewsletterModal({ isOpen, onClose }: NewsletterModalProps) {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [step, setStep] = useState(1)
  const [status, setStatus] = useState<SubscriptionStatus>("idle")
  const [errorMessage, setErrorMessage] = useState("")
  const modalRef = useRef<HTMLDivElement>(null)
  const nameInputRef = useRef<HTMLInputElement>(null)
  const emailInputRef = useRef<HTMLInputElement>(null)

  const { ref: imageRef, inView: imageInView } = useInView({ threshold: 0.5, triggerOnce: true })
  const { ref: headingRef, inView: headingInView } = useInView({ threshold: 0.2, triggerOnce: true })
  const { ref: formRef, inView: formInView } = useInView({ threshold: 0.2, triggerOnce: true })

  useEffect(() => {
    if (isOpen && step === 1 && nameInputRef.current) {
      const timer = setTimeout(() => nameInputRef.current?.focus(), 300)
      return () => clearTimeout(timer)
    }
  }, [isOpen, step])

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }

    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener("keydown", handleEscape)
      document.addEventListener("mousedown", handleClickOutside)
      document.body.style.overflow = "hidden"
    }

    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.removeEventListener("mousedown", handleClickOutside)
      document.body.style.overflow = ""
    }
  }, [isOpen, onClose])

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

  const handleNextStep = () => {
    if (step === 1) {
      if (!name.trim()) {
        setErrorMessage("Please enter your name")
        return
      }
      setStep(2)
      setTimeout(() => emailInputRef.current?.focus(), 300)
    } else if (step === 2) {
      if (!validateEmail(email)) {
        setErrorMessage("Please enter a valid email address")
        return
      }
      handleSubmit()
    }
  }

  const handleSubmit = async () => {
    setStatus("loading")
    setErrorMessage("")

    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Simulate success (in a real app, this would be an API call)
      setStatus("success")

      // Reset form after success
      setTimeout(() => {
        setEmail("")
        setName("")
      }, 500)
    } catch (error) {
      setStatus("error")
      setErrorMessage("Something went wrong. Please try again.")
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault()
      handleNextStep()
    }
  }

  if (!isOpen) return null

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <motion.div 
          className="fixed inset-0 z-50 flex items-center justify-center"
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <motion.div
            variants={fadeIn}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          <motion.div
            ref={modalRef}
            variants={scaleIn}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-4xl mx-4 overflow-hidden rounded-2xl bg-white shadow-2xl"
          >
            {/* Close button */}
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-10 rounded-full bg-white/90 p-2 text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    aria-label="Close newsletter modal"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Close</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <div className="grid md:grid-cols-5">
              {/* Image Section */}
              <div className="relative hidden md:col-span-2 md:block">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 to-emerald-900">
                  <div className="absolute inset-0 opacity-20 mix-blend-overlay">
                    <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                      <defs>
                        <pattern id="dots" width="4" height="4" patternUnits="userSpaceOnUse">
                          <circle cx="1" cy="1" r="1" fill="currentColor" />
                        </pattern>
                      </defs>
                      <rect width="100" height="100" fill="url(#dots)" />
                    </svg>
                  </div>
                </div>

                <div ref={imageRef} className="relative h-full flex flex-col justify-center p-8 text-white">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={imageInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="mb-6"
                  >
                    <Sparkles className="h-10 w-10 text-emerald-300" />
                  </motion.div>

                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    animate={imageInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className="text-2xl font-bold mb-4"
                  >
                    Join our community of changemakers
                  </motion.h3>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={imageInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="text-emerald-100 mb-6"
                  >
                    Stay updated with our latest initiatives, success stories, and opportunities to get involved.
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={imageInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.6, duration: 0.5 }}
                    className="space-y-4"
                  >
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-8 w-8 rounded-full bg-emerald-400/30 flex items-center justify-center mr-3">
                        <CheckCircle2 className="h-4 w-4 text-emerald-200" />
                      </div>
                      <p className="text-sm text-emerald-100">Exclusive updates on our projects</p>
                    </div>
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-8 w-8 rounded-full bg-emerald-400/30 flex items-center justify-center mr-3">
                        <CheckCircle2 className="h-4 w-4 text-emerald-200" />
                      </div>
                      <p className="text-sm text-emerald-100">Early access to events and workshops</p>
                    </div>
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-8 w-8 rounded-full bg-emerald-400/30 flex items-center justify-center mr-3">
                        <CheckCircle2 className="h-4 w-4 text-emerald-200" />
                      </div>
                      <p className="text-sm text-emerald-100">Inspiring stories from our community</p>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={imageInView ? { opacity: 0.15 } : {}}
                    transition={{ delay: 0.7, duration: 0.8 }}
                    className="absolute bottom-0 right-0 w-64 h-64"
                  >
                    <Image src="/newsletter-pattern.png" alt="" fill className="object-contain opacity-30" />
                  </motion.div>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6 md:p-10 md:col-span-3">
                <div className="max-w-md mx-auto">
                  {status === "success" ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-10"
                    >
                      <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100 mb-6">
                        <CheckCircle2 className="h-10 w-10 text-emerald-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank you for subscribing!</h3>
                      <p className="text-gray-600 mb-8">
                        We've sent a confirmation email to your inbox. Please check your email to complete the
                        subscription process.
                      </p>
                      <Button onClick={onClose} className="bg-emerald-600 hover:bg-emerald-700">
                        Close
                      </Button>
                    </motion.div>
                  ) : (
                    <>
                      <div ref={headingRef}>
                        <motion.div
                          initial={{ opacity: 0, y: -20 }}
                          animate={headingInView ? { opacity: 1, y: 0 } : {}}
                          transition={{ duration: 0.5 }}
                          className="flex items-center justify-center mb-2"
                        >
                          <div className="h-10 w-10 rounded-full bg-emerald-100 flex items-center justify-center">
                            <Mail className="h-5 w-5 text-emerald-600" />
                          </div>
                        </motion.div>

                        <motion.h2
                          initial={{ opacity: 0, y: -20 }}
                          animate={headingInView ? { opacity: 1, y: 0 } : {}}
                          transition={{ delay: 0.1, duration: 0.5 }}
                          className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-2"
                        >
                          Subscribe to Our Newsletter
                        </motion.h2>

                        <motion.p
                          initial={{ opacity: 0, y: -20 }}
                          animate={headingInView ? { opacity: 1, y: 0 } : {}}
                          transition={{ delay: 0.2, duration: 0.5 }}
                          className="text-center text-gray-600 mb-8"
                        >
                          Get updates on our work empowering women through sustainable fashion
                        </motion.p>
                      </div>

                      <div ref={formRef}>
                        <AnimatePresence mode="wait">
                          {step === 1 && (
                            <motion.div
                              key="step1"
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              exit={{ opacity: 0, x: -20 }}
                              transition={{ duration: 0.3 }}
                              className="space-y-6"
                            >
                              <div className="space-y-2">
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                  What's your name?
                                </label>
                                <div className="relative">
                                  <Input
                                    id="name"
                                    ref={nameInputRef}
                                    type="text"
                                    value={name}
                                    onChange={(e) => {
                                      setName(e.target.value)
                                      setErrorMessage("")
                                    }}
                                    onKeyDown={handleKeyDown}
                                    placeholder="Enter your name"
                                    className={cn(
                                      "pr-10 border-gray-300 focus:border-emerald-500 focus:ring-emerald-500",
                                      errorMessage && !name ? "border-red-500" : "",
                                    )}
                                  />
                                  <AnimatePresence>
                                    {name && (
                                      <motion.div
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.8 }}
                                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-emerald-500"
                                      >
                                        <CheckCircle2 className="h-5 w-5" />
                                      </motion.div>
                                    )}
                                  </AnimatePresence>
                                </div>
                                {errorMessage && !name && (
                                  <p className="text-sm text-red-600 mt-1 flex items-center">
                                    <AlertCircle className="h-4 w-4 mr-1" />
                                    {errorMessage}
                                  </p>
                                )}
                              </div>

                              <div className="flex justify-end">
                                <Button onClick={handleNextStep} className="bg-emerald-600 hover:bg-emerald-700">
                                  Continue <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                              </div>

                              <div className="pt-4 text-center">
                                <p className="text-xs text-gray-500">
                                  By subscribing, you agree to our{" "}
                                  <a href="#" className="text-emerald-600 hover:underline">
                                    Privacy Policy
                                  </a>
                                </p>
                              </div>
                            </motion.div>
                          )}

                          {step === 2 && (
                            <motion.div
                              key="step2"
                              initial={{ opacity: 0, x: 20 }}
                              animate={{ opacity: 1, x: 0 }}
                              exit={{ opacity: 0, x: 20 }}
                              transition={{ duration: 0.3 }}
                              className="space-y-6"
                            >
                              <div className="space-y-2">
                                <div className="flex items-center justify-between">
                                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                    What's your email address?
                                  </label>
                                  <button
                                    type="button"
                                    onClick={() => setStep(1)}
                                    className="text-xs text-emerald-600 hover:text-emerald-700"
                                  >
                                    Back
                                  </button>
                                </div>
                                <div className="relative">
                                  <Input
                                    id="email"
                                    ref={emailInputRef}
                                    type="email"
                                    value={email}
                                    onChange={(e) => {
                                      setEmail(e.target.value)
                                      setErrorMessage("")
                                    }}
                                    onKeyDown={handleKeyDown}
                                    placeholder="Enter your email address"
                                    className={cn(
                                      "pr-10 border-gray-300 focus:border-emerald-500 focus:ring-emerald-500",
                                      errorMessage && !validateEmail(email) ? "border-red-500" : "",
                                    )}
                                  />
                                  <AnimatePresence>
                                    {validateEmail(email) && (
                                      <motion.div
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.8 }}
                                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-emerald-500"
                                      >
                                        <CheckCircle2 className="h-5 w-5" />
                                      </motion.div>
                                    )}
                                  </AnimatePresence>
                                </div>
                                {errorMessage && !validateEmail(email) && (
                                  <p className="text-sm text-red-600 mt-1 flex items-center">
                                    <AlertCircle className="h-4 w-4 mr-1" />
                                    {errorMessage}
                                  </p>
                                )}
                              </div>

                              <div className="flex justify-end">
                                <Button
                                  onClick={handleNextStep}
                                  disabled={status === "loading"}
                                  className="bg-emerald-600 hover:bg-emerald-700"
                                >
                                  {status === "loading" ? (
                                    <>
                                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                      Subscribing...
                                    </>
                                  ) : (
                                    <>
                                      Subscribe <Send className="ml-2 h-4 w-4" />
                                    </>
                                  )}
                                </Button>
                              </div>

                              <div className="pt-4 text-center">
                                <p className="text-xs text-gray-500">
                                  We'll never share your information with third parties.
                                </p>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>

                        {status === "error" && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mt-4 p-3 bg-red-50 border border-red-200 rounded-md"
                          >
                            <div className="flex">
                              <AlertCircle className="h-5 w-5 text-red-500 mr-2 flex-shrink-0" />
                              <p className="text-sm text-red-600">{errorMessage}</p>
                            </div>
                          </motion.div>
                        )}
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* Progress indicator */}
            {status !== "success" && (
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-100">
                <motion.div
                  initial={{ width: "50%" }}
                  animate={{ width: step === 1 ? "50%" : "100%" }}
                  className="h-full bg-emerald-500"
                  transition={{ duration: 0.3 }}
                />
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

