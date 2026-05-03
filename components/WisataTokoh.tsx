import Link from "next/link";

const tokohData = [
  { nama: "Mr. Iwa Kusumasumantri" },
  { nama: "R.A. Kurnianingrat" },
  { nama: "Rd. Ema Bratakusumah" },
];

export default function WisataTokoh() {
  return (
    <section className="px-sec" style={{ background: "#faf4e8", paddingBottom: "72px" }}>
      <div
        style={{
          maxWidth: "1010px",
          margin: "0 auto 48px",
          borderTop: "1px solid rgba(209,78,31,.38)",
        }}
      />
      <div className="wisata-grid">
        {/* Left: tokoh cards */}
        <div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "10px" }}>
            {tokohData.map((tokoh) => (
              <article
                key={tokoh.nama}
                style={{ display: "flex", flexDirection: "column", borderRadius: "6px", overflow: "hidden" }}
              >
                <div className="placeholder-block" style={{ width: "100%", aspectRatio: ".78/1", borderRadius: 0 }} />
                <div
                  className="serif-title"
                  style={{
                    background: "#0e7566",
                    color: "#fffef9",
                    fontSize: "11.38px",
                    fontWeight: 700,
                    padding: "8px",
                    textAlign: "center",
                  }}
                >
                  {tokoh.nama}
                </div>
              </article>
            ))}
          </div>
          <div style={{ marginTop: "24px", textAlign: "center" }}>
            <Link
              href="/tokoh"
              className="serif-title"
              style={{
                display: "inline-block",
                background: "#d14e1f",
                color: "#fffef9",
                padding: "10px 28px",
                borderRadius: "999px",
                fontSize: "12.8px",
                fontWeight: 300,
                textDecoration: "none",
              }}
            >
              Lihat Tokoh Lainnya
            </Link>
          </div>
        </div>

        {/* Right: text */}
        <div style={{ paddingTop: "2px" }}>
          <h2
            className="decorative-font"
            style={{
              fontSize: "32.71px",
              fontWeight: 400,
              color: "#6f5f4c",
              marginBottom: "16px",
              lineHeight: 1.2,
            }}
          >
            Wanoh Ka Tokoh
          </h2>
          <p
            className="serif-title"
            style={{ fontSize: "14.22px", color: "#6b5e4c", lineHeight: 1.65, fontWeight: 300 }}
          >
            Direktori informasi mengenai{" "}
            <strong style={{ color: "#2c2416", fontWeight: 700 }}>
              kontribusi dan kiprah tokoh-tokoh asal Tatar Galuh Ciamis
            </strong>{" "}
            yang telah berperan penting dalam perjalanan sejarah Nusantara dan Indonesia.
            <br />
            <br />
            Melalui direktori ini, diharapkan masyarakat dapat mengenal lebih dekat sosok-sosok
            inspiratif dari Galuh—baik di bidang budaya, pemerintahan, pendidikan, maupun
            perjuangan—yang turut mewarnai dan memberikan sumbangsih berharga bagi kemajuan bangsa.
          </p>
        </div>
      </div>
    </section>
  );
}
