import Link from "next/link";

const bukuData = [
  { id: 1, judul: "Sejarah Kebudayaan Sunda", penulis: "Prof. Edi S. Ekadjati", tahun: 2019, warna: "#2A5C45", aksen: "#F5C842" },
  { id: 2, judul: "Batik Indonesia Warisan Dunia", penulis: "Iwan Tirta", tahun: 2020, warna: "#C84B31", aksen: "#F5EDD5" },
  { id: 3, judul: "Wayang: Kosmologi Jawa", penulis: "Dr. Bambang Sudibyo", tahun: 2021, warna: "#1B3B2F", aksen: "#E8A020" },
  { id: 4, judul: "Musik Nusantara", penulis: "R.M. Soedarsono", tahun: 2018, warna: "#5C3D1E", aksen: "#F5C842" },
  { id: 5, judul: "Tari Tradisi Melayu", penulis: "Sumaryono", tahun: 2022, warna: "#3D7A5E", aksen: "#FCE4EC" },
  { id: 6, judul: "Kuliner Nusantara", penulis: "William Wongso", tahun: 2023, warna: "#D4A017", aksen: "#1B3B2F" },
];

function BookCover({ buku }: { buku: typeof bukuData[0] }) {
  const initials = buku.judul
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("");

  return (
    <div
      className="relative rounded overflow-hidden shadow-md hover:shadow-xl transition-shadow cursor-pointer group"
      style={{
        backgroundColor: buku.warna,
        aspectRatio: "2/3",
        minHeight: "160px",
      }}
    >
      {/* Spine decoration */}
      <div
        className="absolute left-0 top-0 bottom-0 w-1.5"
        style={{ backgroundColor: buku.aksen, opacity: 0.8 }}
      />

      {/* Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg viewBox="0 0 100 150" className="w-full h-full">
          <pattern id={`p${buku.id}`} x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="10" cy="10" r="3" fill="white" />
          </pattern>
          <rect width="100" height="150" fill={`url(#p${buku.id})`} />
        </svg>
      </div>

      {/* Content */}
      <div className="absolute inset-0 p-3 flex flex-col justify-between">
        {/* Initials decoration */}
        <div
          className="w-10 h-10 rounded flex items-center justify-center text-lg font-black opacity-60"
          style={{ backgroundColor: buku.aksen, color: buku.warna }}
        >
          {initials}
        </div>

        <div>
          <p
            className="text-xs font-black leading-tight mb-1 line-clamp-3"
            style={{ color: buku.aksen, fontFamily: "var(--font-serif)" }}
          >
            {buku.judul}
          </p>
          <p
            className="text-xs opacity-70 line-clamp-1"
            style={{ color: buku.aksen, fontFamily: "var(--font-sans)" }}
          >
            {buku.penulis}
          </p>
        </div>
      </div>

      {/* Hover overlay */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
        style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
      >
        <span
          className="text-xs font-bold px-3 py-1.5 rounded"
          style={{ backgroundColor: "var(--yellow)", color: "var(--dark-green)" }}
        >
          Lihat Detail
        </span>
      </div>
    </div>
  );
}

export default function RakBuku() {
  return (
    <section
      className="py-12"
      style={{ backgroundColor: "var(--yellow)" }}
    >
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
                style={{ backgroundColor: "var(--dark-green)" }}
              />
              <span
                className="text-xs font-bold uppercase tracking-widest"
                style={{ color: "var(--dark-green)" }}
              >
                Koleksi
              </span>
            </div>
            <h2
              className="text-2xl font-black"
              style={{ color: "var(--dark-green)", fontFamily: "var(--font-serif)" }}
            >
              Rak Buku — Sale Manu
            </h2>
            <p
              className="text-sm mt-1 max-w-md"
              style={{ color: "rgba(27,59,47,0.7)", fontFamily: "var(--font-sans)" }}
            >
              Koleksi buku pilihan tentang seni, budaya, dan kearifan lokal nusantara.
            </p>
          </div>
          <Link
            href="/buku"
            className="text-xs font-semibold px-4 py-2 rounded border-2 border-[var(--dark-green)] text-[var(--dark-green)] hover:bg-[var(--dark-green)] hover:text-[var(--yellow)] transition-colors hidden sm:inline-flex items-center gap-1"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            Lihat Semua
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </Link>
        </div>

        {/* Book shelf decoration */}
        <div
          className="rounded-lg p-4 mb-4"
          style={{ backgroundColor: "rgba(27,59,47,0.1)" }}
        >
          {/* Books */}
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
            {bukuData.map((buku) => (
              <Link href={`/buku/${buku.id}`} key={buku.id}>
                <BookCover buku={buku} />
              </Link>
            ))}
          </div>

          {/* Shelf bottom */}
          <div
            className="h-2 rounded mt-1 mx-1"
            style={{ backgroundColor: "var(--dark-green)", opacity: 0.3 }}
          />
        </div>

        {/* Info bar */}
        <div className="flex items-center justify-between">
          <p
            className="text-xs"
            style={{ color: "rgba(27,59,47,0.6)", fontFamily: "var(--font-sans)" }}
          >
            Menampilkan 6 dari 120+ koleksi buku budaya
          </p>
          <Link
            href="/buku"
            className="text-xs font-semibold underline underline-offset-4"
            style={{ color: "var(--dark-green)", fontFamily: "var(--font-sans)" }}
          >
            Pinjam / Unduh PDF
          </Link>
        </div>
      </div>
    </section>
  );
}
