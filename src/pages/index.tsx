import { CardWithForm } from "@/components/index/card";
import Container from "@/components/container";
import { useEffect, useMemo, useState } from "react";
import { useFirebase } from "@/context/Firebase";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { PageBreadcrumbs } from "@/components/page-breadcrumb";

const validVendors = ["venue", "photographer", "music"];

const Result = () => {
  const [data, setData] = useState([]);
  const firebase = useFirebase();
  const navigate = useNavigate();
  const { vendor } = useParams();

  const [urlSearchParams] = useSearchParams();
  const city = urlSearchParams.get("city");
  const type = urlSearchParams.get("type");
  if (!validVendors.includes(vendor)) {
    navigate("/404");
  }

  const breadcrumb = useMemo(() => {
    const res = [
      { name: "Home", link: "/" },
      { name: "Vendors", link: "/vendor" },
      { name: vendor, link: `/vendor/${vendor}` },
    ];

    if (!city && !type) return res;

    if (city && type)
      return [
        ...res,
        {
          name: `${city}'s ${type}`,
          link: "#",
        },
      ];

    if (city || type) {
      return [
        ...res,
        {
          name: city || type,
          link: "#",
        },
      ];
    }
    return res;
  }, [city, type, vendor]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (city && type) {
          await firebase.queryVenues(city, type).then((venues) => {
            setData(venues);
          });
        } else {
          await firebase.viewVendors(vendor).then((v) => {
            setData(v);
          });
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [city, type, vendor, firebase]);
  function capitalizeAndPluralize(word) {
    if (!word) {
      return "";
    }
    const capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);
    const pluralizedWord = capitalizedWord + "s";

    return pluralizedWord;
  }
  return (
    <>
      {data ? (
        <div>
          <Container className="mb-0">
            <h1 className="font-bold text-3xl">
              {capitalizeAndPluralize(vendor)}
            </h1>
            {data ? (
              <>
                Showing <strong>{data.length}</strong> results
              </>
            ) : (
              "Loading..."
            )}
          </Container>

          <Container className="mt-9 mb-0">
            <PageBreadcrumbs breadcrumb={breadcrumb} />
          </Container>

          <Container className="flex flex-wrap gap-5 items-center justify-center mb-12 mt-6">
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
