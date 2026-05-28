"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "Como funciona a plataforma BMS da i9+?",
    answer:
      "A plataforma BMS da i9+ é nosso sistema proprietário de gestão inteligente de baterias. Com telemetria, sensores IoT e algoritmos de inteligência artificial, monitoramos em tempo real o estado de saúde (SOH) e o estado de carga (SOC), realizamos diagnóstico preditivo e otimizamos a vida útil de sistemas estacionários e móveis.",
  },
  {
    question: "As baterias Second Life são seguras?",
    answer:
      "Sim, absolutamente. Todas as baterias passam por um rigoroso processo de diagnóstico com nossa plataforma BMS antes de serem recondicionadas. Apenas células que atendem aos nossos padrões de qualidade são aprovadas para segunda vida. Além disso, cada bateria recondicionada vem com certificado de segurança e garantia de performance, atendendo todas as normas técnicas vigentes.",
  },
  {
    question: "Como a i9+ ajuda na pontuação ESG da minha empresa?",
    answer:
      "A i9+ contribui diretamente para os pilares ESG com foco em descarbonização e segurança energética. No pilar Ambiental (E), reduzimos emissões de CO2 através da segunda vida de baterias e prolongamento da vida útil dos ativos. No pilar Social (S), promovemos empregos qualificados em tecnologia verde. No pilar de Governança (G), oferecemos relatórios detalhados e rastreáveis sobre a origem e o ciclo de vida de cada bateria, garantindo total transparência para auditorias e reportes de sustentabilidade.",
  },
  {
    question: "Quais tipos de baterias vocês trabalham?",
    answer:
      "Trabalhamos principalmente com baterias de íon-lítio (Li-ion) em suas diversas composições: LFP (Lítio-Ferro-Fosfato), NMC (Níquel-Manganês-Cobalto) e LTO (Titanato de Lítio). Atendemos sistemas de armazenamento estacionário, veículos elétricos, infraestrutura crítica, agronegócio e equipamentos industriais. Consulte nossa equipe para aplicações específicas.",
  },
  {
    question: "Qual é o prazo de implementação da plataforma BMS?",
    answer:
      "O prazo varia conforme a escala e complexidade da operação. Para instalações menores (até 50 sistemas), a implementação completa leva em média 4 a 6 semanas. Para operações de maior porte, desenvolvemos um cronograma personalizado. O processo inclui instalação dos sensores IoT, integração com seus sistemas existentes e treinamento da equipe operacional.",
  },
]

export function FAQSection() {
  return (
    <section className="py-20 lg:py-28 bg-secondary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
            Perguntas{" "}
            <span className="bg-gradient-to-r from-blue-600 via-purple-500 to-red-600 bg-clip-text text-transparent">
              Frequentes
            </span>
          </h2>
          <p className="text-muted-foreground text-lg text-pretty">
            Tecnologia para armazenamento energético, mobilidade elétrica e infraestrutura inteligente.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-b border-border"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6 text-foreground font-medium text-base sm:text-lg">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base pb-6 leading-relaxed text-pretty">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
