"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Send, Calendar } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    interest: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission logic - ready for API integration
    console.log("Form submitted:", formData)
    // Reset form after submission
    setFormData({ name: "", company: "", email: "", interest: "" })
  }

  return (
    <section id="contato" className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-3xl -translate-y-1/2" />
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-red-600/5 rounded-full blur-3xl -translate-y-1/2" />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Text */}
          <div className="animate-in fade-in slide-in-from-left-4 duration-700">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-secondary/50 mb-6">
              <Calendar className="h-4 w-4 text-purple-500" />
              <span className="text-sm text-muted-foreground">Demonstração Personalizada</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
              Agende uma demonstração do nosso{" "}
              <span className="bg-gradient-to-r from-blue-600 via-purple-500 to-red-600 bg-clip-text text-transparent">
                Sistema SBM
              </span>{" "}
              ou solicite um projeto corporativo
            </h2>
            <p className="text-lg text-muted-foreground mb-8 text-pretty">
              Nossa equipe de especialistas está pronta para apresentar a plataforma e desenvolver uma solução sob medida para as necessidades da sua operação.
            </p>
            <ul className="space-y-4">
              {[
                "Demonstração ao vivo da plataforma SBM",
                "Análise técnica personalizada",
                "Proposta comercial detalhada",
                "Retorno em até 48 horas úteis",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-muted-foreground">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-600 to-red-600" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column - Form */}
          <Card className="bg-secondary/50 border-border animate-in fade-in slide-in-from-right-4 duration-700 delay-200">
            <CardContent className="p-6 sm:p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-foreground">
                    Nome
                  </Label>
                  <Input
                    id="name"
                    placeholder="Seu nome completo"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="bg-background border-border focus:border-blue-500"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company" className="text-foreground">
                    Empresa
                  </Label>
                  <Input
                    id="company"
                    placeholder="Nome da sua empresa"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    required
                    className="bg-background border-border focus:border-blue-500"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground">
                    E-mail Corporativo
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="seu@empresa.com.br"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="bg-background border-border focus:border-blue-500"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="interest" className="text-foreground">
                    Interesse
                  </Label>
                  <Select
                    value={formData.interest}
                    onValueChange={(value) => setFormData({ ...formData, interest: value })}
                    required
                  >
                    <SelectTrigger className="bg-background border-border">
                      <SelectValue placeholder="Selecione uma área de interesse" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="demonstracao-sbm">Demonstração do Sistema SBM</SelectItem>
                      <SelectItem value="plataforma-sbm">Plataforma SBM (Software)</SelectItem>
                      <SelectItem value="second-life">Economia Circular (Second Life)</SelectItem>
                      <SelectItem value="consultoria">Consultoria e Projetos</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-blue-600 via-purple-500 to-red-600 text-white border-0 hover:opacity-90 transition-opacity"
                >
                  <Send className="h-4 w-4 mr-2" />
                  Enviar Solicitação
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
