import type { Metadata } from "next";
import { ServiceHero, RodapeFinal, RodapePrincipal } from "@/components";
import ServiceCards from "@/components/ServiceCards";
import ServiceVideoSection from "@/components/ServiceVideoSection";

const SITE = (process.env.NEXT_PUBLIC_SITE_URL || "https://renovalimpezams.com.br").replace(/\/+$/, "");

export const metadata: Metadata = {
  title: "Limpeza Pós-Obra: Transformamos seu espaço, eliminando todo o resíduo da construção.",
  description:
    "Após a realização de obras ou reformas, garantimos que o seu ambiente fique limpo e organizado. Removemos resíduos, poeira e detritos de construção, deixando o espaço pronto para uso com um acabamento impecável.",
  alternates: { canonical: `${SITE}/limpeza-pos-obra` },
  openGraph: {
    title: "Limpeza Pós-Obra: Transformamos seu espaço, eliminando todo o resíduo da construção.",
    description:
      "Remoção de resíduos, limpeza detalhada e acabamento final para ambientes prontos para uso.",
    url: `${SITE}/limpeza-pos-obra`,
    type: "website",
  },
};

export default function LimpezaPosObraPage() {
  const cards = [
    { title: "Remoção de Resíduos de Construção", image: "/cards/card4/img1.png" },
    { title: "Limpeza de Pisos e Superfícies", image: "/cards/card1/img1.png" },
    { title: "Organização do Ambiente", image: "/cards/card4/img2.png" },
    { title: "Limpeza de Vidros Pós-Obra", image: "/cards/card2/img1.png" },
    { title: "Remoção de Poeira e Detritos", image: "/cards/card3/img2.png" },
    { title: "Acabamento Final e Preparação", image: "/cards/card1/img2.png" },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Limpeza Pós-Obra",
    url: `${SITE}/limpeza-pos-obra`,
    provider: {
      "@type": "LocalBusiness",
      name: "Renova",
      url: `${SITE}/`,
    },
    areaServed: "Campo Grande - MS, Brasil",
    serviceType: "Limpeza Pós-Obra",
    description:
      "Serviço completo de limpeza pós-obra: remoção de resíduos, poeira e detritos, com acabamento final para deixar o ambiente pronto para uso.",
  };

  return (
    <main className="bg-white">
      <ServiceHero
        title="Limpeza Pós-Obra: Transformamos seu espaço, eliminando todo o resíduo da construção."
        description="Após a realização de obras ou reformas, garantimos que o seu ambiente fique limpo e organizado. Removemos resíduos, poeira e detritos de construção, deixando o espaço pronto para uso com um acabamento impecável."
        ctaLabel="Solicitar Orçamento"
        imageUrl="/geral/hero-pos-obra.png"
        imageAlt="Ambiente limpo e organizado após obra"
        iconUrl="/icons/icone-pos-obra.png"
        iconAlt="Ícone de limpeza pós-obra"
      />

      <ServiceCards
        title="Pós-obra sem complicações"
        description="Remoção de resíduos, limpeza detalhada de pisos e superfícies e acabamento final para deixar seu ambiente pronto para uso."
        items={cards}
      />

      <ServiceVideoSection
        title="Transforme seu ambiente após a reforma"
        subtitleLeftTitle="Detalhamento completo"
        subtitleLeftText="Remoção minuciosa de detritos e poeira, limpeza de cantos, rodapés, portas e janelas para acabamento impecável."
        subtitleRightTitle="Espaços limpos e organizados"
        subtitleRightText="Entrega do ambiente pronto para uso, com higienização, organização e brilho que valorizam seu investimento."
        posterSrc="/renova.png"
      />

      <RodapePrincipal />
      <RodapeFinal />

      <script
        id="ld-json-service-pos-obra"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </main>
  );
}

