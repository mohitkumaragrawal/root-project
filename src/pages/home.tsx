import { Hero } from "@/components/home/hero";
import { getAllDocs } from "@/lib/test-collection";
import { useEffect } from "react";

export default function HomePage() {
  const fetchData = async () => {
    const data = await getAllDocs();
    console.log(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Hero />
    </>
  );
}
