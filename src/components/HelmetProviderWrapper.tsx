"use client";

import type { ReactNode } from "react";
import { HelmetProvider } from "react-helmet-async";

export default function HelmetProviderWrapper({
  children,
}: {
  children: ReactNode;
}) {
  return <HelmetProvider>{children}</HelmetProvider>;
}
