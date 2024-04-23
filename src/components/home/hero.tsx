import { Button } from "@/components/ui/button";
import { useState } from "react";
import { ReponsiveCombobox } from "@/components/responsive-combobox";

import { FaCity } from "react-icons/fa";
import { GiPartyPopper } from "react-icons/gi";

import { venueCity, venueType } from "@/data/venue-category-data";
import { useNavigate } from "react-router-dom";

export function Hero() {
  const navigate = useNavigate();
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedVenueType, setSelectedVenueType] = useState('');
  const handleCityChange = (selected) => {
    setSelectedCity(selected.value);
  };

  const handleVenueTypeChange = (selected) => {
    setSelectedVenueType(selected.value);
  };

  const getStarted = () => {
    const baseUrl = '/vendor/venue';
    console.log(selectedCity, selectedVenueType);
    const queryParams = new URLSearchParams({
      city: selectedCity,
      type: selectedVenueType,
    });
    const fullUrl = `${baseUrl}?${queryParams.toString()}`;
    navigate(fullUrl);
  }

  return (
    <div className="h-[600px] relative">
      <div
        className="absolute inset-0 bg-cover z-[-1]"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/cLD39rS/home-page-better.jpg), linear-gradient(to top, black, transparent)",
          // filter: "blur(2px)",
          backgroundBlendMode: "overlay",
          backgroundPosition: "center",
        }}
      ></div>

      <div className="flex flex-col gap-3 text-center items-center h-full justify-end text-white px-5">
        <p className="text-4xl font-bold">Crafting Your Perfect Wedding</p>
        <p className="text-xl">
          Discover top-rated wedding vendors with a wealth of satisfied customers.
        </p>

        <div className="mt-10 mb-20 text-foreground flex md:flex-row md:gap-1 flex-col gap-3 p-4">
          <ReponsiveCombobox
            items={venueCity.map((city) => ({
              label: city.title,
              value: city.title,

            }))}

            startIcon={<FaCity className="mr-2" />}
            onChange={(v) => { handleCityChange(v) }}
          >

            <FaCity className="mr-2" /> City
          </ReponsiveCombobox>

          <ReponsiveCombobox
            items={venueType.map((vType) => ({
              label: vType.title,
              value: vType.title,

            }))}
            startIcon={<GiPartyPopper className="mr-2" />}
            onChange={(v) => {
              handleVenueTypeChange(v)
            }}
          >

            <GiPartyPopper className="mr-2" /> Venue Type
          </ReponsiveCombobox>
          <Button variant="default" className="flex-1" onClick={getStarted}>
            Get Started
          </Button>
        </div>
      </div>
    </div>
  );
}


