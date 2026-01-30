"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2, Send } from "lucide-react";
import Footer from "../../components/Footer";

export default function NPSPage() {
  const [formData, setFormData] = useState({
    recommendation: -1, // Main NPS
    reason: "",
    satisfaction: -1,
    retention: -1,
    recommendToResidents: -1,
    recommendToAdmins: -1,
    recommendService: -1,
    recommendUsability: -1,
    recommendReliability: -1,
    recommendSecurity: -1,
    improvement: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleRatingChange = (field: string, value: number) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleTextChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/survey/nps", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit survey");
      }

      console.log("NPS Data Submitted");
      setIsSuccess(true);
    } catch (error) {
      console.error("Error submitting survey:", error);
      alert("Hubo un error al enviar la encuesta. Por favor intenta nuevamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const NPSScale = ({ value, onChange, labelStart = "Nada probable", labelEnd = "Extremadamente probable" }: { value: number; onChange: (val: number) => void; labelStart?: string; labelEnd?: string }) => {
     return (
        <div className="flex flex-col gap-2">
           <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                 <button
                 key={num}
                 type="button"
                 onClick={() => onChange(num)}
                 className={`flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-lg border transition-all text-sm sm:text-base ${
                   value === num
                     ? "border-[#00e38e] bg-[#00e38e] text-[#191919] font-bold shadow-[0_0_15px_rgba(0,227,142,0.4)]"
                     : "border-white/10 bg-white/5 text-gray-400 hover:bg-white/10 hover:border-white/20"
                 }`}
               >
                 {num}
               </button>
              ))}
           </div>
           <div className="flex justify-between text-xs text-gray-500 px-1 mt-1">
            <span>{labelStart}</span>
            <span>{labelEnd}</span>
          </div>
        </div>
     )
  }

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-[#191919] flex flex-col items-center justify-center p-6">
         <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="flex flex-col items-center gap-6 text-center max-w-md"
          >
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", duration: 0.8, bounce: 0.5 }}
              className="rounded-full bg-[#00e38e]/10 p-6"
            >
              <CheckCircle2 size={80} className="text-[#00e38e]" />
            </motion.div>
            <h1 className="text-3xl font-bold text-white">¡Gracias por tu opinión!</h1>
            <p className="text-gray-400">
              Valoramos mucho tu tiempo. Tus respuestas nos ayudarán a mejorar Condaty para ti y tu comunidad.
            </p>
            <Link
              href="/"
              className="mt-4 rounded-2xl bg-[#00e38e] px-8 py-3 font-semibold text-[#191919] transition-all hover:bg-[#00c97e] hover:shadow-[0_0_30px_rgba(0,227,142,0.4)]"
            >
              Volver al inicio
            </Link>
          </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#191919] text-white selection:bg-[#00e38e] selection:text-[#191919]">
      {/* Header Image */}
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
               Encuesta NPS
             </span>
             <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl leading-tight">
               Tu opinión es clave para nuestro crecimiento
             </h1>
           </div>
        </div>
      </div>

      <div className="px-6 py-10 sm:px-10 lg:px-20 xl:px-36">
        <div className="mx-auto max-w-4xl">
          
          <div className="mb-12 rounded-[32px] border border-white/10 bg-white/5 p-6 sm:p-8 backdrop-blur-sm">
            <h2 className="text-xl font-semibold text-[#00e38e] mb-4">Objetivo</h2>
            <p className="text-gray-300">
              Queremos entender mejor tu experiencia con Condaty para seguir mejorando nuestros servicios y fortalecer nuestra relación a largo plazo.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-10">
            
            {/* Pregunta Principal NPS */}
            <section className="flex flex-col gap-6">
              <div className="space-y-4 p-6 rounded-[24px] bg-[#00e38e]/5 border border-[#00e38e]/20">
                <label className="block text-xl font-semibold text-white">
                  1. ¿Qué tan probable es que recomiendes Condaty a otro condominio, administrador o junta de vecinos?
                </label>
                <NPSScale
                  value={formData.recommendation}
                  onChange={(val) => handleRatingChange("recommendation", val)}
                />
              </div>

              <div className="space-y-3">
                <label className="block text-gray-200">
                  2. ¿Cuál fue la razón principal de la calificación que nos diste?
                </label>
                <textarea
                  rows={3}
                  required
                  className="w-full rounded-2xl border border-white/10 bg-white/5 p-4 text-white placeholder-gray-600 outline-none transition-all focus:border-[#00e38e]/50 focus:bg-white/10 focus:shadow-[0_0_20px_rgba(0,227,142,0.1)] resize-none"
                  placeholder="Escribe tu respuesta aquí..."
                  value={formData.reason}
                  onChange={(e) => handleTextChange("reason", e.target.value)}
                />
              </div>
            </section>

            {/* Satisfacción y Retención */}
            <section className="flex flex-col gap-8 border-t border-white/10 pt-8">
               <div className="space-y-3">
                  <label className="block text-gray-200">
                    3. ¿Qué tan satisfecho(a) estás con el valor que Condaty le aporta a tu comunidad en orden, pagos, seguridad y comunicación?
                  </label>
                  <NPSScale
                    value={formData.satisfaction}
                    onChange={(val) => handleRatingChange("satisfaction", val)}
                    labelStart="Nada satisfecho"
                    labelEnd="Muy satisfecho"
                  />
                </div>

                <div className="space-y-3">
                  <label className="block text-gray-200">
                    4. ¿Qué tan probable es que continúes utilizando Condaty durante los próximos 12 meses?
                  </label>
                  <NPSScale
                    value={formData.retention}
                    onChange={(val) => handleRatingChange("retention", val)}
                  />
                </div>
            </section>

            {/* Recomendaciones Específicas */}
            <section className="flex flex-col gap-8 border-t border-white/10 pt-8">
                <h3 className="text-xl font-semibold text-white">Recomendación por Áreas</h3>
                
                <div className="space-y-3">
                  <label className="block text-gray-200">
                    5. ¿Qué tan probable es que recomiendes la app Condaty a otros residentes dentro de tu condominio?
                  </label>
                  <NPSScale
                    value={formData.recommendToResidents}
                    onChange={(val) => handleRatingChange("recommendToResidents", val)}
                  />
                </div>

                <div className="space-y-3">
                  <label className="block text-gray-200">
                    6. ¿Qué tan probable es que recomiendes Condaty a administradores o empresas de administración profesionales?
                  </label>
                  <NPSScale
                    value={formData.recommendToAdmins}
                    onChange={(val) => handleRatingChange("recommendToAdmins", val)}
                  />
                </div>

                <div className="space-y-3">
                  <label className="block text-gray-200">
                    7. ¿Qué tan probable es que recomiendes Condaty basándote en la calidad del servicio de atención y soporte?
                  </label>
                  <NPSScale
                    value={formData.recommendService}
                    onChange={(val) => handleRatingChange("recommendService", val)}
                  />
                </div>

                <div className="space-y-3">
                  <label className="block text-gray-200">
                    8. ¿Qué tan probable es que recomiendes Condaty por su facilidad de uso?
                  </label>
                  <NPSScale
                    value={formData.recommendUsability}
                    onChange={(val) => handleRatingChange("recommendUsability", val)}
                  />
                </div>

                <div className="space-y-3">
                  <label className="block text-gray-200">
                     9. ¿Qué tan probable es que recomiendes Condaty como una solución confiable para la gestión de condominios?
                  </label>
                  <NPSScale
                    value={formData.recommendReliability}
                    onChange={(val) => handleRatingChange("recommendReliability", val)}
                  />
                </div>

                <div className="space-y-3">
                  <label className="block text-gray-200">
                    10. ¿Qué tan probable es que recomiendes las funcionalidades de seguridad de Condaty, como control de accesos, QR, bitácora y reportes?
                  </label>
                  <NPSScale
                    value={formData.recommendSecurity}
                    onChange={(val) => handleRatingChange("recommendSecurity", val)}
                  />
                </div>
            </section>

            {/* Feedback Final */}
            <section className="flex flex-col gap-6 border-t border-white/10 pt-8">
              <div className="space-y-3">
                <label className="block text-gray-200">
                  11. ¿Qué deberíamos mejorar para que tu respuesta sea un punto más alta la próxima vez?
                </label>
                <textarea
                  rows={4}
                  className="w-full rounded-2xl border border-white/10 bg-white/5 p-4 text-white placeholder-gray-600 outline-none transition-all focus:border-[#00e38e]/50 focus:bg-white/10 focus:shadow-[0_0_20px_rgba(0,227,142,0.1)] resize-none"
                  placeholder="Escribe tu respuesta aquí..."
                  value={formData.improvement}
                  onChange={(e) => handleTextChange("improvement", e.target.value)}
                />
              </div>
            </section>

            <div className="flex justify-center pt-8 pb-12">
              <button
                type="submit"
                disabled={isSubmitting}
                className="group relative flex w-full max-w-md items-center justify-center gap-3 overflow-hidden rounded-2xl bg-[#00e38e] px-8 py-4 text-lg font-bold text-[#191919] transition-all hover:bg-[#00c97e] hover:shadow-[0_0_40px_rgba(0,227,142,0.5)] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  "Enviando..."
                ) : (
                  <>
                    Enviar Encuesta NPS
                    <Send size={20} className="transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
}
