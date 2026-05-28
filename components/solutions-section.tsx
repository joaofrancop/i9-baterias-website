"use client"

import { Cpu, Recycle, Lightbulb, ArrowRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const solutions = [
  {
    icon: Cpu,
    title: "Plataforma BMS",
    description:
      "Monitoramento avançado com inteligência artificial, telemetria e diagnóstico preditivo para sistemas estacionários.",
    features: ["Monitoramento em Tempo Real", "Diagnóstico Preditivo", "Dashboard intuitivo"],
  },
  {
    icon: Recycle,
    title: "Second Life Systems",
    description:
      "Reaproveitamento de baterias automotivas para armazenamento de energia e resiliência energética.",
    features: ["Diagnóstico completo", "Certificação técnica", "Garantia estendida"],
  },
  {
    icon: Lightbulb,
    title: "Energy Infrastructure",
    description:
      "Projetos integrados de armazenamento energético, energia solar e autonomia operacional para empresas, agronegócio e infraestrutura crítica.",
    features: ["Análise de viabilidade", "Projeto executivo", "Acompanhamento técnico"],
  },
]

export function SolutionsSection() {
  return (
    <section id="solucoes" className="relative py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 animate-in fade-in slide-in-from-bottom-4 duration-700 text-balance">
            Nossas{" "}
            <span className="bg-gradient-to-r from-blue-600 via-purple-500 to-red-600 bg-clip-text text-transparent">
              Soluções
            </span>
          </h2>
          <p className="text-muted-foreground text-lg animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150 text-pretty">
            Tecnologia aplicada à mobilidade elétrica, armazenamento energético e economia circular.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {solutions.map((solution, index) => {
            const Icon = solution.icon
            return (
              <Card
                key={solution.title}
                className="group relative bg-card border-border hover:border-transparent transition-all duration-500 overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-700"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Gradient Border on Hover */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-600 via-purple-500 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                <div className="absolute inset-[1px] rounded-xl bg-card -z-10" />

                <CardHeader className="pb-4">
                  <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-4 group-hover:bg-gradient-to-r group-hover:from-blue-600/20 group-hover:via-purple-500/20 group-hover:to-red-600/20 transition-all duration-300">
                    <Icon className="h-6 w-6 text-foreground" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-foreground">
                    {solution.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground mb-6 text-pretty">
                    {solution.description}
                  </CardDescription>
                  <ul className="space-y-2">
                    {solution.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-sm text-muted-foreground"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-600 to-red-600" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#contato"
                    className="inline-flex items-center gap-2 mt-6 text-sm font-medium text-foreground hover:text-blue-500 transition-colors group/link"
                  >
                    Saiba mais
                    <ArrowRight className="h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
