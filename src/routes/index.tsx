import { createFileRoute } from "@tanstack/react-router";

import { ProductCard } from "@/components/product-card";
import { products } from "@/data/products";

export const Route = createFileRoute("/")({
  component: CatalogPage,
});

function CatalogPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="text-3xl font-bold text-foreground">Catálogo Kame Game</h1>
      <p className="mt-2 text-muted-foreground">
        Escolha um produto e chame no WhatsApp para combinar a compra.
      </p>
      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
    </main>
  );
}
