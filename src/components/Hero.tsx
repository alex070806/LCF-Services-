"use client";

import { motion } from "framer-motion";
import { ArrowRight, Shield, Clock, TrendingUp } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 gradient-hero" />
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1682980799090-c4c6342be01a?w=1920&q=80')] bg-cover bg-center mix-blend-soft-light opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30" />

      <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-400/8 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-300/8 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-24 pb-24 sm:pb-20 w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white/90 px-4 py-2 rounded-full text-sm mb-6 border border-white/15"
            >
              <Shield className="w-4 h-4" />
              LCF Services
            </motion.div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              {t("hero_title")}
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-white/75 mb-8 sm:mb-10 max-w-lg leading-relaxed">
              {t("hero_subtitle")}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 bg-white text-indigo-800 px-6 sm:px-8 py-3.5 sm:py-4 rounded-2xl font-semibold text-base sm:text-lg hover:bg-gray-50 transition-all hover:shadow-2xl hover:shadow-white/20"
              >
                {t("hero_cta")}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#about"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/25 text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-2xl font-semibold text-base sm:text-lg hover:bg-white/10 transition-all backdrop-blur-sm"
              >
                {t("hero_learn")}
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:grid grid-cols-2 gap-4"
          >
            {[
              { icon: TrendingUp, value: "88%", labelKey: "hero_stat_revenue" },
              { icon: Shield, value: "$0", labelKey: "hero_stat_deposit" },
              { icon: Clock, value: "24/7", labelKey: "hero_stat_support" },
              { icon: ArrowRight, value: "1-2", labelKey: "hero_stat_start" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="bg-white/8 backdrop-blur-md border border-white/15 rounded-2xl p-6 text-white hover:bg-white/12 transition-all group"
              >
                <item.icon className="w-8 h-8 mb-3 text-white/60 group-hover:text-white transition-colors" />
                <div className="text-3xl font-bold mb-1">{item.value}</div>
                <div className="text-sm text-white/50">{t(item.labelKey)}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-10 lg:hidden">
          {[
            { icon: TrendingUp, value: "88%", labelKey: "hero_stat_revenue" },
            { icon: Shield, value: "$0", labelKey: "hero_stat_deposit" },
            { icon: Clock, value: "24/7", labelKey: "hero_stat_support" },
            { icon: ArrowRight, value: "1-2", labelKey: "hero_stat_start" },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + i * 0.1 }}
              className="bg-white/8 backdrop-blur-md border border-white/15 rounded-xl p-4 text-white text-center"
            >
              <div className="text-xl sm:text-2xl font-bold">{item.value}</div>
              <div className="text-xs text-white/50 mt-1">{t(item.labelKey)}</div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" className="w-full">
          <path
            d="M0,80 C240,120 480,40 720,80 C960,120 1200,40 1440,80 L1440,120 L0,120Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
