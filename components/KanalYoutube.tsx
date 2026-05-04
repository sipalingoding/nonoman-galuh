import Image from "next/image";
import { createClient } from "@/lib/supabase/server";


function getVideoId(url: string) {
  try {
    return new URL(url).searchParams.get("v") ?? "";
  } catch {
    return "";
  }
}

async function fetchVideoTitle(url: string): Promise<{ title: string; subtitle: string }> {
  try {
    const res = await fetch(
      `https://www.youtube.com/oembed?url=${encodeURIComponent(url)}&format=json`,
      { next: { revalidate: 3600 } }
    );
    const data = await res.json();
    const full: string = data.title ?? "";
    const dashIdx = full.indexOf(" – ");
    if (dashIdx !== -1) {
      return { title: full.slice(0, dashIdx), subtitle: full.slice(dashIdx + 3) };
    }
    return { title: full, subtitle: "" };
  } catch {
    return { title: "", subtitle: "" };
  }
}

function VideoCard({
  url,
  title,
  subtitle,
}: {
  url: string;
  title: string;
  subtitle: string;
}) {
  const videoId = getVideoId(url);
  const thumbnail = videoId
    ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
    : "";

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        borderRadius: "10px",
        overflow: "hidden",
        background: "#17204a",
        position: "relative",
        cursor: "pointer",
        aspectRatio: "16/9",
        display: "flex",
        alignItems: "flex-end",
        textDecoration: "none",
      }}
    >
      {/* Thumbnail */}
      {thumbnail && (
        <Image
          src={thumbnail}
          alt={title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          style={{ objectFit: "cover" }}
        />
      )}

      {/* Overlay gelap */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to top, rgba(0,0,0,.75) 0%, rgba(0,0,0,.15) 50%, transparent 100%)",
          zIndex: 1,
        }}
      />

      {/* Play button */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "46px",
          height: "46px",
          borderRadius: "50%",
          background: "rgba(255,255,255,.92)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 2,
          boxShadow: "0 4px 12px rgba(0,0,0,.3)",
        }}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="#d14e1f" style={{ marginLeft: "3px" }}>
          <path d="M8 5v14l11-7z" />
        </svg>
      </div>

      {/* Info */}
      <div style={{ position: "relative", zIndex: 2, padding: "16px 20px", width: "100%", textAlign: "center" }}>
        <div
          className="serif-title"
          style={{
            fontSize: "9.96px",
            fontWeight: 300,
            color: "rgba(255,255,255,.7)",
            display: "flex",
            alignItems: "center",
            gap: "4px",
            marginBottom: "2px",
            justifyContent: "center",
          }}
        >
          <svg width="16" height="11" viewBox="0 0 16 11" fill="none">
            <rect width="16" height="11" rx="2" fill="white" fillOpacity=".2" />
            <text x="2" y="8" fontSize="6" fill="white" fontFamily="monospace">NG</text>
          </svg>
          Nonoman Galuh
        </div>
        <div
          className="decorative-font"
          style={{ fontSize: "17.07px", color: "#fffef9", fontWeight: 400, lineHeight: 1.1 }}
        >
          {title}
        </div>
        {subtitle && (
          <div
            className="serif-title"
            style={{ fontSize: "9.96px", fontWeight: 300, color: "rgba(255,255,255,.78)", marginTop: "4px" }}
          >
            {subtitle}
          </div>
        )}
      </div>
    </a>
  );
}

export default async function KanalYoutube() {
  const supabase = await createClient();
  const { data: rows } = await supabase
    .from("kanal_youtube")
    .select("url")
    .order("created_at", { ascending: false })
    .limit(3);

  if (!rows || rows.length === 0) return null;

  const videos = await Promise.all(
    rows.map(async (r) => ({ url: r.url, ...(await fetchVideoTitle(r.url)) }))
  );

  return (
    <section className="px-sec" style={{ background: "#d64221", paddingTop: "54px", paddingBottom: "72px" }}>
      <div style={{ textAlign: "center", margin: "0 auto 32px", maxWidth: "1010px" }}>
        <h2
          className="decorative-font"
          style={{ fontSize: "32.71px", fontWeight: 400, color: "#fffef9", marginBottom: "8px", lineHeight: 1.2 }}
        >
          Kanal YouTube
        </h2>
        <p className="serif-title" style={{ fontSize: "14.22px", fontWeight: 300, color: "rgba(255,255,255,.88)" }}>
          Rekaman audiovisual melalui kanal YouTube{" "}
          <strong style={{ color: "#fffef9", fontWeight: 700 }}>Nonoman Galuh</strong>
        </p>
        <hr style={{ border: "none", borderTop: "1px solid rgba(255,255,255,.3)", margin: "20px 0 0" }} />
      </div>

      <div className="youtube-grid">
        {videos.map((video, i) => (
          <VideoCard key={i} url={video.url} title={video.title} subtitle={video.subtitle} />
        ))}
      </div>
    </section>
  );
}
