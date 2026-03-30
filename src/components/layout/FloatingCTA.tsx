"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar } from "lucide-react";

export default function FloatingCTA() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > window.innerHeight * 0.8);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.a
          href="#tarifs"
          onClick={(e) => {
            e.preventDefault();
            document
              .querySelector("#tarifs")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          transition={{ duration: 0.3 }}
          whileHover={{ scale: 1.05 }}
          className="md:hidden fixed bottom-4 right-4 z-50 flex items-center gap-2 px-5 py-3 bg-terracotta text-white font-medium rounded-full shadow-xl shadow-terracotta/30"
        >
          <Calendar size={18} />
          Rendez-vous
        </motion.a>
      )}
    </AnimatePresence>
  );
}
