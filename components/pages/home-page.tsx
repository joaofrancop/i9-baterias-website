"use client"

import { Button } from "@/components/ui/button"
import { Brain, ArrowRight, Cpu, Recycle, Lightbulb, Activity, Battery, Zap } from "lucide-react"
import { useEffect, useRef } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { PartnersSection } from "@/components/partners-section"
import { ESGImpactSection } from "@/components/esg-impact-section"
import { FAQSection } from "@/components/faq-section"

function DataVisualization() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio
      canvas.height = canvas.offsetHeight * window.devicePixelRatio
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
    }
    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    interface Node {
      x: number
      y: number
      vx: number
      vy: number
      radius: number
    }

    const nodes: Node[] = []
    const nodeCount = 40

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * canvas.offsetWidth,
        y: Math.random() * canvas.offsetHeight,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        radius: Math.random() * 2 + 1,
      })
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight)

      nodes.forEach((node) => {
        node.x += node.vx
        node.y += node.vy

        if (node.x < 0 || node.x > canvas.offsetWidth) node.vx *= -1
        if (node.y < 0 || node.y > canvas.offsetHeight) node.vy *= -1
      })

      nodes.forEach((node, i) => {
        nodes.forEach((other, j) => {
          if (i >= j) return
          const dx = node.x - other.x
          const dy = node.y - other.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 150) {
            const opacity = (1 - distance / 150) * 0.3
            const gradient = ctx.createLinearGradient(node.x, node.y, other.x, other.y)
            gradient.addColorStop(0, `rgba(59, 130, 246, ${opacity})`)
            gradient.addColorStop(1, `rgba(239, 68, 68, ${opacity})`)
            ctx.beginPath()
            ctx.strokeStyle = gradient
            ctx.lineWidth = 1
            ctx.moveTo(node.x, node.y)
            ctx.lineTo(other.x, other.y)
            ctx.stroke()
          }
        })
      })

      nodes.forEach((node) => {
        ctx.beginPath()
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2)
        ctx.fillStyle = "rgba(255, 255, 255, 0.5)"
        ctx.fill()
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => window.removeEventListener("resize", resizeCanvas)
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ opacity: 0.6 }}
    />
  )
}

const solutions = [
  {
    icon: Cpu,
    title: "Plataforma SBM",
    description: "Monitoramento em tempo real com IA para gestão inteligente de frotas elétricas.",
    page: "solucoes-sbm",
  },
  {
    icon: Recycle,
    title: "Economia Circular",
    description: "Recondicionamento e segunda vida para baterias de lítio.",
    page: "economia-circular",
  },
  {
    icon: Lightbulb,
    title: "Consultoria",
    description: "Projetos customizados para transição energética corporativa.",
    page: "contato",
  },
]

const benefits = [
  { icon: Activity, label: "Monitoramento 24/7" },
  { icon: Brain, label: "Predição com IA" },
  { icon: Zap, label: "Economia Operacional" },
  { icon: Battery, label: "Relatórios ESG" },
]

interface HomePageProps {
  onNavigate: (page: string) => void
}

export function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-background">
          <DataVisualization />
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-600/10 via-purple-500/10 to-red-600/10 rounded-full blur-3xl" />
        </div>

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-secondary/50 mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
              <Brain className="h-4 w-4 text-blue-500" />
              <span className="text-sm text-muted-foreground">Smart Battery Management</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-foreground mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150 text-balance">
              Revolucione a Gestão de Baterias com{" "}
              <span className="bg-gradient-to-r from-blue-600 via-purple-500 to-red-600 bg-clip-text text-transparent">
                Inteligência Artificial
              </span>
              .
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300 text-pretty">
              Maior eficiência, redução drástica de custos operacionais e sustentabilidade real para a sua matriz energética.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 via-purple-500 to-red-600 text-white border-0 hover:opacity-90 transition-opacity w-full sm:w-auto"
                onClick={() => onNavigate("contato")}
              >
                Agendar Demonstração
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-border hover:bg-secondary w-full sm:w-auto"
                onClick={() => onNavigate("solucoes-sbm")}
              >
                Conhecer o Sistema SBM
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Partners Marquee */}
      <PartnersSection />

      {/* Solutions Overview */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
              Nossas{" "}
              <span className="bg-gradient-to-r from-blue-600 via-purple-500 to-red-600 bg-clip-text text-transparent">
                Soluções
              </span>
            </h2>
            <p className="text-muted-foreground text-lg text-pretty">
              Os três pilares da nossa tecnologia para transformar sua operação
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {solutions.map((solution) => {
              const Icon = solution.icon
              return (
                <Card
                  key={solution.title}
                  className="group bg-card border-border hover:border-transparent transition-all duration-500 overflow-hidden relative"
                >
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-600 via-purple-500 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                  <div className="absolute inset-[1px] rounded-xl bg-card -z-10" />

                  <CardHeader className="pb-4">
                    <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-foreground" />
                    </div>
                    <CardTitle className="text-xl">{solution.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-6 text-pretty">
                      {solution.description}
                    </CardDescription>
                    <button
                      onClick={() => onNavigate(solution.page)}
                      className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-blue-500 transition-colors group/link"
                    >
                      Saiba mais
                      <ArrowRight className="h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                    </button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Benefits Bar */}
      <section className="py-12 bg-secondary/30 border-y border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {benefits.map((benefit) => {
              const Icon = benefit.icon
              return (
                <div key={benefit.label} className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-3">
                    <Icon className="h-6 w-6 text-foreground" />
                  </div>
                  <span className="text-sm font-medium text-foreground">{benefit.label}</span>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ESG Impact Section */}
      <ESGImpactSection />

      {/* FAQ Section */}
      <FAQSection />

      {/* CTA Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 text-balance">
              Pronto para transformar sua{" "}
              <span className="bg-gradient-to-r from-blue-600 via-purple-500 to-red-600 bg-clip-text text-transparent">
                operação energética
              </span>
              ?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 text-pretty">
              Nossa equipe de engenheiros está pronta para desenvolver uma solução sob medida para sua empresa.
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 via-purple-500 to-red-600 text-white border-0 hover:opacity-90 transition-opacity"
              onClick={() => onNavigate("contato")}
            >
              Fale com um Especialista
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
