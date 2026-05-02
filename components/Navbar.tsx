"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

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
      style={{
        backgroundColor: "#F4DF67",
        boxShadow: "0 2px 8px rgba(0,0,0,.08)",
        whiteSpace: "nowrap",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "min(calc(100% - 180px), 1110px)",
          margin: "0 auto",
          height: "84px",
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            textDecoration: "none",
            minWidth: "200px",
          }}
        >
          <Image
            src="/Logo Nonoman Galuh 1.png"
            alt="Logo Nonoman Galuh"
            width={22}
            height={30}
            style={{ objectFit: "contain" }}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              lineHeight: "1.2",
            }}
          >
            <span
              className="decorative-font"
              style={{
                fontSize: "9px",
                color: "#7a6a54",
                letterSpacing: ".04em",
                fontWeight: 400,
              }}
            >
              Platform Kebudayaan
            </span>
            <span
              className="decorative-font"
              style={{
                fontSize: "20px",
                fontWeight: 400,
                color: "#2c2416",
                lineHeight: 1,
              }}
            >
              Nonoman Galuh
            </span>
          </div>
        </Link>

        {/* Nav links - desktop */}
        <nav
          className="hidden md:flex"
          style={{ display: "flex", alignItems: "center", gap: "26px" }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="ui-font"
              style={{
                fontSize: "11px",
                fontWeight: 200,
                color: "#2c2416",
                letterSpacing: ".03em",
                textTransform: "uppercase",
                borderBottom: "none",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                gap: "2px",
              }}
            >
              {link.label}
              {link.dropdown && <span style={{ fontSize: "10px" }}>▾</span>}
            </Link>
          ))}
        </nav>

        {/* Right side */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "22px",
            minWidth: "200px",
            justifyContent: "flex-end",
          }}
        >
          <button
            aria-label="Cari"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "#2c2416",
              display: "flex",
              alignItems: "center",
            }}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
          </button>

          <Link
            href="/masuk"
            className="hidden md:flex"
            style={{
              background: "#0e7566",
              color: "#fffef9",
              borderRadius: "7px",
              padding: "10px 22px",
              fontSize: "12px",
              fontWeight: 600,
              alignItems: "center",
              gap: "6px",
              textDecoration: "none",
            }}
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
            Masuk
          </Link>

          {/* Mobile hamburger */}
          <button
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "#2c2416",
              fontSize: "22px",
              lineHeight: 1,
            }}
            aria-label="Buka menu"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden"
          style={{
            background: "#F4DF67",
            borderTop: "1px solid rgba(44,36,22,.15)",
            padding: "12px 24px 16px",
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="label-font"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "10px 0",
                fontSize: "13px",
                fontWeight: link.active ? 700 : 500,
                color: "#2c2416",
                textTransform: "uppercase",
                letterSpacing: ".04em",
                borderBottom: "1px solid rgba(44,36,22,.08)",
                textDecoration: "none",
              }}
            >
              {link.label}
              {link.dropdown && <span style={{ fontSize: "10px" }}>▾</span>}
            </Link>
          ))}
          <Link
            href="/masuk"
            onClick={() => setMenuOpen(false)}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "6px",
              marginTop: "12px",
              padding: "10px",
              background: "#0e7566",
              color: "#fffef9",
              borderRadius: "6px",
              fontSize: "13px",
              fontWeight: 600,
              textDecoration: "none",
            }}
          >
            Masuk
          </Link>
        </div>
      )}
    </header>
  );
}
