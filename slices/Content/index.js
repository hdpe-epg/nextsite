import React from 'react'
import Image from 'next/image'
import {PrismicNextLink} from "@prismicio/next";
import {PrismicRichText} from '@prismicio/react'
import Heading from "@/components/Heading";

/**
 * @typedef {import("@prismicio/client").Content.ContentSlice} ContentSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ContentSlice>} ContentProps
 * @param {ContentProps}
 */
const Content = ({slice}) => {
    if (slice.variation === `halfHalf`) {
        return HalfHalfRender(slice)
    } else if (slice.variation === `oneThirdTwoThird`)  {
        return OneThirdTwoThirdRender(slice)
    } else if (slice.variation === `quarters`)  {
        return QuartersRender(slice)
    }
    return DefaultRender(slice)
}

export default Content

function HalfHalfRender(slice) {
    return (
        <section className={`max-w-screen-xl mx-auto`}>
            {slice.primary.titleContent && <PrismicRichText field={slice.primary.titleContent}/>}

            <div className={`grid gap-4 lg:grid-cols-2 justify-center align-top`}>
                <div>
                    <PrismicRichText field={slice.primary.lefthalf}/>
                </div>
                <div>
                    <PrismicRichText field={slice.primary.righthalf}/>
                </div>
            </div>

        </section>
    )
}

function OneThirdTwoThirdRender(slice) {
    return (
        <section className={`max-w-screen-xl mx-auto ${slice.primary.hascolor ? 'brand-primary' : ''}`}>
            {/*TODO: Code for color toggle*/}
            {/*<></>*/}
            {slice.primary.titleContent && <PrismicRichText field={slice.primary.titleContent} />}
            <div className={`flex flex-col gap-4 xl:flex-row ${slice.primary.reversethis ? 'flex-col-reverse xl:flex-row-reverse' : ''}`}>
                <div className={`xl:w-1/3`}>
                    <PrismicRichText field={slice.primary.lefthalf} />
                </div>
                <div className={`xl:w-2/3`}>
                    <PrismicRichText field={slice.primary.righthalf} />
                </div>
            </div>
        </section>
    )
}

function QuartersRender(slice) {
    return (
        <section className={`max-w-screen-xl mx-auto`}>
            {/*TODO: Code for Toggle*/}
            {/*<>{slice.primary.reversethis}</>*/}
            {/*TODO: Code for color toggle*/}
            {/*<>{slice.primary.hascolor}</>*/}
            {slice.primary.titleContent && <PrismicRichText field={slice.primary.titleContent}/>}

            <div className={`grid gap-4 lg:grid-cols-2 justify-center align-top`}>
                <div>
                    <PrismicRichText field={slice.primary.firstquarter}/>
                </div>
                <div>
                    <PrismicRichText field={slice.primary.secondquarter}/>
                </div>
                <div>
                    <PrismicRichText field={slice.primary.thirdquarter}/>
                </div>
                <div>
                    <PrismicRichText field={slice.primary.fourthquarter}/>
                </div>
            </div>

        </section>
    )
}

function DefaultRender(slice) {
    return (
        <section
            data-slice-type={slice.slice_type}
            data-slice-variation={slice.variation}
        >
            Placeholder component for content (variation: {slice.variation}) Slices
            <PrismicRichText field={slice.primary.content}/>
        </section>
    )
}


