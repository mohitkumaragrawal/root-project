import { CardWithForm } from "@/components/index/card";
import Container from "@/components/container";
import { useEffect, useState } from "react";
import { useFirebase } from "@/context/Firebase";
import { useNavigate, useParams, useRoutes } from "react-router-dom";

const validVendors = ["venue", "photographer", "music"];

const Result = () => {
  const [data, setData] = useState([]);
  const [img, setImg] = useState([]);
  const [city, setCity] = useState("");
  const [type, setType] = useState("");

  const firebase = useFirebase();
  const navigate = useNavigate();

  // read the url params
  const { vendor } = useParams();

  if (!validVendors.includes(vendor)) {
    navigate("*");
  }

  useEffect(() => {
    const currentUrl = window.location.href;
    const urlParams = new URLSearchParams(currentUrl.split('?')[1]);
    const city = urlParams.get('city');
    const type = urlParams.get('type');
    setCity(city);
    setType(type);
    const fetchData = async () => {
      try {
        if (city && type) {
          await firebase.queryVenues(city, type).then((venues) => {
            setData(venues);
          });
        }
        else {
          await firebase.viewVendors(vendor).then((v) => {
            setData(v);
          });
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  function capitalizeAndPluralize(word) {
    if (!word) {
      return '';
    }
    const capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);
    const pluralizedWord = capitalizedWord + 's';

    return pluralizedWord;
  }
  return (
    <>
      {data ? (
        <div>
          <Container>
            <h1 className="font-bold text-3xl">
              {capitalizeAndPluralize(vendor)}
            </h1>
            {data ? (
              <>
                Showing <strong>{data.length}</strong> results
              </>
            ) : (
              'Loading...'
            )}
          </Container>
          <Container className="flex flex-wrap gap-5 items-center justify-center mb-12">
            {data.map((item, index) => (
              <div className="w-[400px]">
                <CardWithForm key={index} {...item} vendor={vendor} />
              </div>
            ))}
          </Container>
        </div>
      ) : (
        <div>Loading..</div>
      )}
    </>
  );
};

export default Result;
