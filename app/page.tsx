"use client"

import { useState, useEffect } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { HomePage } from "@/components/pages/home-page"
import { SolucoesSbmPage } from "@/components/pages/solucoes-sbm-page"
import { EconomiaCircularPage } from "@/components/pages/economia-circular-page"
import { ContatoPage } from "@/components/pages/contato-page"

type PageType = "home" | "solucoes-sbm" | "economia-circular" | "contato"

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>("home")

  const handleNavigate = (page: string) => {
    setCurrentPage(page as PageType)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  // Handle browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      const hash = window.location.hash.replace("#", "") as PageType
      if (hash && ["home", "solucoes-sbm", "economia-circular", "contato"].includes(hash)) {
        setCurrentPage(hash)
      }
    }

    window.addEventListener("popstate", handlePopState)
    
    // Check initial hash on load
    const initialHash = window.location.hash.replace("#", "") as PageType
    if (initialHash && ["home", "solucoes-sbm", "economia-circular", "contato"].includes(initialHash)) {
      setCurrentPage(initialHash)
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
      case "solucoes-sbm":
        return <SolucoesSbmPage />
      case "economia-circular":
        return <EconomiaCircularPage />
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
