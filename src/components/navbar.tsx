import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

import { venueCity, venueType } from "@/data/venue-category-data";
import { useFirebase } from "../context/Firebase";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

import { IoMdMenu } from "react-icons/io";
import { User } from "firebase/auth";
import { LogOut } from "lucide-react";
import { FaGoogle } from "react-icons/fa";

import logo from "@/assets/logo-removebg-preview.png";

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
  };

  const firebaseUser = firebase.user as User | null;

  return (
    <div className="h-18 flex items-center text-white px-5 shadow-pink-900/[0.3] shadow-md bg-[#D20062]">
      <div
        onClick={props.onOpen}
        className="lg:hidden p-0 bg-transparent flex items-center justify-center cursor-pointer rounded-full"
      >
        <IoMdMenu size={24} className="mr-3" />
      </div>
      <Link to="/">
        <img
          src={logo}
          referrerPolicy="no-referrer"
          className="h-16 w-auto brightness-[200]"
        />
      </Link>

      <NavigationMenu className="hidden lg:block pl-20">
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
              <Link to="/vendor">Vendors</Link>
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
                          className="text-gray-800 hover:underline cursor-pointer text-sm"
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

      <Link to="/gallary">
        <Button className="hidden lg:block" variant="ghost">
          Gallary
        </Button>
      </Link>

      <div className="flex-1" />
      {firebaseUser ? (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="overflow-hidden rounded-full"
            >
              <img
                src={firebaseUser?.photoURL ?? ""}
                alt="profile imge"
                referrerPolicy="no-referrer"
                className="h-full w-full object-cover"
              />
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent align="end">
            <DropdownMenuLabel className="flex gap-4 p-5">
              <img
                src={firebaseUser?.photoURL ?? ""}
                alt="profile imge"
                className="h-10 w-10 overflow-hidden rounded-full object-cover"
              />
              <div>
                <p>{firebaseUser.displayName}</p>
                <p className="font-normal opacity-60">{firebaseUser.email}</p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => firebase.logOut()}>
              <LogOut className="mr-3" />
              Sign out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <Button onClick={handleSignin} variant="secondary">
          <FaGoogle className="mr-2" />
          Sign in
        </Button>
      )}
    </div>
  );
}

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
