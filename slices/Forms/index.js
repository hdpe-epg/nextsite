/**
 * @typedef {import("@prismicio/client").Content.FormsSlice} FormsSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<FormsSlice>} FormsProps
 * @param {FormsProps}
 */
import Heading from "@/components/Heading";
// import { useState} from "react";
import Script from "next/script";

const Forms = ({ slice }) => {

    // const [hasError, setHasError] = useState(false);
    // const [isLoaded, setIsLoaded] = useState(false);
    //
    // const handleError = () => {
    //     setHasError(true);
    // };
    //
    // const handleLoad = () => {
    //     setIsLoaded(true);
    // };

  return (
      <section className={`relative`}>
          {slice.primary.title && (<Heading as="h2" className={`h3 text-center`}>{slice.primary.title}</Heading>)}
          <iframe
              src="https://link.rawmedia.ca/widget/form/iYDgpOJMUo5WORWOU7y1"
              className={`w-full h-screen border-0 rounded-none`}
              id="inline-iYDgpOJMUo5WORWOU7y1"
              data-layout="{'id':'INLINE'}"
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="neverDeactivate"
              data-deactivation-value=""
              data-form-name="EPG General Contact"
              data-height="708"
              data-layout-iframe-id="inline-iYDgpOJMUo5WORWOU7y1"
              data-form-id="iYDgpOJMUo5WORWOU7y1"
              title="EPG General Contact"
          />
          <Script
              src="https://link.rawmedia.ca/js/form_embed.js"
              // onError={handleError}
              // onLoad={handleLoad}
          />

          {/*Error checking*/}
          {/*{ hasError && <div>Failed to load script</div> }*/}
          {/*{ isLoaded && <div>Script has been loaded</div> }*/}

      </section>
  )
}

export default Forms
