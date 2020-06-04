import React from 'react'
import styled from 'styled-components'
import { Link, useStaticQuery, graphql } from 'gatsby'

import Logo from '../../assets/logo.svg'

const Container = styled.div`

        width: 100%;
        ${({ theme }) => theme.center()};
        padding-top: 5%;
        padding-bottom: 5%;

        background-color: ${({ theme }) => theme.grey};

        @media only screen and ( max-width: 640px ) {

                padding-top: 15%;
                padding-bottom: 15%;
        }
`

const Content = styled.footer`

        width: 100%;

        display: flex;
        justify-content: space-evenly;

        & > div {

                display: flex;
                flex-direction: column;

                &.right {

                        /* display: flex;
                        flex-direction: column; */

                        #logo-foot {
                                margin-top: 3vh;
                        }
                }
        }

        @media only screen and ( max-width: 640px ) {
                
                flex-direction: column;
                align-items: center;

                & > div {
                        align-items: center;
                }
        }
`

const ContactItem = styled.div`

        width: fit-content;
        
        h3 {
                margin: 15% 0 10%;

                &.first {
                        margin-top: 0;
                }
        }

        @media only screen and ( max-width: 640px ) {

                h3 {
                        text-align: center;
                }     
        }
`

const Links = styled.ul`
        
        list-style: none;

        li {

                a {
                        color: #000;
                        text-decoration: none;
                }

                &:first-child {
                        margin-bottom: 5%;
                }
        }

        @media only screen and ( max-width: 640px ) {
                
                margin-top: 5vh;

                li {
                        text-align: center;
                }
        }
`

const Footer = () => {

        // TODO -> fetch contact from sanity -> add to contact item..
        const data = useStaticQuery( graphql`
                query ContatcsQuery {
                        allSanityContact {
                                edges {
                                        node {
                                                link
                                                value
                                                key
                                        }
                                }
                        }
                }
        ` )

        const { edges: contacts } = data && data.allSanityContact

        return (
                <Container>
                        <Content className='wrap'>
                                <div className='left'>
                                        <ContactItem>
                                                <h3 className='first'>HUBUNGI KAMI</h3>
                                                {
                                                        contacts && contacts
                                                                        .filter( contact => contact.node.key === 'Whatsapp' || contact.node.key === 'Email' )
                                                                        .map( contact => (
                                                                                <p key={contact.node.key}>{contact.node.key}: {contact.node.value}</p>
                                                                        ) )
                                                }
                                        </ContactItem>
                                        <ContactItem>
                                                <h3>ORDER VIA</h3>
                                                {
                                                        contacts && contacts
                                                                        .filter( contact => contact.node.key === 'Shopee' || contact.node.key === 'Tokopedia' )
                                                                        .map( contact => (
                                                                                <p key={contact.node.key}>{contact.node.key}: {contact.node.value}</p>
                                                                        ) )
                                                }
                                        </ContactItem>
                                </div>
                                <div className='right'>
                                        <Links> 
                                                <li><h4>Quick Links.</h4></li>
                                                <li><Link to='/'>Home</Link></li>
                                                <li><Link to='/sizing'>Size Chart</Link></li>
                                                <li><Link to='/pricing'>Harga</Link></li>
                                                <li><Link to='/gallery'>Gallery</Link></li>
                                                {/* <li><Link to='/contact'>Hubungi Kami</Link></li> */}
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