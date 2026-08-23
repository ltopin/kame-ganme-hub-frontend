import { createFileRoute, Link } from "@tanstack/react-router";

import { CatalogHero } from "@/components/catalog-hero";
import { ProductCard } from "@/components/product-card";
import { TrustStrip } from "@/components/trust-strip";
import { products } from "@/data/products";

export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <CatalogHero />
      <section className="mx-auto max-w-6xl px-5 pb-16 pt-14">
        <div className="flex items-end justify-between">
          <h2 className="font-display text-2xl text-gold">Destaques da semana</h2>
          <Link to="/catalogo" className="text-sm text-copper hover:text-gold">
            Ver tudo →
          </Link>
        </div>
        <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </section>
      <TrustStrip />
    </>
  );
}
