import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { track } from "@/lib/analytics";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import HeroOptions from "./pages/HeroOptions.tsx";
import HistoryPage from "./pages/History.tsx";
import FAQPage from "./pages/FAQPage.tsx";
import GalleryPage from "./pages/GalleryPage.tsx";
import EquipePage from "./pages/EquipePage.tsx";
import PoliciesPage from "./pages/PoliciesPage.tsx";
import ProjetoPedagogicoPage from "./pages/ProjetoPedagogicoPage.tsx";
// Resources merged into GalleryPage

const queryClient = new QueryClient();

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [pathname]);

  return null;
};

const AnalyticsPageView = () => {
  const { pathname, search } = useLocation();

  useEffect(() => {
    track("page_view", {
      page_path: pathname + search,
      page_location: window.location.href,
      page_title: document.title,
    });
    if (pathname === "/galeria") track("gallery_view");
    if (pathname === "/projeto-pedagogico") track("pedagogy_view");
  }, [pathname, search]);

  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <AnalyticsPageView />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/hero-options" element={<HeroOptions />} />
          <Route path="/historia" element={<HistoryPage />} />
          <Route path="/equipe" element={<EquipePage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/galeria" element={<GalleryPage />} />
          <Route path="/politicas" element={<PoliciesPage />} />
          <Route path="/projeto-pedagogico" element={<ProjetoPedagogicoPage />} />
          {/* /recursos redirects to gallery now */}
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
