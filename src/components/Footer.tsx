"use client";

import Image from "next/image";
import Link from "next/link";
import { useModal } from "@/context/ModalContext";

export default function Footer() {
  const { openContactModal } = useModal();

  return (
    <footer className="relative z-20 w-full border-t border-[#535353] bg-[#191919]">
      <div className="mx-auto w-full max-w-[1440px] px-6 py-12 sm:px-10">
        <div className="grid gap-12 md:grid-cols-3">
          <div className="flex flex-col gap-2">
            <span className="text-[14px] font-medium text-[#00e38e]">
              Soporte
            </span>
            <span className="text-[16px] text-white">Preguntas frecuentes</span>
            <Link
              href="/terminos"
              className="text-[16px] text-white hover:text-[#00e38e] transition-colors cursor-pointer"
            >
              Políticas de privacidad
            </Link>
            <Link
              href="/eliminar-cuenta"
              className="text-[16px] text-white hover:text-[#00e38e] transition-colors cursor-pointer"
            >
              Eliminar mi cuenta
            </Link>
            <button
              onClick={() => openContactModal("contact")}
              className="text-[16px] text-white hover:text-[#00e38e] transition-colors cursor-pointer text-left"
            >
              Contactar
            </button>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-[14px] font-medium text-[#00e38e]">
              Contactos
            </span>
            <span className="text-[16px] text-white">hola@condaty.com</span>
            <span className="text-[16px] text-white">(+591) 75847564</span>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-[14px] font-medium text-[#00e38e]">
              Síguenos
            </span>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/condaty.bo/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/images/redsocial/facebook.png"
                  alt="Facebook"
                  width={24}
                  height={24}
                  className="object-contain hover:scale-125 hover:brightness-125 transition-all duration-300 cursor-pointer"
                />
              </a>
              <a
                href="https://www.instagram.com/condaty.bo?igsh=MWh5NHJjOXh4bXpoZg=="
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/images/redsocial/insta.png"
                  alt="Instagram"
                  width={24}
                  height={24}
                  className="object-contain hover:scale-125 hover:brightness-125 transition-all duration-300 cursor-pointer"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/condaty-by-fos-54a58627a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/images/redsocial/linkedin.png"
                  alt="LinkedIn"
                  width={24}
                  height={24}
                  className="object-contain hover:scale-125 hover:brightness-125 transition-all duration-300 cursor-pointer"
                />
              </a>
              <a
                href="https://www.youtube.com/@condatybo"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/images/redsocial/youtube.png"
                  alt="YouTube"
                  width={24}
                  height={24}
                  className="object-contain hover:scale-125 hover:brightness-125 transition-all duration-300 cursor-pointer"
                />
              </a>
              <a
                href="https://www.tiktok.com/@condaty.bo"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/images/redsocial/tiktok.png"
                  alt="TikTok"
                  width={24}
                  height={24}
                  className="object-contain hover:scale-125 hover:brightness-125 transition-all duration-300 cursor-pointer"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-6 border-t border-white/10 pt-4 flex flex-col items-center justify-between gap-4 text-center sm:flex-row">
          <p className="text-sm text-gray-400">
            © 2026 Condaty. Todos los derechos reservados.
          </p>
          <p className="text-sm text-gray-500">Powered by FOS Technologies</p>
        </div>
      </div>
    </footer>
  );
}
