import Container from "@/components/container";
import { Gallary } from "@/components/home/gallary";
import { Hero } from "@/components/home/hero";
import { PopuplarSearches } from "@/components/home/popular-searches";
import { WeddingCategories } from "@/components/home/wedding-categories";
import { useEffect } from "react";

export default function VendorPage() {
  return (
    <Container className="mb-36">
      <WeddingCategories />
    </Container>
  );
}
