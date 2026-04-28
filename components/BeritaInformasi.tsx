import Link from "next/link";

const beritaData = [
  {
    id: 1,
    kategori: "Budaya",
    judul: "Festival Seni Tradisional Nusantara 2026 Resmi Dibuka",
    ringkasan: "Ribuan seniman dari seluruh penjuru nusantara berkumpul untuk merayakan kekayaan budaya lokal dalam festival tahunan yang ke-12.",
    tanggal: "28 Apr 2026",
    slug: "festival-seni-tradisional-2026",
  },
  {
    id: 2,
    kategori: "Informasi",
    judul: "Program Beasiswa Seni dan Budaya Kembali Dibuka",
    ringkasan: "Pemerintah kembali membuka program beasiswa khusus bagi para pelajar yang berminat mendalami seni dan budaya nusantara.",
    tanggal: "25 Apr 2026",
    slug: "beasiswa-seni-budaya-2026",
  },
  {
    id: 3,
    kategori: "Wisata",
    judul: "Destinasi Wisata Budaya Terbaik Musim Ini",
    ringkasan: "Temukan destinasi wisata budaya yang wajib dikunjungi, mulai dari candi bersejarah hingga desa adat yang masih terjaga keasliannya.",
    tanggal: "22 Apr 2026",
    slug: "destinasi-wisata-budaya-terbaik",
  },
  {
    id: 4,
    kategori: "Tradisi",
    judul: "Upacara Adat Seren Taun Digelar Meriah di Kuningan",
    ringkasan: "Masyarakat Sunda di Kuningan kembali menggelar upacara adat Seren Taun sebagai wujud syukur atas hasil panen.",
    tanggal: "20 Apr 2026",
    slug: "upacara-adat-seren-taun-kuningan",
  },
  {
    id: 5,
    kategori: "Seni",
    judul: "Wayang Golek Modern: Menjaga Tradisi di Era Digital",
    ringkasan: "Para dalang muda berinovasi memperkenalkan wayang golek kepada generasi Z melalui platform digital tanpa meninggalkan pakem.",
    tanggal: "18 Apr 2026",
    slug: "wayang-golek-modern-era-digital",
  },
  {
    id: 6,
    kategori: "Kuliner",
    judul: "Kuliner Nusantara Masuk Daftar Warisan UNESCO",
    ringkasan: "Tiga jenis masakan tradisional Indonesia berhasil masuk dalam daftar warisan budaya tak benda UNESCO tahun ini.",
    tanggal: "15 Apr 2026",
    slug: "kuliner-nusantara-warisan-unesco",
  },
];

const KATEGORI_COLORS: Record<string, string> = {
  Budaya: "#2A5C45",
  Informasi: "#1B3B2F",
  Wisata: "#E8A020",
  Tradisi: "#C84B31",
  Seni: "#3D7A5E",
  Kuliner: "#D4A017",
};

function NewsCard({ item }: { item: typeof beritaData[0] }) {
  return (
    <article
      className="rounded-lg overflow-hidden card-hover cursor-pointer bg-white border border-[#e8dfc8]"
    >
      {/* Placeholder image */}
      <div
        className="h-40 flex items-end p-3 relative"
        style={{ backgroundColor: KATEGORI_COLORS[item.kategori] || "#2A5C45" }}
      >
        <div className="absolute inset-0 opacity-20">
          <svg viewBox="0 0 200 160" className="w-full h-full">
            <rect width="200" height="160" fill="currentColor" />
            <polygon points="0,160 60,80 120,160" fill="rgba(0,0,0,0.3)" />
            <polygon points="80,160 150,60 200,160" fill="rgba(0,0,0,0.2)" />
            <circle cx="160" cy="40" r="30" fill="rgba(255,255,255,0.1)" />
          </svg>
        </div>
        <span
          className="relative z-10 text-xs font-bold px-2 py-0.5 rounded"
          style={{ backgroundColor: "rgba(255,255,255,0.9)", color: KATEGORI_COLORS[item.kategori] || "#2A5C45" }}
        >
          {item.kategori}
        </span>
      </div>

      <div className="p-4">
        <p
          className="text-xs mb-1.5"
          style={{ color: "var(--text-light)", fontFamily: "var(--font-sans)" }}
        >
          {item.tanggal}
        </p>
        <h3
          className="font-bold text-sm leading-snug mb-2 line-clamp-2"
          style={{ color: "var(--dark-green)", fontFamily: "var(--font-serif)" }}
        >
          {item.judul}
        </h3>
        <p
          className="text-xs leading-relaxed line-clamp-2 mb-3"
          style={{ color: "var(--text-medium)", fontFamily: "var(--font-sans)" }}
        >
          {item.ringkasan}
        </p>
        <Link
          href={`/berita/${item.slug}`}
          className="text-xs font-semibold flex items-center gap-1 hover:gap-2 transition-all"
          style={{ color: "var(--orange)", fontFamily: "var(--font-sans)" }}
        >
          Selengkapnya
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </Link>
      </div>
    </article>
  );
}

export default function BeritaInformasi() {
  return (
    <section className="py-12 paper-bg">
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
                style={{ backgroundColor: "var(--orange)" }}
              />
              <span
                className="text-xs font-bold uppercase tracking-widest"
                style={{ color: "var(--orange)" }}
              >
                Terkini
              </span>
            </div>
            <h2
              className="text-2xl font-black"
              style={{ color: "var(--dark-green)", fontFamily: "var(--font-serif)" }}
            >
              Berita dan Informasi
            </h2>
            <p
              className="text-sm mt-1 max-w-md"
              style={{ color: "var(--text-light)", fontFamily: "var(--font-sans)" }}
            >
              Kabar terbaru seputar seni, budaya, dan tradisi nusantara yang perlu Anda ketahui.
            </p>
          </div>
          <Link href="/berita" className="btn-outline hidden sm:inline-flex text-xs">
            Lihat Semua
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {beritaData.map((item) => (
            <NewsCard key={item.id} item={item} />
          ))}
        </div>

        <div className="mt-6 text-center sm:hidden">
          <Link href="/berita" className="btn-outline text-sm">
            Lihat Semua Berita
          </Link>
        </div>
      </div>
    </section>
  );
}
