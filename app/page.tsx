import Diferencial from "@/blocos/diferencial";
import Footer from "@/blocos/footer";
import Hero from "@/blocos/hero";
import Instrucoes from "@/blocos/instrucoes";
import Vitrine from "@/blocos/vitrine";

export default function Home() {
  return (
    <>
      <Hero />
      <main>
        <Vitrine />
        <Diferencial />
        <Instrucoes />
        <Footer />
      </main>
    </>
  );
}
