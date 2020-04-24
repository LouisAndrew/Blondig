import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'

const Mid = ({ node: { content } }) => {

      //index 0 should be main..
      const mainData = content[0].items

      //index 1 should be misc
      const miscData = content[1].items

      console.log(mainData, 'main')
      console.log(miscData, 'misc')

      return (
            <Container>
                  <Content>
                        <div>
                              <h2>{mainData[0].heading} </h2>
                              <Img className='img-top' fluid={mainData[0].media[0].image.asset.fluid} /> 
                        </div>
                        <div className='middle'>
                              {
                                    miscData.map(msc => (
                                          <MidItem>
                                                <Img className='img-mid' fluid={msc.media[0].image.asset.fluid} />
                                                <div className='det'>
                                                      <h3>{msc.heading} </h3> 
                                                      <p>{msc.subheading} </p>
                                                </div>
                                          </MidItem>
                                    ))
                              }
                        </div>
                        <div>
                              <h2>{mainData[1].heading} </h2>
                              <Img className='img-bot' fluid={mainData[1].media[0].image.asset.fluid} />
                        </div>
                  </Content>
            </Container>
      )
}

export default Mid

const MidItem = styled.div`
      width: 50%;

      display: flex;
      align-items: center;

      .det {
            padding: 0 10%;

            h3 {
                  margin: 2vh 0;
            }
      }

      @media screen and (max-width: 464px) {
            
            margin: 2vh 0;

            .det {
                  padding: 0 5%;
            }
      }
`

const Content = styled.section`
      width: 60%;
      
      display: flex;
      flex-direction: column;
      align-items: center;

      div {
            width: 100%;

            .img-top {
                  width: 100%;
                  margin: 8vh 0;
            }
      }

      & > div:last-child {
            display: flex;
            flex-direction: column;
            width: 100%;
            margin: 12vh 0;

            h2 {
                  text-align: center;
            }

            .img-bot {
                  margin: 8vh 0;
                  width: 70%;
                  align-self: center;
            }
      }

      .middle {
            width: 100%;
            display: flex;

            @media screen and (max-width: 850px) {
                  
                  flex-direction: column;
            }
      }
`

const Container = styled.div`
      width: 100%;
      ${({ theme }) => theme.center()};
`