"use client"

import { Leaf, Battery, Activity } from "lucide-react"
import { useEffect, useState, useRef } from "react"

const metrics = [
  {
    icon: Leaf,
    value: 1000,
    suffix: "+",
    label: "Toneladas de CO2 evitadas",
  },
  {
    icon: Battery,
    value: 5000,
    suffix: "+",
    label: "Baterias Recondicionadas",
  },
  {
    icon: Activity,
    value: 98,
    suffix: "%",
    label: "de Eficiência em Diagnóstico SBM",
  },
]

function AnimatedCounter({ 
  value, 
  suffix, 
  inView 
}: { 
  value: number; 
  suffix: string; 
  inView: boolean 
}) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return

    const duration = 2000
    const steps = 60
    const increment = value / steps
    let current = 0
    
    const timer = setInterval(() => {
      current += increment
      if (current >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [value, inView])

  return (
    <span className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-500 to-red-600 bg-clip-text text-transparent">
      {count.toLocaleString("pt-BR")}
      {suffix}
    </span>
  )
}

export function ESGImpactSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-20 lg:py-28 relative overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 to-background" />
      
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
            Nosso{" "}
            <span className="bg-gradient-to-r from-blue-600 via-purple-500 to-red-600 bg-clip-text text-transparent">
              Impacto ESG
            </span>
          </h2>
          <p className="text-muted-foreground text-lg text-pretty">
            Resultados mensuráveis que fazem a diferença para o planeta
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {metrics.map((metric) => {
            const Icon = metric.icon
            return (
              <div
                key={metric.label}
                className="group relative rounded-2xl p-1 bg-gradient-to-r from-blue-600/20 via-purple-500/20 to-red-600/20 hover:from-blue-600/40 hover:via-purple-500/40 hover:to-red-600/40 transition-all duration-500"
              >
                <div className="bg-card rounded-xl p-8 h-full flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-blue-600/10 via-purple-500/10 to-red-600/10 flex items-center justify-center mb-6">
                    <Icon className="h-8 w-8 text-foreground" />
                  </div>
                  
                  <AnimatedCounter 
                    value={metric.value} 
                    suffix={metric.suffix} 
                    inView={inView} 
                  />
                  
                  <p className="mt-4 text-muted-foreground font-medium text-pretty">
                    {metric.label}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
