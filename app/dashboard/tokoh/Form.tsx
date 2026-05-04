"use client";

import { useRef, useState, useEffect, useTransition } from "react";
import { createTokoh, updateTokoh } from "./actions";

const inputStyle = {
  padding: "9px 12px", borderRadius: "8px", border: "1.5px solid #e0d8cc",
  fontSize: "13px", width: "100%", boxSizing: "border-box" as const, backgroundColor: "#faf4e8",
};
const labelStyle = { fontSize: "12px", fontWeight: 700, color: "#2c2416", marginBottom: "4px", display: "block" } as const;
const primaryBtn = { padding: "9px 20px", borderRadius: "8px", backgroundColor: "#0e7566", color: "#fffef9", border: "none", cursor: "pointer", fontSize: "13px", fontWeight: 600 } as const;
const cancelBtn = { padding: "9px 16px", borderRadius: "8px", backgroundColor: "#f5ede0", color: "#4a3f30", border: "none", cursor: "pointer", fontSize: "13px" } as const;

export default function TokohForm({ editItem }: { editItem: any | null }) {
  const formRef = useRef<HTMLFormElement>(null);
  const [show, setShow] = useState(!!editItem);
  const [isPending, startTransition] = useTransition();
  const [previewUrl, setPreviewUrl] = useState<string>(editItem?.foto_url ?? "");

  useEffect(() => { if (editItem) setShow(true); }, [editItem]);

  return (
    <div style={{ marginBottom: "32px" }}>
      {!show && <button onClick={() => setShow(true)} style={primaryBtn}>+ Tambah Tokoh</button>}
      {show && (
        <form
          ref={formRef}
          onSubmit={(e) => {
            e.preventDefault();
            const fd = new FormData(e.currentTarget);
            startTransition(async () => {
              if (editItem) await updateTokoh(editItem.id, fd);
              else await createTokoh(fd);
              formRef.current?.reset();
              setPreviewUrl("");
              setShow(false);
            });
          }}
          style={{ background: "#fffef9", border: "1px solid #e0d8cc", borderRadius: "14px", padding: "24px 28px", display: "flex", flexDirection: "column", gap: "14px", marginBottom: "20px" }}
        >
          <h3 style={{ margin: 0, fontSize: "15px", fontWeight: 700, color: "#2c2416" }}>
            {editItem ? "Edit Tokoh" : "Tambah Tokoh"}
          </h3>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
            <div>
              <label style={labelStyle}>Nama</label>
              <input name="nama" required defaultValue={editItem?.nama ?? ""} style={inputStyle} />
            </div>
            <div>
              <label style={labelStyle}>Jabatan</label>
              <input name="jabatan" required defaultValue={editItem?.jabatan ?? ""} style={inputStyle} />
            </div>
          </div>
          <div>
            <label style={labelStyle}>Bidang</label>
            <input name="bidang" required defaultValue={editItem?.bidang ?? ""} style={inputStyle} />
          </div>
          <div>
            <label style={labelStyle}>Biografi</label>
            <textarea name="biografi" rows={5} defaultValue={editItem?.biografi ?? ""} placeholder="Tulis biografi singkat tokoh..." style={{ ...inputStyle, resize: "vertical" }} />
          </div>
          <div>
            <label style={labelStyle}>Foto</label>
            {previewUrl && (
              <img src={previewUrl} alt="preview" style={{ width: "80px", height: "80px", objectFit: "cover", borderRadius: "6px", marginBottom: "6px", display: "block" }} />
            )}
            <input type="hidden" name="existing_foto_url" value={previewUrl} />
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
