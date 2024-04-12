import { FaVenus, FaMusic } from "react-icons/fa";
import { GiLipstick, GiLotusFlower } from "react-icons/gi";
import { MdOutlineEco, MdOutlineHomeWork } from "react-icons/md";
import { PiFlowerLotus } from "react-icons/pi";

import { FaHamburger } from "react-icons/fa";

export const sidebarData = [
  {
    name: "Venues",
    link: "/vendors/pune/wedding-venues/",
    icon: <MdOutlineHomeWork size={24} />,
    subcategories: [
      {
        name: "Banquet Halls",
        link: "/vendors/pune/wedding-venues/all/banquet-hall/",
      },
      {
        name: "Lawns / Farmhouses",
        link: "/vendors/pune/wedding-venues/all/lawn-farmhouse/",
      },
      {
        name: "Wedding Resorts",
        link: "/vendors/pune/wedding-venues/all/resort/",
      },
      {
        name: "Small Function / Party Halls",
        link: "/vendors/pune/wedding-venues/all/small-function-halls/",
      },
      {
        name: "Destination Wedding",
        link: "/vendors/pune/wedding-venues/all/destination-wedding-venues/",
      },
      {
        name: "Kalyana Mandapams",
        link: "/vendors/pune/wedding-venues/all/kalyan-mandapam/",
      },
      {
        name: "4 Star & Above Wedding Hotels",
        link: "/vendors/pune/wedding-venues/all/five-star/",
      },
    ],
  },
  {
    name: "Makeup",
    icon: <GiLipstick size={24} />,
    link: "/vendors/pune/bridal-makeup/",
    subcategories: [
      { name: "Family Makeup", link: "/vendors/pune/family-makeup/" },
    ],
  },
  {
    name: "Planning & Decor",
    icon: <PiFlowerLotus size={24} />,
    link: "/vendors/pune/planners/",
    subcategories: [
      { name: "Decorators", link: "/vendors/pune/wedding-decorators/" },
      {
        name: "Small Function Decor",
        link: "/vendors/pune/home-wedding-decorators/",
      },
    ],
  },
  {
    name: "Music & Dance",
    link: "/vendors/pune/djs/",
    icon: <FaMusic size={24} />,
    subcategories: [
      {
        name: "Sangeet Choreographer",
        link: "/vendors/pune/sangeet-choreographers/",
      },
      {
        name: "Wedding Entertainment",
        link: "/vendors/pune/wedding-entertainment/",
      },
    ],
  },
  {
    name: "Food",
    icon: <FaHamburger size={24} />,
    link: "/vendors/pune/wedding-catering/",
    subcategories: [
      { name: "Cake", link: "/vendors/pune/wedding-cakes/" },
      {
        name: "Chaat & Food Stalls",
        link: "/vendors/pune/wedding-catering/all/chaat-food-stalls/",
      },
      { name: "Bartenders", link: "/vendors/pune/bartenders-wedding/" },
      { name: "Home Catering", link: "/vendors/pune/home-catering/" },
    ],
  },
];

export const sidebarLinks = [];
