import GridLayout from "@/component/GridLyour";
import { Button } from "@/components/ui/button";
// import * as React from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Contact, LocateFixed } from "lucide-react";

//data
const data = {
  name: "The Vintage Aarone Farm",
  address: "A5, Asola Road, Near Shani dham mandir chhatarpur",
  email: "vintagethefarm@gmail.com",
  photographs: [],
  category: "Farm House",
  capacity: "100-500 Pax",
  price_per_plate: {
    veg: 1500,
    "non-veg": 1800,
    with_rent: false,
  },
  brief:
    "We are pleased to introduce our farm house “The Vintage - Aarone Farms” with some salient features. Location: Asola - Chhatarpur. Farm house Area: 3.5 Acre. Accommodation: 5 BR Villa. Swimming Pool: Big Size Swimming pool with pool side area (Popular for pool side Haldi Function). Queen Lawn: Beautiful Lawn with landscaping for the gathering Capacity of 200-250 pax. Popular for - Mehandi, Sagan, Sangeet, cocktail function, Day Wedding, Etc. King Lawn: Front lawn with natural fountain and landscaping for the gathering capacity of 500-600 pax. Popular for - Wedding function, live music event, Mandap Setup in front of fountain. Our Farm house is famous for minimum 2 days function and stays like 1st day you can enjoy your mehandi and sagan/sangeet/cocktail function in queen lawn and next day you can enjoy Haldi at pool Side and wedding in Front King lawn.",
};

//main component Result

const Result = () => {
  return (
    <div className="w-[100vw] flex justify-center ">
      <div className="min-w-[80vw] lg:max-w-[80vw] xs:max-w-[95vw] ">
        <GridLayout left={<LeftBar />} right={<RightBar />} />
      </div>
    </div>
  );
};

const LeftBar = () => {
  return (
    <>
      <div className="p-1 border rounded">
        <ResultCarousel />
      </div>
      <AboutCard />
      <MagicTabs />
    </>
  );
};

const RightBar = () => {
  return (
    <>
      <div>
        <Card>
          <CardContent>
            <p>Starting Price</p>
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">₹ 3.5 Cr</h2>
            </div>
          </CardContent>
        </Card>
        <Card className="mt-2 flex p-3  justify-center">
          <div className="flex justify-center gap-3">
            <Button>Contact</Button>
            <Button>Contact</Button>
          </div>
        </Card>
      </div>
    </>
  );
};

const ResultCarousel = () => {
  return (
    <>
      <div className="flex justify-center items-center w-full ">
        <Carousel className=" w-full lg:max-w-lg md:max-w-xs">
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index}>
                <img
                  src={`https://picsum.photos/1000/1000?random=${index}`}
                  alt="random"
                  className="w-full h-96 object-fill"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden md:block">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </Carousel>
      </div>
    </>
  );
};

const AboutCard = () => {
  return (
    <Card className="mt-2">
      <CardContent className="p-5">
        <h2 className="text-2xl font-bold mb-4">{data.name}</h2>

        <p className="mt-2 text-gray-600 tracking-wide text-justify">
          {data.brief}
        </p>

        <div className="mt-4">
          <div className="flex gap-2 items-center ">
            <LocateFixed className="mt-2" />
            <a
              href={`https://maps.google.com/?q=${data.address}`}
              className="bold text-black ml-2 underline mt-2"
            >
              {data.address}{" "}
            </a>
          </div>
        </div>

        <div className="mt-4">
          <div className="flex items-center gap-2">
            {/* <h2 className="text-xl font-bold mb-2">Contact</h2> */}
            <Contact className="mt-2" />
            <p className="mt-2 text-gray-600"></p>
            <a
              href={`mailto:${data.email}`}
              className="bold text-black ml-2 underline mt-2"
            >
              {data.email}
            </a>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export function MagicTabs() {
  return (
    <Card className="mt-2 p-2 flex justify-center">
      <Tabs defaultValue="portfolio" className="w-[800px]">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
          <TabsTrigger value="album">Album</TabsTrigger>
          <TabsTrigger value="video">Video</TabsTrigger>
        </TabsList>
        <TabsContent value="portfolio">
          <Card>
            <div className=" gap-2 sm:grid grid-cols-3 ">
              {Array.from({ length: 6 }).map((_, index) => (
                <img
                  key={index}
                  src={`https://picsum.photos/1000/1000?random=${index}`}
                  alt="random"
                  className="w-full h-60 object-fill"
                />
              ))}
            </div>
          </Card>
        </TabsContent>
        <TabsContent value="album">
          {" "}
          <Card>
            <div className="lg:grid grid-cols-3 gap-2 ">
              {Array.from({ length: 6 }).map((_, index) => (
                <img
                  key={index}
                  src={`https://picsum.photos/1000/1000?random=${index}`}
                  alt="random"
                  className="w-full h-60 object-fill"
                />
              ))}
            </div>
          </Card>
        </TabsContent>
        <TabsContent value="video">
          {" "}
          <Card>
            <div className="lg:grid grid-cols-3 gap-2 ">
              {Array.from({ length: 6 }).map((_, index) => (
                <img
                  key={index}
                  src={`https://picsum.photos/1000/1000?random=${index}`}
                  alt="random"
                  className="w-full h-60 object-fill"
                />
              ))}
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </Card>
  );
}

export default Result;
