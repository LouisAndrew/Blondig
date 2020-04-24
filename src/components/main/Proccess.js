import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'

import { extract } from './Why'
import { extractPosMain } from '../../helper/extracts'

const Proccess = ({ data: { node: { content } } }) => {

      const mainData = extractPosMain('main', content)
      const miscData = extractPosMain('misc', content)

      const miscCards = miscData.items.map(dt => <WhyCard heading={dt.heading} subheading={dt.subheading} fluid={dt.media[0].image.asset.fluid} />)

      return (
            <Container>
                  <Content className='wrap'>
                        <h2>{mainData.items[0].heading} </h2>
                        <CardContainer>
                              {
                                    miscCards
                              }
                        </CardContainer>
                  </Content>
            </Container>
      )
}

export default Proccess

const CardContainer = styled.div`
      display: flex;
      flex-flow: row wrap;
      justify-content: space-evenly;

      padding: 10vh 0;
      
      width: 100%;
`

const Content = styled.section`
      ${({ theme }) => theme.fitContainer()};
      ${({ theme }) => theme.center()};
      
      flex-direction: column;

      h2 {
            text-align: center;
            padding: 10vh 0 0;
            margin-top: 10vh;
      }
`

const Container = styled.div`
      ${({ theme }) => theme.center()};
      width: 100%;
`

const WhyCard = ({ fluid, heading, subheading }) => (
      <Wrapper>
            <Img className='img' fluid={fluid} />
            <div className='det'>
                  <h1>{heading}</h1>
                  <p>{subheading} </p>
            </div>
      </Wrapper>
)

const Wrapper = styled.div`
      display: flex;
      flex-direction: column;
      align-items: center;

      width: 30%;
      padding: 5% 0;

      .img {

            width: 250px;
            height: 250px;
      }

      .det {
            display: flex;
            width: 300px;

            padding: 10% 0;

            h1 {
                  color: ${({ theme }) => theme.redLight};
                  font-size: 3rem;
            }
            
            p {
                  padding: 0 10%;
            }
      }

      @media screen and (max-width: 1040px) {
            
            .img {
                  height: 200px;
                  width: 200px;
            }

            .det {
                  width: 200px;
                  padding-right: 0;
            }
      }

      @media screen and (max-width: 850px) {
            
            width: 45%;
      }

      @media screen and (max-width: 464px) {
            
            width: 100%;

            .det {
                  width: 250px;
            }
      }
`