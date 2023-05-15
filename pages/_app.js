import "../styles/globals.css";
import Link from "next/link";
import Head from "next/head";
// import Script from 'next/script'
import { PrismicProvider, PrismicLink } from "@prismicio/react";
import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "../prismicio";
import Heading from "@/components/Heading";


const richTextComponents = {
  // see global.js temporarily to modify these styles. Working on DRY.

  heading1: ({ children }) => (
    <Heading
      as="h1"
      size="5xl"
      className="styledH1 commonHeadingStyles commonTextMargins"
    >
      {children}
    </Heading>
  ),
  heading2: ({ children }) => (
    <Heading as="h2" size="4xl" className="commonHeadingStyles commonTextMargins">
      {children}
    </Heading>
  ),
  heading3: ({ children }) => (
    <Heading as="h3" size="2xl" className="commonHeadingStyles commonTextMargins">
      {children}
    </Heading>
  ),
  heading4: ({ children }) => (
    <Heading as="h4" size="2xl" className="commonHeadingStyles commonTextMargins">
      {children}
    </Heading>
  ),
  heading5: ({ children }) => (
    <Heading as="h5" size="2xl" className="commonHeadingStyles commonTextMargins">
      {children}
    </Heading>
  ),
  heading6: ({ children }) => (
    <Heading as="h6" size="2xl" className="commonHeadingStyles commonTextMargins">
      {children}
    </Heading>
  ),
  paragraph: ({ children }) => (
    <p className="commonTextMargins commonTextStyles last:mb-0">{children}</p>
  ),
  oList: ({ children }) => (
    <ol className="commonTextMargins commonTextStyles pl-4 last:mb-0 md:pl-6">
      {children}
    </ol>
  ),
  oListItem: ({ children }) => (
    <li className="commonTextMargins commonTextStyles mb-1 list-decimal pl-1 last:mb-0 md:pl-2">
      {children}
    </li>
  ),
  list: ({ children }) => (
    <ul className="commonTextMargins commonTextStyles pl-4 last:mb-0 md:pl-6">
      {children}
    </ul>
  ),
  listItem: ({ children }) => (
    <li className="commonTextMargins commonTextStyles mb-1 list-disc pl-1 last:mb-0 md:pl-2">
      {children}
    </li>
  ),
  preformatted: ({ children }) => (
    <pre className="commonTextMargins rounded bg-slate-100 p-4 text-sm last:mb-0 md:p-8 md:text-lg">
      <code>{children}</code>
    </pre>
  ),
  strong: ({ children }) => (
    <strong className="font-semibold">{children}</strong>
  ),
  hyperlink: ({ children, node }) => (
    <PrismicLink
      field={node.data}
      className="text-xl text-brand-font-color underline decoration-1 underline-offset-2"
    >
      {children}
    </PrismicLink>
  ),
};

export default function App({ Component, pageProps }) {
  return (
    <PrismicProvider
      internalLinkComponent={(props) => <Link {...props} />}
      richTextComponents={richTextComponents}
    >
      <PrismicPreview repositoryName={repositoryName}>
        <Head>{/* TODO: insert meta info here */}</Head>
        <Component {...pageProps} />
      </PrismicPreview>
    </PrismicProvider>
  );
}
