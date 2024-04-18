import { useContext } from "react";
import { Dialog, DialogHeader, DialogContent, DialogFooter } from "./ui/dialog";
import { ContactPopupContext } from "@/context/contact-popup-context";

import { MdDiscount } from "react-icons/md";

import { Button } from "./ui/button";

export default function DiscountForm() {
  const { discountOpen, setDiscountOpen, setOpen } =
    useContext(ContactPopupContext);

  const handleClick = () => {
    setOpen(true);
    setDiscountOpen(false);
  };

  return (
    <Dialog open={discountOpen} onOpenChange={setDiscountOpen}>
      <DialogContent>
        <DialogHeader className="font-bold flex flex-row text-primary gap-6 items-center">
          <MdDiscount className="" size={36} />
          <p className="text-2xl">Hurry Up!</p>
        </DialogHeader>

        <p className="text-sm text-gray-900">
          We have a special offer for you. Get 50% off on your first purchase.
        </p>

        <DialogFooter>
          <Button className="w-full" onClick={handleClick}>
            Get this offer
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
