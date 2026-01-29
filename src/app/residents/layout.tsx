import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Residentes",
  description:
    "App para residentes con pagos, accesos, comunicación y comodidad en el condominio.",
  openGraph: {
    title: "Residentes",
    description:
      "App para residentes con pagos, accesos, comunicación y comodidad en el condominio.",
    url: "https://www.condaty.com/residents",
    images: [
      {
        url: "/images/condominios/family.png",
        width: 1200,
        height: 630,
        alt: "Experiencia de residentes en Condaty",
      },
    ],
  },
};

export default function ResidentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
