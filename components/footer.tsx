"use client"

import { Mail, Phone, MapPin, Linkedin, Instagram } from "lucide-react"

const quickLinks = [
  { page: "home", label: "Home" },
  { page: "solucoes-sbm", label: "Soluções SBM" },
  { page: "economia-circular", label: "Economia Circular" },
  { page: "contato", label: "Contato" },
]

const contactInfo = [
  { icon: Mail, text: "contato@i9mais.ind.br" },
  { icon: Phone, text: "+55 (41) 3333-9999" },
  { icon: MapPin, text: "Curitiba, PR - Brasil" },
]

interface FooterProps {
  onNavigate: (page: string) => void
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-secondary/30 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <button
              onClick={() => onNavigate("home")}
              className="flex items-center gap-1 text-xl font-bold mb-4"
            >
              <span className="bg-gradient-to-r from-blue-600 via-purple-500 to-red-600 bg-clip-text text-transparent">
                i9+
              </span>
              <span className="text-foreground">Baterias</span>
            </button>
            <p className="text-muted-foreground text-sm max-w-md mb-6 text-pretty">
              Líder em Deep Tech para mobilidade elétrica, economia circular e armazenamento de energias renováveis. Transformando o futuro energético do Brasil.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">Links Rápidos</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.page}>
                  <button
                    onClick={() => onNavigate(link.page)}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">Contato</h3>
            <ul className="space-y-3">
              {contactInfo.map((item) => {
                const Icon = item.icon
                return (
                  <li key={item.text} className="flex items-center gap-3">
                    <Icon className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">{item.text}</span>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex flex-col gap-1">
              <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} i9+ Baterias. Todos os direitos reservados.
              </p>
              <p className="text-xs text-muted-foreground/60 italic">
                i9+ Baterias — Inovação e Sustentabilidade em Energia.
              </p>
            </div>
            <div className="flex items-center gap-6">
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
