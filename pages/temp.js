/*
FOR CHANGELOG:
We are creating the content of this page manually beceause we don't yet have a solution
on how to route the PDFs and excels to the correct urls. The specific problem is that
the AMAZON is hashing the files, and we need the downloads to never change so we don't
ruin their SEO as far as the files themselves go.
 */

import * as React from 'react'
import Layout from '@/components/Layout'
import {createClient} from '@/prismicio'
import Head from 'next/head'
import Link from 'next/link'

import Heading from '@/components/Heading'

const TechnicalDataPage = ({siteMetadata, navigation}) => {
    const {
        data: {sitetitle, sitemetaimage},
    } = siteMetadata

    return (
        <Layout navigation={navigation}>
            <Head>
                <title>{`Temp Locations · ${sitetitle}`}</title>
                <link
                    // We are manually setting canonical
                    rel="canonical"
                    href={`https://hdpe.ca/temp/`}
                />
                {/*TODO: update all meta data when i know what it is*/}
                <meta
                    // The site description is manually inputted so we removed sitedescription from data
                    name="description"
                    content={'temp'}
                />
                <meta
                    // The site description is manually inputted so we removed sitedescription from data
                    property="og:description"
                    content={'temp'}
                />
                <meta property="og:url" content={`https://hdpe.ca/temp/`}/>
                <meta property="og:type" content="website"/>

                <meta
                    // we are pulling image from prismic
                    property="og:image"
                    content={sitemetaimage?.url}
                />

                <meta property="twitter:card" content="summary_large_image"/>
                <meta
                    // we are pulling image from prismic
                    property="twitter:image"
                    content={sitemetaimage?.url}
                />
            </Head>

            <section className={`mx-auto my-24 max-w-screen-xl`}>
                <div className={`grid mx-auto justify-center gap-4 md:grid-cols-2`}>
                    <div>
                        <Link href={"#id_of_location_in_page"}>
                            {/*classname h3 is used to resize it to h3 but maintaining h2 priority*/}
                            <Heading as="h2" className={`h3 text-center`}>
                                Acheson, Alberta
                            </Heading>
                        </Link>

                    </div>

                    <div>
                        {/*classname h3 is used to resize it to h3 but maintaining h2 priority*/}
                        <Link href={"#id_of_location_in_page"}>
                            <Heading as="h2" className={`h3 text-center`}>
                                Edmonton
                            </Heading>
                        </Link>
                    </div>
                </div>

                <hr className={`mx-auto w-2/3 my-8`}/>

                <div className={`grid justify-center gap-8 md:grid-cols-2`}>
                    {/*Left Side*/}
                    <div>
                        <div>
                            <Heading as="h2" id={`id_of_location_in_page`}>
                                Acheson, Alberta
                            </Heading>

                            {/*
                            RichText Here
                                - Phone and Mail will can be links selected in Rich Text
                        */}
                            <p>
                                100 - 11255 200 st<br/>
                                ZIP CODE<br/>
                                Phone: 111-1111<br/>
                                Fax: 111-1111<br/>
                                <br/>
                                some@email.com
                            </p>
                        </div>
                        {/*
                        this will likely be a repeatable slice
                        and rich text
                         */}
                        <div className={`grid gap-4 mx-auto justify-between sm:grid-cols-2`}>
                            {/*repeat one*/}
                            <div>
                                <Heading as="h3" className={'mb-0 pb-0'}>
                                    Full Name
                                </Heading>
                                <p className={`mt-0 pt-0`}>
                                    Job Title<br/>
                                    <br/>
                                    604-111-1111<br/>
                                    Email@Here.com
                                </p>

                            </div>

                            {/*repeat two*/}
                            <div>
                                <Heading as="h3" className={'mb-0 pb-0'}>
                                    Full Name
                                </Heading>
                                <p className={`mt-0 pt-0`}>
                                    Job Title<br/>
                                    <br/>
                                    604-111-1111<br/>
                                    Email@Here.com
                                </p>
                            </div>
                        </div>
                    </div>

                    {/*Right Side*/}
                    <div>
                        {/*rich text block, including the img*/}
                        <div>
                            <Heading as="h3">Welcome to Engineered Pipe Group Pacific</Heading>
                            <p>When you’re looking for a trusted partner on your next project you won’t find a more
                                qualified team than at Engineered Pipe Group in the Pacific.</p>

                            <p>With over 100 years of combined industry experience we have the people, equipment and
                                knowledge to help your project be completed on time and on budget.</p>

                            <p>You may be looking at Municipal works, Agri or Aqua culture, Mining, Gas or Geothermal.
                                Regardless of your projects unique requirements we have the experience and the skill set
                                to assist. Every project is unique, each with its own set of challenges, our many years
                                of diverse industry experience bring solutions from multiple fields into one total
                                package.</p>

                            <p>On your next project please, feel free to reach out to any of our sales staff. We would
                                be happy to assist and look forward to developing a new and exciting relationship
                                together.</p>
                            <img src={"http://placekitten.com/g/1920/1080"} title={"placeholder"} width="auto" height="auto" />
                        </div>
                    </div>
                </div>


                {/*IF THIS HAPPENS TWICE ON A PAGE YOU DO THE ABOVE AGAIN*/}

                <hr className={'my-20'} />
                <div className={`grid justify-center gap-8 md:grid-cols-2`}>
                    {/*Left Side*/}
                    <div>
                        <div>
                            <Heading as="h2" id={`id_of_location_in_page`}>
                                Edmonton
                            </Heading>

                            {/*
                            RichText Here
                                - Phone and Mail will can be links selected in Rich Text
                        */}
                            <p>
                                100 - 11255 200 st<br/>
                                ZIP CODE<br/>
                                Phone: 111-1111<br/>
                                Fax: 111-1111<br/>
                                <br/>
                                some@email.com
                            </p>
                        </div>
                        {/*
                        this will likely be a repeatable slice
                        and rich text
                         */}
                        <div className={`grid gap-4 mx-auto justify-between sm:grid-cols-2`}>
                            {/*repeat one*/}
                            <div>
                                <Heading as="h3" className={'mb-0 pb-0'}>
                                    Full Name
                                </Heading>
                                <p className={`mt-0 pt-0`}>
                                    Job Title<br/>
                                    <br/>
                                    604-111-1111<br/>
                                    Email@Here.com
                                </p>

                            </div>

                            {/*repeat two*/}
                            <div>
                                <Heading as="h3" className={'mb-0 pb-0'}>
                                    Full Name
                                </Heading>
                                <p className={`mt-0 pt-0`}>
                                    Job Title<br/>
                                    <br/>
                                    604-111-1111<br/>
                                    Email@Here.com
                                </p>
                            </div>
                        </div>
                    </div>

                    {/*Right Side*/}
                    <div id={`#edmonton`}>
                        {/*rich text block, including the img*/}
                        <div>
                            <Heading as="h3">Welcome to Engineered Pipe Group Pacific</Heading>
                            <p>When you’re looking for a trusted partner on your next project you won’t find a more
                                qualified team than at Engineered Pipe Group in the Pacific.</p>

                            <p>With over 100 years of combined industry experience we have the people, equipment and
                                knowledge to help your project be completed on time and on budget.</p>

                            <p>You may be looking at Municipal works, Agri or Aqua culture, Mining, Gas or Geothermal.
                                Regardless of your projects unique requirements we have the experience and the skill set
                                to assist. Every project is unique, each with its own set of challenges, our many years
                                of diverse industry experience bring solutions from multiple fields into one total
                                package.</p>

                            <p>On your next project please, feel free to reach out to any of our sales staff. We would
                                be happy to assist and look forward to developing a new and exciting relationship
                                together.</p>
                            <img src={"http://placekitten.com/g/1920/1080"} title={"placeholder"} width="auto" height="auto" />
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default TechnicalDataPage

export async function getStaticProps({previewData}) {
    const client = createClient({previewData})
    const siteMetadata = await client.getSingle('sitemetadata')

    const navigation = await client.getSingle('mainmenu')
    return {
        props: {
            siteMetadata,
            navigation,
        },
    }
}

