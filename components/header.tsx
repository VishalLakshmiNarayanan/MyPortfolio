"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

const navigation = [
  { name: "Home", href: "#top" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Awards", href: "#awards" },
  { name: "Moments", href: "#moments" },
  { name: "Publications", href: "#publications" },
  { name: "Certifications", href: "#certifications" },
  { name: "Contact", href: "#contact" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleNavClick = (href: string) => {
    if (href === "#top") {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
    setMobileMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-purple-200/50 bg-white/70 backdrop-blur-lg">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <div className="mr-6 flex items-center space-x-2">
            <span className="hidden font-bold sm:inline-block text-black">Vishal Lakshmi Narayanan</span>
          </div>
          <nav className="flex items-center space-x-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="nav-link text-black font-medium"
                onClick={(e) => {
                  if (item.href === "#top") {
                    e.preventDefault()
                    handleNavClick(item.href)
                  }
                }}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
        <Button
          variant="ghost"
          className="mr-2 px-0 text-base text-black hover:bg-purple-100/50 focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          <span className="sr-only">Toggle Menu</span>
        </Button>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <span className="font-bold text-black md:hidden">VLN</span>
          </div>
        </div>
      </div>
      {mobileMenuOpen && (
        <div className="border-t border-purple-200/50 bg-white/80 md:hidden">
          <nav className="flex flex-col space-y-1 p-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="nav-link text-black font-medium"
                onClick={(e) => {
                  if (item.href === "#top") {
                    e.preventDefault()
                    handleNavClick(item.href)
                  } else {
                    setMobileMenuOpen(false)
                  }
                }}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
