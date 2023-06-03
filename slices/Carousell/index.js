import { PrismicNextLink } from '@prismicio/next'
import { PrismicRichText } from '@prismicio/react'
import Heading from '@/components/Heading'
import { PrismicNextImage } from '@prismicio/next'

/**
 * @typedef {import("@prismicio/client").Content.CarousellSlice} CarousellSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<CarousellSlice>} CarousellProps
 * @param {CarousellProps} props
 */
const Carousell = ({ slice }) => {
  if (slice.variation === `locations`) {
    // ------------------------------
    // BEGIN LOCATIONS SLICE
    // ------------------------------
    return (
      <section className="mx-auto my-24 grid max-w-screen-xl grid-cols-1 gap-16 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
        {slice.items.map((item, index) => (
          <div key={index} className="mb-4">
            <PrismicRichText
              field={item.location_item}
              components={{
                heading2: ({ children }) => (
                  <Heading as="h2" size="4xl" className="!ml-0 mb-4">
                    {children}
                  </Heading>
                ),
                paragraph: ({ children }) => <p className="">{children}</p>,
              }}
            />
            <div className="mt-8 text-center">
              <PrismicNextLink field={item.link} className="button">
                {item.link_text}
              </PrismicNextLink>
            </div>
          </div>
        ))}
      </section>
    )
  } else if (slice.variation === `videoCarousel`) {
    // ------------------------------
    // BEGIN VIDEO CAROUSEL SLICE
    // ------------------------------
    return (
      <section className={`mx-auto my-24 max-w-screen-xl`}>
        {slice.primary.content && (
          <div className={`mb-4`}>
            <PrismicRichText
              field={slice.primary.content}
              components={{
                heading2: ({ children }) => (
                  <Heading as="h2" size="4xl" className="text-center">
                    {children}
                  </Heading>
                ),
                paragraph: ({ children }) => (
                  <p className={`text-center`}>{children}</p>
                ),
              }}
            />
          </div>
        )}
        {/*grid grid-container--fit*/}
        <div className="vidCarousel">
          {/*This PrismicRichText Field is limited to embed only*/}
          {slice.items.map(({ youtube_vid_link }, index) => {
            const [{ oembed }] = youtube_vid_link
            return (
              <div key={index} className={`vidCarousel__inner`}>
                <PrismicRichText field={youtube_vid_link} />
                <Heading as="h2" size="base">
                  {oembed?.title}
                </Heading>
              </div>
            )
          })}
        </div>
      </section>
    )
  } else if (slice.variation === `locationMembers`) {
    // ------------------------------
    // BEGIN locationMembers SLICE
    // ------------------------------
    return (
      <section className="mx-auto my-24 grid max-w-screen-xl grid-cols-1 justify-between gap-16 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
        {slice.items.map((item, index) => (
          <div key={index} className="mb-8">
            {item.first_last_name && (
              <p className={`commonTextStyles commonTextMargins font-bold text-brand-secondary !mb-0 !pb-0`}>
                {item.first_last_name}
              </p>
            )}
            {item.job_title && <p className='commonTextStyles commonTextMargins !mb-0 !pb-0'>{item.job_title}</p>}
            {item.phone_number && (
              <p className='commonTextStyles commonTextMargins !mb-0 !pd-0'>
                  <a
                    className='linkStyles'
                    href={`tel:${item.phone_number}`}
                    title={`${item.first_last_name} +  ${item.phone_number}`}
                  >
                    {item.phone_number}
                  </a>
              </p>
            )}
            {item.email && (
              <p className='commonTextStyles commonTextMargins '>
                  <a
                    className='linkStyles'
                    href={`mailto:${item.email}`}
                    title={`Email ${item.first_last_name}`}
                  >
                    {item.email}
                  </a>
              </p>
            )}
          </div>
        ))}
      </section>
    )
  }
  return (
    // ------------------------------
    // BEGIN DEFAULT CAROUSEL SLICE
    // ------------------------------
    <section className={`mx-auto my-24 max-w-screen-xl`}>
      {slice.primary.content && (
        <div className={`mb-4`}>
          <PrismicRichText
            field={slice.primary.content}
            components={{
              heading2: ({ children }) => (
                <Heading as="h2" size="4xl" className="text-center">
                  {children}
                </Heading>
              ),
              paragraph: ({ children }) => (
                <p className={`text-center`}>{children}</p>
              ),
            }}
          />
        </div>
      )}
      <div className="grid grid-cols-1 justify-center gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-8">
        {slice.items.map((item, index) => (
          <PrismicNextImage
            key={index}
            field={item.images}
            width={162}
            height={75}
          />
        ))}
      </div>
    </section>
  )
}

export default Carousell
