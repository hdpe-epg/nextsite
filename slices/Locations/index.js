/**
 * @typedef {import("@prismicio/client").Content.LocationsSlice} LocationsSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<LocationsSlice>} LocationsProps
 * @param {LocationsProps}
 */
const Locations = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for locations (variation: {slice.variation}) Slices
    </section>
  )
}

export default Locations
