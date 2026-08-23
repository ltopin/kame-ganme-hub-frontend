// URL pública do site em produção, usada para montar URLs absolutas de OG/Twitter
// (WhatsApp e Instagram não seguem URLs relativas ao gerar preview de link).
// TODO: atualizar para o domínio real depois do primeiro deploy no Render
// (ver design.md - Open Questions: onrender.com padrão x domínio próprio).
export const SITE_URL = "https://kame-game-hub.onrender.com";

export function absoluteUrl(path: string): string {
  return new URL(path, SITE_URL).toString();
}
