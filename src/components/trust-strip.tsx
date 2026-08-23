const items = [
  {
    title: "Peça pelo WhatsApp",
    description: "Escolha os itens no catálogo e fale direto com a gente.",
  },
  {
    title: "Sem estoque parado",
    description: "Cada peça é buscada sob encomenda — sem taxa escondida.",
  },
  {
    title: "Combinamos com você",
    description: "Entrega ou retirada acertadas direto pelo WhatsApp.",
  },
];

export function TrustStrip() {
  return (
    <section className="border-y border-brass/40 bg-panel/40">
      <div className="mx-auto grid max-w-6xl gap-6 px-5 py-12 md:grid-cols-3">
        {items.map((item) => (
          <div key={item.title}>
            <h3 className="font-display text-lg text-gold">{item.title}</h3>
            <p className="mt-2 text-sm text-parchment/75">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
