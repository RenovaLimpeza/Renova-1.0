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
};

export default function LimpezaDeVidrosPage() {
  const cards = [
    { title: "Box de Banheiro", image: "/cards/card2/img2.png" },
    { title: "Fachadas de Vidro", image: "/cards/card1/img1.png" },
    { title: "Janelas", image: "/cards/card1/img2.png" },
    { title: "Portas de Vidro", image: "/cards/card3/img1.png" },
    { title: "Vitrines", image: "/cards/card4/img1.png" },
    { title: "Painéis de Vidro", image: "/cards/card3/img2.png" },
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
        title="Limpeza Especializada"
        description="Oferecemos serviços especializados de limpeza ,restauração e impermeabilização de vidros, garantindo um acabamento impecável e a máxima transparência para janelas, fachadas e outros elementos de vidro."
        ctaLabel="Solicitar Orçamento"
        imageUrl="/geral/hero-vidros.png"
        imageAlt="Vidros transparentes e sem manchas após limpeza"
        iconUrl="/geral/hero-icon-vidros.jpeg"
        iconAlt="Ícone de limpeza de vidros"
      />

      <ServiceCards
        title="Vidros limpos, restaurados e protegidos"
        description="Atendemos janelas, portas, vitrines e fachadas. Foco em transparência, remoção de manchas e proteção para resultado duradouro."
        items={cards}
      />

      <ServiceVideoSection
        title="Transparência impecável em todos os ambientes"
        subtitleLeftTitle="Produtos especiais para vidros"
        subtitleLeftText="Soluções que não deixam resíduos e realçam a transparência, preservando a integridade do material."
        subtitleRightTitle="Técnicas seguras e eficazes"
        subtitleRightText="Procedimentos que removem manchas e marcas d'água sem riscar, garantindo brilho duradouro."
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

