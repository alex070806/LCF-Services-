"use client";

import { useLanguage } from "@/context/LanguageContext";
import AnimateIn from "./AnimateIn";
import { motion } from "framer-motion";
import { Percent, ShieldOff, ShieldCheck, Zap } from "lucide-react";

const services = [
  {
    titleKey: "service_1_title",
    descKey: "service_1_desc",
    icon: Percent,
    gradient: "from-blue-500 to-indigo-600",
  },
  {
    titleKey: "service_2_title",
    descKey: "service_2_desc",
    icon: ShieldOff,
    gradient: "from-purple-500 to-pink-500",
  },
  {
    titleKey: "service_3_title",
    descKey: "service_3_desc",
    icon: ShieldCheck,
    gradient: "from-amber-500 to-orange-500",
  },
  {
    titleKey: "service_4_title",
    descKey: "service_4_desc",
    icon: Zap,
    gradient: "from-emerald-500 to-teal-500",
  },
];

export default function Services() {
  const { t } = useLanguage();

  return (
    <section id="services" className="py-16 sm:py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateIn>
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
            <span className="inline-block text-sm font-semibold text-primary-600 bg-primary-50 px-4 py-1.5 rounded-full mb-4">
              {t("nav_services")}
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
              {t("services_title")}
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600">{t("services_subtitle")}</p>
          </div>
        </AnimateIn>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {services.map((service, i) => (
            <AnimateIn key={i} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative bg-white rounded-xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-sm hover:shadow-2xl transition-shadow overflow-hidden group h-full"
              >
                <div
                  className={`w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-3 sm:mb-4 lg:mb-6 group-hover:scale-110 transition-transform`}
                >
                  <service.icon className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">
                  {t(service.titleKey)}
                </h3>
                <p className="text-gray-600 leading-relaxed text-xs sm:text-sm">
                  {t(service.descKey)}
                </p>
                <div
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity`}
                />
              </motion.div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
