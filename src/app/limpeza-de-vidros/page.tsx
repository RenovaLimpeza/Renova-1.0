import type { Metadata } from "next";
import { ServiceHero, RodapeFinal, RodapePrincipal } from "@/components";
import ServiceCards from "@/components/ServiceCards";
import ServiceVideoSection from "@/components/ServiceVideoSection";

const SITE = (process.env.NEXT_PUBLIC_SITE_URL || "https://renovalimpezams.com.br").replace(/\/+$/, "");

export const metadata: Metadata = {
  title: "Limpeza de Vidros: Acabamento Impecável Sem Manchas",
  description:
    "Vidros limpos, transparentes e sem marcas em janelas, portas e fachadas. Técnicas e produtos específicos para cada tipo de vidro.",
  alternates: { canonical: `${SITE}/limpeza-de-vidros` },
  openGraph: {
    title: "Limpeza de Vidros: Acabamento Impecável",
    description:
      "Transparência e brilho sem manchas com técnicas e produtos adequados.",
    url: `${SITE}/limpeza-de-vidros`,
    type: "website",
  },
};

export default function LimpezaDeVidrosPage() {
  const cards = [
    { title: "Limpeza de Vidros de Janelas", image: "/geral/hero-vidros.png" },
    { title: "Restauração de Vidros Manchados", image: "/cards/card2/img2.png" },
    { title: "Manutenção de Vidros Temperados", image: "/cards/card1/img1.png" },
    { title: "Limpeza de Portas de Vidro", image: "/cards/card1/img2.png" },
    { title: "Acabamento Sem Marcas", image: "/cards/card4/img1.png" },
    { title: "Fachadas e Vitrines", image: "/cards/card3/img1.png" },
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
        title="Limpeza de Vidros: Acabamento Impecável Sem Manchas"
        description="Garantimos transparência e brilho com técnicas e produtos específicos para cada tipo de vidro."
        ctaLabel="Solicitar Orçamento"
        imageUrl="/geral/hero-vidros.png"
        imageAlt="Vidros transparentes e sem manchas após limpeza"
        iconUrl="/icone-janela.png"
        iconAlt="Ícone de limpeza de vidros"
      />

      <ServiceCards
        title="Vidros limpos e transparentes"
        description="Cuidamos de janelas, portas, vitrines e fachadas. Mais luminosidade, sem marcas e com segurança."
        items={cards}
      />

      <ServiceVideoSection
        title="Acabamento Impecável em Vidros"
        subtitleLeftTitle="Produtos Especiais para Vidros"
        subtitleLeftText="Usamos insumos que não deixam resíduos e entregam transparência real, sem riscos."
        subtitleRightTitle="Técnicas de Limpeza Avançada"
        subtitleRightText="Procedimentos que evitam manchas e marcas d’água, com brilho duradouro."
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


