import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { venueCity, venueType } from "@/data/venue-category-data";
import { useFirebase } from "../context/Firebase";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

import { IoMdMenu } from "react-icons/io";

const vendorsData = {
  vendors: [
    {
      category: "Photographers",
      links: [
        { name: "Photographers", link: "/vendors/pune/wedding-photographers/" },
      ],
    },
    {
      category: "Makeup",
      links: [
        { name: "Bridal Makeup", link: "/vendors/pune/bridal-makeup/" },
        { name: "Family Makeup", link: "/vendors/pune/family-makeup/" },
      ],
    },
    {
      category: "Planning & Decor",
      links: [
        { name: "Wedding Planners", link: "/vendors/pune/planners/" },
        { name: "Decorators", link: "/vendors/pune/wedding-decorators/" },
        {
          name: "Small Function Decor",
          link: "/vendors/pune/home-wedding-decorators/",
        },
      ],
    },
    {
      category: "Music & Dance",
      links: [
        { name: "DJs", link: "/vendors/pune/djs/" },
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
      category: "Food",
      links: [
        { name: "Catering Services", link: "/vendors/pune/wedding-catering/" },
        { name: "Cake", link: "/vendors/pune/wedding-cakes/" },
        {
          name: "Chaat & Food Stalls",
          link: "/vendors/pune/wedding-catering/all/chaat-food-stalls/",
        },
        { name: "Bartenders", link: "/vendors/pune/bartenders-wedding/" },
      ],
    },
  ],
};

export function Navbar(props: { onOpen: () => void }) {
  const navMenuTriggerStyles = cn(
    "bg-transparent hover:bg-transparent focus:bg-transparent",
    "data-[active]:bg-transparent data-[state=open]:bg-transparent",
    "text-white hover:text-white focus:text-white data-[active]:text-white",
    "data-[active]:aext-bold",
  );
  const firebase = useFirebase();
  const handleSignin = () => {
    firebase.signinWithGoogle();
    console.log("heelo");
  };

  return (
    <div className="h-14 bg-primary flex items-center text-white px-5 shadow-rose-400 shadow-lg">
      <Button onClick={props.onOpen} className="lg:hidden p-0">
        <IoMdMenu size={24} className="mr-3" />
      </Button>

      <Link to="/">
        <div className="mr-10 text-lg font-bold">RooT</div>
      </Link>

      <NavigationMenu className="hidden lg:block">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className={navMenuTriggerStyles}>
              Venues
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="grid-cols-[1.2fr_0.8fr_2fr] w-[900px] grid p-2">
                <div className="w-full h-full p-3">
                  <h3 className="font-bold text-rose-600">By Type</h3>
                  <ul>
                    {venueType.map((type) => (
                      <li className="my-2 text-sm text-gray-800 cursor-pointer hover:underline">
                        {type.title}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="w-full h-full p-3 bg-gray-100">
                  <h3 className="font-bold text-rose-600">By City</h3>
                  <ul>
                    {venueCity.map((type) => (
                      <li className="my-2 text-sm text-gray-800 cursor-pointer hover:underline">
                        {type.title}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="w-full h-full p-3">
                  <h3 className="font-bold text-rose-600">
                    Destination Wedding Venues
                  </h3>
                  <ul className="grid grid-cols-3 grid-rows-2 gap-3">
                    {venueCity.slice(0, 6).map((type, index) => (
                      <li className="my-2 text-sm text-gray-800 cursor-pointer hover:underline text-center">
                        <img
                          src={`https://picsum.photos/1000/1000?random=${index}`}
                          className="w-full h-[120px] rounded-lg overflow-hidden shadow-lg"
                        />
                        {type.title}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className={navMenuTriggerStyles}>
              Vendors
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="grid grid-cols-3 w-[700px] p-5 pt-3">
                {vendorsData.vendors.map((vendor) => (
                  <div className="" key={vendor.category}>
                    <p className="font-bold text-rose-600 py-2">
                      {vendor.category}
                    </p>
                    <ul className="space-y-0">
                      {vendor.links.map((link) => (
                        <li
                          key={link.name}
                          className="text-gray-800 hover:underline cursor-pointer"
                        >
                          {link.name}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <div className="flex-1" />
      <Button onClick={handleSignin} variant="secondary">
        Sign in
      </Button>
    </div>
  );
}
