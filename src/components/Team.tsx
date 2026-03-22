"use client";

import { useLanguage } from "@/context/LanguageContext";
import AnimateIn from "./AnimateIn";
import { motion } from "framer-motion";
import { Headphones } from "lucide-react";

const members = [
  {
    nameKey: "team_member1",
    descKey: "team_member1_desc",
    initial: "A",
    gradient: "from-blue-500 to-indigo-600",
  },
  {
    nameKey: "team_member2",
    descKey: "team_member2_desc",
    initial: "V",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    nameKey: "team_member3",
    descKey: "team_member3_desc",
    initial: "M",
    gradient: "from-amber-500 to-orange-500",
  },
];

export default function Team() {
  const { t } = useLanguage();

  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateIn>
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
            <span className="inline-block text-sm font-semibold text-primary-600 bg-primary-50 px-4 py-1.5 rounded-full mb-4">
              {t("team_badge")}
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
              {t("team_title")}
            </h2>
          </div>
        </AnimateIn>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {members.map((member, i) => (
            <AnimateIn key={i} delay={i * 0.15}>
              <motion.div
                whileHover={{ y: -8 }}
                className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-8 shadow-sm hover:shadow-xl transition-shadow border border-gray-100 group h-full"
              >
                <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div
                    className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br ${member.gradient} flex items-center justify-center text-xl sm:text-2xl font-bold text-white shadow-lg shrink-0`}
                  >
                    {member.initial}
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 truncate">
                      {t(member.nameKey)}
                    </h3>
                    <div className="flex items-center gap-1.5 text-gray-500 text-xs sm:text-sm">
                      <Headphones className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                      {t("team_role")}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed text-xs sm:text-sm">
                  {t(member.descKey)}
                </p>
                <div
                  className={`mt-4 sm:mt-6 h-1 rounded-full bg-gradient-to-r ${member.gradient} opacity-20 group-hover:opacity-100 transition-opacity`}
                />
              </motion.div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
