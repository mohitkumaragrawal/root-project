import GridLayout from "@/component/GridLyour";
import { Button } from "@/components/ui/button";
// import * as React from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

//
import Autoplay from "embla-carousel-react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import React, { useEffect, useState } from "react";
import { useFirebase } from "@/context/Firebase";

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
} from "@/components/ui/carousel";
import { Contact, LocateFixed, Mail, MessageCircle, Phone } from "lucide-react";
import Container from "@/components/container";
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link } from "react-router-dom";
import Skeleton from "@/components/skeleton";
import { Dialog, DialogTrigger } from "@radix-ui/react-dialog";
import { DialogContent } from "@/components/ui/dialog";

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
  const { viewVendors } = useFirebase();
  const [vendorsData, setVendorsData] = useState([]);
  useEffect(() => {
    console.log("clicked");
    console.log(viewVendors);
    const fetchData = async () => {
      try {
        await viewVendors("venue").then((vendorsD) => {
          setVendorsData(vendorsD);
        });
      } catch (error) {
        console.error("Error fetching vendors:", error);
      }
    };
    fetchData();
  }, [viewVendors]);
  // return <></>;
  //
  // const loading = !(vendorsData && vendorsData[0] !== null);
  // const loading = true;

  return (
    <>
      <Container>
        <div className="mb-4 ml-3">
          <BreadcrumbNew />
        </div>
        <div className="min-w-[80vw] lg:max-w-[80vw] xs:max-w-[95vw] mb-3">
          {vendorsData && vendorsData[0] ? (
            <GridLayout
              left={<LeftBar data={vendorsData[1]} />}
              right={<RightBar data={vendorsData[1]} />}
            />
          ) : (
            <div className="space-y-3 gap-3">
              <div className="flex gap-2 sm:flex-row flex-col">
                <Skeleton className="w-full h-96 flex-[2] m-0" />
                <Skeleton className="w-full h-96 flex-[1] m-0" />
              </div>
              <Skeleton className="w-full h-48" />
              <Skeleton className="w-full h-56" />
            </div>
          )}
        </div>
      </Container>
    </>
  );
};

const LeftBar = ({ data }: any) => {
  return (
    <>
      <div className="p-1 border rounded">
        <ResultCarousel urls={data?.urls ?? []} />
      </div>
      <AboutCard data={data} />

      <AreaCard data={data} />
      <div className="block sm:hidden mt-1">
        <MobilePricing data={data} />
      </div>
      <MagicTabs urls={data?.urls ?? []} />
    </>
  );
};

