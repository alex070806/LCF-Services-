"use client";

import { useLanguage } from "@/context/LanguageContext";
import AnimateIn from "./AnimateIn";
import { useRef, useState, useEffect, useCallback } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

const reviewIds = [1, 2, 3, 4, 5, 6];

function ReviewCard({ n, t }: { n: number; t: (k: string) => string }) {
  return (
    <div className="bg-gray-50 rounded-2xl sm:rounded-3xl p-5 sm:p-8 h-full border border-gray-100 relative flex flex-col">
      <Quote className="absolute top-4 right-4 sm:top-6 sm:right-6 w-6 h-6 sm:w-8 sm:h-8 text-primary-100" />
      <div className="flex gap-1 mb-3 sm:mb-4">
        {[...Array(5)].map((_, j) => (
          <Star key={j} className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-amber-400 text-amber-400" />
        ))}
      </div>
      <p className="text-gray-600 leading-relaxed mb-5 sm:mb-6 text-xs sm:text-sm flex-1">
        &ldquo;{t(`review_${n}_text`)}&rdquo;
      </p>
      <div className="flex items-center gap-3 mt-auto">
        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-primary-500 to-purple-500 flex items-center justify-center text-white font-bold text-xs sm:text-sm shrink-0">
          {t(`review_${n}_name`).charAt(0)}
        </div>
        <div className="min-w-0">
          <div className="font-semibold text-gray-900 text-xs sm:text-sm truncate">
            {t(`review_${n}_name`)}
          </div>
          <div className="text-xs text-gray-500">{t(`review_${n}_role`)}</div>
        </div>
      </div>
    </div>
  );
}

export default function Reviews() {
  const { t } = useLanguage();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 4);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 4);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener("scroll", checkScroll, { passive: true });
    window.addEventListener("resize", checkScroll);
    return () => {
      el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, [checkScroll]);

  const scroll = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = el.querySelector("div > div")?.clientWidth ?? 340;
    el.scrollBy({ left: dir === "left" ? -cardWidth - 24 : cardWidth + 24, behavior: "smooth" });
  };

  return (
    <section id="reviews" className="py-16 sm:py-20 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateIn>
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
            <span className="inline-block text-sm font-semibold text-primary-600 bg-primary-50 px-4 py-1.5 rounded-full mb-4">
              {t("nav_reviews")}
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
              {t("reviews_title")}
            </h2>
          </div>
        </AnimateIn>

        <div className="relative">
          <div
            ref={scrollRef}
            className="flex gap-4 sm:gap-6 overflow-x-auto pb-4 snap-x snap-mandatory -mx-4 px-4 sm:-mx-6 sm:px-6"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none", WebkitOverflowScrolling: "touch" }}
          >
            {reviewIds.map((n) => (
              <div
                key={n}
                className="snap-start shrink-0 w-[280px] sm:w-[340px] md:w-[380px] lg:w-[400px]"
              >
                <ReviewCard n={n} t={t} />
              </div>
            ))}
          </div>

          {canScrollLeft && (
            <div className="absolute left-0 top-0 bottom-4 w-12 sm:w-16 bg-gradient-to-r from-white to-transparent pointer-events-none" />
          )}
          {canScrollRight && (
            <div className="absolute right-0 top-0 bottom-4 w-12 sm:w-16 bg-gradient-to-l from-white to-transparent pointer-events-none" />
          )}

          <div className="flex items-center justify-center gap-3 mt-6 sm:mt-8">
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:border-primary-300 hover:text-primary-600 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:border-primary-300 hover:text-primary-600 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
