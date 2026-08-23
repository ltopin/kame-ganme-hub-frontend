import { createFileRoute } from "@tanstack/react-router";

import { CatalogHero } from "@/components/catalog-hero";
import { ProductCard } from "@/components/product-card";
import { SiteFooter } from "@/components/site-footer";
import { products } from "@/data/products";

export const Route = createFileRoute("/")({
  component: CatalogPage,
});

function CatalogPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <CatalogHero />
      <main id="catalogo" className="mx-auto w-full max-w-5xl flex-1 px-4 py-14">
        <p className="font-mono text-xs tracking-[0.3em] text-muted-foreground uppercase">
          Catálogo
        </p>
        <h2 className="mt-2 font-display text-2xl font-semibold text-foreground">
          {products.length} peças disponíveis agora
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
