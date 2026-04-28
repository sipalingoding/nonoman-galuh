import Link from "next/link";

const videoData = [
  { id: 1, judul: "Ngapuran Salayan — Tradisi Leluhur yang Terjaga", durasi: "12:34", views: "24K", slug: "ngapuran-salayan" },
  { id: 2, judul: "Tari Jaipong: Sejarah dan Perkembangannya", durasi: "18:20", views: "45K", slug: "tari-jaipong" },
  { id: 3, judul: "Batik Mega Mendung — Motif Awan dari Cirebon", durasi: "15:45", views: "31K", slug: "batik-mega-mendung" },
  { id: 4, judul: "Wayang Golek: Seni Pertunjukan Boneka Kayu", durasi: "22:10", views: "58K", slug: "wayang-golek" },
  { id: 5, judul: "Kuliner Tradisional Sunda yang Hampir Punah", durasi: "10:55", views: "19K", slug: "kuliner-sunda" },
  { id: 6, judul: "Angklung UNESCO: Perjalanan ke Panggung Dunia", durasi: "28:30", views: "87K", slug: "angklung-unesco" },
];

function PlayIcon() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div
        className="w-10 h-10 rounded-full flex items-center justify-center opacity-80 hover:opacity-100 transition-opacity"
        style={{ backgroundColor: "rgba(200, 75, 49, 0.9)" }}
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
          <polygon points="5 3 19 12 5 21 5 3" />
        </svg>
      </div>
    </div>
  );
}

const THUMB_COLORS = [
  "#1B3B2F", "#2A5C45", "#C84B31", "#1B3B2F", "#3D7A5E", "#2A5C45",
];

function VideoCard({ video, index }: { video: typeof videoData[0]; index: number }) {
  return (
    <article className="group cursor-pointer">
      {/* Thumbnail */}
      <div
        className="relative rounded-lg overflow-hidden mb-2 aspect-video"
        style={{ backgroundColor: THUMB_COLORS[index % THUMB_COLORS.length] }}
      >
        {/* Thumbnail illustration */}
        <div className="absolute inset-0 opacity-20">
          <svg viewBox="0 0 320 180" className="w-full h-full">
            <polygon points="0,180 80,80 160,180" fill="white" />
            <polygon points="120,180 200,60 280,180" fill="white" />
            <circle cx="260" cy="40" r="35" fill="white" opacity="0.5" />
          </svg>
        </div>

        {/* Logo watermark */}
        <div className="absolute top-2 left-2">
          <div
            className="px-2 py-0.5 rounded text-xs font-black opacity-80"
            style={{ backgroundColor: "rgba(232,160,32,0.9)", color: "#1B3B2F" }}
          >
            Ngapuran Salayan
          </div>
        </div>

        {/* Duration */}
        <div className="absolute bottom-2 right-2">
          <span
            className="text-xs font-bold px-1.5 py-0.5 rounded"
            style={{ backgroundColor: "rgba(0,0,0,0.7)", color: "white" }}
          >
            {video.durasi}
          </span>
        </div>

        <PlayIcon />
      </div>

      {/* Info */}
      <div>
        <h3
          className="text-xs font-semibold leading-snug mb-1 line-clamp-2 group-hover:text-[var(--yellow)] transition-colors"
          style={{ color: "white", fontFamily: "var(--font-sans)" }}
        >
          {video.judul}
        </h3>
        <p
          className="text-xs opacity-50"
          style={{ color: "white", fontFamily: "var(--font-sans)" }}
        >
          {video.views} penonton
        </p>
      </div>
    </article>
  );
}

export default function KanalYoutube() {
  return (
    <section className="py-12" style={{ backgroundColor: "var(--dark-green)" }}>
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
                Tontonan
              </span>
            </div>
            <h2
              className="text-2xl font-black text-white"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Kanal YouTube
            </h2>
            <p
              className="text-sm mt-1 opacity-70 text-white max-w-sm"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              Konten video edukatif seputar budaya dan tradisi nusantara.
            </p>
          </div>
          <Link
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded"
            style={{
              backgroundColor: "#FF0000",
              color: "white",
              fontFamily: "var(--font-sans)",
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42C1 8.14 1 11.63 1 11.63s0 3.49.46 5.21a2.78 2.78 0 0 0 1.95 1.95C5.12 19.25 12 19.25 12 19.25s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95C23 15.12 23 11.63 23 11.63s0-3.49-.46-5.21zM9.75 15.02V8.24l5.75 3.39-5.75 3.39z" />
            </svg>
            Subscribe
          </Link>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {videoData.map((video, i) => (
            <VideoCard key={video.id} video={video} index={i} />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-8 text-center">
          <Link
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex text-sm"
            style={{ backgroundColor: "var(--orange)" }}
          >
            Tonton Semua Video
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
