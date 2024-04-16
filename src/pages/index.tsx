import { CardWithForm } from "@/components/index/card";
import Container from "@/components/container";
import { useEffect, useState } from "react";
import { useFirebase } from "@/context/Firebase";

const Result = () => {
  const [data, setData] = useState([]);
  const [img, setImg] = useState([]);
  const firebase = useFirebase();

  useEffect(() => {
    const fetchData = async () => {
      try {
        await firebase.viewVendors("venue").then((v) => {
          setData(v);
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {
        data ? (<div>
          <Container>
            <h1 className="font-bold text-3xl" >
              {"4 Star & Above Wedding Hotels in Surat"}
            </h1>
            <h2 className="text-gray-700">
              Showing 7 results as per your search criteria
            </h2>
          </Container>
          <Container className="flex flex-wrap gap-5 items-center justify-center mb-12">

            {data.map((item, index) => (
              <div className="w-[400px]">
                <CardWithForm key={index} {...item} />
              </div>
            ))}
          </Container>
        </div>) : (<div>Loading..</div>)
      }
    </>
  );
};

export default Result;

