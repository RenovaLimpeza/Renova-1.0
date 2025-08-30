"use client";

import Image from "next/image";
import { useState } from "react";

interface CarouselImage {
    src: string;
    alt: string;
}

interface GalleryItem {
    imageSrc?: string;
    alt?: string;
    description: string;
    instagramUrl?: string;
    images?: CarouselImage[];
}

interface ServiceGallerySectionProps {
    id?: string;
    title?: string;
    instagramUrl?: string;
    items?: GalleryItem[];
}

export default function GaleriaServicos({
  id = "services",
    title = "Nossos Serviços de Limpeza",
    instagramUrl = "https://www.instagram.com/renovapisos.cg/",
    items = [
        {
            imageSrc: "/icone-janela.png",
            alt: "Limpeza de janelas",
            description: "Limpeza de vidros e janelas com acabamento impecável.",
            images: [
                { src: "/services/calcada-antes.jpeg", alt: "Antes da limpeza" },
                { src: "/services/calcada-depois.jpeg", alt: "Depois da limpeza" },
            ],
        },
        {
            imageSrc: "/icone-vassoura.png",
            alt: "Limpeza residencial",
            description: "Cuidado residencial completo com atenção aos detalhes.",
        },
        {
            imageSrc: "/icone-piso.png",
            alt: "Tratamento de pisos",
            description: "Higienização e tratamento de pisos para máxima durabilidade.",
        },
        {
            imageSrc: "/renova.png",
            alt: "Serviços especiais Renova",
            description: "Serviços sob medida para sua necessidade específica.",
        },
    ],
}: ServiceGallerySectionProps) {
    return (
        <section id={id} className="bg-white py-16 sm:py-20">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <h2 className="text-center text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                    {title}
                </h2>

                <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-4">
                    {items.map((item, idx) => (
                        <Card key={idx} item={item} />
                    ))}
                </div>

                <div className="mt-10 flex justify-center">
                    <a
                        href={instagramUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center rounded-md bg-yellow-400 px-5 py-2.5 font-semibold text-foreground transition-colors hover:bg-yellow-300"
                    >
                        Ver mais
                    </a>
                </div>
            </div>
        </section>
    );
}

function Card({ item }: { item: GalleryItem }) {
    const defaultImgs: CarouselImage[] = [
        { src: "/services/calcada-antes.jpeg", alt: "Antes da limpeza" },
        { src: "/services/calcada-depois.jpeg", alt: "Depois da limpeza" },
    ];

    const imgs = (item.images && item.images.length > 0 ? item.images : defaultImgs);
    const [idx, setIdx] = useState(0);

    const goPrev = () => setIdx((i) => (i === 0 ? imgs.length - 1 : i - 1));
    const goNext = () => setIdx((i) => (i === imgs.length - 1 ? 0 : i + 1));

    return (
        <div className="rounded-xl bg-white p-6 shadow-md transition-transform duration-300 hover:scale-105">
            <div className="flex flex-col items-center justify-center text-center">
                <div className="relative w-full h-80 overflow-hidden rounded-lg">
                    {imgs.map((img, i) => (
                        <Image
                            key={i}
                            src={img.src}
                            alt={img.alt}
                            fill
                            sizes="(max-width: 1024px) 100vw, 25vw"
                            className={`absolute inset-0 object-cover transition-opacity duration-300 ease-in-out ${idx === i ? "opacity-100" : "opacity-0"
                                }`}
                            priority={i === 0}
                        />
                    ))}

                    {imgs.length > 1 && (
                        <>
                            <button
                                type="button"
                                aria-label="Anterior"
                                onClick={goPrev}
                                className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/40 p-2 text-white drop-shadow-md backdrop-blur transition-colors hover:bg-black/50"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                                    <path d="M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
                                </svg>
                            </button>
                            <button
                                type="button"
                                aria-label="Próximo"
                                onClick={goNext}
                                className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/40 p-2 text-white drop-shadow-md backdrop-blur transition-colors hover:bg-black/50"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                                    <path d="m10 6-1.41 1.41L13.17 12l-4.58 4.59L10 18l6-6z" />
                                </svg>
                            </button>
                        </>
                    )}

                    {imgs.length > 1 && (
                        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
                            {imgs.map((_, i) => (
                                <button
                                    key={i}
                                    aria-label={`Ir para imagem ${i + 1}`}
                                    onClick={() => setIdx(i)}
                                    className={`h-2.5 rounded-full transition-all ${idx === i ? "bg-white w-6" : "bg-white/50 w-2.5"
                                        }`}
                                />
                            ))}
                        </div>
                    )}
                </div>
                <p className="mt-4 text-foreground/80">{item.description}</p>
            </div>
        </div>
    );
}
