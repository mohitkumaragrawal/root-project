import { Button } from "@/components/ui/button";
import { ArrowLeftIcon, ArrowRightLeftIcon } from "lucide-react";

import notfound from "../assets/notfound.svg";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="bg-white text-zinc h-[100vh] w-[100vw]">
      <div className="flex h-screen">
        <div className="m-auto text-center">
          <div>
            <img src={notfound} />
          </div>
          <p className="text-sm md:text-base text-rose-800 p-2 mb-4">
            The Page you were looking for doesn't exist
          </p>
          <Link to={"/"}>
            <Button className="bg-[#D20062]">Go Home</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
