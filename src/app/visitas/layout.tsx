import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Registro de Visitas",
  description: "Registro de visitas para acceso al condominio",
  openGraph: {
    title: "Registro de Visitas",
    description: "Registro de visitas para acceso al condominio",
    url: "https://www.condaty.com/visitas",
  },
};

export default function RegistroVisitasLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
