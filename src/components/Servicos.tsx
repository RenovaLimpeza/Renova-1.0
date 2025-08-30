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
      title: "Vidros",
      description:
        "Limpeza completa após reforma ou construção, cuidando de cada detalhe.",
    },
    {
      title: "Pós-obra",
      description:
        "Cuidado periódico e detalhado para manter sua casa impecável.",
    },
    {
      title: "Pisos",
      description:
        "Ambientes de trabalho limpos e organizados para sua equipe.",
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
