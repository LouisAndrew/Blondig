import React from 'react'
import styled from 'styled-components'

const Bot = ({ node: { content } }) => {

      const mainData = content[0]
      const miscData = content[1]

      return (
            <Container>
                  <Content>
                        <h2>{mainData.button} </h2>
                        <div className='top'>
                              {
                                    mainData.items.map(itm => <Card color='blue' heading={itm.heading} subheading={itm.misc} />)
                              }
                        </div>
                        <h2 className='bt'>{miscData.button} </h2> 
                        <div className='bot'>
                              {
                                    miscData.items.map(itm => <Card color='red' heading={itm.heading} subheading={itm.misc} />)
                              }
                        </div>
                  </Content>
            </Container>
      )
}

export default Bot

const Content = styled.section`
      width: 60%;
      margin-top: -5vh;

      h2 {
            margin: 5vh 0;
      }

      .top {

            display: flex;
            justify-content: space-between;

      }

      .bot {
            display: flex;
            justify-content: space-evenly
      }

      @media screen and (max-width: 850px) {
            
            h2.bt {
                  text-align: center;
            }

            .top {

                  justify-content: space-evenly;
                  flex-wrap: wrap;

                  .cnt {
                        width: 45% !important;
                  }
            }

            .bot {
                  flex-wrap: wrap;

                  .cnt {
                        width: 90% !important;
                        /* flex-direction: row; */
                  }
            }
      }

      @media screen and (max-width: 464px) {
            
            h2 {
                  text-align: center;
            }

            .top {

                  .cnt {
                        width: 90% !important;
                  }
            }
      }
`

const Container = styled.div`
      ${({ theme }) => theme.center()};
      width: 100%;
`

const Card = ({heading, subheading, color}) => (
      <CardCont className='cnt' $color={color}>
            <h1>{heading} </h1>
            <p>{subheading} </p>
      </CardCont>
)

const CardCont = styled.div`
      
      display: flex;
      flex-direction: column;
      align-items: center;

      width: 31%;

      h1 {
            color: ${props => props.$color === 'red' ? props.theme.redLight : props.theme.blue};
            font-size: 3rem;
            margin: 2vh 0;
      }

      p {
            text-align: center;
            padding: 10%;
      }
`