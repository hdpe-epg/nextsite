/*
FOR CHANGELOG:
We are creating the content of this page manually beceause we don't yet have a solution
on how to route the PDFs and excels to the correct urls. The specific problem is that
the AMAZON is hashing the files, and we need the downloads to never change so we don't
ruin their SEO as far as the files themselves go.
 */

import * as React from 'react'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Layout from '@/components/Layout'
import { createClient } from '@/prismicio'
import Head from 'next/head'
import Link from 'next/link'

import Heading from '@/components/Heading'

const TechnicalDataPage = ({ siteMetadata, navigation }) => {
  const {
    data: { sitetitle, sitemetaimage },
  } = siteMetadata

  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = url => {
      // Track file download event using Google Analytics or Google Tag Manager
      // Replace 'YOUR_EVENT_CATEGORY' and 'YOUR_EVENT_ACTION' with appropriate values
      gtag('event', 'File Downloads', {
        event_category: 'File Downloads',
        event_label: url,
      })
    }

    router.events.on('routeChangeComplete', handleRouteChange)

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <Layout navigation={navigation}>
      <Head>
        <title>{`Technical Data · ${sitetitle}`}</title>
        <link
          // We are manually setting canonical
          rel="canonical"
          href={`https://hdpe.ca/technical-data/`}
        />
        {/*TODO: update all meta data when i know what it is*/}
        <meta
          // The site description is manually inputted so we removed sitedescription from data
          name="description"
          content={'HDPE Technical Data for all of your pipe needs'}
        />
        <meta
          // The site description is manually inputted so we removed sitedescription from data
          property="og:description"
          content={'HDPE Technical Data for all of your pipe needs'}
        />
        <meta property="og:url" content={`https://hdpe.ca/technical-data/`} />
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
            Technical Data Reference Material
          </Heading>
          <p className="commonTextStyles commonTextMargins">
            This page is a collection of technical data for the products we
            sell. Please contact us if you have any questions.
          </p>
        </div>
        <div>
          {/* Articles */}
          <Details>
            <summary>Articles</summary>
            {articles.map((article, index) => (
              <div key={index}>
                <Link
                  href={article.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {article.title}
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

          {/* HDPE */}
          <Details>
            <summary>HDPE Chemical Resistance</summary>
            {hdpe.map((file, index) => (
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

          {/* McElroy */}
          <Details>
            <summary>McElroy</summary>
            {mcelroy.map((file, index) => (
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

          {/* Performance Pipe */}
          <Details>
            <summary>Performance Pipe</summary>
            {performancePipe.map((file, index) => (
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

          {/* Uponer */}
          <Details>
            <summary>Uponer</summary>
            {uponer.map((file, index) => (
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

export default TechnicalDataPage

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

const articles = [
  {
    title: 'Regina Opts for Easier, Cheaper Way to Access Deep Sewers',
    link: 'assets/data/articles/M0416_Online-Exclusive_Regina-Opts-for-Easier-Cheaper-Way-to-Access-Dee....pdf',
  },
  {
    title: 'North Vancouver Pipe Burst Requires Careful Planning',
    link: 'assets/data/articles/page-8-12-CUI-JanFeb2016.pdf',
  },
  {
    title: 'New HDPE Pipe Standard to Result in Stronger, Watertight Product',
    link: 'assets/data/articles/page-36-37-CUI-JanFeb2016.pdf',
  },
]

const electrofusion = [
  {
    title: 'ACT3 Operating Manual',
    link: 'assets/data/electrofusion/ACT3_operating_manual.pdf',
  },
  {
    title: 'MSA 340 Brochure – GF Piping Systems',
    link: 'assets/data/electrofusion/Brochure-MSA-340.pdf',
  },
  {
    title: 'Electrofusion checklist',
    link: 'assets/data/electrofusion/EF-checklist.pdf',
  },
  {
    title: 'Genesis F3 Electrofusion Processor Operator Guide – Ipex',
    link: 'assets/data/electrofusion/Gensis-F3-Processor-Operator-Guide.pdf',
  },
  {
    title: 'GFCP EF Installation Booklet',
    link: 'assets/data/electrofusion/GFCP-EF-Installation-Booklet.pdf',
  },
]

const hdpe = [
  {
    title: 'HDPE Chemical Resistance Chart',
    link: 'assets/data/hdpe-chemical-resistance/HDPE_CRC1.pdf',
  },
]

const mcelroy = [
  {
    title: 'PitBull 250 Specifications',
    link: 'assets/data/mcelroy/250PitBull.pdf',
  },
  {
    title: 'Rolling 250 Specifications',
    link: 'assets/data/mcelroy/250Rolling.pdf',
  },
  {
    title: 'TracStar 250 Specifications',
    link: 'assets/data/mcelroy/250TracStar.pdf',
  },
  {
    title: 'PitBull 500 Specifications',
    link: 'assets/data/mcelroy/500PitBull.pdf',
  },
  {
    title: 'TracStar 500 Series II Specifications',
    link: 'assets/data/mcelroy/500TracStar.pdf',
  },
  {
    title: 'DataLogger 4 Specifications',
    link: 'assets/data/mcelroy/DataLogger4.pdf',
  },
  {
    title: 'DataLogger 5 Specifications',
    link: 'assets/data/mcelroy/DataLogger5spec.pdf',
  },
  {
    title: 'DynaMc 28 HP Specifications',
    link: 'assets/data/mcelroy/DynaMc28HP.pdf',
  },
  {
    title: 'DynaMc 250 HP Specifications',
    link: 'assets/data/mcelroy/DynaMc250HP.pdf',
  },
  {
    title: 'DynaMc 412 HP Specifications',
    link: 'assets/data/mcelroy/DynaMc412HP.pdf',
  },
  {
    title: 'In Field Tensile Tester Specifications',
    link: 'assets/data/mcelroy/FieldTensileTester.pdf',
  },
  {
    title: 'Guided Side Bend Tester Operator Manual',
    link: 'assets/data/mcelroy/GuidedSideBendTester-prod-manual.pdf',
  },
  {
    title: 'Guided Side Bend Tester Specifications',
    link: 'assets/data/mcelroy/GuidedSideBendTester.pdf',
  },
  {
    title: 'Hydraulic Clamping Retrofit Kit Specifications',
    link: 'assets/data/mcelroy/hydraulicclampingretrofit.pdf',
  },
  {
    title: 'Large Diameter Fusion Machines Brochure',
    link: 'assets/data/mcelroy/LargeDiameterBrochure.pdf',
  },
  {
    title: 'Low Profile Rollers Specifications',
    link: 'assets/data/mcelroy/lowprofilerollers.pdf',
  },
  {
    title: 'McElroy 2013 Catalog & Reference Guide',
    link: 'assets/data/mcelroy/McElroy-2013-Catalog.pdf',
  },
  {
    title: 'DataLogger Brochure',
    link: 'assets/data/mcelroy/McElroy-DataLogger.pdf',
  },
  {
    title: 'McElroy University Training Course Catalog',
    link: 'assets/data/mcelroy/McElroyUniversity.pdf',
  },
  {
    title: 'MegaMc 824 Specifications',
    link: 'assets/data/mcelroy/MegaMc824.pdf',
  },
  {
    title: 'MegaMc 1236 Specifications',
    link: 'assets/data/mcelroy/MegaMc1236.pdf',
  },
  {
    title: 'MegaMc Four-Jaw 1600 Specifications',
    link: 'assets/data/mcelroy/MegaMc1600FJ2009.pdf',
  },
  {
    title: 'MegaMc 1648 Specifications',
    link: 'assets/data/mcelroy/MegaMc1648.pdf',
  },
  {
    title: 'MegaMc Pipe Stands Specifications',
    link: 'assets/data/mcelroy/MegaMcPipeStands.pdf',
  },
  {
    title: 'MegaMc PolyHorse Specifications',
    link: 'assets/data/mcelroy/MegaMcPolyHorse.pdf',
  },
  {
    title: 'PitBull 14 Specifications',
    link: 'assets/data/mcelroy/No14PitBull.pdf',
  },
  {
    title: 'PitBull 28 Specifications',
    link: 'assets/data/mcelroy/No28PitBull.pdf',
  },
  {
    title: 'Rolling 28 Specifications',
    link: 'assets/data/mcelroy/No28Rolling.pdf',
  },
  {
    title: 'Rolling 28 HP Specifications',
    link: 'assets/data/mcelroy/No28RollingHP.pdf',
  },
  {
    title: 'TracStar Specifications',
    link: 'assets/data/mcelroy/No28TracStar.pdf',
  },
  {
    title: 'PitBull 412 Specifications',
    link: 'assets/data/mcelroy/No412PitBull.pdf',
  },
  {
    title: 'Rolling 412 Specifications',
    link: 'assets/data/mcelroy/No412Rolling.pdf',
  },
  {
    title: 'TracStar 412 Specifications',
    link: 'assets/data/mcelroy/No412TracStar.pdf',
  },
  {
    title: 'PitBull 618 Specifications',
    link: 'assets/data/mcelroy/No618PitBull.pdf',
  },
  {
    title: 'Rolling 618 Specifications',
    link: 'assets/data/mcelroy/No618Rolling.pdf',
  },
  {
    title: 'TracStar 618 Specifications',
    link: 'assets/data/mcelroy/No618TracStar.pdf',
  },
  {
    title: 'Polyporter Specifications',
    link: 'assets/data/mcelroy/polyporter.pdf',
  },
  {
    title: 'Productivity Tools Brochure',
    link: 'assets/data/mcelroy/Productivity-09.pdf',
  },
  {
    title: 'QuickCamp Specifications',
    link: 'assets/data/mcelroy/QuickCampspec.pdf',
  },
  {
    title: 'Small Diameter Fusion Machines Brochure',
    link: 'assets/data/mcelroy/SmallDiameterBrochure.pdf',
  },
  {
    title: 'Stub End Holders Specifications',
    link: 'assets/data/mcelroy/stubendholders2009.pdf',
  },
  {
    title: 'TracStar 500 Series 3 Specifications',
    link: 'assets/data/mcelroy/T500SpecSeries3.pdf',
  },
  {
    title: 'Talon 2000 Specifications',
    link: 'assets/data/mcelroy/Talon2000.pdf',
  },
  {
    title: 'TracStar 630 Specifications',
    link: 'assets/data/mcelroy/TracStar630.pdf',
  },
  {
    title: 'TracStar 900 Specifications',
    link: 'assets/data/mcelroy/TracStar900.pdf',
  },
  {
    title: '28 Vertical Fusion Machine Specifications',
    link: 'assets/data/mcelroy/VerticalFusionMachine.pdf',
  },
  { title: '1LC Specifications', link: 'assets/data/mcelroy/1LC.pdf' },
  { title: '2CU Specifications', link: 'assets/data/mcelroy/2CU.pdf' },
  { title: '2LC Specifications', link: 'assets/data/mcelroy/2LC.pdf' },
  {
    title: 'Pit Bull 26 Specifications',
    link: 'assets/data/mcelroy/26PitBull.pdf',
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
