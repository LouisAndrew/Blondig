import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'

const Why = ({ data: { node: { content } } }) => {

      const extract = (position, array) => {
            const temp = array.filter(content => content.position === position)

            return temp[0] ? temp[0] : false
      }

      const mainData = extract('main', content)
      const miscData = extract('misc', content)

      console.log(miscData)

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

      /* background-color: pink; */
      z-index: 2;

      .left {
            width: 40%
      }

      .right {
            ${({ theme }) => theme.center()};
            flex-direction: column;
            width: 60%;
            padding: 20vh 0;

            h2 {
                  text-align: center;
                  margin-bottom: 5vh;
            }

            @media screen and (max-width: 900px) and (orientation: portrait) {
                  
                  padding: 10vh 0;
            }
      }

      @media screen and (max-width: 464px) {

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

            @media screen and (max-width: 464px) {
                  display: none;
            }
      }
`     

const WhyCards = ({ img, heading, subheading }) => {

      return (
            <Card>
                  <Img className='card-img' fluid={img} />
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

      .card-img {
            width: 15%;
      }

      .det {
            padding: 0 10%;
            
            h3 {
                  margin-bottom: 2rem;
            }
      }

      @media screen and (max-width: 900px) and (orientation: portrait) {
            
      }
`