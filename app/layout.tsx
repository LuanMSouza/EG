import type { Metadata } from "next";
import "./globals.css";
import { Quicksand } from 'next/font/google'

export const quicksand = Quicksand({
  subsets: ['latin'],
  weight: ['300', '500', '700'] // O '300' é o segredo para ser leve
})

export const metadata: Metadata = {
  metadataBase: new URL('https://egpersonalizados.com.br'), // Importante para as imagens funcionarem
  title: {
    default: "Érika Golegã | Papelaria de Luxo e Personalizados em Santos",
    template: "%s | Érika Golegã" // Caso você crie páginas internas depois
  },
  description: "Especialista em papelaria personalizada de luxo e mimos exclusivos em Santos, São Vicente e Baixada Santista. Transforme sua festa em um evento inesquecível.",
  keywords: ["papelaria de luxo santos", "personalizados baixada santista", "lembrancinhas de luxo", "festa infantil santos", "brindes personalizados", "kit festa luxo"],
  authors: [{ name: "DVLS", url: "https://dvls.com.br" }],
  creator: "Luan - DVLS",

  alternates: {
    canonical: '/',
  },

  openGraph: {
    title: "Érika Golegã | Personalizados de Luxo na Baixada Santista",
    description: "Papelaria artesanal feita à mão para festas exclusivas e momentos inesquecíveis.",
    url: "https://egpersonalizados.com.br",
    siteName: "Érika Golegã Personalizados",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Amostra de Papelaria de Luxo Érika Golegã",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Érika Golegã | Personalizados de Luxo",
    description: "Papelaria artesanal na Baixada Santista.",
    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
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
