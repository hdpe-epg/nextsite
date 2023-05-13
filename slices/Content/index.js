// import Image from 'next/image'
import { PrismicNextLink } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import Heading from "@/components/Heading";
import { nanoid } from "nanoid";
import { PrismicNextImage } from "@prismicio/next";

/**
 * @typedef {import("@prismicio/client").Content.ContentSlice} ContentSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ContentSlice>} ContentProps
 * @param {ContentProps}
 */
const Content = ({ slice }) => {
  if (slice.variation === `halfHalf`) {
    return HalfHalfRender(slice);
  } else if (slice.variation === `oneThirdTwoThird`) {
    return OneThirdTwoThirdRender(slice);
  } else if (slice.variation === `quarters`) {
    return QuartersRender(slice);
  }
  return DefaultRender(slice);
};

export default Content;

function HalfHalfRender(slice) {
  // TODO: {slice.primary.hascolor}
  return (
    <section className={`mx-auto my-24 max-w-screen-xl`}>
      {slice.primary.titleContent && (
        <PrismicRichText field={slice.primary.titleContent} />
      )}

      {/*------------------------------*/}
      {/*Left half box*/}
      {/*------------------------------*/}

      <div
        className={`grid justify-center gap-16 align-top lg:grid-cols-2 ${
          slice.primary.leftimageoptional.url ||
          (slice.primary.rightimageoptional.url && "align-center")
        }`}
      >
        <div className={`${slice.primary.reverse_this_row && `order-2`}`}>
          {slice.primary.lefttitleoptional && (
            <PrismicRichText field={slice.primary.lefttitleoptional} />
          )}
          {slice.primary.leftimageoptional.url && (
            <div className="aspect-h-9 aspect-w-16 mb-8">
              <PrismicNextImage
                field={slice.primary.leftimageoptional}
                fill={true}
                className="z-[-2] object-cover"
              />
            </div>
          )}
          {slice.primary.lefthalf && (
            <PrismicRichText field={slice.primary.lefthalf} />
          )}

          {slice.primary.leftbuttonoptional && slice.primary.leftbuttontext ? (
            <div className={`my-8 text-center`}>
              <button>
                <PrismicNextLink
                  alt={slice.primary.leftbuttontext}
                  field={slice.primary.leftbuttonoptional}
                  className={`button`}
                >
                  {slice.primary.leftbuttontext}
                </PrismicNextLink>
              </button>
            </div>
          ) : null}
        </div>
        {/*------------------------------*/}
        {/*Right half box*/}
        {/*------------------------------*/}
        <div>
          {slice.primary.righttitleoptional && (
            <PrismicRichText field={slice.primary.righttitleoptional} />
          )}
          {slice.primary.rightimageoptional.url && (
            <div className="aspect-h-9 aspect-w-16 mb-8">
              <PrismicNextImage
                field={slice.primary.rightimageoptional}
                fill={true}
                className="z-[-2] object-cover"
              />
            </div>
          )}
          {slice.primary.righthalf && (
            <PrismicRichText field={slice.primary.righthalf} />
          )}
          {slice.primary.rightbuttonoptional &&
          slice.primary.rightbuttontext ? (
            <div className={`my-8 text-center`}>
              <button>
                <PrismicNextLink
                  alt={slice.primary.rightbuttontext}
                  field={slice.primary.rightbuttonoptional}
                  className={`button`}
                >
                  {slice.primary.rightbuttontext}
                </PrismicNextLink>
              </button>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}

function OneThirdTwoThirdRender(slice) {
  return (
    <section
      className={`mx-auto max-w-screen-xl ${slice.primary.hascolor && ""}`}
    >
      {slice.primary.titleContent && (
        <PrismicRichText field={slice.primary.titleContent} />
      )}
      <div
        className={`flex flex-col gap-4 xl:flex-row ${
          slice.primary.reversethis
            ? "flex-col-reverse xl:flex-row-reverse"
            : ""
        }`}
      >
        <div className={`xl:w-1/3`}>
          <PrismicRichText field={slice.primary.lefthalf} />
          TODO: Optional button to download things or link (example, pipe page
          xls download)
        </div>
        <div className={`xl:w-2/3`}>
          <PrismicRichText field={slice.primary.righthalf} />
        </div>
      </div>
    </section>
  );
}

function QuartersRender(slice) {
  const quarters = [
    {
      image: slice.primary.first_quarter_image,
      content: slice.primary.firstquarter,
      buttonText: slice.primary.buttontextfirstquarter,
      buttonLink: slice.primary.buttonlinkfirstquarter,
    },
    {
      image: slice.primary.second_quarter_image,
      content: slice.primary.secondquarter,
      buttonText: slice.primary.buttontextsecondquarter,
      buttonLink: slice.primary.buttonlinksecondquarter,
    },
    {
      image: slice.primary.third_quarter_image,
      content: slice.primary.thirdquarter,
      buttonText: slice.primary.buttontextthirdquarter,
      buttonLink: slice.primary.buttonlinkthirdquarter,
    },
    {
      image: slice.primary.fourth_quarter_image,
      content: slice.primary.fourthquarter,
      buttonText: slice.primary.buttontextfourthquarter,
      buttonLink: slice.primary.buttonlinkfourthquarter,
    },
  ];
  return (
    <section
      className={` py-24 ${slice.primary.hascolor ? "bg-brand-accent" : ""} `}
    >
      {slice.primary.titleContent && (
        <PrismicRichText field={slice.primary.titleContent} />
      )}
      {/*inner row -----------*/}
      <div
        className={`mx-auto grid max-w-screen-xl justify-items-center gap-8 md:grid-cols-2 lg:grid-cols-4`}
      >
        {quarters.map((quarter) => {
          return (
            <div key={nanoid()}>
              {quarter.image.url && (
                <div>
                  <PrismicNextImage
                    field={quarter.image}
                    className="z-[-2] object-cover"
                  />
                </div>
              )}
              {quarter.content && (
                <PrismicRichText
                  field={quarter.content}
                  components={{
                    heading2: ({ children }) => (
                      <Heading as="h2" size="4xl" className="text-center">
                        {children}
                      </Heading>
                    ),
                    paragraph: ({ children }) => <p>{children}</p>,
                  }}
                />
              )}
              {quarter.buttonText && (
                <div className={`mt-12 text-center`}>
                  <PrismicNextLink
                    alt={quarter.buttonText}
                    field={quarter.buttonLink}
                    className={`button`}
                  >
                    {quarter.buttonText}
                  </PrismicNextLink>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

function DefaultRender(slice) {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for content (variation: {slice.variation}) Slices
      <PrismicRichText field={slice.primary.content} />
    </section>
  );
}
