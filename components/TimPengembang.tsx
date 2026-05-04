import { createClient } from "@/lib/supabase/server";

function Entry({ role, name }: { role: string; name: string }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
      <span className="ui-font" style={{ fontSize: "11px", color: "#7a6a54" }}>{role}</span>
      <span className="ui-font" style={{ fontSize: "13px", fontWeight: 700, color: "#2c2416" }}>{name}</span>
    </div>
  );
}

export default async function TimPengembang() {
  const supabase = await createClient();
  const { data: rows } = await supabase
    .from("tim_pengelola")
    .select("id, nama, jabatan, tipe, wilayah, urutan")
    .order("urutan", { ascending: true });

  if (!rows || rows.length === 0) return null;

  const pengelolaList = rows
    .filter((r) => r.tipe === "pengelola")
    .map((r) => ({ jabatan: r.jabatan ?? "", nama: r.nama ?? "" }));

  const kontributorList = rows
    .filter((r) => r.tipe === "kontributor")
    .map((r) => ({ jabatan: r.wilayah ?? r.jabatan ?? "", nama: r.nama ?? "" }));

  const COLS = 3;
  const cols: { jabatan: string; nama: string }[][] = [[], [], []];
  pengelolaList.forEach((item, i) => {
    cols[i % COLS].push(item);
  });

  return (
    <section className="px-sec" style={{ background: "#faf4e8", paddingTop: "20px", paddingBottom: "58px" }}>
      <div style={{ maxWidth: "1010px", margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "32px", marginBottom: "28px" }}>
          <h2
            className="serif-title"
            style={{ fontSize: "26px", fontWeight: 400, color: "#6f5f4c", whiteSpace: "nowrap", lineHeight: 1.2 }}
          >
            Tim Pengelola
          </h2>
          <div style={{ height: "1px", background: "rgba(209,78,31,.38)", flex: 1 }} />
        </div>

        <div className="tim-grid">
          {cols.map((col, ci) => (
            <div key={ci} style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              {col.map((e) => (
                <Entry key={e.nama} role={e.jabatan} name={e.nama} />
              ))}
            </div>
          ))}
          {kontributorList.length > 0 && (
            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <span className="ui-font" style={{ fontSize: "11px", color: "#7a6a54", fontWeight: 700 }}>
                Kontributor:
              </span>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4px 20px" }}>
                {kontributorList.map((e) => (
                  <Entry key={e.nama} role={e.jabatan} name={e.nama} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
