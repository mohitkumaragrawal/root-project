import Container from "@/components/container";

function Gallery() {
  const imageUrls = [
    "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg",
  ];

  // Splitting imageUrls into chunks of 3 for each row
  const chunkedUrls = imageUrls.reduce((resultArray, item, index) => {
    const chunkIndex = Math.floor(index / 3);

    if (!resultArray[chunkIndex]) {
      resultArray[chunkIndex] = [];
    }

    resultArray[chunkIndex].push(item);

    return resultArray;
  }, []);

  return (
    <Container className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4 ">
      {chunkedUrls.map((chunk, index) => (
        <div key={index} className="grid gap-4">
          {chunk.map((imageUrl, idx) => (
            <div key={idx} className="">
              <div className="bg-white rounded-lg overflow-hidden shadow-md shadow-pink-200">
                <img
                  className="h-auto max-w-full rounded-lg"
                  src={imageUrl}
                  alt={`Image ${index * 3 + idx + 1}`}
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">
                    Nilofer and Subir
                  </h3>
                  <p className="text-gray-600">
                    Real Wedding, Delhi NCR, royal bridal lehenga with an old
                    world charm
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </Container>
  );
}

export default Gallery;
