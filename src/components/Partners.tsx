import { useTranslation } from "react-i18next";
import bcpLogo from "@/assets/partners/BCP-Council-RGB-white-keyline.svg";
import canLogo from "@/assets/partners/community action network.jpg";
import communityFundLogo from "@/assets/partners/community_fund.png";
import dorsetCommLogo from "@/assets/partners/dorset_comm.jpeg";
import dorsetRaceLogo from "@/assets/partners/dorset_race.webp";
import dreamCasaLogo from "@/assets/partners/dream_casa.png";

interface Partner {
  src: string;
  alt: string;
  labelKey?: string;
}

const partners: Partner[] = [
  { src: bcpLogo, alt: "BCP Council" },
  { src: canLogo, alt: "Community Action Network" },
  { src: communityFundLogo, alt: "Community Fund" },
  { src: dorsetCommLogo, alt: "Dorset Community" },
  { src: dorsetRaceLogo, alt: "Dorset Race Equality" },
  { src: dreamCasaLogo, alt: "Dream Casa Mortgage Consultancy", labelKey: "partners.fj_sponsor" },
];

const Logo = ({ src, alt, label }: { src: string; alt: string; label?: string }) => (
  <div className="flex flex-col items-center gap-1 flex-shrink-0">
    <img
      src={src}
      alt={alt}
      className="h-20 w-auto max-w-[200px] object-contain mix-blend-multiply"
    />
    {label && (
      <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
        {label}
      </span>
    )}
  </div>
);

const Partners = () => {
  const { t } = useTranslation();

  return (
    <section className="py-14 bg-muted/40">
      <div className="container px-4">
        <div className="text-center mb-8">
          <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">
            {t("partners.badge")}
          </p>
        </div>

        {/* Desktop: static row */}
        <div className="hidden md:flex flex-wrap justify-center items-end gap-10">
          {partners.map((p) => (
            <Logo key={p.alt} src={p.src} alt={p.alt} label={p.labelKey ? t(p.labelKey) : undefined} />
          ))}
        </div>

        {/* Mobile: auto-scrolling marquee */}
        <div className="md:hidden overflow-hidden">
          <div className="flex items-end gap-10 animate-marquee w-max">
            {[...partners, ...partners].map((p, i) => (
              <Logo key={`${p.alt}-${i}`} src={p.src} alt={p.alt} label={p.labelKey ? t(p.labelKey) : undefined} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
