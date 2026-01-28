import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Condaty - Soluciones Inmobiliarias",
  description: "Encuentra tu hogar ideal con Condaty. La mejor plataforma para la gestión y búsqueda de propiedades.",
  keywords: ["inmobiliaria", "propiedades", "venta", "alquiler", "casas", "apartamentos", "condaty"],
  openGraph: {
    title: "Condaty - Soluciones Inmobiliarias",
    description: "La mejor plataforma para la gestión y búsqueda de propiedades.",
    type: "website",
    locale: "es_ES",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
