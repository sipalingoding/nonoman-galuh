import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { createClient } from "@/lib/supabase/server";

type Props = { params: Promise<{ slug: string }> };

export default async function AgendaDetailPage({ params }: Props) {
  const { slug } = await params;
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("agenda")
    .select("id, nama, tanggal, lokasi, deskripsi, gambar_url, slug")
    .eq("slug", slug)
    .single();

  if (error) console.error("[agenda/slug] supabase error:", error);
  if (!data) notFound();

  return (
    <div className="site-shell">
      <Navbar />

      {data.gambar_url && (
        <div style={{ width: "100%", aspectRatio: "16/7", position: "relative", overflow: "hidden", maxHeight: "460px" }}>
          <Image
            src={data.gambar_url}
            alt={data.nama}
            fill
            priority
            sizes="100vw"
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, transparent 40%, rgba(44,36,22,0.55))" }} />
        </div>
      )}

      <section className="px-sec" style={{ background: "#faf4e8", paddingTop: "56px", paddingBottom: "80px" }}>
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>

          <div className="ui-font" style={{ fontSize: "12px", color: "#8a7962", marginBottom: "28px", display: "flex", alignItems: "center", gap: "6px" }}>
            <Link href="/" style={{ color: "#8a7962", textDecoration: "none" }}>Beranda</Link>
            <span>›</span>
            <Link href="/agenda" style={{ color: "#8a7962", textDecoration: "none" }}>Agenda Budaya</Link>
            <span>›</span>
            <span style={{ color: "#4a3f30" }}>{data.nama}</span>
          </div>

          {data.tanggal && (
            <p className="ui-font" style={{ fontSize: "12px", color: "#8a7962", marginBottom: "6px" }}>{data.tanggal}</p>
          )}
          {data.lokasi && (
            <p className="ui-font" style={{ fontSize: "12px", color: "#8a7962", marginBottom: "12px" }}>📍 {data.lokasi}</p>
          )}

          <h1 className="decorative-font" style={{ fontSize: "32px", fontWeight: 400, color: "#4a3f30", lineHeight: 1.3, marginBottom: "20px" }}>
            {data.nama}
          </h1>

          <div style={{ borderBottom: "1px solid rgba(209,78,31,.3)", marginBottom: "28px" }} />

          {data.deskripsi && (
            <div className="serif-title" style={{ fontSize: "15px", color: "#5a4f3e", lineHeight: 1.85, fontWeight: 300, whiteSpace: "pre-line" }}>
              {data.deskripsi}
            </div>
          )}

          <div style={{ marginTop: "48px" }}>
            <Link href="/agenda" className="ui-font" style={{ display: "inline-block", background: "#d14e1f", color: "#fffef9", padding: "10px 28px", borderRadius: "999px", fontSize: "12px", fontWeight: 700, textDecoration: "none" }}>
              ← Kembali ke Agenda
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
