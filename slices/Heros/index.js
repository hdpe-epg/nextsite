import React from 'react'
import Image from 'next/image'
import {PrismicNextLink} from "@prismicio/next";
import {PrismicRichText} from '@prismicio/react'

/**
 * @typedef {import("@prismicio/client").Content.HerosSlice} HerosSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<HerosSlice>} HerosProps
 * @param {HerosProps}
 */

// data-slice-type={slice.slice_type}
// data-slice-variation={slice.variation}

const Heros = ({index, slice}) => {
    return DefaultHeroRender(index, slice)
};

export default Heros

function DefaultHeroRender(index, slice) {
    return (
        <section className={`grid `}>
            <div className={`z-0`}>
                {slice.primary.bgimage &&
                    <Image
                        priority={index === 0 ? true : false}
                        alt={slice.primary.bgimage.alt}
                        src={slice.primary.bgimage.url}
                        fill={true}
                        // className={`bg-amber-400`}
                    />}
            </div>
            <div className={`z-10 mx-auto border-2 border-red-400`}>
                {slice.primary.heading &&
                    <PrismicRichText
                        field={slice.primary.heading}/>}
                {slice.primary.description &&
                    <PrismicRichText
                        field={slice.primary.description}/>}
                <div>
                    {slice.primary.buttontext &&
                        <PrismicNextLink
                            alt={slice.primary.buttontext}
                            field={slice.primary.buttonlink}
                            className={`button`}>
                            {slice.primary.buttontext}
                        </PrismicNextLink>}
                </div>
            </div>


        </section>
    )
}