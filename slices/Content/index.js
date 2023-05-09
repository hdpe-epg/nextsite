import { PrismicRichText } from '@prismicio/react'
import { richTextComponents } from '@/lib/richtext'
/**
 * @typedef {import("@prismicio/client").Content.ContentSlice} ContentSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ContentSlice>} ContentProps
 * @param {ContentProps}
 */
const Content = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for content (variation: {slice.variation}) Slices
      <PrismicRichText
        field={slice.primary.content}
        components={richTextComponents}
      />
    </section>
  )
}

export default Content
