import Link from "next/link";

const artikelData = [
  { id: 1, judul: "Makna Filosofis Batik Parang dalam Budaya Jawa", kategori: "Batik", penulis: "Dr. Sari Wulandari", tanggal: "28 Apr 2026", slug: "makna-batik-parang" },
  { id: 2, judul: "Gamelan Degung: Harmoni Tradisi Sunda", kategori: "Musik", penulis: "Ahmad Fauzan", tanggal: "26 Apr 2026", slug: "gamelan-degung-sunda" },
  { id: 3, judul: "Tari Kecak Bali: Antara Ritual dan Pertunjukan", kategori: "Tari", penulis: "I Wayan Sadra", tanggal: "24 Apr 2026", slug: "tari-kecak-bali" },
  { id: 4, judul: "Keris: Senjata Pusaka yang Menjadi Warisan Dunia", kategori: "Pusaka", penulis: "Bambang Sutrisno", tanggal: "22 Apr 2026", slug: "keris-warisan-dunia" },
  { id: 5, judul: "Noken Papua: Tas Anyam yang Sarat Makna Sosial", kategori: "Kerajinan", penulis: "Hestia Lestari", tanggal: "20 Apr 2026", slug: "noken-papua" },
  { id: 6, judul: "Wayang Kulit: Kisah Ramayana dalam Bayangan", kategori: "Pertunjukan", penulis: "Ki Manteb Sudharsono", tanggal: "18 Apr 2026", slug: "wayang-kulit-ramayana" },
  { id: 7, judul: "Rumah Gadang: Arsitektur Matrilineal Minangkabau", kategori: "Arsitektur", penulis: "Prof. Rahmat Hidayat", tanggal: "16 Apr 2026", slug: "rumah-gadang-minangkabau" },
  { id: 8, judul: "Angklung: Alat Musik Bambu Mendunia dari Sunda", kategori: "Musik", penulis: "Yayan Supriyatna", tanggal: "14 Apr 2026", slug: "angklung-bambu-sunda" },
];

const kategoriList = [
  { nama: "Semua", count: 45 },
  { nama: "Batik", count: 8 },
  { nama: "Musik", count: 12 },
  { nama: "Tari", count: 9 },
  { nama: "Pusaka", count: 6 },
  { nama: "Kerajinan", count: 7 },
  { nama: "Pertunjukan", count: 11 },
  { nama: "Arsitektur", count: 5 },
  { nama: "Kuliner", count: 10 },
  { nama: "Bahasa", count: 8 },
];

const KATEGORI_COLORS: Record<string, { bg: string; text: string }> = {
  Batik: { bg: "#FFF3E0", text: "#E8A020" },
  Musik: { bg: "#E8F5E9", text: "#2A5C45" },
  Tari: { bg: "#FCE4EC", text: "#C84B31" },
  Pusaka: { bg: "#F3E5F5", text: "#6A1B9A" },
  Kerajinan: { bg: "#E3F2FD", text: "#1565C0" },
  Pertunjukan: { bg: "#FFF8E1", text: "#F57F17" },
  Arsitektur: { bg: "#E8F5E9", text: "#1B5E20" },
  Kuliner: { bg: "#FBE9E7", text: "#BF360C" },
};

