"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Accueil", href: "#accueil" },
  { label: "À propos", href: "#a-propos" },
  { label: "Kinésiologie", href: "#kinesiologie" },
  { label: "Maderothérapie", href: "#maderotherapie" },
  { label: "Tarifs", href: "#tarifs" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#accueil");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleSectionObserver = () => {
      const sections = navLinks.map((link) =>
        document.querySelector(link.href)
      );
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(`#${entry.target.id}`);
            }
          });
        },
        { rootMargin: "-40% 0px -50% 0px" }
      );
      sections.forEach((section) => {
        if (section) observer.observe(section);
      });
      return observer;
    };

    window.addEventListener("scroll", handleScroll);
    const observer = handleSectionObserver();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-warm-white/80 backdrop-blur-xl shadow-sm border-b border-terracotta-light/30"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a
              href="#accueil"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("#accueil");
              }}
              className="text-lg font-semibold text-dark-text"
            >
              Estelle Declercq
            </a>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="relative px-4 py-2 text-sm text-medium-text hover:text-dark-text transition-colors duration-200"
                >
                  {link.label}
                  {activeSection === link.href && (
                    <motion.span
                      layoutId="activeTab"
                      className="absolute bottom-0 left-2 right-2 h-0.5 bg-terracotta rounded-full"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </a>
              ))}
            </div>

            {/* CTA Desktop */}
            <a
              href="#tarifs"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("#tarifs");
              }}
              className="hidden md:inline-flex items-center px-5 py-2.5 bg-terracotta text-white text-sm font-medium rounded-full hover:bg-terracotta/90 transition-all duration-200 hover:scale-[1.03]"
            >
              Prendre rendez-vous
            </a>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 text-dark-text"
              aria-label="Menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 bg-warm-white/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full gap-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className={`text-2xl font-medium transition-colors ${
                    activeSection === link.href
                      ? "text-terracotta"
                      : "text-dark-text"
                  }`}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#tarifs"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick("#tarifs");
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.1 }}
                className="mt-4 px-8 py-3 bg-terracotta text-white text-lg font-medium rounded-full"
              >
                Prendre rendez-vous
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
