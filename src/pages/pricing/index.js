import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../../layout'
import Pricing from '../../components/pricing/Pricing'

const PricePage = ({ data }) => (
    <Layout>
        <Pricing {...data} />
    </Layout>
)

export default PricePage

export const query = graphql`
    query Price {
        DTG: allSanityTee(filter: {variants: {elemMatch: {jenisBahan: {eq: "DTG"}}}}) {
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
            }
        }
        }
        Printable: allSanityTee(filter: {variants: {elemMatch: {jenisBahan: {eq: "Printable"}}}}) {
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
                }
            }
        }
        Polyflex: allSanityTee(filter: {variants: {elemMatch: {jenisBahan: {eq: "Polyflex"}}}}) {
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
                }
            }
        }
    }
`