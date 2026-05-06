import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";
import { useTranslation } from "react-i18next";
import calendarBH from "@/assets/Calendario_BH_2526.png";
import calendarTW from "@/assets/Calendario_TW_2526.png";

const faqCount = 13;
const calendarQuestion = 6;

const FAQ = () => {
  const { t } = useTranslation();

  return (
    <section id="faq" className="py-20 bg-muted/40">
      <div className="container px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <HelpCircle className="w-4 h-4" />
            {t("faq.badge")}
          </div>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-4">
            {t("faq.title")}
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            {t("faq.subtitle")}
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3">
            {Array.from({ length: faqCount }, (_, i) => {
              const num = i + 1;
              return (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  className="bg-card rounded-xl border border-border px-6"
                >
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline">
                    {t(`faq.q${num}`)}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {t(`faq.a${num}`)}
                    {num === calendarQuestion && (
                      <ul className="mt-3 space-y-1">
                        <li>
                          <a
                            href={calendarBH}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary font-semibold hover:underline"
                          >
                            {t("faq.calendar_bh")}
                          </a>
                        </li>
                        <li>
                          <a
                            href={calendarTW}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary font-semibold hover:underline"
                          >
                            {t("faq.calendar_tw")}
                          </a>
                        </li>
                      </ul>
                    )}
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
