const stats = [
  { value: "08", label: "Berita" },
  { value: "50", label: "Artikel" },
  { value: "80", label: "Video" },
  { value: "50", label: "Anggota" },
];

export default function StatsBar() {
  return (
    <div className="relative h-0 z-20 flex justify-center">
      <div
        className="absolute -translate-y-1/2 rounded-full shadow-xl"
        style={{
          backgroundColor: "#007367",
          width: "1008.89px",
          height: "97.78px",
          maxWidth: "95vw",
        }}
      >
        <div className="flex items-center justify-around px-8 h-full">
          {stats.map((s) => (
            <div
              key={s.label}
              className="flex items-baseline gap-2"
            >
              <span
                className="text-2xl sm:text-3xl leading-none text-white"
                style={{
                  fontFamily: "var(--font-nunito)",
                  fontWeight: 700,
                }}
              >
                {s.value}
              </span>
              <span
                className="text-sm sm:text-base text-white"
                style={{
                  fontFamily: "var(--font-nunito)",
                  fontWeight: 400,
                }}
              >
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
