import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Guardias",
  description:
    "App para guardias con control de visitas, accesos y comunicación en tiempo real.",
  openGraph: {
    title: "Guardias",
    description:
      "App para guardias con control de visitas, accesos y comunicación en tiempo real.",
    url: "https://www.condaty.com/guards",
    images: [
      {
        url: "/images/condominios/app-guard.png",
        width: 1200,
        height: 630,
        alt: "App de guardias Condaty",
      },
    ],
  },
};

export default function GuardsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
