import { cn } from "@/lib/utils";
import { formatPrice } from "@/lib/format";

// Selo hexagonal (referência à carapaça do Kame): assinatura visual do
// catálogo, usada de forma consistente como "etiqueta de avaliador" do preço.
export function PriceTag({ price, className }: { price: number; className?: string }) {
  return (
    <div
      className={cn(
        "flex items-center justify-center bg-medallion px-4 py-3 font-mono text-sm font-medium text-medallion-foreground shadow-lg [clip-path:polygon(25%_0%,75%_0%,100%_50%,75%_100%,25%_100%,0%_50%)]",
        className,
      )}
    >
      {formatPrice(price)}
    </div>
  );
}
