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
    <section className="px-sec" style={{ background: "#0e7566", minHeight: "445px", paddingTop: "88px", paddingBottom: "88px" }}>
      <div className="artikel-grid">
        <div aria-hidden="true" className="artikel-placeholder-col" />
        <div>
          <h2
            className="decorative-font"
            style={{ fontSize: "32.71px", fontWeight: 400, color: "#fffef9", marginBottom: "8px", lineHeight: 1.2 }}
          >
            Artikel Budaya
          </h2>
          <p
            className="serif-title"
            style={{ fontSize: "14.22px", color: "rgba(255,255,255,.82)", lineHeight: 1.5, marginBottom: "26px", fontWeight: 400 }}
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
                className="serif-title"
                style={{
                  background: "#faf4e8",
                  border: "none",
                  borderRadius: "4px",
                  padding: "10px 16px",
                  fontSize: "11.38px",
                  fontWeight: 700,
                  color: "#0e7566",
                  textAlign: "center",
                  textDecoration: "none",
                  display: "block",
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
