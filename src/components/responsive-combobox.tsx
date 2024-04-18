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

type ComboboxItem = {
  value: string;
  label: string;
};

interface ReponsiveComboboxProps {
  items: ComboboxItem[];

  children?: React.ReactNode;
  startIcon?: React.ReactNode;

  onChange?: (newItem: ComboboxItem) => void;
}

export function ReponsiveCombobox(props: ReponsiveComboboxProps) {
  const [open, setOpen] = React.useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const [selectedItem, setSelectedItem] = React.useState<ComboboxItem | null>(
    null,
  );

  // React.useEffect(() => {
  //   if (props.onChange && selectedItem)
  //     props.onChange(selectedItem);
  // }, [selectedItem])

  const handleChange = (newItem: ComboboxItem) => {
    setSelectedItem(newItem);
    if (props.onChange && newItem) {
      props.onChange(newItem);
      console.log("on Change hit", newItem);
    }
  }

  if (isDesktop) {
    return (
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button variant="outline" className="justify-start min-w-[300px]">
            {selectedItem ? (
              <>
                {props.startIcon}
                {selectedItem.label}
              </>
            ) : (
              props.children
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="p-0" align="start">
          <ItemList
            setOpen={setOpen}
            setSelectedStatus={handleChange}
            items={props.items}
          />
        </PopoverContent>
      </Popover>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant="outline" className="justify-start min-w-[300px]">
          {selectedItem ? (
            <>
              {props.startIcon}
              {selectedItem.label}
            </>
          ) : (
            props.children
          )}
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mt-4 border-t">
          <ItemList
            setOpen={setOpen}
            setSelectedStatus={handleChange}
            items={props.items}
          />
        </div>
      </DrawerContent>
    </Drawer>
  );
}

function ItemList({
  setOpen,
  setSelectedStatus,
  items,
}: {
  setOpen: (open: boolean) => void;
  setSelectedStatus: (status: ComboboxItem | null) => void;
  items: ComboboxItem[];
}) {
  return (
    <Command>
      <CommandInput placeholder="Filter..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup>
          {items.map((item) => (
            <CommandItem
              key={item.value}
              value={item.value}
              onSelect={(value) => {
                setSelectedStatus(
                  items.find((priority) => priority.value === value) || null,
                );
                setOpen(false);
              }}
            >
              {item.label}
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </Command>
  );
}
