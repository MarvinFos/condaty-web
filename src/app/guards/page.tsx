"use client";

import { useState } from "react";
import Image from "next/image";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ContactModal from "../../components/ContactModal";
import { KeyRound, Touchpad, MessageSquare, ScanLine } from "lucide-react";

export default function GuardiasPage() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#191919] text-white">
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
      <Navbar />

      <main className="flex flex-col w-full overflow-x-hidden">
        {/* Section 1: Hero - Control de visitas más rápido y fácil */}
        <section className="relative w-full h-[850px] overflow-hidden bg-[#0a3f32]">
          {/* Intense Green Gradient Background (Full Width & Stronger) */}
          <div className="absolute inset-0 bg-[linear-gradient(180deg,_#008f5d_0%,_#005c3b_40%,_#191919_100%)] opacity-100" />

          {/* Radial Highlight for depth */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-[radial-gradient(circle_at_top,_#00e38e_0%,_transparent_60%)] opacity-40 mix-blend-screen" />

          {/* Dark Curved Bottom (SVG Hill Effect) */}
          <div className="absolute bottom-[-100px] left-0 w-full z-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1440"
              height="472"
              viewBox="0 0 1440 472"
              fill="none"
              className="w-full h-auto"
              preserveAspectRatio="none"
            >
              <path
                d="M0 163.771C0 163.771 153.833 60.6084 635.5 14.1006C1117.17 -32.4073 1440 51.0279 1440 51.0279V472H0V163.771Z"
                fill="url(#paint0_linear_93_3859)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_93_3859"
                  x1="671"
                  y1="4.21719e-06"
                  x2="720"
                  y2="472"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#063926" />
                  <stop offset="0.297486" stopColor="#212121" />
                  <stop offset="1" stopColor="#191919" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 h-full flex items-center justify-center sm:px-10 pt-10 pb-20">
            <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20 w-full">
              {/* Left Image (Phone) */}
              <div className="relative w-[280px] sm:w-[350px] lg:w-[400px] transform rotate-[-12deg] hover:rotate-0 transition-all duration-700 ease-out mt-10">
                <Image
                  src="/images/condominios/app-guard.png"
                  alt="Control de visitas app"
                  width={400}
                  height={800}
                  className="w-full h-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                  priority
                />
              </div>

              {/* Right Content */}
              <div className="flex flex-col items-start gap-8 max-w-[600px] relative">
                <div className="flex flex-col gap-4">
                  <h1 className="text-[40px] font-semibold leading-[1.1] sm:text-[55px] tracking-tight">
                    <span className="text-[#00e38e]">Control de visitas</span>{" "}
                    más
                    <br />
                    rápido y fácil
                  </h1>
                  <span className="text-[18px] font-normal text-gray-200 sm:text-[20px] leading-relaxed">
                    Visualiza toda la información de tu condominio
                    <br />
                    en un solo lugar.
                  </span>
                </div>
                <div
                  onClick={() => setIsContactModalOpen(true)}
                  className="rounded-full border border-[#00e38e] bg-[#00e38e] px-10 py-4 cursor-pointer hover:bg-[#00c97e] transition-colors shadow-[0_0_20px_rgba(0,227,142,0.4)]"
                >
                  <span className="text-[18px] font-bold text-[#191919]">
                    Contáctanos
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Features - Potentes funcionalidades */}
        <section className="relative w-full bg-[#191919] flex justify-center items-center py-20 overflow-visible z-10">
          {/* Top Right Glow Effect - Overlapping sections */}
          <div
            className="absolute right-[-200px] top-[-150px] h-[800px] w-[800px] translate-x-1/2 -translate-y-1/4 rounded-full opacity-90 blur-[120px] pointer-events-none mix-blend-screen z-0"
            style={{
              background:
                "radial-gradient(circle, #ffffff 10%, #00e38e 50%, rgba(0,227,142,0) 80%)",
            }}
          />

          <div className="flex flex-col justify-center items-center gap-[60px] self-stretch w-full max-w-[1440px] px-6 sm:px-10 relative z-10">
            <h2 className="font-semibold text-[40px] leading-[50px] text-center">
              Potentes{" "}
              <span className="text-[#00e38e]">funcionalidades y reportes</span>
              <br />
              sobre tu condominio en tiempo real.
            </h2>

            {/* Background elements from Figma - represented as abstract glow/shapes if needed, or simplified */}
            {/* The provided HTML had absolute positioned divs for background (opacity 0.8/0.4).
                Since this is a React component, we'll keep the layout clean and apply the card styles directly.
                The background shapes seemed to be behind the content in the design, likely decorative.
                We will focus on the cards layout as requested. */}

            <div className="flex justify-center gap-5 self-stretch flex-wrap">
              {/* Card 1: Seguridad reforzada */}
              <div className="flex flex-col justify-center gap-[25px] w-full max-w-[305px] bg-[#00e38e]/[0.08] p-10 rounded-[20px] border border-[#2E6764] shadow-[inset_0_-16px_20px_0_rgba(0,227,142,0.28)] min-h-[280px] hover:scale-105 transition-transform duration-300">
                <div className="flex flex-col gap-[11px] self-stretch">
                  <div className="w-[44px] h-[44px] flex justify-center items-center gap-2 p-2 bg-[#00e38e]/20 rounded-lg">
                    <KeyRound className="w-9 h-9 text-[#00e38e]" />
                  </div>
                  <div className="flex flex-col gap-[5px] self-stretch">
                    <span className="font-semibold text-[18px] leading-[1.2] text-white">
                      Seguridad reforzada
                    </span>
                    <span className="font-medium text-[12px] text-gray-300">
                      Controla cada acceso al condominio con mayor precisión y
                      evita ingresos no autorizados
                    </span>
                  </div>
                </div>
              </div>

              {/* Card 2: Fácil de usar */}
              <div className="flex flex-col justify-center gap-[25px] w-full max-w-[305px] bg-[#00e38e]/[0.08] p-10 rounded-[20px] border border-[#2E6764] shadow-[inset_0_-16px_20px_0_rgba(0,227,142,0.28)] min-h-[280px] hover:scale-105 transition-transform duration-300">
                <div className="flex flex-col gap-[11px] self-stretch">
                  <div className="w-[44px] h-[44px] flex justify-center items-center gap-2 p-2 bg-[#00e38e]/20 rounded-lg">
                    <Touchpad className="w-9 h-9 text-[#00e38e]" />
                  </div>
                  <div className="flex flex-col gap-[5px] self-stretch">
                    <span className="font-semibold text-[18px] leading-[1.2] text-white">
                      Fácil de usar
                    </span>
                    <span className="font-medium text-[12px] text-gray-300">
                      Una interfaz clara e intuitiva que te permite realizar tus
                      tareas diarias sin complicaciones.
                    </span>
                  </div>
                </div>
              </div>

              {/* Card 3: Comunicación directa */}
              <div className="flex flex-col justify-center gap-[25px] w-full max-w-[305px] bg-[#00e38e]/[0.08] p-10 rounded-[20px] border border-[#2E6764] shadow-[inset_0_-16px_20px_0_rgba(0,227,142,0.28)] min-h-[280px] hover:scale-105 transition-transform duration-300">
                <div className="flex flex-col gap-[11px] self-stretch">
                  <div className="w-[44px] h-[44px] flex justify-center items-center gap-2 p-2 bg-[#00e38e]/20 rounded-lg">
                    <MessageSquare className="w-9 h-9 text-[#00e38e]" />
                  </div>
                  <div className="flex flex-col gap-[5px] self-stretch">
                    <span className="font-semibold text-[18px] leading-[1.2] text-white">
                      Comunicación directa
                    </span>
                    <span className="font-medium text-[12px] text-gray-300">
                      Envía y recibe avisos de inmediato, manteniendo un
                      contacto fluido entre administración y residentes.
                    </span>
                  </div>
                </div>
              </div>

              {/* Card 4: Acceso inmediato con QR */}
              <div className="flex flex-col justify-center gap-[25px] w-full max-w-[305px] bg-[#00e38e]/[0.08] p-10 rounded-[20px] border border-[#2E6764] shadow-[inset_0_-16px_20px_0_rgba(0,227,142,0.28)] min-h-[280px] hover:scale-105 transition-transform duration-300">
                <div className="flex flex-col gap-[11px] self-stretch">
                  <div className="w-[44px] h-[44px] flex justify-center items-center gap-2 p-2 bg-[#00e38e]/20 rounded-lg">
                    <ScanLine className="w-9 h-9 text-[#00e38e]" />
                  </div>
                  <div className="flex flex-col gap-[5px] self-stretch">
                    <span className="font-semibold text-[18px] leading-[1.2] text-white">
                      Acceso inmediato con QR
                    </span>
                    <span className="font-medium text-[12px] text-gray-300">
                      Escanea códigos QR y autoriza la entrada de visitantes en
                      segundos, sin demoras ni trámites extra.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Guard Content - Control de accesos */}
        <section className="relative w-full py-20 bg-[#191919] overflow-hidden">
          {/* Bottom Right Glow Effect */}
          <div
            className="absolute right-0 bottom-0 h-[800px] w-[800px] translate-x-1/2 translate-y-1/2 rounded-full opacity-40 blur-[120px] pointer-events-none z-0"
            style={{
              background:
                "radial-gradient(circle, #00e38e 0%, rgba(0,227,142,0) 70%)",
            }}
          />

          <div className="mx-auto w-full max-w-[1440px] px-6 sm:px-10 relative z-10">
            <div className="flex flex-col items-center  lg:flex-row lg:items-center lg:justify-center">
              {/* Left Image (Guard) */}
              <div className="relative w-full max-w-[500px] lg:mr-20">
                <Image
                  src="/images/condominios/guard-scan.png"
                  alt="Guardia de seguridad utilizando la app"
                  width={500}
                  height={700}
                  className="h-auto w-full object-cover"
                />
              </div>

              {/* Right Content */}
              <div className="flex flex-col items-start gap-10 max-w-[600px]">
                {/* Feature 1 */}
                <div className="flex flex-col gap-2">
                  <h3 className="text-[20px] font-bold text-[#00e38e]">
                    Control de accesos en tiempo real
                  </h3>
                  <p className="text-[16px] text-gray-300">
                    Consulta quién entró y salió en cualquier momento.
                  </p>
                </div>

                {/* Feature 2 */}
                <div className="flex flex-col gap-2">
                  <h3 className="text-[20px] font-bold text-[#00e38e]">
                    Permisos rápidos con o sin QR
                  </h3>
                  <p className="text-[16px] text-gray-300">
                    Autoriza el ingreso de visitantes en segundos, ya sea
                    escaneando o de forma manual.
                  </p>
                </div>

                {/* Feature 3 */}
                <div className="flex flex-col gap-2">
                  <h3 className="text-[20px] font-bold text-[#00e38e]">
                    Todas las alertas en un solo lugar
                  </h3>
                  <p className="text-[16px] text-gray-300">
                    Genera nuevas alertas y mantén informados a los residentes
                    al instante.
                  </p>
                </div>

                <div
                  onClick={() => setIsContactModalOpen(true)}
                  className="mt-4 rounded-full border border-[#00e38e] bg-[#00e38e] px-8 py-4 cursor-pointer hover:bg-[#00c97e] transition-colors"
                >
                  <span className="text-[16px] font-semibold text-[#191919]">
                    Contáctanos
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </main>
    </div>
  );
}
