import type { Metadata } from "next";
import { ServiceHero, RodapeFinal, RodapePrincipal } from "@/components";
import ServiceCards from "@/components/ServiceCards";
import ServiceVideoSection from "@/components/ServiceVideoSection";

const SITE = (process.env.NEXT_PUBLIC_SITE_URL || "https://renovalimpezams.com.br").replace(/\/+$/, "");

export const metadata: Metadata = {
  title: "Limpeza Profunda de Pisos: Cerâmica, Porcelanato, Mármore e Granito",
  description:
    "Técnicas profissionais para limpeza e restauração de pisos de cerâmica, porcelanato, mármore e granito. Polimento, remoção de manchas e enceramento.",
  alternates: { canonical: `${SITE}/limpeza-de-pisos` },
  openGraph: {
    title: "Limpeza Profunda de Pisos",
    description:
      "Cerâmica, porcelanato, mármore e granito com técnicas de polimento, restauração e proteção.",
    url: `${SITE}/limpeza-de-pisos`,
    type: "website",
  },
};

export default function LimpezaDePisosPage() {
  const cards = [
    { title: "Polimento de Cerâmica", image: "/cards/card1/img1.png" },
    { title: "Restaurando Pisos de Mármore", image: "/cards/card3/img1.png" },
    { title: "Técnicas de Enceramento", image: "/cards/card4/img2.png" },
    { title: "Limpeza de Porcelanato", image: "/cards/card1/img2.png" },
    { title: "Remoção de Manchas", image: "/cards/card3/img2.png" },
    { title: "Proteção e Brilho", image: "/cards/card4/img1.png" },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Limpeza de Pisos",
    url: `${SITE}/limpeza-de-pisos`,
    provider: {
      "@type": "LocalBusiness",
      name: "Renova",
      url: `${SITE}/`,
    },
    areaServed: "Campo Grande - MS, Brasil",
    serviceType: "Limpeza e Restauração de Pisos",
    description:
      "Limpeza profunda e restauração de cerâmica, porcelanato, mármore e granito com polimento e proteção.",
  };

  return (
    <main className="bg-white">
      <ServiceHero
        title="Limpeza Profunda de Pisos: Cerâmica, Porcelanato, Mármore e Granito"
        description="Tratamento profissional para diferentes tipos de pisos com polimento, remoção de manchas, proteção e brilho duradouro."
        ctaLabel="Solicitar Orçamento"
        imageUrl="/geral/hero-vidros.png"
        imageAlt="Piso restaurado e brilhante após limpeza"
        iconUrl="/icons/icone-pisos.png"
        iconAlt="Ícone de limpeza de pisos"
      />

      <ServiceCards
        title="Cuidado profissional com seus pisos"
        description="Aplicamos técnicas específicas para cada material, garantindo limpeza segura e resultados de alto padrão."
        items={cards}
      />

      <ServiceVideoSection
        title="Revitalize Seus Pisos"
        subtitleLeftTitle="Técnicas de Restauração"
        subtitleLeftText="Processos de polimento, remoção de riscos, limpeza profunda de rejuntes e finalização adequada."
        subtitleRightTitle="Durabilidade Garantida"
        subtitleRightText="Indicação do tratamento correto e aplicação de proteção para manter o brilho por mais tempo."
        posterSrc="/renova.png"
      />

      <RodapePrincipal />
      <RodapeFinal />

      <script
        id="ld-json-service-pisos"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </main>
  );
}


