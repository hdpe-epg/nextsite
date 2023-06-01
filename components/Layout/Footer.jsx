// import { PrismicLink } from '@prismicio/react'
import * as React from "react";
import Image from "next/image";

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
                <h2 className="mb-4 font-bold">SOCIAL</h2>
                {/*TODO: center images on small, left align to md*/}
                <Image
                  className="mb-4"
                  src="/linkedin-v2.svg"
                  alt="EPG LinkedIn Page"
                  width={50}
                  height={50}
                />
                <Image
                  src="/facebook-v2.svg"
                  alt="EPG Facebook Page"
                  width={50}
                  height={50}
                />
              </div>
              <div className={`text-center md:text-left `}>
                <h2 className="mb-4 font-bold">LINKS</h2>
                <ul className="m-0 list-none p-0 uppercase">
                  <li>Home</li>
                  <li>About</li>
                  <li>Services</li>
                  <li>Technical Data</li>
                  <li>Contact</li>
                  <li>Careers</li>
                </ul>
              </div>
              <div className={`text-center md:text-left `}>
                <h2 className="mb-4 font-bold">LOCATIONS</h2>
                <ul className="m-0 list-none p-0 uppercase">
                  <li>British Columbia</li>
                  <li>Alberta</li>
                  <li>Saskatchewan</li>
                  <li>Quebec</li>
                  <li>Maritime Provinces</li>
                  <li>Careers</li>
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
        <div className=" mx-auto flex max-w-screen-xl flex-col items-center gap-y-8 text-center md:flex-row md:justify-between">
          <p>
            Copyright ©{" "}
            <span id="copyright-year">
              sit tight while we figure out what year it is
            </span>{" "}
            - All right reserved | Vancouver Web Design by{" "}
            <a
              href="https://rawmedia.ca"
              title="Vancouver Web Design Raw Media"
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
