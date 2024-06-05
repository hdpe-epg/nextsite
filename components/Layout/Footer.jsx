// import { PrismicLink } from '@prismicio/react'
import * as React from "react";
import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  React.useEffect(() => {
    const year = new Date().getFullYear();
    document.querySelector("#copyright-year").innerHTML = year;
  }, []);

  return (
    <>
      <footer className="footer text-primary mt-auto bg-brand-secondary py-20 text-white">
        {/*--------*/}
        {/*container for inner content */}
        {/*--------*/}

        {/*--------*/}
        {/*left grid*/}
        {/*--------*/}

        {/*container for inner content that has two flex boxes, */}
        <div className="mx-auto flex max-w-screen-xl flex-col items-center gap-y-16 md:flex-row md:justify-between">
          <div>
            <Image
              src="/epg-footer-logo-v2.svg"
              alt="EPG logo"
              width={290}
              height={270}
            />
          </div>

          {/*--------*/}
          {/*right grid*/}
          {/*--------*/}
          <div>
            {/*inner content -------- */}
            <div className="flex flex-col items-center gap-8 md:flex-row md:items-start">
              {/*social images --------*/}
              <div>
                <h2 className="text-2xl mb-4 font-bold text-white">SOCIAL</h2>
                {/*TODO: center images on small, left align to md*/}
                <Image
                  className="mb-4 mx-auto md:ml-4"
                  src="/linkedin-v2.svg"
                  alt="EPG LinkedIn Page"
                  width={50}
                  height={50}
                />
                <Image
                className=" mx-auto md:ml-4"
                  src="/facebook-v2.svg"
                  alt="EPG Facebook Page"
                  width={50}
                  height={50}
                />
              </div>
              <div className={`text-center md:text-left `}>
                <h2 className="text-2xl mb-4 font-bold text-white">LINKS</h2>
                <ul className="m-0 list-none p-0 uppercase">
                  <GetNavigationItems />
                </ul>
              </div>
              <div className={`text-center md:text-left `}>
                <h2 className="text-2xl mb-4 font-bold text-white">LOCATIONS</h2>
                <ul className="m-0 list-none p-0 uppercase">
                  <GetLocationsItems />
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/*--------*/}
      {/*bottom footer / clout / policy */}
      <div className="bg-black py-4 text-xs text-white">
        {/*inner container flex box*/}
        {/*TODO: confirm the privacy and ethics links are needed*/}
        <div className="mx-auto flex max-w-screen-xl flex-col items-center gap-y-8 text-center md:flex-row md:justify-between">
          <p className="text-white text-sm mb-0">
            Copyright ©{" "}
            <span id="copyright-year">
              sit tight while we figure out what year it is
            </span>{" "}
            - All right reserved | Vancouver Web Design by{" "}
            <a
              href="https://rawmedia.ca"
              title="Vancouver Digital Marketing Agency Raw Media"
              target="blank"
              rel="noopener noreferrer"
            >
              Raw Media
            </a>
          </p>
        </div>
      </div>
    </>
  );
};
export default Footer;


const GetNavigationItems = () => {
  const linksItems = [
    { href: "/", title: "Home", target: "_blank" },
    { href: "/pipe/", title: "Pipe", target: "_blank" },
    { href: "/water-treatment/", title: "Water Treatment", target: "_blank" },
    { href: "/fusion-services/", title: "Fusion Services", target: "_blank" },
    { href: "/resources/", title: "Resources", target: "_blank" },
    { href: "/locations/", title: "Contact", target: "_blank" },
    { href: "https://emco.ca/cloud/uploads/EN-Emco-Corporation-Modern-Slavery-Report.pdf", title: "Modern Slavery Report", target: "_blank" },
  ];

  return linksItems.map((item, index) => (
      <li key={index} className="md:ml-4">
        <Link href={item.href} title={item.title} target={item.target}>
          {item.title}
        </Link>
      </li>
  ));
};

const GetLocationsItems = () => {
  const locationsItems = [
    { href: "/langley-engineered-pipe-group/", title: "British Columbia", target: "_blank" },
    { href: "/edmonton-engineered-pipe-group/", title: "Alberta", target: "_blank" },
    { href: "/saskatoon-engineered-pipe-group/", title: "Saskatchewan", target: "_blank" },
    { href: "/laval-engineered-pipe-group/", title: "Quebec", target: "_blank" },
    { href: "/maritime-engineered-pipe-group/", title: "Atlantic", target: "_blank" },
  ];

  return locationsItems.map((item, index) => (
      <li key={index} className="md:ml-4">
        <Link href={item.href} title={item.title} target={item.target}>
          {item.title}
        </Link>
      </li>
  ));
};
