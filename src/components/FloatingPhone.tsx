"use client";

import { Phone } from "lucide-react";
import { motion } from "framer-motion";

export default function FloatingPhone() {
  return (
    <motion.a
      href="tel:+15097684532"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: "spring" }}
      className="fixed bottom-6 right-6 z-50 sm:hidden w-14 h-14 bg-gradient-to-r from-primary-600 to-purple-600 rounded-full flex items-center justify-center shadow-lg shadow-primary-500/30"
    >
      <Phone className="w-6 h-6 text-white" />
    </motion.a>
  );
}
