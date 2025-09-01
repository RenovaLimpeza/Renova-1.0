interface SobreProps {
  id?: string;
  title?: string;
  description?: string;
}

export default function Sobre({
  id = "about",
  title = "Sobre Nós",
  description =
    "A Renova é uma empresa especializada em limpeza profissional, oferecendo soluções inovadoras tanto para residências quanto para empresas. Com um compromisso constante com a qualidade e a satisfação de nossos clientes, nossa equipe é formada por profissionais altamente treinados, equipados com materiais e técnicas de ponta. Garantimos um serviço eficiente, que atende às suas necessidades com flexibilidade e precisão.",
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
