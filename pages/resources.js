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

const TechnicalDataPage = ({ siteMetadata, navigation }) => {
  const {
    data: { sitetitle, sitemetaimage },
  } = siteMetadata

  return (
    <Layout navigation={navigation}>
      <Head>
        <title>{`Resources and Technical Data · ${sitetitle}`}</title>
        <link
          // We are manually setting canonical
          rel="canonical"
          href={`https://hdpe.ca/resources/`}
        />
        {/*TODO: update all meta data when i know what it is*/}
        <meta
          // The site description is manually inputted so we removed sitedescription from data
          name="description"
          content={'HDPE Resources Technical Data for all of your pipe needs'}
        />
        <meta
          // The site description is manually inputted so we removed sitedescription from data
          property="og:description"
          content={
            'HDPE Resources and Technical Data for all of your pipe needs'
          }
        />
        <meta property="og:url" content={`https://hdpe.ca/resources/`} />
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
        <Heading className={``} as="h1">Resources and Technical Data</Heading>
        <p className="commonTextStyles commonTextMargins">
          This is our collection of Resources and Technical Data available for
          download. If you find what you&apos;re looking for, or if you&apos;re after
          something specific, please reach out and call us.
        </p>
        <p className="commonTextStyles commonTextMargins">
          If you&apos;re intrested in learning more about Fusion Equipment Rentals,
          Training or Sales,{' '}
          <Link className={`underline`} href="/contact/" title="contact hdpe">
            please contact anyone on our team
          </Link>{' '}
          and we&apos;ll be happy to help.
        </p>
        <p className="text-center">
          <Link className={`button`} href="/contact/" title="contact us">
            Contact Us
          </Link>
        </p>
      </section>

      <div className={`mx-auto my-24 max-w-screen-xl flex justify-between`}>
        <article className={`flex-1 flex flex-col gap-4 text-center`}>
          <Heading as="h2">Pipe Fittings</Heading>
          <p className="">
            <Link
              className={`button`}
              href="/fittings/"
              title="Pipe Fittings Technical Data"
            >
              Go Here
            </Link>
          </p>
        </article>
        <article className={`flex-1 flex flex-col gap-4 text-center`}>
          <Heading as="h2">Geosynthetics</Heading>
          <p className="">
            <Link
              className={`button`}
              href="/geosynthetics/"
              title="Geosynthetics Technical Data"
            >
              Go Here
            </Link>
          </p>
        </article>
        <article className={`flex-1 flex flex-col gap-4 text-center`}>
          <Heading as="h2">Technical Data</Heading>
          <p className="">
            <Link
              className={`button`}
              href="/technical-data/"
              title="Technical Data"
            >
              Go Here
            </Link>
          </p>
        </article>
      </div>
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

