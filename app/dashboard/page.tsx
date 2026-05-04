import { createClient } from "@/lib/supabase/server";

export default async function DashboardPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div style={{ maxWidth: "960px" }}>
      {/* Header */}
      <div style={{ marginBottom: "32px" }}>
        <h1
          className="decorative-font"
          style={{ fontSize: "28px", fontWeight: 400, color: "#2c2416", margin: 0, lineHeight: 1.2 }}
        >
          Dasbor
        </h1>
        <p
          className="serif-title"
          style={{ fontSize: "14px", color: "#7a6a54", marginTop: "4px" }}
        >
          Selamat datang kembali, {user?.email}
        </p>
      </div>

      {/* Stats cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "20px",
          marginBottom: "32px",
        }}
      >
        {[
          { label: "Total Berita", color: "#c8341f", bg: "#fee2e2" },
          { label: "Total Agenda", color: "#0e7566", bg: "#d1fae5" },
          { label: "Total Artikel", color: "#7f3a21", bg: "#fef9c3" },
        ].map((stat) => (
          <div
            key={stat.label}
            style={{
              backgroundColor: "#fffef9",
              borderRadius: "14px",
              padding: "24px",
              border: "1px solid #e0d8cc",
              boxShadow: "0 2px 8px rgba(44,36,22,.06)",
            }}
          >
            <div
              style={{
                display: "inline-flex",
                padding: "6px 12px",
                borderRadius: "999px",
                backgroundColor: stat.bg,
                marginBottom: "12px",
              }}
            >
              <span
                className="serif-title"
                style={{ fontSize: "11px", fontWeight: 700, color: stat.color }}
              >
                {stat.label}
              </span>
            </div>
            <div
              className="decorative-font"
              style={{ fontSize: "36px", color: "#2c2416", lineHeight: 1 }}
            >
              —
            </div>
          </div>
        ))}
      </div>

      {/* Info banner */}
      <div
        style={{
          backgroundColor: "#fffef9",
          borderRadius: "14px",
          padding: "28px 32px",
          border: "1px solid #e0d8cc",
          boxShadow: "0 2px 8px rgba(44,36,22,.06)",
        }}
      >
        <h2
          className="decorative-font"
          style={{ fontSize: "18px", fontWeight: 400, color: "#2c2416", margin: "0 0 8px" }}
        >
          Portal Admin Nonoman Galuh
        </h2>
        <p
          className="serif-title"
          style={{ fontSize: "13.5px", color: "#4a3f30", lineHeight: 1.65, margin: 0 }}
        >
          Gunakan menu di sebelah kiri untuk mengelola konten website. Pastikan setiap konten yang
          diunggah telah melalui proses kurasi sesuai dengan nilai-nilai kebudayaan Galuh.
        </p>
      </div>
    </div>
  );
}
