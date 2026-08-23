import { Link } from "@tanstack/react-router";

import { WhatsAppCta } from "@/components/whatsapp-cta";
import { formatPrice } from "@/lib/format";
import type { Product } from "@/data/products";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group overflow-hidden rounded-md border border-brass/40 bg-panel shadow-lantern transition-colors hover:border-gold/70">
      <Link
        to="/produtos/$slug"
        params={{ slug: product.slug }}
        className="relative block aspect-square overflow-hidden bg-background"
      >
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </Link>
      <div className="space-y-2 p-4">
        <h3 className="font-display text-base leading-snug text-parchment">
          <Link to="/produtos/$slug" params={{ slug: product.slug }} className="hover:text-gold">
            {product.name}
          </Link>
        </h3>
        <p className="font-display text-lg text-gold">{formatPrice(product.price)}</p>
        <WhatsAppCta productName={product.name} className="mt-1" />
      </div>
    </article>
  );
}
