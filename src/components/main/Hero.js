import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { useStaticQuery, graphql } from 'gatsby'

import Button from '../Button'

const Hero = ({ data: { node } }, className) => {

      //fluid isn't really great here?

      const data = useStaticQuery(graphql`
            query Hero {
            desktopImage: allSanityHomepage(filter: {layoutId: {eq: "hero"}}) {
                        edges {
                              node {
                                    content {
                                          button
                                          items {
                                                media {
                                                      image {
                                                            asset {
                                                                  fluid(maxWidth: 2000) {
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
            mobileImage: allSanityHomepage(filter: {layoutId: {eq: "hero"}}) {
                  edges {
                        node {
                              content {
                                    items {
                                          media {
                                                image {
                                                      asset {
                                                            fluid(maxWidth: 464) {
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
            }
      `)

      const fluid = data.desktopImage.edges[0].node.content[0].items[0].media[0].image.asset.fluid
      const fluidMobile = data.mobileImage.edges[0].node.content[1].items[0].media[0].image.asset.fluid

      const sources = [
            fluid, {
                  ...fluidMobile,
                  media: '(max-width: 464px)'
            }
      ]

      console.log(sources)

      return (
            <Container>
                  <Img  className='img' fluid={sources} />
                  <Content className='wrap'>
                        <div>
                              <Button text='Shop Now!' color='#fff' bColor='redLight' />
                        </div>
                  </Content>
            </Container>
      )
}

export default Hero

const Content = styled.section`
      ${({ theme }) => theme.fitContainer()};
      ${({ theme }) => theme.center()};

      z-index: 2;

      div {

            display: flex;
            flex-direction: column;
            justify-content: flex-end;

            padding: 8% 0;

            button {
                  
            }
      }
`

const Container = styled.div`
      height: 100vh;
      width: 100%;
      ${({ theme }) => theme.center()};
      margin-top: 6vh;

      background-image: url(${props => props.img});
      background-size: cover;
      background-position: center;

      position: relative;

      .img {
            position: absolute !important;
            top: 0;
            left: 0;

            z-index: 1;
            ${({ theme }) => theme.fitContainer()};
      }
`