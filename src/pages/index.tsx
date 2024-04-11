import GridLayout from "@/component/GridLyour";
import { Button } from "@/components/ui/button";
import React from "react";

import { CardWithForm } from "@/components/index/card";

const Result = () => {

    const cardCount = Array.from({ length: 11 });

    return (
        <div className="w-[100vw] flex justify-center mt-4">
            <div className="min-w-[80vw] lg:max-w-[80vw] xs:max-w-[95vw] flex flex-wrap justify-around">
                {cardCount.map((_, index) => (
                    <div className="w-[31%]">
                        <CardWithForm key={index} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Result;