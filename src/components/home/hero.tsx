import { Button } from "@/components/ui/button";

import { ReponsiveCombobox } from "@/components/responsive-combobox";

import { FaCity } from "react-icons/fa";
import { GiPartyPopper } from "react-icons/gi";

import { venueCity, venueType } from "@/data/venue-category-data";

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

      <div className="flex flex-col gap-3 text-center items-center h-full justify-end text-white px-5">
        <p className="text-4xl font-bold">Your Wedding Your Way</p>
        <p className="text-xl">
          Find the best wedding vendors with thousands of trusted reviews
        </p>

        <div className="mt-10 mb-20 text-foreground flex md:flex-row md:gap-1 flex-col gap-3 p-4">
          <ReponsiveCombobox
            items={venueCity.map((city) => ({
              label: city.title,
              value: city.title,
            }))}
            startIcon={<FaCity className="mr-2" />}
          >
            <FaCity className="mr-2" /> City
          </ReponsiveCombobox>

          <ReponsiveCombobox
            items={venueType.map((city) => ({
              label: city.title,
              value: city.title,
            }))}
            startIcon={<GiPartyPopper className="mr-2" />}
          >
            <GiPartyPopper className="mr-2" /> Venue Type
          </ReponsiveCombobox>
          <Button variant="default" className="flex-1">
            Get Started
          </Button>
        </div>
      </div>
    </div>
  );
}
