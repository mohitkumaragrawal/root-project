import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { venueCity, venueType } from "@/data/venue-category-data";
import { useFirebase } from "../context/Firebase";
import { cn } from "@/lib/utils";
import { forwardRef } from "react";
import { Link } from "react-router-dom";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];

export function Navbar() {
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
  }
  return (
    <div className="h-16 bg-rose-600 flex items-center text-white px-10 shadow-rose-400 shadow-md">
      <Link to="/">
        <div className="mr-10 text-lg font-bold">RooT</div>
      </Link>

      <NavigationMenu>
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
                      <li className="my-2 text-sm text-muted-foreground cursor-pointer hover:underline">
                        {type.title}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="w-full h-full p-3 bg-gray-100">
                  <h3 className="font-bold text-rose-600">By City</h3>
                  <ul>
                    {venueCity.map((type) => (
                      <li className="my-2 text-sm text-muted-foreground cursor-pointer hover:underline">
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
                      <li className="my-2 text-sm text-muted-foreground cursor-pointer hover:underline text-center">
                        <img
                          src={`https://picsum.photos/1000/1000?random=${index}`}
                          className="w-full h-[120px] rounded-lg overflow-hidden"
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
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                {components.map((component) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    href={component.href}
                  >
                    {component.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem >
            <button onClick={handleSignin} >Sign in</button>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

const ListItem = forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
