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
import Skeleton from "@/components/skeleton";

function Gallery() {
  const [imageUrls, setImageUrls] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const itemsPerPage = 18;
  const firebase = useFirebase();

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const images = await firebase.viewImages();
        setImageUrls(images);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const totalPages = Math.ceil(imageUrls.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentImages = imageUrls.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      {loading ? (
        <Container>
          <div className="p-3 mb-3">
            <h1 className="font-bold text-3xl">Gallery</h1>
            <h2 className="text-gray-700">All photos</h2>
            <div className="pt-10">
              <Skeleton className="w-full h-96 flex-[2] m-0" />
              <Skeleton className="w-full h-96 flex-[1] m-0" />
            </div>
          </div>
        </Container>
      ) : (
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
                  className="relative w-full md:w-1/3 p-1 md:p-2 transition-transform duration-800 transform hover:scale-90 hover:shadow-rose-700"
                >
                  <Dialog>
                    <DialogTrigger className="w-full h-full">
                      <img
                        alt={`gallery ${index}`}
                        className="block h-80  w-full rounded-lg object-cover object-center"
                        src={imageUrl}
                      />
                    </DialogTrigger>
                    <DialogContent className="w-[100vw] max-w-[95vw] max-h-[95vh] h-[100vw] flex flex-col overflow-hidden">
                
                    <div className="w-full flex-1 h-full">
                        <img
                          alt={`gallery ${index}`}
                          className="w-full h-full rounded-sm object-contain"
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
      )}
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

  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  const renderPageNumbers = () => {
    const pageNumbers = [];
    const maxVisiblePages = 4;

    let startPage = currentPage - Math.floor(maxVisiblePages / 2);
    if (startPage < 1) {
      startPage = 1;
    }

    let endPage = startPage + maxVisiblePages - 1;
    if (endPage > totalPages) {
      endPage = totalPages;
    }

    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = endPage - maxVisiblePages + 1;
      if (startPage < 1) {
        startPage = 1;
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <PaginationItem key={i}>
          <PaginationLink
            className="cursor-pointer"
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
            onClick={() => handleClick(Math.max(1, currentPage - 1))}
            className={`cursor-pointer ${isFirstPage ? 'opacity-50 pointer-events-none' : ''}`}
          />
        </PaginationItem>
        {renderPageNumbers()}
        <PaginationItem>
          <PaginationNext
            onClick={() => handleClick(Math.min(totalPages, currentPage + 1))}
            className={`cursor-pointer ${isLastPage ? 'opacity-50 pointer-events-none' : ''}`}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}


export default Gallery;