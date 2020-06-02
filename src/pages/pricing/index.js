import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../../layout'
import Pricing from '../../components/pricing/Pricing'
import Recom from '../../components/pricing/recommendations'

const PricePage = ({ data }) => (
    <Layout>
        <Pricing {...data} />
        <Recom />
    </Layout>
)

export default PricePage

export const query = graphql`
    query Price {
        allSanityTee {
            edges {
                node {
                    teeId
                    variants {
                        jenisBahan
                        jenisKaos
                        price
                        availableColor {
                            hex
                        }
                        availableSizes {
                            sizeName
                        }
                        priceColor
                        pictureSize
                    }
                    productImage {
                        asset {
                            fluid {
                                ...GatsbySanityImageFluid
                            }
                        }
                    }
                }
            }
        }
    }
`