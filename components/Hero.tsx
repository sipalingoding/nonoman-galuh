import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="hero-section"
      style={{
        backgroundColor: "#c8341f",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Cloud decoration */}
      <div
        className="hero-cloud"
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          zIndex: 4,
          pointerEvents: "none",
        }}
      >
        <Image
          src="/clouds.png"
          alt=""
          fill
          sizes="385px"
          style={{ objectFit: "contain", objectPosition: "top right" }}
          loading="eager"
        />
      </div>

      <div className="hero-grid">
        {/* Left column */}
        <div className="hero-left">
          <h1
            className="decorative-font hero-h1"
            style={{
              color: "#fffef9",
              fontWeight: 400,
              lineHeight: 1.05,
              letterSpacing: 0,
              margin: 0,
            }}
          >
            Nata Salira,
            <br />
            Nata Nagara,
            <br />
            Nata Buana
          </h1>

          <div className="hero-divider-row">
            <Link
              href="/profil"
              className="serif-title"
              style={{
                display: "inline-block",
                flexShrink: 0,
                background: "#f6de66",
                color: "#7f3a21",
                padding: "12px 28px",
                borderRadius: "999px",
                fontSize: "14.92px",
                fontWeight: 700,
                textDecoration: "none",
                whiteSpace: "nowrap",
              }}
            >
              Tentang Kami
            </Link>
            <div
              style={{
                flex: 1,
                height: "2px",
                background: "rgba(246,222,102,.7)",
              }}
            />
          </div>

          <p
            className="serif-title"
            style={{
              fontSize: "13.33px",
              color: "#fffef9",
              maxWidth: "100%",
              lineHeight: 1.55,
              fontWeight: 400,
              marginTop: "-6px",
            }}
          >
            <strong style={{ color: "#fffef9", fontWeight: 700 }}>
              Nonoman Galuh
            </strong>{" "}
            merupakan lembaga kebudayaan yang berkomitmen untuk turut serta
            memperkenalkan warisan leluhur Galuh kepada generasi muda dalam
            rangka memperkuat identitas dan membangun ekosistem budaya daerah
            yang inklusif.
          </p>
        </div>

        {/* Right column — scales down on tablet, shows below text on mobile */}
        <div
          className="hero-right-col"
          style={{ position: "relative", overflow: "hidden" }}
        >
          <div className="hero-imgs-wrapper">
            <div
              style={{
                position: "absolute",
                top: "0px",
                left: "80px",
                width: "600px",
                height: "600px",
                zIndex: 2,
                borderRadius: "50%",
                overflow: "hidden",
              }}
            >
              <Image
                src="/mountains-circle.png"
                alt="Pemandangan Gunung"
                fill
                sizes="600px"
                style={{ objectFit: "cover" }}
                loading="eager"
              />
            </div>

            <div
              style={{
                position: "absolute",
                bottom: "40px",
                left: "60px",
                width: "640px",
                height: "540px",
                zIndex: 3,
              }}
            >
              <Image
                src="/Rectangle.png"
                alt="Gerbang Candi"
                fill
                sizes="640px"
                style={{
                  objectFit: "contain",
                  objectPosition: "bottom center",
                }}
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
