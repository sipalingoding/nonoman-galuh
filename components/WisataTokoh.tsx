import Link from "next/link";

const tokohData = [
  { id: 1, nama: "Ki Manteb Sudharsono", jabatan: "Maestro Dalang Wayang Kulit", bidang: "Seni Pedalangan" },
  { id: 2, nama: "Deddy Luthan", jabatan: "Koreografer Nasional", bidang: "Seni Tari" },
  { id: 3, nama: "Irawati Durban", jabatan: "Maestro Tari Jaipong", bidang: "Tari Tradisional" },
  { id: 4, nama: "Nano Suratno", jabatan: "Komposer Gamelan", bidang: "Musik Tradisional" },
  { id: 5, nama: "Saini KM", jabatan: "Sastrawan & Dramawan", bidang: "Sastra & Drama" },
  { id: 6, nama: "Harry Roesli", jabatan: "Musisi & Komposer", bidang: "Musik Kontemporer" },
];

const AVATAR_COLORS = [
  "#2A5C45", "#C84B31", "#1B3B2F", "#E8A020", "#3D7A5E", "#D4A017",
];

function TokohAvatar({ nama, index }: { nama: string; index: number }) {
  const initials = nama
    .split(" ")
    .slice(0, 2)
    .map((n) => n[0])
    .join("");
  return (
    <div
      className="w-full aspect-square rounded-full flex items-center justify-center text-white font-black text-2xl"
      style={{ backgroundColor: AVATAR_COLORS[index % AVATAR_COLORS.length] }}
    >
      {initials}
    </div>
  );
}

export default function WisataTokoh() {
  return (
    <section
      className="py-12"
      style={{ backgroundColor: "var(--medium-green)" }}
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
                style={{ backgroundColor: "var(--yellow)" }}
              />
              <span
                className="text-xs font-bold uppercase tracking-widest"
                style={{ color: "var(--yellow)" }}
              >
                Inspirasi
              </span>
            </div>
            <h2
              className="text-2xl font-black text-white"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Wisata & Tokoh
            </h2>
            <p
              className="text-sm mt-1 opacity-70 text-white"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              Para maestro budaya yang menginspirasi generasi penerus bangsa.
            </p>
          </div>
          <Link
            href="/tokoh"
            className="text-xs font-semibold px-4 py-2 rounded border border-white/30 text-white hover:bg-white/10 transition-colors hidden sm:inline-flex items-center gap-1"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            Lihat Semua
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </Link>
        </div>

        {/* Tokoh Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {tokohData.map((tokoh, i) => (
            <Link
              href={`/tokoh/${tokoh.id}`}
              key={tokoh.id}
              className="group text-center"
            >
              <div className="w-20 h-20 mx-auto mb-3 rounded-full overflow-hidden ring-2 ring-white/20 group-hover:ring-[var(--yellow)] transition-all">
                <TokohAvatar nama={tokoh.nama} index={i} />
              </div>
              <p
                className="text-xs font-bold text-white leading-tight mb-0.5 group-hover:text-[var(--yellow)] transition-colors"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                {tokoh.nama}
              </p>
              <p
                className="text-xs opacity-60 text-white leading-tight"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                {tokoh.bidang}
              </p>
            </Link>
          ))}
        </div>

        {/* Separator */}
        <div className="my-10 border-t border-white/10" />

        {/* Wisata teaser */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { nama: "Keraton Kasepuhan", lokasi: "Cirebon", tipe: "Sejarah" },
            { nama: "Kawah Papandayan", lokasi: "Garut", tipe: "Alam" },
            { nama: "Museum Sri Baduga", lokasi: "Bandung", tipe: "Museum" },
          ].map((wisata, i) => (
            <Link
              href="/wisata"
              key={i}
              className="rounded-lg overflow-hidden flex items-center gap-3 p-3 hover:bg-white/10 transition-colors"
              style={{ backgroundColor: "rgba(255,255,255,0.08)" }}
            >
              <div
                className="w-14 h-14 rounded-lg flex-shrink-0 flex items-center justify-center text-white font-black text-lg"
                style={{ backgroundColor: AVATAR_COLORS[i] }}
              >
                {wisata.nama[0]}
              </div>
              <div>
                <p
                  className="text-xs font-bold text-white"
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  {wisata.nama}
                </p>
                <p
                  className="text-xs opacity-60 text-white"
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  {wisata.lokasi} · {wisata.tipe}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
