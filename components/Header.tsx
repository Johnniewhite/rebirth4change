import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.png" alt="Project Rebirth Logo" width={40} height={40} className="h-10 w-auto" />
            <span className="hidden font-bold text-emerald-700 sm:inline-block">Project Rebirth</span>
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm font-medium text-emerald-700 hover:text-emerald-600">
            Home
          </Link>
          <Link href="/our-story" className="text-sm font-medium text-gray-700 hover:text-emerald-600">
            Our Story
          </Link>
          <Link href="/our-work" className="text-sm font-medium text-gray-700 hover:text-emerald-600">
            Our Work
          </Link>
          <Link href="/ethical-impact" className="text-sm font-medium text-gray-700 hover:text-emerald-600">
            Ethical Impact
          </Link>
          <Link href="/strategic-framework" className="text-sm font-medium text-gray-700 hover:text-emerald-600">
            2022-2026 Strategic Framework
          </Link>
          <Link href="/team" className="text-sm font-medium text-gray-700 hover:text-emerald-600">
            The Team
          </Link>
          <Link href="/partners" className="text-sm font-medium text-gray-700 hover:text-emerald-600">
            Our Partners
          </Link>
          <Link href="/press" className="text-sm font-medium text-gray-700 hover:text-emerald-600">
            Press
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Button className="hidden md:flex bg-emerald-600 hover:bg-emerald-700">Donate Now</Button>
          <Button variant="outline" size="icon" className="md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>
    </header>
  )
} 