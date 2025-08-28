import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-6 text-center bg-background text-foreground">
      <Image
        src="/renova.png"
        alt="Mascote da Renova operando máquina de limpeza"
        width={260}
        height={260}
        priority
      />
      <h1 className="mt-6 text-4xl font-bold">
        Estamos em produção
      </h1>
      <p className="mt-4 max-w-md text-lg text-foreground/80">
        Nosso site de serviços de limpeza pós-obra está sendo preparado.
        Em breve você poderá conhecer todas as nossas soluções.
      </p>
      <p className="mt-8 text-sm text-foreground/60">
        Contato: (XX) XXXXX-XXXX
      </p>
    </main>
  );
}
