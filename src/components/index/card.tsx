import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CheckIcon, IndianRupee, MapPinIcon } from "lucide-react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
interface Props {
  image_url: string;
  title: string;
  location: string;
  rates: {
    service: string;
    rate: number;
  }[];
  features: string[];
  urls: string[];
}

function clampString(x: string, n: number): string {
  if (x.length <= n) return x;
  return x.substring(0, n - 3) + "...";
}

export function CardWithForm(props: Props) {
  return (
    <Card className="">
      <div className="relative">
        <img
          src={props.urls[0]}
          alt={props.title}
          className="w-full h-[200px] object-cover rounded-t-lg"
        />
      </div>
      <CardHeader className="pb-3">
        <CardTitle className="text-lg">{props.title}</CardTitle>
        <CardDescription className="flex text-gray-600 items-center">
          <MapPinIcon className="mr-2" />{" "}
          <p className="line-clamp-1">{props.location}</p>
        </CardDescription>
      </CardHeader>

      <CardContent>
        <div className="flex gap-8">
          {props.rates.map((rate, index) => (
            <div className="space-y-1" key={index}>
              <p className="text-sm text-gray-600">{rate.service}</p>
              <p className="text-lg text-gray-800 flex items-center font-bold">
                <IndianRupee size={18} /> {rate.rate}
              </p>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex gap-3">
        {props.features.slice(0, 2).map((f, idx) => {
          return (
            <p
              className="text-gray-600 text-xs px-2 py-1 bg-gray-200"
              key={idx}
            >
              {clampString(f, 22)}
            </p>
          );
        })}

        {props.features.length > 2 && (
          <HoverCard openDelay={0} closeDelay={0}>
            <HoverCardTrigger>
              <p className="text-xs text-pink-500 underline underline-offset-2 cursor-pointer">
                +{props.features.length - 2} More
              </p>
            </HoverCardTrigger>
            <HoverCardContent side="right" className="flex flex-col">
              {props.features.slice(2).map((f, idx) => (
                <div
                  className="text-gray-600 text-xs px-2 py-1 flex items-center"
                  key={idx}
                >
                  <CheckIcon
                    size={16}
                    className="mr-2 text-green-500 min-w-[30px]"
                  />{" "}
                  <p className="line-clamp-2">{f}</p>
                </div>
              ))}
            </HoverCardContent>
          </HoverCard>
        )}
      </CardFooter>
    </Card>
  );
}
