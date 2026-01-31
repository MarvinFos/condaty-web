"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import dynamic from "next/dynamic";

const ContactModal = dynamic(() => import("../components/ContactModal"), {
  ssr: false,
});
const DownloadModal = dynamic(() => import("../components/DownloadModal"), {
  ssr: false,
});

interface ModalContextType {
  openContactModal: (variant?: "contact" | "exit") => void;
  openDownloadModal: (title?: string) => void;
  closeModals: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function ModalProvider({ children }: { children: ReactNode }) {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isDownloadOpen, setIsDownloadOpen] = useState(false);
  const [contactVariant, setContactVariant] = useState<"contact" | "exit">(
    "contact",
  );
  const [downloadTitle, setDownloadTitle] = useState<string | undefined>(
    undefined,
  );

  const openContactModal = (variant: "contact" | "exit" = "contact") => {
    setIsDownloadOpen(false);
    setContactVariant(variant);
    setIsContactOpen(true);
  };

  const openDownloadModal = (title?: string) => {
    setIsContactOpen(false);
    setDownloadTitle(title);
    setIsDownloadOpen(true);
  };

  const closeModals = () => {
    setIsContactOpen(false);
    setIsDownloadOpen(false);
  };

  return (
    <ModalContext.Provider
      value={{ openContactModal, openDownloadModal, closeModals }}
    >
      {children}
      <ContactModal
        isOpen={isContactOpen}
        onClose={closeModals}
        variant={contactVariant}
      />
      <DownloadModal
        isOpen={isDownloadOpen}
        onClose={closeModals}
        title={downloadTitle}
      />
    </ModalContext.Provider>
  );
}

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
};
