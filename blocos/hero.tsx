import { quicksand } from "@/app/layout";
import { Slideshow } from "@/componentes/framemotion";
import Image from "next/image";

// Apenas um guia rápido da estrutura de cores e layout
export default function Hero() {
    return (
        <main className="bg-[#FDF2F5] min-h-screen text-[#D94685]">
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


                <div className="flex-1 w-full flex justify-center items-center">
                    <div className="w-full max-w-[600px]">
                        <Slideshow />
                    </div>
                </div>
            </section>
        </main>
    )
}