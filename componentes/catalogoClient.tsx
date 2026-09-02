'use client'

import { useMemo, useState } from "react";
import Image from "next/image";
import type { ProdutoCatalogo } from "@/app/catalogo/actions";
import ProdutoModal from "@/componentes/produtoModal";
import Footer from "@/blocos/footer";

function formatarPreco(valor: number) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(valor);
}

type CatalogoClientProps = {
  produtos: ProdutoCatalogo[];
}

export default function CatalogoClient({ produtos }: CatalogoClientProps) {

  const [nomeSelecionado, setNomeSelecionado] = useState('');
  const [busca, setBusca] = useState('');
  const [produtoAberto, setProdutoAberto] = useState<ProdutoCatalogo | null>(null);

  const nomesUnicos = useMemo(() => [...new Set(produtos.map((p) => p.nome))], [produtos]);

  const produtosFiltrados = produtos.filter((p) => {
    const matchNome = nomeSelecionado ? p.nome === nomeSelecionado : true;
    const matchBusca = busca ? p.nome.toLowerCase().includes(busca.toLowerCase()) : true;
    return matchNome && matchBusca;
  });

  return (
    <div>
      {/* Cabeçalho */}
      <section className="max-w-6xl mx-auto px-6 pt-16 pb-4">
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-medium text-pink-primary mb-4">Nosso Catálogo</h1>
          <div className="w-24 h-1 bg-yellow-pastel mx-auto rounded-full"></div>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto">
            Cada peça é feita à mão, sob encomenda. Escolha o modelo que mais combina com a sua festa.
          </p>
        </div>
      </section>

      {/* Filtros */}
      <section className="max-w-2xl mx-auto px-6 mt-8">
        <div className="bg-white/60 rounded-3xl border border-white shadow-sm p-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <label className="text-sm text-gray-600 font-medium">
            Produto
            <select
              className="w-full mt-1 px-4 py-2 rounded-full border border-pink-primary/20 bg-white focus:outline-none focus:ring-2 focus:ring-pink-primary/30"
              name="produto"
              value={nomeSelecionado}
              onChange={(e) => setNomeSelecionado(e.target.value)}>
              <option value="">Todos</option>

              {nomesUnicos.map((nome) => (
                <option key={nome} value={nome}>{nome}</option>
              ))}

            </select>
          </label>

          <label className="text-sm text-gray-600 font-medium">
            Ou se preferir...
            <input
              className="w-full mt-1 px-4 py-2 rounded-full border border-pink-primary/20 bg-white focus:outline-none focus:ring-2 focus:ring-pink-primary/30"
              type="text"
              placeholder="Buscar produto..."
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
            />
          </label>
        </div>

        <p className="text-center text-sm text-gray-500 mt-4">
          <span className="font-bold text-pink-primary">{produtosFiltrados.length}</span> produtos encontrados
        </p>
      </section>

      {/* Catálogo */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        {produtosFiltrados.length === 0 ? (
          <p className="text-center text-gray-400 py-20">Nenhum produto encontrado com esse filtro.</p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {produtosFiltrados.map((produto) => (
              <div
                key={produto.id}
                onClick={() => setProdutoAberto(produto)}
                className="group relative cursor-pointer"
              >
                {produto.obs && (
                  <span className="absolute -top-3 -left-3 z-10 bg-pink-primary px-3 py-1.5 text-center text-xs font-semibold text-white rounded-full shadow shadow-black/20">
                    {produto.obs}
                  </span>
                )}

                <div className="overflow-hidden rounded-[32px] bg-white p-2 shadow-sm transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1">
                  <div className="relative w-full aspect-square rounded-[28px] overflow-hidden bg-gray-50">
                    <Image
                      src={produto.imagens[0]}
                      alt={produto.nome}
                      fill
                      sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 22vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 flex items-end justify-center bg-black/0 pb-3 opacity-0 transition-all duration-300 group-hover:bg-black/10 group-hover:opacity-100">
                      <span className="rounded-full bg-white/90 px-4 py-1.5 text-xs font-semibold text-pink-primary shadow-sm">
                        Ver detalhes
                      </span>
                    </div>
                  </div>
                  <div className="p-3 text-center">
                    <h2 className="font-semibold text-gray-800 truncate text-base">{produto.nome}</h2>
                    <p className="text-pink-primary font-bold text-sm mt-1">
                      {formatarPreco(Number(produto.preco))} <span className="text-gray-400 font-normal">/ und</span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      <Footer />

      {produtoAberto && (
        <ProdutoModal produto={produtoAberto} fechar={() => setProdutoAberto(null)} />
      )}
    </div>
  )
}
