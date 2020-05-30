import React from 'react'
import styled from 'styled-components'
import { Link, useStaticQuery, graphql } from 'gatsby'

import Logo from '../../assets/logo.svg'

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

                &.right {

                        display: flex;
                        flex-direction: column;

                        #logo-foot {
                                margin-top: 5%;
                        }
                }
        }

        @media screen and ( max-width: 464px ) {
                
                flex-direction: column;

                & > div {

                        width: 100%;

                        h3, p {
                                text-align: center;
                        }

                        &.right {

                                align-items: center;
                        }
                }
        }
`

const ContactItem = styled.div`
        
        h3 {
                margin: 5% 0;

                &.first {
                        margin-top: 0;
                }
        }
`

const Links = styled.ul`
        
        list-style: none;

        li {

                a {
                        color: black;
                        text-decoration: none;
                }

                &:first-child {
                        margin-bottom: 5%;
                }
        }

        @media screen and ( max-width: 464px ) {
                
                margin-top: 10%;

                li {
                        text-align: center;
                }
        }
`

const Footer = () => {

        // TODO -> fetch contact from sanity -> add to contact item..
        const data = useStaticQuery( graphql`
                query ContactQueryFooter {
                        allSanityContacts {
                                edges {
                                        node {
                                                name
                                                link
                                        }
                                }
                        }
                }
        ` )

        const { edges: contacts } = data && data.allSanityContacts

        console.log(contacts)

        return (
                <Container>
                        <Content className='wrap'>
                                <div className='left'>
                                        <ContactItem>
                                                <h3 className='first'>HUBUNGI KAMI</h3>
                                                {
                                                        contacts && contacts
                                                                        .filter( contact => contact.node.name === 'Whatsapp' || contact.node.name === 'Email' )
                                                                        .map( contact => (
                                                                                <p>{contact.node.name}: {contact.node.link}</p>
                                                                        ) )
                                                }
                                        </ContactItem>
                                        <ContactItem>
                                                <h3>ORDER VIA</h3>
                                                {
                                                        contacts && contacts
                                                                        .filter( contact => contact.node.name === 'Shoppee' || contact.node.name === 'Tokopedia' )
                                                                        .map( contact => (
                                                                                <p>{contact.node.name}: {contact.node.link}</p>
                                                                        ) )
                                                }
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
                                        <Logo id='logo-foot' />
                                </div>
                        </Content>
                </Container>
        )
}

Footer.propTypes = {

}

export default Footer