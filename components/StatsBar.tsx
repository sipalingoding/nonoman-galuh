const stats = [
  { value: "08", label: "Berita" },
  { value: "50", label: "Artikel" },
  { value: "80", label: "Video" },
  { value: "50", label: "Anggota" },
];

export default function StatsBar() {
  return (
    <section className="stats-bar-section" style={{ background: "#faf4e8" }}>
      <div className="stats-pill">
        {stats.map((s) => (
          <div key={s.label} style={{ display: "flex", alignItems: "baseline", gap: "8px" }}>
            <span
              className="label-font"
              style={{ fontSize: "30.87px", fontWeight: 700, color: "#fffef9", lineHeight: 1 }}
            >
              {s.value}
            </span>
            <span
              className="label-font"
              style={{ fontSize: "19.29px", color: "#fffef9", fontWeight: 400 }}
            >
              {s.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
