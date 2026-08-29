export type Product = {
  slug: string;
  name: string;
  price: number;
  description: string;
  image: string;
};

// Catálogo estático (ver design.md - Decisão "Product data"): sem estoque/quantidade,
// cada item é reabastecido sob demanda pelo dono após o contato via WhatsApp.
export const products: Product[] = [
  {
    slug: "blister-triplo-escuridao-absoluta",
    name: "Blister Triplo Escuridão Absoluta",
    price: 42.0,
    description:
      "Blister triplo Pokémon TCG da coleção Escuridão Absoluta, com 3 pacotes de booster (19 cartas no total).",
    image: "/products/blister-escuridao-absoluta.jpg",
  },
  {
    slug: "blister-quadruplo-escuridao-absoluta",
    name: "Blister Quádruplo Escuridão Absoluta",
    price: 55.0,
    description:
      "Blister quádruplo Pokémon TCG da coleção Escuridão Absoluta, com 4 pacotes de booster (25 cartas no total).",
    image: "/products/blister-quadruplo-escuridao.jpg",
  },
  {
    slug: "blister-quadruplo-mega-evolucao",
    name: "Blister Quádruplo Mega Evolução",
    price: 55.0,
    description:
      "Blister quádruplo Pokémon TCG da coleção Mega Evolução, com 4 pacotes de booster (25 cartas no total).",
    image: "/products/blister-quadruplo-mega-evolucao.jpg",
  },
  {
    slug: "fichario-pasta-360",
    name: "Fichário Pasta 360 Bolsos",
    price: 98.0,
    description:
      "Fichário para cartas com capacidade para 360 bolsos, ideal para organizar e proteger toda a sua coleção.",
    image: "/products/fichario-pasta-360.jpg",
  },
  {
    slug: "shield-basico-100-un",
    name: "Shield Básico 100 Unidades",
    price: 30.0,
    description:
      "Pacote com 100 shields básicos transparentes, para proteger suas cartas do desgaste do dia a dia.",
    image: "/products/shield-basico-100-un.jpg",
  },
  {
    slug: "shield-sleeve-classico-varias-cores-100-un",
    name: "Shield Sleeve Clássico Várias Cores 100 Unidades",
    price: 60.0,
    description:
      "Pacote com 100 shields clássicos, disponíveis em várias cores, para proteger e personalizar suas cartas.",
    image: "/products/shield-sleeve-classico-varias-cores-100-un.jpg",
  },
  {
    slug: "toploader-un",
    name: "Toploader 1 Unidade",
    price: 5.0,
    description:
      "Toploader rígido individual, ideal para proteger cartas de maior valor contra dobras e impactos.",
    image: "/products/toploader-un.jpg",
  },
  {
    slug: "camiseta-infantil-pokemon-treinador",
    name: "Camiseta Infantil Pokémon Treinador",
    price: 65.0,
    description:
      "Camiseta infantil preta com estampa Pokémon: logo discreto na frente e estampa completa nas costas com o treinador e seus Pokémon. Disponível nos tamanhos 6 a 14.",
    image: "/products/camiseta-infantil-6-a-14.jpeg",
  },
  {
    slug: "camiseta-infantil-pokebola",
    name: "Camiseta Infantil Pokébola",
    price: 65.0,
    description:
      "Camiseta infantil preta com estampa de Pokébola formada por silhuetas de Pokémon nas cores vermelho e branco. Disponível nos tamanhos 6 a 14.",
    image: "/products/camiseta-infantil-6-a-14-pokemon.jpeg",
  },
  {
    slug: "camiseta-adulto-mewtwo",
    name: "Camiseta Adulto Mewtwo",
    price: 90.0,
    description:
      "Camiseta adulta preta com estampa artística de Mewtwo em tons de vermelho e caracteres japoneses. Disponível nos tamanhos M, G e GG.",
    image: "/products/camiseta-adulto.jpeg",
  },
  {
    slug: "camiseta-adulto-pikachu-galaxias",
    name: "Camiseta Adulto Pikachu das Galáxias",
    price: 90.0,
    description:
      "Camiseta adulta preta com estampa divertida do Pikachu em paródia de Star Wars, com os dizeres \"Pika das Galáxias\". Disponível nos tamanhos M, G e GG.",
    image: "/products/camiseta-adulto-pikachu.jpeg",
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}
