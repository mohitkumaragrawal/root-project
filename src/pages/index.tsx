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

      {/* <div className="flex justify-center mt-4"> */}
      {/*   <div className="min-w-[80vw] lg:max-w-[80vw] xs:max-w-[95vw] flex flex-wrap justify-around"> */}
      {/*     {cardCount.map((_, index) => ( */}
      {/*       <div className="w-[31%]"> */}
      {/*         <CardWithForm key={index} /> */}
      {/*       </div> */}
      {/*     ))} */}
      {/*   </div> */}
      {/* </div> */}
    </Container>
  );
};

export default Result;

