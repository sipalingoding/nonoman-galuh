import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ backgroundColor: "#D54425" }}
    >
      <div className="max-w-7xl mx-auto">
        <div
          className="grid grid-cols-1 md:grid-cols-2"
          style={{ minHeight: 420 }}
        >
          {/* ── Left: Text ── */}
          <div className="flex flex-col justify-center px-8 sm:px-12 lg:px-16 py-8 md:py-16 relative z-10">
            <h1
              className="text-4xl sm:text-5xl lg:text-[3.4rem] leading-tight text-white mb-6"
              style={{ fontFamily: "var(--font-logo)" }}
            >
              Nata Salira,
              <br />
              Nata Nagara,
              <br />
              Nata Buana
            </h1>

            {/* Tentang Kami — outline pill + horizontal rule */}
            <div className="flex items-center gap-4 mb-6">
              <Link
                href="/tentang"
                className="shrink-0 inline-flex items-center px-7 py-3 rounded-full text-sm transition-opacity hover:opacity-80"
                style={{
                  border: "1.5px solid #F4DF67",
                  color: "#32241A",
                  fontFamily: "var(--font-serif)",
                  fontWeight: 400,
                  backgroundColor: "#F4DF67",
                }}
              >
                Tentang Kami
              </Link>
              <div
                className="flex-1 h-px"
                style={{ backgroundColor: "#F4DF67", opacity: 0.5 }}
              />
            </div>

            <p className="text-sm leading-relaxed text-white w-[436]">
              <strong className="font-bold">Nonoman Galuh</strong> merupakan
              lembaga kebudayaan yang berkomitmen untuk turut serta
              memperkenalkan warisan leluhur Galuh kepada generasi muda dalam
              rangka memperkuat identitas dan membangun ekosistem budaya daerah
              yang inklusif.
            </p>
          </div>

          {/* ── Right: Scene composition ── */}
          <div
            className="relative hidden md:block overflow-hidden"
            style={{ minHeight: 420 }}
          >
            {/* Mountain circle */}
            <div
              className="absolute"
              style={{
                width: "100%",
                height: "100%",
                top: "2%",
                left: "0%",
                zIndex: 2,
              }}
            >
              <Image
                src="/mountains-circle.png"
                alt="Pemandangan Gunung"
                fill
                sizes="(min-width: 768px) 38vw, 0px"
                className="object-contain"
                priority
              />
            </div>

            {/* Clouds — upper right */}
            <div
              className="absolute"
              style={{
                top: "-8%",
                right: "-6%",
                width: "62%",
                height: "58%",
                zIndex: 3,
                pointerEvents: "none",
              }}
            >
              <Image
                src="/clouds.png"
                alt=""
                fill
                sizes="(min-width: 768px) 32vw, 0px"
                className="object-contain object-top"
                style={{ objectPosition: "top right" }}
              />
            </div>

            {/* Temple gates — bottom foreground */}
            <div
              className="absolute bottom-20"
              style={{
                left: "-4%",
                width: "108%",
                height: "80%",
                zIndex: 4,
              }}
            >
              <Image
                src="/Rectangle.png"
                alt="Gerbang Candi"
                fill
                sizes="(min-width: 768px) 54vw, 0px"
                className="object-contain object-bottom"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
