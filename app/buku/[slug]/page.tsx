import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { createClient } from "@/lib/supabase/server";

type Props = { params: Promise<{ slug: string }> };

export default async function BukuDetailPage({ params }: Props) {
  const { slug } = await params;
  const supabase = await createClient();
  let { data, error } = await supabase
    .from("buku")
    .select("id, judul, penulis, tahun, deskripsi, cover_url, slug")
    .eq("slug", slug)
    .single();

  if (error?.code === "42703") {
    const fallback = await supabase
      .from("buku")
      .select("id, judul, penulis, tahun, cover_url, slug")
      .eq("slug", slug)
      .single();
    data = fallback.data as typeof data;
    error = fallback.error;
  }

  if (error) console.error("[buku/slug] supabase error:", error);
  if (!data) notFound();

  return (
    <div className="site-shell">
      <Navbar />

      <section className="px-sec" style={{ background: "#faf4e8", paddingTop: "56px", paddingBottom: "80px" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto" }}>

          <div className="ui-font" style={{ fontSize: "12px", color: "#8a7962", marginBottom: "40px", display: "flex", alignItems: "center", gap: "6px" }}>
            <Link href="/" style={{ color: "#8a7962", textDecoration: "none" }}>Beranda</Link>
            <span>›</span>
            <Link href="/buku" style={{ color: "#8a7962", textDecoration: "none" }}>Rak Buku – Bale Maos</Link>
            <span>›</span>
            <span style={{ color: "#4a3f30" }}>{data.judul}</span>
          </div>

          <div style={{ display: "flex", gap: "48px", alignItems: "flex-start" }}>
            {/* Book cover */}
            <div style={{ flexShrink: 0, width: "180px" }}>
              <div style={{ width: "180px", aspectRatio: ".7/1", position: "relative", overflow: "hidden", borderRadius: "4px", boxShadow: "6px 6px 18px rgba(44,36,22,0.2)" }}>
                {data.cover_url ? (
                  <Image
                    src={data.cover_url}
                    alt={data.judul}
                    fill
                    priority
                    sizes="180px"
                    style={{ objectFit: "cover" }}
                  />
                ) : (
                  <div className="placeholder-block" style={{ width: "100%", height: "100%" }} />
                )}
              </div>
            </div>

            {/* Info */}
            <div style={{ flex: 1, paddingTop: "4px" }}>
              <h1 className="decorative-font" style={{ fontSize: "28px", fontWeight: 400, color: "#4a3f30", lineHeight: 1.3, marginBottom: "16px" }}>
                {data.judul}
              </h1>

              {data.penulis && (
                <div style={{ marginBottom: "8px" }}>
                  <span className="ui-font" style={{ fontSize: "11px", fontWeight: 700, color: "#8a7962", textTransform: "uppercase", letterSpacing: "0.05em" }}>Penulis</span>
                  <p className="serif-title" style={{ fontSize: "14px", color: "#4a3f30", margin: "4px 0 0", fontWeight: 400 }}>{data.penulis}</p>
                </div>
              )}
              {data.tahun && (
                <div style={{ marginBottom: "20px" }}>
                  <span className="ui-font" style={{ fontSize: "11px", fontWeight: 700, color: "#8a7962", textTransform: "uppercase", letterSpacing: "0.05em" }}>Tahun Terbit</span>
                  <p className="serif-title" style={{ fontSize: "14px", color: "#4a3f30", margin: "4px 0 0", fontWeight: 400 }}>{data.tahun}</p>
                </div>
              )}

              {data.deskripsi && (
                <div style={{ borderTop: "1px solid rgba(209,78,31,.2)", paddingTop: "20px" }}>
                  <span className="ui-font" style={{ fontSize: "11px", fontWeight: 700, color: "#8a7962", textTransform: "uppercase", letterSpacing: "0.05em" }}>Sinopsis</span>
                  <div className="serif-title" style={{ fontSize: "14px", color: "#5a4f3e", lineHeight: 1.85, fontWeight: 300, marginTop: "10px", whiteSpace: "pre-line" }}>
                    {data.deskripsi}
                  </div>
                </div>
              )}

              <div style={{ marginTop: "40px" }}>
                <Link href="/buku" className="ui-font" style={{ display: "inline-block", background: "#d14e1f", color: "#fffef9", padding: "10px 28px", borderRadius: "999px", fontSize: "12px", fontWeight: 700, textDecoration: "none" }}>
                  ← Kembali ke Rak Buku
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
