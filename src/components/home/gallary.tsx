import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { IconRight } from "react-day-picker";
import { useState, useEffect } from "react";
import { useFirebase } from "@/context/Firebase";

export function Gallary() {
  const [data, setData] = useState([]);
  const firebase = useFirebase();
  useEffect(() => {

    const fetchData = async () => {
      try {
        const images = await firebase.viewImages();
        setData(images);

      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  const currentImages = data.slice(0, 5);
  console.log(currentImages);
  return (
    <section className="mb-12">
      <h2 className="text-xl font-bold my-5">Gallery to Look for</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-[1fr_1fr_1fr_1fr_1fr_0.3fr] gap-5 place-items-center">
        {currentImages.map((g, idx) => (
          <div
            className="border-2 border-pink-300 rounded-md overflow-hidden shadow-lg shadow-pink-200 w-full h-fullk
            "
            key={idx}
          >
            <img
              src={g.imageUrl}
              className="w-full h-48 object-cover"
              alt={g.category}
              referrerPolicy="no-referrer"
            />

          </div>
        ))}

        <div className="items-center animate-bounce-horz">
          <Link to="/gallery">
            <Button className="size-12 rounded-full">
              <IconRight />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
