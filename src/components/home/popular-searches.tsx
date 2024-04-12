import { popularSearches } from "@/data/popular-searches";

export function PopuplarSearches() {
  return (
    <section className="mb-12">
      <h2 className="text-xl font-bold my-5">Popular Searches</h2>
      <div className="grid grid-cols-2 gap-5">
        {popularSearches.popular_searches.map((search, index) => (
          <div className="" key={index}></div>
        ))}
      </div>
    </section>
  );
}
