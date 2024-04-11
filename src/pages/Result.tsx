import GridLayout from "@/component/GridLyour";
import { Button } from "@/components/ui/button";
// import * as React from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Contact, LocateFixed, Mail, MessageCircle, Phone } from "lucide-react";
import Container from "@/components/container";

//data
const data = {
  name: "The Vintage Aarone Farm",
  address: "A5, Asola Road, Near Shani dham mandir chhatarpur",
  email: "vintagethefarm@gmail.com",
  Price_Per_Plate: {
    Veg: "1500 without rent",
    "Non-Veg": "1800 without rent",
  },

  facilities: {
    Capacity: "100-500 Pax",
    Category: "Farm House",
    "Function Duration": "Minimum 2 days function with stays",
    "Farm house Area": "3.5 Acre",
  },
  area: {
    Accommodation: "5 BR Villa",
    Pool: "Swimming Pool with poolside area (Popular for poolside Haldi Function)",
    Lawn: [
      {
        name: "Queen Lawn",
        capacity: "200-250 max",
        features:
          "Beautiful Lawn with landscaping. Popular for Mehandi, Sagan, Sangeet, Cocktail function, Day Wedding, etc.",
      },
      {
        name: "King Lawn",
        capacity: "500-600 max",
        features:
          "Front lawn with natural fountain and landscaping. Popular for Wedding function, live music event, Mandap Setup in front of fountain.",
      },
    ],
  },
  brief:
    "We are pleased to introduce our farm house “The Vintage - Aarone Farms” with some salient features. Location : Asola -Chhatarpur Farm house Area : 3.5 Acre Our farm house is famous for minimum 2 days function and stays like 1st day you can enjoy your mehandi and sagan/ sngeet/ cocktail function in queen lawn and next day you can enjoy Haldi at pool Side and wedding in Front King lawn.",
};
//main component Result

const Result = () => {
  return (
    <Container>
      <div className="min-w-[80vw] lg:max-w-[80vw] xs:max-w-[95vw] mb-3">
        <GridLayout left={<LeftBar />} right={<RightBar />} />
      </div>
    </Container>
  );
};

const LeftBar = () => {
  return (
    <>
      <div className="p-1 border rounded">
        <ResultCarousel />
        {/* <CarouselDefault /> */}
      </div>
      <AboutCard />

      <AreaCard />
      <MagicTabs />
    </>
  );
};

const RightBar = () => {
  return (
    <>
      <div>
        <Card>
          <CardHeader>
            <CardTitle>Pricing</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-2 ">
              {Object.entries(data.Price_Per_Plate).map(([key, value]) => (
                <div key={key}>
                  <p className="text-lg font-semibold">{key}</p>
                  <p className="border-b border-gray-500">₹{value}</p>
                </div>
              ))}
            </div>
            <PricingAccord />
            <Card className="mt-2 flex p-3  justify-center">
              <div className="flex justify-center gap-3">
                <Button
                  variant="default"
                  className="flex items-center justify-center gap-1 bg-rose-500 text-white"
                >
                  <Mail />
                  Message
                </Button>
                <Button
                  // variant="destructive"
                  className="flex items-center justify-center gap-1 bg-green-700"
                >
                  <Phone />
                  Contact
                </Button>
              </div>
            </Card>
          </CardContent>
        </Card>
        <Facilities />
      </div>
    </>
  );
};

const ResultCarousel = () => {
  return (
    <>
      <div className="flex justify-center items-center w-full ">
        <Carousel className=" w-full ">
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
          <div className="hidden md:block"></div>
        </Carousel>
      </div>
    </>
  );
};

const Facilities = () => {
  return (
    <Card className="mt-2">
      <CardHeader>
        <CardTitle>Facilities</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-2 mt-2">
          {Object.entries(data.facilities).map(([key, value]) => (
            <div key={key}>
              <p className="text-lg font-semibold">{key}</p>
              <p>{value}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

const AboutCard = () => {
  return (
    <Card className="mt-2 bg-rose-200">
      <CardHeader>
        <CardTitle>{data.name}</CardTitle>
        <CardDescription>About</CardDescription>
      </CardHeader>

      <CardContent>
        <p className="mt-2 text-gray-600 tracking-wide text-start">
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
            <div className=" gap-2 grid grid-col-2 md:grid grid-cols-2 ">
              {Array.from({ length: 6 }).map((_, index) => (
                <img
                  key={index}
                  src={`https://picsum.photos/1000/1000?random=${index}`}
                  alt="random"
                  className="w-full h-60 object-cover"
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

const AreaCard = ({}) => {
  return (
    <>
      {" "}
      <Card className="mt-2">
        <CardHeader>
          <CardTitle>Areas available</CardTitle>
          <CardDescription>Area</CardDescription>
        </CardHeader>
        <CardContent>
          <div>
            <p className="text-lg font-semibold">Accommodation</p>
            <p>{data.area.Accommodation}</p>
          </div>
          <div className="mt-2">
            <p className="text-lg font-semibold">Pool</p>
            <p>{data.area.Pool}</p>
          </div>
          <div className="mt-2">
            <p className="text-lg font-semibold">Lawn</p>
            <div className="grid grid-cols-1 gap-2">
              {data.area.Lawn.map((lawn, index) => (
                <div key={index} className="border p-3 rounded">
                  <p className="text-lg font-semibold underline">{lawn.name}</p>
                  <p className="font-semibold">
                    <span className="bold mr-1">Capacity</span>
                    {lawn.capacity}
                  </p>
                  <p className="text-justify">{lawn.features}</p>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

const PricingAccord = () => {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

const RightForm = () => {
  return <></>;
};

export default Result;
