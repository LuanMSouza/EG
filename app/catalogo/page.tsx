'use client'

import { useEffect, useState } from "react";
import { getImagens, getProdutos, getTemas } from "./actions";

type Imagem = {
  id: number;
  produto: string;
  tema: string;
  img: string;
  preco: number;
}

type Tema = {
  id: number;
  nome: string;
}

type Produto = {
  id: number;
  nome: string;
}

export default function Catalogo() {

  const [temaSelecionado, setTemaSelecionado] = useState('');
  const [produtoSelecionado, setProdutoSelecionado] = useState('');
  const [busca, setBusca] = useState('');

  const [imagens, setImagens] = useState<Imagem[]>([]);
  const [temas, setTemas] = useState<Tema[]>([]);
  const [produtos, setProdutos] = useState<Produto[]>([]);

  const pegarDados = async () => {
    const resImagens = await getImagens()
    const resTemas = await getTemas();
    const resProdutos = await getProdutos();

    setImagens(resImagens);
    setTemas(resTemas);
    setProdutos(resProdutos);
  }

  useEffect(() => {
    pegarDados();
  }, [])

  const produtosFiltrados = imagens.filter((i) => {

    const matchTema = temaSelecionado ? i.tema === temaSelecionado : true;
    const matchProd = produtoSelecionado ? i.produto === produtoSelecionado : true;
    const matchBusca = busca ? i.produto.toLowerCase().includes(busca.toLowerCase()) : true;

    return matchTema && matchProd && matchBusca;
  });

  return (
    <div>
      <h2 className="text-4xl text-center mt-5">Catálogo</h2>

      {/* filtros */}
      <div className="grid grid-cols-1 w-[70%] sm:w-[300px] mx-auto mt-5 gap-5">
        <label>Produto
          <select
            className="w-full px-3 py-1 rounded-2xl border border-gray-400"
            name="produto"
            value={produtoSelecionado}
            onChange={(e) => setProdutoSelecionado(e.target.value)}
            id="tema">
            <option value="">Todos</option>

            {produtos.map((produto) => (
              <option key={produto.id} value={produto.nome}>{produto.nome}</option>
            ))}

          </select>

        </label>

        <label>Tema
          <select
            className="w-full px-3 py-1 rounded-2xl border border-gray-400"
            name="tema"
            value={temaSelecionado}
            onChange={(e) => setTemaSelecionado(e.target.value)}
            id="tema">
            <option value="">Todos</option>

            {temas.map((tema) => (
              <option key={tema.id} value={tema.nome}>{tema.nome}</option>
            ))}

          </select>
        </label>

        <label>Ou se preferir...

          <input
            className="w-full px-3 py-1 rounded-2xl border border-gray-400"
            type="text"
            placeholder="Buscar produto..."
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
          />
        </label>

      </div>

      {/* header do catalogo */}
      <p className=" text-center mt-5">
        <span className="font-bold">{produtosFiltrados.length}</span> produtos encontrados
      </p>

      {/* Catalogo */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 w-[90%] mx-auto mx-5">

        {produtosFiltrados.map((produto) => (

          <div key={produto.id} className="border border-gray-400 rounded-lg p-2 w-[90%] mx-auto mt-5">
            <img src={produto.img} alt={produto.produto} className="w-full h-auto rounded-lg" />
            <p className="text-center font-bold">{produto.produto}</p>
            <p className="text-center text-gray-600">{produto.tema}</p>
            <p className="text-center text-gray-600">Und / R$ {Number(produto.preco).toFixed(2)}</p>
          </div>

        ))}

      </div>

    </div>
  )
}