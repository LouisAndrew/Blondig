import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from 'gatsby'

const Container = styled.div`

        width: 100%;
        ${({ theme }) => theme.center()};
        padding-top: 5%;
        padding-bottom: 5%;
`

const Content = styled.footer`

        width: 100%;

        display: flex;

        & > div {
                width: 50%;
        }
`

const ContactItem = styled.div`
        
`

const Links = styled.ul`
        
        list-style: none;

        a {
                color: black;
                text-decoration: none;
        }
`

const Footer = props => {

        // TODO -> fetch contact from sanity -> add to contact item..

        return (
                <Container>
                        <Content className='wrap'>
                                <div className='left'>
                                        <ContactItem>
                                                <h3>HUBUNGI KAMI</h3>
                                        </ContactItem>
                                        <ContactItem>
                                                <h3>ORDER VIA</h3>
                                        </ContactItem>
                                </div>
                                <div className='right'>
                                        <Links> 
                                                <li><h4>Quick Links.</h4></li>
                                                <li><Link to='/'>Home</Link></li>
                                                <li><Link to='/sizing'>Size Chart</Link></li>
                                                <li><Link to='/sizing'>Harga</Link></li>
                                                {/* <li><Link to='/gallery'>Gallery</Link></li> */}
                                                <li><Link to='/contact'>Hubungi Kami</Link></li>
                                        </Links>
                                </div>
                        </Content>
                </Container>
        )
}

Footer.propTypes = {

}

export default Footer