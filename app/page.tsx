"use client"

import { useState, useEffect } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { HomePage } from "@/components/pages/home-page"
import { SolucoesBmsPage } from "@/components/pages/solucoes-bms-page"
import { SecondLifeSystemsPage } from "@/components/pages/second-life-systems-page"
import { ContatoPage } from "@/components/pages/contato-page"

type PageType = "home" | "solucoes-bms" | "second-life-systems" | "contato"

const VALID_PAGES: PageType[] = ["home", "solucoes-bms", "second-life-systems", "contato"]

const LEGACY_PAGE_ALIASES: Record<string, PageType> = {
  "solucoes-sbm": "solucoes-bms",
  "economia-circular": "second-life-systems",
}

function normalizePage(page: string): PageType | null {
  const normalized = LEGACY_PAGE_ALIASES[page] ?? page
  return VALID_PAGES.includes(normalized as PageType) ? (normalized as PageType) : null
}

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>("home")

  const handleNavigate = (page: string) => {
    const normalizedPage = normalizePage(page)
    if (!normalizedPage) return

    setCurrentPage(normalizedPage)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  // Handle browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      const hash = window.location.hash.replace("#", "")
      const normalizedPage = normalizePage(hash)
      if (normalizedPage) {
        setCurrentPage(normalizedPage)
      }
    }

    window.addEventListener("popstate", handlePopState)

    const initialHash = window.location.hash.replace("#", "")
    const normalizedPage = normalizePage(initialHash)
    if (normalizedPage) {
      setCurrentPage(normalizedPage)
    }

    return () => window.removeEventListener("popstate", handlePopState)
  }, [])

  // Update URL hash when page changes
  useEffect(() => {
    if (currentPage !== "home") {
      window.history.pushState(null, "", `#${currentPage}`)
    } else {
      window.history.pushState(null, "", window.location.pathname)
    }
  }, [currentPage])

  const renderPage = () => {
    switch (currentPage) {
      case "solucoes-bms":
        return <SolucoesBmsPage />
      case "second-life-systems":
        return <SecondLifeSystemsPage />
      case "contato":
        return <ContatoPage />
      default:
        return <HomePage onNavigate={handleNavigate} />
    }
  }

  return (
    <main className="min-h-screen bg-background">
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />
      {renderPage()}
      <Footer onNavigate={handleNavigate} />
    </main>
  )
}
