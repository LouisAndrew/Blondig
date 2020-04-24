import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import BackgroundImage from 'gatsby-background-image'

import Button from '../Button'

const Hero = ({ data: { node } }, className) => {

      //fluid isn't really great here?
      const imgUrl = node.content[0].items[0].media[0].image.asset.fluid
      const url = node.content[0].items[0].media[0].image.asset.url

      return (
            <Container img={url}>
                  {/* <Img  className='img' fluid={imgUrl} /> */}
                  <Content className='wrap'>
                        <div>
                              <Button text='Shop Now!' color='#fff' bColor='red' />
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

            padding: 10% 0;

            button {
                  
            }
      }
`

const Container = styled.div`
      height: 100vh;
      width: 100%;
      ${({ theme }) => theme.center()};

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