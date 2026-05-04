import { createClient } from "@/lib/supabase/server";
import Link from "next/link";
import TimForm from "./Form";
import { deleteTim } from "./actions";

export default async function TimPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const supabase = await createClient();
  const { data: items } = await supabase
    .from("tim_pengelola")
    .select("*")
    .order("tipe", { ascending: true })
    .order("urutan", { ascending: true });

  const params = await searchParams;
  const editId = params?.edit as string | undefined;
  const editItem = items?.find((i) => i.id === editId) ?? null;

  const thStyle = {
    textAlign: "left" as const,
    padding: "8px 12px",
    borderBottom: "2px solid #e0d8cc",
    fontSize: "11px",
    fontWeight: 700,
    color: "#7a6a54",
    textTransform: "uppercase" as const,
  };
  const tdStyle = {
    padding: "10px 12px",
    borderBottom: "1px solid #f0e8dc",
    color: "#2c2416",
    verticalAlign: "top" as const,
  };

  return (
    <div style={{ maxWidth: "900px" }}>
      <div style={{ marginBottom: "28px" }}>
        <h1 className="decorative-font" style={{ fontSize: "26px", fontWeight: 400, color: "#2c2416", margin: 0 }}>
          Tim Pengembang
        </h1>
      </div>

      <TimForm editItem={editItem} />

      <div style={{ background: "#fffef9", border: "1px solid #e0d8cc", borderRadius: "14px", padding: "24px 28px" }}>
        <table style={{ width: "100%", borderCollapse: "collapse" as const, fontSize: "13px" }}>
          <thead>
            <tr>
              <th style={thStyle}>Nama</th>
              <th style={thStyle}>Jabatan</th>
              <th style={thStyle}>Tipe</th>
              <th style={thStyle}>Wilayah</th>
              <th style={thStyle}>Urutan</th>
              <th style={thStyle}>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {(!items || items.length === 0) && (
              <tr>
                <td colSpan={6} style={{ ...tdStyle, textAlign: "center", color: "#7a6a54", padding: "24px" }}>
                  Belum ada anggota tim.
                </td>
              </tr>
            )}
            {items?.map((item) => {
              const del = deleteTim.bind(null, item.id);
              return (
                <tr key={item.id}>
                  <td style={tdStyle}>{item.nama}</td>
                  <td style={tdStyle}>{item.jabatan}</td>
                  <td style={tdStyle}>
                    <span
                      style={{
                        display: "inline-block",
                        padding: "2px 8px",
                        borderRadius: "999px",
                        fontSize: "11px",
                        fontWeight: 700,
                        backgroundColor: item.tipe === "pengelola" ? "#d1fae5" : "#fef9c3",
                        color: item.tipe === "pengelola" ? "#0e7566" : "#7f3a21",
                      }}
                    >
                      {item.tipe}
                    </span>
                  </td>
                  <td style={tdStyle}>{item.wilayah ?? "—"}</td>
                  <td style={tdStyle}>{item.urutan}</td>
                  <td style={{ ...tdStyle, whiteSpace: "nowrap" as const }}>
                    <Link href={`/dashboard/tim?edit=${item.id}`} style={{ fontSize: "12px", color: "#0e7566", marginRight: "12px" }}>
                      Edit
                    </Link>
                    <form action={del} style={{ display: "inline" }}>
                      <button type="submit" style={{ background: "none", border: "none", cursor: "pointer", color: "#dc2626", fontSize: "12px" }}>
                        Hapus
                      </button>
                    </form>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
