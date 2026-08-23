import { Link } from "@tanstack/react-router";

import { buildWhatsAppLink } from "@/lib/whatsapp";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-brass/40 bg-background/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4">
        <Link to="/" className="leading-tight">
          <span className="block font-display text-xl tracking-wide text-gold">Kame Game</span>
          <span className="block text-[10px] tracking-[0.25em] text-copper uppercase">
            The Old Wise Man&apos;s TCG &amp; Curios
          </span>
        </Link>
        <nav className="flex items-center gap-5 text-sm text-parchment">
          <Link to="/catalogo" className="hover:text-gold" activeProps={{ className: "text-gold" }}>
            Catálogo
          </Link>
          <a
            href={buildWhatsAppLink("Olá! Vim pelo site do Kame Game.")}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-sm border border-gold/70 px-3 py-1.5 font-display text-sm text-gold transition-colors hover:bg-gold hover:text-background"
          >
            WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
}
