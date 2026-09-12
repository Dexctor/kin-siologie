"use client";

import type { ButtonHTMLAttributes, MouseEvent } from "react";
import { useBookingDialog } from "@/components/booking/BookingDialogProvider";
import type { CalBookingKind } from "@/lib/cal";

type CalBookingButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  booking: CalBookingKind;
};

export default function CalBookingButton({
  booking,
  type = "button",
  children,
  disabled,
  onClick,
  ...props
}: CalBookingButtonProps) {
  const { openBooking } = useBookingDialog();

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    onClick?.(event);

    if (event.defaultPrevented || disabled) return;
    openBooking(booking, event.currentTarget);
  };

  return (
    <button
      {...props}
      type={type}
      disabled={disabled}
      onClick={handleClick}
    >
      {children}
    </button>
  );
}
