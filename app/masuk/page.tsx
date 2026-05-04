"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export default function MasukPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const router = useRouter();

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const supabase = createClient();
    const { error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      setError("Email atau kata sandi salah. Silakan coba lagi.");
      setLoading(false);
      return;
    }

    router.push("/dashboard");
    router.refresh();
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#c8341f",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Dekorasi lingkaran */}
      <div
        style={{
          position: "absolute",
          top: "-120px",
          right: "-120px",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background: "rgba(255,255,255,.06)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-80px",
          left: "-80px",
          width: "280px",
          height: "280px",
          borderRadius: "50%",
          background: "rgba(255,255,255,.05)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          backgroundColor: "#fffef9",
          borderRadius: "20px",
          padding: "48px 40px",
          width: "100%",
          maxWidth: "420px",
          boxShadow: "0 24px 60px rgba(0,0,0,.25)",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "36px" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              width: "56px",
              height: "56px",
              borderRadius: "14px",
              backgroundColor: "#c8341f",
              marginBottom: "16px",
            }}
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fffef9" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 3H19a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H15" />
              <polyline points="10 17 5 12 10 7" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
          </div>
          <h1
            className="decorative-font"
            style={{ fontSize: "26px", fontWeight: 400, color: "#2c2416", margin: 0, lineHeight: 1.2 }}
          >
            Portal Admin
          </h1>
          <p
            className="decorative-font"
            style={{ fontSize: "14px", color: "#7a6a54", marginTop: "6px" }}
          >
            Nonoman Galuh
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleLogin} style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
          {/* Email */}
          <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            <label
              htmlFor="email"
              className="serif-title"
              style={{ fontSize: "12.5px", fontWeight: 700, color: "#2c2416" }}
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@nonoman-galuh.id"
              style={{
                padding: "12px 16px",
                borderRadius: "10px",
                border: "1.5px solid #e0d8cc",
                fontSize: "14px",
                color: "#2c2416",
                backgroundColor: "#faf4e8",
                outline: "none",
                width: "100%",
                boxSizing: "border-box",
                transition: "border-color .15s",
              }}
              onFocus={(e) => (e.target.style.borderColor = "#c8341f")}
              onBlur={(e) => (e.target.style.borderColor = "#e0d8cc")}
            />
          </div>

          {/* Password */}
          <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            <label
              htmlFor="password"
              className="serif-title"
              style={{ fontSize: "12.5px", fontWeight: 700, color: "#2c2416" }}
            >
              Kata Sandi
            </label>
            <div style={{ position: "relative" }}>
              <input
                id="password"
                type={showPass ? "text" : "password"}
                required
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                style={{
                  padding: "12px 44px 12px 16px",
                  borderRadius: "10px",
                  border: "1.5px solid #e0d8cc",
                  fontSize: "14px",
                  color: "#2c2416",
                  backgroundColor: "#faf4e8",
                  outline: "none",
                  width: "100%",
                  boxSizing: "border-box",
                  transition: "border-color .15s",
                }}
                onFocus={(e) => (e.target.style.borderColor = "#c8341f")}
                onBlur={(e) => (e.target.style.borderColor = "#e0d8cc")}
              />
              <button
                type="button"
                onClick={() => setShowPass(!showPass)}
                style={{
                  position: "absolute",
                  right: "12px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  color: "#7a6a54",
                  padding: "4px",
                  display: "flex",
                  alignItems: "center",
                }}
                aria-label={showPass ? "Sembunyikan" : "Tampilkan"}
              >
                {showPass ? (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
                    <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
                    <line x1="1" y1="1" x2="23" y2="23" />
                  </svg>
                ) : (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Error */}
          {error && (
            <div
              style={{
                backgroundColor: "#fee2e2",
                border: "1px solid #fca5a5",
                borderRadius: "8px",
                padding: "10px 14px",
                fontSize: "13px",
                color: "#991b1b",
              }}
            >
              {error}
            </div>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            style={{
              marginTop: "4px",
              padding: "13px 24px",
              borderRadius: "10px",
              backgroundColor: loading ? "#a04030" : "#c8341f",
              color: "#fffef9",
              fontSize: "14px",
              fontWeight: 700,
              border: "none",
              cursor: loading ? "not-allowed" : "pointer",
              transition: "background-color .15s",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
            }}
          >
            {loading && (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ animation: "spin 1s linear infinite" }}>
                <path d="M21 12a9 9 0 1 1-6.219-8.56" />
              </svg>
            )}
            {loading ? "Memproses..." : "Masuk"}
          </button>
        </form>

        <p
          className="serif-title"
          style={{ textAlign: "center", marginTop: "24px", fontSize: "12px", color: "#7a6a54" }}
        >
          Hanya akun admin yang dapat masuk ke portal ini.
        </p>
      </div>

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
      `}</style>
    </div>
  );
}
