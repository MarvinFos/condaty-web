"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <header className="sticky top-0 z-50 flex w-full justify-center bg-[#191919] border-b border-[#535353]">
      <div className="flex w-full justify-between items-center px-8 md:px-16 lg:px-24 py-0.5">
        <div className="flex h-[82px] grow items-center justify-center">
          <div className="flex grow items-center justify-between">
            <Image
              src="/images/logo_condaty.png"
              alt="Condaty"
              width={260}
              height={40}
              className="h-[40px] w-[260px] object-contain"
            />
            <div className="hidden md:flex items-center justify-center gap-8">
              <nav className="flex items-center gap-6">
                <Link href="/">
                  <div className="flex items-center justify-center gap-2 cursor-pointer">
                    <span
                      className={`text-base font-medium hover:text-[#00e38e] transition-colors ${
                        isActive("/") ? "text-[#00e38e]" : "text-white"
                      }`}
                    >
                      Inicio
                    </span>
                  </div>
                </Link>
                <Link href="/administration">
                  <div className="flex items-center justify-center gap-2 cursor-pointer">
                    <span
                      className={`text-base font-medium hover:text-[#00e38e] transition-colors ${
                        isActive("/administration")
                          ? "text-[#00e38e]"
                          : "text-white"
                      }`}
                    >
                      Administración
                    </span>
                  </div>
                </Link>
                <div className="flex items-center justify-center gap-2 cursor-pointer">
                  <span className="text-base font-medium text-white hover:text-[#00e38e] transition-colors">
                    Residentes
                  </span>
                </div>
                <div className="flex items-center justify-center gap-2 cursor-pointer">
                  <span className="text-base font-medium text-white hover:text-[#00e38e] transition-colors">
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
  );
}
