import { Hero, Sobre, Servicos, GaleriaServicos, Mentoria, RodapePrincipal, RodapeFinal } from "@/components";

export default function Home() {
  return (
    <main className="bg-white">
      <Hero />
      <Sobre />
      <Servicos />
      <GaleriaServicos />
      <Mentoria />
      <RodapePrincipal />
      <RodapeFinal />
    </main>
  );
}

export const metadata = {
  title: "Início",
  description:
    "Limpeza pós-obra, serviços de limpeza residencial e comercial com equipe de confiança. Solicite orçamento grátis.",
};
