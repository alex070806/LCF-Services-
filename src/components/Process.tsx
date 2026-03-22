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
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-100/50 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-100/50 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateIn>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block text-sm font-semibold text-primary-600 bg-primary-50 px-4 py-1.5 rounded-full mb-4">
              {t("how_title")}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              {t("how_title")}
            </h2>
          </div>
        </AnimateIn>

        <div className="relative max-w-4xl mx-auto mb-24">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 via-purple-500 to-pink-500 hidden md:block" />

          {steps.map((step, i) => (
            <AnimateIn key={i} delay={i * 0.15} direction="right">
              <div className="relative flex gap-8 mb-12 last:mb-0">
                <div className="hidden md:flex shrink-0">
                  <div className="relative z-10 w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-500 to-purple-600 flex items-center justify-center shadow-lg shadow-primary-500/25">
                    <step.icon className="w-7 h-7 text-white" />
                  </div>
                </div>
                <div className="flex-1 bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-lg transition-all border border-gray-100">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-bold text-primary-500 bg-primary-50 px-3 py-1 rounded-full">
                      0{i + 1}
                    </span>
                    <h3 className="text-xl font-bold text-gray-900">
                      {t(step.titleKey)}
                    </h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {t(step.descKey)}
                  </p>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>

        <AnimateIn>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              {t("why_title")}
            </h2>
          </div>
        </AnimateIn>

        <div className="grid md:grid-cols-3 gap-8">
          {whyItems.map((item, i) => (
            <AnimateIn key={i} delay={i * 0.1}>
              <div className="relative p-8 rounded-3xl bg-gradient-to-br from-primary-600 to-purple-700 text-white overflow-hidden group hover:shadow-2xl hover:shadow-primary-500/20 transition-all">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-8 translate-x-8" />
                <item.icon className="w-10 h-10 mb-5 text-white/80" />
                <h3 className="text-xl font-bold mb-3">{t(item.titleKey)}</h3>
                <p className="text-white/75 leading-relaxed">{t(item.descKey)}</p>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
