import Container from "@/components/container";
import React from "react";
import { useFirebase } from "@/context/Firebase";
import { Dialog, DialogTrigger } from "@radix-ui/react-dialog";
import { DialogContent } from "@/components/ui/dialog";
import { Card } from "@/components/ui/card";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";

function Gallery() {
  const [imageUrls, setImageUrls] = React.useState([]);
  const [hoveredIndex, setHoveredIndex] = React.useState(null);
  const firebase = useFirebase();

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const images = await firebase.viewImages();
        setImageUrls(images);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Container>
        <div className="p-3 mb-3">
          <h1 className="font-bold text-3xl">{"Gallary"}</h1>
          <h2 className="text-gray-700">All photos</h2>
          <div className="pt-10">
            {" "}
            <BreadcrumbNew />
          </div>
        </div>
        <div className="-m-1 flex flex-wrap md:-m-2">
          {imageUrls.map(({ imageUrl, id }, index) => (
            <div
              key={index}
              className={`relative w-full md:w-1/3 p-1 md:p-2 ${
                hoveredIndex === index ? "z-10" : "z-0"
              } transition-transform duration-300 transform hover:scale-90 hover:shadow-rose-700`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <Dialog>
                <DialogTrigger className="w-full h-full">
                  <img
                    alt={`gallery ${index}`}
                    className="block h-full w-full rounded-lg object-cover object-center"
                    src={imageUrl}
                  />
                </DialogTrigger>
                <DialogContent>
                  <div className="p-3">
                    <img
                      alt={`gallery ${index}`}
                      className="block h-full w-full rounded-lg object-cover object-center"
                      src={imageUrl}
                    />
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          ))}
        </div>
      </Container>
    </>
  );
}

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
          <BreadcrumbPage className="text-rose-400">Gallary</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}

export default Gallery;
