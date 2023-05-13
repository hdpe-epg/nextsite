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
      {slice.primary.need_a_dividor ? (
        <div className={`my-8`}>
          <hr className="bg-size-1/2 mx-auto h-px max-w-screen-xl border-none bg-gradient-to-r from-transparent via-gray-500 to-transparent bg-center bg-no-repeat bg-repeat-x" />
        </div>
      ) : null}
    </>
  );
}
