import GridLayout from "@/component/GridLyour";
import { Button } from "@/components/ui/button";
import React from "react";

import { CardWithForm } from "@/components/index/card";
import Container from "@/components/container";

const Result = () => {
  const cardCount = Array.from({ length: 11 });

  return (
    <Container className="flex flex-wrap gap-5 items-center justify-center">
      {cardCount.map((_, index) => (
        <div className="w-[400px]">
          <CardWithForm key={index} />

        </div>
      ))}


    </Container>
  );
};

export default Result;

