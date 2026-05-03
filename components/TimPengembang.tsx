const col1 = [
  { role: "Penanggungjawab", name: "Tendi Nugraha" },
  { role: "Pengelola Konten", name: "Ahmad Rizky Fauzi" },
  { role: "Administrator Website", name: "A. Nenda Makhtun MK" },
];

const col2 = [
  { role: "Editor/Proofreader", name: "Eggy Aditiar" },
  { role: "Technical Support", name: "Tata Tarmana" },
  { role: "Visual Desainer/Illustrator", name: "Bagus Indra Baitullah" },
];

const col3 = [
  { role: "Sosial Media & Promosi", name: "W. Rio Wijaya" },
];

const kontributor = [
  { role: "Ciamis Kulon", name: "Pasca Adha Pratama" },
  { role: "Ciamis Kidul", name: "Eka Wijaya Permana" },
  { role: "Ciamis Kaler", name: "Nu'man Yazid" },
  { role: "Ciamis Wetan", name: "Lu'luatun Nazmi" },
];

function Entry({ role, name }: { role: string; name: string }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
      <span className="ui-font" style={{ fontSize: "11px", color: "#7a6a54" }}>{role}</span>
      <span className="ui-font" style={{ fontSize: "13px", fontWeight: 700, color: "#2c2416" }}>{name}</span>
    </div>
  );
}

export default function TimPengembang() {
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
          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            {col1.map((e) => <Entry key={e.name} {...e} />)}
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            {col2.map((e) => <Entry key={e.name} {...e} />)}
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            {col3.map((e) => <Entry key={e.name} {...e} />)}
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            <span className="ui-font" style={{ fontSize: "11px", color: "#7a6a54", fontWeight: 700 }}>
              Kontributor:
            </span>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4px 20px" }}>
              {kontributor.map((e) => <Entry key={e.name} {...e} />)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
