"use client";

import { X, User, Mail, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica de envío
    console.log("Formulario enviado:", formData);
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

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative w-full max-w-[500px] overflow-hidden rounded-[32px] border border-[#00e38e]/30 bg-[#191919] shadow-[0_0_50px_rgba(0,227,142,0.1)]"
          >
            {/* Header Image */}
            <div className="relative h-40 w-full">
              <Image
                src="/images/condaty-edif.png"
                alt="Edificio Condaty"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#191919]" />
            </div>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute right-4 top-4 z-50 flex h-8 w-8 items-center justify-center rounded-full bg-black/20 text-white backdrop-blur-md transition-colors hover:bg-black/40 cursor-pointer"
            >
              <X size={18} />
            </button>

            {/* Content */}
            <div className="relative z-10 flex flex-col gap-6 px-8 pb-8 pt-2">
              <div className="text-center">
                <h2 className="text-[28px] font-semibold leading-tight text-white">
                  ¡Antes de que te vayas!
                </h2>
                <p className="mt-2 text-[15px] text-gray-400">
                  Conoce cómo Condaty ayuda a la administración de comunidades,
                  comités y copropietarios.
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

                <button
                  type="submit"
                  className="mt-4 w-full rounded-2xl bg-[#00e38e] py-4 text-base font-semibold text-[#191919] transition-all hover:bg-[#00c97e] hover:shadow-[0_0_30px_rgba(0,227,142,0.4)] active:scale-[0.98]"
                >
                  Enviar mensaje
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
