import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import UpcomingEvents from "@/components/UpcomingEvents";
import About from "@/components/About";
import LearningStages from "@/components/LearningStages";
import Locations from "@/components/Locations";
import Partners from "@/components/Partners";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { organizationJsonLd } from "@/lib/seo";

const Index = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const sectionId = (location.state as { scrollTo?: string } | null)?.scrollTo;
    if (!sectionId) {
      return;
    }

    const timeoutId = window.setTimeout(() => {
      const el = document.getElementById(sectionId);
      if (el) {
        const isMobile = window.innerWidth < 768;
        el.scrollIntoView({ behavior: isMobile ? "auto" : "smooth" });
      }
      navigate(location.pathname, { replace: true, state: null });
    }, 100);

    return () => window.clearTimeout(timeoutId);
  }, [location.pathname, location.state, navigate]);

  return (
    <div className="min-h-screen">
      <SEO
        title="BREACC — Escola de Português como Língua de Herança no Reino Unido"
        titleEn="BREACC — Brazilian School | Portuguese Classes for Children UK"
        description="BREACC: escola brasileira em Bournemouth e Twickenham (Londres). Aulas de português, cultura e preparação GCSE para crianças e jovens desde 1997. Charity 1087726."
        descriptionEn="BREACC is a UK registered charity (1087726) teaching Portuguese as a Heritage Language and Brazilian culture to children in Bournemouth and Twickenham/London since 1997. GCSE Portuguese preparation available."
        path="/"
        jsonLd={organizationJsonLd}
      />
      <Navbar />
      <Hero />
      <About />
      <UpcomingEvents />
      <LearningStages />
      <Locations />
      <Partners />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
