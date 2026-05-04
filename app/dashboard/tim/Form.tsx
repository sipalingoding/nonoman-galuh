"use client";

import { useRef, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { createTim, updateTim } from "./actions";

const inputStyle = {
  padding: "9px 12px",
  borderRadius: "8px",
  border: "1.5px solid #e0d8cc",
  fontSize: "13px",
  width: "100%",
  boxSizing: "border-box" as const,
  backgroundColor: "#faf4e8",
};
const labelStyle = {
  fontSize: "12px",
  fontWeight: 700,
  color: "#2c2416",
  marginBottom: "4px",
  display: "block",
} as const;
const primaryBtn = {
  padding: "9px 20px",
  borderRadius: "8px",
  backgroundColor: "#0e7566",
  color: "#fffef9",
  border: "none",
  cursor: "pointer",
  fontSize: "13px",
  fontWeight: 600,
} as const;
const cancelBtn = {
  padding: "9px 16px",
  borderRadius: "8px",
  backgroundColor: "#f5ede0",
  color: "#4a3f30",
  border: "none",
  cursor: "pointer",
  fontSize: "13px",
} as const;

export default function TimForm({ editItem }: { editItem: any | null }) {
  const router = useRouter();
  const formRef = useRef<HTMLFormElement>(null);
  const [show, setShow] = useState(!!editItem);
  const [tipe, setTipe] = useState<string>(editItem?.tipe ?? "pengelola");

  useEffect(() => {
    if (editItem) {
      setShow(true);
      setTipe(editItem.tipe ?? "pengelola");
    }
  }, [editItem]);

  const action = editItem ? updateTim.bind(null, editItem.id) : createTim;

  return (
    <div style={{ marginBottom: "32px" }}>
      {!show && (
        <button onClick={() => setShow(true)} style={primaryBtn}>
          + Tambah Anggota Tim
        </button>
      )}
      {show && (
        <form
          ref={formRef}
          action={async (fd) => {
            await action(fd);
            formRef.current?.reset();
            setShow(false);
            setTipe("pengelola");
            router.push("/dashboard");
          }}
          style={{
            background: "#fffef9",
            border: "1px solid #e0d8cc",
            borderRadius: "14px",
            padding: "24px 28px",
            display: "flex",
            flexDirection: "column",
            gap: "14px",
            marginBottom: "20px",
          }}
        >
          <h3 style={{ margin: 0, fontSize: "15px", fontWeight: 700, color: "#2c2416" }}>
            {editItem ? "Edit Anggota Tim" : "Tambah Anggota Tim"}
          </h3>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
            <div>
              <label style={labelStyle}>Nama</label>
              <input name="nama" required defaultValue={editItem?.nama ?? ""} style={inputStyle} />
            </div>
            <div>
              <label style={labelStyle}>Jabatan / Peran</label>
              <input name="jabatan" required defaultValue={editItem?.jabatan ?? ""} style={inputStyle} />
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
            <div>
              <label style={labelStyle}>Tipe</label>
              <select
                name="tipe"
                required
                value={tipe}
                onChange={(e) => setTipe(e.target.value)}
                style={inputStyle}
              >
                <option value="pengelola">Pengelola</option>
                <option value="kontributor">Kontributor</option>
              </select>
            </div>
            <div>
              <label style={labelStyle}>Urutan</label>
              <input
                name="urutan"
                type="number"
                min="0"
                defaultValue={editItem?.urutan ?? 0}
                style={inputStyle}
              />
            </div>
          </div>
          {tipe === "kontributor" && (
            <div>
              <label style={labelStyle}>Wilayah</label>
              <input name="wilayah" defaultValue={editItem?.wilayah ?? ""} placeholder="cth: Ciamis Kulon" style={inputStyle} />
            </div>
          )}
          <div style={{ display: "flex", gap: "10px" }}>
            <button type="submit" style={primaryBtn}>Simpan</button>
            <button type="button" onClick={() => { setShow(false); setTipe("pengelola"); }} style={cancelBtn}>Batal</button>
          </div>
        </form>
      )}
    </div>
  );
}
