import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "./ui/accordion";

import { sidebarData } from "@/data/sidebar-data";
import { Link } from "react-router-dom";

export function Sidebar(props: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  return (
    <Sheet open={props.open} onOpenChange={props.onOpenChange}>
      <SheetContent side="left" className="overflow-auto">
        <SheetHeader>
          <SheetTitle>Wedding Central</SheetTitle>
          <SheetDescription></SheetDescription>
        </SheetHeader>

        <Accordion type="single">
          {sidebarData.map((data, index) => (
            <AccordionItem value={index.toString()} key={index}>
              <AccordionTrigger>{data.name}</AccordionTrigger>
              <AccordionContent>
                {data.subcategories.map((x) => (
                  <Link to={x.link}>
                    <p className="hover:underline py-1 mx-3 underline-offset-2 text-gray-800">
                      {x.name}
                    </p>
                  </Link>
                ))}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </SheetContent>
    </Sheet>
  );
}
