// Número do dono do Kame Game, em formato internacional sem símbolos (+55 48 99655-0351).
export const OWNER_WHATSAPP_NUMBER = "5548996550351";

export function buildWhatsAppLink(message: string): string {
  return `https://wa.me/${OWNER_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function buildProductWhatsAppLink(productName: string): string {
  return buildWhatsAppLink(`Olá! Quero esse produto: ${productName}`);
}
