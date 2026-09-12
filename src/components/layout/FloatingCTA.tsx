"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Calendar } from "lucide-react";
import CalBookingButton from "@/components/booking/CalBookingButton";

export default function FloatingCTA() {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isNearDestination, setIsNearDestination] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > window.innerHeight * 0.8);
      const destinations = [
        document.querySelector("#cabinet"),
        document.querySelector("#tarifs"),
        document.querySelector("#site-footer"),
      ].filter((element): element is Element => Boolean(element));

      setIsNearDestination(
        destinations.some((destination) => {
          const bounds = destination.getBoundingClientRect();
          return bounds.top < window.innerHeight && bounds.bottom > 0;
        })
      );
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const show = hasScrolled && !isNearDestination;

  return (
    <AnimatePresence initial={false}>
      {show && (
        <motion.div
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.2 }}
          style={{
            bottom: "calc(1rem + env(safe-area-inset-bottom))",
            right: "max(1rem, env(safe-area-inset-right))",
          }}
          className="fixed z-30 md:hidden"
        >
          <CalBookingButton
            booking="general"
            aria-label="Prendre rendez-vous"
            className="inline-flex min-h-11 items-center gap-2 rounded-full bg-terracotta px-5 py-3 font-semibold text-white shadow-xl shadow-terracotta/30 transition-colors hover:bg-dark-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta focus-visible:ring-offset-2"
          >
            <Calendar aria-hidden="true" size={18} />
            Rendez-vous
          </CalBookingButton>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
