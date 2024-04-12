import { popularSearches } from "@/data/popular-searches";

export function PopuplarSearches() {
  return (
    <section className="mb-12">
      <h2 className="text-xl font-bold my-5">Popular Searches</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {popularSearches.popular_searches.map((search, index) => (
          <div
            className="border border-rose-200 rounded-lg overflow-hidden flex flex-col lg:flex-row shadow-lg shadow-pink-200"
            key={index}
          >
            <img
              src={search.image_url}
              alt={search.title}
              className="w-full lg:w-48 h-32 object-cover"
            />
            <div className="p-5 space-y-3">
              <p className="font-bold">{search.title}</p>
              <p className="underline text-rose-600 underline-offset-4 cursor-pointer text-sm">
                All Localities
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
