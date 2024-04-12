const data = {
  gallery: [
    {
      category: "Bridal Lehenga",
      image_url:
        "https://image.wedmegood.com/resized/300X/uploads/im_cat_image/36/bridal-lehenga.jpg",
      link: "/photos/bridal-lehenga",
    },
    {
      category: "Outfits",
      image_url:
        "https://image.wedmegood.com/resized/300X/uploads/im_cat_image/4/outfits.jpg",
      link: "/photos/wedding-dresses",
    },
    {
      category: "Blouse Designs",
      image_url:
        "https://image.wedmegood.com/resized/300X/uploads/im_cat_image/37/blouse-designs.jpg",
      link: "/photos/blouse-designs",
    },
    {
      category: "Wedding Sarees",
      image_url:
        "https://image.wedmegood.com/resized/300X/uploads/im_cat_image/38/sarees.jpg",
      link: "/photos/wedding-sarees",
    },
    {
      category: "Mehndi Designs",
      image_url:
        "https://image.wedmegood.com/resized/300X/uploads/im_cat_image/33/mehndi.jpg",
      link: "/photos/mehndi-designs",
    },
  ],
};

export function Gallary() {
  return (
    <section className="mb-12">
      <h2 className="text-xl font-bold my-5">Gallary to Look for</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-5">
        {data.gallery.map((g, idx) => (
          <div
            className="border-2 border-pink-300 rounded-md overflow-hidden shadow-lg shadow-pink-200"
            key={idx}
          >
            <img
              src={g.image_url}
              className="w-full h-48 object-cover"
              alt={g.category}
              referrerPolicy="no-referrer"
            />
            <p className="p-3 font-bold">{g.category}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
