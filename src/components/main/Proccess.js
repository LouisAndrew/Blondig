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

      width: 100%;
`

const Content = styled.section`
      ${({ theme }) => theme.fitContainer()};
      ${({ theme }) => theme.center()};
      
      flex-direction: column;

      h2 {
            text-align: center;
            margin-bottom: 3rem;
            padding: 0 .5rem;

            color: ${({ theme }) => theme.blue};
      }
`

const Container = styled.div`
      ${({ theme }) => theme.center()};
      width: 100%;
      
      padding: 5% 0;

      background-color: ${({ theme }) => theme.grey};

      @media screen and ( max-width: 640px ) {
            padding: 15% 0;
      }
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
      padding: 5vh 2vh;

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
            
            width: 35%;

      @media screen and (max-width: 850px) {
            
            .img {
                  width: 200px;
                  height: 200px;
            }

            width: 45%;
      }

      @media screen and (max-width: 640px) {
            
            width: 100%;

            .det {
                  width: 250px;
            }
      }
`