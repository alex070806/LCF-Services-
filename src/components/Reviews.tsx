"use client";

import { useLanguage } from "@/context/LanguageContext";
import AnimateIn from "./AnimateIn";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const reviews = [1, 2, 3, 4, 5, 6];

export default function Reviews() {
  const { t } = useLanguage();

  return (
    <section id="reviews" className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateIn>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block text-sm font-semibold text-primary-600 bg-primary-50 px-4 py-1.5 rounded-full mb-4">
              {t("nav_reviews")}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
              {t("reviews_title")}
            </h2>
          </div>
        </AnimateIn>

        <div className="relative">
          <div className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide -mx-4 px-4">
            {reviews.map((n, i) => (
              <motion.div
                key={n}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="snap-start shrink-0 w-[340px] sm:w-[400px]"
              >
                <div className="bg-gray-50 rounded-3xl p-8 h-full border border-gray-100 hover:border-primary-200 hover:shadow-lg transition-all relative">
                  <Quote className="absolute top-6 right-6 w-8 h-8 text-primary-100" />
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, j) => (
                      <Star
                        key={j}
                        className="w-4 h-4 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-6 text-sm">
                    &ldquo;{t(`review_${n}_text`)}&rdquo;
                  </p>
                  <div className="flex items-center gap-3 mt-auto">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-500 to-purple-500 flex items-center justify-center text-white font-bold text-sm">
                      {t(`review_${n}_name`).charAt(0)}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 text-sm">
                        {t(`review_${n}_name`)}
                      </div>
                      <div className="text-xs text-gray-500">
                        {t(`review_${n}_role`)}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="absolute right-0 top-0 bottom-6 w-20 bg-gradient-to-l from-white to-transparent pointer-events-none hidden sm:block" />
        </div>
      </div>
    </section>
  );
}
