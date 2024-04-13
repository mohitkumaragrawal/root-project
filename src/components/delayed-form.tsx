import React, { useEffect, useState } from "react";
import { Dialog, DialogHeader, DialogContent } from "./ui/dialog";

const duration = 1000 * 60;
export default function DelayedForm() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    console.log("inside usefu");

    const timeout = setTimeout(() => {
      setOpen(true);
    }, duration);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>Form</DialogHeader>
        This is some content
      </DialogContent>
    </Dialog>
  );
}
