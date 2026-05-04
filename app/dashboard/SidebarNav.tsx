"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { logout } from "./actions";

const menuItems = [
  { label: "Berita & Informasi", icon: "📰", href: "/dashboard/berita" },
  { label: "Artikel Budaya", icon: "📜", href: "/dashboard/artikel" },
  { label: "Agenda Budaya", icon: "📅", href: "/dashboard/agenda" },
  { label: "Kanal YouTube", icon: "▶️", href: "/dashboard/youtube" },
  { label: "Wisata & Tokoh", icon: "🗺️", href: "/dashboard/tokoh" },
  { label: "Rak Buku", icon: "📚", href: "/dashboard/buku" },
  { label: "Tim Pengembang", icon: "👥", href: "/dashboard/tim" },
];

export default function SidebarNav({ email }: { email: string }) {
  const pathname = usePathname();

  return (
    <aside
      style={{
        width: "260px",
        flexShrink: 0,
        backgroundColor: "#2c2416",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Logo */}
      <div style={{ padding: "28px 24px 20px", borderBottom: "1px solid rgba(255,255,255,.1)" }}>
        <Link href="/dashboard" style={{ textDecoration: "none" }}>
          <span
            className="decorative-font"
            style={{ fontSize: "8px", color: "rgba(255,255,255,.5)", letterSpacing: ".06em", display: "block" }}
          >
            Portal Admin
          </span>
          <span
            className="decorative-font"
            style={{ fontSize: "18px", fontWeight: 400, color: "#fffef9", lineHeight: 1.2, display: "block", marginTop: "2px" }}
          >
            Nonoman Galuh
          </span>
        </Link>
      </div>

      {/* Admin info */}
      <div
        style={{
          padding: "16px 24px",
          borderBottom: "1px solid rgba(255,255,255,.08)",
          display: "flex",
          alignItems: "center",
          gap: "12px",
        }}
      >
        <div
          style={{
            width: "36px",
            height: "36px",
            borderRadius: "50%",
            backgroundColor: "#c8341f",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            fontSize: "14px",
            color: "#fffef9",
            fontWeight: 700,
          }}
        >
          {email[0]?.toUpperCase() ?? "A"}
        </div>
        <div style={{ overflow: "hidden" }}>
          <div className="serif-title" style={{ fontSize: "11px", color: "rgba(255,255,255,.5)", marginBottom: "1px" }}>
            Admin
          </div>
          <div
            style={{
              fontSize: "12px",
              color: "#fffef9",
              fontWeight: 600,
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            {email}
          </div>
        </div>
      </div>

      {/* Nav */}
      <nav style={{ padding: "12px", flex: 1 }}>
        {menuItems.map((item) => {
          const active = pathname === item.href || pathname.startsWith(item.href + "/");
          return (
            <Link
              key={item.label}
              href={item.href}
              className="sidebar-link"
              style={active ? { backgroundColor: "rgba(255,255,255,.12)", color: "#fffef9" } : undefined}
            >
              <span style={{ fontSize: "16px", lineHeight: 1 }}>{item.icon}</span>
              {item.label}
            </Link>
          );
        })}
      </nav>

      {/* Logout */}
      <div style={{ padding: "16px 12px", borderTop: "1px solid rgba(255,255,255,.08)" }}>
        <form action={logout}>
          <button type="submit" className="sidebar-logout">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
              <polyline points="16 17 21 12 16 7" />
              <line x1="21" y1="12" x2="9" y2="12" />
            </svg>
            Keluar
          </button>
        </form>
      </div>
    </aside>
  );
}
