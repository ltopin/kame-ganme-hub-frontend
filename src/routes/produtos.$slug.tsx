import { createFileRoute, Link, notFound } from "@tanstack/react-router";

import { WhatsAppCta } from "@/components/whatsapp-cta";
import { PriceTag } from "@/components/price-tag";
import { SiteFooter } from "@/components/site-footer";
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
    <div className="flex min-h-screen flex-col">
      <div className="bg-hero px-4 py-5 text-hero-foreground">
        <div className="mx-auto max-w-2xl">
          <Link
            to="/"
            className="font-mono text-xs tracking-wide text-hero-foreground/70 hover:text-hero-foreground"
          >
            ← Kame Game
          </Link>
        </div>
      </div>

      <main className="mx-auto w-full max-w-2xl flex-1 px-4 py-10">
        <div className="overflow-hidden rounded-xl border border-border bg-card shadow-sm">
          <div className="relative">
            <img
              src={product.image}
              alt={product.name}
              className="aspect-square w-full object-cover"
            />
            <PriceTag price={product.price} className="absolute -bottom-5 left-6 w-28" />
          </div>
          <div className="space-y-4 p-6 pt-8">
            <h1 className="font-display text-2xl font-semibold text-foreground">{product.name}</h1>
            <p className="text-muted-foreground">{product.description}</p>
            <WhatsAppCta productName={product.name} />
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
