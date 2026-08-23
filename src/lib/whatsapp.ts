// Número do dono do Kame Game, em formato internacional sem símbolos (+55 48 99655-0351).
export const OWNER_WHATSAPP_NUMBER = "5548996550351";

export function buildProductWhatsAppLink(productName: string): string {
  const message = `Olá! Quero esse produto: ${productName}`;
  return `https://wa.me/${OWNER_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
