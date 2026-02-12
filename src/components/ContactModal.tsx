"use client";

import {
  X,
  User,
  Mail,
  ChevronDown,
  Phone,
  MapPin,
  CheckCircle2,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  variant?: "contact" | "exit";
}

import { createPortal } from "react-dom";

export default function ContactModal({
  isOpen,
  onClose,
  variant = "contact",
}: ContactModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    role: "",
    city: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        console.error("Error submitting form:", data);
        alert(
          "Hubo un error al enviar el formulario. Por favor intenta de nuevo.",
        );
      } else {
        console.log("Formulario enviado con éxito:", data);

        // Mark as submitted to prevent future modals
        localStorage.setItem("hasSubmittedForm", "true");

        // Track Facebook Pixel 'Contact' event
        if (typeof window !== "undefined" && (window as any).fbq) {
          (window as any).fbq("track", "Contact");
        }

        setIsSuccess(true);
        setFormData({
          name: "",
          phone: "",
          email: "",
          role: "",
          city: "",
        });
      }
    } catch (error) {
      console.error("Error de red:", error);
      alert("Error de conexión. Por favor verifica tu internet.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setIsSuccess(false);
    onClose();
  };

  const roles = [
    "Administrador",
    "Miembro de Comité",
    "Junta Directiva",
    "Proveedor",
    "Condómino/Copropietario",
    "Presidente del comité",
    "Inmobiliaria",
    "Conserje/Mayordomo",
    "Desarrolladora Inmobiliaria",
  ];

  const cities = [
    "Beni",
    "Chuquisaca",
    "Cochabamba",
    "La Paz",
    "Oruro",
    "Pando",
    "Potosí",
    "Santa Cruz",
    "Tarija",
  ];

  const content = {
    contact: {
      title: "¡Contáctanos!",
      description:
        "Déjanos tus datos y nos pondremos en contacto contigo lo antes posible.",
    },
    exit: {
      title: "¡Antes de que te vayas!",
      description:
        "Conoce cómo Condaty ayuda a la administración de comunidades, comités y copropietarios.",
    },
  };

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] grid place-items-center overflow-y-auto py-10 px-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-[500px] my-auto rounded-[32px] border border-[#00e38e]/30 bg-[#191919] shadow-[0_0_50px_rgba(0,227,142,0.1)] flex flex-col"
          >
            {/* Header Image */}
            <div className="relative h-40 w-full shrink-0">
              <Image
                src="/images/condaty-edif.png"
                alt="Edificio Condaty"
                fill
                className="object-cover object-center rounded-t-[32px]"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#191919]" />
            </div>

            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute right-4 top-4 z-50 flex h-8 w-8 items-center justify-center rounded-full bg-black/20 text-white backdrop-blur-md transition-colors hover:bg-black/40 cursor-pointer"
            >
              <X size={18} />
            </button>

            {/* Content */}
            <div className="relative z-10 flex flex-col gap-6 px-8 pb-8 pt-2">
              {isSuccess ? (
                <div className="flex flex-col items-center gap-6 py-8 text-center">
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: "spring", duration: 0.8, bounce: 0.5 }}
                    className="rounded-full bg-[#00e38e]/10 p-4"
                  >
                    <CheckCircle2 size={64} className="text-[#00e38e]" />
                  </motion.div>
                  <div className="flex flex-col gap-2">
                    <h2 className="text-[28px] font-semibold text-white">
                      ¡Gracias por contactarnos!
                    </h2>
                    <p className="text-[16px] text-gray-400">
                      Hemos recibido tus datos correctamente. Nuestro equipo se
                      pondrá en contacto contigo a la brevedad posible.
                    </p>
                  </div>
                  <button
                    onClick={handleClose}
                    className="mt-4 w-full rounded-2xl bg-[#00e38e] py-4 text-base font-semibold text-[#191919] transition-all hover:bg-[#00c97e] hover:shadow-[0_0_30px_rgba(0,227,142,0.4)] active:scale-[0.98]"
                  >
                    Entendido
                  </button>
                </div>
              ) : (
                <>
                  <div className="text-center">
                    <h2 className="text-[28px] font-semibold leading-tight text-white">
                      {content[variant].title}
                    </h2>
                    <p className="mt-2 text-[15px] text-gray-400">
                      {content[variant].description}
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    {/* Nombre */}
                    <div className="flex flex-col gap-2">
                      <label className="ml-2 text-sm font-medium text-gray-300">
                        Nombre completo
                      </label>
                      <div className="relative">
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
                          <User size={20} />
                        </div>
                        <input
                          type="text"
                          required
                          placeholder="Ej. Juan Pérez"
                          className="w-full rounded-2xl border border-white/10 bg-white/5 py-3 pl-12 pr-4 text-white placeholder-gray-600 outline-none transition-all focus:border-[#00e38e]/50 focus:bg-white/10 focus:shadow-[0_0_20px_rgba(0,227,142,0.1)]"
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                        />
                      </div>
                    </div>

                    {/* Teléfono */}
                    <div className="flex flex-col gap-2">
                      <label className="ml-2 text-sm font-medium text-gray-300">
                        Teléfono <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
                          <Phone size={20} />
                        </div>
                        <input
                          type="tel"
                          required
                          placeholder="Ej. 77712345"
                          className="w-full rounded-2xl border border-white/10 bg-white/5 py-3 pl-12 pr-4 text-white placeholder-gray-600 outline-none transition-all focus:border-[#00e38e]/50 focus:bg-white/10 focus:shadow-[0_0_20px_rgba(0,227,142,0.1)]"
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div className="flex flex-col gap-2">
                      <label className="ml-2 text-sm font-medium text-gray-300">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
                          <Mail size={20} />
                        </div>
                        <input
                          type="email"
                          required
                          placeholder="ejemplo@correo.com"
                          className="w-full rounded-2xl border border-white/10 bg-white/5 py-3 pl-12 pr-4 text-white placeholder-gray-600 outline-none transition-all focus:border-[#00e38e]/50 focus:bg-white/10 focus:shadow-[0_0_20px_rgba(0,227,142,0.1)]"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                        />
                      </div>
                    </div>

                    {/* Cargo */}
                    <div className="flex flex-col gap-2">
                      <label className="ml-2 text-sm font-medium text-gray-300">
                        Cargo en la comunidad{" "}
                        <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
                          <ChevronDown size={20} />
                        </div>
                        <select
                          required
                          className="w-full appearance-none rounded-2xl border border-white/10 bg-white/5 py-3 pl-12 pr-4 text-white outline-none transition-all focus:border-[#00e38e]/50 focus:bg-white/10 focus:shadow-[0_0_20px_rgba(0,227,142,0.1)]"
                          value={formData.role}
                          onChange={(e) =>
                            setFormData({ ...formData, role: e.target.value })
                          }
                        >
                          <option
                            value=""
                            disabled
                            className="bg-[#191919] text-gray-500"
                          >
                            Seleccionar
                          </option>
                          {roles.map((role) => (
                            <option
                              key={role}
                              value={role}
                              className="bg-[#191919] text-white"
                            >
                              {role}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Ciudad */}
                    <div className="flex flex-col gap-2">
                      <label className="ml-2 text-sm font-medium text-gray-300">
                        Ciudad <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
                          <MapPin size={20} />
                        </div>
                        <select
                          required
                          className="w-full appearance-none rounded-2xl border border-white/10 bg-white/5 py-3 pl-12 pr-4 text-white outline-none transition-all focus:border-[#00e38e]/50 focus:bg-white/10 focus:shadow-[0_0_20px_rgba(0,227,142,0.1)]"
                          value={formData.city}
                          onChange={(e) =>
                            setFormData({ ...formData, city: e.target.value })
                          }
                        >
                          <option
                            value=""
                            disabled
                            className="bg-[#191919] text-gray-500"
                          >
                            Seleccionar departamento
                          </option>
                          {cities.map((city) => (
                            <option
                              key={city}
                              value={city}
                              className="bg-[#191919] text-white"
                            >
                              {city}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="mt-4 w-full rounded-2xl bg-[#00e38e] py-4 text-base font-semibold text-[#191919] transition-all hover:bg-[#00c97e] hover:shadow-[0_0_30px_rgba(0,227,142,0.4)] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? "Enviando..." : "Enviar mensaje"}
                    </button>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body,
  );
}
