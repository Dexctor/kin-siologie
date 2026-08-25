"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
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
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const mobileNavRef = useRef<HTMLElement>(null);
  const firstMobileLinkRef = useRef<HTMLAnchorElement>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 32);
    const sections = navLinks
      .map((link) => document.querySelector<HTMLElement>(link.href))
      .filter((section): section is HTMLElement => Boolean(section));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-35% 0px -55% 0px" }
    );

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    sections.forEach((section) => observer.observe(section));

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const desktopQuery = window.matchMedia("(min-width: 1024px)");
    const handleDesktop = (event: MediaQueryListEvent) => {
      if (event.matches) setMobileOpen(false);
    };

    desktopQuery.addEventListener("change", handleDesktop);
    return () => desktopQuery.removeEventListener("change", handleDesktop);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;

    const previousOverflow = document.body.style.overflow;
    const focusFrame = window.requestAnimationFrame(() => {
      firstMobileLinkRef.current?.focus();
    });

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setMobileOpen(false);
        window.requestAnimationFrame(() => menuButtonRef.current?.focus());
        return;
      }

      if (event.key !== "Tab") return;

      const panelLinks = Array.from(
        mobileNavRef.current?.querySelectorAll<HTMLElement>("a[href]") ?? []
      );
      const focusableElements = [menuButtonRef.current, ...panelLinks].filter(
        (element): element is HTMLElement => Boolean(element)
      );
      const firstElement = focusableElements[0];
      const lastElement = focusableElements.at(-1);

      if (!firstElement || !lastElement) return;

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      window.cancelAnimationFrame(focusFrame);
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [mobileOpen]);

  const scrollToSection = (href: string, moveFocus = false) => {
    const section = document.querySelector<HTMLElement>(href);
    if (navLinks.some((link) => link.href === href)) {
      setActiveSection(href);
    }
    setMobileOpen(false);

    if (!section) return;

    section.scrollIntoView({
      behavior: shouldReduceMotion ? "auto" : "smooth",
      block: "start",
    });

    if (moveFocus) {
      window.requestAnimationFrame(() => {
        section.setAttribute("tabindex", "-1");
        section.focus({ preventScroll: true });
      });
    }
  };

  return (
    <>
      <a
        href="#contenu"
        className="skip-link"
        onClick={(event) => {
          event.preventDefault();
          scrollToSection("#contenu", true);
        }}
      >
        Aller au contenu
      </a>

      <motion.nav
        aria-label="Navigation principale"
        className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
          isScrolled
            ? "border-terracotta-light/40 bg-warm-white/95 shadow-sm backdrop-blur-xl"
            : "border-transparent bg-warm-white/80 backdrop-blur-md"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between gap-4">
            <a
              href="#accueil"
              aria-label="Estelle Declercq — retour à l’accueil"
              aria-hidden={mobileOpen || undefined}
              tabIndex={mobileOpen ? -1 : undefined}
              onClick={(event) => {
                event.preventDefault();
                scrollToSection("#accueil");
              }}
              className="inline-flex min-h-11 shrink-0 items-center rounded-lg py-2 text-lg font-semibold text-dark-text transition-colors hover:text-terracotta focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta focus-visible:ring-offset-2"
            >
              Estelle Declercq
            </a>

            <div className="hidden items-center gap-1 lg:flex">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href;

                return (
                  <a
                    key={link.href}
                    href={link.href}
                    aria-current={isActive ? "location" : undefined}
                    onClick={(event) => {
                      event.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className={`relative inline-flex min-h-11 items-center rounded-lg px-3 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta focus-visible:ring-offset-2 ${
                      isActive
                        ? "text-dark-text"
                        : "text-medium-text hover:bg-cream hover:text-dark-text"
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span
                        aria-hidden="true"
                        className="absolute inset-x-3 bottom-1 h-0.5 rounded-full bg-terracotta"
                      />
                    )}
                  </a>
                );
              })}
            </div>

            <a
              href="#tarifs"
              onClick={(event) => {
                event.preventDefault();
                scrollToSection("#tarifs");
              }}
              className="hidden min-h-11 shrink-0 items-center rounded-full bg-terracotta px-5 text-sm font-semibold text-white transition-colors hover:bg-dark-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta focus-visible:ring-offset-2 lg:inline-flex"
            >
              Prendre rendez-vous
            </a>

            <button
              ref={menuButtonRef}
              type="button"
              onClick={() => setMobileOpen((isOpen) => !isOpen)}
              className="inline-flex size-11 shrink-0 items-center justify-center rounded-full text-dark-text transition-colors hover:bg-cream focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta focus-visible:ring-offset-2 lg:hidden"
              aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={mobileOpen}
              aria-controls="navigation-mobile"
            >
              {mobileOpen ? (
                <X aria-hidden="true" size={24} />
              ) : (
                <Menu aria-hidden="true" size={24} />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence initial={false}>
        {mobileOpen && (
          <motion.nav
            ref={mobileNavRef}
            id="navigation-mobile"
            aria-label="Navigation mobile"
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: 24 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.2, ease: "easeOut" }}
            className="fixed inset-x-0 bottom-0 top-20 z-40 overflow-y-auto overscroll-contain border-t border-terracotta-light/40 bg-warm-white px-4 pb-[calc(2rem+env(safe-area-inset-bottom))] pt-8 shadow-xl lg:hidden"
          >
            <div className="mx-auto flex min-h-full max-w-sm flex-col justify-center gap-2 py-6">
              {navLinks.map((link, index) => {
                const isActive = activeSection === link.href;

                return (
                  <a
                    ref={index === 0 ? firstMobileLinkRef : undefined}
                    key={link.href}
                    href={link.href}
                    aria-current={isActive ? "location" : undefined}
                    onClick={(event) => {
                      event.preventDefault();
                      scrollToSection(link.href, true);
                    }}
                    className={`flex min-h-12 items-center justify-between rounded-xl px-4 py-3 text-xl font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta focus-visible:ring-offset-2 ${
                      isActive
                        ? "bg-cream text-terracotta"
                        : "text-dark-text hover:bg-cream"
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="text-sm font-medium text-terracotta">
                        Ici
                      </span>
                    )}
                  </a>
                );
              })}

              <a
                href="#tarifs"
                onClick={(event) => {
                  event.preventDefault();
                  scrollToSection("#tarifs", true);
                }}
                className="mt-5 inline-flex min-h-12 items-center justify-center rounded-full bg-terracotta px-6 text-base font-semibold text-white transition-colors hover:bg-dark-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta focus-visible:ring-offset-2"
              >
                Prendre rendez-vous
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
