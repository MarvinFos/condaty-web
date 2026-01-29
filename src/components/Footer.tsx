import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full border-t border-[#535353] bg-[#191919]">
      <div className="mx-auto w-full max-w-[1440px] px-6 py-12 sm:px-10">
        <div className="grid gap-12 md:grid-cols-3">
          <div className="flex flex-col gap-2">
            <span className="text-[14px] font-medium text-[#00e38e]">
              Soporte
            </span>
            <span className="text-[16px] text-white">Preguntas frecuentes</span>
            <span className="text-[16px] text-white">
              Políticas de privacidad
            </span>
            <span className="text-[16px] text-white">Eliminar mi cuenta</span>
            <span className="text-[16px] text-white">Contactar</span>
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
              <Image
                src="/images/redsocial/facebook.png"
                alt="Facebook"
                width={24}
                height={24}
                className="object-contain"
              />
              <Image
                src="/images/redsocial/insta.png"
                alt="Instagram"
                width={24}
                height={24}
                className="object-contain"
              />
              <Image
                src="/images/redsocial/linkedin.png"
                alt="LinkedIn"
                width={24}
                height={24}
                className="object-contain"
              />
              <Image
                src="/images/redsocial/youtube.png"
                alt="YouTube"
                width={24}
                height={24}
                className="object-contain"
              />
              <Image
                src="/images/redsocial/tiktok.png"
                alt="TikTok"
                width={24}
                height={24}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
