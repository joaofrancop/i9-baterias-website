"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { page: "home", label: "Home" },
  { page: "solucoes-bms", label: "Soluções BMS" },
  { page: "second-life-systems", label: "Second Life Systems" },
  { page: "contato", label: "Contato" },
]

interface NavbarProps {
  currentPage: string
  onNavigate: (page: string) => void
}

export function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false)

  const handleNavClick = (page: string) => {
    onNavigate(page)
    setIsOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <button
            onClick={() => handleNavClick("home")}
            className="flex items-center gap-1 text-xl font-bold"
          >
            <span className="bg-gradient-to-r from-blue-600 via-purple-500 to-red-600 bg-clip-text text-transparent">
              i9+
            </span>
            <span className="text-foreground">Baterias</span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.page}
                onClick={() => handleNavClick(link.page)}
                className={`transition-colors duration-200 text-sm font-medium ${
                  currentPage === link.page
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
                {currentPage === link.page && (
                  <span className="block h-0.5 mt-1 bg-gradient-to-r from-blue-600 via-purple-500 to-red-600 rounded-full" />
                )}
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              className="bg-gradient-to-r from-blue-600 via-purple-500 to-red-600 text-white border-0 hover:opacity-90 transition-opacity"
              onClick={() => handleNavClick("contato")}
            >
              Falar com um Especialista
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.page}
                  onClick={() => handleNavClick(link.page)}
                  className={`text-left transition-colors duration-200 text-sm font-medium py-2 ${
                    currentPage === link.page
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.label}
                </button>
              ))}
              <Button
                className="bg-gradient-to-r from-blue-600 via-purple-500 to-red-600 text-white border-0 hover:opacity-90 transition-opacity mt-2"
                onClick={() => handleNavClick("contato")}
              >
                Falar com um Especialista
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
