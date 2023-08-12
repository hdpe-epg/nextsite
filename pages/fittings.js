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

const FittingsPage = ({ siteMetadata, navigation }) => {
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
          href={`https://hdpe.ca/fittings/`}
        />
        {/*TODO: update all meta data when i know what it is*/}
        <meta
          // The site description is manually inputted so we removed sitedescription from data
          name="description"
          content={'HDPE Technical Data for all of your pipe fittings needs'}
        />
        <meta
          // The site description is manually inputted so we removed sitedescription from data
          property="og:description"
          content={'HDPE Technical Data for all of your pipe needs'}
        />
        <meta property="og:url" content={`https://hdpe.ca/fittings/`} />
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
          <Heading as="h1" >
            Pipe Fittings Data Reference Material
          </Heading>
          <p className="commonTextStyles commonTextMargins">
            This page is a collection of Fittings data for the products we sell.
            Please contact us if you have any questions.
          </p>
        </div>
        <div>
          {/* Molded Fittings */}
          <Details>
            <summary>Molded Fittings</summary>
            {moldedFittings.map((eachFitting, index) => (
              <div key={index}>
                <Link
                  href={eachFitting.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {eachFitting.title}
                </Link>
              </div>
            ))}
          </Details>

          {/* HDPE Fabricated Fittings */}
          <Details>
            <summary>HDPE Fabricated Fittings</summary>
            {hdpeFabFittings.map((file, index) => (
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

          {/* Electrofusion */}
          <Details>
            <summary>Electrofusion</summary>
            {electrofusion.map((file, index) => (
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

          {/* Flange */}
          <Details>
            <summary>Flange Adapter, Backup Rings, and Stub Ends</summary>
            {flangBackupStubEnds.map((file, index) => (
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

export default FittingsPage

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

const moldedFittings = [
  {
    title: 'IPS Molded End Cap',
    link: 'assets/data/fittings/molded-fittings/EPG-12-IPS-MOLDED-CAP-REV-611.xlsx',
  },
  {
    title: 'IPS Molded Reducer',
    link: 'assets/data/fittings/molded-fittings/EPG-13E-IPS-MOLDED-REDUCER-REV-6-11.xlsx',
  },
  {
    title: 'IPS Molded 90',
    link: 'assets/data/fittings/molded-fittings/EPG-14J-IPS-MOLDED-90-ELL-REV-6-11.xlsx',
  },
  {
    title: 'DIPS 90 Elbow',
    link: 'assets/data/fittings/molded-fittings/EPG-14K-DIPS-MOLDED-90.xlsx',
  },
  {
    title: 'IPS Molded 45 Elbow',
    link: 'assets/data/fittings/molded-fittings/EPG-14L-IPS-MOLDED-45-REV-6-11.xlsx',
  },
  {
    title: 'DIPS Molded 45 Elbow',
    link: 'assets/data/fittings/molded-fittings/EPG-14M-DIPS-MOLDED-45-ELL.xlsx',
  },
  {
    title: 'IPS Molded Tee',
    link: 'assets/data/fittings/molded-fittings/EPG-15D-IPS-MOLDED-TEE-REV-6-11.xlsx',
  },
  {
    title: 'DIPS Molded Tee',
    link: 'assets/data/fittings/molded-fittings/EPG-15E-DIPS-MOLDED-TEES.xlsx',
  },
]

const hdpeFabFittings = [
  {
    title: 'DIPS Fab 3 Seg 90 Elbow',
    link: 'assets/data/fittings/hdpe-fabricated-fittings/EPG-14I-DIPS-FAB-3-SEG-90-ELL-REV.xlsx',
  },
  {
    title: 'IPS Fab BS Red Tee',
    link: 'assets/data/fittings/hdpe-fabricated-fittings/EPG-15A-IPS-FAB-BS-RED-TEE-REV2.xlsx',
  },
  {
    title: 'DIPS Fab Tee',
    link: 'assets/data/fittings/hdpe-fabricated-fittings/EPG-15C-DIPS-FAB-TEE-REV2.xlsx',
  },
  {
    title: 'DIPS Fab Crosses',
    link: 'assets/data/fittings/hdpe-fabricated-fittings/EPG-16A-DIPS-FAB-CROSSES-REV.xlsx',
  },
  {
    title: 'IPS Fab Red Lateral',
    link: 'assets/data/fittings/hdpe-fabricated-fittings/EPG-17A-IPS-FAB-RED-LATERAL-REV.xlsx',
  },
  {
    title: 'IPS HDPE Blind Flange',
    link: 'assets/data/fittings/hdpe-fabricated-fittings/EPG-8-IPS-HDPE-BLIND-FLANGE-REV.xlsx',
  },
  {
    title: 'DIPS Fab MJ Adapter',
    link: 'assets/data/fittings/hdpe-fabricated-fittings/EPG-9A-DIPS-FAB-MJ-ADAPTER-REV.xlsx',
  },
  {
    title: 'DIPS Fab Wall Anchor Water Stop',
    link: 'assets/data/fittings/hdpe-fabricated-fittings/EPG-10B-DIPS-FAB-WALL-ANCHOR-WATER-STOP-REV.xlsx',
  },
  {
    title: 'IPS Fab Caps',
    link: 'assets/data/fittings/hdpe-fabricated-fittings/EPG-12A-IPS-FAB-CAPS.xlsx',
  },
  {
    title: 'IPS Fab ECC Reducer',
    link: 'assets/data/fittings/hdpe-fabricated-fittings/EPG-13B-IPS-FAB-ECC-REDUCER-REV2.xlsx',
  },
  {
    title: 'DIPS Fab Swage Reducer',
    link: 'assets/data/fittings/hdpe-fabricated-fittings/EPG-13D-DIPS-FAB-SWAGE-REDUCER-REV.xlsx',
  },
  {
    title: 'IPS Fab 2 Seg 30 Elbow',
    link: 'assets/data/fittings/hdpe-fabricated-fittings/EPG-14A-IPS-FAB-2-SEG-30-ELL-REV.xlsx',
  },
  {
    title: 'IPS Fab 3 Seg 45 Elbow',
    link: 'assets/data/fittings/hdpe-fabricated-fittings/EPG-14C-IPS-FAB-3SEG-45-ELL-REV.xlsx',
  },
  {
    title: 'IPS Fab 5 Seg 90 Elbow',
    link: 'assets/data/fittings/hdpe-fabricated-fittings/EPG-14E-IPS-FAB-5SEG-90-ELL-REV.xlsx',
  },
  {
    title: 'DIPS Fab 2 Seg 45 Elbow',
    link: 'assets/data/fittings/hdpe-fabricated-fittings/EPG-14H-DIPS-FAB-2-SEG-45-ELL-REV.xlsx',
  },
  {
    title: 'IPS Fab Tees',
    link: 'assets/data/fittings/hdpe-fabricated-fittings/EPG-15-IPS-FAB-TEES-REV.xlsx',
  },
  {
    title: 'DIPS Fab Branch Saddle Red Tee',
    link: 'assets/data/fittings/hdpe-fabricated-fittings/EPG-15B-DIPS-FAB-BRANCH-SADDLE-RED-TEE-REV1.xlsx',
  },
  {
    title: 'IPS Fab Crosses',
    link: 'assets/data/fittings/hdpe-fabricated-fittings/EPG-16-IPS-FAB-CROSSES-REV.xlsx',
  },
  {
    title: 'IPS Fab Lateral',
    link: 'assets/data/fittings/hdpe-fabricated-fittings/EPG-17-IPS-FAB-LATERAL-REV.xlsx',
  },
  {
    title: 'DIPS Fab Lateral',
    link: 'assets/data/fittings/hdpe-fabricated-fittings/EPG-17C-DIPS-FAB-LATERAL-REV.xlsx',
  },
  {
    title: 'IPS Fab MJ Adapter',
    link: 'assets/data/fittings/hdpe-fabricated-fittings/EPG-9-IPS-FAB-MJ-ADPATER.xlsx',
  },
  {
    title: 'IPS Fab Wall Anchor-Water Stop',
    link: 'assets/data/fittings/hdpe-fabricated-fittings/EPG-10-IPS-FAB-WALL-ANCHOR-WATER-STOP-REV.xlsx',
  },
  {
    title: 'IPS DIPS Fab Transition',
    link: 'assets/data/fittings/hdpe-fabricated-fittings/EPG-11-IPS-DIPS-FAB-TRANSITION-REV.xlsx',
  },
  {
    title: 'IPS Fab Swage Red',
    link: 'assets/data/fittings/hdpe-fabricated-fittings/EPG-13A-IPS-FAB-SWAGE-RED-REV1.xlsx',
  },
  {
    title: 'DIPS Fab Conc Reducer',
    link: 'assets/data/fittings/hdpe-fabricated-fittings/EPG-13C-DIPS-FAB-CONC-REDUCER-REV.xlsx',
  },
  {
    title: 'IPS Fab 2 Seg 22.5 Elbow',
    link: 'assets/data/fittings/hdpe-fabricated-fittings/EPG-14-IPS-FAB-2SEG-22.5-ELL-REV.xlsx',
  },
  {
    title: 'IPS Fab 2 Seg 45 Elbow',
    link: 'assets/data/fittings/hdpe-fabricated-fittings/EPG-14B-IPS-FAB-2SEG-45-ELL-REV.xlsx',
  },
  {
    title: 'IPS Fab 3 Seg 45 Elbow',
    link: 'assets/data/fittings/hdpe-fabricated-fittings/EPG-14C-IPS-FAB-3SEG-45-ELL-REV.xlsx',
  },
  {
    title: 'IPS Fab 5 Seg 90 Elbow',
    link: 'assets/data/fittings/hdpe-fabricated-fittings/EPG-14E-IPS-FAB-5SEG-90-ELL-REV.xlsx',
  },
  {
    title: 'DIPS Fab 2 Seg 45 Elbow',
    link: 'assets/data/fittings/hdpe-fabricated-fittings/EPG-14H-DIPS-FAB-2-SEG-45-ELL-REV.xlsx',
  },
]

const electrofusion = [
  {
    title: 'IPS Electrofusion Coupling',
    link: 'assets/data/fittings/electrofusion/EPG-18A-EF-COUP-DIM-IPS-SMALL-DIA-version-1.xlsx',
  },
  {
    title: 'DIPS Electrofusion Coupling',
    link: 'assets/data/fittings/electrofusion/EPG-18B-EF-COUP-DIM-DIPS-4-12-version-1.xlsx',
  },
  {
    title: 'IPS Electrofusion Large Diameter',
    link: 'assets/data/fittings/electrofusion/EPG-18C-EF-IPS-LARGE-DIA-COUPLIING-14-26-version-1.xlsx',
  },
  {
    title: 'DIPS Electrofusion Large Diameter',
    link: 'assets/data/fittings/electrofusion/EPG-18F-DIPS-14-24-EF-COUPLING-version-1.xlsx',
  },
]

const flangBackupStubEnds = [
  {
    title: 'IPS Flange Adapter Molded and Fabricated',
    link: 'assets/data/fittings/flangeBackupStubEnds/EPG-6-IPS-FLANGE-ADPAPTER-MOLD-AND-FAB-REV.xlsx',
  },
  {
    title: 'IPS HDPE Blind Flang',
    link: 'assets/data/fittings/flangeBackupStubEnds/EPG-8-IPS-HDPE-BLIND-FLANGE-REV-1.xlsx',
  },
  {
    title: 'IPF Convoluted Backup Flange',
    link: 'assets/data/fittings/flangeBackupStubEnds/EPG-8A-IPF-CONVOLUTED-BU-FLG-REV.xlsx',
  },
  {
    title: 'DIPS Fabricated Stub End',
    link: 'assets/data/fittings/flangeBackupStubEnds/EPG-7A-DIPS-FAB-STUB-END-REV.xlsx',
  },
]

const performancePipe = [
  {
    title: 'HDPE Advantages',
    link: 'assets/data/performance-pipe/HDPE-Advantages.pdf',
  },
  { title: 'HDPE MSDS', link: 'assets/data/performance-pipe/HDPE-MSDS.pdf' },
  {
    title: 'HDPE Products and Markets',
    link: 'assets/data/performance-pipe/HDPE-Products-and-Markets.pdf',
  },
  {
    title: 'HDPE PVC working pressure',
    link: 'assets/data/performance-pipe/HDPE-PVC-working-pressure.pdf',
  },
  {
    title: 'How to Read a PP Gas Pipe Printline Rev2  7-1-10',
    link: 'assets/data/performance-pipe/How-to-Read-a-PP-Gas-Pipe-Printline-Rev2-7-1-10.pdf',
  },
  {
    title: 'PE4710 DATASHEET',
    link: 'assets/data/performance-pipe/PE4710-DATASHEET.pdf',
  },
  {
    title: 'PE4710 IPS SIZES',
    link: 'assets/data/performance-pipe/PE4710-IPS-SIZES.pdf',
  },
  {
    title: 'PEpipingMunicipalIndustrialApplications',
    link: 'assets/data/performance-pipe/PEpipingMunicipalIndustrialApplications.pdf',
  },
  {
    title: 'PEpipingUndergroundFireMainSystems',
    link: 'assets/data/performance-pipe/PEpipingUndergroundFireMainSystems.pdf',
  },
  {
    title: 'performance model spec',
    link: 'assets/data/performance-pipe/performance-model-spec.pdf',
  },
  {
    title: 'Potable Water Mains Model Specs',
    link: 'assets/data/performance-pipe/Potable-Water-Mains-Model-Specs.pdf',
  },
  {
    title: 'PP 101 4000-4100',
    link: 'assets/data/performance-pipe/PP-101-4000-4100.pdf',
  },
  {
    title: 'PP 152 4710 IPS Size and Dimension Sheet',
    link: 'assets/data/performance-pipe/PP-152-4710-IPS-Size-and-Dimension-Sheet.pdf',
  },
  {
    title: 'PP 302 – 8100 Gas BROCHURE',
    link: 'assets/data/performance-pipe/PP-302-8100-Gas-BROCHURE.pdf',
  },
  {
    title: 'PP 303 – 8300 Gas BROCHURE',
    link: 'assets/data/performance-pipe/PP-303-8300-Gas-BROCHURE.pdf',
  },
  {
    title: 'PP 310 GAS Brochure',
    link: 'assets/data/performance-pipe/PP-310-GAS-Brochure.pdf',
  },
  {
    title: 'PP 410 5100 Series Flyer',
    link: 'assets/data/performance-pipe/PP-410-5100-Series-Flyer.pdf',
  },
  {
    title: 'PP 415 DriscoPlex 5100 UltraLine',
    link: 'assets/data/performance-pipe/PP-415-DriscoPlex-5100-UltraLine.pdf',
  },
  {
    title: 'PP 507 Water Wastewater Service Model Specification',
    link: 'assets/data/performance-pipe/PP-507-Water-Wastewater-Service-Model-Specification.pdf',
  },
  {
    title: 'PP 508  Model Spec – Sanitary Sewer and Force Main 07-2008',
    link: 'assets/data/performance-pipe/PP-508-Model-Spec-Sanitary-Sewer-and-Force-Main-07-2008.pdf',
  },
  {
    title: 'PP 509 Model Specifications for Gravity Sewer Revised July 2008',
    link: 'assets/data/performance-pipe/PP-509-Model-Specifications-for-Gravity-Sewer-Revised-July-2008.pdf',
  },
  {
    title: 'PP 523 1700 Series Mining Pipe',
    link: 'assets/data/performance-pipe/PP-523-1700-Series-Mining-Pipe.pdf',
  },
  {
    title: 'PP 524 4000-4100 Series Multi Purpose Pipe',
    link: 'assets/data/performance-pipe/PP-524-4000-4100-Series-Multi-Purpose-Pipe.pdf',
  },
  {
    title: 'PP 524-F 4000-4100 Series Flyer_French',
    link: 'assets/data/performance-pipe/PP-524-F-4000-4100-Series-Flyer_French.pdf',
  },
  {
    title: 'PP 525 4000-4100 FM Series Flyer',
    link: 'assets/data/performance-pipe/PP-525-4000-4100-FM-Series-Flyer.pdf',
  },
  {
    title: 'PP 526 Industrial and Mining Brochure',
    link: 'assets/data/performance-pipe/PP-526-Industrial-and-Mining-Brochure.pdf',
  },
  {
    title: 'PP 529 1000 Series Large Diameter Non Potable Water Pipe',
    link: 'assets/data/performance-pipe/PP-529-1000-Series-Large-Diameter-Non-Potable-Water-Pipe.pdf',
  },
  {
    title: 'PP 803-TN Pull-In Applications-Nov.02',
    link: 'assets/data/performance-pipe/PP-803-TN-Pull-In-Applications-Nov.02.pdf',
  },
  {
    title: 'PP 813-TN Poisson Effects',
    link: 'assets/data/performance-pipe/PP-813-TN-Poisson-Effects.pdf',
  },
  {
    title: 'PP 815-TN Above Grade Pipe Support 03-05-2007',
    link: 'assets/data/performance-pipe/PP-815-TN-Above-Grade-Pipe-Support-03-05-2007.pdf',
  },
  {
    title: 'PP 816-TN PE3608 PE4710 Designation Code and Pressure Rating',
    link: 'assets/data/performance-pipe/PP-816-TN-PE3608-PE4710-Designation-Code-and-Pressure-Rating.pdf',
  },
  {
    title: 'PP 819 – TN Field Bending of PE Pipe J 2010',
    link: 'assets/data/performance-pipe/PP-819-TN-Field-Bending-of-PE-Pipe-J-2010.pdf',
  },
  {
    title: 'PP 820 TN Design Factor for HDPE Pipe J 2010',
    link: 'assets/data/performance-pipe/PP-820-TN-Design-Factor-for-HDPE-Pipe-J-2010.pdf',
  },
  {
    title: 'PP 831-TN Compressed Air',
    link: 'assets/data/performance-pipe/PP-831-TN-Compressed-Air.pdf',
  },
  {
    title: 'PP 838-TN Preventing RCP in Fused Water Pipelines 10-2010',
    link: 'assets/data/performance-pipe/PP-838-TN-Preventing-RCP-in-Fused-Water-Pipelines-10-2010.pdf',
  },
  {
    title: 'PP51 How to Read A Fitting Label',
    link: 'assets/data/performance-pipe/PP51-How-to-Read-A-Fitting-Label.pdf',
  },
  {
    title: 'PP101 4000-4100 Series',
    link: 'assets/data/performance-pipe/PP101-4000-4100-Series.pdf',
  },
  {
    title: 'PP102 4600-4700 Series',
    link: 'assets/data/performance-pipe/PP102-4600-4700-Series.pdf',
  },
  {
    title: 'PP104 4000 4100 FM Series',
    link: 'assets/data/performance-pipe/PP104-4000-4100-FM-Series.pdf',
  },
  {
    title: 'PP402 HDPE vs PVC Fatigue',
    link: 'assets/data/performance-pipe/PP402-HDPE-vs-PVC-Fatigue.pdf',
  },
  {
    title: 'PP407 HDPE vs PVC Bend Radius',
    link: 'assets/data/performance-pipe/PP407-HDPE-vs-PVC-Bend-Radius.pdf',
  },
  { title: 'PP408 RCP', link: 'assets/data/performance-pipe/PP408-RCP.pdf' },
  {
    title: 'PP409 HDPE Tough Enough to Handle Chlorine',
    link: 'assets/data/performance-pipe/PP409-HDPE-Tough-Enough-to-Handle-Chlorine.pdf',
  },
  {
    title: 'PP515 Product Submittal Sheet',
    link: 'assets/data/performance-pipe/PP515-Product-Submittal-Sheet.pdf',
  },
  {
    title: 'PP750 FusionProcedures',
    link: 'assets/data/performance-pipe/PP750-FusionProcedures.pdf',
  },
  {
    title: 'PP801-TN Squeeze-Off',
    link: 'assets/data/performance-pipe/PP801-TN-Squeeze-Off.pdf',
  },
  {
    title: 'PP802-TN Leak Test',
    link: 'assets/data/performance-pipe/PP802-TN-Leak-Test.pdf',
  },
  {
    title: 'PP803-TN Pull-In Applications',
    link: 'assets/data/performance-pipe/PP803-TN-Pull-In-Applications.pdf',
  },
  {
    title: 'PP813-TN Mechanical Restraint and Poisson Effects',
    link: 'assets/data/performance-pipe/PP813-TN-Mechanical-Restraint-and-Poisson-Effects.pdf',
  },
  {
    title: 'PP814-TN Thermal Effects',
    link: 'assets/data/performance-pipe/PP814-TN-Thermal-Effects.pdf',
  },
  {
    title: 'PP818-TN PENT Slow Crack Growth Resistance',
    link: 'assets/data/performance-pipe/PP818-TN-PENT-Slow-Crack-Growth-Resistance.pdf',
  },
  {
    title: 'PP819-TN Field Bending of PE Pipe J 2010',
    link: 'assets/data/performance-pipe/PP819-TN-Field-Bending-of-PE-Pipe-J-2010.pdf',
  },
  {
    title: 'PP831-TN PE 3408 Pipe in Compressed Air or Compressed Gas Service',
    link: 'assets/data/performance-pipe/PP831-TN-PE-3408-Pipe-in-Compressed-Air-or-Compressed-Gas-Service.pdf',
  },
  {
    title: 'T.1.1 – Truckload Tables MIE – 2 – 12 INCH IPS-DIPS 10_2010',
    link: 'assets/data/performance-pipe/T.1.1-Truckload-Tables-MIE-2-12-INCH-IPS-DIPS-10_2010.pdf',
  },
  {
    title: 'T.1.2  –  Truckload Tables MIE  4 – 36 INCH DIPS Rev 12_2010',
    link: 'assets/data/performance-pipe/T.1.2-Truckload-Tables-MIE-4-36-INCH-DIPS-Rev-12_2010.pdf',
  },
  {
    title: 'T.1.3   14 – 54 INCH IPS MIE TRUCKLOAD TABLE',
    link: 'assets/data/performance-pipe/T.1.3-14-54-INCH-IPS-MIE-TRUCKLOAD-TABLE.pdf',
  },
  {
    title: 'C.2.a  Recommendations to Customers – Unloading',
    link: 'assets/data/performance-pipe/C.2.a-Recommendations-to-Customers-Unloading.pdf',
  },
  {
    title: 'C.2.b  Recommendations to Customers – Receiving',
    link: 'assets/data/performance-pipe/C.2.b-Recommendations-to-Customers-Receiving.pdf',
  },
  {
    title: 'Driscoplex piping for municiapl applications cont',
    link: 'assets/data/performance-pipe/Driscoplex-piping-for-municiapl-applications-cont.pdf',
  },
  {
    title: 'Driscoplex piping for municipal applications',
    link: 'assets/data/performance-pipe/Driscoplex-piping-for-municipal-applications.pdf',
  },
  {
    title: 'FAQ Municipal water',
    link: 'assets/data/performance-pipe/FAQ-Municipal-water.pdf',
  },
  {
    title: 'FAQ Performance pipe',
    link: 'assets/data/performance-pipe/FAQ-Performance-pipe.pdf',
  },
]

const uponer = [
  {
    title: 'Sclairpipe Model Specification',
    link: 'assets/data/uponer/sclairpipe-model-specification.pdf',
  },
  {
    title: 'Design and Selection of Plastic Pressure Pipe',
    link: 'assets/data/uponer/tsb-design-and-selection-of-plastic-pressure-pipe_r201601.pdf',
  },
  {
    title: 'Sclairpipe DIPS Pipe Sizes and Pressure Ratings PE4710',
    link: 'assets/data/uponer/uponor-sclair-dips-pe4710_r201505.pdf',
  },
  {
    title: 'Sclair Factory Mutual(FM) Approved Pipe',
    link: 'assets/data/uponer/uponor-sclair-fm-approved-pipe_r201506.pdf',
  },
  {
    title: 'Sclair IPS Pipe Sizes and Pressure Ratings PE3608',
    link: 'assets/data/uponer/uponor-sclair-ips-pe3608_r201505.pdf',
  },
  {
    title: 'Sclair IPS Pipe Sizes and Pressure Ratings PE4710',
    link: 'assets/data/uponer/uponor-sclair-ips-pe4710_r201505.pdf',
  },
  {
    title: 'Weholite General Info',
    link: 'assets/data/uponer/weholite-general-info.pdf',
  },
  {
    title: 'Sclairpipe Flow of Water',
    link: 'assets/data/uponer/4695_flowofwater.pdf',
  },
  {
    title: 'Butt Fusion Joining Procedure and Qualification Guide',
    link: 'assets/data/uponer/butt-fusion-procedure_r201505.pdf',
  },
  {
    title: 'Engineered Systems Genearl Information Brochure',
    link: 'assets/data/uponer/engineered-systems-general-information-brochure-web-copy.pdf',
  },
  {
    title: 'Sclairpipe Marine Pipeline Installation',
    link: 'assets/data/uponer/Sclairpipe-marine.pdf',
  },
  {
    title: 'Sclairpipe Systems Design',
    link: 'assets/data/uponer/Sclairpipe-systemdesign.pdf',
  },
  {
    title: 'Sclairpipe Construction',
    link: 'assets/data/uponer/SclairpipeConstruction.pdf',
  },
  {
    title: 'Sclairpipe General Info',
    link: 'assets/data/uponer/sclairpipe-general-info.pdf',
  },
]
