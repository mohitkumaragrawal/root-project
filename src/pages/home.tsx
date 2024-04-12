import Container from "@/components/container";
import { Hero } from "@/components/home/hero";
import { PopuplarSearches } from "@/components/home/popular-searches";
import { WeddingCategories } from "@/components/home/wedding-categories";
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
      <Container>
        <PopuplarSearches />
        <WeddingCategories />
      </Container>
    </>
  );
}
