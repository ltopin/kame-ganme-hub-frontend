export function CatalogHero() {
  return (
    <div className="relative overflow-hidden bg-linear-to-b from-hero to-hero-end px-4 py-20 text-hero-foreground">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 right-[-10%] size-[420px] rounded-full bg-primary/25 blur-3xl"
      />
      <div className="relative mx-auto max-w-3xl text-center">
        <p className="font-mono text-xs tracking-[0.3em] text-primary uppercase">Kame Game · TCG</p>
        <h1 className="mt-4 font-display text-4xl font-semibold text-balance sm:text-5xl">
          As cartas guardadas pelo mestre Kame
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-hero-foreground/80">
          Escolha o que quer nesta prateleira e resolvemos o resto no WhatsApp — sem loja física,
          sem fila, sem estoque parado.
        </p>
        <a
          href="#catalogo"
          className="mt-8 inline-flex items-center justify-center rounded-md border border-hero-line px-5 py-2.5 text-sm font-medium text-hero-foreground transition-colors hover:bg-hero-line/40"
        >
          Ver o catálogo ↓
        </a>
      </div>
    </div>
  );
}
