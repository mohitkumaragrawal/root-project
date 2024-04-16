import Container from "@/components/container";
import React, { useState, useEffect } from "react";
import { useFirebase } from "@/context/Firebase";
import { Dialog, DialogTrigger } from "@radix-ui/react-dialog";
import { DialogContent } from "@/components/ui/dialog";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";

function Gallery() {
  const [imageUrls, setImageUrls] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 18; // Number of images per page
  const firebase = useFirebase();

  useEffect(() => {
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

  // Calculate total number of pages
  const totalPages = Math.ceil(imageUrls.length / itemsPerPage);

  // Slice image array to display images for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentImages = imageUrls.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <Container>
        <div className="p-3 mb-3">
          <h1 className="font-bold text-3xl">Gallery</h1>
          <h2 className="text-gray-700">All photos</h2>
          <div className="pt-10">
            <BreadcrumbNew />
          </div>
        </div>
        <div className="-m-1 flex flex-wrap md:-m-2">
          {currentImages.map(({ imageUrl, id }, index) => (
            <div
              key={index}
              className="relative w-full md:w-1/3 p-1 md:p-2 transition-transform duration-300 transform hover:scale-90 hover:shadow-rose-700"
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
        <div className="mt-4 mb-4 text-rose-500 text-lg">
          <PaginationGallary
            totalPages={totalPages}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
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
          <Link to="/">Home</Link>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage className="text-rose-400 ">Gallery</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}

export function PaginationGallary({ totalPages, currentPage, onPageChange }) {
  const handleClick = (page) => {
    onPageChange(page);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <PaginationItem key={i}>
          <PaginationLink
            className="cursor-pointer"
            // href="#"
            onClick={() => handleClick(i)}
            isActive={i === currentPage}
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
            // disabled={currentPage === 1}
          />
        </PaginationItem>
        {renderPageNumbers()}
        <PaginationItem>
          <PaginationNext
            onClick={() => handleClick(currentPage + 1)}
            // disabled={currentPage === totalPages}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}

export default Gallery;
