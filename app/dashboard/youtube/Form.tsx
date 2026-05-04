"use client";

import { useRef, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { createYoutube, updateYoutube } from "./actions";

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

export default function YoutubeForm({ editItem }: { editItem: any | null }) {
  const router = useRouter();
  const formRef = useRef<HTMLFormElement>(null);
  const [show, setShow] = useState(!!editItem);

  useEffect(() => {
    if (editItem) setShow(true);
  }, [editItem]);

  const action = editItem ? updateYoutube.bind(null, editItem.id) : createYoutube;

  return (
    <div style={{ marginBottom: "32px" }}>
      {!show && (
        <button onClick={() => setShow(true)} style={primaryBtn}>
          + Tambah Video
        </button>
      )}
      {show && (
        <form
          ref={formRef}
          action={async (fd) => {
            await action(fd);
            formRef.current?.reset();
            setShow(false);
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
            {editItem ? "Edit Video" : "Tambah Video YouTube"}
          </h3>
          <div>
            <label style={labelStyle}>URL YouTube</label>
            <input
              name="url"
              type="url"
              required
              placeholder="https://www.youtube.com/watch?v=..."
              defaultValue={editItem?.url ?? ""}
              style={inputStyle}
            />
          </div>
          <div style={{ display: "flex", gap: "10px" }}>
            <button type="submit" style={primaryBtn}>Simpan</button>
            <button type="button" onClick={() => setShow(false)} style={cancelBtn}>Batal</button>
          </div>
        </form>
      )}
    </div>
  );
}
