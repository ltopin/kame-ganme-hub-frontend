// URL pública do site em produção, usada para montar URLs absolutas de OG/Twitter
// (WhatsApp e Instagram não seguem URLs relativas ao gerar preview de link).
export const SITE_URL = "https://kame-game-hub-frontend.onrender.com";

export function absoluteUrl(path: string): string {
  return new URL(path, SITE_URL).toString();
}
