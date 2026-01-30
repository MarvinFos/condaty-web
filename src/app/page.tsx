import type { Metadata } from "next";
import LandingPageClient from "./LandingPageClient";

export const metadata: Metadata = {
  title: "Condaty | Recursos Gratuitos para Condominios",
  description:
    "Explora y descarga recursos gratuitos para la gestión de tu comunidad y condominios.",
  openGraph: {
    title: "Condaty | Recursos Gratuitos para Condominios",
    description:
      "Explora y descarga recursos gratuitos para la gestión de tu comunidad y condominios.",
  },
};

export default function LandingPage() {
  return <LandingPageClient />;
}
