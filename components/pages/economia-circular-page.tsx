"use client"

import { Recycle, Search, Cpu, Battery, Zap, Leaf, ArrowRight, CheckCircle2, Factory, Sun } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const cycleSteps = [
  {
    step: 1,
    title: "Coleta e Diagnóstico",
    description: "Recebemos baterias de veículos elétricos e equipamentos industriais. Realizamos diagnóstico completo utilizando nossa plataforma SBM para avaliar SOH, capacidade residual e viabilidade de recondicionamento.",
    icon: Search,
    color: "from-blue-500 to-blue-600",
  },
  {
    step: 2,
    title: "Recondicionamento com IA",
    description: "Utilizamos algoritmos de Inteligência Artificial para otimizar o processo de recondicionamento. Células defeituosas são substituídas e o pack é rebalanceado para máxima eficiência.",
    icon: Cpu,
    color: "from-purple-500 to-purple-600",
  },
  {
    step: 3,
    title: "Nova Aplicação",
    description: "Baterias recondicionadas são destinadas a armazenamento estacionário, backup de energia solar, sistemas de no-break industriais e outras aplicações de segunda vida.",
    icon: Battery,
    color: "from-red-500 to-red-600",
  },
]

const benefits = [
  {
    icon: Leaf,
    title: "Sustentabilidade",
    description: "Redução de até 70% das emissões de CO2 comparado à produção de baterias novas.",
  },
  {
    icon: Zap,
    title: "Economia",
    description: "Custo até 60% menor que soluções de armazenamento com baterias novas.",
  },
  {
    icon: Recycle,
    title: "Circularidade",
    description: "Extensão da vida útil em até 10 anos para aplicações estacionárias.",
  },
  {
    icon: CheckCircle2,
    title: "Certificação",
    description: "Todas as baterias recondicionadas passam por certificação técnica completa.",
  },
]

const applications = [
  {
    icon: Sun,
    title: "Armazenamento Solar",
    description: "Sistemas de backup para instalações fotovoltaicas residenciais e comerciais.",
  },
  {
    icon: Factory,
    title: "No-break Industrial",
    description: "Backup de energia para operações críticas em indústrias e data centers.",
  },
  {
    icon: Zap,
    title: "Peak Shaving",
    description: "Redução de picos de demanda para economia na conta de energia.",
  },
]

export function EconomiaCircularPage() {
  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-green-600/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-3xl" />
        </div>

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-secondary/50 mb-6">
              <Recycle className="h-4 w-4 text-green-500" />
              <span className="text-sm text-muted-foreground">Second Life Batteries</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              Economia{" "}
              <span className="bg-gradient-to-r from-green-500 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Circular
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground text-pretty">
              Prolongamento da vida útil e recondicionamento de baterias de lítio. 
              Transformamos passivos ambientais em ativos energéticos eficientes.
            </p>
          </div>
        </div>
      </section>

      {/* Cycle Infographic */}
      <section className="py-16 lg:py-24 bg-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              O Ciclo Second Life
            </h2>
            <p className="text-muted-foreground text-pretty">
              Nosso processo integrado garante máxima eficiência e segurança em cada etapa.
            </p>
          </div>

          {/* Steps */}
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
              {cycleSteps.map((step, index) => {
                const Icon = step.icon
                return (
                  <div key={step.step} className="relative">
                    <Card className="bg-card border-border h-full">
                      <CardHeader>
                        <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${step.color} flex items-center justify-center mb-4`}>
                          <Icon className="h-7 w-7 text-white" />
                        </div>
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-sm font-medium text-muted-foreground">Etapa {step.step}</span>
                        </div>
                        <CardTitle className="text-xl">{step.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-pretty leading-relaxed">
                          {step.description}
                        </CardDescription>
                      </CardContent>
                    </Card>
                    {/* Arrow between cards */}
                    {index < cycleSteps.length - 1 && (
                      <div className="hidden md:flex absolute top-1/2 -right-4 lg:-right-5 z-10">
                        <div className="w-8 h-8 rounded-full bg-secondary border border-border flex items-center justify-center">
                          <ArrowRight className="h-4 w-4 text-muted-foreground" />
                        </div>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Visual Diagram */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="relative bg-card border border-border rounded-2xl p-8 lg:p-12">
              {/* Circular Flow Diagram */}
              <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12">
                {/* Source */}
                <div className="flex flex-col items-center text-center">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-r from-blue-600/20 to-blue-600/10 border border-blue-600/30 flex items-center justify-center mb-4">
                    <svg className="w-12 h-12 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h8m-8 4h8m-6 4h4M5 3h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">Veículos Elétricos</h3>
                  <p className="text-xs text-muted-foreground">Baterias com SOH {"<"} 80%</p>
                </div>

                {/* Arrow */}
                <div className="hidden lg:block">
                  <ArrowRight className="h-8 w-8 text-muted-foreground" />
                </div>
                <div className="lg:hidden">
                  <svg className="h-8 w-8 text-muted-foreground rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>

                {/* Processing */}
                <div className="flex flex-col items-center text-center">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-r from-purple-600/20 to-red-600/20 border border-purple-600/30 flex items-center justify-center mb-4 relative">
                    <div className="absolute inset-2 rounded-full border border-dashed border-purple-500/50 animate-spin" style={{ animationDuration: "10s" }} />
                    <Recycle className="h-14 w-14 text-purple-500" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">i9+ Baterias</h3>
                  <p className="text-xs text-muted-foreground">Diagnóstico + Recondicionamento</p>
                </div>

                {/* Arrow */}
                <div className="hidden lg:block">
                  <ArrowRight className="h-8 w-8 text-muted-foreground" />
                </div>
                <div className="lg:hidden">
                  <svg className="h-8 w-8 text-muted-foreground rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>

                {/* Destination */}
                <div className="flex flex-col items-center text-center">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-r from-green-600/20 to-green-600/10 border border-green-600/30 flex items-center justify-center mb-4">
                    <Sun className="h-12 w-12 text-green-500" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">Segunda Vida</h3>
                  <p className="text-xs text-muted-foreground">Armazenamento Estacionário</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-16 lg:py-24 bg-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Benefícios da Economia Circular
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit) => {
              const Icon = benefit.icon
              return (
                <div key={benefit.title} className="p-6 rounded-xl bg-card border border-border text-center">
                  <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-6 w-6 text-foreground" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground text-pretty">{benefit.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Aplicações Second Life
            </h2>
            <p className="text-muted-foreground text-pretty">
              Destinos ideais para baterias recondicionadas
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {applications.map((app) => {
              const Icon = app.icon
              return (
                <Card key={app.title} className="bg-card border-border">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-green-600/20 to-blue-600/20 flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-foreground" />
                    </div>
                    <CardTitle className="text-lg">{app.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-pretty">{app.description}</CardDescription>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
