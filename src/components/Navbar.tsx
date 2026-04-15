"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-lg shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center">
          <Image
            src="/logo.png"
            alt="JÆJA!"
            width={120}
            height={57}
            priority
          />
        </a>
        <a
          href="#skraning"
          className={`px-5 py-2 rounded-full text-sm font-bold transition-all duration-200 ${
            scrolled
              ? "bg-green-400 text-white hover:bg-green-500 shadow-md shadow-green-400/20"
              : "bg-white/90 text-green-600 hover:bg-white shadow-md"
          }`}
        >
          Skrá mig
        </a>
      </div>
    </nav>
  );
}
