import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'

import Expand from '../../assets/expand.svg'
import Logo from '../../assets/logo.svg'

const Nav = () => {

      const click = () => {
            console.log('aa')
            document.getElementById('ul').classList.toggle('active')
      }

      return (
            <Container>
                  <Content className='wrap'>
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
      padding: 1vh 10% !important;

      display: flex;
      align-items: center;
      justify-content: space-between;

      top: 0;
      left: 0;
      position: fixed;
      z-index: 4;
      background-color: rgba(233, 233, 233, 0.5);

      #logo {
            height: 6vh;
      }

      #expand {
            display: none;
      }

      @media screen and (max-width: 840px) {

            /* overwrite the .wrap global */
            padding: 2vh 10% !important;
            
            #logo {
                  height: 6vh;
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
                  to: 'gallery'
            },
            {
                  name: 'Hubungi Kami',
                  to: '/contact'
            }
      ]

      return (
            <Ul id='ul'>
                  {/* {
                        availLinks.map(link => <li id={link.dropdown && 'dropdown'}><Link to={link.to}>{link.name}</Link> </li>)
                  } */}
                   <li><Link to='/'>Home</Link> </li>
                   <li><Link to='/sizing'>Size Chart</Link> </li>
                   <li className='dropdown-container'>
                         <span>Harga <FontAwesomeIcon icon={faCaretDown} /></span> 
                         <div className='dropdown'>
                               <Link to='/'>Cek Harga Kaosmu!</Link>
                               <Link to='/'>Pricelist DTG</Link>
                               <Link to='/'>Pricelist Polyfek</Link>
                               <Link to='/'>Pricelist Printable</Link>
                         </div>
                   </li>
                   <li><Link to='/gallery'>Gallery</Link> </li>
                    <li><Link to='contact'>Hubungi Kami</Link> </li>
            </Ul>
      )
}

const Ul = styled.ul`
      height: 100%;
      display: flex;
      align-items: center;
      list-style: none;

      li {  
            ${({ theme }) => theme.center()};
            position: relative;

            a, span {
                  color: #000;
                  padding: 2vh 2vw;
                  text-decoration: none;
                  font-size: 0.9rem;
                  font-weight: bold;
            }

            html.no-touch &:hover {
                  
                  a {
                        text-decoration: underline;
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
                              }

                              a:hover {
                                    background-color: rgba(150, 150, 150, 0.6);
                              }
                        }
                  }
            }
      }


      @media screen and (max-width: 840px) {
            
            position: absolute;
            flex-direction: column;
            align-items: flex-start;

            height: 90vh;
            width: 100%;
            top: 10vh;
            left: 0;
            max-height: 0;

            padding: 0;

            overflow: hidden;
            transition: 0.2s;
            z-index: 3;

            &.active {
                  max-height: 100vh;
                  padding: 5vh;
                  background-color: rgba(221, 221, 221, 0.6);
            }

            li {

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
`     