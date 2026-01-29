"use client";

import { useState } from "react";
import Image from "next/image";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ContactModal from "../../components/ContactModal";
import { CircleDollarSign, Users, ShieldCheck } from "lucide-react";

export default function ResidentesPage() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#191919] text-white">
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
      <Navbar />

      <main className="flex flex-col w-full">
        {/* Section 1: Hero - Todo tu condominio en una sola app */}
        <section className="relative w-full overflow-hidden bg-[#191919]">
          {/* Top Right Glow Effect */}
          <div
            className="absolute right-0 top-0 h-[700px] w-[700px] translate-x-1/2 -translate-y-1/2 rounded-full opacity-70 blur-[90px] pointer-events-none mix-blend-screen z-0"
            style={{
              background:
                "radial-gradient(circle, rgba(255,255,255,0.9) 0%, #00e38e 50%, rgba(0,227,142,0) 70%)",
            }}
          />
          <div className="mx-auto w-full max-w-[1440px] px-6 pb-20 pt-[100px] sm:px-10">
            <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-center lg:justify-between">
              {/* Left Content */}
              <div className="flex flex-col items-start gap-8 max-w-[600px] relative z-10">
                <div className="flex flex-col gap-3">
                  <span className="text-[38px] font-semibold leading-[1.1] sm:text-[50px]">
                    Todo tu condominio
                    <br />
                    <span className="text-[#00e38e]">en una sola app</span>
                  </span>
                  <span className="text-[16px] font-normal text-white sm:text-[18px]">
                    Pagos, accesos y comunicación más simples para que disfrutes
                    tu hogar sin complicaciones.
                  </span>
                </div>
                <div
                  onClick={() => setIsContactModalOpen(true)}
                  className="rounded-full border border-[#00e38e] bg-[#00e38e] px-8 py-4 cursor-pointer hover:bg-[#00c97e] transition-colors"
                >
                  <span className="text-[16px] font-semibold text-[#191919]">
                    Contáctanos
                  </span>
                </div>
              </div>

              {/* Right Image (Family) */}
              <div className="relative w-full max-w-[600px] z-10">
                <Image
                  src="/images/condominios/family.png"
                  alt="Familia disfrutando en el condominio"
                  width={600}
                  height={400}
                  className="h-auto w-full object-cover rounded-[32px] drop-shadow-2xl"
                  priority
                />
                {/* Background Glow Effect behind image */}
                <div
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-40 blur-[80px]"
                  style={{
                    background:
                      "radial-gradient(circle, #00e38e 0%, transparent 70%)",
                    width: "400px",
                    height: "400px",
                    zIndex: -1,
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Feature - Invita y aprueba visitas */}
        <section className="w-full bg-[#191919] flex justify-center py-20 overflow-hidden">
          <div className="w-full max-w-[1440px] px-6 sm:px-10 flex flex-col lg:flex-row items-center">
            {/* Left: Image (Larger with overlap) */}
            <div className="flex-1 flex justify-center relative w-full z-10 lg:-mr-24">
              {/* Background Glow Effect */}
              <div
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-30 blur-[90px]"
                style={{
                  background:
                    "radial-gradient(circle, #00e38e 0%, transparent 70%)",
                  width: "600px",
                  height: "600px",
                  zIndex: 0,
                }}
              />
              <div className="relative z-10 w-full max-w-[750px]">
                <Image
                  src="/images/redsocial/phone-app.png"
                  alt="App en teléfonos móviles"
                  width={750}
                  height={750}
                  className="w-full h-auto object-contain scale-110"
                />
              </div>
            </div>

            {/* Right: Text (Overlapping) */}
            <div className="flex-1 flex flex-col gap-4 z-20 pl-0 lg:pl-10">
              <h2 className="text-[40px] font-semibold leading-[1.2] sm:text-[50px]">
                <span className="text-[#00e38e]">Invita y aprueba visitas</span>
                <span className="text-white"> en segundos</span>
              </h2>
              <p className="font-medium text-[18px] text-[#d9d9d9]">
                Genera accesos con código QR para familiares, amigos o
                proveedores, todo desde tu celular.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Descubre nuestro ecosistema */}
        <section className="relative z-40 w-full min-h-[600px] h-auto py-20 overflow-hidden bg-[#191919] flex items-center justify-center">
          {/* Green Glow Effect at the bottom */}
          <div className="absolute bottom-[-100px] left-0 h-[300px] w-full bg-[#00e38e] opacity-20 blur-[100px]" />

          <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center gap-12 px-6 text-center sm:px-10 relative z-10">
            <h2 className="mx-auto max-w-[800px] text-[28px] font-semibold leading-[1.2] sm:text-[40px]">
              Descubre nuestro ecosistema, donde{" "}
              <span className="text-[#00e38e]">tu</span>
              <br className="hidden sm:block" />{" "}
              <span className="text-[#00e38e]">
                condominio siempre está conectado
              </span>
              .
            </h2>

            <div className="flex w-full flex-wrap justify-center gap-6">
              {/* Card 1: Pagos sin complicaciones */}
              <div className="min-h-[260px] h-auto w-full max-w-[305px] flex flex-col justify-center gap-10 rounded-2xl border-t border-l border-r border-b-2 border-[#2E6764] bg-[#00e38e]/[0.08] shadow-[inset_0_-16px_20px_0_rgba(0,227,142,0.28)] p-7 text-left hover:scale-105 transition-transform">
                <div className="w-[44px] h-[44px] flex justify-center items-center gap-2 p-2 rounded-lg">
                  <CircleDollarSign className="h-9 w-7 text-[#00e38e]" />
                </div>
                <div className="flex flex-col gap-3 self-stretch">
                  <span className="font-semibold text-[18px] leading-[1.2] text-[#00e38e]">
                    Pagos sin complicaciones
                  </span>
                  <span className="font-medium text-[12px] text-[#d9d9d9]">
                    Realiza tus pagos de expensas y deudas de manera rápida,
                    segura y sin salir de casa.
                  </span>
                </div>
              </div>

              {/* Card 2: Invitaciones digitales */}
              <div className="min-h-[260px] h-auto w-full max-w-[305px] flex flex-col justify-center gap-10 rounded-2xl border-t border-l border-r border-b-2 border-[#2E6764] bg-[#00e38e]/[0.08] shadow-[inset_0_-16px_20px_0_rgba(0,227,142,0.28)] p-7 text-left hover:scale-105 transition-transform">
                <div className="w-[44px] h-[44px] flex justify-center items-center gap-2 p-2 rounded-lg">
                  <Users className="h-9 w-7 text-[#00e38e]" />
                </div>
                <div className="flex flex-col gap-3 self-stretch">
                  <span className="font-semibold text-[18px] leading-[1.2] text-[#00e38e]">
                    Invitaciones digitales
                  </span>
                  <span className="font-medium text-[12px] text-[#d9d9d9]">
                    Genera y comparte códigos QR para tus visitas en segundos,
                    evitando registros manuales.
                  </span>
                </div>
              </div>

              {/* Card 3: Seguridad garantizada */}
              <div className="min-h-[260px] h-auto w-full max-w-[305px] flex flex-col justify-center gap-10 rounded-2xl border-t border-l border-r border-b-2 border-[#2E6764] bg-[#00e38e]/[0.08] shadow-[inset_0_-16px_20px_0_rgba(0,227,142,0.28)] p-7 text-left hover:scale-105 transition-transform">
                <div className="w-[44px] h-[44px] flex justify-center items-center gap-2 p-2 rounded-lg">
                  <ShieldCheck className="h-9 w-7 text-[#00e38e]" />
                </div>
                <div className="flex flex-col gap-3 self-stretch">
                  <span className="font-semibold text-[18px] leading-[1.2] text-[#00e38e]">
                    Seguridad garantizada
                  </span>
                  <span className="font-medium text-[12px] text-[#d9d9d9]">
                    Mayor tranquilidad para ti y tu familia con accesos
                    vigilados y alertas rápidas en todo momento.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: ¿Administras o vives en un Condominio? */}
        <section className="w-full">
          <div className="mx-auto w-full max-w-[1440px] px-6 py-20 sm:px-10">
            <div className="relative w-full overflow-hidden rounded-[40px] border border-[#00e38e] bg-black px-6 py-20 text-center sm:px-10">
              {/* Background Image */}
              <div className="absolute inset-0 bg-[url('/images/condominios/condominio-ilustracion1.png')] bg-cover bg-center" />
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/20" />

              <div className="relative z-10 flex flex-col items-center gap-8">
                <h2 className="text-[28px] font-semibold leading-[1.2] sm:text-[40px]">
                  ¿Administras o vives en un
                  <br />
                  <span className="text-[#00e38e]">Condominio</span>?
                </h2>
                <span className="text-[16px] text-gray-300">
                  Conoce nuestra solución y agenda tu demostración.
                </span>
                <div
                  onClick={() => setIsContactModalOpen(true)}
                  className="rounded-full border border-[#00e38e] bg-[#00e38e] px-8 py-4 cursor-pointer hover:bg-[#00c97e] transition-colors"
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
