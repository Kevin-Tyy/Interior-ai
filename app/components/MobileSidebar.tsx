"use client";

import Link from "next/link";
import { useRef, useEffect } from "react";
import Logo from "./shared/Logo";
import { usePathname } from "next/navigation";
import { navLinks } from "./data";
interface Props {
  onClose: () => void;
  isOpen?: boolean;
}
export default function MobileSidebar({ onClose, isOpen }: Props) {
  const mainRef = useRef<HTMLElement | null>(null);
  const handleClickOutside = (event: any) => {
    if (mainRef.current && !mainRef.current.contains(event.target)) {
      onClose();
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const pathname = usePathname();
  return (
    <nav
      ref={mainRef}
      className={`${
        isOpen ? "w-[300px]" : "w-0"
      } overflow-hidden  fixed right-0 bg-[#1E1E26] text-white top-0 bottom-0 h-screen shadow-2xl z-[9999999] transition-[width] duration-500`}>
      <div className="pl-8 flex flex-col justify-between pt-6 pb-10 px-4 h-full">
        <div className="flex items-center justify-between w-full">
          <Logo isMobile />
          <div className="w-10 grid place-content-center ml-6">
            <div
              className="flex flex-col items-end justify-center rounded-md transition duration-100 p-2 space-y-[7px] cursor-pointer  group"
              onClick={onClose}>
              <span
                className={`w-5 relative h-[2px] bg-gray-300 block transition rounded-full duration-300 ${
                  isOpen && "rotate-[135deg] translate-y-[9px] w-5"
                }`}></span>
              <span
                className={`w-4 relative h-[2px] bg-gray-300 transition  rounded-full duration-100 opacity-100 ${isOpen && "!opacity-0 invisible"} `}></span>
              <span
                className={`w-5 relative h-[2px] bg-gray-300 rounded-full transition duration-300 ${
                  isOpen && "-rotate-[135deg] -translate-y-[9px] w-5"
                }`}></span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-10">
          {navLinks.map((link, index) => (
            <Link href={link.href} key={index}>
              <div
                onClick={onClose}
                className={`flex gap-[10px] items-center cursor-pointer text-gray-300 ${pathname === link.href && "!text-primary-orange font-semibold"}`}>
                <h1 className="whitespace-nowrap">{link.label}</h1>
              </div>
            </Link>
          ))}
        </div>
        <div className="w-full">
          <Link href="/auth/signin" className="w-full">
            <button className="bg-primary-orange py-3 px-8 w-full rounded-lg text-primary-black font-semibold uppercase text-sm">Log in</button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
