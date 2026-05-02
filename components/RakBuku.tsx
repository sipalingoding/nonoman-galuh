import Image from "next/image";
import Link from "next/link";

export default function RakBuku() {
  return (
    <section style={{ background: "#faf4e8", padding: "56px 48px 42px" }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "43% 57%",
          gap: "42px",
          alignItems: "center",
          maxWidth: "1010px",
          margin: "0 auto",
        }}
      >
        {/* Left */}
        <div style={{ textAlign: "center" }}>
          <h2
            className="serif-title"
            style={{
              fontSize: "31px",
              fontWeight: 400,
              color: "#6f5f4c",
              marginBottom: "10px",
              lineHeight: 1.2,
            }}
          >
            Rak Buku – Bale Maos
          </h2>
          <p
            className="ui-font"
            style={{
              fontSize: "13px",
              color: "#7a6a54",
              lineHeight: 1.45,
              margin: "0 auto 24px",
              maxWidth: "390px",
              fontWeight: 500,
            }}
          >
            Bale Maos merupakan{" "}
            <strong style={{ color: "#2c2416", fontWeight: 700 }}>perpustakaan digital</strong>{" "}
            yang menyajikan koleksi e-book bertema{" "}
            <strong style={{ color: "#2c2416", fontWeight: 700 }}>kebudayaan Sunda</strong>,
            dikelola oleh Pangauban Kawargian Nonoman Galuh.
          </p>
          <Link
            href="/buku"
            className="ui-font"
            style={{
              display: "inline-block",
              background: "#d14e1f",
              color: "#fffef9",
              padding: "9px 32px",
              borderRadius: "999px",
              fontSize: "12px",
              fontWeight: 600,
              textDecoration: "none",
            }}
          >
            Mulai Telusuri
          </Link>
        </div>

        {/* Right */}
        <div>
          <Image
            src="/buku Landing Page Web Nonoman galuh 1.png"
            alt="Koleksi Buku Bale Maos"
            width={504}
            height={178}
            style={{ width: "100%", maxWidth: "504px", height: "auto", borderRadius: "4px" }}
          />
        </div>
      </div>
    </section>
  );
}
