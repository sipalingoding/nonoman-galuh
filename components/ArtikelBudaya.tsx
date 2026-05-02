import Link from "next/link";

const kategoriList = [
  "Manuskrip",
  "Tradisi Lisan",
  "Ritus",
  "Adat Istiadat",
  "Teknologi Tradisional",
  "Pengetahuan Tradisional",
  "Bahasa",
  "Seni",
  "Olahraga Tradisional",
  "Permainan Rakyat",
];

export default function ArtikelBudaya() {
  return (
    <section style={{ background: "#0e7566", minHeight: "445px", padding: "88px 48px" }}>
      <div
        style={{
          maxWidth: "1010px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "48px",
          alignItems: "start",
        }}
      >
        <div aria-hidden="true" />
        <div>
          <h2
            className="serif-title"
            style={{ fontSize: "30px", fontWeight: 400, color: "#fffef9", marginBottom: "8px", lineHeight: 1.2 }}
          >
            Artikel Budaya
          </h2>
          <p
            className="ui-font"
            style={{ fontSize: "12px", color: "rgba(255,255,255,.82)", lineHeight: 1.35, marginBottom: "26px" }}
          >
            Catatan 10 Objek Pemajuan Kebudayaan di Tatar Galuh Ciamis
            <br />
            (Berdasarkan Undang-Undang (UU) Nomor 5 Tahun 2017 tentang Pemajuan Kebudayaan)
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
            {kategoriList.map((kategori) => (
              <Link
                href={`/artikel?kategori=${kategori.toLowerCase().replaceAll(" ", "-")}`}
                key={kategori}
                className="ui-font"
                style={{
                  background: "#faf4e8",
                  border: "none",
                  borderRadius: "4px",
                  padding: "10px 16px",
                  fontSize: "12px",
                  fontWeight: 700,
                  color: "#0e7566",
                  textAlign: "center",
                  textDecoration: "none",
                  display: "block",
                  transition: "background .2s, color .2s",
                }}
              >
                {kategori}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
