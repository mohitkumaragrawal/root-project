import GridLayout from "@/component/GridLyour";
import { Button } from "@/components/ui/button";
// import * as React from "react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

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
import { Contact, Loader2, LocateFixed, Mail, Phone } from "lucide-react";
import Container from "@/components/container";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import { Link } from "react-router-dom";
import Skeleton from "@/components/skeleton";
import { Dialog, DialogTrigger } from "@radix-ui/react-dialog";
import { DialogContent } from "@/components/ui/dialog";

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

  return (
    <>
      <Container>
        <div className="mb-4 ml-3">
          <BreadcrumbNew />
        </div>
        <div className="min-w-[80vw] lg:max-w-[80vw] xs:max-w-[95vw] mb-3">
          {vendorsData && vendorsData[0] ? (
            <>
              <GridLayout
                left={<LeftBar data={vendorsData[1]} />}
                right={<RightBar data={vendorsData[1]} />}
              />
              <div className="mb-4 hidden sm:block">
                <AboutCard data={vendorsData[1]} />
              </div>
              <MagicTabs urls={vendorsData[1]?.urls ?? []} />
            </>
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
      <div className="mb-4 block sm:hidden">
        <AboutCard data={data} />
      </div>
      <AreaCard data={data} />
      <div className="block sm:hidden mt-1">
        <MobilePricing data={data} />
      </div>
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

const AboutCard = ({ data }) => {
  return (
    <Card className="mt-2 bg-white shadow-none">
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
    <Card className="mt-2 mb-4 p-2 flex justify-center">
      <Tabs defaultValue="portfolio" className="w-full">
        <TabsList className="grid w-full grid-cols-1">
          <TabsTrigger value="Album">Album</TabsTrigger>
        </TabsList>
        <TabsContent value="Album">
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
                  <div className="p-3 h-full w-full">
                    <img
                      src={img}
                      alt="image"
                      className="w-full h-full  rounded-sm shadow-md  shdadow-rose-200"
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
        </BreadcrumbItem>{" "}
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          {/* <BreadcrumbLink href="/">Home</BreadcrumbLink> */}
          <Link to="/">Vendors</Link>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          {/* <BreadcrumbLink href="/">Home</BreadcrumbLink> */}
          <Link to="/">Venues</Link>
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
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = (page) => {
    setCurrentPage(page);
    onPageChange(page);
  };
  useEffect(() => {
    setIsLoading(true);

    const delay = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(delay);
  }, [currentPage, onPageChange]);

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
      {isLoading && (
        <div className="flex justiffy-center items-center">
          <Loader2 className="animate-spin text-rose-600" />
        </div>
      )}
    </Pagination>
  );
};

export default Result;
