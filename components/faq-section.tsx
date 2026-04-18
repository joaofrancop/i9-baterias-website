"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "O que é o sistema SBM?",
    answer:
      "O SBM (Smart Battery Management) é nossa plataforma proprietária de gestão inteligente de baterias. Utilizando sensores IoT e algoritmos de Inteligência Artificial, o sistema monitora em tempo real o estado de saúde (SOH) e o estado de carga (SOC) das baterias, prevendo falhas antes que ocorram e otimizando a vida útil dos seus ativos energéticos.",
  },
  {
    question: "As baterias Second Life são seguras?",
    answer:
      "Sim, absolutamente. Todas as baterias passam por um rigoroso processo de diagnóstico com nossa tecnologia SBM antes de serem recondicionadas. Apenas células que atendem aos nossos padrões de qualidade são aprovadas para segunda vida. Além disso, cada bateria recondicionada vem com certificado de segurança e garantia de performance, atendendo todas as normas técnicas vigentes.",
  },
  {
    question: "Como a i9+ ajuda na pontuação ESG da minha empresa?",
    answer:
      "A i9+ contribui diretamente para os três pilares ESG. No pilar Ambiental (E), reduzimos emissões de CO2 através da economia circular e prolongamento da vida útil das baterias. No pilar Social (S), promovemos empregos qualificados em tecnologia verde. No pilar de Governança (G), oferecemos relatórios detalhados e rastreáveis sobre a origem e o ciclo de vida de cada bateria, garantindo total transparência para auditorias e reportes de sustentabilidade.",
  },
  {
    question: "Quais tipos de baterias vocês trabalham?",
    answer:
      "Trabalhamos principalmente com baterias de íon-lítio (Li-ion) em suas diversas composições: LFP (Lítio-Ferro-Fosfato), NMC (Níquel-Manganês-Cobalto) e LTO (Titanato de Lítio). Atendemos baterias de veículos elétricos, empilhadeiras, sistemas de armazenamento estacionário e equipamentos industriais. Consulte nossa equipe para aplicações específicas.",
  },
  {
    question: "Qual é o prazo de implementação do sistema SBM?",
    answer:
      "O prazo varia conforme a escala e complexidade da operação. Para frotas menores (até 50 veículos), a implementação completa leva em média 4 a 6 semanas. Para operações de maior porte, desenvolvemos um cronograma personalizado. O processo inclui instalação dos sensores IoT, integração com seus sistemas existentes e treinamento da equipe operacional.",
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
            Tire suas dúvidas sobre nossas soluções
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
