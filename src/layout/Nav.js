import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { useLocation } from '@reach/router'

import Expand from '../../assets/expand.svg'
import Logo from '../../assets/logo.svg'

const Nav = () => {

      const click = () => {
            const ul = document.getElementById('ul')
            ul && ul.classList.toggle('active')

            const nav = document.querySelector('nav')
            nav.classList.contains('on-hero') && nav.classList.toggle('on-hero') 
      }

      return (
            <Container>
                  <Content id='nav' className='wrap'>
                        <Logo id='logo' />
                        <Links id='links' />
                        <Expand onClick={click} id='expand' />
                  </Content>
            </Container>
      )
}

export default Nav

const Content = styled.nav`
      width: 100%;
      /* padding: 1vh 10% !important; */

      display: flex;
      /* kiri apa kanan? */
      /* flex-direction: row-reverse; */
      align-items: center;
      justify-content: space-between;

      top: 0;
      left: 0;
      position: fixed;
      z-index: 4;
      background-color: #fff;
      transition: .4s;
      box-shadow: 2px 2px 2px rgba(0, 0, 0, .25);

      #logo {
            height: 6vh;
            padding: 1vh 0;
      }

      #expand {
            display: none;
      }

      &.on-hero {

            background-color: rgba(0, 0, 0, 0);
            box-shadow: none;
      }

      @media screen and (max-width: 840px) {

            /* overwrite the .wrap global */
            padding: 1vh 10% !important;
            
            #logo {
                  height: 5vh;
            }

            #expand {
                  display: block;
                  height: 100%;
            }
      }
`

const Container = styled.div`
      width: 100%;
      ${({ theme }) => theme.center()};
`

const Links = () => {

      const availLinks = [
            {
                  name: 'Home',
                  to: '/'
            },
            {
                  name: 'Size Chart',
                  to: '/sizing'
            },
            {
                  name: 'Harga',
                  to: '/pricing',
                  dropdown: true
            },
            {
                  name: 'Gallery',
                  to: '/gallery'
            },
            {
                  name: 'Hubungi Kami',
                  to: '/contact'
            }
      ]

      const location = useLocation()

      const addUline = locId => {
            const docLink = document.getElementById(locId)
            docLink && docLink.classList.toggle('on')
      }

      useEffect(() => {

            if (location.pathname) {
                  addUline(location.pathname)
            }
      })

      return (
            <Ul id='ul'>
                  {/* {
                        availLinks.map(link => <li id={link.dropdown && 'dropdown'}><Link to={link.to}>{link.name}</Link> </li>)
                  } */}
                   <div className='cnp'>
                        <li><Link id='/' to='/'>Home</Link> </li>
                        <li><Link id='/sizing' to='/sizing'>Size Chart</Link> </li>
                        <li className='dropdown-container'>
                              <span>Harga <FontAwesomeIcon icon={faCaretDown} /></span> 
                              <div className='dropdown'>
                                    <Link id='/pricing' to='/pricing'>Cek Harga Kaosmu!</Link>
                                    <Link to='/pricing/dtg'>Pricelist DTG</Link>
                                    <Link to='/pricing/polyflex'>Pricelist Polyfek</Link>
                                    <Link to='/pricing/printable'>Pricelist Printable</Link>
                              </div>
                        </li>
                        <li><Link id='/gallery' to='/gallery'>Gallery</Link> </li>
                        <li><Link id='/contact' to='contact'>Hubungi Kami</Link> </li>
                   </div>
            </Ul>
      )
}

const Ul = styled.ul`
      height: 100%;

      list-style: none;

      .cnp {

            display: flex;
            align-items: center;

            li {  
                  ${({ theme }) => theme.center()};
                  position: relative;
                  transition: .4s;

                  a, span {
                        color: #555;
                        padding: 2vh 2vw;
                        text-decoration: none;
                        font-size: 0.9rem;
                        font-weight: bold;
                        transition: .4s;
                  }

                  a.on {
                        color: #000;
                        border-bottom: 2px solid #000;
                  }

                  html.no-touch &:hover {
                        
                        a {
                              color: #000;
                        }
                  }

                  &.dropdown-container {
                        display: flex;
                        flex-direction: column;

                        position: relative;
                        /* overflow: hidden; */

                        .dropdown {
                              
                              display: flex;
                              flex-direction: column;
                              position: absolute;
                              top: 6vh;
                              background-color: rgba(233, 233, 233, 0.8);
                              padding: 0;
                              max-height: 0;
                              overflow: hidden;

                              transition: .4s;
                        }

                        &:hover {

                              cursor: pointer;

                              .dropdown {
                                    max-height: 100vh;

                                    a {
                                          text-decoration: none;
                                          color: #555;
                                    }

                                    a:hover {
                                          color: #000;
                                    }
                              }
                        }
                  }
            }
      }


      @media screen and (max-width: 840px) {
            
            position: absolute;
            flex-direction: column;
            align-items: flex-start;

            height: 93vh;
            width: 100%;
            top: 7vh;
            left: 0;
            max-height: 0;

            padding: 0;

            overflow: hidden;
            transition: 0.2s;
            z-index: 3;

            &.active {
                  max-height: 100vh;
                  background-color: #fff;
            }

            .cnp {

                  flex-direction: column;
                  align-items: flex-start;
                  padding: 5vh;

                  li {


                        a, span {
                              font-size: 1.2rem;
                              font-weight: bold;
                        }

                        &.dropdown-container {

                              .dropdown {
                                    position: relative;
                                    max-height: 0;
                                    top: 0;
                                    margin-left: 10%;
                              }

                              &:active, &:hover {

                                    .dropdown {
                                          max-height: 100vh;
                                    }
                              }
                        }
                  }
            }
      }
`     