"use client"

import { Clock, Brain, TrendingDown, FileText } from "lucide-react"

const benefits = [
  {
    icon: Clock,
    title: "Monitoramento 24/7",
    description: "Acompanhamento ininterrupto de toda a sua frota de baterias em tempo real.",
  },
  {
    icon: Brain,
    title: "Predição de Falhas (IA)",
    description: "Algoritmos de machine learning identificam anomalias antes que se tornem problemas.",
  },
  {
    icon: TrendingDown,
    title: "Economia Operacional",
    description: "Reduza custos com manutenção corretiva e maximize a vida útil dos seus ativos.",
  },
  {
    icon: FileText,
    title: "Relatórios ESG",
    description: "Documentação completa para compliance ambiental e relatórios de sustentabilidade.",
  },
]

export function BenefitsSection() {
  return (
    <section className="relative py-16 lg:py-24 border-y border-border bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 animate-in fade-in slide-in-from-bottom-4 duration-700 text-balance">
            Por que escolher a{" "}
            <span className="bg-gradient-to-r from-blue-600 via-purple-500 to-red-600 bg-clip-text text-transparent">
              i9+
            </span>
            ?
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <div
                key={benefit.title}
                className="flex flex-col items-center text-center animate-in fade-in slide-in-from-bottom-4 duration-700"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-blue-600/20 via-purple-500/20 to-red-600/20 flex items-center justify-center mb-4">
                  <Icon className="h-7 w-7 text-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground text-pretty">{benefit.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
