import Link from "next/link";

const footerLinks = {
  "Navigasi": [
    { label: "Beranda", href: "/" },
    { label: "Berita & Info", href: "/berita" },
    { label: "Artikel Budaya", href: "/artikel" },
    { label: "Agenda", href: "/agenda" },
  ],
  "Eksplorasi": [
    { label: "Wisata Budaya", href: "/wisata" },
    { label: "Tokoh Budaya", href: "/tokoh" },
    { label: "Kanal YouTube", href: "https://youtube.com" },
    { label: "Rak Buku", href: "/buku" },
  ],
  "Informasi": [
    { label: "Tentang Kami", href: "/tentang" },
    { label: "Tim Pengembang", href: "/tim" },
    { label: "Kebijakan Privasi", href: "/privasi" },
    { label: "Syarat & Ketentuan", href: "/syarat" },
  ],
};

function LogoMark() {
  return (
    <svg viewBox="0 0 80 80" className="w-12 h-12" fill="none">
      <circle cx="40" cy="40" r="38" stroke="var(--yellow)" strokeWidth="2" />
      <polygon
        points="40,10 60,55 20,55"
        fill="none"
        stroke="var(--yellow)"
        strokeWidth="2"
      />
      <circle cx="40" cy="40" r="6" fill="var(--yellow)" />
      <line x1="40" y1="10" x2="40" y2="70" stroke="var(--yellow)" strokeWidth="1" opacity="0.4" />
      <line x1="10" y1="40" x2="70" y2="40" stroke="var(--yellow)" strokeWidth="1" opacity="0.4" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "var(--dark-green)" }}>
      {/* Top section */}
      <div
        className="border-b"
        style={{ borderColor: "rgba(255,255,255,0.1)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="md:col-span-1">
              <div className="flex items-center gap-3 mb-4">
                <LogoMark />
                <div>
                  <p
                    className="text-[10px] font-medium tracking-wide"
                    style={{ color: "rgba(255,255,255,0.6)", fontFamily: "var(--font-inter)" }}
                  >
                    Platform Kebudayaan
                  </p>
                  <p
                    className="text-lg font-normal tracking-wide"
                    style={{ color: "var(--yellow)", fontFamily: "var(--font-logo)" }}
                  >
                    Nonoman Galuh
                  </p>
                </div>
              </div>
              <p
                className="text-xs leading-relaxed opacity-60 mb-4"
                style={{ color: "white", fontFamily: "var(--font-sans)" }}
              >
                Nonoman Galuh — Platform kebudayaan yang berkomitmen memperkenalkan warisan leluhur Galuh kepada generasi muda.
              </p>

              {/* Social media */}
              <div className="flex gap-2">
                {[
                  { icon: "facebook", href: "#" },
                  { icon: "instagram", href: "#" },
                  { icon: "twitter", href: "#" },
                  { icon: "youtube", href: "#" },
                ].map((s) => (
                  <Link
                    key={s.icon}
                    href={s.href}
                    className="w-8 h-8 rounded flex items-center justify-center hover:opacity-80 transition-opacity"
                    style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
                    aria-label={s.icon}
                  >
                    <span className="text-white text-xs font-bold">
                      {s.icon === "facebook" && "f"}
                      {s.icon === "instagram" && "ig"}
                      {s.icon === "twitter" && "tw"}
                      {s.icon === "youtube" && "yt"}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Navigation columns */}
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h4
                  className="text-xs font-bold uppercase tracking-widest mb-4"
                  style={{ color: "var(--yellow)", fontFamily: "var(--font-sans)" }}
                >
                  {title}
                </h4>
                <ul className="space-y-2">
                  {links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-xs opacity-60 hover:opacity-100 transition-opacity"
                        style={{ color: "white", fontFamily: "var(--font-sans)" }}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
          <p
            className="text-xs opacity-40"
            style={{ color: "white", fontFamily: "var(--font-sans)" }}
          >
            © 2026 Nonoman Galuh. Hak cipta dilindungi undang-undang.
          </p>
          <p
            className="text-xs opacity-40"
            style={{ color: "white", fontFamily: "var(--font-sans)" }}
          >
            Dibangun dengan ❤ untuk pelestarian budaya bangsa
          </p>
        </div>
      </div>
    </footer>
  );
}
