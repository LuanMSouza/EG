import { quicksand } from "@/app/layout";

export default function Diferencial() {
    return (
        <section id="diferencial" className="max-w-6xl mx-auto px-6 py-24">
            {/* Título com a fonte Quicksand/Poppins que você configurou */}
            <div className={`${quicksand.className} text-center mb-16`}>
                <h2 className="text-3xl md:text-4xl font-medium text-pink-primary mb-4">
                    O toque especial que sua festa merece
                </h2>
                <div className="w-24 h-1 bg-yellow-pastel mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {/* Diferencial 1 */}
                <div className="flex flex-col items-center text-center p-8 rounded-3xl bg-white/50 border border-white shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-16 h-16 bg-pink-primary/10 rounded-2xl flex items-center justify-center mb-6">
                        <span className="text-3xl">✨</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Papelaria de Luxo</h3>
                    <p className="text-gray-600 leading-relaxed">
                        Trabalhamos com papel fotográfico matte de alta gramatura (230g), garantindo cores vibrantes e estruturas firmes que não deformam.
                    </p>
                </div>

                {/* Diferencial 2 */}
                <div className="flex flex-col items-center text-center p-8 rounded-3xl bg-white/50 border border-white shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-16 h-16 bg-blue-pastel/10 rounded-2xl flex items-center justify-center mb-6">
                        <span className="text-3xl">🎨</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Efeito 3D e Camadas</h3>
                    <p className="text-gray-600 leading-relaxed">
                        Cada peça possui apliques em relevo, laços de cetim e acabamentos premium que trazem profundidade e vida para a decoração da mesa.
                    </p>
                </div>

                {/* Diferencial 3 */}
                <div className="flex flex-col items-center text-center p-8 rounded-3xl bg-white/50 border border-white shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-16 h-16 bg-purple-pastel/10 rounded-2xl flex items-center justify-center mb-6">
                        <span className="text-3xl">💖</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Feito com Afeto</h3>
                    <p className="text-gray-600 leading-relaxed">
                        Produção artesanal cuidada em cada detalhe. O capricho de quem entende que cada festa é um momento único para sua família.
                    </p>
                </div>
            </div>
        </section>
    )
}