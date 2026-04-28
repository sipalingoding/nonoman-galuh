import Link from "next/link";

const agendaData = [
  {
    id: 1,
    nama: "Festival Wayang Nusantara",
    deskripsi: "Pertunjukan wayang dari berbagai daerah di Indonesia dalam satu panggung besar.",
    tanggal: "10 Mei 2026",
    lokasi: "Taman Budaya Bandung",
    kategori: "Pertunjukan",
    warna: "#2A5C45",
  },
  {
    id: 2,
    nama: "Pameran Batik Internasional",
    deskripsi: "Pameran batik dari 34 provinsi dan seniman batik internasional.",
    tanggal: "15 Mei 2026",
    lokasi: "Gedung Sate, Bandung",
    kategori: "Pameran",
    warna: "#C84B31",
  },
  {
    id: 3,
    nama: "Seminar Kebudayaan Sunda",
    deskripsi: "Diskusi akademik mengenai perkembangan kebudayaan Sunda di era modern.",
    tanggal: "20 Mei 2026",
    lokasi: "Universitas Padjadjaran",
    kategori: "Seminar",
    warna: "#1B3B2F",
  },
  {
    id: 4,
    nama: "Lomba Tari Tradisional",
    deskripsi: "Kompetisi tari tradisional tingkat nasional untuk generasi muda.",
    tanggal: "25 Mei 2026",
    lokasi: "Ciwalk, Bandung",
    kategori: "Lomba",
    warna: "#D4A017",
  },
];

function CalendarIllustration() {
  return (
    <svg viewBox="0 0 280 320" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
      <defs>
        <linearGradient id="calBg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#E8A020" />
          <stop offset="100%" stopColor="#C84B31" />
        </linearGradient>
      </defs>

      {/* Main figure - person reading */}
      <ellipse cx="140" cy="280" rx="80" ry="20" fill="#1B3B2F" opacity="0.15" />

      {/* Body */}
      <rect x="105" y="150" width="70" height="90" rx="10" fill="url(#calBg)" />

      {/* Head */}
      <circle cx="140" cy="130" r="30" fill="#F5D0A0" />
      <circle cx="130" cy="125" r="4" fill="#333" />
      <circle cx="150" cy="125" r="4" fill="#333" />
      <path d="M130 140 Q140 148 150 140" stroke="#C84B31" strokeWidth="2" fill="none" />

      {/* Hair */}
      <path d="M110 120 Q115 95 140 90 Q165 95 170 120 Q160 105 140 103 Q120 105 110 120Z" fill="#5C3D1E" />

      {/* Arms */}
      <rect x="75" y="160" width="30" height="12" rx="6" fill="#F5D0A0" transform="rotate(-20 90 166)" />
      <rect x="175" y="160" width="30" height="12" rx="6" fill="#F5D0A0" transform="rotate(20 190 166)" />

      {/* Book */}
      <rect x="85" y="175" width="55" height="40" rx="3" fill="white" opacity="0.9" transform="rotate(-15 112 195)" />
      <line x1="112" y1="177" x2="108" y2="213" stroke="#2A5C45" strokeWidth="1.5" opacity="0.6" transform="rotate(-15 112 195)" />
      <line x1="95" y1="182" x2="108" y2="182" stroke="#CCC" strokeWidth="1" transform="rotate(-15 112 195)" />
      <line x1="94" y1="188" x2="107" y2="188" stroke="#CCC" strokeWidth="1" transform="rotate(-15 112 195)" />

      {/* Legs */}
      <rect x="118" y="235" width="14" height="45" rx="7" fill="#2A5C45" />
      <rect x="148" y="235" width="14" height="45" rx="7" fill="#2A5C45" />

      {/* Shoes */}
      <ellipse cx="125" cy="280" rx="16" ry="8" fill="#1B3B2F" />
      <ellipse cx="155" cy="280" rx="16" ry="8" fill="#1B3B2F" />

      {/* Floating elements */}
      <circle cx="60" cy="100" r="15" fill="var(--yellow)" opacity="0.3" />
      <circle cx="220" cy="80" r="20" fill="var(--orange)" opacity="0.2" />
      <circle cx="40" cy="200" r="10" fill="#2A5C45" opacity="0.2" />

      {/* Stars */}
      {[[50, 60], [230, 50], [70, 180]].map(([x, y], i) => (
        <polygon
          key={i}
          points={`${x},${y-8} ${x+3},${y-3} ${x+8},${y-3} ${x+4},${y+2} ${x+5},${y+8} ${x},${y+4} ${x-5},${y+8} ${x-4},${y+2} ${x-8},${y-3} ${x-3},${y-3}`}
          fill="#E8A020"
          opacity="0.5"
        />
      ))}
    </svg>
  );
}

