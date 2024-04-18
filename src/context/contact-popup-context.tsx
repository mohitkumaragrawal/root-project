"use client";

import { createContext, useEffect, useState } from "react";

type ContactPopupContextType = {
  open: boolean;
  setOpen: (x: boolean) => void;

  hasSubmitted: boolean;
  setHasSubmitted: (x: boolean) => void;

  discountOpen: boolean;
  setDiscountOpen: (x: boolean) => void;

  handleContactPopupClose: () => void;
};

export const ContactPopupContext = createContext<ContactPopupContextType>(null);

const duration = 1000 * 60;
export function ContactPopupContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const [discountOpen, setDiscountOpen] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setOpen(true);
    }, duration);

    return () => clearTimeout(timeout);
  }, [setOpen]);

  const handleContactPopupClose = () => {
    if (!hasSubmitted) {
      setDiscountOpen(true);
    }
  };

  return (
    <ContactPopupContext.Provider
      value={{
        open,
        setOpen,
        hasSubmitted,
        setHasSubmitted,
        handleContactPopupClose,
        discountOpen,
        setDiscountOpen,
      }}
    >
      {children}
    </ContactPopupContext.Provider>
  );
}
