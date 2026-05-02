const stats = [
  { value: "08", label: "Berita" },
  { value: "50", label: "Artikel" },
  { value: "80", label: "Video" },
  { value: "50", label: "Anggota" },
];

export default function StatsBar() {
  return (
    <section style={{ background: "#faf4e8", height: "92px", position: "relative" }}>
      <div
        style={{
          background: "#0e7566",
          borderRadius: "999px",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          width: "min(calc(100% - 316px), 1010px)",
          height: "96px",
          position: "absolute",
          top: "-32px",
          left: "50%",
          transform: "translateX(-50%)",
          padding: "0 86px",
          boxShadow: "0 14px 18px rgba(44,36,22,.22)",
        }}
      >
        {stats.map((s) => (
          <div key={s.label} style={{ display: "flex", alignItems: "baseline", gap: "8px" }}>
            <span
              className="label-font"
              style={{ fontSize: "34px", fontWeight: 900, color: "#fffef9", lineHeight: 1 }}
            >
              {s.value}
            </span>
            <span
              className="label-font"
              style={{ fontSize: "15px", color: "#fffef9", fontWeight: 500 }}
            >
              {s.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
