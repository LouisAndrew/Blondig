import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import Logo from '../../assets/logo.svg'
import tp from '../../assets/socmeds/tp.jpg'
import fb from '../../assets/socmeds/fb.jpg'
import ig from '../../assets/socmeds/ig.jpg'
import wa from '../../assets/socmeds/wa.jpg'
import sp from '../../assets/socmeds/sp.jpg'


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
            <li><Link to='/gallery'>Gallery</Link></li>
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

`

const FootIcons = () => (
      <IconCont>
            <LI img={wa}><Link to='/'><img src={wa} /> </Link> </LI>
            <LI img={ig}><Link to='/'><img src={wa} /></Link> </LI>
            <LI img={fb}><Link to='/'><img src={wa} /></Link> </LI>
            <LI img={sp}><Link to='/'><img src={wa} /></Link> </LI>
            <LI img={tp}><Link to='/'><img src={wa} /> </Link> </LI>
      </IconCont>
)

const LI = styled.li`
      
      height: 3vh;
      width: 3vh;
      border-radius: 50%;

      img {
            height: 100%;
            width: 100%;
      }
` 

const IconCont = styled.ul`
      display: flex;
`