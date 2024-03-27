"use client";
import React, { useState } from "react";
import Logo from "./shared/Logo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MobileSidebar from "./MobileSidebar";
import { navLinks } from "./data";
import clsx from "clsx";

export default function Navbar() {
  const pathname = usePathname();
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <header className="absolute top-0 w-full px-3 py-4 z-[5]">
      <div className="max-w-[1820px] mx-auto">
        <nav className="w-full flex items-center justify-between">
          <Logo />
          {!pathname.includes("/auth") && (
            <>
              <div className={clsx("w-10 grid place-content-center ml-6 xl:hidden")}>
                <div
                  className="flex flex-col items-end justify-center rounded-md transition duration-100 p-2 space-y-[7px] cursor-pointer group h-full"
                  onClick={() => setIsExpanded(true)}>
                  <span
                    className={`w-6 relative h-[3px] bg-gray-300 block transition rounded-full duration-300 ${
                      isExpanded && "rotate-[135deg] translate-y-[9px] w-5"
                    }`}></span>
                  <span
                    className={`w-4 relative h-[3px] bg-gray-300 transition  rounded-full duration-100 opacity-100 ${
                      isExpanded && "opacity-0 invisible"
                    } `}></span>
                  <span
                    className={`w-6 relative h-[3px] bg-gray-300 rounded-full transition duration-300 ${
                      isExpanded && "-rotate-[135deg] -translate-y-[9px] w-5"
                    }`}></span>
                </div>
              </div>
              <div className="hidden xl:flex items-center gap-x-12">
                <div className="">
                  <ul className="text-gray-300 flex gap-x-10">
                    {navLinks.map((link, index) => (
                      <Link href={link.href} key={index}>
                        <div
                          className={`flex flex-col gap-[10px] items-center cursor-pointer ${pathname === link.href && " text-primary-orange font-semibold"}`}>
                          <h1 className="whitespace-nowrap">{link.label}</h1>
                          <div
                            className={`w-2.5 h-2.5 rounded-full bg-gradient-to-r from-primary-purple to-primary-blue absolute mt-8 transition duration-300 ${
                              pathname === link.href ? "visible" : "invisible"
                            }`}
                          />
                        </div>
                      </Link>
                    ))}
                  </ul>
                </div>
                <div className="flex gap-x-5">
                  <div className="flex gap-x-4">
                    <Link href="/auth/signin">
                      <button className="bg-primary-orange py-3 px-8 rounded-lg text-primary-black font-semibold uppercase text-sm">Log in</button>
                    </Link>
                  </div>
                </div>
              </div>
            </>
          )}
        </nav>
      </div>
      <MobileSidebar onClose={() => setIsExpanded(false)} isOpen={isExpanded} />
    </header>
  );
}
