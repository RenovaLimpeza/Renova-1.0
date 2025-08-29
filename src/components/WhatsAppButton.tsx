import React from "react";
import { buildWhatsAppLink, type WhatsAppMessageType } from "@/config/whatsapp";

type WhatsAppButtonProps = {
  type: WhatsAppMessageType; // "orcamento" | "informacoes"
  label: string;
  className?: string;
  unstyled?: boolean; // opcional: renderiza sem estilos base
};

export default function WhatsAppButton({ type, label, className, unstyled }: WhatsAppButtonProps) {
  const href = buildWhatsAppLink(type);

  const baseClasses =
    "inline-flex items-center justify-center rounded-md bg-green-500 px-5 py-3 text-white font-semibold shadow-sm transition-colors hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600";

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={unstyled ? (className ?? "") : className ? `${baseClasses} ${className}` : baseClasses}
    >
      {label}
    </a>
  );
}
