import { cn } from "@/lib/utils";
import { buildProductWhatsAppLink } from "@/lib/whatsapp";

export function WhatsAppCta({
  productName,
  className,
}: {
  productName: string;
  className?: string;
}) {
  return (
    <a
      href={buildProductWhatsAppLink(productName)}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "block rounded-sm border border-gold/70 px-3 py-1.5 text-center font-display text-sm text-gold transition-colors hover:bg-gold hover:text-background",
        className,
      )}
    >
      Quero esse
    </a>
  );
}
