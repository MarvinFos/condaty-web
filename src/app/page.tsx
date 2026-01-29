import Image from "next/image";
import {
  CircleDollarSign,
  Key,
  Users,
  MessageCircleQuestion,
  Megaphone,
  GraduationCap,
  Lightbulb,
  MessageSquareText,
  Bell,
  ArrowRightLeft,
  FileText,
  Eye,
  Scan,
  Clock,
  ArrowUpDown,
  Calculator,
  Lock,
  Settings,
  Star,
  ShieldCheck,
  Calendar,
  Folder,
  GitBranch,
  Cloud,
  Upload,
} from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#191919] text-white">
      <header className="sticky top-0 z-50 flex w-full justify-center bg-[#191919] border-b border-[#535353]">
        <div className="flex w-full justify-between items-center px-8 md:px-16 lg:px-24 py-0.5">
          <div className="flex h-[82px] grow items-center justify-center">
            <div className="flex grow items-center justify-between">
              <Image
                src="/images/logo_condaty.png"
                alt="Condaty"
                width={200}
                height={30}
                className="h-[30px] w-[200px] object-contain"
              />
              <div className="hidden md:flex items-center justify-center gap-8">
                <nav className="flex items-center gap-6">
                  <div className="flex items-center justify-center gap-2 rounded-full bg-[#292929] p-2 cursor-pointer">
                    <span className="text-base font-medium text-[#00e38e]">
                      Inicio
                    </span>
                  </div>
                  <div className="flex items-center justify-center gap-2 rounded-full bg-[#292929] p-2 cursor-pointer">
                    <span className="text-base font-medium text-white">
                      Administración
                    </span>
                  </div>
                  <div className="flex items-center justify-center gap-2 rounded-full bg-[#292929] p-2 cursor-pointer">
                    <span className="text-base font-medium text-white">
                      Residentes
                    </span>
                  </div>
                  <div className="flex items-center justify-center gap-2 rounded-full bg-[#292929] p-2 cursor-pointer">
                    <span className="text-base font-medium text-white">
                      Guardias
                    </span>
                  </div>
                </nav>
                <div className="flex items-center gap-3">
                  <button className="flex h-12 flex-col items-center justify-center gap-2.5 rounded-[10px] border border-solid border-[#d9d9d9] bg-[#292929] px-6 py-3 hover:bg-[#333] transition-colors">
                    <span className="text-center text-[16px] font-semibold text-white">
                      Ingresar
                    </span>
                  </button>
                  <button className="flex h-12 flex-col items-center justify-center gap-2.5 rounded-[10px] border border-solid border-[#00e38e] bg-[#00e38e] px-6 py-3 hover:bg-[#00c97e] transition-colors">
                    <span className="text-center text-[16px] font-semibold text-[#191919]">
                      Contáctanos
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main className="flex flex-col items-center">
        <section className="relative w-full max-w-[1440px] overflow-hidden bg-[#191919] px-6 pb-20 pt-[200px] sm:px-10">
          <div className="relative z-10 flex flex-col items-center gap-8 text-center">
            <div className="flex flex-col items-center gap-3">
              <span className="text-[38px] font-semibold leading-[1.1] sm:text-[60px]">
                ¡Tecnología que une{" "}
                <span className="text-[#00e38e]">vecinos</span>!
              </span>
              <span className="max-w-[720px] text-[16px] font-normal text-white sm:text-[20px]">
                Gestión de condominios simplificada para administradores,
                control de accesos para guardias y una experiencia cómoda para
                residentes.
              </span>
            </div>
            <div className="flex gap-4">
              <div className="rounded-full border border-[#00e38e] bg-[#00e38e] px-8 py-4 cursor-pointer hover:bg-[#00c97e] transition-colors">
                <span className="text-[16px] font-semibold text-[#191919]">
                  Contáctanos
                </span>
              </div>
            </div>
          </div>

          <div className="relative mt-12 flex w-full items-end justify-center sm:mt-20">
            {/* Background Glow Effects - Moved inside for better positioning relative to images */}
            <div
              className="absolute left-1/2 top-[40%] -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[350px] rounded-[800px] opacity-100 blur-[50px] pointer-events-none z-0 mix-blend-screen"
              style={{
                background:
                  "radial-gradient(circle, rgba(255,255,255,1) 0%, #00e38e 50%, rgba(0,227,142,0) 100%)",
              }}
            />
            <div
              className="absolute left-1/2 top-[-40%] -translate-x-1/2 -translate-y-1/2 w-[150px] h-[900px] rounded-[800px] opacity-100 blur-[70px] pointer-events-none z-0 mix-blend-screen"
              style={{
                background:
                  "radial-gradient(circle, rgba(255,255,255,1) 0%, #00e38e 50%, rgba(0,227,142,0) 100%)",
              }}
            />

            {/* Left Image - Owner */}
            <div className="relative z-10 -mr-[80px] mb-4 w-[25%] max-w-[220px] sm:mb-8 opacity-90 hover:opacity-100 transition-opacity">
              <Image
                src="/images/owner.png"
                alt="App Residentes"
                width={220}
                height={454}
                className="h-auto w-full object-contain drop-shadow-2xl"
              />
            </div>

            {/* Center Image - Laptop Admin */}
            <div className="relative z-30 w-full max-w-[814px]">
              <Image
                src="/images/laptop-admin.png"
                alt="Panel Administrativo"
                width={814}
                height={530}
                className="h-auto w-full object-contain drop-shadow-2xl"
                priority
              />
            </div>

            {/* Right Image - Guard */}
            <div className="relative z-10 -ml-[80px] mb-4 w-[25%] max-w-[220px] sm:mb-8 opacity-90 hover:opacity-100 transition-opacity">
              <Image
                src="/images/guard.png"
                alt="App Guardias"
                width={220}
                height={454}
                className="h-auto w-full object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </section>

        <section className="relative z-40 -mt-40 w-full overflow-hidden bg-[#191919] pb-20 pt-24 sm:rounded-t-[60px]">
          {/* Top Left Glow */}
          <div
            className="absolute left-0 top-0 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-70 blur-[90px] pointer-events-none mix-blend-screen"
            style={{
              background:
                "radial-gradient(circle, rgba(255,255,255,0.9) 0%, #00e38e 50%, rgba(0,227,142,0) 70%)",
            }}
          />

          <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center gap-12 px-6 text-center sm:px-10">
            <h2 className="mx-auto max-w-[800px] text-[28px] font-semibold leading-[1.2] sm:text-[40px]">
              Descubre nuestro{" "}
              <span className="text-[#00e38e]">ecosistema</span>, donde tu
              <br className="hidden sm:block" /> condominio siempre está
              conectado.
            </h2>

            <div className="grid w-full grid-cols-1 justify-items-center gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  icon: CircleDollarSign,
                  text: "Administra tus finanzas con nuestro módulo de ingresos y egresos",
                  highlight: "Administra tus finanzas",
                  color: "#00e38e", // Green
                },
                {
                  icon: Key,
                  text: "Sistema de control de visitas gestionado por administradores y guardias",
                  highlight: "Sistema de control de visitas",
                  color: "#00e38e",
                },
                {
                  icon: Users,
                  text: "Sección de comunidad para ver las publicaciones y comentarios del condominio",
                  highlight: "Sección de comunidad",
                  color: "#d946ef", // Purple
                },
                {
                  icon: MessageCircleQuestion,
                  text: "Atención y soporte a todo tu personal y residentes las 24 horas, toda la semana",
                  highlight: "Atención y soporte",
                  color: "#00e38e",
                },
                {
                  icon: Megaphone,
                  text: "Alertas y emergencias para mantener a todos informados y dar asistencia inmediata.",
                  highlight: "Alertas y emergencias",
                  color: "#00e38e",
                },
                {
                  icon: GraduationCap,
                  text: "On-boarding para capacitar a todo su personal",
                  highlight: "On-boarding",
                  color: "#f97316", // Orange
                },
                {
                  icon: Lightbulb,
                  text: "Innovación continua en nuevas funcionalidades para tu condominio.",
                  highlight: "Innovación continua",
                  color: "#00e38e",
                },
                {
                  icon: MessageSquareText,
                  text: "Chat interno para los administradores y miembros de la directiva",
                  highlight: "Chat interno",
                  color: "#06b6d4", // Cyan
                },
              ].map((card, index) => (
                <div
                  key={index}
                  className="group flex w-full max-w-[280px] flex-col gap-4 rounded-2xl border bg-[#111] p-6 text-left transition-all duration-300 hover:-translate-y-1 hover:brightness-110"
                  style={{
                    boxShadow: `0 0 25px ${card.color}30`,
                    borderColor: card.color,
                  }}
                >
                  <card.icon
                    className="h-10 w-10"
                    style={{
                      color: card.color,
                      filter: `drop-shadow(0 0 12px ${card.color})`,
                    }}
                  />
                  <p className="text-[15px] leading-relaxed text-gray-300">
                    <span className="font-bold" style={{ color: card.color }}>
                      {card.highlight}
                    </span>{" "}
                    {card.text.replace(card.highlight, "").trim()}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="h-[2px] w-full max-w-[1440px] bg-gradient-to-b from-[#191919] via-[#03cc81] via-[#81ffd0] to-[#191919]" />
        <div className="h-[2px] w-full max-w-[1440px] bg-gradient-to-b from-[#191919] via-[#03cc81] via-[#81ffd0] to-[#191919]" />

        <section className="relative w-full overflow-hidden bg-[#191919] pt-[100px]">
          {/* Top Left Glow - Copied from Ecosystem section */}
          <div
            className="absolute left-0 top-0 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-70 blur-[90px] pointer-events-none mix-blend-screen"
            style={{
              background:
                "radial-gradient(circle, rgba(255,255,255,0.9) 0%, #00e38e 50%, rgba(0,227,142,0) 70%)",
            }}
          />

          <div className="relative z-10 mx-auto flex w-full max-w-[1440px] flex-col items-center gap-12 px-6 text-center sm:px-10">
            <h2 className="mx-auto max-w-[800px] text-[28px] font-semibold leading-[1.2] sm:text-[40px]">
              <span className="text-[#00e38e]">
                Conoce todas nuestras funcionalidades
              </span>{" "}
              y<br className="hidden sm:block" /> beneficios {" "}
            </h2>
            <div className="flex flex-col items-center justify-center gap-7 md:flex-row md:items-stretch">
              {/* Card 1 - Manejo de usuarios */}
              <div
                className="flex h-auto w-full max-w-[408px] flex-col items-center gap-6 rounded-2xl border border-[#00e38e] bg-[#0a0a0a] px-7 py-10 transition-transform hover:-translate-y-1 md:h-[600px]"
                style={{ boxShadow: "0 0 10px rgba(0, 227, 142, 0.05)" }}
              >
                <div className="flex flex-col items-center gap-3 text-center">
                  <span className="text-[24px] font-semibold text-[#00e38e]">
                    Manejo de usuarios
                  </span>
                  <span className="text-[15px] text-[#d9d9d9]">
                    Visualiza, agrega y elimina usuarios de la plataforma del
                    condominio.
                  </span>
                </div>
                <div className="flex flex-1 w-full flex-col justify-between gap-2 text-left text-[22px] text-white">
                  {[
                    { icon: Megaphone, text: "Alertas y emergencias" },
                    { icon: Key, text: "Gestión de accesos" },
                    {
                      icon: ArrowRightLeft,
                      text: "Registro de entradas y salidas",
                    },
                    {
                      icon: FileText,
                      text: "Generación de informes de asistencia",
                    },
                    { icon: Bell, text: "Notificaciones de eventos" },
                    {
                      icon: Eye,
                      text: "Monitoreo de seguridad en tiempo real",
                    },
                    {
                      icon: Scan,
                      text: "Integración con sistemas de identificación",
                    },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <item.icon className="h-6 w-6 shrink-0 text-[#00e38e]" />
                      <span className="text-[22px] leading-relaxed">
                        {item.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card 2 - Administración de usuarios (Featured) */}
              <div
                className="flex h-auto w-full max-w-[408px] flex-col items-center gap-6 rounded-2xl border border-[#00e38e] px-7 py-10 transition-transform hover:-translate-y-1 md:h-[660px] relative -top-6"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(0, 227, 142, 0.08) 0%, rgba(0, 0, 0, 0) 100%)",
                  boxShadow: "0 0 20px rgba(0, 227, 142, 0.1)",
                }}
              >
                <div className="flex flex-col items-center gap-3 text-center">
                  <span className="text-[24px] font-semibold text-white">
                    Administración de usuarios
                  </span>
                  <span className="text-[15px] text-[#d9d9d9]">
                    Gestiona la creación, modificación y eliminación de usuarios
                    en tu comunidad.
                  </span>
                </div>
                <div className="flex flex-1 w-full flex-col justify-between gap-2 text-left text-[22px] text-white">
                  {[
                    { icon: Clock, text: "Atención y soporte 24/7" },
                    {
                      icon: ArrowUpDown,
                      text: "Control de ingresos y egresos",
                    },
                    { icon: Calculator, text: "Contabilidad avanzada" },
                    { icon: Users, text: "Red social interna" },
                    { icon: Lock, text: "Seguridad y control de acceso" },
                    {
                      icon: Settings,
                      text: "Plataforma personalizable a tus necesidades.",
                    },
                    {
                      icon: Star,
                      text: "Experiencia única para cada usuario.",
                    },
                    { icon: ShieldCheck, text: "Control de permisos y roles" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <item.icon className="h-6 w-6 shrink-0 text-[#00e38e]" />
                      <span className="text-[22px] leading-relaxed">
                        {item.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card 3 - Control de usuarios */}
              <div
                className="flex h-auto w-full max-w-[408px] flex-col items-center gap-6 rounded-2xl border border-[#00e38e] bg-[#0a0a0a] px-7 py-10 transition-transform hover:-translate-y-1 md:h-[600px]"
                style={{ boxShadow: "0 0 10px rgba(0, 227, 142, 0.05)" }}
              >
                <div className="flex flex-col items-center gap-3 text-center">
                  <span className="text-[24px] font-semibold text-[#00e38e]">
                    Control de usuarios
                  </span>
                  <span className="text-[15px] text-[#d9d9d9]">
                    Administra, crea y elimina perfiles de usuarios en el
                    sistema.
                  </span>
                </div>
                <div className="flex flex-1 w-full flex-col justify-between gap-2 text-left text-[22px] text-white">
                  {[
                    { icon: MessageSquareText, text: "Chat interno" },
                    { icon: Calendar, text: "Gestión de reservas" },
                    { icon: Folder, text: "Gestión de documentos" },
                    { icon: GitBranch, text: "Control de versiones" },
                    { icon: Cloud, text: "Almacenamiento en la nube" },
                    { icon: Upload, text: "Colaboración en tiempo real" },
                    { icon: Lock, text: "Seguridad y cifrado" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <item.icon className="h-6 w-6 shrink-0 text-[#00e38e]" />
                      <span className="text-[22px] leading-relaxed">
                        {item.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full bg-gradient-to-b from-[#191919] to-[#063322] py-[100px]">
          <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center px-6 sm:px-10">
            <span className="text-center text-[34px] font-normal text-white uppercase tracking-wide">
              Con la confianza de los mejores
            </span>
          </div>

          <div className="mt-12 flex w-full flex-nowrap items-center justify-center gap-8 overflow-x-auto px-6 md:gap-12 no-scrollbar">
            {[
              "logo-hacienda-del-urubo.png",
              "logo-phantom.png",
              "logo-elite-sirari.png",
              "logo-onix-art.png",
              "logo-infinity.png",
              "logo-legendary.png",
              "logo-el-greco.png",
              "logo-bosques-de-la-colina.png",
            ].map((logo, index) => (
              <div
                key={index}
                className="relative h-[72px] w-[180px] flex-shrink-0"
              >
                <Image
                  src={`/images/condominios/${logo}`}
                  alt={logo.replace("logo-", "").replace(".png", "")}
                  fill
                  className="object-contain brightness-0 invert opacity-80 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
        </section>

        <section className="w-full max-w-[1440px] bg-[#191919] px-6 py-10 sm:px-10 sm:rounded-t-[40px]">
          <div className="flex h-full flex-col justify-center gap-10 lg:h-[520px] lg:flex-row">
            <div className="relative flex w-full lg:w-[520px] items-end justify-center rounded-[28px] border border-[#00e38e] bg-[#0f2b22] overflow-hidden">
              <Image
                src="/images/condominios/book.png"
                alt="3 Plantillas de cobranza"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex w-full lg:w-[720px] items-center justify-center rounded-[28px] border border-[#323232] bg-[#222222] p-7">
              <div className="flex flex-col items-center gap-7 text-center">
                <div className="flex flex-col gap-4">
                  <span className="text-[28px] font-semibold leading-[1.2] sm:text-[40px]">
                    Descubre las 3 Plantillas de cobranza que verdaderamente
                    funcionan para reducir la mora
                  </span>
                  <span className="text-[18px] font-medium text-[#d9d9d9]">
                    Descarga nuestro PDF haciendo click abajo
                  </span>
                </div>
                <div className="rounded-full border border-[#00e38e] bg-[#00e38e] px-8 py-4">
                  <span className="text-[16px] font-semibold text-[#191919]">
                    Descargar PDF
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full max-w-[1440px] bg-[#191919] px-6 py-10 sm:px-10">
          <div className="flex flex-col gap-10 lg:h-[642px] lg:flex-row lg:items-center">
            <div className="flex flex-1 flex-col gap-7">
              <div className="flex flex-col gap-4">
                <span className="text-[28px] font-semibold leading-[1.2] sm:text-[40px]">
                  Información organizada, desiciones efectivas
                </span>
                <span className="text-[18px] font-medium text-[#d9d9d9]">
                  Visualiza toda la información de tu condominio en un solo
                  lugar.
                </span>
              </div>
              <div className="rounded-full border border-[#00e38e] bg-[#00e38e] px-8 py-4">
                <span className="text-[16px] font-semibold text-[#191919]">
                  Contáctanos
                </span>
              </div>
            </div>
            <div className="flex flex-1 justify-center">
              <Image
                src="/images/mock/info-illustration.svg"
                alt="Panel de información"
                width={664}
                height={520}
                className="object-contain"
              />
            </div>
          </div>
        </section>

        <footer className="w-full max-w-[1440px] border-t border-[#535353] bg-[#191919] px-6 py-12 sm:px-10">
          <div className="grid gap-12 md:grid-cols-4">
            <div className="flex flex-col gap-4 md:col-span-2">
              <span className="text-[20px] font-semibold text-[#00e38e]">
                Condaty
              </span>
              <span className="text-[14px] text-[#d9d9d9]">
                Gestión de condominios simplificada para administradores,
                guardias y residentes.
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-[14px] font-medium text-[#00e38e]">
                Soporte
              </span>
              <span className="text-[16px] text-white">
                Preguntas frecuentes
              </span>
              <span className="text-[16px] text-white">
                Políticas de privacidad
              </span>
              <span className="text-[16px] text-white">
                Términos y condiciones
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-[14px] font-medium text-[#00e38e]">
                Contacto
              </span>
              <span className="text-[16px] text-white">hola@condaty.com</span>
              <span className="text-[16px] text-white">+591 700 12345</span>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
