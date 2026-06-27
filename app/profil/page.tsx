import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GaleriCarousel from "@/components/GaleriCarousel";

// ── Data ─────────────────────────────────────────────────────────────

const STATS = [
  { angka: "2019", label: "Tahun Berdiri" },
  { angka: "500+", label: "Anggota Aktif" },
  { angka: "60+",  label: "Program Kegiatan" },
];

const MISI = [
  "Mendokumentasikan dan menyebarluaskan kekayaan budaya Galuh kepada masyarakat luas.",
  "Menyelenggarakan program kebudayaan yang menarik dan relevan bagi generasi muda.",
  "Membangun ekosistem kolaborasi antara seniman, budayawan, dan pemuda Ciamis.",
  "Mengintegrasikan teknologi digital dalam pelestarian dan pemajuan budaya daerah.",
];

const SEJARAH = [
  {
    tahun: "2018",
    judul: "Gagasan Awal",
    isi: "Sekelompok pemuda Ciamis yang peduli terhadap kelestarian budaya Galuh mulai merumuskan gagasan pembentukan wadah kepemudaan berbasis kebudayaan.",
  },
  {
    tahun: "2019",
    judul: "Pembentukan Pengurus",
    isi: "Terbentuklah kepengurusan pertama Pangauban Kawargian Nonoman Galuh dengan visi melestarikan dan memajukan kebudayaan Tatar Galuh Ciamis.",
  },
  {
    tahun: "2020",
    judul: "Program Perdana",
    isi: "Diluncurkan program pertama berupa diskusi budaya dan pameran seni yang menarik antusiasme puluhan pemuda dari berbagai kecamatan di Kabupaten Ciamis.",
  },
  {
    tahun: "2022",
    judul: "Ekspansi Digital",
    isi: "Nonoman Galuh mulai merambah platform digital untuk menjangkau lebih banyak generasi muda dan mendokumentasikan warisan budaya Galuh secara daring.",
  },
  {
    tahun: "2025",
    judul: "Portal Kebudayaan",
    isi: "Diluncurkannya portal resmi Nonoman Galuh sebagai pusat informasi kebudayaan Tatar Galuh yang dapat diakses oleh seluruh masyarakat Indonesia.",
  },
];

// ── Helper ────────────────────────────────────────────────────────────

function SectionHeader({ title, light = false }: { title: string; light?: boolean }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "24px", marginBottom: "48px" }}>
      <h2
        className="serif-title"
        style={{
          fontSize: "clamp(18px, 3vw, 24px)",
          fontWeight: 400,
          color: light ? "rgba(255,255,255,.9)" : "#6f5f4c",
          whiteSpace: "nowrap",
          margin: 0,
          lineHeight: 1.2,
        }}
      >
        {title}
      </h2>
      <div
        style={{
          height: "1px",
          flex: 1,
          background: light ? "rgba(255,255,255,.28)" : "rgba(209,78,31,.32)",
        }}
      />
    </div>
  );
}

// ── Page ─────────────────────────────────────────────────────────────

