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
        <section className={`max-w-screen-xl mx-auto ${slice.primary.hascolor ? 'bg-brand-primary py-24': 'my-24'}`}>
            {slice.primary.titleContent && <PrismicRichText field={slice.primary.titleContent}/>}
            <div
                className={`grid gap-16 lg:grid-cols-2 justify-center align-top ${slice.primary.leftimageoptional.url || slice.primary.rightimageoptional.url && 'align-center'}`}>
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
    return (
        <section className={`max-w-screen-xl mx-auto ${slice.primary.hascolor && ''}`}>
            {slice.primary.titleContent && <PrismicRichText field={slice.primary.titleContent}/>}
            {/*inner row -----------*/}
            <div className={`grid justify-center gap-8 align-top lg:grid-cols-4`}>
                {/*first quarter ------- */}
                <div>
                    {slice.primary.first_quarter_image.url && (
                        <div className="aspect-h-9 aspect-w-16 mb-8">
                            <Image
                                src={slice.primary.first_quarter_image.url}
                                field={slice.primary.first_quarter_image.url}
                                alt={slice.primary.first_quarter_image.alt || ''}
                                fill={true}
                                className="z-[-2] object-cover"
                            />
                        </div>
                    )}
                    {slice.primary.firstquarter && <PrismicRichText field={slice.primary.firstquarter}/>}
                    {slice.primary.buttontextfirstquarter &&
                        <div className={`text-center`}>
                            <button>
                                <PrismicNextLink
                                    alt={slice.primary.buttontextfirstquarter}
                                    field={slice.primary.buttonlinkfirstquarter}
                                    className={`button`}>
                                    {slice.primary.buttontextfirstquarter}
                                </PrismicNextLink>
                            </button>
                        </div>
                    }
                </div>
                {/*second quarter ------- */}
                <div>
                    {slice.primary.second_quarter_image.url && (
                        <div className="aspect-h-9 aspect-w-16 mb-8">
                            <Image
                                src={slice.primary.second_quarter_image.url}
                                field={slice.primary.second_quarter_image.url}
                                alt={slice.primary.second_quarter_image.alt || ''}
                                fill={true}
                                className="z-[-2] object-cover"
                            />
                        </div>
                    )}
                    {slice.primary.secondquarter && <PrismicRichText field={slice.primary.secondquarter}/>}
                    {slice.primary.buttontextsecondquarter &&
                        <div className={`text-center`}>
                            <button>
                                <PrismicNextLink
                                    alt={slice.primary.buttontextsecondquarter}
                                    field={slice.primary.buttonlinksecondquarter}
                                    className={`button`}>
                                    {slice.primary.buttontextsecondquarter}
                                </PrismicNextLink>
                            </button>
                        </div>
                    }
                </div>
                {/*third quarter ------- */}
                <div>
                    {slice.primary.third_quarter_image.url && (
                        <div className="aspect-h-9 aspect-w-16 mb-8">
                            <Image
                                src={slice.primary.third_quarter_image.url}
                                field={slice.primary.third_quarter_image.url}
                                alt={slice.primary.third_quarter_image.alt || ''}
                                fill={true}
                                className="z-[-2] object-cover"
                            />
                        </div>
                    )}
                    {slice.primary.thirdquarter && <PrismicRichText field={slice.primary.thirdquarter}/>}
                    {slice.primary.buttontextthirdquarter &&
                        <div className={`text-center`}>
                            <button>
                                <PrismicNextLink
                                    alt={slice.primary.buttontextthirdquarter}
                                    field={slice.primary.buttonlinkthirdquarter}
                                    className={`button`}>
                                    {slice.primary.buttontextthirdquarter}
                                </PrismicNextLink>
                            </button>
                        </div>
                    }
                </div>
                {/*fourth quarter ------- */}
                <div>
                    {slice.primary.fourth_quarter_image.url && (
                        <div className="aspect-h-9 aspect-w-16 mb-8">
                            <Image
                                src={slice.primary.fourth_quarter_image.url}
                                field={slice.primary.fourth_quarter_image.url}
                                alt={slice.primary.fourth_quarter_image.alt || ''}
                                fill={true}
                                className="z-[-2] object-cover"
                            />
                        </div>
                    )}
                    {slice.primary.fourthquarter && <PrismicRichText field={slice.primary.fourthquarter}/>}
                    {slice.primary.buttontextfourthquarter &&
                        <div className={`text-center`}>
                            <button>
                                <PrismicNextLink
                                    alt={slice.primary.buttontextfourthquarter}
                                    field={slice.primary.buttonlinkfourthquarter}
                                    className={`button`}>
                                    {slice.primary.buttontextfourthquarter}
                                </PrismicNextLink>
                            </button>
                        </div>
                    }
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
