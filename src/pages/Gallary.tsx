import Container from "@/components/container";
import React from "react";
import { useFirebase } from "@/context/Firebase";

function Gallery() {
  const [imageUrls, setimageUrls] = React.useState([]);
  const firebase = useFirebase();

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        await firebase.viewImages().then((v) => {
          setimageUrls(v);
          // console.log(v);
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // Splitting imageUrls into chunks of 3 for each row
  const chunkedUrls = imageUrls?.reduce((resultArray, item, index) => {
    const chunkIndex = Math.floor(index / 3);

    if (!resultArray[chunkIndex]) {
      resultArray[chunkIndex] = [];
    }

    resultArray[chunkIndex].push(item);

    return resultArray;
  }, []);

  return (
    <Container className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4 ">
      {chunkedUrls?.map((chunk, index) => (
        <div key={index} className="grid gap-4">
          {chunk.map((data, idx) => (
            <div key={idx} className="">
              <div className="bg-white rounded-lg overflow-hidden shadow-md shadow-pink-200">
                <img
                  className="h-auto max-w-full rounded-lg"
                  src={data?.imageUrl}
                  alt={`Image ${index * 3 + idx + 1}`}
                />
              </div>
            </div>
          ))}
        </div>
      ))}
    </Container>
  );
}

export default Gallery;
