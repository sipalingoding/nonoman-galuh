import Image from "next/image";
import Link from "next/link";
import { createClient } from "@/lib/supabase/server";

function ShareIcon({ children }: { children: React.ReactNode }) {
  return (
    <span
      style={{
        width: "22px",
        height: "22px",
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

function NewsCard({ item }: { item: { judul: string; tanggal: string; slug: string; gambar_url: string | null } }) {
  return (
    <article style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
      <Link href={`/berita/${item.slug}`} style={{ textDecoration: "none", display: "flex", flexDirection: "column", gap: "12px" }}>
        <div style={{ width: "100%", aspectRatio: "1.08/1", position: "relative", overflow: "hidden" }}>
          {item.gambar_url ? (
            <Image
              src={item.gambar_url}
              alt={item.judul}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 300px"
              style={{ objectFit: "cover" }}
            />
          ) : (
            <div className="placeholder-block" style={{ width: "100%", height: "100%" }} />
          )}
        </div>
        <h3
          className="decorative-font"
          style={{ fontSize: "17.07px", fontWeight: 400, color: "#4a3f30", lineHeight: 1.5, margin: 0 }}
        >
          {item.judul}
        </h3>
      </Link>
      <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
        <span className="ui-font" style={{ fontSize: "11px", color: "#8a7962" }}>
          {item.tanggal}
        </span>
        <div
          className="ui-font"
          style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "12px", color: "#4a3f30" }}
        >
          <span>Bagikan</span>
          <ShareIcon>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="white">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.553 4.12 1.522 5.855L0 24l6.316-1.491A11.952 11.952 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.878 0-3.641-.487-5.172-1.341l-.371-.218-3.748.885.9-3.657-.24-.386A9.937 9.937 0 0 1 2 12c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10z" />
            </svg>
          </ShareIcon>
          <ShareIcon>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="white">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </ShareIcon>
          <ShareIcon>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="white">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.259 5.629L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
            </svg>
          </ShareIcon>
        </div>
      </div>
    </article>
  );
}

export default async function BeritaInformasi() {
  const supabase = await createClient();
  const { data: beritaData } = await supabase
    .from("berita")
    .select("judul, tanggal, slug, gambar_url")
    .order("created_at", { ascending: false })
    .limit(3);

  const items = beritaData ?? [];

  return (
    <section className="px-sec" style={{ background: "#faf4e8", paddingTop: "34px", paddingBottom: "92px" }}>
      <div style={{ textAlign: "center", marginBottom: "48px" }}>
        <h2
          className="decorative-font"
          style={{ fontSize: "32.71px", fontWeight: 400, color: "#6f5f4c", marginBottom: "13px", lineHeight: 1.2 }}
        >
          Berita dan Informasi
        </h2>
        <p
          className="serif-title"
          style={{
            fontSize: "14.22px",
            color: "#7a6a54",
            maxWidth: "610px",
            margin: "0 auto",
            lineHeight: 1.55,
            fontWeight: 400,
          }}
        >
          Banyak informasi positif tentang kegiatan budaya yang sering luput dari perhatian kita.
          Pangauban Kawargian Nonoman Galuh hadir dengan misi untuk menyebarkan berbagai informasi
          mengenai kebudayaan yang ada di Kabupaten Ciamis.
        </p>
      </div>

      {items.length > 0 ? (
        <div className="berita-grid">
          {items.map((item) => (
            <NewsCard key={item.slug} item={item} />
          ))}
        </div>
      ) : (
        <div className="berita-grid">
          {[1, 2, 3].map((i) => (
            <article key={i} style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <div className="placeholder-block" style={{ width: "100%", aspectRatio: "1.08/1", borderRadius: 0 }} />
              <div className="placeholder-block" style={{ width: "80%", height: "18px" }} />
              <div className="placeholder-block" style={{ width: "40%", height: "12px" }} />
            </article>
          ))}
        </div>
      )}

      <div style={{ textAlign: "center", marginTop: "46px" }}>
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
          Lihat Berita lainnya
        </Link>
      </div>
    </section>
  );
}
