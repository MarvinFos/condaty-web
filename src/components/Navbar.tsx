"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import ContactModal from "./ContactModal";

export default function Navbar() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  const navLinks = [
    { name: "Inicio", path: "/" },
    { name: "Administración", path: "/administration" },
    { name: "Residentes", path: "/residents" },
    { name: "Guardias", path: "/guards" },
  ];

  return (
    <header className="sticky top-0 z-50 flex w-full justify-center bg-[#191919] border-b border-[#535353]">
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        variant="contact"
      />
      <div className="flex w-full justify-between items-center px-6 md:px-10 lg:px-20 xl:px-36 py-2 md:py-1">
        <div className="flex h-[60px] md:h-[82px] grow items-center justify-between">
          <Link href="/">
            <Image
              src="/images/logo_condaty.png"
              alt="Condaty"
              width={260}
              height={40}
              className="h-[30px] w-[180px] md:h-[40px] md:w-[260px] object-contain cursor-pointer"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center justify-center gap-4 lg:gap-9">
            <nav className="flex items-center gap-4 lg:gap-7">
              {navLinks.map((link) => (
                <Link key={link.path} href={link.path}>
                  <div className="flex items-center justify-center gap-2 cursor-pointer">
                    <span
                      className={`text-sm lg:text-base font-medium hover:text-[#00e38e] transition-colors duration-200 ${
                        isActive(link.path) ? "text-[#00e38e]" : "text-white"
                      }`}
                    >
                      {link.name}
                    </span>
                  </div>
                </Link>
              ))}
            </nav>
            <div className="flex items-center gap-3">
              <a
                href="https://drive.google.com/file/d/1kL3ua0hR53nINtdSgYVvv7IAlmvZJas2/view"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 lg:h-12 flex-col items-center justify-center gap-2.5 rounded-[10px] border border-solid border-[#00e38e] bg-[#00e38e] px-4 lg:px-6 hover:bg-[#00c97e] transition-colors duration-200"
              >
                <span className="text-center text-xs lg:text-[16px] font-semibold text-[#191919]">
                  RECURSOS GRATUITOS
                </span>
              </a>
              <a
                href="https://admin.condaty.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 lg:h-12 flex-col items-center justify-center gap-2.5 rounded-[10px] border border-solid border-[#d9d9d9] bg-[#292929] px-4 lg:px-6 hover:bg-[#333] transition-colors duration-200"
              >
                <span className="text-center text-xs lg:text-[16px] font-semibold text-white">
                  Ingresar
                </span>
              </a>
              <button
                onClick={() => setIsContactModalOpen(true)}
                className="flex h-10 lg:h-12 flex-col items-center justify-center gap-2.5 rounded-[10px] border border-solid border-[#00e38e] bg-[#00e38e] px-4 lg:px-6 hover:bg-[#00c97e] transition-colors duration-200"
              >
                <span className="text-center text-xs lg:text-[16px] font-semibold text-[#191919]">
                  Contáctanos
                </span>
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="absolute top-[61px] left-0 w-full bg-[#191919] border-b border-[#535353] md:hidden flex flex-col p-6 gap-4 shadow-xl h-[calc(100vh-61px)] overflow-y-auto">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                onClick={() => setIsMenuOpen(false)}
              >
                <span
                  className={`text-lg font-medium hover:text-[#00e38e] transition-colors duration-200 ${
                    isActive(link.path) ? "text-[#00e38e]" : "text-white"
                  }`}
                >
                  {link.name}
                </span>
              </Link>
            ))}
          </nav>
          <div className="flex flex-col gap-3 mt-4">
            <a
              href="https://drive.google.com/file/d/1kL3ua0hR53nINtdSgYVvv7IAlmvZJas2/view"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 items-center justify-center rounded-[10px] border border-solid border-[#00e38e] bg-[#00e38e] px-6"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="text-center text-[16px] font-semibold text-[#191919]">
                RECURSOS GRATUITOS
              </span>
            </a>
            <a
              href="https://admin.condaty.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 items-center justify-center rounded-[10px] border border-solid border-[#d9d9d9] bg-[#292929] px-6"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="text-center text-[16px] font-semibold text-white">
                Ingresar
              </span>
            </a>
            <button
              onClick={() => {
                setIsContactModalOpen(true);
                setIsMenuOpen(false);
              }}
              className="flex h-12 items-center justify-center rounded-[10px] border border-solid border-[#00e38e] bg-[#00e38e] px-6"
            >
              <span className="text-center text-[16px] font-semibold text-[#191919]">
                Contáctanos
              </span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
