import Image from "next/image";
import Link from "next/link";
import { createClient } from "@/lib/supabase/server";

export default async function AgendaBudaya() {
  const supabase = await createClient();
  const { data: agendaData } = await supabase
    .from("agenda")
    .select("id, nama, tanggal, gambar_url")
    .order("created_at", { ascending: false })
    .limit(2);

  const items = agendaData ?? [];

  const displayItems =
    items.length >= 2
      ? items
      : [
          ...items,
          ...Array.from({ length: 2 - items.length }, (_, i) => ({
            id: `placeholder-${i}`,
            nama: "",
            tanggal: "",
            gambar_url: null as string | null,
          })),
        ];

  return (
    <section className="px-sec" style={{ background: "#faf4e8", paddingTop: "78px", paddingBottom: "62px" }}>
      <div className="agenda-grid">
        {/* Left */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            paddingTop: "8px",
          }}
        >
          <h2
            className="decorative-font"
            style={{ fontSize: "32.71px", fontWeight: 400, color: "#6f5f4c", marginBottom: "13px", lineHeight: 1.2 }}
          >
            Agenda Budaya
          </h2>
          <p
            className="serif-title"
            style={{
              fontSize: "14.22px",
              color: "#7a6a54",
              maxWidth: "480px",
              lineHeight: 1.55,
              marginBottom: "26px",
              fontWeight: 300,
            }}
          >
            Datang dan rasakan semarak berbagai acara budaya yang digelar di Tatar Galuh Ciamis.
            Dukung Pemajuan Kebudayaan Daerah dan warisan leluhur Galuh dengan menumbuhkan
            kepedulian, kecintaan, dan rasa memiliki terhadap budaya bangsa.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "10px",
              width: "100%",
              maxWidth: "420px",
              marginBottom: "22px",
            }}
          >
            {displayItems.map((agenda, i) => {
              const href = "/agenda";
              return (
                <article key={agenda.id ?? i} style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  <Link href={href} style={{ textDecoration: "none", display: "flex", flexDirection: "column", gap: "8px" }}>
                    <div style={{ width: "100%", aspectRatio: ".78/1", position: "relative", overflow: "hidden" }}>
                      {agenda.gambar_url ? (
                        <Image
                          src={agenda.gambar_url}
                          alt={agenda.nama || "Agenda"}
                          fill
                          sizes="(max-width: 640px) 50vw, 200px"
                          style={{ objectFit: "cover" }}
                        />
                      ) : (
                        <div className="placeholder-block" style={{ width: "100%", height: "100%" }} />
                      )}
                    </div>
                    <p
                      className="serif-title"
                      style={{
                        fontSize: "9.96px",
                        fontWeight: 300,
                        color: "#8a7962",
                        textAlign: "center",
                        whiteSpace: "pre-line",
                      }}
                    >
                      {agenda.tanggal || "—"}
                    </p>
                  </Link>
                </article>
              );
            })}
          </div>

          <Link
            href="/agenda"
            className="serif-title"
            style={{
              display: "inline-block",
              background: "#d14e1f",
              color: "#fffef9",
              padding: "10px 26px",
              borderRadius: "999px",
              fontSize: "12.8px",
              fontWeight: 300,
              textDecoration: "none",
            }}
          >
            Lihat Agenda lainnya
          </Link>
        </div>

        {/* Right */}
        <div className="agenda-right">
          <Image
            src="/Picture → wayang-kalender.png.png"
            alt="Ilustrasi Agenda Budaya"
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 443px"
            style={{ objectFit: "cover", objectPosition: "top center" }}
          />
        </div>
      </div>
    </section>
  );
}
