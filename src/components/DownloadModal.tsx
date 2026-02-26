"use client";

import {
  X,
  User,
  Mail,
  ChevronDown,
  Phone,
  MapPin,
  CheckCircle2,
  Download,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
}

import { createPortal } from "react-dom";

export default function DownloadModal({
  isOpen,
  onClose,
  title,
}: DownloadModalProps) {
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
      // 1. Submit form data
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

        // Track Facebook Pixel 'Lead' event for book download modal
        if (typeof window !== "undefined" && (window as any).fbq) {
          (window as any).fbq("track", "Lead");
        }

        // 2. Open PDF in new tab
        window.open(
          "https://drive.google.com/drive/folders/1HhFYl0OO7GcEQ8Qai3WoxtHrWuBOIlYl?usp=sharing",
          "_blank",
        );

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
    "Residente/Copropietario",
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
            className="relative w-full max-w-[900px] my-auto rounded-[32px] border border-[#00e38e]/30 bg-[#191919] shadow-[0_0_50px_rgba(0,227,142,0.1)] flex flex-col md:flex-row overflow-hidden"
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute right-4 top-4 z-50 flex h-8 w-8 items-center justify-center rounded-full bg-black/20 text-white backdrop-blur-md transition-colors hover:bg-black/40 cursor-pointer"
            >
              <X size={18} />
            </button>

            {/* Left Content (Form) */}
            <div className="flex-1 p-8 md:p-10 order-2 md:order-1">
              {isSuccess ? (
                <div className="flex flex-col items-center gap-6 py-8 text-center h-full justify-center">
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
                      ¡Listo! Revisa tu correo
                    </h2>
                    <p className="text-[18px] text-gray-300">
                      Te enviamos el enlace del kit a tu email. Si no lo ves,
                      revisa spam o promociones.
                    </p>
                  </div>
                  <button
                    onClick={handleClose}
                    className="mt-4 w-full rounded-2xl bg-[#00e38e] py-4 text-base font-semibold text-[#191919] transition-all hover:bg-[#00c97e] hover:shadow-[0_0_30px_rgba(0,227,142,0.4)] active:scale-[0.98]"
                  >
                    Cerrar
                  </button>
                </div>
              ) : (
                <div className="flex flex-col gap-6">
                  <div className="text-left">
                    <h2 className="text-[28px] font-semibold leading-tight text-white">
                      {title || "Descarga nuestro recurso gratuito"}
                    </h2>
                    <p className="mt-2 text-[15px] text-gray-400">
                      Completa el formulario para acceder inmediatamente a las 3
                      Plantillas de cobranza.
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

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Cargo */}
                      <div className="flex flex-col gap-2">
                        <label className="ml-2 text-sm font-medium text-gray-300">
                          Cargo <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
                            <ChevronDown size={20} />
                          </div>
                          <select
                            required
                            className="w-full appearance-none rounded-2xl border border-white/10 bg-white/5 py-3 pl-12 pr-4 text-white outline-none transition-all focus:border-[#00e38e]/50 focus:bg-white/10 focus:shadow-[0_0_20px_rgba(0,227,142,0.1)] text-sm"
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
                            className="w-full appearance-none rounded-2xl border border-white/10 bg-white/5 py-3 pl-12 pr-4 text-white outline-none transition-all focus:border-[#00e38e]/50 focus:bg-white/10 focus:shadow-[0_0_20px_rgba(0,227,142,0.1)] text-sm"
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
                              Seleccionar
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
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="mt-4 w-full rounded-2xl bg-[#00e38e] py-4 text-base font-semibold text-[#191919] transition-all hover:bg-[#00c97e] hover:shadow-[0_0_30px_rgba(0,227,142,0.4)] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        "Enviando..."
                      ) : (
                        <>
                          <Download size={20} />
                          Descargar
                        </>
                      )}
                    </button>
                  </form>
                </div>
              )}
            </div>

            {/* Right Image */}
            <div className="relative w-full md:w-[400px] h-[250px] md:h-auto order-1 md:order-2 bg-[#0f2b22]">
              <Image
                src="/images/condominios/ebook-new.png"
                alt="Plantillas de cobranza"
                fill
                className="object-cover"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#191919] via-transparent to-transparent md:bg-gradient-to-r md:from-[#191919] md:via-transparent md:to-[#191919]" />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body,
  );
}
