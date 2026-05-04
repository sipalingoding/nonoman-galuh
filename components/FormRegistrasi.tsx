"use client";

import { useState } from "react";

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

export default function FormRegistrasi() {
  const [open, setOpen] = useState(false);
  const [riwayat, setRiwayat] = useState("");
  const [jenisKelamin, setJenisKelamin] = useState("");
  const [kelas, setKelas] = useState("");
  const [infoSumber, setInfoSumber] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    alert("Formulir berhasil dikirim!");
    setOpen(false);
  }

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        style={{
          display: "inline-block",
          background: "#0e7566",
          color: "#fffef9",
          padding: "11px 30px",
          borderRadius: "999px",
          fontSize: "13px",
          fontWeight: 700,
          border: "none",
          cursor: "pointer",
          fontFamily: "var(--font-sans), Inter, sans-serif",
          letterSpacing: ".02em",
        }}
      >
        Isi Form
      </button>

      {open && (
        <div
          onClick={(e) => { if (e.target === e.currentTarget) setOpen(false); }}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(44,36,22,0.62)",
            zIndex: 9999,
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
            padding: "32px 16px 32px",
            overflowY: "auto",
          }}
        >
          <div
            style={{
              background: "#fff",
              borderRadius: "14px",
              width: "100%",
              maxWidth: "520px",
              padding: "36px 36px 40px",
              position: "relative",
              boxShadow: "0 20px 60px rgba(44,36,22,.25)",
            }}
          >
            {/* Close */}
            <button
              onClick={() => setOpen(false)}
              aria-label="Tutup"
              style={{
                position: "absolute",
                top: "16px",
                right: "18px",
                background: "none",
                border: "none",
                cursor: "pointer",
                color: "#7a6a54",
                fontSize: "22px",
                lineHeight: 1,
                padding: "4px",
              }}
            >
              ×
            </button>

            <h2
              className="decorative-font"
              style={{
                fontSize: "22px",
                fontWeight: 400,
                color: "#4a3f30",
                marginBottom: "6px",
                lineHeight: 1.3,
              }}
            >
              Form Pendaftaran
            </h2>
            <p
              className="serif-title"
              style={{
                fontSize: "12.5px",
                color: "#8a7962",
                fontWeight: 300,
                marginBottom: "28px",
              }}
            >
              Program Bale Binekas — Nonoman Galuh
            </p>

            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "18px" }}>

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
                <div style={{ display: "flex", flexDirection: "column", gap: "8px", paddingTop: "4px" }}>
                  {["Laki-laki", "Perempuan"].map((opt) => (
                    <label
                      key={opt}
                      style={{ display: "flex", alignItems: "center", gap: "10px", cursor: "pointer", fontSize: "13.5px", color: "#4a3f30", fontFamily: "var(--font-sans), Inter, sans-serif" }}
                    >
                      <input
                        type="radio"
                        name="jenis_kelamin"
                        value={opt}
                        checked={jenisKelamin === opt}
                        onChange={() => setJenisKelamin(opt)}
                        required
                        style={radioStyle(jenisKelamin === opt)}
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
                    style={{ ...inputStyle, resize: "vertical", height: "auto", paddingBottom: "24px" }}
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
                <div style={{ display: "flex", flexDirection: "column", gap: "8px", paddingTop: "4px" }}>
                  {KELAS_OPTIONS.map((opt) => (
                    <label
                      key={opt}
                      style={{ display: "flex", alignItems: "center", gap: "10px", cursor: "pointer", fontSize: "13.5px", color: "#4a3f30", fontFamily: "var(--font-sans), Inter, sans-serif" }}
                    >
                      <input
                        type="radio"
                        name="kelas"
                        value={opt}
                        checked={kelas === opt}
                        onChange={() => setKelas(opt)}
                        required
                        style={radioStyle(kelas === opt)}
                      />
                      {opt}
                    </label>
                  ))}
                </div>
              </Field>

              {/* Mendapatkan Informasi */}
              <Field label="Mendapatkan Informasi Bale Binekas dari:" required>
                <div style={{ display: "flex", flexDirection: "column", gap: "8px", paddingTop: "4px" }}>
                  {INFO_OPTIONS.map((opt) => (
                    <label
                      key={opt}
                      style={{ display: "flex", alignItems: "center", gap: "10px", cursor: "pointer", fontSize: "13.5px", color: "#4a3f30", fontFamily: "var(--font-sans), Inter, sans-serif" }}
                    >
                      <input
                        type="radio"
                        name="info_sumber"
                        value={opt}
                        checked={infoSumber === opt}
                        onChange={() => setInfoSumber(opt)}
                        required
                        style={radioStyle(infoSumber === opt)}
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
                  padding: "12px 0",
                  fontSize: "13px",
                  fontWeight: 700,
                  letterSpacing: ".08em",
                  cursor: "pointer",
                  fontFamily: "var(--font-sans), Inter, sans-serif",
                  marginTop: "6px",
                }}
              >
                DAFTAR
              </button>
            </form>
          </div>
        </div>
      )}
    </>
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
    <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
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
  background: "#faf4e8",
  fontFamily: "var(--font-sans), Inter, sans-serif",
  outline: "none",
  boxSizing: "border-box",
};

function radioStyle(checked: boolean): React.CSSProperties {
  return {
    width: "16px",
    height: "16px",
    accentColor: checked ? "#0e7566" : undefined,
    cursor: "pointer",
    flexShrink: 0,
  };
}
