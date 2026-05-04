"use client";

import { useRef, useState, useEffect, useTransition } from "react";
import { createArtikel, updateArtikel } from "./actions";

const MONTHS_ID: Record<string, string> = {
  "Januari":"01","Februari":"02","Maret":"03","April":"04","Mei":"05","Juni":"06",
  "Juli":"07","Agustus":"08","September":"09","Oktober":"10","November":"11","Desember":"12",
};
function parseToISO(s: string): string {
  const p = s.trim().split(" ");
  if (p.length === 3 && MONTHS_ID[p[1]]) return `${p[2]}-${MONTHS_ID[p[1]]}-${p[0].padStart(2,"0")}`;
  return "";
}

const inputStyle = {
  padding: "9px 12px", borderRadius: "8px", border: "1.5px solid #e0d8cc",
  fontSize: "13px", width: "100%", boxSizing: "border-box" as const, backgroundColor: "#faf4e8",
};
const labelStyle = { fontSize: "12px", fontWeight: 700, color: "#2c2416", marginBottom: "4px", display: "block" } as const;
const primaryBtn = { padding: "9px 20px", borderRadius: "8px", backgroundColor: "#0e7566", color: "#fffef9", border: "none", cursor: "pointer", fontSize: "13px", fontWeight: 600 } as const;
const cancelBtn = { padding: "9px 16px", borderRadius: "8px", backgroundColor: "#f5ede0", color: "#4a3f30", border: "none", cursor: "pointer", fontSize: "13px" } as const;

export default function ArtikelForm({ editItem }: { editItem: any | null }) {
  const formRef = useRef<HTMLFormElement>(null);
  const [show, setShow] = useState(!!editItem);
  const [isPending, startTransition] = useTransition();

  useEffect(() => { if (editItem) setShow(true); }, [editItem]);

  return (
    <div style={{ marginBottom: "32px" }}>
      {!show && <button onClick={() => setShow(true)} style={primaryBtn}>+ Tambah Artikel</button>}
      {show && (
        <form
          ref={formRef}
          onSubmit={(e) => {
            e.preventDefault();
            const fd = new FormData(e.currentTarget);
            startTransition(async () => {
              if (editItem) await updateArtikel(editItem.id, fd);
              else await createArtikel(fd);
              formRef.current?.reset();
              setShow(false);
            });
          }}
          style={{ background: "#fffef9", border: "1px solid #e0d8cc", borderRadius: "14px", padding: "24px 28px", display: "flex", flexDirection: "column", gap: "14px", marginBottom: "20px" }}
        >
          <h3 style={{ margin: 0, fontSize: "15px", fontWeight: 700, color: "#2c2416" }}>
            {editItem ? "Edit Artikel" : "Tambah Artikel"}
          </h3>
          <div>
            <label style={labelStyle}>Judul</label>
            <input name="judul" required defaultValue={editItem?.judul ?? ""} style={inputStyle} />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
            <div>
              <label style={labelStyle}>Penulis</label>
              <input name="penulis" required defaultValue={editItem?.penulis ?? ""} style={inputStyle} />
            </div>
            <div>
              <label style={labelStyle}>Tanggal</label>
              <input name="tanggal" type="date" required defaultValue={editItem?.tanggal ? parseToISO(editItem.tanggal) : ""} style={inputStyle} />
            </div>
          </div>
          <div style={{ display: "flex", gap: "10px" }}>
            <button type="submit" disabled={isPending} style={{ ...primaryBtn, opacity: isPending ? 0.6 : 1 }}>
              {isPending ? "Menyimpan..." : "Simpan"}
            </button>
            <button type="button" onClick={() => setShow(false)} style={cancelBtn}>Batal</button>
          </div>
        </form>
      )}
    </div>
  );
}
