"use client";

import Link from "next/link";
import { useState } from "react";
import { Search, ChevronDown, Menu, X, LogIn } from "lucide-react";

const navLinks = [
  { label: "BERANDA", href: "/", active: true, dropdown: false },
  { label: "PROFIL", href: "/profil", dropdown: true },
  { label: "PROGRAM", href: "/program", dropdown: true },
  { label: "DATA", href: "/data", dropdown: false },
  { label: "GALERI", href: "/galeri", dropdown: false },
  { label: "DIGITAL LIBRARY", href: "/digital-library", dropdown: false },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className="w-full sticky top-0 z-50"
      style={{ backgroundColor: "#F4DF67" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16 gap-8">
          {/* Logo */}
          <Link
            href="/"
            className="shrink-0 flex flex-col text-center leading-none"
          >
            <span
              className="text-[10px] font-medium tracking-wide"
              style={{
                fontFamily: "var(--font-inter)",
                color: "rgba(27,45,20,0.75)",
              }}
            >
              Platform Kebudayaan
            </span>
            <span
              className="text-2xl font-normal tracking-wide"
              style={{
                fontFamily: "var(--font-logo)",
                color: "#1B2D14",
              }}
            >
              Nonoman Galuh
            </span>
          </Link>

          {/* Desktop Nav — center */}
          <nav className="hidden md:flex items-center gap-0.5 flex-1 justify-center">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`
                  flex items-center gap-0.5 px-3 py-1.5 text-[11px] tracking-wider rounded
                  transition-colors hover:bg-black/10
                  ${link.active ? "font-bold" : "font-medium"}
                `}
                style={{
                  fontFamily: "var(--font-inter)",
                  color: "#1B2D14",
                }}
              >
                {link.label}
                {link.dropdown && <ChevronDown size={11} strokeWidth={2.5} />}
              </Link>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-2 ml-auto md:ml-0 shrink-0">
            <button
              className="p-2 rounded hover:bg-black/10 transition-colors"
              style={{ color: "#1B2D14" }}
              aria-label="Cari"
            >
              <Search size={16} strokeWidth={2} />
            </button>

            <Link
              href="/masuk"
              className="hidden md:inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold transition-colors hover:opacity-90"
              style={{
                backgroundColor: "#1A6B4A",
                color: "white",
                fontFamily: "var(--font-inter)",
              }}
            >
              <LogIn size={13} strokeWidth={2} />
              Masuk
            </Link>

            {/* Mobile hamburger */}
            <button
              className="md:hidden p-1.5"
              onClick={() => setMenuOpen(!menuOpen)}
              style={{ color: "#1B2D14" }}
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div
            className="md:hidden py-3 border-t"
            style={{ borderColor: "rgba(27,45,20,0.2)" }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center justify-between px-2 py-2.5 text-sm hover:bg-black/10 rounded"
                style={{
                  color: "#1B2D14",
                  fontFamily: "var(--font-inter)",
                  fontWeight: link.active ? 700 : 500,
                }}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
                {link.dropdown && <ChevronDown size={14} />}
              </Link>
            ))}
            <div className="pt-3 px-2">
              <Link
                href="/masuk"
                className="flex items-center justify-center gap-1.5 w-full py-2 rounded-full text-sm font-semibold"
                style={{
                  backgroundColor: "#1A6B4A",
                  color: "white",
                  fontFamily: "var(--font-inter)",
                }}
                onClick={() => setMenuOpen(false)}
              >
                <LogIn size={14} />
                Masuk
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
