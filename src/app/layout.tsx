import type { Metadata } from "next";
import "./globals.css";
import { ModalProvider } from "@/context/ModalContext";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.condaty.com"),
  title: {
    default: "Condaty | Software de gestión de condominios",
    template: "%s | Condaty",
  },
  description:
    "Plataforma para administración de condominios: pagos, accesos, comunicación y reportes en tiempo real.",
  keywords: [
    "gestión de condominios",
    "administración de condominios",
    "control de accesos",
    "comunicación residencial",
    "software inmobiliario",
    "condaty",
  ],
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Condaty | Software de gestión de condominios",
    description:
      "Plataforma para administración de condominios con pagos, accesos y reportes en tiempo real.",
    type: "website",
    locale: "es_ES",
    url: "https://www.condaty.com",
    images: [
      {
        url: "/images/condominios/condominio-ilustracion2.jpg",
        width: 1200,
        height: 630,
        alt: "Condaty - Gestión de condominios",
      },
    ],
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
        <ModalProvider>{children}</ModalProvider>
      </body>
    </html>
  );
}
