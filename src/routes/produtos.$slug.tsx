import { createFileRoute, Link, notFound } from "@tanstack/react-router";

import { WhatsAppCta } from "@/components/whatsapp-cta";
import { formatPrice } from "@/lib/format";
import { absoluteUrl } from "@/lib/site";
import { getProductBySlug } from "@/data/products";

export const Route = createFileRoute("/produtos/$slug")({
  loader: ({ params }) => {
    const product = getProductBySlug(params.slug);
    if (!product) throw notFound();
    return product;
  },
  head: ({ loaderData }) => {
    if (!loaderData) return {};
    const priceLabel = formatPrice(loaderData.price);
    const imageUrl = absoluteUrl(loaderData.image);
    return {
      meta: [
        { title: `${loaderData.name} — Kame Game` },
        { name: "description", content: loaderData.description },
        { property: "og:title", content: loaderData.name },
        { property: "og:description", content: loaderData.description },
        { property: "og:image", content: imageUrl },
        { property: "og:url", content: absoluteUrl(`/produtos/${loaderData.slug}`) },
        { property: "og:type", content: "product" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: loaderData.name },
        { name: "twitter:description", content: `${priceLabel} — ${loaderData.description}` },
        { name: "twitter:image", content: imageUrl },
      ],
    };
  },
  component: ProductPage,
});

function ProductPage() {
  const product = Route.useLoaderData();

  return (
    <main className="mx-auto max-w-2xl px-5 py-10">
      <Link to="/catalogo" className="text-sm text-copper hover:text-gold">
        ← Catálogo
      </Link>
      <article className="mt-4 overflow-hidden rounded-md border border-brass/40 bg-panel shadow-lantern">
        <div className="aspect-square overflow-hidden bg-background">
          <img src={product.image} alt={product.name} className="h-full w-full object-cover" />
        </div>
        <div className="space-y-3 p-6">
          <h1 className="font-display text-xl leading-snug text-parchment">{product.name}</h1>
          <p className="font-display text-2xl text-gold">{formatPrice(product.price)}</p>
          <p className="text-parchment/75">{product.description}</p>
          <WhatsAppCta productName={product.name} className="mt-2 bg-gold text-background" />
        </div>
      </article>
    </main>
  );
}
