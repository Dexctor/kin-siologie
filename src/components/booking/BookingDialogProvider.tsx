"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useId,
  useRef,
  useState,
  type ReactNode,
} from "react";
import Cal, { getCalApi } from "@calcom/embed-react";
import { X } from "lucide-react";
import { calBookingLinks, type CalBookingKind } from "@/lib/cal";

type BookingDialogContextValue = {
  openBooking: (booking: CalBookingKind, trigger: HTMLButtonElement) => void;
};

const BookingDialogContext = createContext<BookingDialogContextValue | null>(
  null
);

const bookingTitles: Record<CalBookingKind, string> = {
  general: "Choisissez votre accompagnement",
  kinesiologie: "Réserver une séance de kinésiologie",
  maderotherapie: "Réserver une séance de madérothérapie",
};

export function useBookingDialog() {
  const context = useContext(BookingDialogContext);

  if (!context) {
    throw new Error(
      "useBookingDialog doit être utilisé dans BookingDialogProvider"
    );
  }

  return context;
}

export default function BookingDialogProvider({
  children,
}: {
  children: ReactNode;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const [activeBooking, setActiveBooking] = useState<CalBookingKind | null>(
    null
  );
  const titleId = useId();

  const openBooking = useCallback(
    (booking: CalBookingKind, trigger: HTMLButtonElement) => {
      triggerRef.current = trigger;
      setActiveBooking(booking);
    },
    []
  );

  const closeBooking = useCallback(() => {
    dialogRef.current?.close();
  }, []);

  useEffect(() => {
    if (!activeBooking) return;

    const dialog = dialogRef.current;
    if (dialog && !dialog.open) dialog.showModal();

    const { namespace } = calBookingLinks[activeBooking];

    const configureCal = async () => {
      const cal = await getCalApi({ namespace });

      cal("ui", {
        theme: "light",
        layout: "month_view",
        styles: {
          body: { background: "#fffbf7" },
          eventTypeListItem: {
            background: "#ffffff",
            color: "#2d211b",
          },
          branding: { brandColor: "#9e4526" },
        },
      });
    };

    void configureCal();
  }, [activeBooking]);

  const handleDialogClose = () => {
    setActiveBooking(null);
    window.requestAnimationFrame(() => triggerRef.current?.focus());
  };

  const activeLink = activeBooking ? calBookingLinks[activeBooking] : null;

  return (
    <BookingDialogContext.Provider value={{ openBooking }}>
      {children}
      <dialog
        ref={dialogRef}
        aria-labelledby={titleId}
        onClose={handleDialogClose}
        onClick={(event) => {
          if (event.target === event.currentTarget) closeBooking();
        }}
        className="m-auto max-h-[94dvh] w-[min(96vw,72rem)] overflow-hidden rounded-[1.5rem] border border-terracotta-light/70 bg-warm-white p-0 text-dark-text shadow-2xl backdrop:bg-dark-text/70 backdrop:backdrop-blur-sm sm:rounded-[2rem]"
      >
        <div className="flex max-h-[94dvh] flex-col">
          <header className="flex shrink-0 items-center justify-between gap-5 border-b border-terracotta-light/70 bg-warm-white px-5 py-4 sm:px-7">
            <h2
              id={titleId}
              className="font-editorial text-2xl font-semibold leading-tight text-dark-text sm:text-3xl"
            >
              {activeBooking ? bookingTitles[activeBooking] : "Prendre rendez-vous"}
            </h2>
            <button
              type="button"
              autoFocus
              onClick={closeBooking}
              aria-label="Fermer la réservation"
              className="inline-flex size-11 shrink-0 items-center justify-center rounded-full text-dark-text transition-colors hover:bg-cream focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta focus-visible:ring-offset-2"
            >
              <X aria-hidden="true" size={22} />
            </button>
          </header>

          <div className="min-h-0 flex-1 overflow-y-auto bg-warm-white">
            {activeLink && (
              <Cal
                key={activeLink.calLink}
                namespace={activeLink.namespace}
                calLink={activeLink.calLink}
                config={{ layout: "month_view", theme: "light" }}
                className="min-h-[38rem] w-full"
              />
            )}
          </div>
        </div>
      </dialog>
    </BookingDialogContext.Provider>
  );
}
