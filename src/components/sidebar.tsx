import {
  Sheet,
  SheetContent,
  SheetDescription,
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

import logo from "@/assets/logo-removebg-preview.png";
export function Sidebar(props: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  return (
    <Sheet open={props.open} onOpenChange={props.onOpenChange}>
      <SheetContent side="left" className="overflow-auto">
        <SheetHeader>
          <SheetTitle>
            <img
              src={logo}
              referrerPolicy="no-referrer"
              className="h-full w-[230px] mx-auto "
            />
          </SheetTitle>
          <SheetDescription></SheetDescription>
        </SheetHeader>

        <p className="text-base font-bold mt-5 text-pink-600 hover:bg-pink-200 p-2 rounded-lg -ml-2">
          Wedding Categories
        </p>

        <Accordion type="multiple">
          {sidebarData.map((data, index) => (
            <AccordionItem
              value={index.toString()}
              key={index}
              className="border-0"
            >
              <AccordionTrigger>
                <div className="flex gap-4 items-center text-sm">
                  <span className="text-pink-600">{data.icon}</span>
                  {data.name}
                </div>
              </AccordionTrigger>
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

        <Link to="/gallary">
          <p className="text-base font-bold mt-5 text-pink-600 hover:bg-pink-200 p-2 rounded-lg -ml-2">
            Gallary
          </p>
        </Link>
      </SheetContent>
    </Sheet>
  );
}
