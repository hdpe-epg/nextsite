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
                  <li className="md:ml-4"><Link href="/" title="Home/" target="_blank">Home</Link></li>
                  <li className="md:ml-4"><Link href="/pipe/" title="Pipe" target="_blank">Pipe</Link></li>
                  <li className="md:ml-4"><Link href="/fusion-services/" title="Fusion Services" target="_blank">Fusion Services</Link></li>
                  <li className="md:ml-4"><Link href="/technical-data/" title="Technical Data" target="_blank">Technical Data</Link></li>
                  <li className="md:ml-4"><Link href="/locations/" title="Contact HDPE" target="_blank">Contact</Link></li>
                  {/* <li><Link href="" title="Careers" target="_blank">Careers</Link></li> */}
                </ul>
              </div>
              <div className={`text-center md:text-left `}>
                <h2 className="text-2xl mb-4 font-bold text-white">LOCATIONS</h2>
                <ul className="m-0 list-none p-0 uppercase">
                  <li className="md:ml-4"><Link href="/langley-engineered-pipe-group/" title="British Columbia Engineered Pipe Group" target="_blank">British Columbia</Link></li>
                  <li className="md:ml-4"><Link href="/edmonton-engineered-pipe-group/" title="Alberta Egineered Pipe Group" target="_blank">Alberta</Link></li>
                  <li className="md:ml-4"><Link href="/saskatoon-engineered-pipe-group/" title="Saskatchewan Engineered Pipe Group" target="_blank">Saskatchewan</Link></li>
                  <li className="md:ml-4"><Link href="/laval-engineered-pipe-group/" title="Quebec Engineered Pipe Group" target="_blank">Quebec</Link></li>
                  <li className="md:ml-4"><Link href="/maritime-engineered-pipe-group/" title="Maritime or Atlantic Contact for  Engineered Pipe Group" target="_blank">Maritime Provinces</Link></li>
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
