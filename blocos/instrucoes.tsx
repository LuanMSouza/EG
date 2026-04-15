export default function Instrucoes() {
    return (
        <section id="encomenda" className="max-w-5xl mx-auto px-6 py-24 bg-white/30 rounded-[60px] my-12">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-medium text-pink-primary mb-4">
                    Como encomendar seu sonho
                </h2>
                <p className="text-gray-500">Passo a passo para garantir seus personalizados</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
                {/* Passo 1 */}
                <div className="flex flex-col items-center text-center group">
                    <div className="w-12 h-12 rounded-full bg-pink-primary text-white flex items-center justify-center font-bold mb-4 shadow-lg group-hover:scale-110 transition-transform">
                        1
                    </div>
                    <h4 className="font-semibold mb-2">Escolha o Tema</h4>
                    <p className="text-sm text-gray-600">Nos conte o tema da festa e quais peças você mais gostou.</p>
                </div>

                {/* Passo 2 */}
                <div className="flex flex-col items-center text-center group">
                    <div className="w-12 h-12 rounded-full bg-blue-pastel text-white flex items-center justify-center font-bold mb-4 shadow-lg group-hover:scale-110 transition-transform">
                        2
                    </div>
                    <h4 className="font-semibold mb-2">Orçamento</h4>
                    <p className="text-sm text-gray-600">Definimos as quantidades e enviamos o valor detalhado.</p>
                </div>

                {/* Passo 3 */}
                <div className="flex flex-col items-center text-center group">
                    <div className="w-12 h-12 rounded-full bg-purple-pastel text-white flex items-center justify-center font-bold mb-4 shadow-lg group-hover:scale-110 transition-transform">
                        3
                    </div>
                    <h4 className="font-semibold mb-2">Produção</h4>
                    <p className="text-sm text-gray-600">Após o sinal, iniciamos a criação manual com todo capricho.</p>
                </div>

                {/* Passo 4 */}
                <div className="flex flex-col items-center text-center group">
                    <div className="w-12 h-12 rounded-full bg-orange-pastel text-white flex items-center justify-center font-bold mb-4 shadow-lg group-hover:scale-110 transition-transform">
                        4
                    </div>
                    <h4 className="font-semibold mb-2">Entrega</h4>
                    <p className="text-sm text-gray-600">Combinamos a retirada ou entrega na região da Baixada.</p>
                </div>
            </div>

            {/* CTA Final abaixo dos passos */}
            <div className="mt-20 text-center">
                <div className="inline-block p-1 rounded-full bg-gradient-to-r from-pink-primary to-orange-pastel">
                    <a
                        href="https://wa.me/5513997544393?text=Ol%C3%A1%2C%20vim%20do%20site%20e%20gostaria%20de%20ser%20atendido%20por%20aqui!!"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cursor-pointer px-10 py-4 bg-white rounded-full text-pink-primary font-bold hover:bg-transparent hover:text-white transition-all inline-block"
                    >
                        Iniciar conversa no WhatsApp
                    </a>
                </div>
                <p className="mt-4 text-xs text-gray-400">
                    * Recomendamos antecedência mínima de 15 dias para encomendas.
                </p>
            </div>
        </section>
    )
}