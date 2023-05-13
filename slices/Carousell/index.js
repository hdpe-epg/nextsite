import {PrismicNextLink} from '@prismicio/next';
import {PrismicRichText} from '@prismicio/react';
import Heading from '@/components/Heading';
import {PrismicNextImage} from '@prismicio/next';

/**
 * @typedef {import("@prismicio/client").Content.CarousellSlice} CarousellSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<CarousellSlice>} CarousellProps
 * @param {CarousellProps} props
 */
const Carousell = ({slice}) => {
    return (
        <section className={`mx-auto max-w-screen-xl`}>
            {slice.primary.content &&
                <div className={`mb-4`}>
                <PrismicRichText
                    field={slice.primary.content}
                    components={{
                        heading2: ({children}) => (
                            <Heading as="h2" size="4xl" className="text-center">
                                {children}
                            </Heading>
                        ),
                        paragraph: ({children}) => <p className={`text-center`}>{children}</p>,
                    }}
                />
                </div>
            }
            <div className="flex flex-wrap gap-4 justify-center">
                {slice.items.map((item, index) => (
                    <PrismicNextImage key={index} field={item.images} width={162} height={75} />
                ))}
            </div>

        </section>
    )
};

export default Carousell;
