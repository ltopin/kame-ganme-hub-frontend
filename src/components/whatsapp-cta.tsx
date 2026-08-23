import { MessageCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { buildProductWhatsAppLink } from "@/lib/whatsapp";

export function WhatsAppCta({ productName }: { productName: string }) {
  return (
    <Button asChild className="w-full">
      <a href={buildProductWhatsAppLink(productName)} target="_blank" rel="noopener noreferrer">
        <MessageCircle />
        Quero esse
      </a>
    </Button>
  );
}
