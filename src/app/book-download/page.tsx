"use client";

import { useState } from "react";
import Image from "next/image";
import {
  User,
  Mail,
  ChevronDown,
  Phone,
  MapPin,
  CheckCircle2,
  Download,
  Scale,
  FileText,
  ShieldCheck,
  Lock,
} from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function BookDownloadPage() {
  // State for Book 1 (Plantillas)
  const [formData1, setFormData1] = useState({
    name: "",
    phone: "",
    email: "",
    role: "",
    city: "",
  });
  const [isSubmitting1, setIsSubmitting1] = useState(false);
  const [isSuccess1, setIsSuccess1] = useState(false);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsSubmitting1(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...formData1, source: "book-download" }),
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

        // Track Facebook Pixel 'Lead' event for book download
        if (typeof window !== "undefined" && (window as any).fbq) {
          (window as any).fbq("track", "Lead");
        }

        setIsSuccess1(true);
        setFormData1({
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
      setIsSubmitting1(false);
    }
  };

  const renderForm = (
    formData: typeof formData1,
    setFormData: typeof setFormData1,
    isSubmitting: boolean,
  ) => (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      {/* Nombre */}
      <div className="flex flex-col gap-2">
        <label className="ml-2 text-sm font-medium text-gray-300">
          Nombre completo <span className="text-red-500">*</span>
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
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>
      </div>

      {/* Email */}
      <div className="flex flex-col gap-2">
        <label className="ml-2 text-sm font-medium text-gray-300">
          Email profesional <span className="text-red-500">*</span>
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
        {/* Teléfono */}
        <div className="flex flex-col gap-2">
          <label className="ml-2 text-sm font-medium text-gray-300">
            Teléfono (WhatsApp) <span className="text-red-500">*</span>
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

        {/* Cargo */}
        <div className="flex flex-col gap-2">
          <label className="ml-2 text-sm font-medium text-gray-300">
            Tu Cargo <span className="text-red-500">*</span>
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
              <option value="" disabled className="bg-[#191919] text-gray-500">
                Seleccionar...
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
            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
          >
            <option value="" disabled className="bg-[#191919] text-gray-500">
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

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-4 w-full rounded-2xl bg-[#00e38e] py-4 text-base font-bold text-[#191919] transition-all hover:bg-[#00c97e] hover:shadow-[0_0_30px_rgba(0,227,142,0.4)] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {isSubmitting ? (
          "Enviando..."
        ) : (
          <>
            <Download size={20} className="stroke-[3]" />
            ¡Quiero mi Kit Gratis!
          </>
        )}
      </button>
    </form>
  );

  const renderSuccess = (setIsSuccess: (v: boolean) => void) => (
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
          ¡Listo! Revisa tu correo
        </h2>
        <p className="text-[16px] text-gray-400">
          Te enviamos el enlace del kit a tu email. Si no lo ves, revisa spam o
          promociones.
        </p>
      </div>
      <button
        onClick={() => setIsSuccess(false)}
        className="mt-4 w-full rounded-2xl bg-[#00e38e] py-4 text-base font-semibold text-[#191919] transition-all hover:bg-[#00c97e] hover:shadow-[0_0_30px_rgba(0,227,142,0.4)] active:scale-[0.98]"
      >
        Descargar otro recurso
      </button>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#111111] text-white selection:bg-[#00e38e] selection:text-[#191919]">
      <Navbar />

      {/* Background decoration */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-[600px]">
          <Image
            src="/images/condaty-edif.png"
            alt="Background"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#111111]/80 via-[#111111]/90 to-[#111111]" />
        </div>
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-[#00e38e]/5 rounded-full blur-[100px]" />
        <div className="absolute top-40 -left-20 w-[400px] h-[400px] bg-[#00e38e]/5 rounded-full blur-[80px]" />
      </div>

      <div className="relative z-10 px-6 pt-32 pb-20 sm:px-10 lg:px-20 xl:px-36">
        <div className="mx-auto max-w-7xl">
          {/* Hero Header */}
          <div className="text-center mb-16 space-y-6">
            <span className="inline-block rounded-full bg-[#00e38e]/10 px-4 py-1.5 text-sm font-semibold text-[#00e38e] backdrop-blur-md border border-[#00e38e]/20">
              Material Exclusivo para Administradores
            </span>
            <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl leading-tight max-w-5xl mx-auto">
              Descarga el Kit de Cobranza y{" "}
              <span className="text-[#00e38e]">Recupera la Mora</span> de tu
              Condominio
            </h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Left Column: Content & Benefits */}
            <div className="flex flex-col gap-10 lg:sticky lg:top-32">
              {/* Image */}
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-white/10 to-transparent p-1 border border-white/10 shadow-2xl">
                <div className="absolute inset-0 bg-[#00e38e]/20 blur-xl opacity-30" />
                <div className="relative w-full h-full bg-[#151515] rounded-xl flex items-center justify-center overflow-hidden">
                  {/* Placeholder for the code/image from reference */}
                  <Image
                    src="/images/condominios/ebook-new.png"
                    alt="Kit de Cobranza"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              <div className="space-y-8">
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold text-white leading-tight">
                    Protege el flujo de caja de tu edificio hoy mismo.
                  </h2>
                  <p className="text-gray-400 text-lg leading-relaxed">
                    Descarga gratis los 3 documentos legales (editables en Word)
                    que toda administración necesita para cobrar con autoridad y
                    sin destruir relaciones vecinales:
                  </p>
                </div>

                <div className="space-y-6">
                  {/* Benefit 1 */}
                  <div className="flex gap-4">
                    <div className="mt-1 flex-shrink-0">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#00e38e]/20 text-[#00e38e]">
                        <CheckCircle2 size={18} />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">
                        Aviso de Cobranza
                      </h3>
                      <p className="text-sm text-gray-400 mt-1">
                        El primer toque formal y estructurado para evitar
                        excusas.
                      </p>
                    </div>
                  </div>

                  {/* Benefit 2 */}
                  <div className="flex gap-4">
                    <div className="mt-1 flex-shrink-0">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#00e38e]/20 text-[#00e38e]">
                        <FileText size={18} />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">
                        Carta de Mora
                      </h3>
                      <p className="text-sm text-gray-400 mt-1">
                        El documento estratégico para negociar acuerdos de pago.
                      </p>
                    </div>
                  </div>

                  {/* Benefit 3 */}
                  <div className="flex gap-4">
                    <div className="mt-1 flex-shrink-0">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#00e38e]/20 text-[#00e38e]">
                        <Scale size={18} />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">
                        Intimación Legal
                      </h3>
                      <p className="text-sm text-gray-400 mt-1">
                        Cómo citar el Art. 1509 del Código Civil para
                        &quot;romper la prescripción&quot; de la deuda.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Form */}
            <div className="relative">
              <div className="rounded-[32px] border border-white/10 bg-[#151515] p-8 shadow-2xl">
                {isSuccess1 ? (
                  renderSuccess(setIsSuccess1)
                ) : (
                  <div className="flex flex-col gap-8">
                    <div className="space-y-2">
                      <h2 className="text-2xl font-bold text-white">
                        ¿A dónde te enviamos el Kit?
                      </h2>
                      <p className="text-gray-400 text-sm">
                        Completa tus datos para recibir el enlace de descarga
                        segura e inmediata.
                      </p>
                    </div>

                    {renderForm(formData1, setFormData1, isSubmitting1)}

                    <div className="flex items-center justify-center gap-2 text-xs text-gray-500 mt-4">
                      <Lock size={12} />
                      <span>
                        100% Seguro. Basado en la normativa boliviana vigente.
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
