import { Link } from "@tanstack/react-router";

import { WhatsAppCta } from "@/components/whatsapp-cta";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { formatPrice } from "@/lib/format";
import type { Product } from "@/data/products";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Card className="flex flex-col overflow-hidden">
      <Link to="/produtos/$slug" params={{ slug: product.slug }} className="block">
        <img src={product.image} alt={product.name} className="aspect-square w-full object-cover" />
      </Link>
      <CardHeader>
        <CardTitle>
          <Link to="/produtos/$slug" params={{ slug: product.slug }} className="hover:underline">
            {product.name}
          </Link>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-1">
        <p className="text-lg font-semibold text-foreground">{formatPrice(product.price)}</p>
      </CardContent>
      <CardFooter>
        <WhatsAppCta productName={product.name} />
      </CardFooter>
    </Card>
  );
}
