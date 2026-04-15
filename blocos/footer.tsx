import { quicksand } from "@/app/layout";

export default function Footer() {
    return (
        <footer className="bg-white/50 border-t border-pink-primary/10 mt-20">
            <div className="max-w-6xl mx-auto px-6 py-12">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">

                    {/* Lado Esquerdo: Marca e Localização */}
                    <div className="text-center md:text-left">
                        <h3 className={`${quicksand.className} text-xl text-pink-primary font-medium mb-2`}>
                            Érika Golegã
                        </h3>
                        <p className="text-sm text-gray-500 max-w-xs">
                            Papelaria personalizada de luxo feita à mão com amor e cuidado em cada camada.
                        </p>
                        <p className="text-xs text-gray-400 mt-4 flex items-center justify-center md:justify-start gap-1">
                            📍 Atendimento na Baixada Santista (Santos, SV e região)
                        </p>
                    </div>

                    {/* Lado Direito: Links e Social */}
                    <div className="flex flex-col items-center md:items-end gap-4">
                        <div className="flex gap-6 text-pink-primary font-medium">
                            <a href="#" className="hover:text-blue-pastel transition-colors">Início</a>
                            <a href="https://wa.me/5513997544393?text=Ol%C3%A1%2C%20vim%20do%20site%20e%20gostaria%20de%20ver%20o%20catalogo%20atualizado!!" className="hover:text-blue-pastel transition-colors">Catálogo</a>
                            <a href="https://www.instagram.com/erikagolegapersonalizados/" target="_blank" className="hover:text-blue-pastel transition-colors">Instagram</a>
                        </div>

                        {/* Selo de Feito à Mão */}
                        <div className="px-4 py-2 bg-yellow-pastel/20 rounded-full border border-yellow-pastel/50">
                            <span className="text-[10px] uppercase tracking-widest text-orange-800 font-bold">
                                ✨ Produção 100% Artesanal
                            </span>
                        </div>
                    </div>
                </div>

                {/* Linha Final de Copyright */}
                <div className="border-t border-gray-100 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-gray-400 uppercase tracking-widest font-medium">
                    <p>© {new Date().getFullYear()} Érika Golegã Personalizados - Todos os direitos reservados</p>
                    <a href="https://dvls.com.br" className="flex cursor-pointer items-center gap-1">
                        Desenvolvido com 💖 por <span className="text-pink-primary/60">DVLS</span>
                    </a>
                </div>
            </div>
        </footer>
    )
}