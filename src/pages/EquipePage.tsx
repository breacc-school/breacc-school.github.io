import Navbar from "@/components/Navbar";
import Equipe from "@/components/Equipe";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const EquipePage = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Equipe BREACC — Comitê e Professoras de Português"
        titleEn="BREACC Team — Trustees and Portuguese Heritage Language Teachers"
        description="Conheça o comitê e as professoras da BREACC: trustees, coordenação pedagógica e equipe docente especializada em Português como Língua de Herança."
        descriptionEn="Meet the BREACC team: trustees, pedagogical coordinator, and specialist teachers of Portuguese as a Heritage Language for children in the UK."
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
