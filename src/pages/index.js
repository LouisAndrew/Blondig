import React from "react"
import { Link, graphql } from "gatsby"

import Layout from '../layout'
import SEO from "../components/seo"
import Hero from "../components/main/Hero"
import Why from "../components/main/Why"
import Proccess from "../components/main/Proccess"
import { extractPositionId } from '../helper/extracts'
import Prices from "../components/main/Prices"

const IndexPage = ({ data: { allSanityHomepage: { edges } } }) => {

    const heroData = extractPositionId('hero', edges)
    const whyData = extractPositionId('why-us', edges)
    const proccessData = extractPositionId('proccess', edges)
    const pricesData = extractPositionId('prices', edges)

    return (
        <Layout>
            <Hero data={heroData} />
            <Why data={whyData} />
            <Proccess data={proccessData} />
            <Prices data={pricesData} />
        </Layout>
    )
}

export default IndexPage

export const query = graphql`
    query MyQuery {
        allSanityHomepage {
            edges {
                node {
                    layoutId
                    content {
                        button
                        position
                        items {
                            misc
                            subheading
                            heading
                            media {
                                image {
                                    asset {
                                        fluid {
                                            ...GatsbySanityImageFluid
                                        }
                                        url
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`