import { Link } from "@tanstack/react-router";

import { WhatsAppCta } from "@/components/whatsapp-cta";
import { PriceTag } from "@/components/price-tag";
import type { Product } from "@/data/products";

export function ProductCard({ product }: { product: Product }) {
  return (
    <div className="flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm">
      <div className="relative">
        <Link to="/produtos/$slug" params={{ slug: product.slug }} className="block">
          <img
            src={product.image}
            alt={product.name}
            className="aspect-square w-full object-cover"
          />
        </Link>
        <PriceTag price={product.price} className="absolute -bottom-4 left-4 w-24" />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-4 pt-6">
        <h3 className="font-display text-lg font-semibold text-foreground">
          <Link to="/produtos/$slug" params={{ slug: product.slug }} className="hover:underline">
            {product.name}
          </Link>
        </h3>
        <div className="mt-auto">
          <WhatsAppCta productName={product.name} />
        </div>
      </div>
    </div>
  );
}
