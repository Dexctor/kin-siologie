export const calBookingLinks = {
  general: {
    namespace: "estelle-declercq",
    calLink: "estelle-declercq-qemavw",
  },
  kinesiologie: {
    namespace: "seance-de-kinesiologie",
    calLink: "estelle-declercq-qemavw/seance-de-kinesiologie",
  },
  maderotherapie: {
    namespace: "seance-de-maderotherapie",
    calLink: "estelle-declercq-qemavw/seance-de-maderotherapie",
  },
} as const;

export type CalBookingKind = keyof typeof calBookingLinks;