const MobilePricing = ({ data }: any) => {
  return (
    <Card className="border">
      <CardHeader>
        <CardTitle>Pricing</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-1 ">
          {data?.price_per_plate &&
            Object.entries(data?.price_per_plate).map(([key, value]) => (
              <div key={key}>
                <p className="text-lg font-semibold capitalize">
                  {key.replace("_", " ")}
                </p>
                <p className=" p-1 pl-4 shadow-sm shadow-red-300 rounded-lg border-gray-500 mt-1">
                  ₹{value as string}
                </p>
              </div>
            ))}
        </div>
        {/* <PricingAccord /> */}
        <div className="mt-2 flex p-3  justify-center">
          <div className="flex justify-center gap-3">
            <a href={`mailto:${data.email}`}>
              <Button
                variant="default"
                className="flex items-center justify-center gap-1 bg-rose-500 text-white"
              >
                <Mail />
                Message
              </Button>
            </a>
            <a href="tel:8700921823">
              <Button
                // variant="destructive"
                className="flex items-center justify-center gap-1 bg-green-700"
              >
                <Phone />
                Contact
              </Button>
            </a>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const RightBar = ({ data }: any) => {
  return (
    <>
      <div>
        <Card className="border">
          <CardHeader>
            <CardTitle>Pricing</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-1 ">
              {data?.price_per_plate &&
                Object.entries(data?.price_per_plate).map(([key, value]) => (
                  <div key={key}>
                    <p className="text-lg font-semibold capitalize">
                      {key.replace("_", " ")}
                    </p>
                    <p className=" p-1 pl-4 shadow-sm shadow-red-300 rounded-lg border-gray-500 mt-1">
                      ₹{value as string}
                    </p>
                  </div>
                ))}
            </div>
            <PricingAccord />
            <div className="mt-2 flex p-3  justify-center">
              <div className="flex justify-center gap-3">
                <a href={`mailto:${data.email}`}>
                  <Button
                    variant="default"
                    className="flex items-center justify-center gap-1 bg-rose-500 text-white"
                  >
                    <Mail />
                    Message
                  </Button>
                </a>
                <a href="tel:8700921823">
                  <Button
                    // variant="destructive"
                    className="flex items-center justify-center gap-1 bg-green-700"
                  >
                    <Phone />
                    Contact
                  </Button>
                </a>
              </div>
            </div>
          </CardContent>
        </Card>
        {/* <Facilities /> */}
      </div>
    </>
  );
};

const ResultCarousel = ({ urls }: any) => {
  return (
    <>
      <div className="flex justify-center items-center w-full ">
        <Carousel
          className=" w-full "
          opts={{
            loop: true,
          }}
        >
          <CarouselContent>
            {urls?.map((img, index) => (
              <CarouselItem key={index}>
                <img
                  src={img}
                  alt="random"
                  className="w-full h-96  md:h-[27rem] object-fill"
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

const AboutCard = ({ data }) => {
  return (
    <Card className="mt-2 bg-rose-200  shadow-none">
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

export function MagicTabs({ urls }) {
  // const Url = urls.slice(0, 9);

  const itemsPerPage = 9;
  const [currentPage, setCurrentPage] = useState(1);

  // Logic to slice the URLs based on the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const visibleUrls = urls.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <Card className="mt-2 p-2 flex justify-center">
      <Tabs defaultValue="portfolio" className="w-[800px]">
        <TabsList className="grid w-full grid-cols-1">
          <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
        </TabsList>
        <TabsContent value="portfolio">
          {/* <Card> */}
          <div className=" gap-1 grid grid-cols-2 md:grid-cols-3 ">
            {visibleUrls?.map((img, index) => (
              <Dialog key={index}>
                <DialogTrigger asChild>
                  <img
                    key={index}
                    src={img}
                    alt="random"
                    className="w-full h-60 object-cover shadow-md cursor-pointer"
                  />
                </DialogTrigger>
                <DialogContent>
                  <div className="p-3 h-auto w-auto">
                    <img
                      src={img}
                      alt="random"
                      className="w-full h-96  rounded-sm shadow-md cursor-pointer shdadow-rose-200"
                    />
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>

          <div className="mt-4">
            <PaginationNew
              totalItems={urls.length}
              itemsPerPage={itemsPerPage}
              onPageChange={handlePageChange}
            />
          </div>
        </TabsContent>
      </Tabs>
    </Card>
  );
}

const AreaCard = ({ data }) => {
  return (
    <>
      {" "}
      <Card className="mt-2 shadow-none">
        <CardHeader>
          <CardTitle>Areas available</CardTitle>
          <CardDescription>Area</CardDescription>
        </CardHeader>
        <CardContent>
          {/* <div>
            <p className="text-lg font-semibold">Accommodation</p>
            <p>{data.area.Accommodation}</p>
          </div> */}
          {/* <div className="mt-2">
            <p className="text-lg font-semibold">Pool</p>
            <p>{data.area.Pool}</p>
          </div> */}
          <div className="mt-2">
            <p className="text-lg font-semibold">Lawn</p>
            <div className="grid grid-cols-1 gap-2">
              {data.lawns.map((lawn, index) => (
                <div key={index} className="border p-3 rounded">
                  <p className="text-lg font-semibold underline">{lawn.name}</p>
                  <p className="font-semibold">
                    <span className="bold mr-1">Capacity</span>
                    {lawn.category}
                  </p>
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
          Yes. It is easy accessible from main road.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export function BreadcrumbNew() {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          {/* <BreadcrumbLink href="/">Home</BreadcrumbLink> */}
          <Link to="/">Home</Link>
        </BreadcrumbItem>

        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage className="text-rose-400">Result</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}
const PaginationNew = ({ totalItems, itemsPerPage, onPageChange }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handleClick = (page) => {
    setCurrentPage(page);
    onPageChange(page);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <PaginationItem key={i}>
          <PaginationLink
            onClick={() => handleClick(i)}
            className="cursor-pointer"
          >
            {i}
          </PaginationLink>
        </PaginationItem>
      );
    }
    return pageNumbers;
  };

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            onClick={() => handleClick(currentPage - 1)}
            className={`text-rose-500 ${
              currentPage === 1 && "opacity-50 cursor-not-allowed"
            }`}
          />
        </PaginationItem>

        {renderPageNumbers()}

        <PaginationItem>
          <PaginationNext
            onClick={() => handleClick(currentPage + 1)}
            className={`text-rose-500 ${
              currentPage === totalPages && "opacity-50 cursor-not-allowed"
            }`}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default Result;
