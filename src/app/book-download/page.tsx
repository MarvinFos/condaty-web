"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  User,
  Mail,
  ChevronDown,
  Phone,
  MapPin,
  CheckCircle2,
  Download,
} from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function BookDownloadPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    role: "",
    city: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

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
        window.open(
          "https://drive.google.com/file/d/1kL3ua0hR53nINtdSgYVvv7IAlmvZJas2/view",
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

  return (
    <div className="min-h-screen bg-[#191919] text-white selection:bg-[#00e38e] selection:text-[#191919]">
      <Navbar />
      {/* Header Image Section */}
      <div className="relative h-[250px] w-full sm:h-[350px]">
        <Image
          src="/images/condaty-edif.png"
          alt="Condaty Office"
          fill
          className="object-cover object-[center_90%]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#191919]/30 via-[#191919]/60 to-[#191919]" />
        <div className="absolute bottom-0 left-0 w-full p-6 sm:p-10 lg:px-20 xl:px-36">
          <div className="max-w-4xl mx-auto">
            <span className="inline-block rounded-full bg-[#00e38e]/20 px-4 py-1.5 text-sm font-semibold text-[#00e38e] mb-4 backdrop-blur-md border border-[#00e38e]/20">
              Material Exclusivo
            </span>
            <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl leading-tight">
              Domina la gestión financiera de tu condominio
            </h1>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-6 py-10 sm:px-10 lg:px-20 xl:px-36">
        <div className="mx-auto max-w-6xl">
          {/* SECTION 1: Intro Text + Book Image */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24">
            {/* Left: Intro Text */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-white mb-4">
                Una guía esencial para administradores
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                Este eBook es una herramienta práctica diseñada para
                administradores y directorios que buscan soluciones reales a la
                morosidad. A través de la experiencia de Moisés Uzieda Rocha,
                aprenderás a implementar procesos claros de transparencia y
                comunicación para asegurar la liquidez de tu condominio. No se
                trata solo de cobrar, sino de gestionar con eficiencia para
                preservar la plusvalía de la propiedad y la paz social.
              </p>
            </div>

            {/* Right: Book Image with Fusion Effect */}
            <div className="relative w-full flex justify-center lg:justify-end">
              <div className="relative w-[300px] h-[400px] sm:w-[400px] sm:h-[500px]">
                {/* Glow behind */}
                <div className="absolute inset-0 bg-[#00e38e]/20 blur-3xl rounded-full opacity-40" />

                {/* Image */}
                <Image
                  src="/images/condominios/book.png"
                  alt="Libro Condaty"
                  fill
                  className="object-contain drop-shadow-2xl relative z-10"
                />

                {/* Gradient Mask for Fusion/Transparency at edges */}
                <div className="absolute inset-0 z-20 bg-[radial-gradient(circle_at_center,transparent_40%,#191919_100%)] pointer-events-none" />
              </div>
            </div>
          </div>

          {/* SECTION 2: Form + "What you'll find" */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Left: Form */}
            <div className="relative">
              <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
                {isSuccess ? (
                  <div className="flex flex-col items-center gap-6 py-8 text-center h-full justify-center min-h-[400px]">
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{
                        type: "spring",
                        duration: 0.8,
                        bounce: 0.5,
                      }}
                      className="rounded-full bg-[#00e38e]/10 p-6"
                    >
                      <CheckCircle2 size={64} className="text-[#00e38e]" />
                    </motion.div>
                    <div className="flex flex-col gap-2">
                      <h2 className="text-[28px] font-semibold text-white">
                        ¡Gracias por descargar!
                      </h2>
                      <p className="text-[16px] text-gray-400">
                        El recurso se ha abierto en una nueva pestaña.
                      </p>
                    </div>
                    <button
                      onClick={() => setIsSuccess(false)}
                      className="mt-4 w-full rounded-2xl bg-[#00e38e] py-4 text-base font-semibold text-[#191919] transition-all hover:bg-[#00c97e] hover:shadow-[0_0_30px_rgba(0,227,142,0.4)] active:scale-[0.98]"
                    >
                      Descargar otro recurso
                    </button>
                  </div>
                ) : (
                  <div className="flex flex-col gap-6">
                    <div className="text-left">
                      <h2 className="text-[24px] font-semibold leading-tight text-white">
                        Descarga el eBook gratis
                      </h2>
                      <p className="mt-2 text-[15px] text-gray-400">
                        Completa el formulario para acceder inmediatamente al
                        contenido.
                      </p>
                    </div>

                    <form
                      onSubmit={handleSubmit}
                      className="flex flex-col gap-4"
                    >
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
                              setFormData({
                                ...formData,
                                phone: e.target.value,
                              })
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
                              setFormData({
                                ...formData,
                                email: e.target.value,
                              })
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
                                setFormData({
                                  ...formData,
                                  role: e.target.value,
                                })
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
                                setFormData({
                                  ...formData,
                                  city: e.target.value,
                                })
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
            </div>

            {/* Right: What you will find */}
            <div className="space-y-8 flex flex-col justify-center">
              <h2 className="text-3xl font-bold text-[#00e38e] mb-6">
                ¿Qué encontrarás en este libro?
              </h2>
              <div className="space-y-6">
                {[
                  {
                    title: "Estrategias de Transparencia",
                    text: "Cómo los informes económicos y la visibilidad de la gestión reducen las excusas del moroso.",
                  },
                  {
                    title: "Gestión de Mantenimiento",
                    text: "La relación directa entre el estado de las áreas comunes y el cumplimiento del pago de expensas.",
                  },
                  {
                    title: "Criterios de Incentivos",
                    text: "Análisis de por qué los descuentos por pronto pago pueden ser riesgosos y qué alternativas creativas existen.",
                  },
                  {
                    title: "Comunicación Asertiva",
                    text: "Técnicas para mantener una relación cordial y respetuosa con los residentes mientras se exige el cumplimiento de obligaciones.",
                  },
                  {
                    title: "Optimización de Recursos",
                    text: 'Cómo generar "mora recuperable" a corto plazo para garantizar el pago de servicios básicos.',
                  },
                ].map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <div className="h-2 w-2 rounded-full bg-[#00e38e]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-400 leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
