import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { createClient } from "@/lib/supabase/server";

type TokohItem = {
  id: string;
  nama: string;
  jabatan: string | null;
  bidang: string | null;
  foto_url: string | null;
  slug: string | null;
};

function TokohCard({ item }: { item: TokohItem }) {
  const href = item.slug ? `/tokoh/${item.slug}` : "#";
  return (
    <article style={{ display: "flex", flexDirection: "column", borderRadius: "6px", overflow: "hidden" }}>
      <Link href={href} style={{ textDecoration: "none", display: "flex", flexDirection: "column" }}>
        <div style={{ width: "100%", aspectRatio: ".78/1", position: "relative", overflow: "hidden" }}>
          {item.foto_url ? (
            <Image
              src={item.foto_url}
              alt={item.nama}
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 200px"
              style={{ objectFit: "cover", objectPosition: "top center" }}
            />
          ) : (
            <div className="placeholder-block" style={{ width: "100%", height: "100%" }} />
          )}
        </div>
        <div style={{ background: "#0e7566", color: "#fffef9", padding: "10px 8px", textAlign: "center", minHeight: "52px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "3px" }}>
          <span className="serif-title" style={{ fontSize: "12px", fontWeight: 700 }}>{item.nama}</span>
          {item.jabatan && <span className="ui-font" style={{ fontSize: "10px", opacity: 0.85 }}>{item.jabatan}</span>}
        </div>
      </Link>
    </article>
  );
}

export default async function TokohPage() {
  const supabase = await createClient();
  const { data, count } = await supabase
    .from("tokoh")
    .select("id, nama, jabatan, bidang, foto_url, slug", { count: "exact" })
    .order("created_at", { ascending: false });

  const items: TokohItem[] = data ?? [];

  return (
    <div className="site-shell">
      <Navbar />

      <section className="px-sec" style={{ background: "#faf4e8", paddingTop: "56px", paddingBottom: "48px" }}>
        <div style={{ maxWidth: "1010px", margin: "0 auto" }}>
          <div className="ui-font" style={{ fontSize: "12px", color: "#8a7962", marginBottom: "20px", display: "flex", alignItems: "center", gap: "6px" }}>
            <Link href="/" style={{ color: "#8a7962", textDecoration: "none" }}>Beranda</Link>
            <span>›</span>
            <span style={{ color: "#4a3f30" }}>Wanoh Ka Tokoh</span>
          </div>
          <div style={{ borderBottom: "1px solid rgba(209,78,31,.3)", paddingBottom: "28px" }}>
            <h1 className="decorative-font" style={{ fontSize: "36px", fontWeight: 400, color: "#6f5f4c", marginBottom: "10px", lineHeight: 1.2 }}>
              Wanoh Ka Tokoh
            </h1>
            <p className="serif-title" style={{ fontSize: "14.22px", color: "#7a6a54", lineHeight: 1.55, fontWeight: 300, maxWidth: "600px" }}>
              Direktori informasi mengenai kontribusi dan kiprah tokoh-tokoh asal Tatar Galuh Ciamis
              yang telah berperan penting dalam perjalanan sejarah Nusantara dan Indonesia.
            </p>
            {count != null && count > 0 && (
              <p className="ui-font" style={{ fontSize: "12px", color: "#8a7962", marginTop: "10px" }}>{count} tokoh terdaftar</p>
            )}
          </div>
        </div>
      </section>

      <section className="px-sec" style={{ background: "#faf4e8", paddingBottom: "80px" }}>
        <div style={{ maxWidth: "1010px", margin: "0 auto" }}>
          {items.length > 0 ? (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "14px" }}>
              {items.map((item) => <TokohCard key={item.id} item={item} />)}
            </div>
          ) : (
            <div style={{ textAlign: "center", paddingTop: "60px", paddingBottom: "60px" }}>
              <p className="serif-title" style={{ fontSize: "16px", color: "#8a7962", fontWeight: 300 }}>
                Belum ada tokoh yang dipublikasikan.
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
