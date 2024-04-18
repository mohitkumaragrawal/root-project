import { FaXTwitter } from "react-icons/fa6";
import { SiFacebook } from "react-icons/si";
import { FaInstagram, FaYoutube } from "react-icons/fa";

const ICON_SIZE = 18;

export const socialMedia = [
  {
    name: "Facebook",
    link: "#",
    icon: <SiFacebook size={ICON_SIZE} />,
  },
  {
    name: "Twitter",
    link: "#",
    icon: <FaXTwitter size={ICON_SIZE} />,
  },
  {
    name: "Instagram",
    link: "#",
    icon: <FaInstagram size={ICON_SIZE} />,
  },
  {
    name: "Youtube",
    link: "#",
    icon: <FaYoutube size={ICON_SIZE} />,
  },
];
