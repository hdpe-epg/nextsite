import "../styles/globals.css";
import Link from "next/link";
import Head from "next/head";
// import Script from 'next/script'
import {PrismicProvider, PrismicLink} from "@prismicio/react";
import {PrismicPreview} from "@prismicio/next";
import {repositoryName} from "../prismicio";
import Heading from "@/components/Heading";


const richTextComponents = {
    // see global.js temporarily to modify these styles. Working on DRY.

    heading1: ({children}) => (
        <Heading
            as="h1"
            size="5xl"
            className="styledH1 commonHeadingStyles commonTextMargins"
        >
            {children}
        </Heading>
    ),
    heading2: ({children}) => (
        <Heading as="h2" size="4xl" className="commonHeadingStyles commonTextMargins">
            {children}
        </Heading>
    ),
    heading3: ({children}) => (
        <Heading as="h3" size="2xl" className="commonHeadingStyles commonTextMargins">
            {children}
        </Heading>
    ),
    heading4: ({children}) => (
        <Heading as="h4" size="2xl" className="commonHeadingStyles commonTextMargins">
            {children}
        </Heading>
    ),
    heading5: ({children}) => (
        <Heading as="h5" size="2xl" className="commonHeadingStyles commonTextMargins">
            {children}
        </Heading>
    ),
    heading6: ({children}) => (
        <Heading as="h6" size="2xl" className="commonHeadingStyles commonTextMargins">
            {children}
        </Heading>
    ),
    paragraph: ({children}) => (
        <p className="commonTextMargins commonTextStyles pStyles">{children}</p>
    ),
    oList: ({children}) => (
        <ol className="commonTextMargins commonTextStyles listStyles">
            {children}
        </ol>
    ),
    oListItem: ({children}) => (
        <li className="commonTextMargins commonTextStyles listItemStyles">
            {children}
        </li>
    ),
    list: ({children}) => (
        <ul className="commonTextMargins commonTextStyles listStyles">
            {children}
        </ul>
    ),
    listItem: ({children}) => (
        <li className="commonTextMargins commonTextStyles listItemStyles">
            {children}
        </li>
    ),
    preformatted: ({children}) => (
        <pre className="commonTextMargins preFormattedStyles">
      <code>{children}</code>
    </pre>
    ),
    strong: ({children}) => (
        <strong className="font-semibold">{children}</strong>
    ),
    hyperlink: ({children, node}) => (
        <PrismicLink
            field={node.data}
            className="linkStyles"
        >
            {children}
        </PrismicLink>
    ),
    embed: ({node, children}) => {
        return (
            <div className="oEmbedStyles">
                <div
                    className="aspect-w-16 aspect-h-9"
                    dangerouslySetInnerHTML={{__html: node.oembed.html}}
                />
            </div>
        )
    },
};

export default function App({Component, pageProps}) {
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
