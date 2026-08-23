import { createFileRoute } from "@tanstack/react-router";

import { ProductCard } from "@/components/product-card";
import { products } from "@/data/products";

export const Route = createFileRoute("/catalogo")({
  head: () => ({
    meta: [
      { title: "Catálogo — Kame Game" },
      {
        name: "description",
        content: "Todos os produtos disponíveis agora no Kame Game — peça pelo WhatsApp.",
      },
    ],
  }),
  component: CatalogoPage,
});

function CatalogoPage() {
  return (
    <main className="mx-auto max-w-6xl px-5 py-10">
      <h1 className="font-display text-3xl text-gold">Catálogo</h1>
      <p className="mt-2 max-w-xl text-parchment/70">
        Tudo o que está disponível agora. Escolha um item e chame no WhatsApp.
      </p>
      <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
    </main>
  );
}
