import Image from "next/image";
import Link from "next/link";

const agendaData = [
  { tanggal: "Ciamis, 08 Maret 2025 s/d\n06 Mei 2025" },
  { tanggal: "Ciamis, 04 Oktober 2024 s/d\n04 Oktober 2024" },
];

export default function AgendaBudaya() {
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
            {agendaData.map((agenda, i) => (
              <article key={i} style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <div
                  className="placeholder-block"
                  style={{ width: "100%", aspectRatio: ".78/1", borderRadius: 0 }}
                />
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
                  {agenda.tanggal}
                </p>
              </article>
            ))}
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
