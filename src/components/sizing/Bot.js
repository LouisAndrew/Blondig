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
      margin-top: -10vh;

      h2 {
            margin: 8vh 0 5vh;
            text-align: center;
            font-weight: bold;

            @media only screen and ( orientation: portrait ) {
                  
                  margin-bottom: 3vh;
            }
      }

      .top {

            display: flex;
            justify-content: space-between;

      }

      .bot {
            display: flex;
            justify-content: space-evenly;
            
            margin-bottom: 10%;
      }

      @media only screen and (max-width: 850px) {
            
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
                        margin-bottom: 10%;
                  }
            }
      }

      @media only screen and (max-width: 640px) {
            
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

const Card = ({heading, subheading, color}) => {

      (typeof subheading)
      const text = subheading[1] ? <>{ subheading.map(txt => <p className='double'>{txt}</p>) }</> : <p>{subheading} </p>

      return (
            <CardCont className='cnt' $color={color}>
                  <h1>{heading}</h1>
                  { text }
            </CardCont>
      )
}

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

            &.double {
                  padding-bottom: 2%;
            }
      }
`