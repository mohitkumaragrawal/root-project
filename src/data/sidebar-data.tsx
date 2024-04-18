import { FaVenus, FaMusic } from "react-icons/fa";
import { GiLipstick, GiLotusFlower } from "react-icons/gi";
import { MdOutlineEco, MdOutlineHomeWork } from "react-icons/md";
import { PiFlowerLotus } from "react-icons/pi";

import { FaHamburger } from "react-icons/fa";

export const sidebarData = [
  {
    name: "Venues",
    link: "/vendor/venue",
    icon: <MdOutlineHomeWork size={24} />,
    subcategories: [
      {
        name: "Banquet Halls",
        link: "/vendor/venue",
      },
      {
        name: "Lawns / Farmhouses",
        link: "/vendor/venue",
      },
      {
        name: "Wedding Resorts",
        link: "/vendor/venue",
      },
      {
        name: "Small Function / Party Halls",
        link: "/vendor/venue",
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
