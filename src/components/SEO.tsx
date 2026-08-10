import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { withLangPrefix } from "@/lib/i18n-routing";

interface SEOProps {
  title: string;
  description: string;
  titleEn?: string;
  descriptionEn?: string;
  path: string;
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
}

const SITE_URL = "https://breacc.org.uk";
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.png`;

const SEO = ({ title, description, titleEn, descriptionEn, path, jsonLd }: SEOProps) => {
  const { i18n } = useTranslation();
  const isEn = i18n.language?.startsWith("en");

  const ptUrl = `${SITE_URL}${withLangPrefix(path, "pt")}`;
  const enUrl = `${SITE_URL}${withLangPrefix(path, "en")}`;
  const canonicalUrl = isEn ? enUrl : ptUrl;

  const activeTitle = isEn && titleEn ? titleEn : title;
  const activeDescription = isEn && descriptionEn ? descriptionEn : description;

  const blocks = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [];

  return (
    <Helmet>
      <html lang={isEn ? "en-GB" : "pt-BR"} />
      <title>{activeTitle}</title>
      <meta name="description" content={activeDescription} />
      <link rel="canonical" href={canonicalUrl} />
      <link rel="alternate" hrefLang="pt" href={ptUrl} />
      <link rel="alternate" hrefLang="en" href={enUrl} />
      <link rel="alternate" hrefLang="x-default" href={ptUrl} />
      <meta property="og:title" content={activeTitle} />
      <meta property="og:description" content={activeDescription} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={DEFAULT_OG_IMAGE} />
      <meta property="og:locale" content={isEn ? "en_GB" : "pt_BR"} />
      <meta property="og:locale:alternate" content={isEn ? "pt_BR" : "en_GB"} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={activeTitle} />
      <meta name="twitter:description" content={activeDescription} />
      <meta name="twitter:image" content={DEFAULT_OG_IMAGE} />
      {blocks.map((block, i) => (
        <script key={i} type="application/ld+json">{JSON.stringify(block)}</script>
      ))}
    </Helmet>
  );
};

export default SEO;
