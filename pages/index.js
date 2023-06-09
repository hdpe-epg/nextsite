import * as React from 'react'
import Head from 'next/head'
import { createClient } from '../prismicio'
import { components } from '../slices'
import * as prismicH from '@prismicio/helpers'
import { SliceZone } from '@prismicio/react'
import Layout from '@/components/Layout'

export default function Home({ page, navigation, siteMetadata }) {
  return (
    <Layout navigation={navigation}>
      <Head>
        <title>{`${prismicH.asText(page?.data?.title)} · ${
          siteMetadata?.data?.sitetitle
        }`}</title>
        <link
          rel="canonical"
          href={siteMetadata?.data?.sitecanonicalurl || `https://www.hdpe.ca`}
        />

        <meta
          name="description"
          content={
            page?.data?.metadescription ||
            siteMetadata?.data?.sitemetadescription
          }
        />

        <meta
          property="og:description"
          content={
            page?.data?.metadescription ||
            siteMetadata?.data?.sitemetadescription
          }
        />
        <meta
          property="og:title"
          content={`${prismicH.asText(page?.data?.title)}`}
        />
        <meta
          property="og:url"
          content={
            siteMetadata?.data?.sitecanonicalurl || `https://www.hdpe.ca`
          }
        />
        <meta property="og:type" content="website" />

        <meta
          property="og:image"
          content={
            page?.data?.metaimage?.url || siteMetadata?.data?.sitemetaimage?.url
          }
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:image"
          content={
            page?.data?.metaimage?.url || siteMetadata?.data?.sitemetaimage?.url
          }
        />
      </Head>
      <div className="grid grid-cols-1 gap-y-4 md:gap-y-0">
        <SliceZone slices={page.data.slices} components={components} />
      </div>
    </Layout>
  )
}
export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData })
  const siteMetadata = await client.getSingle('sitemetadata')
  const page = await client.getSingle('homepage')
  const navigation = await client.getSingle('mainmenu')

  return {
    props: {
      navigation,
      page,
      siteMetadata,
    },
  }
}
