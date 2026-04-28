const teamData = [
  {
    kategori: "Pengelola",
    anggota: [
      { nama: "Dr. Ahmad Yusuf", peran: "Ketua Tim" },
      { nama: "Sari Dewi, M.Hum", peran: "Koordinator Konten" },
      { nama: "Budi Santoso", peran: "Editor Senior" },
    ],
  },
  {
    kategori: "Pengembang",
    anggota: [
      { nama: "Rizki Fauzan", peran: "Lead Developer" },
      { nama: "Nadia Putri", peran: "UI/UX Designer" },
      { nama: "Hendra Wijaya", peran: "Backend Engineer" },
    ],
  },
  {
    kategori: "Kontributor",
    anggota: [
      { nama: "Prof. Irawati", peran: "Konsultan Budaya" },
      { nama: "Drs. Suparman", peran: "Peneliti Sejarah" },
      { nama: "Maya Sari", peran: "Fotografer" },
    ],
  },
  {
    kategori: "Kontak",
    anggota: [
      { nama: "info@nusantaranusantara.id", peran: "Email Umum" },
      { nama: "(022) 1234-5678", peran: "Telepon" },
      { nama: "Jl. Budaya No. 1, Bandung", peran: "Alamat" },
    ],
  },
];

export default function TimPengembang() {
  return (
    <section
      className="py-12"
      style={{ backgroundColor: "var(--cream-dark)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
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
              Tentang Kami
            </span>
          </div>
          <h2
            className="text-2xl font-black"
            style={{ color: "var(--dark-green)", fontFamily: "var(--font-serif)" }}
          >
            Tim Pengembang
          </h2>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamData.map((group) => (
            <div key={group.kategori}>
              <h3
                className="text-sm font-black mb-3 pb-2 border-b"
                style={{
                  color: "var(--dark-green)",
                  fontFamily: "var(--font-serif)",
                  borderColor: "#d4c9a8",
                }}
              >
                {group.kategori}
              </h3>
              <ul className="space-y-2">
                {group.anggota.map((a) => (
                  <li key={a.nama} className="flex flex-col">
                    <span
                      className="text-xs font-semibold"
                      style={{ color: "var(--dark-green)", fontFamily: "var(--font-sans)" }}
                    >
                      {a.nama}
                    </span>
                    <span
                      className="text-xs"
                      style={{ color: "var(--text-light)", fontFamily: "var(--font-sans)" }}
                    >
                      {a.peran}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
