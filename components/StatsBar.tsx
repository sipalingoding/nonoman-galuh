import { createClient } from "@/lib/supabase/server";

const statDefs = [
  { label: "Berita",  table: "berita"       },
  { label: "Artikel", table: "artikel"      },
  { label: "Video",   table: "youtube"      },
  { label: "Anggota", table: "tim_pengelola" },
];

export default async function StatsBar() {
  const supabase = await createClient();

  const counts = await Promise.all(
    statDefs.map(({ table }) =>
      supabase
        .from(table)
        .select("*", { count: "exact", head: true })
        .then(({ count }) => count ?? 0)
    )
  );

  return (
    <section className="stats-bar-section" style={{ background: "#faf4e8" }}>
      <div className="stats-pill">
        {statDefs.map((s, i) => (
          <div key={s.label} style={{ display: "flex", alignItems: "baseline", gap: "8px" }}>
            <span
              className="label-font"
              style={{ fontSize: "30.87px", fontWeight: 700, color: "#fffef9", lineHeight: 1 }}
            >
              {String(counts[i]).padStart(2, "0")}
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
