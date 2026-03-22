"use client";

import { motion } from "framer-motion";
import { ArrowRight, Shield, Clock, TrendingUp } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 gradient-hero" />
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1920&q=80')] bg-cover bg-center mix-blend-overlay opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/10" />

      <div className="absolute top-20 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm text-white/90 px-4 py-2 rounded-full text-sm mb-6 border border-white/20"
            >
              <Shield className="w-4 h-4" />
              LCF Services
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              {t("hero_title")}
            </h1>
            <p className="text-lg sm:text-xl text-white/80 mb-10 max-w-lg leading-relaxed">
              {t("hero_subtitle")}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 bg-white text-primary-700 px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-gray-50 transition-all hover:shadow-2xl hover:shadow-white/20"
              >
                {t("hero_cta")}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#about"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-white/10 transition-all backdrop-blur-sm"
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
              { icon: TrendingUp, value: "88%", label: "Your revenue" },
              { icon: Shield, value: "$0", label: "No deposit" },
              { icon: Clock, value: "24/7", label: "Support" },
              { icon: ArrowRight, value: "1-2", label: "Days to start" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-white hover:bg-white/15 transition-all group"
              >
                <item.icon className="w-8 h-8 mb-3 text-white/70 group-hover:text-white transition-colors" />
                <div className="text-3xl font-bold mb-1">{item.value}</div>
                <div className="text-sm text-white/60">{item.label}</div>
              </motion.div>
            ))}
          </motion.div>
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
