import { Link } from "@tanstack/react-router";

// Sem foto de fundo aqui (ver conversa): a referência usa uma imagem de
// interior de loja específica do protótipo deles, que não é nossa para
// reutilizar. Gradiente jade fica no mesmo espírito "covil iluminado".
export function CatalogHero() {
  return (
    <section className="relative isolate overflow-hidden border-b border-brass/40 bg-linear-to-br from-background via-panel/60 to-background">
      <div className="relative mx-auto max-w-6xl px-5 py-24 md:py-32">
        <p className="font-display text-xs tracking-[0.35em] text-copper uppercase">
          The Old Wise Man&apos;s TCG &amp; Curios
        </p>
        <h1 className="mt-4 max-w-2xl font-display text-4xl leading-tight text-gold md:text-6xl">
          A prateleira do velho mestre, agora aberta online.
        </h1>
        <p className="mt-5 max-w-xl text-lg text-parchment/85">
          Boosters, fichários e acessórios para o seu deck. Escolha no catálogo e resolvemos o resto
          no WhatsApp.
        </p>
        <Link
          to="/catalogo"
          className="mt-8 inline-block rounded-sm bg-gold px-6 py-3 font-display text-base tracking-wide text-background transition-opacity hover:opacity-90"
        >
          Ver o catálogo
        </Link>
      </div>
    </section>
  );
}
