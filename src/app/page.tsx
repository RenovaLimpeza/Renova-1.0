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

