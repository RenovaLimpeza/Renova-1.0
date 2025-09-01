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
  id = "services",
  services = [
    {
      title: "Vidros",
      description: "Tratamos pisos de cerâmica, porcelanato, mármore e granito com polimento, raspagem e enceramento, restaurando a aparência original e garantindo maior durabilidade.",
    },
    {
      title: "Pós-Obra",
      description: "Após reforma ou construção, nossa equipe especializada deixa tudo limpo e totalmente organizado com excelência, garantindo um ambiente pronto para uso, sem transtornos.",
    },
    {
      title: "Pisos",
      description: "Tratamos pisos de cerâmica, porcelanato, mármore e granito com polimento, raspagem e enceramento, restaurando a aparência e prolongando a durabilidade.",
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
          Serviços de Limpeza
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
