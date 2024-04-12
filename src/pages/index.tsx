import { CardWithForm } from "@/components/index/card";
import Container from "@/components/container";

const Result = () => {
  return (
    <>
      <Container>
        <h1 className="font-bold text-3xl">
          {"4 Star & Above Wedding Hotels in Surat"}
        </h1>
        <h2 className="text-gray-700">
          Showing 7 results as per your search criteria
        </h2>
      </Container>
      <Container className="flex flex-wrap gap-5 items-center justify-center mb-12">
        {data.map((item, index) => (
          <div className="w-[400px]">
            <CardWithForm key={index} {...item} />
          </div>
        ))}
      </Container>
    </>
  );
};

export default Result;

const data = [
  {
    image_url:
      "https://image.wedmegood.com/resized/450X/uploads/member/3691605/1668600326___M_0407_a.jpg?crop=8,313,1870,1052",
    title: "The Fern Seaside Luxurious Tent Resort",
    location: "Surat",
    rates: [
      {
        service: "Veg",
        rate: 1250,
      },
      {
        service: "Non veg",
        rate: 1500,
      },
    ],
    features: [
      "100-500 pax",
      "81 Rooms",
      "Banquet Halls",
      "Outdoor Seating",
      "Swimming Pool",
    ],
  },
  {
    image_url:
      "https://image.wedmegood.com/resized/450X/uploads/member/926528/1576589565_Screenshot_23.png",
    title: "Rajhans Belliza",
    location: "Surat",
    rates: [
      {
        service: "Veg",
        rate: 800,
      },
    ],
    features: [
      "65-100 pax",
      "279 Rooms",
      "Conference Facilities",
      "Gym",
      "Spa",
    ],
  },
  {
    image_url:
      "https://image.wedmegood.com/resized/450X/uploads/member/732102/1575111736_zz8.png",
    title: "The Gateway Hotel Athwalines",
    location: "Surat",
    rates: [
      {
        service: "Veg",
        rate: 1200,
      },
      {
        service: "Non veg",
        rate: 1500,
      },
    ],
    features: [
      "50-250 pax",
      "206 Rooms",
      "Wedding Planning Services",
      "Bar/Lounge",
      "Fitness Center",
    ],
  },
  {
    image_url:
      "https://image.wedmegood.com/resized/450X/uploads/member/3818970/1671192016_0938.jpg?crop=24,49,946,532",
    title: "Bhanu the Fern Resort & Spa, Jambughoda",
    location: "Surat",
    rates: [
      {
        service: "Veg",
        rate: 1000,
      },
      {
        service: "Non veg",
        rate: 1300,
      },
    ],
    features: [
      "1000-1200 pax",
      "84 Rooms",
      "Spacious Lawns",
      "Indoor Games",
      "Barbecue Facilities",
    ],
  },
  {
    image_url:
      "https://image.wedmegood.com/resized/450X/uploads/member/1173226/1586180916_Screenshot_from_2020_04_06_19_04_45.png",
    title: "Surat Marriott Hotel",
    location: "Dumas Road, Surat",
    rates: [
      {
        service: "Veg",
        rate: 2500,
      },
      {
        service: "Non veg",
        rate: 3000,
      },
    ],
    features: [
      "100-350 pax",
      "204 Rooms",
      "Grand Ballroom",
      "Business Center",
      "Concierge Service",
    ],
  },
  {
    image_url:
      "https://image.wedmegood.com/resized/450X/uploads/member/917964/1576497810_Screenshot_from_2019_12_16_17_32_51.png",
    title: "Ginger Hotel",
    location: "Piplod, Surat",
    rates: [
      {
        service: "Veg",
        rate: 450,
      },
      {
        service: "Non veg",
        rate: 650,
      },
    ],
    features: [
      "40-120 pax",
      "98 Rooms",
      "Complimentary Breakfast",
      "Airport Shuttle",
      "Wheelchair Accessible",
    ],
  },
  {
    image_url:
      "https://image.wedmegood.com/resized/450X/uploads/member/916335/1576491879_Screenshot_from_2019_12_16_15_54_11.png",
    title: "Courtyard by Marriott Surat",
    location: "Bhatpore, Surat",
    rates: [
      {
        service: "Veg",
        rate: 1800,
      },
      {
        service: "Non veg",
        rate: 1800,
      },
    ],
    features: [
      "30-400 pax",
      "133 Rooms",
      "Indoor Pool",
      "Hot Tub",
      "Fitness Classes",
    ],
  },
];
