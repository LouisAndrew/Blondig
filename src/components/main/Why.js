import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'

import { extractPosMain } from '../../helper/extracts'

const Why = ({ data: { node: { content } } }) => {

      const mainData = extractPosMain('main', content)
      const miscData = extractPosMain('misc', content)

      const fluid = mainData.items[0].media[0].image.asset.fluid

      const cardsDatas = miscData.items.map(dt => <WhyCards heading={dt.heading} subheading={dt.subheading} img={dt.media[0].image.asset.fluid} />)

      return (
            <Container>
                  <Img className='img' fluid={fluid} />
                  <Content className='wrap'>
                        <div className='left'></div>
                        <div className='right'>
                              <h2>{mainData.items[0].heading} </h2>
                              {
                                    cardsDatas
                              }
                        </div>
                  </Content>
            </Container>
      )
}

export default Why

const Content = styled.section`
      width: 100%;

      display: flex;

      background-color: #F4ECD8;

      .left {
            width: 40%
      }

      .right {
            ${({ theme }) => theme.center()};
            flex-direction: column;
            width: 60%;
            height: 100%;

            /* padding here, not on container => img is absolute. */
            padding: 5vh 0;

            h2 {  
                  padding: 0 2vh 2vh;
                  text-align: center;
                  color: ${({ theme }) => theme.red};
            }

            @media screen and (max-width: 900px) and (orientation: portrait) {
                  
                  padding: 10vh 0;
            }
      }

      @media screen and (max-width: 640px) {

            .left {
                  width: 0;
            }            

            .right {
                  width: 100%;
            }
      }

`

const Container = styled.div`
      ${({ theme }) => theme.center()};
      width: 100%;
      position: relative;

      .img {
            width: 40%;
            position: absolute !important;
            left: 0;
            top: 0;
            height: 100%;
            z-index: 2;

            @media screen and (max-width: 640px) {
                  display: none;
            }
      }
`     

const WhyCards = ({ img, heading, subheading }) => {

      return (
            <Card>
                  <div className='img'>
                        <Img className='card-img' fluid={img} />
                  </div>
                  <div className='det'>
                        <h3>{heading} </h3>
                        <p>{subheading} </p>
                  </div>
            </Card>
      )
}

const Card = styled.div`
      display: flex;
      align-items: center;
      justify-content: flex-start;

      width: 100%;
      margin: 5%;

      .img {
            position: relative !important;
            height: 100px;
            width: 100px;
      }

      .det {
            padding: 0 10%;
            
            h3 {
                  margin-bottom: 2rem;
                  /* wild card */
                  color: #482700;
            }
      }

      @media screen and (max-width: 900px) and (orientation: portrait) {
            
            .card-img {
                  width: 25%;
            }
      }

      @media screen and (max-width: 640px) and (orientation: portrait) {
            
            .card-img {
                  width: 40%;
            }
      }
`