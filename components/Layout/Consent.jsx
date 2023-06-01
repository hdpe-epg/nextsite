import * as React from "react";
import { setCookie, hasCookie } from "cookies-next";
import { HiX } from "react-icons/hi";

const Consent = () => {
  const [consent, setConsent] = React.useState(true);
  React.useEffect(() => {
    setConsent(hasCookie(`localConsent`));
    setTimeout(() => {
      let banner = document.querySelector("#consent-banner");
      banner.classList.add("opacity-100");
      banner.classList.remove("opacity-0");
    }, 3500);
  }, []);

  const acceptCookie = () => {
    setConsent(true);
    setCookie(`localConsent`, "true", {
      maxAge: 60 * 60 * 24 * 365,
      sameSite: true,
    });
    gtag("consent", "update", {
      ad_storage: "granted",
      analytics_storage: "granted",
    });
  };
  const denyCookie = () => {
    setConsent(true);
    setCookie("localConsent", "false", {
      maxAge: 60 * 60 * 24 * 14,
      sameSite: true,
    });
  };
  const closeP = () => {
    setConsent(true);
  };
  if (consent === true) {
    return null;
  }

  return (
    <div
      id="consent-banner"
      className={`bg-primary fixed bottom-0 grid w-full bg-opacity-95 p-3 opacity-0 md:grid-cols-5 ${
        consent ? "hidden" : ""
      }`}
    >
      <p className="prose prose-sm mx-auto my-4 px-6 text-left md:col-span-3">
        I respect your right to privacy. Period. If you wish to allow cookies, I
        will get to learn a few things like what pages my readers visit, what
        country they are from, how long they stay, etc. Please choose your
        preference below. Data are only collected if you accept (which is how it
        should be).
      </p>
      <div className="my-4 flex items-center justify-evenly md:col-span-2">
        <button
          className="absolute right-2 top-2"
          onClick={(e) => {
            closeP();
          }}
        >
          <HiX className="text-base-100 h-6 w-6" />
          <span className="sr-only">Close</span>
        </button>
        <button
          onClick={(e) => denyCookie()}
          className="btn-ghost btn text-neutral-content px-4"
        >
          Deny All
        </button>
        <button
          onClick={() => {
            acceptCookie();
          }}
          className="btn-success btn px-4"
        >
          Accept All
        </button>
      </div>
    </div>
  );
};
export default Consent;
