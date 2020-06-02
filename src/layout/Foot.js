import React from 'react'
import styled from 'styled-components'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import Logo from '../../assets/logo.svg'

const Foot = () => {

      return (
            <Container>
                  <Content className='wrap'>
                        <FootNav />
                        <FootIcons />
                  </Content>
            </Container>
      )
}

export default Foot

const Content = styled.footer`
      ${({ theme }) => theme.fitContainer()};
      display: flex;
      flex-direction: column;
`

const Container = styled.div`
      ${({ theme }) => theme.center()};
      width: 100%;
`

const FootNav = () => (
      <NavCont>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/sizing'>Size Chart</Link></li>
            <li><Logo id='logo-foot' /></li>
            <li><Link to='/sizing'>Harga</Link></li>
            {/* <li><Link to='/gallery'>Gallery</Link></li> */}
            <li><Link to='/contact'>Hubungi Kami</Link></li>
      </NavCont>
)     

const NavCont = styled.ul`
      display: flex;
      justify-content: space-evenly;
      align-items: center;

      list-style: none;
      border-bottom: 2px solid #000;
      padding: 3vh 0;

      a {
            text-decoration: none;
            font-weight: bold;
            color: #000;
      }

      @media only screen and (max-width: 640px) {
            
            flex-direction: column;
            align-items: flex-start;
            padding-left: 10%;

            li {
                  margin: 1vh 0;
            }
      }
`

const FootIcons = () =>{
      const data = useStaticQuery(graphql`
            query footQuery {
                  allSanityMisc(filter: {miscId: {eq: "socmed"}}) {
                        edges {
                              node {
                                    items {
                                          media {
                                                caption
                                                image {
                                                      asset { 
                                                            fluid {
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
          
      `)

      const imgs = data.allSanityMisc.edges[0].node.items[0].media

      const images = imgs.map(img => <LI><Link to={img.caption}><Img className='img' fluid={img.image.asset.fluid} /> </Link> </LI>)

      return (
            <IconCont>
                  {
                        images
                  }
            </IconCont>
      )
}

const LI = styled.li`
      
      height: 6vh;
      width: 6vh;
      border-radius: 50%;

      margin: 5vh 2vh;

      .img {
            ${({ theme }) => theme.fitContainer()};
      }

      @media only screen and (max-width: 850px) {
            
            height: 4vh;
            width: 4vh;
      }
` 

const IconCont = styled.ul`
      display: flex;
      list-style: none;

      justify-content: center;;
`