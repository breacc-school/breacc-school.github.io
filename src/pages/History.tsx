import Navbar from "@/components/Navbar";
import History from "@/components/History";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const HistoryPage = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Nossa História — BREACC desde 1997"
        description="Fundada em 1997, a BREACC é a escola de Português como Língua de Herança mais antiga do Reino Unido. Conheça nossa trajetória e missão."
        path="/historia"
      />
      <Navbar />
      <div className="pt-16">
        <History />
      </div>
      <Footer />
    </div>
  );
};

export default HistoryPage;
