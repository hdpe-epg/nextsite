/**
 * @typedef {import("@prismicio/client").Content.SeperatorSlice} SeperatorSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<SeperatorSlice>} SeperatorProps
 * @param {SeperatorProps}
 */
const Seperator = ({ slice }) => {
  return DefaultSeperatorRender(slice);
};

export default Seperator;

function DefaultSeperatorRender(slice) {
  return (
    <>
      {slice.primary.need_a_dividor && (
        <div className={`my-8`}>
          <hr className="seperator" />
        </div>
      )}
    </>
  )
}
