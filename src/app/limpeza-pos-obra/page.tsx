import type { Metadata } from "next";
import { ServiceHero, RodapeFinal, RodapePrincipal } from "@/components";
import ServiceCards from "@/components/ServiceCards";
import ServiceVideoSection from "@/components/ServiceVideoSection";

const SITE = (process.env.NEXT_PUBLIC_SITE_URL || "https://renovalimpezams.com.br").replace(/\/+$/, "");

export const metadata: Metadata = {
  title: "Limpeza Pós-Obra Profunda e Eficiente",
  description:
    "Limpeza pós-obra completa: remoção de resíduos, limpeza detalhada de pisos e superfícies e acabamento final para deixar seu ambiente pronto para uso.",
  alternates: { canonical: `${SITE}/limpeza-pos-obra` },
  openGraph: {
    title: "Limpeza Pós-Obra Profunda e Eficiente",
    description:
      "Remoção de resíduos, detalhamento e acabamento final para ambientes prontos para uso.",
    url: `${SITE}/limpeza-pos-obra`,
    type: "website",
  },
};

export default function LimpezaPosObraPage() {
  const cards = [
    { title: "Remoção de Poeira e Detritos", image: "/card4/img1.png" },
    { title: "Limpeza de Pisos e Superfícies", image: "/card1/img1.png" },
    { title: "Tratamento de Manchas", image: "/card3/img2.png" },
    { title: "Acabamento em Vidros", image: "/card2/img1.png" },
    { title: "Organização Final do Ambiente", image: "/card4/img2.png" },
    { title: "Preparação para Mudança", image: "/card1/img2.png" },
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
      "Serviço completo de limpeza pós-obra com remoção de resíduos, detalhamento e acabamento final.",
  };

  return (
    <main className="bg-white">
      <ServiceHero
        title="Limpeza Pós-Obra Profunda e Eficiente"
        description="Removemos resíduos e poeira, limpamos pisos e superfícies e entregamos o acabamento final para seu espaço ficar pronto para uso."
        ctaLabel="Solicitar Orçamento"
        imageUrl="/card4/img2.png"
      />

      <ServiceCards
        title="Limpeza Pós-Obra sem complicações"
        description="Nossa equipe executa todos os detalhes: do grosso ao fino, com segurança, agilidade e cuidado com acabamentos."
        items={cards}
      />

      <ServiceVideoSection
        title="Transforme Seu Ambiente Após a Reforma"
        subtitleLeftTitle="Detalhamento Completo"
        subtitleLeftText="Remoção minuciosa de detritos e poeira, limpeza de cantos, rodapés, portas, janelas e superfícies para acabamento impecável."
        subtitleRightTitle="Espaços Limpos e Organizados"
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
