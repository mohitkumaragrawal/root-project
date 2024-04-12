import Container from "@/components/container";
import React from "react";

function Gallery() {
  const cardTexts = [
    {
      title: "Nilofer and Subir",
      description:
        "Real Wedding, Delhi NCR, royal bridal lehenga with an old world charm",
    },
    { title: "Another Title", description: "Another Description" },
  ];

  return (
    <Container className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
      {Array.from({ length: 15 }).map((imageUrl, index) => (
        <div key={index} className="w-full max-w-md">
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <img
              className="w-full h-full object-center"
              src={`https://picsum.photos/1200/1200?random=${index}`}
              alt={`Image ${index + 1}`}
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">
                {cardTexts[index % cardTexts.length].title}
              </h3>
              <p className="text-gray-600">
                {cardTexts[index % cardTexts.length].description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </Container>
  );
}

export default Gallery;
