"use client";

import { useRef, useState, useEffect, useTransition } from "react";
import { useRouter } from "next/navigation";
import { createBuku, updateBuku } from "./actions";

const inputStyle = {
  padding: "9px 12px", borderRadius: "8px", border: "1.5px solid #e0d8cc",
  fontSize: "13px", width: "100%", boxSizing: "border-box" as const, backgroundColor: "#faf4e8",
};
const labelStyle = { fontSize: "12px", fontWeight: 700, color: "#2c2416", marginBottom: "4px", display: "block" } as const;
const primaryBtn = { padding: "9px 20px", borderRadius: "8px", backgroundColor: "#0e7566", color: "#fffef9", border: "none", cursor: "pointer", fontSize: "13px", fontWeight: 600 } as const;
const cancelBtn = { padding: "9px 16px", borderRadius: "8px", backgroundColor: "#f5ede0", color: "#4a3f30", border: "none", cursor: "pointer", fontSize: "13px" } as const;

export default function BukuForm({ editItem }: { editItem: any | null }) {
  const router = useRouter();
  const formRef = useRef<HTMLFormElement>(null);
  const [show, setShow] = useState(!!editItem);
  const [isPending, startTransition] = useTransition();
  const [previewUrl, setPreviewUrl] = useState<string>(editItem?.cover_url ?? "");

  useEffect(() => { if (editItem) setShow(true); }, [editItem]);
  useEffect(() => { setPreviewUrl(editItem?.cover_url ?? ""); }, [editItem?.id]);

  return (
    <div style={{ marginBottom: "32px" }}>
      {!show && <button onClick={() => setShow(true)} style={primaryBtn}>+ Tambah Buku</button>}
      {show && (
        <form
          ref={formRef}
          onSubmit={(e) => {
            e.preventDefault();
            const fd = new FormData(e.currentTarget);
            startTransition(async () => {
              if (editItem) await updateBuku(editItem.id, fd);
              else await createBuku(fd);
              formRef.current?.reset();
              setPreviewUrl("");
              setShow(false);
              router.push("/dashboard");
            });
          }}
          style={{ background: "#fffef9", border: "1px solid #e0d8cc", borderRadius: "14px", padding: "24px 28px", display: "flex", flexDirection: "column", gap: "14px", marginBottom: "20px" }}
        >
          <h3 style={{ margin: 0, fontSize: "15px", fontWeight: 700, color: "#2c2416" }}>
            {editItem ? "Edit Buku" : "Tambah Buku"}
          </h3>
          <div>
            <label style={labelStyle}>Judul</label>
            <input name="judul" required defaultValue={editItem?.judul ?? ""} style={inputStyle} />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "12px" }}>
            <div>
              <label style={labelStyle}>Penulis</label>
              <input name="penulis" required defaultValue={editItem?.penulis ?? ""} style={inputStyle} />
            </div>
            <div>
              <label style={labelStyle}>Tahun</label>
              <input
                name="tahun"
                type="number"
                min="1000"
                max="2100"
                required
                defaultValue={editItem?.tahun ?? new Date().getFullYear()}
                style={{ ...inputStyle, width: "100px" }}
              />
            </div>
          </div>
          <div>
            <label style={labelStyle}>Sinopsis / Deskripsi</label>
            <textarea name="deskripsi" rows={4} defaultValue={editItem?.deskripsi ?? ""} placeholder="Tulis sinopsis atau deskripsi buku..." style={{ ...inputStyle, resize: "vertical" }} />
          </div>
          <div>
            <label style={labelStyle}>Cover Buku</label>
            {previewUrl && (
              <img src={previewUrl} alt="preview" style={{ width: "60px", height: "80px", objectFit: "cover", borderRadius: "4px", marginBottom: "6px", display: "block" }} />
            )}
            <input type="hidden" name="existing_cover_url" value={previewUrl} />
            <input
              name="foto"
              type="file"
              accept="image/*"
              onChange={(e) => { const f = e.target.files?.[0]; if (f) setPreviewUrl(URL.createObjectURL(f)); }}
              style={{ ...inputStyle, padding: "6px 12px" }}
            />
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
