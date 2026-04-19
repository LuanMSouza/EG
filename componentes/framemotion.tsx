"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const imagens = [
    "/slide/1.webp",
    "/slide/2.webp",
    "/slide/3.webp",
    "/slide/4.webp",
    "/slide/5.webp",
    "/slide/6.webp",
    "/slide/7.webp",
    "/slide/8.webp",
];

export function Slideshow() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % imagens.length);
        }, 3000);
        return () => clearInterval(timer);
    }, []);

    return (
        /* Container externo com largura máxima */
        <div className="relative w-full max-w-[600px] mx-auto block">
            
            {/* O SEGREDO: pb-[100%] força a altura a ser igual a largura sempre */}
            <div className="relative w-full pb-[100%] rounded-[30px] md:rounded-[40px] shadow-2xl border-4 md:border-8 border-white overflow-hidden bg-gray-50">

                <AnimatePresence mode="wait">
                    <motion.div
                        key={imagens[index]}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                        className="absolute inset-0 w-full h-full"
                    >
                        <Image
                            src={imagens[index]}
                            alt="Produto em destaque"
                            fill
                            priority
                            sizes="(max-width: 768px) 100vw, 600px"
                            className="object-cover"
                        />
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Badge - Fora da div de clipping (overflow-hidden) */}
            <div className="absolute -bottom-3 -left-3 md:-bottom-5 md:-left-5 bg-white p-3 md:p-4 rounded-xl md:rounded-2xl shadow-lg z-10">
                <span className="text-[10px] md:text-sm font-bold text-gray-800 whitespace-nowrap">✨ 100% Feito à Mão</span>
            </div>
        </div>
    );
}