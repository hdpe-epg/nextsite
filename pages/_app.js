import '../styles/globals.css'
import Link from 'next/link'
import Head from 'next/head'
// import Script from 'next/script'
import { PrismicProvider, PrismicLink } from '@prismicio/react'
import { PrismicPreview, PrismicNextImage } from '@prismicio/next'
import { repositoryName } from '../prismicio'
import Heading from '@/components/Heading'

const richTextComponents = {
  // see global.js temporarily to modify these styles. Working on DRY.

  heading1: ({ children }) => (
    <Heading as="h1" className="styledH1">
      {children}
    </Heading>
  ),
  heading2: ({ children }) => (
    <Heading as="h2" className="">
      {children}
    </Heading>
  ),
  heading3: ({ children }) => (
    <Heading as="h3" className="">
      {children}
    </Heading>
  ),
  heading4: ({ children }) => (
    <Heading as="h4" className="">
      {children}
    </Heading>
  ),
  heading5: ({ children }) => (
    <Heading as="h5" className="">
      {children}
    </Heading>
  ),
  heading6: ({ children }) => (
    <Heading as="h6" className="">
      {children}
    </Heading>
  ),
  paragraph: ({ children }) => (
    <p className={''}>{children}</p>
  ),
  oList: ({ children }) => (
    <ol className="commonTextMargins commonTextStyles listStyles">
      {children}
    </ol>
  ),
  oListItem: ({ children }) => (
    <li className="commonTextMargins commonTextStyles listItemStyles">
      {children}
    </li>
  ),
  list: ({ children }) => (
    <ul className="commonTextMargins commonTextStyles listStyles">
      {children}
    </ul>
  ),
  listItem: ({ children }) => (
    <li className="commonTextMargins commonTextStyles listItemStyles">
      {children}
    </li>
  ),
  preformatted: ({ children }) => (
    <pre className="commonTextMargins preFormattedStyles">
      <code>{children}</code>
    </pre>
  ),
  strong: ({ children }) => (
    <strong className="font-semibold">{children}</strong>
  ),
  hyperlink: ({ children, node }) => (
    <PrismicLink field={node.data} className="linkStyles">
      {children}
    </PrismicLink>
  ),
  embed: ({ node, children }) => {
    return (
      <div className="oEmbedStyles">
        <div
          className="aspect-h-9 aspect-w-16"
          dangerouslySetInnerHTML={{ __html: node.oembed.html }}
        />
      </div>
    )
  },
  image: ({ node }) => {
    return (
      <div className="not-prose my-4 flex justify-center" data-tip={node.alt}>
        <PrismicNextImage field={node} className="rounded" />
      </div>
    )
  },
}

export default function App({ Component, pageProps }) {
  return (
    <PrismicProvider
      internalLinkComponent={props => <Link {...props} />}
      richTextComponents={richTextComponents}
    >
      <PrismicPreview repositoryName={repositoryName}>
        <Head>{/* TODO: insert meta info here */}</Head>
        <Component {...pageProps} />
      </PrismicPreview>
    </PrismicProvider>
  )
}
