"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Calendar } from "lucide-react";

export default function FloatingCTA() {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isNearDestination, setIsNearDestination] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > window.innerHeight * 0.8);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const destinations = [
      document.querySelector("#tarifs"),
      document.querySelector("footer"),
    ].filter((element): element is Element => Boolean(element));
    const visibleDestinations = new Set<Element>();
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          visibleDestinations.add(entry.target);
        } else {
          visibleDestinations.delete(entry.target);
        }
      });
      setIsNearDestination(visibleDestinations.size > 0);
    });

    destinations.forEach((destination) => observer.observe(destination));
    return () => observer.disconnect();
  }, []);

  const show = hasScrolled && !isNearDestination;

  return (
    <AnimatePresence initial={false}>
      {show && (
        <motion.a
          href="#tarifs"
          aria-label="Prendre rendez-vous — voir les tarifs"
          onClick={(event) => {
            event.preventDefault();
            document.querySelector("#tarifs")?.scrollIntoView({
              behavior: shouldReduceMotion ? "auto" : "smooth",
              block: "start",
            });
          }}
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.2 }}
          style={{
            bottom: "calc(1rem + env(safe-area-inset-bottom))",
            right: "max(1rem, env(safe-area-inset-right))",
          }}
          className="fixed z-30 inline-flex min-h-11 items-center gap-2 rounded-full bg-terracotta px-5 py-3 font-semibold text-white shadow-xl shadow-terracotta/30 transition-colors hover:bg-dark-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta focus-visible:ring-offset-2 md:hidden"
        >
          <Calendar aria-hidden="true" size={18} />
          Rendez-vous
        </motion.a>
      )}
    </AnimatePresence>
  );
}
