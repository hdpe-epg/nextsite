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
    }
    return DefaultRender(slice)
}

export default Content

function HalfHalfRender(slice) {
    return (
        <section className={`max-w-screen-xl mx-auto`}>
            <PrismicRichText field={slice.primary.titleContent}/>

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
