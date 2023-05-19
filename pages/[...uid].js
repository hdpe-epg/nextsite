import * as React from 'react'
import { SliceZone, PrismicRichText } from '@prismicio/react'
import * as prismicH from '@prismicio/helpers'
import Head from 'next/head'
import { createClient } from '@/prismicio'
import { components } from '@/slices'
import Layout from '@/components/Layout'
// import BlogCard from '@/components/BlogCard'
// import Pagination from '@/components/Pagination'
// import EventCard from '@/components/EventCard'

const Page = ({ page, siteMetadata, navigation }) => {
  const { data } = page
  const {
    data: { sitetitle, siteurl, sitedescription, sitemetaimage },
  } = siteMetadata

  if (page.url !== '/blog') {
    return (
      <>
        <Layout navigation={navigation}>
          <Head>
            <title>{`${prismicH.asText(data.title)} · ${sitetitle}`}</title>
            <link
              rel="canonical"
              href={data?.canonicalurl || `${siteurl}${page.url}`}
            />
            {page?.data?.metadescription ||
              (siteMetadata?.data?.sitemetadescription && (
                <meta
                  name="description"
                  content={
                    page?.data?.metadescription ||
                    siteMetadata?.data?.sitemetadescription
                  }
                />
              ))}
            {page?.data?.metadescription ||
              (siteMetadata?.data?.sitemetadescription && (
                <>
                  <meta
                    property="og:description"
                    content={
                      page?.data?.metadescription ||
                      siteMetadata?.data?.sitemetadescription
                    }
                  />
                </>
              ))}
            <meta
              property="og:url"
              content={
                siteMetadata?.data?.sitecanonicalurl || `https://www.hdpe.ca`
              }
            />
            <meta property="og:type" content="website" />

            {page?.data?.metaimage?.url ||
              (siteMetadata?.data?.sitemetaimage?.url && (
                <meta
                  property="og:image"
                  content={
                    page?.data?.metaimage?.url ||
                    siteMetadata?.data?.sitemetaimage?.url
                  }
                />
              ))}

            {page?.data?.metaimage?.url ||
              (siteMetadata?.data?.sitemetaimage?.url && (
                <>
                  <meta property="twitter:card" content="summary_large_image" />
                  <meta
                    property="twitter:image"
                    content={
                      page?.data?.metaimage?.url ||
                      siteMetadata?.data?.sitemetaimage?.url
                    }
                  />
                </>
              ))}
          </Head>
          {!data?.hidepagetitle && (
            <header className="py-4 text-center md:py-6 lg:py-8 xl:py-10">
              <PrismicRichText field={data.title} />
            </header>
          )}

          {data?.slices?.length > 0 && (
            <SliceZone slices={data?.slices} components={components} />
          )}
        </Layout>
      </>
    )
  }
}
export default Page
export async function getStaticProps({ params, previewData }) {
  const client = createClient({ previewData })
  const siteMetadata = await client.getSingle('sitemetadata')
  const page = await client.getByUID(
    'page',
    params.uid[params.uid.length - 1],
    {
      fetchLinks: ['subdirectory'],
    }
  )
  const navigation = await client.getSingle('mainmenu')
  return {
    props: {
      page,
      siteMetadata,
      navigation,
    },
  }
}

export async function getStaticPaths() {
  const client = createClient()
  const pages = await client.getAllByType('page', {
    fetchLinks: ['subdirectory'],
  })
  return {
    paths: pages.map((page) => prismicH.asLink(page)),
    fallback: false,
  }
}
