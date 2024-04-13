import Container from "@/components/container";
import { Gallary } from "@/components/home/gallary";
import { Hero } from "@/components/home/hero";
import { PopuplarSearches } from "@/components/home/popular-searches";
import { WeddingCategories } from "@/components/home/wedding-categories";
import { getAllDocs } from "@/lib/test-collection";
import { Loader } from "lucide-react";
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
        <Gallary />
      </Container>

      <div className="animate-spin size-10 origin-center">
        <Loader />
      </div>
    </>
  );
}
