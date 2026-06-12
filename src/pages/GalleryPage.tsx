import Navbar from "@/components/Navbar";
import Gallery from "@/components/Gallery";
import Resources from "@/components/Resources";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const GalleryPage = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Galeria e Recursos — BREACC"
        description="Fotos e vídeos das nossas atividades — Festa Junina, Carnaval, Independência — e a playlist de músicas brasileiras usadas em sala de aula."
        path="/galeria"
      />
      <Navbar />
      <div className="pt-16">
        <Gallery />
        <Resources />
      </div>
      <Footer />
    </div>
  );
};

export default GalleryPage;