export default function AgendaBudaya() {
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
                Jadwal
              </span>
            </div>
            <h2
              className="text-2xl font-black"
              style={{ color: "var(--dark-green)", fontFamily: "var(--font-serif)" }}
            >
              Agenda Budaya
            </h2>
            <p
              className="text-sm mt-1 max-w-md"
              style={{ color: "var(--text-light)", fontFamily: "var(--font-sans)" }}
            >
              Rangkaian kegiatan dan acara budaya yang akan segera diselenggarakan.
            </p>
          </div>
          <Link href="/agenda" className="btn-outline hidden sm:inline-flex text-xs">
            Lihat Kalender
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Agenda Cards - 2/3 */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {agendaData.map((agenda) => (
              <article
                key={agenda.id}
                className="rounded-lg overflow-hidden card-hover border border-[#e8dfc8] bg-white"
              >
                {/* Colored Top */}
                <div
                  className="h-28 relative flex items-end p-3"
                  style={{ backgroundColor: agenda.warna }}
                >
                  <div className="absolute inset-0 opacity-10">
                    <svg viewBox="0 0 200 112" className="w-full h-full">
                      <polygon points="0,112 70,40 140,112" fill="white" />
                      <polygon points="80,112 160,30 220,112" fill="white" />
                    </svg>
                  </div>
                  <span
                    className="relative z-10 text-xs font-bold px-2 py-0.5 rounded"
                    style={{ backgroundColor: "rgba(255,255,255,0.9)", color: agenda.warna }}
                  >
                    {agenda.kategori}
                  </span>
                </div>

                <div className="p-4">
                  <h3
                    className="font-bold text-sm leading-snug mb-1.5"
                    style={{ color: "var(--dark-green)", fontFamily: "var(--font-serif)" }}
                  >
                    {agenda.nama}
                  </h3>
                  <p
                    className="text-xs leading-relaxed mb-3 line-clamp-2"
                    style={{ color: "var(--text-medium)", fontFamily: "var(--font-sans)" }}
                  >
                    {agenda.deskripsi}
                  </p>
                  <div
                    className="flex items-center gap-3 text-xs"
                    style={{ color: "var(--text-light)", fontFamily: "var(--font-sans)" }}
                  >
                    <span className="flex items-center gap-1">
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
                      </svg>
                      {agenda.tanggal}
                    </span>
                    <span className="flex items-center gap-1">
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
                      </svg>
                      {agenda.lokasi}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Illustration - 1/3 */}
          <div
            className="rounded-lg overflow-hidden flex flex-col items-center justify-center p-6 relative"
            style={{ backgroundColor: "var(--cream-dark)", minHeight: "300px" }}
          >
            <div className="w-full max-w-[200px] h-[260px]">
              <CalendarIllustration />
            </div>
            <div className="mt-2 text-center">
              <p
                className="text-sm font-bold mb-1"
                style={{ color: "var(--dark-green)", fontFamily: "var(--font-serif)" }}
              >
                Catat Agendamu
              </p>
              <p
                className="text-xs"
                style={{ color: "var(--text-light)", fontFamily: "var(--font-sans)" }}
              >
                Jangan lewatkan satu pun acara budaya menarik
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
