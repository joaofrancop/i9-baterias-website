"use client"

import { Activity, Battery, Cpu, TrendingUp, Zap } from "lucide-react"

function DashboardMockup() {
  return (
    <div className="relative w-full max-w-lg mx-auto">
      {/* Dashboard Container */}
      <div className="bg-card border border-border rounded-2xl p-6 shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-blue-600 to-red-600 flex items-center justify-center">
              <Cpu className="h-5 w-5 text-white" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-foreground">BMS Dashboard</h4>
              <p className="text-xs text-muted-foreground">Monitoramento em tempo real</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-xs text-green-500">Online</span>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-secondary/50 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <Battery className="h-4 w-4 text-blue-500" />
              <span className="text-xs text-muted-foreground">Health Status</span>
            </div>
            <div className="text-2xl font-bold text-foreground">94%</div>
            <div className="mt-2 h-2 bg-secondary rounded-full overflow-hidden">
              <div className="h-full w-[94%] bg-gradient-to-r from-blue-600 to-green-500 rounded-full" />
            </div>
          </div>
          <div className="bg-secondary/50 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <Zap className="h-4 w-4 text-yellow-500" />
              <span className="text-xs text-muted-foreground">Ciclos Restantes</span>
            </div>
            <div className="text-2xl font-bold text-foreground">2.847</div>
            <div className="mt-2 h-2 bg-secondary rounded-full overflow-hidden">
              <div className="h-full w-[71%] bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full" />
            </div>
          </div>
        </div>

        {/* Activity Chart Mockup */}
        <div className="bg-secondary/50 rounded-xl p-4 mb-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Activity className="h-4 w-4 text-purple-500" />
              <span className="text-xs text-muted-foreground">Performance 7 dias</span>
            </div>
            <TrendingUp className="h-4 w-4 text-green-500" />
          </div>
          <div className="flex items-end gap-1 h-16">
            {[65, 78, 72, 85, 82, 90, 88].map((height, i) => (
              <div key={i} className="flex-1 relative">
                <div
                  className="absolute bottom-0 left-0 right-0 rounded-t bg-gradient-to-t from-blue-600 to-purple-500 transition-all duration-500"
                  style={{ height: `${height}%` }}
                />
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-2">
            {["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"].map((day) => (
              <span key={day} className="text-[10px] text-muted-foreground">{day}</span>
            ))}
          </div>
        </div>

        {/* Alert */}
        <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-3 flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
            <Battery className="h-4 w-4 text-green-500" />
          </div>
          <div>
            <p className="text-xs font-medium text-green-500">Sistema Operando Normalmente</p>
            <p className="text-xs text-muted-foreground">Nenhuma anomalia detectada</p>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 via-purple-500/20 to-red-600/20 rounded-3xl blur-2xl -z-10" />
    </div>
  )
}

export function BmsSection() {
  return (
    <section id="bms" className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-red-600/5 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <div className="animate-in fade-in slide-in-from-left-4 duration-700">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-secondary/50 mb-6">
              <Cpu className="h-4 w-4 text-purple-500" />
              <span className="text-sm text-muted-foreground">Battery Management Systems • AI Monitoring • Energy Resilience</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
              Plataforma{" "}
              <span className="bg-gradient-to-r from-blue-600 via-purple-500 to-red-600 bg-clip-text text-transparent">
                BMS
              </span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 text-pretty">
              Monitoramento avançado com inteligência artificial, telemetria e diagnóstico preditivo para sistemas estacionários. Nossa plataforma integra sensores IoT, algoritmos de machine learning e análise em tempo real para garantir resiliência energética.
            </p>
            <ul className="space-y-4">
              {[
                "Diagnóstico preditivo antes que falhas se tornem críticas",
                "Telemetria contínua de SOC, SOH e performance operacional",
                "Relatórios para tomada de decisão e segurança energética",
                "Integração com sistemas de gestão empresarial",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-muted-foreground">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-600 to-red-600 mt-2 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Dashboard Mockup */}
          <div className="animate-in fade-in slide-in-from-right-4 duration-700 delay-200">
            <DashboardMockup />
          </div>
        </div>
      </div>
    </section>
  )
}
