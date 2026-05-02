import Image from "next/image";
import Link from "next/link";

const agendaData = [
  { tanggal: "Ciamis, 08 Maret 2025 s/d\n06 Mei 2025" },
  { tanggal: "Ciamis, 04 Oktober 2024 s/d\n04 Oktober 2024" },
];

export default function AgendaBudaya() {
  return (
    <section style={{ background: "#faf4e8", padding: "78px 48px 62px" }}>
      <div
        style={{
          maxWidth: "1010px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 443px",
          alignItems: "start",
          gap: "55px",
        }}
      >
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
            className="serif-title"
            style={{ fontSize: "30px", fontWeight: 400, color: "#6f5f4c", marginBottom: "13px", lineHeight: 1.2 }}
          >
            Agenda Budaya
          </h2>
          <p
            className="ui-font"
            style={{
              fontSize: "13px",
              color: "#7a6a54",
              maxWidth: "480px",
              lineHeight: 1.45,
              marginBottom: "26px",
              fontWeight: 500,
            }}
          >
            Datang dan rasakan semarak berbagai acara budaya yang digelar di Tatar Galuh Ciamis.
            Dukung Pemajuan Kebudayaan Daerah dan warisan leluhur Galuh dengan menumbuhkan kepedulian,
            kecintaan, dan rasa memiliki terhadap budaya bangsa.
          </p>

          <div
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", width: "420px", marginBottom: "22px" }}
          >
            {agendaData.map((agenda, i) => (
              <article key={i} style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <div
                  className="placeholder-block"
                  style={{ width: "100%", aspectRatio: ".78/1", borderRadius: 0 }}
                />
                <p
                  className="ui-font"
                  style={{
                    fontSize: "10px",
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
            className="ui-font"
            style={{
              display: "inline-block",
              background: "#d14e1f",
              color: "#fffef9",
              padding: "9px 24px",
              borderRadius: "999px",
              fontSize: "12px",
              fontWeight: 600,
              textDecoration: "none",
            }}
          >
            Lihat Agenda lainnya
          </Link>
        </div>

        {/* Right */}
        <div style={{ position: "relative", width: "443px", height: "521px", overflow: "hidden" }}>
          <Image
            src="/Picture → wayang-kalender.png.png"
            alt="Ilustrasi Agenda Budaya"
            fill
            sizes="443px"
            style={{ objectFit: "cover", objectPosition: "top center" }}
          />
        </div>
      </div>
    </section>
  );
}
