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
      <footer className="bg-gray-900 text-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="flex items-center gap-3 mb-4">
                <img src="/logo.jpg" alt="LCF Services" className="h-10 w-auto rounded" />
                <span className="text-lg font-bold">LCF Services</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                {t("about_text")}
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-white/90">{t("nav_home")}</h4>
              <ul className="space-y-2">
                {navItems.map((item) => (
                  <li key={item.key}>
                    <a
                      href={item.href}
                      className="text-gray-400 hover:text-white text-sm transition-colors"
                    >
                      {t(item.key)}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-white/90">{t("nav_contact")}</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-gray-400 text-sm">
                  <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-primary-400" />
                  {t("footer_address")}
                </li>
                <li>
                  <a
                    href="tel:+15097684532"
                    className="flex items-center gap-2 text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    <Phone className="w-4 h-4 text-primary-400" />
                    (509) 768-4532
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:info@lcfservises.us"
                    className="flex items-center gap-2 text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    <Mail className="w-4 h-4 text-primary-400" />
                    info@lcfservises.us
                  </a>
                </li>
              </ul>
            </div>

            <div className="lg:block hidden">
              <h4 className="font-semibold mb-4 text-white/90">{t("footer_map_title")}</h4>
              <div className="rounded-xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2685.7!2d-117.4260!3d47.6588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x549e185c30c1c8e3%3A0x6e1d2b01!2s522+W+Riverside+Ave%2C+Spokane%2C+WA+99201!5e0!3m2!1sen!2sus!4v1"
                  width="100%"
                  height="160"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={t("footer_map_title")}
                />
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} LCF Services. {t("footer_rights")}.
            </p>
            <button
              onClick={() => setShowPrivacy(true)}
              className="text-gray-500 hover:text-white text-sm transition-colors"
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
