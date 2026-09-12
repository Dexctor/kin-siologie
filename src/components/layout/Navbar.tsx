"use client";

import {
  useEffect,
  useRef,
  useState,
  type FocusEvent,
  type MouseEvent,
} from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import CalBookingButton from "@/components/booking/CalBookingButton";

const topLinks = [
  { label: "Accueil", href: "/#accueil", section: "#accueil" },
  { label: "À propos", href: "/#a-propos", section: "#a-propos" },
];

const tariffLink = {
  label: "Tarifs",
  href: "/#tarifs",
  section: "#tarifs",
};

const serviceLinks = [
  {
    label: "Kinésiologie à Dunkerque",
    description: "Écouter autrement les signaux du corps",
    href: "/kinesiologie-dunkerque",
  },
  {
    label: "Maderothérapie à Dunkerque",
    description: "Un modelage ciblé des jambes",
    href: "/maderotherapie-dunkerque",
  },
  {
    label: "Stress, douleurs & corps",
    description: "Explorer les liens possibles, sans raccourci",
    href: "/stress-douleurs-corps",
  },
];

const observedHomeLinks = [
  ...topLinks,
  {
    label: "Kinésiologie",
    href: "/#kinesiologie",
    section: "#kinesiologie",
  },
  {
    label: "Maderothérapie",
    href: "/#maderotherapie",
    section: "#maderotherapie",
  },
  tariffLink,
];

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const mobileNavRef = useRef<HTMLElement>(null);
  const firstMobileLinkRef = useRef<HTMLAnchorElement>(null);
  const servicesMenuRef = useRef<HTMLDivElement>(null);
  const servicesButtonRef = useRef<HTMLButtonElement>(null);
  const firstServiceLinkRef = useRef<HTMLAnchorElement>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 32);
    const sections =
      pathname === "/"
        ? observedHomeLinks
            .map((link) =>
              document.querySelector<HTMLElement>(link.section)
            )
            .filter((section): section is HTMLElement => Boolean(section))
        : [];
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
  }, [pathname]);

  useEffect(() => {
    const desktopQuery = window.matchMedia("(min-width: 1024px)");
    const handleDesktop = (event: MediaQueryListEvent) => {
      if (event.matches) {
        setMobileOpen(false);
      } else {
        setServicesOpen(false);
      }
    };

    desktopQuery.addEventListener("change", handleDesktop);
    return () => desktopQuery.removeEventListener("change", handleDesktop);
  }, []);

  useEffect(() => {
    if (!servicesOpen) return;

    const handlePointerDown = (event: PointerEvent) => {
      if (!servicesMenuRef.current?.contains(event.target as Node)) {
        setServicesOpen(false);
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setServicesOpen(false);
        servicesButtonRef.current?.focus();
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [servicesOpen]);

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

  const scrollToSection = (sectionId: string, moveFocus = false) => {
    const section = document.querySelector<HTMLElement>(sectionId);
    if (observedHomeLinks.some((link) => link.section === sectionId)) {
      setActiveSection(sectionId);
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

  const handleHomeNavigation = (
    event: MouseEvent<HTMLAnchorElement>,
    sectionId: string,
    moveFocus = false
  ) => {
    setMobileOpen(false);

    if (pathname !== "/") return;
    if (!document.querySelector<HTMLElement>(sectionId)) return;

    event.preventDefault();
    scrollToSection(sectionId, moveFocus);
  };

  const handleServicesBlur = (event: FocusEvent<HTMLDivElement>) => {
    if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
      setServicesOpen(false);
    }
  };

  const servicesActive =
    activeSection === "#kinesiologie" ||
    activeSection === "#maderotherapie" ||
    serviceLinks.some((link) => link.href === pathname);

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
            <Link
              href="/#accueil"
              aria-label="Estelle Declercq — retour à l’accueil"
              aria-hidden={mobileOpen || undefined}
              tabIndex={mobileOpen ? -1 : undefined}
              onClick={(event) => handleHomeNavigation(event, "#accueil")}
              className="inline-flex min-h-11 shrink-0 items-center rounded-lg py-2 text-lg font-semibold text-dark-text transition-colors hover:text-terracotta focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta focus-visible:ring-offset-2"
            >
              Estelle Declercq
            </Link>

            <div className="hidden items-center gap-1 lg:flex">
              {topLinks.map((link) => {
                const isActive = activeSection === link.section;

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    aria-current={isActive ? "location" : undefined}
                    onClick={(event) =>
                      handleHomeNavigation(event, link.section)
                    }
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
                  </Link>
                );
              })}

              <div
                ref={servicesMenuRef}
                className="relative"
                onBlur={handleServicesBlur}
              >
                <button
                  ref={servicesButtonRef}
                  type="button"
                  aria-expanded={servicesOpen}
                  aria-controls="menu-accompagnements"
                  aria-haspopup="true"
                  onClick={() => setServicesOpen((isOpen) => !isOpen)}
                  onKeyDown={(event) => {
                    if (event.key === "ArrowDown") {
                      event.preventDefault();
                      setServicesOpen(true);
                      window.requestAnimationFrame(() =>
                        firstServiceLinkRef.current?.focus()
                      );
                    }
                  }}
                  className={`relative inline-flex min-h-11 items-center gap-1.5 rounded-lg px-3 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta focus-visible:ring-offset-2 ${
                    servicesActive || servicesOpen
                      ? "text-dark-text"
                      : "text-medium-text hover:bg-cream hover:text-dark-text"
                  }`}
                >
                  Accompagnements
                  <ChevronDown
                    aria-hidden="true"
                    size={16}
                    className={`transition-transform ${
                      servicesOpen ? "rotate-180" : ""
                    }`}
                  />
                  {servicesActive && (
                    <span
                      aria-hidden="true"
                      className="absolute inset-x-3 bottom-1 h-0.5 rounded-full bg-terracotta"
                    />
                  )}
                </button>

                <motion.div
                  id="menu-accompagnements"
                  aria-label="Pages d’accompagnement"
                  aria-hidden={!servicesOpen}
                  inert={!servicesOpen}
                  initial={false}
                  animate={
                    servicesOpen
                      ? { opacity: 1, y: 0, scale: 1 }
                      : {
                          opacity: 0,
                          y: shouldReduceMotion ? 0 : 6,
                          scale: shouldReduceMotion ? 1 : 0.98,
                        }
                  }
                  transition={{
                    duration: shouldReduceMotion ? 0 : 0.16,
                    ease: "easeOut",
                  }}
                  className={`absolute left-1/2 top-full mt-2 w-[23rem] -translate-x-1/2 rounded-2xl border border-terracotta-light/70 bg-warm-white p-2 shadow-2xl shadow-dark-text/15 ${
                    servicesOpen
                      ? "visible pointer-events-auto"
                      : "invisible pointer-events-none"
                  }`}
                >
                  {serviceLinks.map((link, index) => {
                    const isCurrent = pathname === link.href;
                    return (
                      <Link
                        ref={index === 0 ? firstServiceLinkRef : undefined}
                        key={link.href}
                        href={link.href}
                        tabIndex={servicesOpen ? undefined : -1}
                        aria-current={isCurrent ? "page" : undefined}
                        onClick={() => setServicesOpen(false)}
                        className={`group flex min-h-16 items-center justify-between gap-4 rounded-xl px-4 py-3 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta ${
                          isCurrent
                            ? "bg-cream"
                            : "hover:bg-cream focus-visible:bg-cream"
                        }`}
                      >
                        <span>
                          <span className="block text-sm font-semibold text-dark-text">
                            {link.label}
                          </span>
                          <span className="mt-0.5 block text-xs leading-5 text-medium-text">
                            {link.description}
                          </span>
                        </span>
                        <ArrowUpRight
                          aria-hidden="true"
                          size={17}
                          className="shrink-0 text-terracotta transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        />
                      </Link>
                    );
                  })}
                </motion.div>
              </div>

              <Link
                href={tariffLink.href}
                aria-current={
                  activeSection === tariffLink.section ? "location" : undefined
                }
                onClick={(event) =>
                  handleHomeNavigation(event, tariffLink.section)
                }
                className={`relative inline-flex min-h-11 items-center rounded-lg px-3 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta focus-visible:ring-offset-2 ${
                  activeSection === tariffLink.section
                    ? "text-dark-text"
                    : "text-medium-text hover:bg-cream hover:text-dark-text"
                }`}
              >
                {tariffLink.label}
                {activeSection === tariffLink.section && (
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-3 bottom-1 h-0.5 rounded-full bg-terracotta"
                  />
                )}
              </Link>
            </div>

            <CalBookingButton
              booking="general"
              className="hidden min-h-11 shrink-0 items-center rounded-full bg-terracotta px-5 text-sm font-semibold text-white transition-colors hover:bg-dark-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta focus-visible:ring-offset-2 lg:inline-flex"
            >
              Prendre rendez-vous
            </CalBookingButton>

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
            className="fixed inset-x-0 bottom-0 top-20 z-40 overflow-y-auto overscroll-contain border-t border-terracotta-light/40 bg-warm-white px-4 pb-[calc(2rem+env(safe-area-inset-bottom))] pt-5 shadow-xl lg:hidden"
          >
            <div className="mx-auto flex min-h-full max-w-sm flex-col gap-1 py-3">
              {topLinks.map((link, index) => {
                const isActive = activeSection === link.section;
                return (
                  <Link
                    ref={index === 0 ? firstMobileLinkRef : undefined}
                    key={link.href}
                    href={link.href}
                    aria-current={isActive ? "location" : undefined}
                    onClick={(event) =>
                      handleHomeNavigation(event, link.section, true)
                    }
                    className={`flex min-h-12 items-center justify-between rounded-xl px-4 py-3 text-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta focus-visible:ring-offset-2 ${
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
                  </Link>
                );
              })}

              <div className="my-2 rounded-2xl border border-terracotta-light/70 bg-cream/65 p-2">
                <p className="px-3 pb-1 pt-2 text-xs font-semibold uppercase tracking-[0.16em] text-muted-text">
                  Accompagnements
                </p>
                {serviceLinks.map((link) => {
                  const isCurrent = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      aria-current={isCurrent ? "page" : undefined}
                      onClick={() => setMobileOpen(false)}
                      className={`flex min-h-11 items-center justify-between gap-3 rounded-xl px-3 py-2.5 text-base font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta ${
                        isCurrent
                          ? "bg-white text-terracotta"
                          : "text-dark-text hover:bg-white"
                      }`}
                    >
                      {link.label}
                      <ArrowUpRight
                        aria-hidden="true"
                        className="shrink-0 text-terracotta"
                        size={16}
                      />
                    </Link>
                  );
                })}
              </div>

              <Link
                href={tariffLink.href}
                aria-current={
                  activeSection === tariffLink.section ? "location" : undefined
                }
                onClick={(event) =>
                  handleHomeNavigation(event, tariffLink.section, true)
                }
                className={`flex min-h-12 items-center justify-between rounded-xl px-4 py-3 text-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta focus-visible:ring-offset-2 ${
                  activeSection === tariffLink.section
                    ? "bg-cream text-terracotta"
                    : "text-dark-text hover:bg-cream"
                }`}
              >
                {tariffLink.label}
                {activeSection === tariffLink.section && (
                  <span className="text-sm font-medium text-terracotta">
                    Ici
                  </span>
                )}
              </Link>

              <CalBookingButton
                booking="general"
                onClick={() => setMobileOpen(false)}
                className="mt-3 inline-flex min-h-12 items-center justify-center rounded-full bg-terracotta px-6 text-base font-semibold text-white transition-colors hover:bg-dark-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta focus-visible:ring-offset-2"
              >
                Prendre rendez-vous
              </CalBookingButton>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
