import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { createClient } from "@/lib/supabase/server";

type Props = { params: Promise<{ slug: string }> };

export default async function TokohDetailPage({ params }: Props) {
  const { slug } = await params;
  const supabase = await createClient();
  let { data, error } = await supabase
    .from("tokoh")
    .select("id, nama, jabatan, bidang, biografi, foto_url, slug")
    .eq("slug", slug)
    .single();

  if (error?.code === "42703") {
    const fallback = await supabase
      .from("tokoh")
      .select("id, nama, jabatan, bidang, foto_url, slug")
      .eq("slug", slug)
      .single();
    data = fallback.data as typeof data;
    error = fallback.error;
  }

  if (error) console.error("[tokoh/slug] supabase error:", error);
  if (!data) notFound();

  return (
    <div className="site-shell">
      <Navbar />

      <section className="px-sec" style={{ background: "#faf4e8", paddingTop: "56px", paddingBottom: "80px" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto" }}>

          <div className="ui-font" style={{ fontSize: "12px", color: "#8a7962", marginBottom: "40px", display: "flex", alignItems: "center", gap: "6px" }}>
            <Link href="/" style={{ color: "#8a7962", textDecoration: "none" }}>Beranda</Link>
            <span>›</span>
            <Link href="/tokoh" style={{ color: "#8a7962", textDecoration: "none" }}>Wanoh Ka Tokoh</Link>
            <span>›</span>
            <span style={{ color: "#4a3f30" }}>{data.nama}</span>
          </div>

          <div style={{ display: "flex", gap: "48px", alignItems: "flex-start" }}>
            {/* Portrait */}
            <div style={{ flexShrink: 0, width: "220px" }}>
              <div style={{ width: "220px", aspectRatio: ".78/1", position: "relative", overflow: "hidden", borderRadius: "6px" }}>
                {data.foto_url ? (
                  <Image
                    src={data.foto_url}
                    alt={data.nama}
                    fill
                    priority
                    sizes="220px"
                    style={{ objectFit: "cover", objectPosition: "top center" }}
                  />
                ) : (
                  <div className="placeholder-block" style={{ width: "100%", height: "100%" }} />
                )}
              </div>
              <div style={{ background: "#0e7566", color: "#fffef9", padding: "10px 8px", textAlign: "center", borderRadius: "0 0 6px 6px" }}>
                <span className="serif-title" style={{ fontSize: "12px", fontWeight: 700 }}>{data.nama}</span>
              </div>
            </div>

            {/* Info */}
            <div style={{ flex: 1, paddingTop: "4px" }}>
              <h1 className="decorative-font" style={{ fontSize: "28px", fontWeight: 400, color: "#4a3f30", lineHeight: 1.3, marginBottom: "16px" }}>
                {data.nama}
              </h1>

              {data.jabatan && (
                <div style={{ marginBottom: "8px" }}>
                  <span className="ui-font" style={{ fontSize: "11px", fontWeight: 700, color: "#8a7962", textTransform: "uppercase", letterSpacing: "0.05em" }}>Jabatan</span>
                  <p className="serif-title" style={{ fontSize: "14px", color: "#4a3f30", margin: "4px 0 0", fontWeight: 400 }}>{data.jabatan}</p>
                </div>
              )}
              {data.bidang && (
                <div style={{ marginBottom: "20px" }}>
                  <span className="ui-font" style={{ fontSize: "11px", fontWeight: 700, color: "#8a7962", textTransform: "uppercase", letterSpacing: "0.05em" }}>Bidang</span>
                  <p className="serif-title" style={{ fontSize: "14px", color: "#4a3f30", margin: "4px 0 0", fontWeight: 400 }}>{data.bidang}</p>
                </div>
              )}

              {data.biografi && (
                <>
                  <div style={{ borderTop: "1px solid rgba(209,78,31,.2)", paddingTop: "20px" }}>
                    <span className="ui-font" style={{ fontSize: "11px", fontWeight: 700, color: "#8a7962", textTransform: "uppercase", letterSpacing: "0.05em" }}>Biografi</span>
                    <div className="serif-title" style={{ fontSize: "14px", color: "#5a4f3e", lineHeight: 1.85, fontWeight: 300, marginTop: "10px", whiteSpace: "pre-line" }}>
                      {data.biografi}
                    </div>
                  </div>
                </>
              )}

              <div style={{ marginTop: "40px" }}>
                <Link href="/tokoh" className="ui-font" style={{ display: "inline-block", background: "#d14e1f", color: "#fffef9", padding: "10px 28px", borderRadius: "999px", fontSize: "12px", fontWeight: 700, textDecoration: "none" }}>
                  ← Kembali ke Tokoh
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
