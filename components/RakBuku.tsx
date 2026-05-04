import Image from "next/image";
import Link from "next/link";
import { createClient } from "@/lib/supabase/server";

export default async function RakBuku() {
  const supabase = await createClient();
  const { data: buku, count } = await supabase
    .from("buku")
    .select("id, judul, penulis, tahun, slug", { count: "exact" })
    .order("created_at", { ascending: false })
    .limit(3);

  const total = count ?? 0;

  return (
    <section className="px-sec" style={{ background: "#faf4e8", paddingTop: "56px", paddingBottom: "42px" }}>
      <div className="rakbuku-grid">
        {/* Left */}
        <div style={{ textAlign: "center" }}>
          <h2
            className="decorative-font"
            style={{ fontSize: "32.71px", fontWeight: 400, color: "#6f5f4c", marginBottom: "10px", lineHeight: 1.2 }}
          >
            Rak Buku – Bale Maos
          </h2>
          <p
            className="serif-title"
            style={{
              fontSize: "14.22px",
              color: "#7a6a54",
              lineHeight: 1.55,
              margin: "0 auto 24px",
              maxWidth: "390px",
              fontWeight: 300,
            }}
          >
            Bale Maos merupakan{" "}
            <strong style={{ color: "#2c2416", fontWeight: 700 }}>perpustakaan digital</strong>{" "}
            yang menyajikan koleksi e-book bertema{" "}
            <strong style={{ color: "#2c2416", fontWeight: 700 }}>kebudayaan Sunda</strong>,
            dikelola oleh Pangauban Kawargian Nonoman Galuh.
          </p>
          {total > 0 && (
            <p
              className="ui-font"
              style={{ fontSize: "12px", color: "#7a6a54", marginBottom: "16px" }}
            >
              {total} judul buku tersedia
            </p>
          )}
          <Link
            href="/buku"
            className="serif-title"
            style={{
              display: "inline-block",
              background: "#d14e1f",
              color: "#fffef9",
              padding: "10px 32px",
              borderRadius: "999px",
              fontSize: "12.8px",
              fontWeight: 300,
              textDecoration: "none",
            }}
          >
            Mulai Telusuri
          </Link>
        </div>

        {/* Right */}
        <div>
          {buku && buku.length > 0 ? (
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              {buku.map((b) => {
                const href = (b as any).slug ? `/buku/${(b as any).slug}` : "/buku";
                return (
                  <Link
                    key={b.id}
                    href={href}
                    style={{
                      background: "#fffef9",
                      border: "1px solid #e0d8cc",
                      borderRadius: "8px",
                      padding: "10px 14px",
                      display: "flex",
                      flexDirection: "column",
                      gap: "2px",
                      textDecoration: "none",
                    }}
                  >
                    <span className="serif-title" style={{ fontSize: "13px", fontWeight: 700, color: "#2c2416" }}>
                      {b.judul}
                    </span>
                    <span className="ui-font" style={{ fontSize: "11px", color: "#7a6a54" }}>
                      {b.penulis} · {b.tahun}
                    </span>
                  </Link>
                );
              })}
            </div>
          ) : (
            <Image
              src="/buku Landing Page Web Nonoman galuh 1.png"
              alt="Koleksi Buku Bale Maos"
              width={504}
              height={178}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 55vw, 504px"
              style={{ width: "100%", height: "auto", borderRadius: "4px" }}
            />
          )}
        </div>
      </div>
    </section>
  );
}
