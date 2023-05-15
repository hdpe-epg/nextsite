import {PrismicNextLink} from "@prismicio/next";
import {PrismicRichText} from "@prismicio/react";
import Heading from "@/components/Heading";
import {PrismicNextImage} from "@prismicio/next";

/**
 * @typedef {import("@prismicio/client").Content.CarousellSlice} CarousellSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<CarousellSlice>} CarousellProps
 * @param {CarousellProps} props
 */
const Carousell = ({slice}) => {
    // ------------------------------
    // BEGIN VIDEO CAROUSEL SLICE
    // ------------------------------
    if (slice.variation === `videoCarousel`) {
        console.log(slice);
        return (
            <section className={`mx-auto my-24 max-w-screen-xl`}>
                {slice.primary.content && (
                    <div className={`mb-4`}>
                        <PrismicRichText
                            field={slice.primary.content}
                            components={{
                                heading2: ({children}) => (
                                    <Heading as="h2" size="4xl" className="text-center">
                                        {children}
                                    </Heading>
                                ),
                                paragraph: ({children}) => (
                                    <p className={`text-center`}>{children}</p>
                                ),
                            }}
                        />
                    </div>
                )}
                {/*grid grid-container--fit*/}
                <div className="vidCarousel">
                    {/*This PrismicRichText Field is limited to embed only*/}
                    {slice.items.map((item, index) => (
                        <div key={index} className={``}>
                            <PrismicRichText field={item.youtube_vid_link}/>
                        </div>
                    ))}
                </div>
            </section>
        );
    }

    // ------------------------------
    // BEGIN DEFAULT CAROUSEL SLICE
    // ------------------------------
    return (
        <section className={`mx-auto my-24 max-w-screen-xl`}>
            {slice.primary.content && (
                <div className={`mb-4`}>
                    <PrismicRichText
                        field={slice.primary.content}
                        components={{
                            heading2: ({children}) => (
                                <Heading as="h2" size="4xl" className="text-center">
                                    {children}
                                </Heading>
                            ),
                            paragraph: ({children}) => (
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
    );
};

export default Carousell;
