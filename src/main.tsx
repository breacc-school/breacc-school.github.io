import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import i18n from "./i18n";
import App from "./App.tsx";
import "./index.css";
import { getLangFromPath } from "./lib/i18n-routing";

const urlLang = getLangFromPath(window.location.pathname);
if (urlLang !== i18n.language) {
  void i18n.changeLanguage(urlLang);
}

createRoot(document.getElementById("root")!).render(
  <HelmetProvider>
    <App />
  </HelmetProvider>
);