export default function ArtikelBudaya() {
  return (
    <section className="py-12" style={{ backgroundColor: "white" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-end justify-between mb-8">
          <div>
            <div
              className="flex items-center gap-2 mb-2"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              <span
                className="w-6 h-0.5 inline-block"
                style={{ backgroundColor: "var(--medium-green)" }}
              />
              <span
                className="text-xs font-bold uppercase tracking-widest"
                style={{ color: "var(--medium-green)" }}
              >
                Wawasan
              </span>
            </div>
            <h2
              className="text-2xl font-black"
              style={{ color: "var(--dark-green)", fontFamily: "var(--font-serif)" }}
            >
              Artikel Budaya
            </h2>
          </div>
          <Link href="/artikel" className="btn-outline hidden sm:inline-flex text-xs">
            Lihat Semua
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Article List - 2/3 */}
          <div className="lg:col-span-2">
            <div className="border rounded-lg overflow-hidden border-[#e8dfc8]">
              {/* Table Header */}
              <div
                className="grid grid-cols-12 px-4 py-2.5 text-xs font-bold uppercase tracking-wide border-b"
                style={{
                  backgroundColor: "var(--dark-green)",
                  color: "var(--yellow)",
                  fontFamily: "var(--font-sans)",
                  borderColor: "rgba(255,255,255,0.1)",
                }}
              >
                <div className="col-span-6">Judul</div>
                <div className="col-span-2 hidden sm:block">Kategori</div>
                <div className="col-span-3 hidden sm:block">Penulis</div>
                <div className="col-span-1 text-right">Tgl</div>
              </div>

              {/* Article Rows */}
              {artikelData.map((artikel, i) => {
                const colors = KATEGORI_COLORS[artikel.kategori] || { bg: "#F5F5F5", text: "#333" };
                return (
                  <Link
                    href={`/artikel/${artikel.slug}`}
                    key={artikel.id}
                    className={`grid grid-cols-12 px-4 py-3 items-center hover:bg-[#f9f5eb] transition-colors border-b last:border-b-0 ${i % 2 === 0 ? "bg-white" : "bg-[#fdfaf4]"}`}
                    style={{ borderColor: "#f0e8d0", fontFamily: "var(--font-sans)" }}
                  >
                    <div className="col-span-7 sm:col-span-6 pr-3">
                      <p
                        className="text-xs font-semibold leading-snug line-clamp-2"
                        style={{ color: "var(--dark-green)" }}
                      >
                        {artikel.judul}
                      </p>
                    </div>
                    <div className="col-span-5 sm:col-span-2 hidden sm:block">
                      <span
                        className="text-xs font-semibold px-2 py-0.5 rounded-full"
                        style={{ backgroundColor: colors.bg, color: colors.text }}
                      >
                        {artikel.kategori}
                      </span>
                    </div>
                    <div className="col-span-3 hidden sm:block">
                      <p
                        className="text-xs truncate"
                        style={{ color: "var(--text-light)" }}
                      >
                        {artikel.penulis}
                      </p>
                    </div>
                    <div className="col-span-5 sm:col-span-1 text-right">
                      <p
                        className="text-xs whitespace-nowrap"
                        style={{ color: "var(--text-light)" }}
                      >
                        {artikel.tanggal.split(" ").slice(0, 2).join(" ")}
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Kategori Sidebar - 1/3 */}
          <div>
            <div
              className="rounded-lg p-4 border"
              style={{ backgroundColor: "var(--cream)", borderColor: "#e8dfc8" }}
            >
              <h3
                className="font-bold text-sm mb-4 pb-2 border-b"
                style={{ color: "var(--dark-green)", fontFamily: "var(--font-serif)", borderColor: "#e8dfc8" }}
              >
                Kategori Artikel
              </h3>
              <ul className="space-y-1">
                {kategoriList.map((k) => (
                  <li key={k.nama}>
                    <Link
                      href={`/artikel?kategori=${k.nama.toLowerCase()}`}
                      className="flex items-center justify-between py-1.5 px-2 rounded text-xs hover:bg-white transition-colors group"
                      style={{ fontFamily: "var(--font-sans)" }}
                    >
                      <span
                        className="font-semibold group-hover:text-[var(--orange)] transition-colors"
                        style={{ color: "var(--dark-green)" }}
                      >
                        {k.nama}
                      </span>
                      <span
                        className="text-xs font-bold px-1.5 py-0.5 rounded"
                        style={{ backgroundColor: "var(--dark-green)", color: "var(--yellow)" }}
                      >
                        {k.count}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick info box */}
            <div
              className="rounded-lg p-4 mt-4"
              style={{ backgroundColor: "var(--dark-green)" }}
            >
              <p
                className="text-xs font-bold mb-2"
                style={{ color: "var(--yellow)", fontFamily: "var(--font-sans)" }}
              >
                Kontribusi Artikel
              </p>
              <p
                className="text-xs leading-relaxed mb-3 opacity-80"
                style={{ color: "white", fontFamily: "var(--font-sans)" }}
              >
                Punya pengetahuan budaya? Bagikan wawasan Anda kepada ribuan pembaca kami.
              </p>
              <Link
                href="/tulis-artikel"
                className="btn-primary text-xs w-full justify-center"
                style={{ backgroundColor: "var(--orange)" }}
              >
                Tulis Artikel
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
