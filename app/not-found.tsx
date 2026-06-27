import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#c8341f",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        padding: "40px 24px 0",
      }}
    >
      {/* Awan kanan atas */}
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "320px",
          height: "240px",
          pointerEvents: "none",
          zIndex: 1,
        }}
      >
        <Image
          src="/clouds.png"
          alt=""
          fill
          sizes="320px"
          style={{ objectFit: "contain", objectPosition: "top right" }}
          priority
        />
      </div>

      {/* Lingkaran dekorasi kiri bawah */}
      <div
        style={{
          position: "absolute",
          bottom: "-120px",
          left: "-120px",
          width: "380px",
          height: "380px",
          borderRadius: "50%",
          background: "rgba(255,255,255,.06)",
          pointerEvents: "none",
        }}
      />
      {/* Lingkaran dekorasi kanan tengah */}
      <div
        style={{
          position: "absolute",
          top: "30%",
          right: "-80px",
          width: "220px",
          height: "220px",
          borderRadius: "50%",
          background: "rgba(255,255,255,.04)",
          pointerEvents: "none",
        }}
      />

      {/* Konten utama */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          maxWidth: "480px",
          width: "100%",
        }}
      >
        {/* Logo */}
        <div style={{ marginBottom: "28px" }}>
          <Image
            src="/Logo Nonoman Galuh 1.png"
            alt="Nonoman Galuh"
            width={52}
            height={52}
            style={{ objectFit: "contain" }}
          />
        </div>

        {/* Ikon pemeliharaan */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            width: "72px",
            height: "72px",
            borderRadius: "50%",
            backgroundColor: "rgba(255,255,255,.15)",
            border: "1.5px solid rgba(255,255,255,.35)",
            marginBottom: "20px",
          }}
        >
          <svg
            width="34"
            height="34"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#fffef9"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {/* Kunci ganda — merepresentasikan gerbang yang terkunci/dipelihara */}
            <circle cx="12" cy="12" r="10" />
            <path d="M12 8v4l3 3" />
            <circle cx="12" cy="12" r="1" fill="#fffef9" />
          </svg>
        </div>

        {/* Angka 404 */}
        <h1
          className="decorative-font"
          style={{
            fontSize: "clamp(88px, 22vw, 140px)",
            color: "#fffef9",
            margin: 0,
            lineHeight: 1,
            letterSpacing: "-2px",
            textShadow: "0 4px 32px rgba(0,0,0,.25)",
          }}
        >
          404
        </h1>

        {/* Judul */}
        <h2
          className="decorative-font"
          style={{
            fontSize: "clamp(18px, 5vw, 26px)",
            color: "#f6de66",
            fontWeight: 400,
            margin: "8px 0 14px",
            lineHeight: 1.25,
          }}
        >
          Sedang Dalam Pemeliharaan
        </h2>

        {/* Garis pemisah */}
        <div
          style={{
            width: "48px",
            height: "2px",
            backgroundColor: "rgba(246,222,102,.6)",
            borderRadius: "999px",
            marginBottom: "18px",
          }}
        />

        {/* Deskripsi */}
        <p
          className="serif-title"
          style={{
            fontSize: "13.5px",
            color: "rgba(255,255,255,.82)",
            lineHeight: 1.7,
            margin: "0 0 32px",
          }}
        >
          Halaman yang kamu cari belum tersedia atau sedang kami perbaiki.
          Kami sedang bekerja keras untuk mempersembahkan pengalaman terbaik
          tentang warisan budaya Galuh.
        </p>

        {/* Tombol kembali */}
        <Link
          href="/"
          className="serif-title"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            backgroundColor: "#f6de66",
            color: "#7f3a21",
            padding: "13px 30px",
            borderRadius: "999px",
            fontSize: "14px",
            fontWeight: 700,
            textDecoration: "none",
            boxShadow: "0 4px 20px rgba(0,0,0,.2)",
          }}
        >
          <svg
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M19 12H5" />
            <polyline points="12 19 5 12 12 5" />
          </svg>
          Kembali ke Beranda
        </Link>
      </div>

      {/* Ilustrasi gerbang di bawah (dekoratif) */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          width: "100%",
          maxWidth: "520px",
          height: "300px",
          marginTop: "40px",
          flexShrink: 0,
        }}
      >
        <Image
          src="/Rectangle.png"
          alt="Gerbang Galuh"
          fill
          sizes="520px"
          style={{
            objectFit: "contain",
            objectPosition: "bottom center",
            opacity: 0.55,
          }}
        />
      </div>
    </div>
  );
}
