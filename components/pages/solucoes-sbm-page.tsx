"use client"

import { Activity, Battery, BarChart3, Cpu, LineChart, Zap, Gauge, AlertTriangle, CheckCircle2, TrendingUp, Server, Wifi } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

function AdvancedDashboard() {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="bg-card border border-border rounded-2xl p-6 shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-600 to-red-600 flex items-center justify-center">
              <Cpu className="h-6 w-6 text-white" />
            </div>
            <div>
              <h4 className="text-lg font-semibold text-foreground">SBM Enterprise Dashboard</h4>
              <p className="text-sm text-muted-foreground">Monitoramento Avançado de Frota</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-xs text-green-500 font-medium">24 dispositivos online</span>
            </div>
          </div>
        </div>

        {/* Main Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div className="bg-secondary/50 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <Battery className="h-4 w-4 text-blue-500" />
              <span className="text-xs text-muted-foreground">SOH Médio</span>
            </div>
            <div className="text-2xl font-bold text-foreground">92.4%</div>
            <p className="text-xs text-green-500 mt-1">+2.1% este mês</p>
          </div>
          <div className="bg-secondary/50 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <Gauge className="h-4 w-4 text-purple-500" />
              <span className="text-xs text-muted-foreground">SOC Atual</span>
            </div>
            <div className="text-2xl font-bold text-foreground">78%</div>
            <p className="text-xs text-muted-foreground mt-1">Média da frota</p>
          </div>
          <div className="bg-secondary/50 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <Zap className="h-4 w-4 text-yellow-500" />
              <span className="text-xs text-muted-foreground">Ciclos Totais</span>
            </div>
            <div className="text-2xl font-bold text-foreground">45.8k</div>
            <p className="text-xs text-muted-foreground mt-1">Este trimestre</p>
          </div>
          <div className="bg-secondary/50 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <AlertTriangle className="h-4 w-4 text-orange-500" />
              <span className="text-xs text-muted-foreground">Alertas</span>
            </div>
            <div className="text-2xl font-bold text-foreground">3</div>
            <p className="text-xs text-orange-500 mt-1">Requer atenção</p>
          </div>
        </div>

        {/* Charts Row */}
        <div className="grid lg:grid-cols-2 gap-4 mb-6">
          {/* Health Distribution */}
          <div className="bg-secondary/50 rounded-xl p-4">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <BarChart3 className="h-4 w-4 text-blue-500" />
                <span className="text-sm font-medium text-foreground">Distribuição de Saúde (SOH)</span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-xs text-muted-foreground w-16">90-100%</span>
                <div className="flex-1 h-6 bg-secondary rounded overflow-hidden">
                  <div className="h-full w-[65%] bg-gradient-to-r from-green-500 to-green-400 rounded flex items-center justify-end pr-2">
                    <span className="text-xs text-white font-medium">15</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs text-muted-foreground w-16">80-90%</span>
                <div className="flex-1 h-6 bg-secondary rounded overflow-hidden">
                  <div className="h-full w-[30%] bg-gradient-to-r from-yellow-500 to-yellow-400 rounded flex items-center justify-end pr-2">
                    <span className="text-xs text-white font-medium">7</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs text-muted-foreground w-16">70-80%</span>
                <div className="flex-1 h-6 bg-secondary rounded overflow-hidden">
                  <div className="h-full w-[10%] bg-gradient-to-r from-orange-500 to-orange-400 rounded flex items-center justify-end pr-2">
                    <span className="text-xs text-white font-medium">2</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Performance Trend */}
          <div className="bg-secondary/50 rounded-xl p-4">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <LineChart className="h-4 w-4 text-purple-500" />
                <span className="text-sm font-medium text-foreground">Eficiência Semanal</span>
              </div>
              <TrendingUp className="h-4 w-4 text-green-500" />
            </div>
            <div className="flex items-end gap-2 h-24">
              {[72, 78, 75, 82, 79, 85, 88].map((height, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-1">
                  <div className="w-full relative h-20">
                    <div
                      className="absolute bottom-0 left-0 right-0 rounded-t bg-gradient-to-t from-blue-600 to-purple-500 transition-all duration-500"
                      style={{ height: `${height}%` }}
                    />
                  </div>
                  <span className="text-[10px] text-muted-foreground">
                    {["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"][i]}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Device List */}
        <div className="bg-secondary/50 rounded-xl p-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Server className="h-4 w-4 text-blue-500" />
              <span className="text-sm font-medium text-foreground">Dispositivos Monitorados</span>
            </div>
            <span className="text-xs text-muted-foreground">Últimas 24h</span>
          </div>
          <div className="space-y-2">
            {[
              { id: "EMP-001", type: "Empilhadeira", soh: 96, status: "ok" },
              { id: "EMP-002", type: "Empilhadeira", soh: 89, status: "ok" },
              { id: "VAN-001", type: "Van Elétrica", soh: 78, status: "warning" },
            ].map((device) => (
              <div key={device.id} className="flex items-center justify-between p-3 bg-background rounded-lg">
                <div className="flex items-center gap-3">
                  <div className={`w-2 h-2 rounded-full ${device.status === "ok" ? "bg-green-500" : "bg-orange-500"}`} />
                  <div>
                    <p className="text-sm font-medium text-foreground">{device.id}</p>
                    <p className="text-xs text-muted-foreground">{device.type}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <p className="text-sm font-medium text-foreground">{device.soh}%</p>
                    <p className="text-xs text-muted-foreground">SOH</p>
                  </div>
                  {device.status === "ok" ? (
                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                  ) : (
                    <AlertTriangle className="h-5 w-5 text-orange-500" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative Glow */}
      <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 via-purple-500/20 to-red-600/20 rounded-3xl blur-2xl -z-10" />
    </div>
  )
}

const features = [
  {
    icon: Gauge,
    title: "SOC (State of Charge)",
    description: "Monitoramento preciso do estado de carga em tempo real, permitindo otimização dos ciclos de uso e recarga de toda a frota.",
  },
  {
    icon: Battery,
    title: "SOH (State of Health)",
    description: "Análise contínua da saúde das baterias com algoritmos de IA que detectam degradação antes que se torne crítica.",
  },
  {
    icon: Activity,
    title: "Análise Preditiva",
    description: "Machine Learning aplicado para prever falhas e necessidades de manutenção com até 30 dias de antecedência.",
  },
  {
    icon: Wifi,
    title: "Conectividade IoT",
    description: "Sensores de última geração com conectividade 4G/5G para monitoramento remoto de qualquer local.",
  },
]

const applications = [
  {
    title: "Frotas de Veículos Elétricos",
    description: "Gestão completa de baterias para frotas de carros, vans e ônibus elétricos com otimização de rotas baseada em autonomia.",
  },
  {
    title: "Empilhadeiras Industriais",
    description: "Monitoramento 24/7 de empilhadeiras elétricas em operações logísticas e industriais de alta demanda.",
  },
  {
    title: "Maquinário Industrial",
    description: "Acompanhamento de sistemas de backup e equipamentos móveis em plantas industriais e manufatura.",
  },
]

export function SolucoesSbmPage() {
  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-600/5 rounded-full blur-3xl" />
        </div>

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-secondary/50 mb-6">
              <Cpu className="h-4 w-4 text-purple-500" />
              <span className="text-sm text-muted-foreground">Smart Battery Management</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              Plataforma{" "}
              <span className="bg-gradient-to-r from-blue-600 via-purple-500 to-red-600 bg-clip-text text-transparent">
                SBM
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground text-pretty">
              Diagnóstico avançado e análise em tempo real do SOC (State of Charge) e SOH (State of Health). 
              Nossa plataforma utiliza Inteligência Artificial e Big Data para maximizar a vida útil e eficiência das suas baterias.
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground text-center mb-12">
            Funcionalidades Técnicas
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => {
              const Icon = feature.icon
              return (
                <Card key={feature.title} className="bg-card border-border">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-foreground" />
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-pretty">{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Dashboard Section */}
      <section className="py-16 lg:py-24 bg-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Dashboard Intuitivo
            </h2>
            <p className="text-muted-foreground text-pretty">
              Interface moderna e responsiva que centraliza todas as informações da sua frota em um único lugar.
            </p>
          </div>
          <div className="relative">
            <AdvancedDashboard />
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Aplicações Principais
            </h2>
            <p className="text-muted-foreground text-pretty">
              Ideal para gestão de frotas elétricas, empilhadeiras e maquinário industrial.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {applications.map((app, index) => (
              <div
                key={app.title}
                className="p-6 rounded-xl bg-secondary/50 border border-border"
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-blue-600 to-red-600 flex items-center justify-center text-white font-bold mb-4">
                  {index + 1}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{app.title}</h3>
                <p className="text-sm text-muted-foreground text-pretty">{app.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
