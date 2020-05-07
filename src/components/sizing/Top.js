import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'

import Button from '../Button'

const Top = ({ layout, sizes }) => {

      const layoutData = layout.node.content[0]

      return (
            <Container>
                  <Content>
                        <div>
                              <h2>{layoutData.items[0].heading} </h2>
                              <SizeChart sizes={sizes} />
                        </div>
                        <div>
                              <Img className='img' fluid={layoutData.items[0].media[0].image.asset.fluid} />
                              <h5>{layoutData.items[0].subheading} </h5> 
                              <Button bColor='redLight' color='#fff' text={layoutData.button} />
                        </div>
                  </Content>
            </Container>
      )
}

export default Top

const Content = styled.div`
      width: 60%;
      margin: 15vh 0;

      display: flex;
      justify-content: space-evenly;

      div {

            display: flex;
            align-items: center;
            flex-direction: column;
            
            padding: 0 5%;

            h2 {
                  margin: 0 0 4vh;
            }

            h5 {
                  margin: 4vh 0;
                  text-align: center;
            }

            .img {
                  height: 200px;
                  width: 200px;
            }
      }

      @media screen and (max-width: 1150px) {
            
            width: 70%;
      }

      @media screen and (max-width: 850px) { 

            width: 80%;

            div {

                  .img {
                        height: 150px;
                        width: 150px;
                  }
            }
      }

      @media screen and (max-width: 464px) {

            flex-direction: column;

            div {

                  margin: 5vh 0;

                  .img {
                        margin: 0;
                  }
            }
      }
`

const Container = styled.div`
      width: 100%;
      ${({ theme }) => theme.center()};
`

const SizeChart = ({ sizes }) => {

      return (
            <Table>
                  <tr>
                        <th>Size</th>
                        <th>Width (in cm) </th>
                        <th>Height (in cm) </th> 
                  </tr>
                  {
                        sizes.map(size => (
                              <tr>
                                    <td>{size.node.sizeName} </td>
                                    <td>{size.node.width} </td>
                                    <td>{size.node.height} </td>
                              </tr>
                        ))
                  }
            </Table>
      )
}

const Table = styled.table`

      border-collapse: collapse;
      font-family: 'Muli', sans-serif;

      th, td {
            padding: 1rem 2rem;
            text-align: center;
            
            border-bottom: 1px solid #000;

            @media screen and (max-width: 850px) {

                  padding: 1rem;
            }
      }

      th {
            border-bottom: 3px solid #000;
      }
`