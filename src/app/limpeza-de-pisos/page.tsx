import type { Metadata } from "next";
import { ServiceHero, RodapeFinal, RodapePrincipal } from "@/components";
import ServiceCards from "@/components/ServiceCards";
import ServiceVideoSection from "@/components/ServiceVideoSection";

const SITE = (process.env.NEXT_PUBLIC_SITE_URL || "https://renovalimpezams.com.br").replace(/\/+$/, "");

export const metadata: Metadata = {
  title: "Limpeza de Pisos: Restauração e brilho, com um acabamento impecável.",
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
  twitter: {
    card: "summary_large_image",
    title: "Limpeza de Pisos: Restauração e brilho, com um acabamento impecável.",
    description:
      "Cerâmica, porcelanato, mármore e granito com técnicas de polimento, restauração e proteção.",
  },
};

export default function LimpezaDePisosPage() {
  const cards = [
    { title: "Borda de Piscina", image: "/cards/cards-pisos/borda.png" },
    { title: "Calçadas", image: "/cards/cards-pisos/calcada.png" },
    { title: "Pisos Internos", image: "/cards/cards-pisos/interno.png" },
    { title: "Pisos Externos", image: "/cards/cards-pisos/externo.png" },
    { title: "Pedras", image: "/cards/cards-pisos/pedra.png" },
    { title: "Fachadas", image: "/cards/cards-pisos/fachada.png" },
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
        title="Limpeza de Pisos: Restauração e brilho, com um acabamento impecável."
        description="Tratamento profissional para diferentes tipos de pisos com polimento, remoção de manchas, proteção e brilho duradouro."
        ctaLabel="Solicitar Orçamento"
        imageUrl="/geral/hero-pisos.png"
        imageAlt="Piso restaurado e brilhante após limpeza"
        iconUrl="/icons/hero-icone-pisos.jpeg"
        iconAlt="Ícone de limpeza de pisos"
      />

      <ServiceCards
        title="Limpeza Especializada"
        description="Oferecemos serviços especializados de limpeza, restauração e proteção de pisos, cuidando de cada detalhe para garantir brilho, durabilidade e aparência impecável para cerâmica, porcelanato, mármore e outros tipos de revestimentos."
        items={cards}
      />

      <ServiceVideoSection
        title="Se busca um tratamento de excelência para seus pisos, conte com a Renova!"
        subtitleLeftTitle="Atendimento Personalizado"
        subtitleLeftText="Adaptamos nossos serviços às suas necessidades, oferecendo soluções sob medida."
        subtitleRightTitle="Trabalho Eficaz"
        subtitleRightText="Somos comprometidos em entregar resultados rápidos e de alta qualidade, sem comprometer a eficiência."
        videoSrc="/videos/piso.mp4"
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


