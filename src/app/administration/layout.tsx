import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Administración de Condominios",
  description:
    "Panel administrativo para gestionar usuarios, ingresos, egresos y documentación del condominio.",
  openGraph: {
    title: "Administración de Condominios",
    description:
      "Panel administrativo para gestionar usuarios, ingresos, egresos y documentación del condominio.",
    url: "https://www.condaty.com/administration",
    images: [
      {
        url: "/images/condominios/laptop-home.png",
        width: 1200,
        height: 630,
        alt: "Panel administrativo de Condaty",
      },
    ],
  },
};

export default function AdministrationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
