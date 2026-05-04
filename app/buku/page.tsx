import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { createClient } from "@/lib/supabase/server";

type BukuItem = {
  id: string;
  judul: string;
  penulis: string | null;
  tahun: number | null;
  cover_url: string | null;
  slug: string | null;
  deskripsi?: string | null;
};

function BukuCard({ item }: { item: BukuItem }) {
  const href = item.slug ? `/buku/${item.slug}` : "#";
  return (
    <article style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <Link href={href} style={{ textDecoration: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
        <div style={{ width: "100%", aspectRatio: ".7/1", position: "relative", overflow: "hidden", borderRadius: "4px", boxShadow: "4px 4px 12px rgba(44,36,22,0.15)" }}>
          {item.cover_url ? (
            <Image
              src={item.cover_url}
              alt={item.judul}
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 220px"
              style={{ objectFit: "cover" }}
            />
          ) : (
            <div className="placeholder-block" style={{ width: "100%", height: "100%", borderRadius: "4px" }}>
              <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", padding: "16px" }}>
                <span className="serif-title" style={{ fontSize: "13px", color: "#8a7962", textAlign: "center", fontWeight: 600 }}>{item.judul}</span>
              </div>
            </div>
          )}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
          <h2 className="serif-title" style={{ fontSize: "14px", fontWeight: 700, color: "#2c2416", lineHeight: 1.4, margin: 0 }}>
            {item.judul}
          </h2>
          {item.penulis && (
            <span className="ui-font" style={{ fontSize: "11px", color: "#8a7962" }}>{item.penulis}</span>
          )}
          {item.tahun && (
            <span className="ui-font" style={{ fontSize: "11px", color: "#a89880" }}>{item.tahun}</span>
          )}
        </div>
      </Link>
    </article>
  );
}

export default async function BukuPage() {
  const supabase = await createClient();
  const { data, count } = await supabase
    .from("buku")
    .select("id, judul, penulis, tahun, cover_url, slug", { count: "exact" })
    .order("created_at", { ascending: false });

  const items: BukuItem[] = data ?? [];

  return (
    <div className="site-shell">
      <Navbar />

      <section className="px-sec" style={{ background: "#faf4e8", paddingTop: "56px", paddingBottom: "48px" }}>
        <div style={{ maxWidth: "1010px", margin: "0 auto" }}>
          <div className="ui-font" style={{ fontSize: "12px", color: "#8a7962", marginBottom: "20px", display: "flex", alignItems: "center", gap: "6px" }}>
            <Link href="/" style={{ color: "#8a7962", textDecoration: "none" }}>Beranda</Link>
            <span>›</span>
            <span style={{ color: "#4a3f30" }}>Rak Buku – Bale Maos</span>
          </div>
          <div style={{ borderBottom: "1px solid rgba(209,78,31,.3)", paddingBottom: "28px" }}>
            <h1 className="decorative-font" style={{ fontSize: "36px", fontWeight: 400, color: "#6f5f4c", marginBottom: "10px", lineHeight: 1.2 }}>
              Rak Buku – Bale Maos
            </h1>
            <p className="serif-title" style={{ fontSize: "14.22px", color: "#7a6a54", lineHeight: 1.55, fontWeight: 300, maxWidth: "600px" }}>
              Perpustakaan digital yang menyajikan koleksi e-book bertema kebudayaan Sunda,
              dikelola oleh Pangauban Kawargian Nonoman Galuh.
            </p>
            {count != null && count > 0 && (
              <p className="ui-font" style={{ fontSize: "12px", color: "#8a7962", marginTop: "10px" }}>{count} judul buku tersedia</p>
            )}
          </div>
        </div>
      </section>

      <section className="px-sec" style={{ background: "#faf4e8", paddingBottom: "80px" }}>
        <div style={{ maxWidth: "1010px", margin: "0 auto" }}>
          {items.length > 0 ? (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "24px" }}>
              {items.map((item) => <BukuCard key={item.id} item={item} />)}
            </div>
          ) : (
            <div style={{ textAlign: "center", paddingTop: "60px", paddingBottom: "60px" }}>
              <p className="serif-title" style={{ fontSize: "16px", color: "#8a7962", fontWeight: 300 }}>
                Belum ada buku yang dipublikasikan.
              </p>
              <Link href="/" className="ui-font" style={{ display: "inline-block", marginTop: "20px", background: "#d14e1f", color: "#fffef9", padding: "10px 28px", borderRadius: "999px", fontSize: "12px", fontWeight: 700, textDecoration: "none" }}>
                Kembali ke Beranda
              </Link>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
