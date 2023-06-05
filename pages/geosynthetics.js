/*
FOR CHANGELOG:
We are creating the content of this page manually beceause we don't yet have a solution
on how to route the PDFs and excels to the correct urls. The specific problem is that
the AMAZON is hashing the files, and we need the downloads to never change so we don't
ruin their SEO as far as the files themselves go.
 */

import * as React from 'react'
import Layout from '@/components/Layout'
import { createClient } from '@/prismicio'
import Head from 'next/head'
import Link from 'next/link'

import Heading from '@/components/Heading'

const GeosyntheticsPage = ({ siteMetadata, navigation }) => {
  const {
    data: { sitetitle, sitemetaimage },
  } = siteMetadata

  return (
    <Layout navigation={navigation}>
      <Head>
        <title>{`Fittings · ${sitetitle}`}</title>
        <link
          // We are manually setting canonical
          rel="canonical"
          href={`https://hdpe.ca/geosynthetics/`}
        />
        {/*TODO: update all meta data when i know what it is*/}
        <meta
          // The site description is manually inputted so we removed sitedescription from data
          name="description"
          content={'HDPE Technical Data for all of your geosynthetics needs'}
        />
        <meta
          // The site description is manually inputted so we removed sitedescription from data
          property="og:description"
          content={'HDPE Technical Data for all of your geosynthetics needs'}
        />
        <meta property="og:url" content={`https://hdpe.ca/geosynthetics/`} />
        <meta property="og:type" content="website" />

        <meta
          // we are pulling image from prismic
          property="og:image"
          content={sitemetaimage?.url}
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          // we are pulling image from prismic
          property="twitter:image"
          content={sitemetaimage?.url}
        />
      </Head>

      <section className={`mx-auto my-24 max-w-screen-xl`}>
        <div>
          <Heading as="h1" size="4xl">
            Geosynthetics Data Reference Material
          </Heading>
          <p className="commonTextStyles commonTextMargins">
            This page is a collection of data for the Geosynthetics. Please
            contact us if you have any questions.
          </p>
        </div>
        <div>
          {/* Molded Fittings */}
          <Details>
            <summary>Woven Geotextiles</summary>
            {wovenGeotextiles.map((file, index) => (
              <div key={index}>
                <Link
                  href={file.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {file.title}
                </Link>
              </div>
            ))}
          </Details>

          {/* HDPE Fabricated Fittings */}
          <Details>
            <summary>Non-Woven Geotextiles</summary>
            {nonWovenGeoTextiles.map((file, index) => (
              <div key={index}>
                <Link
                  href={file.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {file.title}
                </Link>
              </div>
            ))}
          </Details>

          {/* geogridBiaxial */}
          <Details>
            <summary>Geogrid Biaxial</summary>
            {geogridBiaxial.map((file, index) => (
              <div key={index}>
                <Link
                  href={file.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {file.title}
                </Link>
              </div>
            ))}
          </Details>

          {/* Erosion Control Biaxial */}
          <Details>
            <summary>Erosion Control Biaxial</summary>
            {erosionControlBlankets.map((file, index) => (
              <div key={index}>
                <Link
                  href={file.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {file.title}
                </Link>
              </div>
            ))}
          </Details>

          {/* Turf Reinforcement Mat */}
          <Details>
            <summary>Turf Reinforcement Mat</summary>
            {turfReinforcment.map((file, index) => (
              <div key={index}>
                <Link
                  href={file.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {file.title}
                </Link>
              </div>
            ))}
          </Details>

          {/* Other EPG Geosynthetics Supplies */}
          <Details>
            <summary>Other EPG Geosynthetics Supplies</summary>
            {otherEpgGeosynthetics.map((file, index) => (
              <div key={index}>
                  {file.title}
              </div>
            ))}
          </Details>
        </div>
        {/* provide classnames using tailwind to make the text 14px and italisized */}
        <div className="my-24 text-xs italic">
          {/* Disclaimer Div */}
          <Heading as="h3">Disclaimer:</Heading>
          <p className="commonTextStyles commonTextMargins">
            The information contained herein is provided in good faith, and
            every reasonable effort is made to ensure it is correct and
            up-to-date. However, HDPE.ca assumes no responsibility for any
            errors or omissions which may occur. Further, HDPE.ca assumes no
            responsibility for any damages or losses suffered by any person or
            entity as a result of the information contained herein. This
            information is provided as is, with no warranties whatsoever,
            including any warranty of merchantability, non-infringement, fitness
            for any particular purpose, or any warranty otherwise arising out of
            any proposal, specification, or sample.
          </p>
        </div>
      </section>
    </Layout>
  )
}

export default GeosyntheticsPage

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData })
  const siteMetadata = await client.getSingle('sitemetadata')

  const navigation = await client.getSingle('mainmenu')
  return {
    props: {
      siteMetadata,
      navigation,
    },
  }
}

// Details component in page

const Details = ({ children }) => {
  return (
    <details className={`commonTextStyles commonTextMargins detailsClass`}>
      {children}
    </details>
  )
}

// Create an array that holds the information from /public/assets/data/articles

const wovenGeotextiles = [
  {
    title: 'Geotex 2x2HF',
    link: 'assets/data/geosynthetics/woven-geotextiles/Geotex-2x2HF-Product-Data-Sheet.pdf',
  },
  {
    title: 'Geotex 3X3HF 3X3HF ',
    link: 'assets/data/geosynthetics/woven-geotextiles/GEOTEX-3X3HF-PD.pdf',
  },
  {
    title: 'Geotex 4X4 ',
    link: 'assets/data/geosynthetics/woven-geotextiles/GEOTEX-4X4-PD.pdf',
  },
  {
    title: 'Geotex 200ST ',
    link: 'assets/data/geosynthetics/woven-geotextiles/GEOTEX-200ST-PD.pdf',
  },
  {
    title: 'Geotex 315ST ',
    link: 'assets/data/geosynthetics/woven-geotextiles/GEOTEX-315ST-PD.pdf',
  },
  {
    title: 'Geotex 350ST',
    link: 'assets/data/geosynthetics/woven-geotextiles/GEOTEX-350ST-PD.pdf',
  },
]

const nonWovenGeoTextiles = [
  {
    title: 'Geotex 401 ',
    link: 'assets/data/geosynthetics/non-woven-geotextiles/Geotex-401.pdf',
  },
  {
    title: 'Geotex 601',
    link: 'assets/data/geosynthetics/non-woven-geotextiles/Geotex-601-Product-Data-Sheet.pdf',
  },
  {
    title: 'Geotex 801',
    link: 'assets/data/geosynthetics/non-woven-geotextiles/Geotex-801-Product-Data-Sheet-Mullen-Burst-and-Puncture-and-Weight.pdf',
  },
  {
    title: 'Geotex 861',
    link: 'assets/data/geosynthetics/non-woven-geotextiles/Geotex-861-Product-Data-Sheet-Mullen-Burst-and-Puncture.pdf',
  },
  {
    title: 'Geotex 1001',
    link: 'assets/data/geosynthetics/non-woven-geotextiles/Geotex-1001-Product-Data-Sheet.pdf',
  },
  {
    title: 'Geotex 1071',
    link: 'assets/data/geosynthetics/non-woven-geotextiles/Geotex-1071-Product-Data-Sheet.pdf',
  },
  {
    title: 'Geotex 1201',
    link: 'assets/data/geosynthetics/non-woven-geotextiles/Geotex-1201-Product-Data-Sheet-with-Mullen-Burst-and-Typical-Weight.pdf',
  },
  {
    title: 'Geotex 1291 ',
    link: 'assets/data/geosynthetics/non-woven-geotextiles/Geotex-1291-Product-Data-Sheet.pdf',
  },
  {
    title: 'Geotex 1601',
    link: 'assets/data/geosynthetics/non-woven-geotextiles/Geotex-1601-Product-Data-Sheet.pdf',
  },
  {
    title: 'Geotex 1701',
    link: 'assets/data/geosynthetics/non-woven-geotextiles/Geotex-1701-Product-Data-Sheet.pdf',
  },
]

const geogridBiaxial = [
  {
    title: 'MacGrid EG TDS Spec',
    link: 'assets/data/geosynthetics/geogrid-biaxial/MacGrid-EG-TDS-Spec.pdf',
  },
]

const erosionControlBlankets = [
  { title: 'C32', link: 'assets/data/geosynthetics/geogrid-biaxial/C32.pdf' },
  {
    title: 'C32BD',
    link: 'assets/data/geosynthetics/geogrid-biaxial/C32BD.pdf',
  },
  { title: 'S32', link: 'assets/data/geosynthetics/geogrid-biaxial/S32.pdf' },
  {
    title: 'S32BD',
    link: 'assets/data/geosynthetics/geogrid-biaxial/S32BD.pdf',
  },
  { title: 'SC32', link: 'assets/data/geosynthetics/geogrid-biaxial/SC32.pdf' },
  {
    title: 'SC32-BD',
    link: 'assets/data/geosynthetics/geogrid-biaxial/SC32-BD.pdf',
  },
]

const turfReinforcment = [
  {title: 'Landlok 300', link: 'assets/data/geosynthetics/geogrid-biaxial/Landlok-300-Product-Data-Sheet.pdf'},
{title: 'Landlok TRM 450', link: 'assets/data/geosynthetics/geogrid-biaxial/Landlok-TRM-450-Product-Data-Sheet.pdf'},
{title: 'Pyramat', link: 'assets/data/geosynthetics/geogrid-biaxial/Pyramat-Product-Data-Sheet.pdf'}
]


const otherEpgGeosynthetics = [

  {
    title: "HDPE & LLDPE Geomembranes"
  },
  {
    title: "Geosynthetic Clay Liner (GCL)"
  },
  {
    title: "Geocomposites"
  },
  {
    title: "Weeping Tile/Wick Drain"
  },
  {
    title: "Cellular Confinement Surface Reinforcement"
  },
  {
    title: "Pipe Filter Sock"
  },
  {
    title: "Geoweb Surface Reinforcement"
  },
  {
    title: "Gabion Systems"
  },
  {
    title: "Silt Fencing"
  },
  {
    title: "Sediment Logs"
  },

]
