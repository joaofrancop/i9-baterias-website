"use client"

import { useEffect, useRef, useState } from "react"

const partners = [
  { name: "SENAI", logo: "/logos/senai-logo.png" },
  { name: "CIMATEC", logo: "/logos/cimatec-logo.png" },
  { name: "Instituto Jaime Lerner", logo: "/logos/ijl-logo.png" },
  { name: "Habiterra", logo: "/logos/habiterra-logo.png" },
  { name: "SEBRAE", logo: "/logos/sebrae-logo.png" },
  { name: "Fundação Araucária", logo: "/logos/faraucaria-logo.png" },
]

function PartnerLogo({ partner }: { partner: { name: string; logo: string } }) {
  return (
    <div className="flex flex-col items-center justify-center gap-2 px-10 py-5 min-w-[220px] sm:min-w-[260px]">
      <img
        src={partner.logo}
        alt=""
        className="h-16 w-auto max-w-[200px] object-contain sm:h-20 sm:max-w-[260px]"
      />
      <span className="text-center text-sm font-semibold text-muted-foreground/80 max-w-[220px] sm:max-w-[260px]">
        {partner.name}
      </span>
    </div>
  )
}

export function PartnersSection() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let animationId: number
    let scrollPosition = 0
    const scrollSpeed = 0.5

    const animate = () => {
      if (!isHovered) {
        scrollPosition += scrollSpeed
        const maxScroll = scrollContainer.scrollWidth / 2
        if (scrollPosition >= maxScroll) {
          scrollPosition = 0
        }
        scrollContainer.scrollLeft = scrollPosition
      }
      animationId = requestAnimationFrame(animate)
    }

    animationId = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(animationId)
  }, [isHovered])

  // Duplicate partners for infinite scroll effect
  const duplicatedPartners = [...partners, ...partners, ...partners]

  return (
    <section className="py-12 border-y border-border bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm text-muted-foreground mb-8">
          Tecnologia validada por instituições de referência
        </p>
      </div>
      
      <div 
        className="relative overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Gradient masks */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
        
        <div
          ref={scrollRef}
          className="flex overflow-x-hidden"
          style={{ scrollBehavior: "auto" }}
        >
          <div className="flex">
            {duplicatedPartners.map((partner, index) => (
              <PartnerLogo key={`${partner.logo}-${index}`} partner={partner} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
