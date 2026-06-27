"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

const GALERI = [
  { src: "https://picsum.photos/seed/ng-g01/1200/700", alt: "Pertunjukan Wayang Golek" },
  { src: "https://picsum.photos/seed/ng-g02/1200/700", alt: "Musik Kacapi Suling" },
  { src: "https://picsum.photos/seed/ng-g03/1200/700", alt: "Tari Jaipong" },
  { src: "https://picsum.photos/seed/ng-g04/1200/700", alt: "Rapat Komunitas Budaya" },
  { src: "https://picsum.photos/seed/ng-g05/1200/700", alt: "Pameran Kain Tenun" },
  { src: "https://picsum.photos/seed/ng-g06/1200/700", alt: "Upacara Adat Ngalaksa" },
  { src: "https://picsum.photos/seed/ng-g07/1200/700", alt: "Pelatihan Angklung" },
  { src: "https://picsum.photos/seed/ng-g08/1200/700", alt: "Arak-arakan Budaya Galuh" },
];

export default function GaleriCarousel() {
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(true);

  const goTo = useCallback((idx: number) => {
    setVisible(false);
    setTimeout(() => {
      setCurrent(idx);
      setVisible(true);
    }, 280);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => {
        const next = (prev + 1) % GALERI.length;
        setVisible(false);
        setTimeout(() => setVisible(true), 280);
        return next;
      });
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const item = GALERI[current];

  return (
    <section
      style={{
        background: "#faf4e8",
        paddingTop: "72px",
        paddingBottom: "72px",
      }}
    >
      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "0 32px" }}>
        {/* Label section */}
        <div style={{ display: "flex", alignItems: "center", gap: "24px", marginBottom: "28px" }}>
          <h2
            className="serif-title"
            style={{ fontSize: "clamp(18px, 3vw, 24px)", fontWeight: 400, color: "#6f5f4c", whiteSpace: "nowrap", margin: 0 }}
          >
            Galeri Kegiatan
          </h2>
          <div style={{ height: "1px", flex: 1, background: "rgba(209,78,31,.32)" }} />
          <span className="ui-font" style={{ fontSize: "12px", color: "#9a8878", flexShrink: 0 }}>
            {current + 1} / {GALERI.length}
          </span>
        </div>

        {/* Card utama */}
        <div
          style={{
            position: "relative",
            borderRadius: "20px",
            overflow: "hidden",
            boxShadow: "0 8px 40px rgba(44,36,22,.14)",
            aspectRatio: "16/9",
            background: "#2c2416",
          }}
        >
          {/* Foto */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              opacity: visible ? 1 : 0,
              transition: "opacity 0.28s ease",
            }}
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              sizes="(max-width: 640px) 100vw, 900px"
              style={{ objectFit: "cover" }}
              priority={current === 0}
            />
          </div>

          {/* Overlay gradient */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(to top, rgba(44,36,22,.82) 0%, rgba(44,36,22,.2) 45%, transparent 100%)",
              zIndex: 1,
            }}
          />

          {/* Caption */}
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              padding: "28px 28px 24px",
              zIndex: 2,
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(8px)",
              transition: "opacity 0.28s ease, transform 0.28s ease",
            }}
          >
            <span
              className="serif-title"
              style={{
                fontSize: "clamp(14px, 2.5vw, 18px)",
                color: "#fffef9",
                fontWeight: 600,
                lineHeight: 1.3,
                display: "block",
              }}
            >
              {item.alt}
            </span>
            <span
              className="ui-font"
              style={{ fontSize: "11px", color: "rgba(255,255,255,.55)", marginTop: "4px", display: "block" }}
            >
              Dokumentasi Kegiatan Nonoman Galuh
            </span>
          </div>

          {/* Tombol navigasi */}
          <button
            onClick={() => goTo((current - 1 + GALERI.length) % GALERI.length)}
            aria-label="Foto sebelumnya"
            style={{
              position: "absolute",
              left: "14px",
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 3,
              width: "36px",
              height: "36px",
              borderRadius: "50%",
              background: "rgba(255,255,255,.18)",
              border: "1px solid rgba(255,255,255,.3)",
              backdropFilter: "blur(4px)",
              color: "#fffef9",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          <button
            onClick={() => goTo((current + 1) % GALERI.length)}
            aria-label="Foto berikutnya"
            style={{
              position: "absolute",
              right: "14px",
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 3,
              width: "36px",
              height: "36px",
              borderRadius: "50%",
              background: "rgba(255,255,255,.18)",
              border: "1px solid rgba(255,255,255,.3)",
              backdropFilter: "blur(4px)",
              color: "#fffef9",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>

        {/* Progress bar + dots */}
        <div style={{ marginTop: "20px", display: "flex", flexDirection: "column", alignItems: "center", gap: "12px" }}>
          {/* Progress bar */}
          <div style={{ width: "100%", height: "2px", background: "rgba(209,78,31,.15)", borderRadius: "999px", overflow: "hidden" }}>
            <div
              style={{
                height: "100%",
                width: `${((current + 1) / GALERI.length) * 100}%`,
                background: "#c8341f",
                borderRadius: "999px",
                transition: "width 0.28s ease",
              }}
            />
          </div>

          {/* Dots */}
          <div style={{ display: "flex", gap: "6px", alignItems: "center" }}>
            {GALERI.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Foto ${i + 1}`}
                style={{
                  width: i === current ? "20px" : "6px",
                  height: "6px",
                  borderRadius: "999px",
                  background: i === current ? "#c8341f" : "rgba(200,52,31,.25)",
                  border: "none",
                  cursor: "pointer",
                  padding: 0,
                  transition: "width 0.28s ease, background 0.28s ease",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
