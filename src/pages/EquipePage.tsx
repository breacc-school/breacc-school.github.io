import Navbar from "@/components/Navbar";
import Equipe from "@/components/Equipe";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const EquipePage = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Equipe BREACC — Comitê e Professoras de Português"
        description="Conheça o comitê e as professoras da BREACC: trustees, coordenação pedagógica e equipe docente especializada em Português como Língua de Herança."
        path="/equipe"
      />
      <Navbar />
      <div className="pt-16">
        <Equipe />
      </div>
      <Footer />
    </div>
  );
};

export default EquipePage;
