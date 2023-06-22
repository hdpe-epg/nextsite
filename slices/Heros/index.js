import React from 'react'
import Image from 'next/image'
import { PrismicNextLink } from '@prismicio/next'
import { PrismicRichText } from '@prismicio/react'
import { PrismicNextImage } from '@prismicio/next'
import Heading from '@/components/Heading'

/**
 * @typedef {import("@prismicio/client").Content.HerosSlice} HerosSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<HerosSlice>} HerosProps
 * @param {HerosProps}
 */

// data-slice-type={slice.slice_type}
// data-slice-variation={slice.variation}

const Heros = ({ index, slice }) => {
  if (slice.variation === `heroVersion2`) {
    return HeroVersionTwo(index, slice)
  } else {
    return DefaultHeroRender(index, slice)
  }
}

export default Heros

function DefaultHeroRender(index, slice) {
  return (
    <section className={`hero relative flex items-center justify-start`}>
      <div className={`mx-auto max-w-screen-2xl`}>
        <div className={`absolute inset-0 z-[-2]`}>
          <div className={`absolute inset-0 z-[-2]`}>
            {slice.primary.bgimage && (
              <Image
                priority={index === 0 ? true : false}
                alt={slice.primary.bgimage.alt || ''}
                src={slice.primary.bgimage.url}
                fill={true}
                sizes="100vw"
                className="z-[-2] object-cover"
              />
            )}
          </div>
        </div>
        <div className="z-1 absolute inset-0 bg-brand-primary opacity-60" />
        <div className={`relative mx-auto max-w-screen-xl`}>
          {slice.primary.heading && (
            <PrismicRichText
              components={{
                heading1: ({ children }) => (
                  <Heading as="h1" className={`text-white`}>
                    {children}
                  </Heading>
                ),
                heading2: ({ children }) => (
                  <Heading as="h2" className={`text-white`}>
                    {children}
                  </Heading>
                ),
              }}
              field={slice.primary.heading}
            />
          )}
          {slice.primary.description && (
            <PrismicRichText
              components={{
                heading2: ({ children }) => (
                  <Heading as="h2" className={`text-white`}>
                    {children}
                  </Heading>
                ),
                paragraph: ({ children }) => (
                  // margin partially controled in global.css
                  <p className={`text-white md:w-2/3 md:text-3xl`}>
                    {children}
                  </p>
                ),
              }}
              field={slice.primary.description}
            />
          )}
          <div className={`my-8`}>
            {slice.primary.buttontext && (
              <button>
                <PrismicNextLink
                  alt={slice.primary.buttontext}
                  field={slice.primary.buttonlink}
                  className={`button`}
                >
                  {slice.primary.buttontext}
                </PrismicNextLink>
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

function HeroVersionTwo(index, slice) {
  return (
    <section>
      <div className={`relative  h-[500px]`}>
        {slice.primary.bgimage && (
          <PrismicNextImage
            priority={index === 0 ? true : false}
            field={slice.primary.bgimage}
            fill={true}
            className="z-[-2] object-cover"
          />
        )}
      </div>
      <div className={`bg-brand-primary pb-2 pt-8 text-center`}>
        {slice.primary.heading && (
          <PrismicRichText
            components={{
              heading1: ({ children }) => (
                <Heading as="h1" className={`text-white`}>
                  {children}
                </Heading>
              ),
              heading2: ({ children }) => (
                <Heading as="h2" className={`text-white`}>
                  {children}
                </Heading>
              ),
            }}
            field={slice.primary.heading}
          />
        )}
        {slice.primary.description && (
          <PrismicRichText
            components={{
              heading2: ({ children }) => (
                <Heading as="h2" className={`text-white`}>
                  {children}
                </Heading>
              ),
              paragraph: ({ children }) => (
                // margin partially controled in global.css
                <p className={`text-white`}>{children}</p>
              ),
            }}
            field={slice.primary.description}
          />
        )}
        {slice.primary.buttontext && (
          <div className={`my-8`}>
            {slice.primary.buttontext && (
              <button>
                <PrismicNextLink
                  alt={slice.primary.buttontext}
                  field={slice.primary.buttonlink}
                  className={`button`}
                >
                  {slice.primary.buttontext}
                </PrismicNextLink>
              </button>
            )}
          </div>
        )}
      </div>
    </section>
  )
}