export default function ProfilePage() {
  return (
    <div className="site-shell">
      <Navbar />

      {/* ════════════════════════════════════════════════════════════
          HERO — SELAYANG PANDANG
      ════════════════════════════════════════════════════════════ */}
      <section
        style={{
          backgroundColor: "#c8341f",
          position: "relative",
          overflow: "hidden",
          paddingTop: "68px",
        }}
      >
        {/* Awan */}
        <div style={{ position: "absolute", top: 0, right: 0, width: "280px", height: "210px", pointerEvents: "none", zIndex: 1 }}>
          <Image src="/clouds.png" alt="" fill sizes="280px" style={{ objectFit: "contain", objectPosition: "top right" }} priority />
        </div>
        {/* Lingkaran dekorasi */}
        <div style={{ position: "absolute", bottom: "-100px", left: "-80px", width: "320px", height: "320px", borderRadius: "50%", background: "rgba(255,255,255,.055)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", top: "40px", right: "30%", width: "180px", height: "180px", borderRadius: "50%", background: "rgba(255,255,255,.04)", pointerEvents: "none" }} />

        {/* Breadcrumb */}
        <nav className="px-sec" style={{ position: "relative", zIndex: 2, display: "flex", alignItems: "center", gap: "8px", marginBottom: "36px" }}>
          <Link href="/" className="ui-font" style={{ fontSize: "11.5px", color: "rgba(255,255,255,.6)", textDecoration: "none" }}>Beranda</Link>
          <span style={{ color: "rgba(255,255,255,.35)", fontSize: "10px" }}>›</span>
          <span className="ui-font" style={{ fontSize: "11.5px", color: "rgba(255,255,255,.9)" }}>Tentang Kami</span>
        </nav>

        {/* Judul */}
        <div style={{ position: "relative", zIndex: 2, textAlign: "center", padding: "0 24px" }}>
          <div style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: "52px", height: "52px", borderRadius: "50%", backgroundColor: "rgba(255,255,255,.15)", border: "1px solid rgba(255,255,255,.3)", marginBottom: "20px" }}>
            <Image src="/Logo Nonoman Galuh 1.png" alt="Logo" width={28} height={38} style={{ objectFit: "contain", filter: "brightness(0) invert(1)", opacity: 0.9 }} />
          </div>

          <h1
            className="decorative-font"
            style={{ fontSize: "clamp(44px, 9vw, 78px)", color: "#fffef9", fontWeight: 400, margin: 0, lineHeight: 1.05, letterSpacing: "-1px" }}
          >
            Selayang Pandang
          </h1>

          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "14px", margin: "20px auto", maxWidth: "340px" }}>
            <div style={{ flex: 1, height: "1px", background: "rgba(246,222,102,.45)" }} />
            <span className="decorative-font" style={{ fontSize: "12px", color: "#f6de66", whiteSpace: "nowrap", letterSpacing: ".08em" }}>
              Pangauban Kawargian Nonoman Galuh
            </span>
            <div style={{ flex: 1, height: "1px", background: "rgba(246,222,102,.45)" }} />
          </div>

          <p className="serif-title" style={{ fontSize: "14px", color: "rgba(255,255,255,.78)", maxWidth: "500px", margin: "0 auto", lineHeight: 1.75 }}>
            Mengenal lebih dekat organisasi kepemudaan yang berkomitmen menjaga
            dan memajukan warisan budaya Tatar Galuh untuk generasi masa kini dan mendatang.
          </p>
        </div>

        {/* Gerbang illustration */}
        <div style={{ position: "relative", zIndex: 2, width: "100%", maxWidth: "500px", height: "240px", margin: "48px auto 0" }}>
          <Image src="/Rectangle.png" alt="Gerbang Galuh" fill sizes="500px" style={{ objectFit: "contain", objectPosition: "bottom center", opacity: 0.48 }} />
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          GALERI CAROUSEL — tepat di bawah hero
      ════════════════════════════════════════════════════════════ */}
      <GaleriCarousel />

      {/* ════════════════════════════════════════════════════════════
          PROFIL SINGKAT
      ════════════════════════════════════════════════════════════ */}
      <section className="px-sec" style={{ background: "#fffef9", paddingTop: "80px", paddingBottom: "80px" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <Image src="/Logo Nonoman Galuh 1.png" alt="Logo Nonoman Galuh" width={52} height={72} style={{ objectFit: "contain", margin: "0 auto 18px" }} />
            <h2 className="decorative-font" style={{ fontSize: "clamp(22px, 5vw, 34px)", fontWeight: 400, color: "#2c2416", margin: 0, lineHeight: 1.2 }}>
              Pangauban Kawargian
            </h2>
            <h2 className="decorative-font" style={{ fontSize: "clamp(22px, 5vw, 34px)", fontWeight: 400, color: "#c8341f", margin: 0, lineHeight: 1.2 }}>
              Nonoman Galuh
            </h2>
            <div style={{ width: "44px", height: "3px", background: "#c8341f", borderRadius: "999px", margin: "18px auto 0" }} />
          </div>

          <p className="serif-title" style={{ fontSize: "15px", color: "#4a3f30", lineHeight: 1.9, textAlign: "center", maxWidth: "720px", margin: "0 auto 52px" }}>
            <strong style={{ color: "#2c2416" }}>Nonoman Galuh</strong> adalah organisasi kepemudaan yang berfokus pada
            pelestarian dan pemajuan kebudayaan Tatar Galuh di Kabupaten Ciamis, Jawa Barat.
            Berdiri atas semangat{" "}
            <em style={{ color: "#c8341f" }}>Nata Salira, Nata Nagara, Nata Buana</em>,
            kami hadir untuk menghubungkan generasi muda dengan akar budaya leluhur Galuh
            yang kaya, agung, dan penuh makna.
          </p>

          {/* Stats */}
          <div
            className="tentang-stats-bar"
            style={{ background: "rgba(209,78,31,.12)", borderRadius: "18px", overflow: "hidden", gap: "1px", boxShadow: "0 2px 20px rgba(44,36,22,.07)" }}
          >
            {STATS.map((s, i) => (
              <div key={s.label} style={{ background: "#fffef9", padding: "32px 20px", textAlign: "center", borderLeft: i > 0 ? "1px solid rgba(209,78,31,.15)" : undefined }}>
                <div className="decorative-font" style={{ fontSize: "clamp(32px, 6vw, 44px)", color: "#c8341f", lineHeight: 1, marginBottom: "8px" }}>
                  {s.angka}
                </div>
                <div className="ui-font" style={{ fontSize: "11.5px", color: "#7a6a54", fontWeight: 700, letterSpacing: ".06em", textTransform: "uppercase" }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          SEJARAH BERDIRI
      ════════════════════════════════════════════════════════════ */}
      <section className="px-sec" style={{ background: "#faf4e8", paddingTop: "80px", paddingBottom: "88px" }}>
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>
          <SectionHeader title="Sejarah Berdiri" />

          <div style={{ position: "relative" }}>
            {/* Garis vertikal */}
            <div style={{ position: "absolute", left: "19px", top: "20px", bottom: "20px", width: "2px", background: "linear-gradient(to bottom, rgba(200,52,31,0), rgba(200,52,31,.3) 10%, rgba(200,52,31,.3) 90%, rgba(200,52,31,0))" }} />

            <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
              {SEJARAH.map((item, i) => (
                <div key={item.tahun} style={{ display: "flex", gap: "28px", paddingBottom: i < SEJARAH.length - 1 ? "44px" : "0", position: "relative" }}>
                  {/* Dot */}
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0, zIndex: 1 }}>
                    <div style={{ width: "40px", height: "40px", borderRadius: "50%", background: "#c8341f", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 0 0 5px rgba(200,52,31,.12)", flexShrink: 0 }}>
                      <span className="ui-font" style={{ fontSize: "10px", fontWeight: 700, color: "#fffef9", letterSpacing: ".03em" }}>
                        {item.tahun.slice(2)}
                      </span>
                    </div>
                  </div>

                  {/* Konten */}
                  <div style={{ flex: 1, background: "#fffef9", borderRadius: "14px", padding: "20px 24px", border: "1px solid #ede4d8", marginTop: "4px" }}>
                    <div className="decorative-font" style={{ fontSize: "13px", color: "#c8341f", marginBottom: "4px", letterSpacing: ".04em" }}>
                      {item.tahun}
                    </div>
                    <h3 className="serif-title" style={{ fontSize: "16px", fontWeight: 700, color: "#2c2416", margin: "0 0 10px", lineHeight: 1.3 }}>
                      {item.judul}
                    </h3>
                    <p className="serif-title" style={{ fontSize: "13.5px", color: "#7a6a54", lineHeight: 1.75, margin: 0 }}>
                      {item.isi}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          VISI & MISI
      ════════════════════════════════════════════════════════════ */}
      <section className="px-sec" style={{ background: "#0e7566", paddingTop: "80px", paddingBottom: "80px" }}>
        <div style={{ maxWidth: "1040px", margin: "0 auto" }}>
          <SectionHeader title="Visi & Misi" light />

          <div className="visi-misi-grid">
            {/* Visi */}
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
                <div style={{ width: "38px", height: "38px", borderRadius: "10px", background: "rgba(255,255,255,.14)", border: "1px solid rgba(255,255,255,.28)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#f6de66" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="3" />
                    <line x1="12" y1="2" x2="12" y2="5" /><line x1="12" y1="19" x2="12" y2="22" />
                    <line x1="2" y1="12" x2="5" y2="12" /><line x1="19" y1="12" x2="22" y2="12" />
                  </svg>
                </div>
                <h3 className="decorative-font" style={{ fontSize: "22px", color: "#f6de66", margin: 0, fontWeight: 400 }}>Visi</h3>
              </div>
              <div style={{ background: "rgba(255,255,255,.08)", border: "1px solid rgba(255,255,255,.14)", borderRadius: "14px", padding: "28px" }}>
                <p className="serif-title" style={{ fontSize: "15px", color: "rgba(255,255,255,.92)", lineHeight: 1.85, margin: 0, fontStyle: "italic" }}>
                  "Menjadi organisasi kepemudaan terdepan dalam pelestarian dan pemajuan kebudayaan Tatar Galuh yang berlandaskan nilai-nilai luhur leluhur, inovatif, dan inklusif untuk seluruh generasi."
                </p>
              </div>
              <div style={{ marginTop: "28px", paddingLeft: "16px", borderLeft: "2px solid rgba(246,222,102,.4)" }}>
                <p className="serif-title" style={{ fontSize: "13px", color: "#f6de66", lineHeight: 1.6, margin: "0 0 6px", fontStyle: "italic" }}>
                  hayua diponah-ponah, hayua dicawuh-cawuh
                </p>
                <span className="ui-font" style={{ fontSize: "11px", color: "rgba(255,255,255,.5)" }}>— Prasasti Kawali I</span>
              </div>
            </div>

            {/* Misi */}
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
                <div style={{ width: "38px", height: "38px", borderRadius: "10px", background: "rgba(255,255,255,.14)", border: "1px solid rgba(255,255,255,.28)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#f6de66" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 11 12 14 22 4" />
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                  </svg>
                </div>
                <h3 className="decorative-font" style={{ fontSize: "22px", color: "#f6de66", margin: 0, fontWeight: 400 }}>Misi</h3>
              </div>
              <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "12px" }}>
                {MISI.map((m, i) => (
                  <li key={i} style={{ display: "flex", gap: "14px", alignItems: "flex-start", background: "rgba(255,255,255,.07)", border: "1px solid rgba(255,255,255,.1)", borderRadius: "12px", padding: "16px 18px" }}>
                    <span style={{ width: "24px", height: "24px", borderRadius: "50%", background: "#f6de66", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: "1px" }}>
                      <span className="ui-font" style={{ fontSize: "10px", fontWeight: 700, color: "#2c2416" }}>{i + 1}</span>
                    </span>
                    <span className="serif-title" style={{ fontSize: "13.5px", color: "rgba(255,255,255,.86)", lineHeight: 1.68 }}>{m}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
