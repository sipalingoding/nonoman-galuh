import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import BeritaInformasi from "@/components/BeritaInformasi";
import ArtikelBudaya from "@/components/ArtikelBudaya";
import AgendaBudaya from "@/components/AgendaBudaya";
import Tokoh from "@/components/Tokoh";
import KanalYoutube from "@/components/KanalYoutube";
import RakBuku from "@/components/RakBuku";
import TimPengembang from "@/components/TimPengembang";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="site-shell">
      <Navbar />
      <main>
        <Hero />
        <StatsBar />
        <BeritaInformasi />
        <ArtikelBudaya />
        <AgendaBudaya />
        <Tokoh />
        <KanalYoutube />
        <RakBuku />
        <TimPengembang />
      </main>
      <Footer />
    </div>
  );
}
