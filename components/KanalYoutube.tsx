const videoData = [
  { title: "Ngaguar Salayar", episode: "Eps. I – IKET Sunda dalam Lintasan Zaman" },
  { title: "Ngaguar Salayar", episode: "Eps. I – IKET Sunda dalam Lintasan Zaman" },
  { title: "Ngaguar Salayar", episode: "Eps. I – IKET Sunda dalam Lintasan Zaman" },
];

function VideoCard({ video }: { video: (typeof videoData)[number] }) {
  return (
    <article
      style={{
        borderRadius: "10px",
        overflow: "hidden",
        background: "#17204a",
        position: "relative",
        cursor: "pointer",
        aspectRatio: "16/9",
        display: "flex",
        alignItems: "flex-end",
      }}
    >
      {/* Thumbnail */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at 18% 28%, rgba(255,255,255,.12), transparent 26%), linear-gradient(90deg, rgba(12,18,55,.94), rgba(22,33,82,.88)), linear-gradient(135deg, #101a46 0%, #283967 52%, #0d1434 100%)",
        }}
      />

      {/* Play button */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "42px",
          height: "42px",
          borderRadius: "50%",
          background: "rgba(255,255,255,.9)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 2,
        }}
      >
        <svg
          width="15"
          height="15"
          viewBox="0 0 24 24"
          fill="#d14e1f"
          style={{ marginLeft: "3px" }}
        >
          <path d="M8 5v14l11-7z" />
        </svg>
      </div>

      {/* Info */}
      <div style={{ position: "relative", zIndex: 2, padding: "18px 22px", width: "100%", textAlign: "center" }}>
        <div
          className="ui-font"
          style={{
            fontSize: "9px",
            color: "rgba(255,255,255,.7)",
            display: "flex",
            alignItems: "center",
            gap: "4px",
            marginBottom: "2px",
            justifyContent: "center",
          }}
        >
          <svg width="16" height="11" viewBox="0 0 16 11" fill="none">
            <rect width="16" height="11" rx="2" fill="white" fillOpacity=".2" />
            <text x="2" y="8" fontSize="6" fill="white" fontFamily="monospace">NG</text>
          </svg>
          Nonoman Galuh
        </div>
        <div
          className="serif-title"
          style={{ fontSize: "27px", color: "#fffef9", fontWeight: 900, lineHeight: 1 }}
        >
          {video.title}
        </div>
        <div
          className="ui-font"
          style={{ fontSize: "10px", color: "rgba(255,255,255,.78)", marginTop: "4px" }}
        >
          {video.episode}
        </div>
      </div>
    </article>
  );
}

export default function KanalYoutube() {
  return (
    <section style={{ background: "#d64221", padding: "54px 48px 72px" }}>
      <div style={{ textAlign: "center", margin: "0 auto 32px", maxWidth: "1010px" }}>
        <h2
          className="serif-title"
          style={{ fontSize: "31px", fontWeight: 400, color: "#fffef9", marginBottom: "8px", lineHeight: 1.2 }}
        >
          Kanal YouTube
        </h2>
        <p
          className="ui-font"
          style={{ fontSize: "13px", color: "rgba(255,255,255,.88)" }}
        >
          Rekaman audiovisual melalui kanal YouTube{" "}
          <strong style={{ color: "#fffef9" }}>Nonoman Galuh</strong>
        </p>
        <hr
          style={{
            border: "none",
            borderTop: "1px solid rgba(255,255,255,.3)",
            margin: "20px 0 0",
          }}
        />
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "30px",
          maxWidth: "1010px",
          margin: "0 auto",
        }}
      >
        {videoData.map((video, i) => (
          <VideoCard key={i} video={video} />
        ))}
      </div>
    </section>
  );
}
