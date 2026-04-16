import { quicksand } from "@/app/layout";
import Image from "next/image";

export default function Vitrine() {
    return (
        <section className="max-w-6xl mx-auto px-6 py-20">
            <h2 className={`${quicksand.className} text-3xl text-center mb-12 font-medium`}>
                Nossos Favoritos
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Card 1 */}
                <div className="group cursor-pointer">
                    <div className="overflow-hidden rounded-[32px] bg-white p-2 shadow-sm transition-all group-hover:shadow-xl">
                        <Image
                            height={400}
                            width={400}
                            alt="Caixa Piramide personalizada para festas, tema - Bob Esponja"
                            src="/produtos/piramide.webp" className="rounded-[28px] w-full h-80 object-cover" />
                        <div className="p-4 text-center">
                            <h3 className="font-semibold text-lg">Caixas Pirâmide</h3>
                        </div>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="group cursor-pointer">
                    <div className="overflow-hidden rounded-[32px] bg-white p-2 shadow-sm transition-all group-hover:shadow-xl">
                        <Image
                            alt="Caixa Milk personalizada para festas, tema - Bob Esponja"
                            height={400}
                            width={400}
                            src="/produtos/milk2.webp" className="rounded-[28px] w-full h-80 object-cover" />

                        <div className="p-4 text-center">
                            <h3 className="font-semibold text-lg">Caixa Milk tradicional</h3>
                        </div>
                    </div>
                </div>

                {/* Card 3 */}
                <div className="group cursor-pointer">
                    <div className="overflow-hidden rounded-[32px] bg-white p-2 shadow-sm transition-all group-hover:shadow-xl">
                        <Image
                            alt="Caixa bala vertical personalizada para festas, tema - Bob Esponja"
                            height={400}
                            width={400}
                            src="/produtos/bala.webp" className="rounded-[28px] w-full h-80 object-cover" />
                        <div className="p-4 text-center">
                            <h3 className="font-semibold text-lg">Caixa Bala Vertical</h3>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}