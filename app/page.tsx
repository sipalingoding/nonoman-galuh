import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import BeritaInformasi from "@/components/BeritaInformasi";
import ArtikelBudaya from "@/components/ArtikelBudaya";
import AgendaBudaya from "@/components/AgendaBudaya";
import WisataTokoh from "@/components/WisataTokoh";
import KanalYoutube from "@/components/KanalYoutube";
import RakBuku from "@/components/RakBuku";
import TimPengembang from "@/components/TimPengembang";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <StatsBar />
        {/* pt-16 to clear the overlapping StatsBar */}
        <div className="pt-16">
          <BeritaInformasi />
        </div>
        <ArtikelBudaya />
        <AgendaBudaya />
        <WisataTokoh />
        <KanalYoutube />
        <RakBuku />
        <TimPengembang />
      </main>
      <Footer />
    </>
  );
}
