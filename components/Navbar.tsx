"use client";

import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "الرئيسية", href: "#hero" },
    { name: "نبذة", href: "#about" },
    { name: "الإنجازات", href: "#achievements" },
    { name: "الصور", href: "#gallery" },
    { name: "المسيرة", href: "#timeline" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-red-900/10 bg-black/70 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

          {/* Logo */}
          <a
            href="#hero"
            className="group flex flex-col leading-none transition"
          >
            <span className="text-lg font-black text-white transition group-hover:text-red-500">
              أمنية سمرة
            </span>

            <span className="mt-1 text-[9px] uppercase tracking-[0.35em] text-red-500">
              OMNIA SAMRA
            </span>
          </a>

          {/* Desktop Menu */}
          <nav className="hidden items-center gap-8 md:flex">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-300 transition duration-300 hover:text-red-500"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Social */}
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center rounded-full border border-red-900/20 px-4 py-2 text-sm text-gray-200 transition hover:border-red-500 hover:bg-red-500/10 hover:text-white"
          >
            Instagram
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden text-white"
            aria-label="Open Menu"
          >
            <svg
              width="28"
              height="28"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 z-[60] transition-all duration-300 ${
          open
            ? "pointer-events-auto bg-black/80 opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        {/* Drawer */}
        <div
          className={`absolute right-0 top-0 h-full w-72 border-l border-red-900/20 bg-black transition-transform duration-300 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-red-900/10 p-6">
            <div>
              <div className="text-lg font-black text-white">
                أمنية سمرة
              </div>

              <div className="mt-1 text-[9px] uppercase tracking-[0.35em] text-red-500">
                OMNIA SAMRA
              </div>
            </div>

            <button
              onClick={() => setOpen(false)}
              className="text-3xl text-white"
            >
              ×
            </button>
          </div>

          {/* Links */}
          <div className="flex flex-col p-6">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-red-900/10 py-4 text-white transition hover:text-red-500"
              >
                {link.name}
              </a>
            ))}

<a
  href="https://www.facebook.com/omniasamratennis"
  target="_blank"
  rel="noopener noreferrer"
  className="hidden md:flex items-center rounded-full border border-red-900/20 px-4 py-2 text-sm text-gray-200 transition hover:border-red-500 hover:bg-red-500/10 hover:text-white"
>
  Facebook
</a>
          </div>
        </div>
      </div>
    </>
  );
}