export function Hero() {
  return (
    <div className="h-[600px] relative">
      <div
        className="absolute inset-0 bg-cover z-[-1]"
        style={{
          backgroundImage:
            "url(https://image.wedmegood.com/resized/1900X/uploads/city_bg_image/1/delhi_bg.jpeg), linear-gradient(to top, black, transparent)",
          backgroundBlendMode: "overlay",
          backgroundPosition: "center",
        }}
      ></div>

      <div className="flex flex-col gap-3 text-center items-center h-full justify-end text-white">
        <p className="text-4xl font-bold">Your Wedding Your Way</p>
        <p className="text-xl">
          Find the best wedding vendors with thousands of trusted reviews
        </p>
      </div>
    </div>
  );
}
