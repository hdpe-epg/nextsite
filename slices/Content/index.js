import React from 'react'
import Image from 'next/image'
import {PrismicNextLink} from "@prismicio/next";
import {PrismicRichText} from '@prismicio/react'
import { nanoid } from 'nanoid';
import Heading from "@/components/Heading";

/**
 * @typedef {import("@prismicio/client").Content.ContentSlice} ContentSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ContentSlice>} ContentProps
 * @param {ContentProps}
 */
const Content = ({slice}) => {
    if (slice.variation === `halfHalf`) {
        return HalfHalfRender(slice)
    } else if (slice.variation === `oneThirdTwoThird`) {
        return OneThirdTwoThirdRender(slice)
    } else if (slice.variation === `quarters`) {
        return QuartersRender(slice)
    }
    return DefaultRender(slice)
}

export default Content

function HalfHalfRender(slice) {
    return (
        <section className={`max-w-screen-xl mx-auto ${slice.primary.hascolor && ''}`}>
            {slice.primary.titleContent && <PrismicRichText field={slice.primary.titleContent}/>}

            <div
                className={`grid gap-16 lg:grid-cols-2 justify-center align-top my-24 ${slice.primary.leftimageoptional.url || slice.primary.rightimageoptional.url && 'align-center'}`}>
                <div className={``}>
                    {slice.primary.lefttitleoptional && <PrismicRichText field={slice.primary.lefttitleoptional}/>}
                    {slice.primary.leftimageoptional.url && (
                        <div className="aspect-h-9 aspect-w-16 mb-8">
                            <Image
                                src={slice.primary.leftimageoptional.url}
                                field={slice.primary.leftimageoptional.url}
                                alt={slice.primary.leftimageoptional.alt || ''}
                                fill={true}
                                className="z-[-2] object-cover"
                            />
                        </div>
                    )}
                    {slice.primary.lefthalf && <PrismicRichText field={slice.primary.lefthalf}/>}

                    {slice.primary.leftbuttonoptional && slice.primary.leftbuttontext ? (
                        <div className={`my-8 text-center`}>
                            <button>
                                <PrismicNextLink
                                    alt={slice.primary.leftbuttontext}
                                    field={slice.primary.leftbuttonoptional}
                                    className={`button`}>
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
                    {slice.primary.righttitleoptional && <PrismicRichText field={slice.primary.righttitleoptional}/>}
                    {slice.primary.rightimageoptional.url && (
                        <div className="aspect-h-9 aspect-w-16 mb-8">
                            <Image
                                src={slice.primary.rightimageoptional.url}
                                field={slice.primary.rightimageoptional.url}
                                alt={slice.primary.rightimageoptional.alt || ''}
                                fill={true}
                                className="z-[-2] object-cover"
                            />
                        </div>
                    )}
                    {slice.primary.righthalf && <PrismicRichText field={slice.primary.righthalf}/>}
                    {slice.primary.rightbuttonoptional && slice.primary.rightbuttontext ? (
                        <div className={`my-8 text-center`}>
                            <button>
                                <PrismicNextLink
                                    alt={slice.primary.rightbuttontext}
                                    field={slice.primary.rightbuttonoptional}
                                    className={`button`}>
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
        <section className={`max-w-screen-xl mx-auto ${slice.primary.hascolor && ''}`}>
            {slice.primary.titleContent && <PrismicRichText field={slice.primary.titleContent}/>}
            <div
                className={`flex flex-col gap-4 xl:flex-row ${slice.primary.reversethis ? 'flex-col-reverse xl:flex-row-reverse' : ''}`}>
                <div className={`xl:w-1/3`}>
                    <PrismicRichText field={slice.primary.lefthalf}/>
                </div>
                <div className={`xl:w-2/3`}>
                    <PrismicRichText field={slice.primary.righthalf}/>
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
        <section className={`max-w-screen-xl mx-auto ${slice.primary.hascolor && ''}`}>
            {slice.primary.titleContent && <PrismicRichText field={slice.primary.titleContent}/>}
            {/*inner row -----------*/}
            <div className={`grid gap-8 lg:grid-cols-4 justify-center align-top`}>
                {quarters.map((quarter, index) => (
                    <div key={quarter.id || nanoid()}>
                        {quarter.image.url && (
                            <div className="aspect-h-9 aspect-w-16 mb-8">
                                <Image
                                    src={quarter.image.url}
                                    field={quarter.image.url}
                                    alt={quarter.image.alt || ''}
                                    fill={true}
                                    className="z-[-2] object-cover"
                                />
                            </div>
                        )}
                        {quarter.content && <PrismicRichText field={quarter.content}/>}
                        {quarter.buttonText && (
                            <div className={`text-center`}>
                                <button>
                                    <PrismicNextLink
                                        alt={quarter.buttonText}
                                        field={quarter.buttonLink}
                                        className={`button`}
                                    >
                                        {quarter.buttonText}
                                    </PrismicNextLink>
                                </button>
                            </div>
                        )}
                    </div>
                ))}
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
