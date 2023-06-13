/**
 * @typedef {import("@prismicio/client").Content.LocationsSlice} LocationsSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<LocationsSlice>} LocationsProps
 * @param {LocationsProps}
 */
import Heading from '@/components/Heading'
import { asText } from '@prismicio/client'
import { PrismicRichText } from '@prismicio/react'
const Locations = ({ slice }) => {
  const { primary, items } = slice
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={`mx-auto my-24 max-w-screen-xl`}
    >
      <div className={`grid justify-center gap-8 md:grid-cols-2`}>
        {/*Left Side*/}
        <div>
          <div>
            <Heading as="h1" id={primary.uid}>
              {asText(primary.title)}
            </Heading>
            <PrismicRichText field={slice.primary.address} />
            <PrismicRichText field={slice.primary.phone} />
            <PrismicRichText field={slice.primary.email} />
          </div>

          <div className={`mx-auto grid justify-between gap-4 sm:grid-cols-2`}>
            {/*repeat one*/}
            {items.length > 0 &&
              items.map((item, i) => {
                return (
                  <div key={slice.id + i}>
                    <Heading as="h2" className={'mb-0 pb-0 text-xl'}>
                      {asText(item.employee)}
                    </Heading>
                    <PrismicRichText
                      field={item.role}
                      components={{
                        paragraph: ({ children }) => (
                          <p className="italic">{children}</p>
                        ),
                      }}
                    />
                    <PrismicRichText
                      field={item.phone}
                      components={{
                        paragraph: ({ children }) => (
                          <p className="-mt-6">{children}</p>
                        ),
                      }}
                    />
                    <PrismicRichText
                      field={item.email}
                      components={{
                        paragraph: ({ children }) => (
                          <p className="-mt-6">{children}</p>
                        ),
                      }}
                    />
                  </div>
                )
              })}
          </div>
        </div>

        {/*Right Side*/}
        <div>
          {/*rich text block, including the img*/}
          <PrismicRichText field={slice.primary.description} />
        </div>
      </div>
    </section>
  )
}

export default Locations
