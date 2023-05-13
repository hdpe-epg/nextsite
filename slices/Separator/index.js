/**
 * @typedef {import("@prismicio/client").Content.SeperatorSlice} SeperatorSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<SeperatorSlice>} SeperatorProps
 * @param {SeperatorProps}
 */
const Seperator = ({slice}) => {
    return DefaultSeperatorRender(slice)
}

export default Seperator;

function DefaultSeperatorRender(slice) {
    return (
        <>
            {slice.primary.need_a_dividor ? (
                <div className={`my-8`}>
                    <hr className="mx-auto max-w-screen-xl border-none bg-gradient-to-r from-transparent via-gray-500 to-transparent bg-repeat-x bg-center bg-size-1/2 bg-no-repeat h-px" />
                </div>
            ) : null}
        </>
    );
}
