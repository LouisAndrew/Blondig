import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../layout'
import Gallery from '../components/gallery'

const GalleryPage = ({ data: { sanityGallery: { content } } }) => (
    <Layout>
        <Gallery content={content} />
    </Layout>
)

export default GalleryPage

export const query = graphql`
    query GalleryQuery {
        sanityGallery {
            content {
                img {
                    asset {
                        fluid {
                            ...GatsbySanityImageFluid
                        }
                    }
                }
            }
        }
    }
`