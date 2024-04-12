import { weddingCategores } from "@/data/wedding-categories";

export function WeddingCategories() {
  const colors = [
    "bg-yellow-200",
    "bg-rose-200",
    "bg-blue-200",
    "bg-orange-200",
    "bg-red-200",
    "bg-violet-200",
  ];
  const shadowColors = [
    "shadow-yellow-200",
    "shadow-rose-200",
    "shadow-blue-200",
    "shadow-orange-200",
    "shadow-red-200",
    "shadow-violet-200",
  ];

  return (
    <section className="mb-12">
      <h2 className="text-xl font-bold my-5">Weddding Categories</h2>
      <div className="grid sm:grid-cols-2 gap-5">
        {weddingCategores.map((category, index) => (
          <div
            className={`p-5 rounded-md w-full ${colors[index]} ${shadowColors[index]} shadow-lg cursor-pointer`}
          >
            <p className="font-bold">{category.title}</p>
            <p className="text-gray-700">{category.subtittle}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
