"use client";

import { useLanguage } from "@/context/LanguageContext";
import AnimateIn from "./AnimateIn";
import { MapPin, Phone, Mail, Calendar } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

function Counter({ end, suffix = "" }: { end: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let frame: number;
    const duration = 2000;
    const start = performance.now();
    const animate = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * end));
      if (progress < 1) frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [inView, end]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

const trailerData = [
  { key: "enclosed", color: "from-indigo-500 to-purple-500" },
  { key: "open36", color: "from-purple-500 to-pink-500" },
  { key: "open50", color: "from-orange-500 to-amber-500" },
  { key: "semi", color: "from-emerald-500 to-teal-500" },
];

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-16 sm:py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-16 sm:mb-20">
          <AnimateIn direction="left">
            <span className="inline-block text-sm font-semibold text-primary-600 bg-primary-50 px-4 py-1.5 rounded-full mb-4">
              {t("nav_about")}
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              {t("about_title")}
            </h2>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-6 sm:mb-8">
              {t("about_text")}
            </p>

            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center gap-3 text-gray-700 text-sm sm:text-base">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-primary-50 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-primary-600" />
                </div>
                <span>522 W Riverside Ave #6439, Spokane, WA 99201</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700 text-sm sm:text-base">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-primary-50 flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-primary-600" />
                </div>
                <a href="tel:+15097684532" className="hover:text-primary-600 transition-colors">
                  (509) 768-4532
                </a>
              </div>
              <div className="flex items-center gap-3 text-gray-700 text-sm sm:text-base">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-primary-50 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-primary-600" />
                </div>
                <a href="mailto:info@lcfservises.us" className="hover:text-primary-600 transition-colors break-all">
                  info@lcfservises.us
                </a>
              </div>
            </div>
          </AnimateIn>

          <AnimateIn direction="right">
            <div className="relative mt-8 lg:mt-0">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary-200 to-purple-200 rounded-3xl blur-2xl opacity-30" />
              <img
                src="/about-photo.png"
                alt="Auto transport"
                className="relative rounded-2xl shadow-xl w-full object-cover aspect-[4/3]"
              />
              <div className="absolute -bottom-4 -right-2 sm:-bottom-6 sm:-right-6 bg-white rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-6">
                <div className="flex items-center gap-2.5 sm:gap-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-r from-primary-500 to-purple-500 flex items-center justify-center shrink-0">
                    <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-xl sm:text-2xl font-bold text-gray-900">
                      <Counter end={5} suffix="+" />
                    </div>
                    <div className="text-xs sm:text-sm text-gray-500">{t("stats_experience")}</div>
                  </div>
                </div>
              </div>
            </div>
          </AnimateIn>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-6 mb-16 sm:mb-20">
          {[
            { value: 50, suffix: "+", label: "stats_drivers" },
            { value: 5000, suffix: "+", label: "stats_trips" },
            { value: 5, suffix: "+", label: "stats_experience" },
            { value: 24, suffix: "/7", label: "call_us" },
          ].map((stat, i) => (
            <AnimateIn key={i} delay={i * 0.1}>
              <div className="text-center p-4 sm:p-6 rounded-xl sm:rounded-2xl gradient-card border border-gray-100">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold gradient-text mb-1 sm:mb-2">
                  <Counter end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-xs sm:text-sm text-gray-500">{t(stat.label)}</div>
              </div>
            </AnimateIn>
          ))}
        </div>

        <AnimateIn>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 text-center mb-8 sm:mb-12">
            {t("trailers_title")}
          </h3>
        </AnimateIn>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {trailerData.map((trailer, i) => (
            <AnimateIn key={trailer.key} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -8 }}
                className="relative overflow-hidden rounded-xl sm:rounded-2xl border border-gray-100 p-4 sm:p-6 bg-white shadow-sm hover:shadow-xl transition-shadow group"
              >
                <div
                  className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${trailer.color}`}
                />
                <h4 className="text-base sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                  {t(`trailer_${trailer.key}`)}
                </h4>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                  {t(`trailer_${trailer.key}_desc`)}
                </p>
              </motion.div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
