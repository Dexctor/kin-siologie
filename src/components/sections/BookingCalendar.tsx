"use client";

import { motion } from "framer-motion";
import { Calendar } from "lucide-react";

export default function BookingCalendar() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="bg-white rounded-2xl p-8 border border-terracotta-light/30"
    >
      <div className="text-center mb-6">
        <div className="w-14 h-14 bg-terracotta/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
          <Calendar size={28} className="text-terracotta" />
        </div>
        <h3 className="text-2xl font-semibold text-dark-text mb-2">
          Réservez votre créneau
        </h3>
        <p className="text-medium-text">
          Choisissez la date et l&apos;heure qui vous conviennent.
        </p>
      </div>

      {/* Google Calendar Appointment Scheduling embed placeholder */}
      {/* Replace the div below with the actual Google Calendar embed code */}
      <div className="bg-cream rounded-xl p-12 text-center border border-dashed border-terracotta-light">
        <p className="text-medium-text text-sm mb-4">
          Intégration Google Calendar Appointment Scheduling
        </p>
        <p className="text-xs text-medium-text/60">
          Collez ici le code embed (iframe ou bouton) fourni par Google Calendar.
        </p>
        {/* Example embed:
        <iframe
          src="https://calendar.google.com/calendar/appointments/YOUR_BOOKING_PAGE"
          style={{ border: 0, width: '100%', height: '600px' }}
          frameBorder="0"
        />
        */}
      </div>
    </motion.div>
  );
}
