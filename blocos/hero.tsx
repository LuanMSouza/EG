import { quicksand } from "@/app/layout";
import Image from "next/image";

// Apenas um guia rápido da estrutura de cores e layout
export default function Hero() {
    return (
        <main className="bg-[#FDF2F5] min-h-screen text-[#D94685]">

            <div className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-pink-primary/10">
                <div className="max-w-6xl mx-auto px-6 h-20 flex justify-between items-center">
                    {/* Versão Texto do Logo para a Navbar (Leve) */}
                    <h1 className={`${quicksand.className} text-xl tracking-tighter text-pink-primary`}>
                        Érika Golegã
                    </h1>

                    {/* Links de Navegação */}
                    <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
                        <a href="#" className="hover:text-pink-primary transition-colors">Início</a>
                        <a href="#diferencial" className="hover:text-pink-primary transition-colors">Qualidade</a>
                        <a href="#encomenda" className="hover:text-pink-primary transition-colors">Como pedir</a>
                    </div>

                    {/* CTA Principal */}
                    <a
                        href="https://www.instagram.com/erikagolegapersonalizados/"
                        target="_blank"
                        className="bg-pink-primary text-white px-5 py-2 rounded-full text-xs font-bold shadow-sm hover:scale-105 transition-transform"
                    >
                        Instagram
                    </a>
                </div>
            </div>

            <div className="p-8 ">
            </div>

            {/* Hero Section */}
            <section className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center gap-12">
                <div className="flex-1 flex flex-col items-center">
                    <Image
                        priority
                        src="/newLogo.webp"
                        alt="Logo Érika Golegã"
                        width={320} // Correspondente ao w-80 (80 * 4px)
                        height={160} // Ajuste conforme a altura real da sua imagem
                        className="mb-6 border border-gray-200 rounded-full shadow shadow-white"
                    />
                    <p className="text-lg text-gray-700 mb-8">
                        Detalhes que encantam, camadas que contam histórias.
                        Personalizados de luxo para festas exclusivas na Baixada Santista.
                    </p>
                    <a href="https://wa.me/5513997544393?text=Ol%C3%A1%2C%20vim%20do%20site%20e%20gostaria%20de%20ver%20o%20catalogo%20atualizado!!" className="bg-[#F7A072]  text-white px-8 py-4 rounded-full text-lg font-bold">
                        Ver Catálogo no Whatsapp
                    </a>
                </div>

                <div className="flex-1">
                    {/* Foto do produto premium */}
                    <div className="relative">
                        <Image
                            priority
                            alt="Produto em destaque"
                            height={600}
                            width={600}
                            src="/newProduto-main.webp"
                            className="rounded-[40px] shadow-2xl border-8 border-white" />
                        <div className="absolute -bottom-5 -left-5 bg-white p-4 rounded-2xl shadow-lg">
                            <span className="text-sm font-bold">✨ 100% Feito à Mão</span>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}