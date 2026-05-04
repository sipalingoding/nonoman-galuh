import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { createClient } from "@/lib/supabase/server";

type Props = { params: Promise<{ slug: string }> };

function ShareIconRound({ children }: { children: React.ReactNode }) {
  return (
    <span
      style={{
        width: "32px",
        height: "32px",
        borderRadius: "50%",
        background: "#2c2416",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        flexShrink: 0,
      }}
    >
      {children}
    </span>
  );
}

export default async function BeritaDetailPage({ params }: Props) {
  const { slug } = await params;
  const supabase = await createClient();
  let { data, error } = await supabase
    .from("berita")
    .select("id, judul, ringkasan, konten, tanggal, gambar_url, slug")
    .eq("slug", slug)
    .single();

  // Fallback: retry without konten if column doesn't exist yet (migration pending)
  if (error?.code === "42703") {
    const fallback = await supabase
      .from("berita")
      .select("id, judul, ringkasan, tanggal, gambar_url, slug")
      .eq("slug", slug)
      .single();
    data = fallback.data as typeof data;
    error = fallback.error;
  }

  if (error) console.error("[berita/slug] supabase error:", error);
  if (!data) notFound();

  return (
    <div className="site-shell">
      <Navbar />

      {/* Hero image */}
      {data.gambar_url && (
        <div style={{ width: "100%", aspectRatio: "16/7", position: "relative", overflow: "hidden", maxHeight: "480px" }}>
          <Image
            src={data.gambar_url}
            alt={data.judul}
            fill
            priority
            sizes="100vw"
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, transparent 40%, rgba(44,36,22,0.55))" }} />
        </div>
      )}

      {/* Article body */}
      <section className="px-sec" style={{ background: "#faf4e8", paddingTop: "56px", paddingBottom: "80px" }}>
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>

          {/* Breadcrumb */}
          <div
            className="ui-font"
            style={{ fontSize: "12px", color: "#8a7962", marginBottom: "28px", display: "flex", alignItems: "center", gap: "6px" }}
          >
            <Link href="/" style={{ color: "#8a7962", textDecoration: "none" }}>Beranda</Link>
            <span>›</span>
            <Link href="/berita" style={{ color: "#8a7962", textDecoration: "none" }}>Berita & Informasi</Link>
            <span>›</span>
            <span style={{ color: "#4a3f30" }}>{data.judul}</span>
          </div>

          {/* Date */}
          {data.tanggal && (
            <p className="ui-font" style={{ fontSize: "12px", color: "#8a7962", marginBottom: "12px" }}>
              {data.tanggal}
            </p>
          )}

          {/* Title */}
          <h1
            className="decorative-font"
            style={{ fontSize: "32px", fontWeight: 400, color: "#4a3f30", lineHeight: 1.3, marginBottom: "20px" }}
          >
            {data.judul}
          </h1>

          {/* Divider */}
          <div style={{ borderBottom: "1px solid rgba(209,78,31,.3)", marginBottom: "28px" }} />

          {/* Ringkasan */}
          {data.ringkasan && (
            <p
              className="serif-title"
              style={{ fontSize: "16px", color: "#4a3f30", lineHeight: 1.7, fontWeight: 600, marginBottom: "28px" }}
            >
              {data.ringkasan}
            </p>
          )}

          {/* Konten */}
          {data.konten && (
            <div
              className="serif-title"
              style={{ fontSize: "15px", color: "#5a4f3e", lineHeight: 1.85, fontWeight: 300, whiteSpace: "pre-line" }}
            >
              {data.konten}
            </div>
          )}

          {/* Share */}
          <div
            className="ui-font"
            style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "13px", color: "#4a3f30", marginTop: "48px", paddingTop: "24px", borderTop: "1px solid rgba(209,78,31,.2)" }}
          >
            <span style={{ fontWeight: 600 }}>Bagikan</span>
            <ShareIconRound>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.553 4.12 1.522 5.855L0 24l6.316-1.491A11.952 11.952 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.878 0-3.641-.487-5.172-1.341l-.371-.218-3.748.885.9-3.657-.24-.386A9.937 9.937 0 0 1 2 12c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10z" />
              </svg>
            </ShareIconRound>
            <ShareIconRound>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </ShareIconRound>
            <ShareIconRound>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.259 5.629L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
              </svg>
            </ShareIconRound>
          </div>

          {/* Back link */}
          <div style={{ marginTop: "40px" }}>
            <Link
              href="/berita"
              className="ui-font"
              style={{
                display: "inline-block",
                background: "#d14e1f",
                color: "#fffef9",
                padding: "10px 28px",
                borderRadius: "999px",
                fontSize: "12px",
                fontWeight: 700,
                textDecoration: "none",
              }}
            >
              ← Kembali ke Berita
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
