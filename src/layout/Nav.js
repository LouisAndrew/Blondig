import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import Expand from '../../assets/expand.svg'
import Logo from '../../assets/logo.svg'

const Nav = () => {

      const click = () => {
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
      ${({ theme }) => theme.fitContainer()};
      padding: 1vh 0;

      display: flex;
      align-items: center;
      justify-content: space-between;

      position: relative;

      #logo {
            height: 5.6vh
      }

      #expand {
            display: none;
      }

      @media screen and (max-width: 840px) {

            /* overwrite the .wrap global */
            padding: 2vh 10% !important;
            
            #logo {
                  height: 4vh;
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
                  {
                        availLinks.map(link => <li id={link.dropdown && 'dropdown'}><Link to={link.to}>{link.name}</Link> </li>)
                  }
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

            a {
                  color: #000;
                  padding: 2.8vh 2vw;
                  text-decoration: none;
                  font-weight: bold;
            }

            html.no-touch &:hover {
                  
                  a {
                        text-decoration: underline;
                  }
            }
      }


      @media screen and (max-width: 840px) {
            
            position: absolute;
            flex-direction: column;
            align-items: flex-start;

            height: 92vh;
            width: 100%;
            top: 8vh;
            left: 0;
            max-width: 0;

            padding: 0;

            overflow: hidden;
            transition: 0.2s;

            &.active {
                  max-width: 100%;
                  padding: 5vh;
            }
      }
`     