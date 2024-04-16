import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

import { Outlet } from "react-router-dom";
import { useState } from "react";
import { Sidebar } from "@/components/sidebar";
import DelayedForm from "@/components/delayed-form";

import { Toaster } from "@/components/ui/sonner";

export default function Layout() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Navbar onOpen={() => setOpen(true)} />
      <Sidebar open={open} onOpenChange={setOpen} />
      <DelayedForm />
      <Outlet />
      <Footer />
      <Toaster />
    </>
  );
}
