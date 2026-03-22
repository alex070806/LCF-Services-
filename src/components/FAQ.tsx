"use client";

import { useLanguage } from "@/context/LanguageContext";
import AnimateIn from "./AnimateIn";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqIds = [1, 2, 3, 4, 5, 6, 7, 8];

export default function FAQ() {
  const { t } = useLanguage();
  const [openId, setOpenId] = useState<number | null>(null);

  const leftColumn = faqIds.filter((_, i) => i % 2 === 0);
  const rightColumn = faqIds.filter((_, i) => i % 2 !== 0);

  const renderItem = (n: number) => {
    const isOpen = openId === n;
    return (
      <div
        key={n}
        className="border border-gray-100 rounded-xl sm:rounded-2xl overflow-hidden bg-white hover:border-primary-200 transition-colors"
      >
        <button
          onClick={() => setOpenId(isOpen ? null : n)}
          className="w-full flex items-center justify-between p-4 sm:p-6 text-left gap-3"
        >
          <span className="font-semibold text-gray-900 text-xs sm:text-sm md:text-base leading-snug">
            {t(`faq_${n}_q`)}
          </span>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.2 }}
            className="shrink-0"
          >
            <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-primary-500" />
          </motion.div>
        </button>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              <div className="px-4 pb-4 sm:px-6 sm:pb-6 text-gray-600 text-xs sm:text-sm leading-relaxed border-t border-gray-50 pt-3 sm:pt-4">
                {t(`faq_${n}_a`)}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateIn>
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
            <span className="inline-block text-sm font-semibold text-primary-600 bg-primary-50 px-4 py-1.5 rounded-full mb-4">
              {t("faq_badge")}
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
              {t("faq_title")}
            </h2>
          </div>
        </AnimateIn>

        <div className="grid md:grid-cols-2 gap-3 sm:gap-4 max-w-5xl mx-auto">
          <AnimateIn direction="left">
            <div className="space-y-3 sm:space-y-4">{leftColumn.map(renderItem)}</div>
          </AnimateIn>
          <AnimateIn direction="right">
            <div className="space-y-3 sm:space-y-4">{rightColumn.map(renderItem)}</div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
