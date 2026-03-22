"use client";

import { useLanguage } from "@/context/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function PrivacyModal({ open, onClose }: Props) {
  const { t } = useLanguage();

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-3xl max-w-2xl w-full max-h-[85vh] overflow-y-auto p-8 sm:p-10 shadow-2xl"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">{t("privacy_title")}</h2>
              <button
                onClick={onClose}
                className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-xl transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-6 text-gray-600 leading-relaxed text-sm">
              <p>{t("privacy_intro")}</p>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">{t("privacy_collect_title")}</h3>
                <p>{t("privacy_collect_text")}</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">{t("privacy_use_title")}</h3>
                <p>{t("privacy_use_text")}</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">{t("privacy_security_title")}</h3>
                <p>{t("privacy_security_text")}</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">{t("privacy_contact_title")}</h3>
                <p>{t("privacy_contact_text")}</p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="mt-8 w-full bg-gradient-to-r from-primary-600 to-purple-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-shadow"
            >
              {t("privacy_back")}
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
