"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Send, Mail, Phone, MapPin, Clock, Users, Wrench } from "lucide-react"

const contactInfo = [
  {
    icon: Mail,
    title: "E-mail",
    value: "contato@i9mais.ind.br",
    description: "Resposta em até 24 horas",
  },
  {
    icon: Phone,
    title: "Telefone",
    value: "+55 (41) 3333-9999",
    description: "Seg-Sex: 8h às 18h",
  },
  {
    icon: MapPin,
    title: "Endereço",
    value: "Rua da Inovação, 999",
    description: "Curitiba, PR - Brasil",
  },
  {
    icon: Clock,
    title: "Horário",
    value: "Segunda a Sexta",
    description: "08:00 - 18:00",
  },
]

const teamMembers = [
  {
    icon: Users,
    title: "Equipe Comercial",
    description: "Soluções personalizadas para sua empresa",
  },
  {
    icon: Wrench,
    title: "Equipe Técnica",
    description: "Engenheiros especializados em baterias de lítio",
  },
]

export function ContatoPage() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    interest: "",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setFormData({ name: "", company: "", email: "", phone: "", interest: "", message: "" })
  }

  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-red-600/5 rounded-full blur-3xl" />
        </div>

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">
              Fale com nossa{" "}
              <span className="bg-gradient-to-r from-blue-600 via-purple-500 to-red-600 bg-clip-text text-transparent">
                equipe de engenharia
              </span>
            </h1>
            <p className="text-lg text-muted-foreground text-pretty">
              Estamos prontos para desenvolver a solução ideal para sua operação. 
              Entre em contato e agende uma demonstração.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Column - Info */}
            <div>
              {/* Contact Cards */}
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {contactInfo.map((item) => {
                  const Icon = item.icon
                  return (
                    <div
                      key={item.title}
                      className="p-5 rounded-xl bg-secondary/50 border border-border"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center shrink-0">
                          <Icon className="h-5 w-5 text-foreground" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground mb-1">{item.title}</p>
                          <p className="font-medium text-foreground">{item.value}</p>
                          <p className="text-xs text-muted-foreground mt-0.5">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* Team Section */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-foreground mb-4">Nossa Equipe</h3>
                <div className="space-y-4">
                  {teamMembers.map((member) => {
                    const Icon = member.icon
                    return (
                      <div
                        key={member.title}
                        className="flex items-center gap-4 p-4 rounded-lg bg-card border border-border"
                      >
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-600/20 to-red-600/20 flex items-center justify-center">
                          <Icon className="h-6 w-6 text-foreground" />
                        </div>
                        <div>
                          <p className="font-medium text-foreground">{member.title}</p>
                          <p className="text-sm text-muted-foreground">{member.description}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="rounded-xl bg-secondary/50 border border-border p-8 text-center">
                <MapPin className="h-8 w-8 text-muted-foreground mx-auto mb-4" />
                <p className="text-sm text-muted-foreground">
                  Rua da Inovação, 999 - Bairro Industrial<br />
                  Curitiba, PR - CEP 80000-000
                </p>
              </div>
            </div>

            {/* Right Column - Form */}
            <div>
              <Card className="bg-card border-border">
                <CardContent className="p-6 sm:p-8">
                  <h2 className="text-xl font-semibold text-foreground mb-6">
                    Solicite um contato
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-foreground">
                          Nome
                        </Label>
                        <Input
                          id="name"
                          placeholder="Seu nome"
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
                          placeholder="Nome da empresa"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          required
                          className="bg-background border-border focus:border-blue-500"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
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
                        <Label htmlFor="phone" className="text-foreground">
                          Telefone
                        </Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="(00) 00000-0000"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="bg-background border-border focus:border-blue-500"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="interest" className="text-foreground">
                        Área de Interesse
                      </Label>
                      <Select
                        value={formData.interest}
                        onValueChange={(value) => setFormData({ ...formData, interest: value })}
                        required
                      >
                        <SelectTrigger className="bg-background border-border">
                          <SelectValue placeholder="Selecione uma opção" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="demonstracao-sbm">Demonstração do Sistema SBM</SelectItem>
                          <SelectItem value="plataforma-sbm">Licenciamento da Plataforma SBM</SelectItem>
                          <SelectItem value="second-life">Baterias Second Life</SelectItem>
                          <SelectItem value="consultoria">Consultoria Técnica</SelectItem>
                          <SelectItem value="parceria">Parceria Comercial</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-foreground">
                        Mensagem
                      </Label>
                      <Textarea
                        id="message"
                        placeholder="Descreva brevemente sua necessidade..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        rows={4}
                        className="bg-background border-border focus:border-blue-500 resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-gradient-to-r from-blue-600 via-purple-500 to-red-600 text-white border-0 hover:opacity-90 transition-opacity"
                    >
                      <Send className="h-4 w-4 mr-2" />
                      Enviar Mensagem
                    </Button>

                    <p className="text-xs text-muted-foreground text-center">
                      Ao enviar, você concorda com nossa Política de Privacidade.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
