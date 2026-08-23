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
    <main className="mx-auto max-w-2xl px-4 py-10">
      <Link to="/" className="text-sm text-muted-foreground hover:underline">
        ← Voltar ao catálogo
      </Link>
      <div className="mt-4 overflow-hidden rounded-xl border bg-card">
        <img src={product.image} alt={product.name} className="aspect-square w-full object-cover" />
        <div className="space-y-4 p-6">
          <h1 className="text-2xl font-bold text-foreground">{product.name}</h1>
          <p className="text-xl font-semibold text-foreground">{formatPrice(product.price)}</p>
          <p className="text-muted-foreground">{product.description}</p>
          <WhatsAppCta productName={product.name} />
        </div>
      </div>
    </main>
  );
}
