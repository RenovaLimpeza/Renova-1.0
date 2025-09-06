import type { Metadata } from "next";
import { ServiceHero, RodapeFinal, RodapePrincipal } from "@/components";
import ServiceCards from "@/components/ServiceCards";
import ServiceVideoSection from "@/components/ServiceVideoSection";

const SITE = (process.env.NEXT_PUBLIC_SITE_URL || "https://renovalimpezams.com.br").replace(/\/+$/, "");

export const metadata: Metadata = {
  title: "Limpeza de Vidros: Proporcionando  brilho e transparência, sem manchas.",
  description:
    "Oferecemos serviços especializados para a limpeza de vidros em residências e empresas. Desde a remoção de manchas até a restauração de vidros danificados, garantimos transparência impecável em todos os tipos de superfícies.",
  alternates: { canonical: `${SITE}/limpeza-de-vidros` },
  openGraph: {
    title: "Limpeza de Vidros: Proporcionando  brilho e transparência, sem manchas.",
    description:
      "Transparência e brilho sem manchas com técnicas seguras e produtos adequados.",
    url: `${SITE}/limpeza-de-vidros`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Limpeza de Vidros: Proporcionando brilho e transparência, sem manchas.",
    description:
      "Transparência e brilho sem manchas com técnicas seguras e produtos adequados.",
  },
};

export default function LimpezaDeVidrosPage() {
  const cards = [
    { title: "Box de Banheiro", image: "/cards/cards-vidros/box.png" },
    { title: "Fachadas de Vidro", image: "/cards/cards-vidros/fachada.png" },
    { title: "Janelas", image: "/cards/cards-vidros/janela.png" },
    { title: "Portas de Vidro", image: "/cards/cards-vidros/porta.png" },
    { title: "Vitrines", image: "/cards/cards-vidros/vitrine.png" },
    { title: "Esquadria de Vidro", image: "/cards/cards-vidros/esquadria.png" },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Limpeza de Vidros",
    url: `${SITE}/limpeza-de-vidros`,
    provider: {
      "@type": "LocalBusiness",
      name: "Renova",
      url: `${SITE}/`,
    },
    areaServed: "Campo Grande - MS, Brasil",
    serviceType: "Limpeza de Vidros",
    description:
      "Limpeza de vidros com acabamento impecável, sem manchas, em janelas, portas e fachadas.",
  };

  return (
    <main className="bg-white">
      <ServiceHero
        title="Limpeza de Vidros: Proporcionando  brilho e transparência, sem manchas."
        description="Oferecemos serviços especializados de limpeza ,restauração e impermeabilização de vidros, garantindo um acabamento impecável e a máxima transparência para janelas, fachadas e outros elementos de vidro."
        ctaLabel="Solicitar Orçamento"
        imageUrl="/geral/hero-vidros.png"
        imageAlt="Vidros transparentes e sem manchas após limpeza"
        iconUrl="/icons/hero-icon-vidros.jpeg"
        iconAlt="Ícone de limpeza de vidros"
      />

      <ServiceCards
        title="Limpeza Especializadas"
        description="Oferecemos serviços especializados de limpeza ,restauração e impermeabilização de vidros, garantindo um acabamento impecável e a máxima transparência para janelas, fachadas e outros elementos de vidro."
        items={cards}
      />

      <ServiceVideoSection
        title="Se busca um tratamento de excelência para seus vidros, conte com a Renova!"
        subtitleLeftTitle="Atendimento Personalizado"
        subtitleLeftText="Adaptamos nossos serviços às suas necessidades, oferecendo soluções sob medida."
        subtitleRightTitle="Trabalho Eficaz"
        subtitleRightText="Somos comprometidos em entregar resultados rápidos e de alta qualidade, sem comprometer a eficiência."
        videoSrc="/videos/vidro.mp4"
        posterSrc="/renova.png"
      />

      <RodapePrincipal />
      <RodapeFinal />

      <script
        id="ld-json-service-vidros"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </main>
  );
}

