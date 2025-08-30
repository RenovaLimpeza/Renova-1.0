import Image from "next/image";
import { ReactNode } from "react";

interface ServiceItem {
  title: string;
  description: string;
  icon?: ReactNode;
}

interface ServicosProps {
  id?: string;
  title?: string;
  services?: ServiceItem[];
}

export default function Servicos({
  id = "servicos",
  services = [
    {
      title: "Limpeza de Vidros",
      description: "A limpeza de vidros exige técnica e cuidado, e nosso serviço especializado garante um acabamento impecável em janelas e fachadas, utilizando produtos de alta qualidade e equipamentos adequados para cada tipo de superfície. Além disso, oferecemos restauração de vidros, recuperando a transparência e eliminando manchas ou marcas que comprometem a estética, e aplicamos hipermeabilização, criando uma camada protetora que reduz o acúmulo de sujeira, facilita a manutenção e prolonga a vida útil dos vidros.",
    },
    {
      title: "Limpeza Pós-Obra",
      description: "Seja após uma reforma ou construção, nossa equipe está preparada para deixar tudo limpo e organizado. Utilizamos equipamentos e produtos específicos para eliminar toda a sujeira e resíduos, garantindo um ambiente pronto para uso com o mínimo de transtorno.",
    },
    {
      title: "Limpeza de Pisos",
      description: "Tratamos pisos de todos os tipos, desde cerâmicas e porcelanatos até mármores e granitos. Nosso serviço inclui polimento, raspagem e enceramento, com técnicas especializadas para restaurar a aparência original e prolongar a durabilidade do seu piso.",
    },
  ],
}: ServicosProps) {
  const iconSrcs = [
    "/icone-janela.png",
    "/icone-vassoura.png",
    "/icone-piso.png",
  ];
  return (
    <section id={id} className="bg-[#FFF9E6] py-16 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Serviços de Limpeza Profissional: Pós-Obra, Vidros e Pisos
        </h2>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {services.map((item, idx) => (
            <div key={idx} className="h-full">
              <div className="flex h-full flex-col items-center justify-center text-center">
                <div className="mb-4 flex h-20 w-20 items-center justify-center text-foreground">
                  {item.icon ?? (
                    <Image
                      src={iconSrcs[idx] ?? iconSrcs[0]}
                      alt={`${item.title} ícone`}
                      width={48}
                      height={48}
                      className="h-15 w-15 object-contain"
                      priority={idx === 0}
                    />
                  )}
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 max-w-xs text-foreground/80">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
