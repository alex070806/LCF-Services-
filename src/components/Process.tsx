"use client";

import { useLanguage } from "@/context/LanguageContext";
import AnimateIn from "./AnimateIn";
import {
  PhoneCall,
  FileSignature,
  Rocket,
  Eye,
  Route,
  Banknote,
} from "lucide-react";

const steps = [
  { titleKey: "how_step1_title", descKey: "how_step1_desc", icon: PhoneCall },
  { titleKey: "how_step2_title", descKey: "how_step2_desc", icon: FileSignature },
  { titleKey: "how_step3_title", descKey: "how_step3_desc", icon: Rocket },
];

const whyItems = [
  { titleKey: "why_1_title", descKey: "why_1_desc", icon: Eye },
  { titleKey: "why_2_title", descKey: "why_2_desc", icon: Route },
  { titleKey: "why_3_title", descKey: "why_3_desc", icon: Banknote },
];

export default function Process() {
  const { t } = useLanguage();

  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-primary-100/50 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-52 sm:w-80 h-52 sm:h-80 bg-purple-100/50 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateIn>
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
            <span className="inline-block text-sm font-semibold text-primary-600 bg-primary-50 px-4 py-1.5 rounded-full mb-4">
              {t("how_title")}
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
              {t("how_title")}
            </h2>
          </div>
        </AnimateIn>

        <div className="relative max-w-4xl mx-auto mb-16 sm:mb-24">
          <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 via-purple-500 to-pink-500 hidden md:block" />

          {steps.map((step, i) => (
            <AnimateIn key={i} delay={i * 0.15} direction="right">
              <div className="relative flex gap-4 sm:gap-8 mb-8 sm:mb-12 last:mb-0">
                <div className="hidden md:flex shrink-0">
                  <div className="relative z-10 w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-primary-500 to-purple-600 flex items-center justify-center shadow-lg shadow-primary-500/25">
                    <step.icon className="w-5 h-5 sm:w-7 sm:h-7 text-white" />
                  </div>
                </div>
                <div className="flex-1 bg-gray-50 rounded-xl sm:rounded-2xl p-5 sm:p-8 hover:bg-white hover:shadow-lg transition-all border border-gray-100">
                  <div className="flex items-center gap-2.5 sm:gap-3 mb-2 sm:mb-3">
                    <div className="md:hidden w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-purple-600 flex items-center justify-center shrink-0">
                      <step.icon className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-xs font-bold text-primary-500 bg-primary-50 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full">
                      0{i + 1}
                    </span>
                    <h3 className="text-base sm:text-xl font-bold text-gray-900">
                      {t(step.titleKey)}
                    </h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed text-xs sm:text-base">
                    {t(step.descKey)}
                  </p>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>

        <AnimateIn>
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
              {t("why_title")}
            </h2>
          </div>
        </AnimateIn>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {whyItems.map((item, i) => (
            <AnimateIn key={i} delay={i * 0.1}>
              <div className="relative p-5 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-primary-600 to-purple-700 text-white overflow-hidden group hover:shadow-2xl hover:shadow-primary-500/20 transition-all">
                <div className="absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-white/5 rounded-full -translate-y-8 translate-x-8" />
                <item.icon className="w-8 h-8 sm:w-10 sm:h-10 mb-3 sm:mb-5 text-white/80" />
                <h3 className="text-base sm:text-lg lg:text-xl font-bold mb-2 sm:mb-3">{t(item.titleKey)}</h3>
                <p className="text-white/75 leading-relaxed text-xs sm:text-sm lg:text-base">{t(item.descKey)}</p>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
