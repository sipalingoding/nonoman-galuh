"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const KELAS_OPTIONS = [
  "Kelas Aksara",
  "Kelas Bahasa dan Sastra",
  "Kelas Swara (Vokal)",
  "Kelas Gamelan",
  "Kelas Pembuatan Wayang Golek",
  "Kelas Batik",
  "Kelas Film",
];

const INFO_OPTIONS = ["Teman", "Guru", "Media Sosial"];

export default function DaftarPage() {
  const [riwayat, setRiwayat] = useState("");
  const [jenisKelamin, setJenisKelamin] = useState("");
  const [kelas, setKelas] = useState("");
  const [infoSumber, setInfoSumber] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="site-shell">
        <Navbar />
        <section
          className="px-sec"
          style={{
            background: "#faf4e8",
            minHeight: "60vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            paddingTop: "80px",
            paddingBottom: "80px",
          }}
        >
          <div style={{ textAlign: "center", maxWidth: "480px" }}>
            <h2
              className="decorative-font"
              style={{ fontSize: "28px", fontWeight: 400, color: "#4a3f30", marginBottom: "12px" }}
            >
              Terima Kasih!
            </h2>
            <p
              className="serif-title"
              style={{ fontSize: "14px", color: "#7a6a54", fontWeight: 300, lineHeight: 1.7 }}
            >
              Formulir pendaftaran Anda telah berhasil dikirim. Kami akan menghubungi Anda melalui WhatsApp.
            </p>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  return (
    <div className="site-shell">
      <Navbar />

      <section
        className="px-sec"
        style={{ background: "#faf4e8", paddingTop: "56px", paddingBottom: "80px" }}
      >
        <div style={{ maxWidth: "560px", margin: "0 auto" }}>
          <h1
            className="decorative-font"
            style={{
              fontSize: "32px",
              fontWeight: 400,
              color: "#4a3f30",
              marginBottom: "6px",
              lineHeight: 1.2,
            }}
          >
            Form Pendaftaran
          </h1>
          <p
            className="serif-title"
            style={{
              fontSize: "13px",
              color: "#8a7962",
              fontWeight: 300,
              marginBottom: "32px",
            }}
          >
            Pangauban Kawargian Nonoman Galuh — Bale Binekas
          </p>

          <div
            style={{
              borderBottom: "1px solid rgba(209,78,31,.3)",
              marginBottom: "32px",
            }}
          />

          <form
            onSubmit={handleSubmit}
            style={{ display: "flex", flexDirection: "column", gap: "20px" }}
          >
            {/* Nama Lengkap */}
            <Field label="Nama Lengkap" required>
              <input type="text" name="nama" required style={inputStyle} />
            </Field>

            {/* Tempat, Tanggal Lahir */}
            <Field label="Tempat, Tanggal Lahir" required>
              <input
                type="text"
                name="ttl"
                required
                placeholder="Ciamis, 11 Mei 2015"
                style={inputStyle}
              />
            </Field>

            {/* Alamat Domisili */}
            <Field label="Alamat Domisili" required>
              <input type="text" name="alamat" required style={inputStyle} />
            </Field>

            {/* Jenis Kelamin */}
            <Field label="Jenis Kelamin" required>
              <div
                style={{ display: "flex", flexDirection: "column", gap: "9px", paddingTop: "4px" }}
              >
                {["Laki-laki", "Perempuan"].map((opt) => (
                  <label
                    key={opt}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      cursor: "pointer",
                      fontSize: "13.5px",
                      color: "#4a3f30",
                      fontFamily: "var(--font-sans), Inter, sans-serif",
                    }}
                  >
                    <input
                      type="radio"
                      name="jenis_kelamin"
                      value={opt}
                      checked={jenisKelamin === opt}
                      onChange={() => setJenisKelamin(opt)}
                      required
                      style={{ width: "16px", height: "16px", accentColor: "#0e7566", cursor: "pointer" }}
                    />
                    {opt}
                  </label>
                ))}
              </div>
            </Field>

            {/* Usia */}
            <Field label="Usia" required>
              <input
                type="text"
                name="usia"
                required
                placeholder="(20-35)"
                style={inputStyle}
              />
            </Field>

            {/* Nomor Whatsapp */}
            <Field label="Nomor Whatsapp" required>
              <div style={{ position: "relative" }}>
                <input
                  type="tel"
                  name="whatsapp"
                  required
                  placeholder="0812-345-678"
                  style={{ ...inputStyle, paddingRight: "48px" }}
                />
                <span
                  style={{
                    position: "absolute",
                    right: "12px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    fontSize: "16px",
                    pointerEvents: "none",
                  }}
                >
                  🇮🇩
                </span>
              </div>
            </Field>

            {/* Riwayat Organisasi */}
            <Field label="Riwayat Organisasi" required>
              <div style={{ position: "relative" }}>
                <textarea
                  name="riwayat"
                  required
                  placeholder="Enter your message..."
                  maxLength={300}
                  rows={4}
                  value={riwayat}
                  onChange={(e) => setRiwayat(e.target.value)}
                  style={{ ...inputStyle, resize: "vertical", height: "auto", paddingBottom: "26px" }}
                />
                <span
                  style={{
                    position: "absolute",
                    bottom: "8px",
                    right: "10px",
                    fontSize: "11px",
                    color: "#8a7962",
                    fontFamily: "var(--font-sans), Inter, sans-serif",
                    pointerEvents: "none",
                  }}
                >
                  {riwayat.length} / 300
                </span>
              </div>
            </Field>

            {/* Pilih Kelas */}
            <Field label="Pilih Kelas" required>
              <div
                style={{ display: "flex", flexDirection: "column", gap: "9px", paddingTop: "4px" }}
              >
                {KELAS_OPTIONS.map((opt) => (
                  <label
                    key={opt}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      cursor: "pointer",
                      fontSize: "13.5px",
                      color: "#4a3f30",
                      fontFamily: "var(--font-sans), Inter, sans-serif",
                    }}
                  >
                    <input
                      type="radio"
                      name="kelas"
                      value={opt}
                      checked={kelas === opt}
                      onChange={() => setKelas(opt)}
                      required
                      style={{ width: "16px", height: "16px", accentColor: "#0e7566", cursor: "pointer" }}
                    />
                    {opt}
                  </label>
                ))}
              </div>
            </Field>

            {/* Mendapatkan Informasi */}
            <Field label="Mendapatkan Informasi Bale Binekas dari:" required>
              <div
                style={{ display: "flex", flexDirection: "column", gap: "9px", paddingTop: "4px" }}
              >
                {INFO_OPTIONS.map((opt) => (
                  <label
                    key={opt}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      cursor: "pointer",
                      fontSize: "13.5px",
                      color: "#4a3f30",
                      fontFamily: "var(--font-sans), Inter, sans-serif",
                    }}
                  >
                    <input
                      type="radio"
                      name="info_sumber"
                      value={opt}
                      checked={infoSumber === opt}
                      onChange={() => setInfoSumber(opt)}
                      required
                      style={{ width: "16px", height: "16px", accentColor: "#0e7566", cursor: "pointer" }}
                    />
                    {opt}
                  </label>
                ))}
              </div>
            </Field>

            {/* Alasan */}
            <Field label="Alasan mengikuti program Bale Binekas:" required>
              <textarea
                name="alasan"
                required
                rows={5}
                style={{ ...inputStyle, resize: "vertical", height: "auto" }}
              />
            </Field>

            <button
              type="submit"
              style={{
                background: "#0e7566",
                color: "#fffef9",
                border: "none",
                borderRadius: "6px",
                padding: "13px 0",
                fontSize: "13px",
                fontWeight: 700,
                letterSpacing: ".08em",
                cursor: "pointer",
                fontFamily: "var(--font-sans), Inter, sans-serif",
                marginTop: "4px",
              }}
            >
              DAFTAR
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
      <label
        style={{
          fontSize: "12.5px",
          color: "#4a3f30",
          fontFamily: "var(--font-sans), Inter, sans-serif",
          fontWeight: 500,
        }}
      >
        {label}
        {required && <span style={{ color: "#c8341f", marginLeft: "2px" }}>*</span>}
      </label>
      {children}
    </div>
  );
}

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "9px 12px",
  border: "1px solid #ddd",
  borderRadius: "4px",
  fontSize: "13.5px",
  color: "#4a3f30",
  background: "#fff",
  fontFamily: "var(--font-sans), Inter, sans-serif",
  outline: "none",
  boxSizing: "border-box",
};
