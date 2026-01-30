"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2, Send } from "lucide-react";
import Footer from "../../components/Footer";

export default function SurveyPage() {
  const [formData, setFormData] = useState({
    onboarding: {
      clarity: 0,
      training: 0,
      support: 0,
      residentEase: 0,
      recommendation: 0,
    },
    platform: {
      easeOfUse: 0,
      coverage: 0,
      speed: 0,
      control: 0,
      recommendation: 0,
    },
    support: {
      speed: 0,
      professionalism: 0,
      accompaniment: 0,
      recommendation: 0,
    },
    comments: {
      valuableFeatures: "",
      improvements: "",
      additional: "",
    },
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleRatingChange = (
    section: "onboarding" | "platform" | "support",
    field: string,
    value: number,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value,
      },
    }));
  };

  const handleCommentChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      comments: {
        ...prev.comments,
        [field]: value,
      },
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/survey/csat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit survey");
      }

      console.log("Survey Data Submitted");
      setIsSuccess(true);
    } catch (error) {
      console.error("Error submitting survey:", error);
      alert(
        "Hubo un error al enviar la encuesta. Por favor intenta nuevamente.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const RatingScale = ({
    value,
    onChange,
    max = 5,
    labels,
  }: {
    value: number;
    onChange: (val: number) => void;
    max?: number;
    labels?: boolean;
  }) => {
    return (
      <div className="flex flex-col gap-2">
        <div className="flex flex-wrap gap-2 sm:gap-4">
          {Array.from({ length: max }, (_, i) => i + 1).map((num) => (
            <button
              key={num}
              type="button"
              onClick={() => onChange(num)}
              className={`flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl border transition-all ${
                value === num
                  ? "border-[#00e38e] bg-[#00e38e] text-[#191919] font-bold shadow-[0_0_15px_rgba(0,227,142,0.4)]"
                  : "border-white/10 bg-white/5 text-gray-400 hover:bg-white/10 hover:border-white/20"
              }`}
            >
              {num}
            </button>
          ))}
          {max === 11 && ( // For NPS 0-10
            <button
              type="button"
              onClick={() => onChange(0)}
              className={`flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl border transition-all ${
                value === 0
                  ? "border-[#00e38e] bg-[#00e38e] text-[#191919] font-bold shadow-[0_0_15px_rgba(0,227,142,0.4)]"
                  : "border-white/10 bg-white/5 text-gray-400 hover:bg-white/10 hover:border-white/20"
              }`}
            >
              0
            </button>
          )}
        </div>
        {labels && max === 5 && (
          <div className="flex justify-between text-xs text-gray-500 px-1 mt-1">
            <span>Muy insatisfecho</span>
            <span>Muy satisfecho</span>
          </div>
        )}
        {labels && max === 11 && (
          <div className="flex justify-between text-xs text-gray-500 px-1 mt-1">
            <span>Nada probable</span>
            <span>Muy probable</span>
          </div>
        )}
      </div>
    );
  };

  // Custom NPS Scale because it needs 0-10
  const NPSScale = ({
    value,
    onChange,
  }: {
    value: number;
    onChange: (val: number) => void;
  }) => {
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
          <span>Nada probable</span>
          <span>Muy probable</span>
        </div>
      </div>
    );
  };

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
          <h1 className="text-3xl font-bold text-white">
            ¡Gracias por tu opinión!
          </h1>
          <p className="text-gray-400">
            Valoramos mucho tu tiempo. Tus respuestas nos ayudarán a mejorar
            Condaty para ti y tu comunidad.
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
              Encuesta de Satisfacción
            </span>
            <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl leading-tight">
              Ayúdanos a mejorar tu experiencia
            </h1>
          </div>
        </div>
      </div>

      <div className="px-6 py-10 sm:px-10 lg:px-20 xl:px-36">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 rounded-[32px] border border-white/10 bg-white/5 p-6 sm:p-8 backdrop-blur-sm">
            <h2 className="text-xl font-semibold text-[#00e38e] mb-4">
              Objetivo
            </h2>
            <p className="text-gray-300 mb-6">
              Medir la satisfacción del cliente en puntos clave del servicio
              para identificar fortalezas y áreas de mejora.
            </p>
            <h3 className="text-lg font-medium text-white mb-2">
              Instrucciones
            </h3>
            <p className="text-gray-400">
              Por favor, califica tu experiencia en cada uno de los siguientes
              aspectos usando la escala del 1 al 5, donde:
            </p>
            <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-5 text-sm text-gray-400">
              <div className="rounded-lg bg-white/5 p-2 text-center border border-white/5">
                <span className="block font-bold text-white text-lg">1</span>Muy
                insatisfecho
              </div>
              <div className="rounded-lg bg-white/5 p-2 text-center border border-white/5">
                <span className="block font-bold text-white text-lg">2</span>
                Insatisfecho
              </div>
              <div className="rounded-lg bg-white/5 p-2 text-center border border-white/5">
                <span className="block font-bold text-white text-lg">3</span>
                Neutro
              </div>
              <div className="rounded-lg bg-white/5 p-2 text-center border border-white/5">
                <span className="block font-bold text-white text-lg">4</span>
                Satisfecho
              </div>
              <div className="rounded-lg bg-white/5 p-2 text-center border border-white/5">
                <span className="block font-bold text-[#00e38e] text-lg">
                  5
                </span>
                Muy satisfecho
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-10">
            {/* Section 1 */}
            <section className="flex flex-col gap-6">
              <h2 className="text-2xl font-semibold text-white border-b border-white/10 pb-4">
                1. Proceso de Onboarding e Implementación
              </h2>

              <div className="space-y-8">
                <div className="space-y-3">
                  <label className="block text-gray-200">
                    1.1 ¿Qué tan satisfecho(a) estás con la claridad de los
                    pasos durante la activación de Condaty?
                  </label>
                  <RatingScale
                    value={formData.onboarding.clarity}
                    onChange={(val) =>
                      handleRatingChange("onboarding", "clarity", val)
                    }
                    labels
                  />
                </div>

                <div className="space-y-3">
                  <label className="block text-gray-200">
                    1.2 ¿Qué tan útil fue la capacitación inicial proporcionada?
                  </label>
                  <RatingScale
                    value={formData.onboarding.training}
                    onChange={(val) =>
                      handleRatingChange("onboarding", "training", val)
                    }
                    labels
                  />
                </div>

                <div className="space-y-3">
                  <label className="block text-gray-200">
                    1.3 ¿Recibiste apoyo oportuno del equipo de Condaty durante
                    la configuración?
                  </label>
                  <RatingScale
                    value={formData.onboarding.support}
                    onChange={(val) =>
                      handleRatingChange("onboarding", "support", val)
                    }
                    labels
                  />
                </div>

                <div className="space-y-3">
                  <label className="block text-gray-200">
                    1.4 ¿Qué tan sencillo fue para los residentes comenzar a
                    usar la app?
                  </label>
                  <RatingScale
                    value={formData.onboarding.residentEase}
                    onChange={(val) =>
                      handleRatingChange("onboarding", "residentEase", val)
                    }
                    labels
                  />
                </div>

                <div className="space-y-3">
                  <label className="block text-gray-200">
                    1.5 ¿Qué tan probable es que recomiendes a Condaty a otros
                    condominios?
                  </label>
                  <RatingScale
                    value={formData.onboarding.recommendation}
                    onChange={(val) =>
                      handleRatingChange("onboarding", "recommendation", val)
                    }
                    labels
                  />
                </div>
              </div>
            </section>

            {/* Section 2 */}
            <section className="flex flex-col gap-6">
              <h2 className="text-2xl font-semibold text-white border-b border-white/10 pb-4">
                2. Uso de la Plataforma
              </h2>

              <div className="space-y-8">
                <div className="space-y-3">
                  <label className="block text-gray-200">
                    2.1 ¿Qué tan fácil es navegar y operar la plataforma como
                    administrador(a)?
                  </label>
                  <RatingScale
                    value={formData.platform.easeOfUse}
                    onChange={(val) =>
                      handleRatingChange("platform", "easeOfUse", val)
                    }
                    labels
                  />
                </div>

                <div className="space-y-3">
                  <label className="block text-gray-200">
                    2.2 ¿La plataforma cubre tus necesidades de gestión
                    financiera, reservas y seguridad?
                  </label>
                  <RatingScale
                    value={formData.platform.coverage}
                    onChange={(val) =>
                      handleRatingChange("platform", "coverage", val)
                    }
                    labels
                  />
                </div>

                <div className="space-y-3">
                  <label className="block text-gray-200">
                    2.3 ¿Qué tan satisfecho(a) estás con la velocidad y
                    estabilidad del sistema?
                  </label>
                  <RatingScale
                    value={formData.platform.speed}
                    onChange={(val) =>
                      handleRatingChange("platform", "speed", val)
                    }
                    labels
                  />
                </div>

                <div className="space-y-3">
                  <label className="block text-gray-200">
                    2.4 ¿Te sientes en control de tu condominio con Condaty?
                  </label>
                  <RatingScale
                    value={formData.platform.control}
                    onChange={(val) =>
                      handleRatingChange("platform", "control", val)
                    }
                    labels
                  />
                </div>

                <div className="space-y-3">
                  <label className="block text-gray-200">
                    2.5 ¿Qué tan probable es que recomiendes a Condaty a otros
                    condominios?
                  </label>
                  <RatingScale
                    value={formData.platform.recommendation}
                    onChange={(val) =>
                      handleRatingChange("platform", "recommendation", val)
                    }
                    labels
                  />
                </div>
              </div>
            </section>

            {/* Section 3 */}
            <section className="flex flex-col gap-6">
              <h2 className="text-2xl font-semibold text-white border-b border-white/10 pb-4">
                3. Soporte y Atención al Cliente
              </h2>

              <div className="space-y-8">
                <div className="space-y-3">
                  <label className="block text-gray-200">
                    3.1 ¿Qué tan rápido se resolvió tu solicitud o incidencia?
                  </label>
                  <RatingScale
                    value={formData.support.speed}
                    onChange={(val) =>
                      handleRatingChange("support", "speed", val)
                    }
                    labels
                  />
                </div>

                <div className="space-y-3">
                  <label className="block text-gray-200">
                    3.2 ¿La atención del equipo fue amable y profesional?
                  </label>
                  <RatingScale
                    value={formData.support.professionalism}
                    onChange={(val) =>
                      handleRatingChange("support", "professionalism", val)
                    }
                    labels
                  />
                </div>

                <div className="space-y-3">
                  <label className="block text-gray-200">
                    3.3 ¿Te sentiste acompañado(a) en todo el proceso?
                  </label>
                  <RatingScale
                    value={formData.support.accompaniment}
                    onChange={(val) =>
                      handleRatingChange("support", "accompaniment", val)
                    }
                    labels
                  />
                </div>

                <div className="space-y-3">
                  <label className="block text-gray-200">
                    3.4 ¿Qué tan probable es que recomiendes a Condaty a otros
                    condominios?
                  </label>
                  <RatingScale
                    value={formData.support.recommendation}
                    onChange={(val) =>
                      handleRatingChange("support", "recommendation", val)
                    }
                    labels
                  />
                </div>
              </div>
            </section>

            {/* Section 4 */}
            <section className="flex flex-col gap-6">
              <h2 className="text-2xl font-semibold text-white border-b border-white/10 pb-4">
                4. Comentarios Abiertos (Opcionales)
              </h2>

              <div className="space-y-8">
                <div className="space-y-3">
                  <label className="block text-gray-200">
                    5.1 ¿Qué funcionalidades destacarías como más valiosas para
                    ti?
                  </label>
                  <textarea
                    rows={3}
                    className="w-full rounded-2xl border border-white/10 bg-white/5 p-4 text-white placeholder-gray-600 outline-none transition-all focus:border-[#00e38e]/50 focus:bg-white/10 focus:shadow-[0_0_20px_rgba(0,227,142,0.1)] resize-none"
                    placeholder="Escribe tu respuesta aquí..."
                    value={formData.comments.valuableFeatures}
                    onChange={(e) =>
                      handleCommentChange("valuableFeatures", e.target.value)
                    }
                  />
                </div>

                <div className="space-y-3">
                  <label className="block text-gray-200">
                    5.2 ¿Qué podríamos mejorar para ofrecerte una mejor
                    experiencia?
                  </label>
                  <textarea
                    rows={3}
                    className="w-full rounded-2xl border border-white/10 bg-white/5 p-4 text-white placeholder-gray-600 outline-none transition-all focus:border-[#00e38e]/50 focus:bg-white/10 focus:shadow-[0_0_20px_rgba(0,227,142,0.1)] resize-none"
                    placeholder="Escribe tu respuesta aquí..."
                    value={formData.comments.improvements}
                    onChange={(e) =>
                      handleCommentChange("improvements", e.target.value)
                    }
                  />
                </div>

                <div className="space-y-3">
                  <label className="block text-gray-200">
                    5.3 ¿Tienes algún comentario o sugerencia adicional?
                  </label>
                  <textarea
                    rows={3}
                    className="w-full rounded-2xl border border-white/10 bg-white/5 p-4 text-white placeholder-gray-600 outline-none transition-all focus:border-[#00e38e]/50 focus:bg-white/10 focus:shadow-[0_0_20px_rgba(0,227,142,0.1)] resize-none"
                    placeholder="Escribe tu respuesta aquí..."
                    value={formData.comments.additional}
                    onChange={(e) =>
                      handleCommentChange("additional", e.target.value)
                    }
                  />
                </div>
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
                    Enviar Encuesta
                    <Send
                      size={20}
                      className="transition-transform group-hover:translate-x-1"
                    />
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
