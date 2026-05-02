import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      style={{
        backgroundColor: "#c8341f",
        height: "582px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "385px",
          height: "285px",
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

      <div
        style={{
          width: "min(calc(100% - 180px), 1110px)",
          height: "100%",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "45% 55%",
          position: "relative",
        }}
      >
        {/* Left */}
        <div
          style={{
            paddingLeft: "50px",
            paddingTop: 0,
            paddingBottom: "108px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: "20px",
            position: "relative",
            zIndex: 5,
          }}
        >
          <h1
            className="decorative-font"
            style={{
              fontSize: "58px",
              color: "#fffef9",
              fontWeight: 400,
              lineHeight: 1.05,
              letterSpacing: 0,
            }}
          >
            Nata Salira,
            <br />
            Nata Nagara,
            <br />
            Nata Buana
          </h1>

          <div style={{ display: "flex", alignItems: "center", gap: "18px", width: "430px" }}>
            <Link
              href="/tentang"
              style={{
                display: "inline-block",
                flexShrink: 0,
                background: "#f6de66",
                color: "#7f3a21",
                padding: "12px 31px",
                borderRadius: "999px",
                fontSize: "13px",
                fontWeight: 700,
                textDecoration: "none",
                whiteSpace: "nowrap",
              }}
            >
              Tentang Kami
            </Link>
            <div style={{ flex: 1, height: "2px", background: "rgba(246,222,102,.7)" }} />
          </div>

          <p
            className="serif-title"
            style={{
              fontSize: "13px",
              color: "#fffef9",
              maxWidth: "410px",
              lineHeight: 1.48,
              fontWeight: 600,
              marginTop: "-10px",
            }}
          >
            <strong style={{ color: "#fffef9", fontWeight: 800 }}>Nonoman Galuh</strong>{" "}
            merupakan lembaga kebudayaan yang berkomitmen untuk turut serta memperkenalkan warisan leluhur
            Galuh kepada generasi muda dalam rangka memperkuat identitas dan membangun ekosistem budaya
            daerah yang inklusif.
          </p>
        </div>

        {/* Right */}
        <div style={{ position: "relative", overflow: "visible" }}>
          <div
            style={{
              position: "absolute",
              top: "54px",
              left: "34px",
              width: "615px",
              height: "438px",
              zIndex: 2,
            }}
          >
            <Image
              src="/mountains-circle.png"
              alt="Pemandangan Gunung"
              fill
              sizes="615px"
              style={{ objectFit: "contain" }}
              loading="eager"
            />
          </div>

          <div
            style={{
              position: "absolute",
              bottom: "52px",
              left: "118px",
              width: "500px",
              height: "410px",
              zIndex: 3,
            }}
          >
            <Image
              src="/Rectangle.png"
              alt="Gerbang Candi"
              fill
              sizes="500px"
              style={{ objectFit: "contain", objectPosition: "bottom center" }}
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
