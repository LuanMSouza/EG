import { quicksand } from "@/app/layout";

export function Nav() {
    return (
        <nav>
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

            <div className="p-10 ">
            </div>
        </nav>

    )
}