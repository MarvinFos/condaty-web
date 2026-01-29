import Footer from "@/components/Footer";

export default function EliminarCuenta() {
  return (
    <div className="min-h-screen bg-[#191919] text-white flex flex-col relative">
      <main className="flex-grow flex flex-col items-center justify-center px-6 py-20 sm:px-10 relative overflow-hidden z-10">
        {/* Bottom Glow Sphere */}
        <div
          className="absolute left-1/2 bottom-[-80px] h-[250px] w-[150%] -translate-x-1/2 rounded-[100%] opacity-70 blur-[80px] pointer-events-none mix-blend-screen z-0"
          style={{
            background:
              "radial-gradient(circle, rgba(255,255,255,0.6) 0%, #00e38e 40%, transparent 70%)",
          }}
        />

        <div className="max-w-[800px] w-full flex flex-col gap-8 relative z-10">
          <h1 className="text-[32px] sm:text-[40px] font-semibold text-[#00e38e] leading-tight">
            Protegiendo tu privacidad
          </h1>

          <p className="text-[16px] sm:text-[18px] text-gray-300">
            Conoce los procedimientos para eliminar tu cuenta de manera
            definitiva o eliminar tus datos de forma total o parcial de las
            siguientes aplicaciones:
          </p>

          <ul className="list-disc pl-6 space-y-2 text-[16px] sm:text-[18px] text-white">
            <li>
              Condaty Residente Condominios by{" "}
              <span className="text-[#00e38e] cursor-pointer">
                FOS Technologies
              </span>
            </li>
            <li>
              Condaty Guardias Condominios by{" "}
              <span className="text-[#00e38e] cursor-pointer">
                FOS Technologies
              </span>
            </li>
          </ul>

          <p className="text-[16px] sm:text-[18px] text-gray-300">
            Para solicitar la eliminación total o parcial de tus datos,
            escríbenos a{" "}
            <a
              href="mailto:hola@condaty.com?subject=Quiero Eliminar mi cuenta/datos"
              className="text-[#00e38e] underline hover:text-[#00c97e] transition-colors"
            >
              hola@condaty.com
            </a>{" "}
            con el asunto &apos;Quiero Eliminar mi cuenta/datos&apos;.
          </p>

          <p className="text-[16px] sm:text-[18px] text-gray-300">
            Asegúrate de proporcionar tu ID, correo y nombre completo. Te
            notificaremos en 5 días sobre la eliminación.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
