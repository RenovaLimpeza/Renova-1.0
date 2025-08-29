export type WhatsAppMessageType = "orcamento" | "informacoes";

export const WHATSAPP_CONFIG = {
  // Use somente números com DDI e DDD (ex: 55 + DDD + número)
  number: "5567996218497",
  messages: {
    orcamento: "Olá, gostaria de solicitar um orçamento",
    informacoes: "Olá, gostaria de mais informações sobre os serviços",
  },
} as const;

export function buildWhatsAppLink(type: WhatsAppMessageType) {
  const msg = WHATSAPP_CONFIG.messages[type];
  const encoded = encodeURIComponent(msg);
  return `https://wa.me/${WHATSAPP_CONFIG.number}?text=${encoded}`;
}

