import type { Metadata } from "next";
import "./globals.css";
import { Quicksand } from 'next/font/google'

export const quicksand = Quicksand({
  subsets: ['latin'],
  weight: ['300', '500', '700'] // O '300' é o segredo para ser leve
})

export const metadata: Metadata = {
  title: "Érika Golegã | Papelaria de Luxo e Personalizados na Baixada Santista",
  description: "Transformamos sua festa em um momento inesquecível com papelaria personalizada de luxo. Atendimento exclusivo em Santos, São Vicente e região.",
  keywords: ["papelaria de luxo", "personalizados santos", "festa infantil baixada santista", "lembrancinhas personalizadas", "érika golegã"],
  authors: [{ name: "DVLS" }],
  openGraph: {
    title: "Érika Golegã | Personalizados de Luxo",
    description: "Papelaria artesanal feita à mão com amor para festas exclusivas.",
    url: "https://erikagolega.com.br", // Ajuste para o seu domínio futuro
    siteName: "Érika Golegã Personalizados",
    images: [
      {
        url: "/og-image.png", // Coloque uma foto bonita de um produto aqui na pasta public
        width: 1200,
        height: 630,
        alt: "Personalizados Érika Golegã",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={` h-full antialiased`}
    >
      <body className={`${quicksand.className} min-h-full flex flex-col`}>
        {children}
      </body>
    </html>
  );
}
