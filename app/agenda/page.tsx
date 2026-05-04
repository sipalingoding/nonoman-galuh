import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { createClient } from "@/lib/supabase/server";

type AgendaItem = {
  id: string;
  nama: string;
  tanggal: string | null;
  lokasi: string | null;
  deskripsi: string | null;
  slug: string | null;
  gambar_url: string | null;
};

function AgendaCard({ item }: { item: AgendaItem }) {
  const href = item.slug ? `/agenda/${item.slug}` : "#";
  return (
    <article style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
      <Link href={href} style={{ textDecoration: "none", display: "flex", flexDirection: "column", gap: "12px" }}>
        <div style={{ width: "100%", aspectRatio: "1.08/1", position: "relative", overflow: "hidden", borderRadius: "4px" }}>
          {item.gambar_url ? (
            <Image
              src={item.gambar_url}
              alt={item.nama}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              style={{ objectFit: "cover" }}
            />
          ) : (
            <div className="placeholder-block" style={{ width: "100%", height: "100%", borderRadius: "4px" }} />
          )}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
          <span className="ui-font" style={{ fontSize: "11px", color: "#8a7962" }}>{item.tanggal ?? ""}</span>
          <h2 className="decorative-font" style={{ fontSize: "17.07px", fontWeight: 400, color: "#4a3f30", lineHeight: 1.5, margin: 0 }}>
            {item.nama}
          </h2>
          {item.lokasi && (
            <span className="ui-font" style={{ fontSize: "12px", color: "#8a7962" }}>📍 {item.lokasi}</span>
          )}
          {item.deskripsi && (
            <p className="serif-title" style={{ fontSize: "13px", color: "#7a6a54", lineHeight: 1.6, margin: 0, fontWeight: 300 }}>
              {item.deskripsi.length > 100 ? item.deskripsi.slice(0, 100) + "…" : item.deskripsi}
            </p>
          )}
        </div>
      </Link>
    </article>
  );
}

export default async function AgendaPage() {
  const supabase = await createClient();
  const { data, count } = await supabase
    .from("agenda")
    .select("id, nama, tanggal, lokasi, deskripsi, slug, gambar_url", { count: "exact" })
    .order("created_at", { ascending: false });

  const items: AgendaItem[] = data ?? [];

  return (
    <div className="site-shell">
      <Navbar />

      <section className="px-sec" style={{ background: "#faf4e8", paddingTop: "56px", paddingBottom: "48px" }}>
        <div style={{ maxWidth: "1010px", margin: "0 auto" }}>
          <div className="ui-font" style={{ fontSize: "12px", color: "#8a7962", marginBottom: "20px", display: "flex", alignItems: "center", gap: "6px" }}>
            <Link href="/" style={{ color: "#8a7962", textDecoration: "none" }}>Beranda</Link>
            <span>›</span>
            <span style={{ color: "#4a3f30" }}>Agenda Budaya</span>
          </div>
          <div style={{ borderBottom: "1px solid rgba(209,78,31,.3)", paddingBottom: "28px" }}>
            <h1 className="decorative-font" style={{ fontSize: "36px", fontWeight: 400, color: "#6f5f4c", marginBottom: "10px", lineHeight: 1.2 }}>
              Agenda Budaya
            </h1>
            <p className="serif-title" style={{ fontSize: "14.22px", color: "#7a6a54", lineHeight: 1.55, fontWeight: 300, maxWidth: "600px" }}>
              Datang dan rasakan semarak berbagai acara budaya yang digelar di Tatar Galuh Ciamis.
              Dukung pemajuan kebudayaan daerah dengan menumbuhkan kecintaan terhadap budaya bangsa.
            </p>
            {count != null && count > 0 && (
              <p className="ui-font" style={{ fontSize: "12px", color: "#8a7962", marginTop: "10px" }}>{count} agenda tersedia</p>
            )}
          </div>
        </div>
      </section>

      <section className="px-sec" style={{ background: "#faf4e8", paddingBottom: "80px" }}>
        <div style={{ maxWidth: "1010px", margin: "0 auto" }}>
          {items.length > 0 ? (
            <div className="berita-grid">
              {items.map((item) => <AgendaCard key={item.id} item={item} />)}
            </div>
          ) : (
            <div style={{ textAlign: "center", paddingTop: "60px", paddingBottom: "60px" }}>
              <p className="serif-title" style={{ fontSize: "16px", color: "#8a7962", fontWeight: 300 }}>
                Belum ada agenda yang dipublikasikan.
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
