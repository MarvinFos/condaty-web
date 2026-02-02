import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de privacidad",
  description:
    "Política de privacidad de Condaty para el tratamiento de datos personales.",
  openGraph: {
    title: "Política de privacidad",
    description:
      "Política de privacidad de Condaty para el tratamiento de datos personales.",
    url: "https://www.condaty.com/terminos",
    images: [
      {
        url: "/images/logo_condaty.png",
        width: 1200,
        height: 630,
        alt: "Condaty",
      },
    ],
  },
};

export default function PrivacyPolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
