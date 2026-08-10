import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";

export const SUPPORTED_LANGS = ["pt", "en"] as const;
export type Lang = (typeof SUPPORTED_LANGS)[number];

export const getLangFromPath = (pathname: string): Lang => {
  return pathname === "/en" || pathname.startsWith("/en/") ? "en" : "pt";
};

export const stripLangPrefix = (pathname: string): string => {
  if (pathname === "/en") return "/";
  if (pathname.startsWith("/en/")) return pathname.slice(3);
  return pathname;
};

export const withLangPrefix = (canonicalPath: string, lang: Lang): string => {
  if (lang === "pt") return canonicalPath;
  if (canonicalPath === "/") return "/en";
  return `/en${canonicalPath}`;
};

export const useLangPath = (canonicalPath: string): string => {
  const { i18n } = useTranslation();
  const lang: Lang = i18n.language?.startsWith("en") ? "en" : "pt";
  return withLangPrefix(canonicalPath, lang);
};

export const useOtherLangPath = (): string => {
  const { pathname, search, hash } = useLocation();
  const currentLang = getLangFromPath(pathname);
  const canonical = stripLangPrefix(pathname);
  const other: Lang = currentLang === "pt" ? "en" : "pt";
  return withLangPrefix(canonical, other) + search + hash;
};
