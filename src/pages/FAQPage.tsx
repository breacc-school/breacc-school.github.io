import Navbar from "@/components/Navbar";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const FAQPage = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Perguntas Frequentes — BREACC"
        description="Horários, idades, calendário letivo, preparação para GCSE e mensalidades: tudo o que você precisa saber sobre a BREACC em Bournemouth e Twickenham."
        path="/faq"
      />
      <Navbar />
      <div className="pt-16">
        <FAQ />
      </div>
      <Footer />
    </div>
  );
};

export default FAQPage;
