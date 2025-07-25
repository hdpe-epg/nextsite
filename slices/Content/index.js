// import Image from 'next/image'
import { PrismicNextImage, PrismicNextLink } from '@prismicio/next'
import { PrismicRichText } from '@prismicio/react'
import Heading from '@/components/Heading'
import { nanoid } from 'nanoid'

/**
 * @typedef {import("@prismicio/client").Content.ContentSlice} ContentSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ContentSlice>} ContentProps
 * @param {ContentProps}
 */
const Content = ({ slice }) => {
  if (slice.variation === `halfHalf`) {
    return HalfHalfRender(slice)
  } else if (slice.variation === `oneThirdTwoThird`) {
    return OneThirdTwoThirdRender(slice)
  } else if (slice.variation === `quarters`) {
    return QuartersRender(slice)
  } else if (slice.variation === `resources`) {
    return ResourcesRender(slice)
  }
  return DefaultRender(slice)
}

export default Content

function ResourcesRender(slice) {
  return (
    <section>
      <div
        className={`mx-auto my-24 flex max-w-screen-xl flex-col justify-between gap-y-12 lg:flex-row lg:gap-y-0`}
      >
        {slice?.items?.map((item, i) => {
          return (
            <article
              key={slice.id + i}
              className={`flex flex-1 flex-col gap-4 text-center`}
            >
              <PrismicRichText field={item.heading} />
              {item.buttonlink.url && (
                <p>
                  <PrismicNextLink field={item.buttonlink} className={`button`}>
                    {item.buttontext}
                  </PrismicNextLink>
                </p>
              )}
            </article>
          )
        })}
      </div>
    </section>
  )
}

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
          (slice.primary.rightimageoptional.url && 'align-center')
        }`}
      >
        <div className={`${slice.primary.reverse_this_row && `order-2`}`}>
          {slice.primary.lefttitleoptional && (
            <PrismicRichText field={slice.primary.lefttitleoptional} />
          )}
          {slice.primary.leftimageoptional.url && (
            <div className="image169 mb-9">
              {/*aspect-h-9 aspect-w-16*/}
              <PrismicNextImage
                field={slice.primary.leftimageoptional}
                fill={true}
                className="image169__inner"
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
            <div className="image169 mb-8">
              {/*aspect-h-9 aspect-w-16*/}
              <PrismicNextImage
                field={slice.primary.rightimageoptional}
                fill={true}
                className={`image169__inner`}
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
  )
}

function OneThirdTwoThirdRender(slice) {
  return (
    <section
      className={`mx-auto max-w-screen-xl py-24 ${
        slice.primary.hascolor && ''
      }`}
    >
      {slice.primary.titleContent && (
        <PrismicRichText field={slice.primary.titleContent} />
      )}
      <div
        className={`flex flex-col gap-4 xl:flex-row ${
          slice.primary.reversethis
            ? 'flex-col-reverse xl:flex-row-reverse'
            : ''
        }`}
      >
        <div className={`xl:w-1/3`}>
          <PrismicRichText field={slice.primary.lefthalf} />
          {/*TODO: Optional button to download things or link (example, pipe page*/}
          {/*xls download)*/}
        </div>
        <div className={`xl:w-2/3`}>
          <PrismicRichText field={slice.primary.righthalf} />
        </div>
      </div>
    </section>
  )
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
  ]
  return (
    <section
      className={` py-24 ${slice.primary.hascolor ? 'bg-brand-accent' : ''} `}
    >
      {slice.primary.titleContent && (
        <PrismicRichText field={slice.primary.titleContent} />
      )}
      {/*inner row -----------*/}
      <div
        className={`mx-auto flex max-w-screen-xl flex-col flex-wrap justify-center gap-8 gap-y-12 lg:flex-row lg:gap-y-0`}
      >
        {quarters.map(quarter => {
          return (
            <div key={nanoid()} className="shrink-0">
              {quarter.image.url && (
                <div className="flex justify-center">
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
                      <Heading as="h2" className="text-center mt-4">
                        {children}
                      </Heading>
                    ),
                    paragraph: ({ children }) => <p>{children}</p>,
                  }}
                />
              )}
              {quarter.buttonText && (
                <div className={`mt-6 text-center`}>
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
          )
        })}
      </div>
    </section>
  )
}

function DefaultRender(slice) {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={`mx-auto my-24 max-w-screen-xl`}
    >
      <PrismicRichText field={slice.primary.content} />
    </section>
  )
}
