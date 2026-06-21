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
          <div key={s.label} className="stats-item">
            <span className="stats-number label-font">
              {String(counts[i]).padStart(2, "0")}
            </span>
            <span className="stats-label label-font">
              {s.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
