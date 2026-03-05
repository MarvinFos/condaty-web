import type { Metadata } from "next";
import LandingPageClient from "./LandingPageClient";

export const metadata: Metadata = {
  title: "Condaty - Software de administración de condominios",
  description: "Condaty - Software de administración de condominios",
  openGraph: {
    title: "Condaty - Software de administración de condominios",
    description: "Condaty - Software de administración de condominios",
    images: [
      {
        url: "/images/condaty-logo-preview.png",
        width: 1200,
        height: 630,
        alt: "Condaty - Software de administración de condominios",
      },
    ],
  },
};

export default function LandingPage() {
  return <LandingPageClient />;
}
