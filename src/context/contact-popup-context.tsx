"use client";

import { createContext, useEffect, useState } from "react";

type ContactPopupContextType = { open: boolean; setOpen: (x: boolean) => void };

export const ContactPopupContext = createContext<ContactPopupContextType>({
  open: false,
  setOpen: () => {},
});

const duration = 1000 * 60;
export function ContactPopupContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setOpen(true);
    }, duration);

    return () => clearTimeout(timeout);
  }, [setOpen]);
  return (
    <ContactPopupContext.Provider value={{ open, setOpen }}>
      {children}
    </ContactPopupContext.Provider>
  );
}
