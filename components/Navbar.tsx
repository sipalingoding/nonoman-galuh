"use client";

import Link from "next/link";

const navLinks = [
  { label: "BERANDA", href: "/", active: true, dropdown: false },
  { label: "PROFIL", href: "/profil", dropdown: true },
  { label: "PROGRAM", href: "/program", dropdown: true },
  { label: "DATA", href: "/data", dropdown: false },
  { label: "GALERI", href: "/galeri", dropdown: false },
  { label: "DIGITAL LIBRARY", href: "/digital-library", dropdown: false },
];

export default function Navbar() {
  return (
    <header
      className="w-full sticky top-0 z-50"
      style={{
        backgroundColor: "#F4DF67",
        boxShadow: "0 2px 8px rgba(0,0,0,.08)",
      }}
    >
      <div
        className="navbar-w"
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          margin: "0 auto",
          height: "84px",
        }}
      >
        {/* Logo — kiri */}
        <Link
          href="/"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textDecoration: "none",
            flexShrink: 0,
            lineHeight: "1.2",
          }}
        >
          <span
            className="decorative-font"
            style={{ fontSize: "9px", color: "#7a6a54", letterSpacing: ".04em", fontWeight: 400 }}
          >
            Platform Kebudayaan
          </span>
          <span
            className="decorative-font"
            style={{ fontSize: "20px", fontWeight: 400, color: "#2c2416", lineHeight: 1 }}
          >
            Nonoman Galuh
          </span>
        </Link>

        {/* Nav links — tengah, selalu horizontal */}
        <nav
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "24px",
            whiteSpace: "nowrap",
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "11.56px",
                fontWeight: link.active ? 700 : 400,
                color: link.active ? "#000000" : "#555555",
                letterSpacing: ".03em",
                textDecoration: "none",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: "3px",
              }}
            >
              {link.label}
              {link.dropdown && <span style={{ fontSize: "9px" }}>▾</span>}
            </Link>
          ))}
        </nav>

        {/* Kanan: search + masuk */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "16px",
            flexShrink: 0,
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
              padding: "4px",
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
          </button>

          <Link
            href="/masuk"
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "8px",
              background: "#0e7566",
              color: "#fffef9",
              borderRadius: "12px",
              padding: "10px 20px",
              fontSize: "12px",
              fontWeight: 700,
              textDecoration: "none",
              whiteSpace: "nowrap",
            }}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M15 3H19a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H15" />
              <polyline points="10 17 5 12 10 7" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
            Masuk
          </Link>
        </div>
      </div>
    </header>
  );
}
