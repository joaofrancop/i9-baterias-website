"use client"

import { Building2, Award, Factory, Leaf } from "lucide-react"

const partners = [
  { name: "SENAI", icon: Award },
  { name: "Instituto Jaime Lerner", icon: Leaf },
  { name: "Indústrias Parceiras", icon: Factory },
  { name: "Corporações Líderes", icon: Building2 },
]

export function SocialProof() {
  return (
    <section className="relative py-12 border-y border-border bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm text-muted-foreground mb-8 animate-in fade-in duration-500">
          Tecnologia desenvolvida para acelerar a transição energética brasileira.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-16">
          {partners.map((partner, index) => {
            const Icon = partner.icon
            return (
              <div
                key={partner.name}
                className="flex items-center gap-3 text-muted-foreground/70 hover:text-muted-foreground transition-colors duration-300 animate-in fade-in duration-500"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Icon className="h-6 w-6" />
                <span className="text-sm font-medium">{partner.name}</span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
