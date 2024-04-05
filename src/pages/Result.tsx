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

const Result = () => {
  return (
    <div className="w-[100vw] flex justify-center">
      <div className="min-w-[80vw]">
        <GridLayout left={<LeftBar />} right={<RightBar />} />
      </div>
    </div>
  );
};

const LeftBar = () => {
  return (
    <>
      <div className="p-1 border border-y-gray-400 rounded-lg">
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
              {/* <p className="text-xs">Avg. Price</p> */}
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
      <CardContent>
        <h2 className="text-xl font-semibold">About</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
          blanditiis tenetur
        </p>
      </CardContent>
    </Card>
  );
};

export function MagicTabs() {
  return (
    <Card className="mt-2 p-2 flex justify-center">
      <Tabs defaultValue="account" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="account">Portfolio</TabsTrigger>
          <TabsTrigger value="password">Album</TabsTrigger>
          <TabsTrigger value="video">Video</TabsTrigger>
        </TabsList>
        <TabsContent value="Portfolio">
          <Card></Card>
        </TabsContent>
        <TabsContent value="album">
          {" "}
          <Card></Card>
        </TabsContent>
        <TabsContent value="video">
          {" "}
          <Card></Card>
        </TabsContent>
      </Tabs>
    </Card>
  );
}

export default Result;
