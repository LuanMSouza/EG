import type { Metadata } from "next";
import { getCatalogo } from "./actions";
import CatalogoClient from "@/componentes/catalogoClient";

export const metadata: Metadata = {
  title: "Catálogo",
  description: "Confira o catálogo completo de personalizados de luxo da Érika Golegã: caixas, lembrancinhas e papelaria artesanal feita à mão para festas na Baixada Santista.",
  alternates: {
    canonical: '/catalogo',
  },
  openGraph: {
    title: "Catálogo | Érika Golegã Personalizados",
    description: "Personalizados de luxo feitos à mão para festas exclusivas na Baixada Santista. Veja todos os modelos disponíveis.",
    url: "https://egpersonalizados.com.br/catalogo",
    type: "website",
  },
};

export default async function CatalogoPage() {
  const produtos = await getCatalogo();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: produtos.map((produto, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Product",
        name: produto.nome,
        image: produto.imagens,
        description: produto.descricao || produto.nome,
        offers: {
          "@type": "Offer",
          priceCurrency: "BRL",
          price: produto.preco,
          availability: "https://schema.org/InStock",
        },
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        // JSON.stringify não escapa "<", então escapamos manualmente pra evitar
        // que um nome de produto malicioso feche a tag <script> antes da hora.
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
      />
      <CatalogoClient produtos={produtos} />
    </>
  );
}
