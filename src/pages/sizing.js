import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../layout'
import Top from '../components/sizing/Top'
import { extractPositionId } from '../helper/extracts'
import Mid from '../components/sizing/Mid'
import Bot from '../components/sizing/Bot'

const SizingPage = ({ data: { allSanitySizing, allSanitySize } }) => {

      const layoutEdges = allSanitySizing.edges
      const sizeEdges = allSanitySize.edges

      const topData = extractPositionId('top', layoutEdges)
      const midData = extractPositionId('mid', layoutEdges)
      const botData = extractPositionId('bot', layoutEdges)

      return (
            <Layout>
                  <Top layout={topData} sizes={sizeEdges} />
                  <Mid {...midData} />
                  <Bot {...botData} />
            </Layout>
      )
}

export default SizingPage

export const query = graphql`
      query SizingQuery {
            allSanitySizing {
                  edges {
                        node {
                              layoutId
                              content {
                                    position
                                    button
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
                                                      }
                                                }
                                          }
                                    }
                              }
                        }
                  }
            }
            allSanitySize {
                  edges {
                    node {
                      sizeName
                      width
                      height
                    }
                  }
                }
      }
`