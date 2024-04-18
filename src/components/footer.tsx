import { MailIcon, PhoneIcon } from "lucide-react";
import Container from "./container";

import { socialMedia } from "@/data/social-media";
import { footerLinks } from "@/data/footer-links";

function ContactUs() {
  return (
    <div className="mt-12">
      <p className="font-bold text-lg text-rose-500">
        Contact us to get best deals
      </p>

      <div className="flex mt-5 gap-12 flex-wrap">
        <div className="space-y-2">
          <p className="font-bold text-rose-500">For Vendors</p>
          <p className="flex items-center gap-1 text-gray-800">
            <MailIcon size={18} className="text-rose-500" />
            vendors@root.com
          </p>
          <p className="flex items-center gap-1 text-gray-800">
            <PhoneIcon size={18} className="text-rose-500" />
            +91 99999999
          </p>
        </div>
        {/* <div className="border-l-2 border-rose-300"></div> */}
        <div className="space-y-2">
          <p className="font-bold text-rose-500">For Users</p>
          <p className="flex items-center gap-1 text-gray-800">
            <MailIcon size={18} className="text-rose-500" />
            vendors@root.com
          </p>
          <p className="flex items-center gap-1 text-gray-800">
            <PhoneIcon size={18} className="text-rose-500" />
            +91 99999999
          </p>
        </div>
      </div>
    </div>
  );
}

function Address() {
  return (
    <div className="mt-12">
      <p className="font-bold text-lg text-rose-500">
        Contact us to get best deals
      </p>
      <p className="mt-3 text-gray-800">
        Second Floor, Ocus Technopolis, Sector 54 Golf Course Road, Gurgaon,
        Haryana, India, 122002
      </p>
    </div>
  );
}

function FollowUs() {
  return (
    <div className="mt-12">
      <p className="font-bold text-lg text-rose-500">Follow us on</p>
      <ul className="space-y-2 mt-5">
        {socialMedia.map((social, index) => (
          <li className="flex gap-2 items-center text-gray-800" key={index}>
            <span className="text-rose-500">{social.icon}</span> {social.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

function FooterLinks() {
  return (
    <div className="flex flex-wrap gap-8 mt-12 justify-between border-t-2 border-rose-300 pt-12">
      {footerLinks.map((group, index) => (
        <div className="min-w-[200px]" key={index}>
          <p className="font-bold text-rose-500 mb-3">{group.category}</p>
          {
            <ul className="space-y-1">
              {group.links.map((link, index) => (
                <li key={index}>
                  <a href={link.link} className="text-gray-800">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          }
        </div>
      ))}
    </div>
  );
}

export function Footer() {
  return (
    <div className="border-t-2 border-rose-300 pb-12">
      <Container className="px-4 sm:px-6">
        <p className="font-bold text-lg text-rose-500 my-3">
          Wedding Central - Your Ultimate Wedding Planning Destination
        </p>
        <p className="text-gray-800 my-3">Discover the Perfect Wedding Experience with Us</p>
        <p className="text-gray-800">
          Wedding Central is your premier Indian wedding planning platform, offering a seamless website. Explore a curated selection of top-notch wedding vendors, complete with transparent pricing and authentic reviews, all at your fingertips. Whether you're searching for seasoned wedding planners, elite photographers, or seeking inspiration and ideas for your big day, Wedding Central is your go-to solution. Our innovative features streamline your wedding planning journey, offering a comprehensive checklist, an extensive vendor directory and a captivating inspiration gallery. Say goodbye to endless hours of planning; let Wedding Central transform your wedding dreams into reality effortlessly.
        </p>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-1">
            <ContactUs />
            <Address />
          </div>
          <div className="flex-1">
            <FollowUs />
          </div>
        </div>

        <FooterLinks />
      </Container>
    </div>
  );
}
