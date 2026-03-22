"use client";

import { useLanguage } from "@/context/LanguageContext";
import { MapPin, Phone, Mail } from "lucide-react";
import { useState } from "react";
import PrivacyModal from "./PrivacyModal";

const navItems = [
  { key: "nav_home", href: "#home" },
  { key: "nav_services", href: "#services" },
  { key: "nav_about", href: "#about" },
  { key: "nav_reviews", href: "#reviews" },
  { key: "nav_contact", href: "#contact" },
];

export default function Footer() {
  const { t } = useLanguage();
  const [showPrivacy, setShowPrivacy] = useState(false);

  return (
    <>
      <footer className="bg-gray-900 text-white pt-12 sm:pt-16 pb-6 sm:pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 mb-10 sm:mb-12">
            <div className="col-span-2 sm:col-span-2 lg:col-span-1">
              <div className="flex items-center gap-3 mb-3 sm:mb-4">
                <img src="/logo.jpg" alt="LCF Services" className="h-8 sm:h-10 w-auto rounded" />
                <span className="text-base sm:text-lg font-bold">LCF Services</span>
              </div>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                {t("about_text")}
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-3 sm:mb-4 text-white/90 text-sm sm:text-base">{t("nav_home")}</h4>
              <ul className="space-y-1.5 sm:space-y-2">
                {navItems.map((item) => (
                  <li key={item.key}>
                    <a
                      href={item.href}
                      className="text-gray-400 hover:text-white text-xs sm:text-sm transition-colors"
                    >
                      {t(item.key)}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-3 sm:mb-4 text-white/90 text-sm sm:text-base">{t("nav_contact")}</h4>
              <ul className="space-y-2 sm:space-y-3">
                <li className="flex items-start gap-2 text-gray-400 text-xs sm:text-sm">
                  <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 mt-0.5 shrink-0 text-primary-400" />
                  <span className="break-words">{t("footer_address")}</span>
                </li>
                <li>
                  <a
                    href="tel:+15097684532"
                    className="flex items-center gap-2 text-gray-400 hover:text-white text-xs sm:text-sm transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary-400 shrink-0" />
                    (509) 768-4532
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:info@lcfservises.us"
                    className="flex items-center gap-2 text-gray-400 hover:text-white text-xs sm:text-sm transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary-400 shrink-0" />
                    <span className="break-all">info@lcfservises.us</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
            <p className="text-gray-500 text-xs sm:text-sm text-center sm:text-left">
              &copy; {new Date().getFullYear()} LCF Services. {t("footer_rights")}.
            </p>
            <button
              onClick={() => setShowPrivacy(true)}
              className="text-gray-500 hover:text-white text-xs sm:text-sm transition-colors"
            >
              {t("footer_privacy")}
            </button>
          </div>
        </div>
      </footer>

      <PrivacyModal open={showPrivacy} onClose={() => setShowPrivacy(false)} />
    </>
  );
}
