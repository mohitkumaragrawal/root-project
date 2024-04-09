import * as React from "react";

import { useMediaQuery } from "@/hooks/use-media-query";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

type Status = {
  value: string;
  label: string;
};

const statuses: Status[] = [
  {
    value: "backlog",
    label: "Backlog",
  },
  {
    value: "todo",
    label: "Todo",
  },
  {
    value: "in progress",
    label: "In Progress",
  },
  {
    value: "done",
    label: "Done",
  },
  {
    value: "canceled",
    label: "Canceled",
  },
];

interface ComboBoxResponsiveProps {
  render: (props: {
    setOpen: (open: boolean) => void;
    setSelectedStatus: (status: Status | null) => void;
  }) => React.ReactNode;
}

export function ComboBoxResponsive() {
  const [open, setOpen] = React.useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const [selectedStatus, setSelectedStatus] = React.useState<Status | null>(
    null,
  );

  if (isDesktop) {
    return (
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button variant="outline" className="w-[150px] justify-start">
            {selectedStatus ? <>{selectedStatus.label}</> : <>+ Set status</>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0" align="start">
          {/* <StatusList setOpen={setOpen} setSelectedStatus={setSelectedStatus} /> */}
        </PopoverContent>
      </Popover>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant="outline" className="w-[150px] justify-start">
          {selectedStatus ? <>{selectedStatus.label}</> : <>+ Set status</>}
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mt-4 border-t">
          {/* <StatusList setOpen={setOpen} setSelectedStatus={setSelectedStatus} /> */}
        </div>
      </DrawerContent>
    </Drawer>
  );
}

function StatusList({
  setOpen,
  setSelectedStatus,
  statusList,
}: {
  setOpen: (open: boolean) => void;
  setSelectedStatus: (status: Status | null) => void;
  statusList: Status[];
}) {
  return (
    <Command className="z-[100]">
      <CommandInput placeholder="Filter status..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup>
          {statusList.map((status) => (
            <CommandItem
              key={status.value}
              value={status.value}
              onSelect={(value) => {
                setSelectedStatus(
                  statusList.find((priority) => priority.value === value) ||
                    null,
                );
                setOpen(false);
              }}
            >
              {status.label}
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </Command>
  );
}

export function Hero() {
  return (
    <div className="h-[600px] relative">
      <div
        className="absolute inset-0 bg-cover z-[-1]"
        style={{
          backgroundImage:
            "url(https://image.wedmegood.com/resized/1900X/uploads/city_bg_image/1/delhi_bg.jpeg), linear-gradient(to top, black, transparent)",
          backgroundBlendMode: "overlay",
          backgroundPosition: "center",
        }}
      ></div>

      <div className="flex flex-col gap-3 text-center items-center h-full justify-end text-white">
        <p className="text-4xl font-bold">Your Wedding Your Way</p>
        <p className="text-xl">
          Find the best wedding vendors with thousands of trusted reviews
        </p>

        <div className="mt-10 mb-20 text-foreground flex flex-row flex-wrap gap-1 p-4">
          <ComboBoxResponsive />
          <ComboBoxResponsive />

          <Button variant="default" className="flex-1">
            Get Started
          </Button>
        </div>
      </div>
    </div>
  );
}
