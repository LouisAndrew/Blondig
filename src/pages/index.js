import React from "react"
import { Link, graphql } from "gatsby"

import Layout from '../layout'
import SEO from "../components/seo"
import Hero from "../components/main/Hero"
import Why from "../components/main/Why"

const IndexPage = ({ data: { allSanityHomepage: { edges } } }) => {

    const extract = (id, array) => {
        
        const extractedData = array.filter(dt => dt.node.layoutId === id)
        return extractedData[0] ? extractedData[0] : false
    }

    const heroData = extract('hero', edges)
    const whyData = extract('why-us', edges)

    return (
        <Layout>
            <Hero data={heroData} />
            <Why data={whyData} />
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
                            subheading
                            misc
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