import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Eliminar cuenta",
  description:
    "Instrucciones para eliminar tu cuenta y datos personales en Condaty.",
  openGraph: {
    title: "Eliminar cuenta",
    description:
      "Instrucciones para eliminar tu cuenta y datos personales en Condaty.",
    url: "https://www.condaty.com/delete-account",
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

export default function DeleteAccountLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
