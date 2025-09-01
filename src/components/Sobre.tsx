interface SobreProps {
  id?: string;
  title?: string;
  description?: string;
}

export default function Sobre({
  id = "about",
  title = "Sobre Nós",
  description =
    "A Renova é uma empresa especializada em limpeza profissional, oferecendo soluções para residências e empresas. Com compromisso com a qualidade e a satisfação, nossa equipe é formada por profissionais treinados e equipados com materiais e técnicas de ponta.",
}: SobreProps) {
  return (
    <section id={id} className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {title}
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-foreground/80 sm:text-lg">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}

