import { createClient } from "@/lib/supabase/server";
import Link from "next/link";
import TokohForm from "./Form";
import { deleteTokoh } from "./actions";

export default async function TokohPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const supabase = await createClient();
  const { data: items } = await supabase
    .from("tokoh")
    .select("*")
    .order("created_at", { ascending: false });

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
          Wisata & Tokoh
        </h1>
      </div>

      <TokohForm editItem={editItem} />

      <div style={{ background: "#fffef9", border: "1px solid #e0d8cc", borderRadius: "14px", padding: "24px 28px" }}>
        <table style={{ width: "100%", borderCollapse: "collapse" as const, fontSize: "13px" }}>
          <thead>
            <tr>
              <th style={thStyle}>Nama</th>
              <th style={thStyle}>Jabatan</th>
              <th style={thStyle}>Bidang</th>
              <th style={thStyle}>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {(!items || items.length === 0) && (
              <tr>
                <td colSpan={4} style={{ ...tdStyle, textAlign: "center", color: "#7a6a54", padding: "24px" }}>
                  Belum ada tokoh.
                </td>
              </tr>
            )}
            {items?.map((item) => {
              const del = deleteTokoh.bind(null, item.id);
              return (
                <tr key={item.id}>
                  <td style={tdStyle}>{item.nama}</td>
                  <td style={tdStyle}>{item.jabatan}</td>
                  <td style={tdStyle}>{item.bidang}</td>
                  <td style={{ ...tdStyle, whiteSpace: "nowrap" as const }}>
                    <Link href={`/dashboard/tokoh?edit=${item.id}`} style={{ fontSize: "12px", color: "#0e7566", marginRight: "12px" }}>
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
