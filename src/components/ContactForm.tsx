"use client";

import { useLanguage } from "@/context/LanguageContext";
import AnimateIn from "./AnimateIn";
import { useState, FormEvent } from "react";
import { Send, Phone, CheckCircle, AlertCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactForm() {
  const { t } = useLanguage();
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      await fetch("https://formsubmit.co/ajax/info@lcfservises.us", {
        method: "POST",
        body: data,
      });
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-1/2 gradient-hero opacity-5" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <AnimateIn direction="left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              {t("contact_title")}
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 mb-6 sm:mb-8">{t("contact_subtitle")}</p>

            <a
              href="tel:+15097684532"
              className="inline-flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-primary-600 to-purple-600 text-white px-5 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-semibold text-sm sm:text-lg hover:shadow-xl hover:shadow-primary-500/25 transition-all mb-8 sm:mb-12"
            >
              <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
              (509) 768-4532
            </a>

            <div className="rounded-xl sm:rounded-2xl overflow-hidden shadow-lg border border-gray-100">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2685.7!2d-117.4260!3d47.6588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x549e185c30c1c8e3%3A0x6e1d2b01!2s522+W+Riverside+Ave%2C+Spokane%2C+WA+99201!5e0!3m2!1sen!2sus!4v1"
                width="100%"
                height="220"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={t("footer_map_title")}
                className="w-full"
              />
            </div>
          </AnimateIn>

          <AnimateIn direction="right">
            <div className="bg-gray-50 rounded-2xl sm:rounded-3xl p-5 sm:p-8 lg:p-10 border border-gray-100">
              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8 sm:py-12"
                >
                  <CheckCircle className="w-12 h-12 sm:w-16 sm:h-16 text-emerald-500 mx-auto mb-3 sm:mb-4" />
                  <p className="text-base sm:text-lg font-semibold text-gray-900">{t("contact_success")}</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_template" value="table" />

                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                      {t("contact_name")}
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all bg-white text-sm sm:text-base"
                    />
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                      {t("contact_phone")} *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all bg-white text-sm sm:text-base"
                    />
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                      {t("contact_truck")} *
                    </label>
                    <select
                      name="truck"
                      required
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all bg-white text-sm sm:text-base"
                    >
                      <option value="">—</option>
                      <option value="yes">{t("contact_truck_yes")}</option>
                      <option value="no">{t("contact_truck_no")}</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                      {t("contact_experience")}
                    </label>
                    <input
                      type="text"
                      name="experience"
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all bg-white text-sm sm:text-base"
                    />
                  </div>

                  {status === "error" && (
                    <div className="flex items-center gap-2 text-red-600 text-xs sm:text-sm">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      {t("contact_error")}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-primary-600 to-purple-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-semibold text-sm sm:text-lg hover:shadow-lg hover:shadow-primary-500/25 transition-all disabled:opacity-60"
                  >
                    {status === "sending" ? (
                      t("contact_sending")
                    ) : (
                      <>
                        {t("contact_submit")}
                        <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
