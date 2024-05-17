import { popularSearches } from "@/data/popular-searches";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useFirebase } from "@/context/Firebase";

export function PopuplarSearches() {
  const firebase = useFirebase();
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        await firebase.viewVendors("venue", 6).then((v) => {
          setData(v);
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <section className="mb-12">
      <h2 className="text-xl font-bold my-5">Popular Searches</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {data.map((search, index) => (
          <Link to={`/vendor/venue/${search.id}`}>
            <div
              className="border border-rose-200 rounded-lg overflow-hidden flex flex-col lg:flex-row shadow-lg shadow-pink-200"
              key={index}
            >
              <img
                src={search.urls[0]}
                alt={search.title}
                className="w-full lg:w-48 h-32 object-cover"
              />
              <div className="p-5 space-y-3">
                <p className="font-bold">{search.title}</p>
                <p className=" text-rose-600 cursor-pointer text-sm">Explore</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
