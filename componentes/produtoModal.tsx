'use client'

import { useEffect, useState } from "react";
import Image from "next/image";
import type { ProdutoCatalogo } from "@/app/catalogo/actions";

const WHATSAPP_NUMERO = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;

function formatarPreco(valor: number) {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(valor);
}

function IconeWhatsapp() {
    return (
        <svg viewBox="0 0 32 32" width="20" height="20" fill="currentColor" aria-hidden="true">
            <path d="M16 .3C7.4.3.3 7.4.3 16c0 2.8.7 5.5 2.1 7.9L0 32l8.3-2.2c2.3 1.3 4.9 1.9 7.6 1.9 8.6 0 15.7-7.1 15.7-15.7C31.7 7.4 24.6.3 16 .3zm0 28.5c-2.4 0-4.7-.6-6.8-1.9l-.5-.3-4.9 1.3 1.3-4.8-.3-.5C3.2 20.6 2.6 18.3 2.6 16 2.6 8.7 8.7 2.6 16 2.6S29.4 8.7 29.4 16 23.3 29.4 16 29.4zm7.9-9.9c-.4-.2-2.6-1.3-3-1.4-.4-.1-.7-.2-1 .2s-1.1 1.4-1.4 1.7c-.3.3-.5.3-.9.1-.4-.2-1.7-.6-3.2-2-.1 0-2.2-2-2.3-2.2-.1-.2 0-.4.1-.5.1-.1.3-.3.4-.4.1-.1.2-.3.3-.4.1-.2 0-.4 0-.5 0-.1-1-2.4-1.4-3.3-.4-.9-.7-.8-1-.8h-.9c-.3 0-.7.1-1.1.5-.4.4-1.4 1.3-1.4 3.3s1.4 3.8 1.6 4.1c.2.3 2.8 4.3 6.8 6 .9.4 1.7.6 2.3.8.9.3 1.8.2 2.4.1.7-.1 2.2-.9 2.5-1.8.3-.9.3-1.6.2-1.8-.1-.1-.4-.2-.8-.4z" />
        </svg>
    )
}

type ProdutoModalProps = {
    produto: ProdutoCatalogo;
    fechar: () => void;
}

export default function ProdutoModal({ produto, fechar }: ProdutoModalProps) {
    const [fotoAtiva, setFotoAtiva] = useState(0);

    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = '';
        };
    }, []);

    const mensagem = `Olá! Vim do site e tenho interesse no produto: ${produto.nome}`;
    const linkWhatsapp = `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(mensagem)}`;

    return (
        <div
            className="fixed inset-0 z-50 bg-black/60 flex items-end sm:items-center justify-center sm:p-4"
            onClick={fechar}
        >
            <div
                className="bg-white rounded-t-3xl sm:rounded-3xl max-w-3xl w-full max-h-[92vh] overflow-y-auto relative"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={fechar}
                    className="absolute top-4 right-4 z-10 bg-white/90 rounded-full w-9 h-9 flex items-center justify-center text-gray-600 shadow hover:text-pink-primary cursor-pointer"
                    aria-label="Fechar"
                >
                    ✕
                </button>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-5 sm:p-6">
                    {/* Galeria */}
                    <div>
                        <div className="relative rounded-2xl overflow-hidden bg-gray-50 aspect-square">
                            <Image
                                src={produto.imagens[fotoAtiva]}
                                alt={produto.nome}
                                fill
                                sizes="(max-width: 768px) 90vw, 480px"
                                className="object-cover"
                            />
                        </div>

                        {produto.imagens.length > 1 && (
                            <div className="flex gap-2 mt-3 overflow-x-auto">
                                {produto.imagens.map((img, i) => (
                                    <button
                                        key={img}
                                        onClick={() => setFotoAtiva(i)}
                                        className={`relative shrink-0 w-16 h-16 rounded-xl overflow-hidden border-2 cursor-pointer ${i === fotoAtiva ? 'border-pink-primary' : 'border-transparent'
                                            }`}
                                    >
                                        <Image src={img} alt="" fill sizes="64px" className="object-cover" />
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Informações */}
                    <div className="flex flex-col">
                        {produto.obs && (
                            <span className="self-start bg-pink-primary text-white text-xs font-semibold px-3 py-1 rounded-full mb-3">
                                {produto.obs}
                            </span>
                        )}

                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">{produto.nome}</h2>
                        <p className="text-lg text-pink-primary font-bold mt-1">
                            {formatarPreco(Number(produto.preco))} <span className="text-gray-400 font-normal text-sm">/ und</span>
                        </p>

                        {produto.descricao && (
                            <p className="text-gray-600 text-sm sm:text-base mt-4 whitespace-pre-line">{produto.descricao}</p>
                        )}

                        <a
                            href={linkWhatsapp}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-6 md:mt-auto w-full inline-flex items-center justify-center gap-2 bg-orange-pastel text-white px-6 py-3.5 rounded-full font-bold hover:brightness-105 active:scale-95 transition-all"
                        >
                            <IconeWhatsapp />
                            Chamar no WhatsApp
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
