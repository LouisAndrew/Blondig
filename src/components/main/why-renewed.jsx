import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { useStaticQuery, graphql } from 'gatsby'

import { extractPosMain } from '../../helper/extracts'

const Container = styled.div`

        background-color: #fff;

        padding: 5% 0;

        @media only screen and ( max-width: 640px ) {
                padding: 15% 0;
        }
`

const Content = styled.div`

        h2 { 
                text-align: center; 
                color: ${({ theme }) => theme.red};
        }
`

const CardContainer = styled.div`
        
        display: flex;
        flex-flow: row wrap;
        justify-content: space-evenly;

        margin-top: 8vh;

        @media only screen and ( max-width: 840px ) {

                flex-flow: column wrap;
                align-items: center;
        }
`

const Card = styled.div`
        
        display: flex;

        margin-bottom: 4vh;
        padding: 2rem;
        width: 40%;

        background-color: ${({ theme }) => theme.grey};
        border-radius: 6px;
        box-shadow: 2px 2px 4px rgba(0, 0, 0, .25);

        .card-img {
                height: 125px;
                width: 125px;

                margin-right: 2rem;
        }

        h3 {
                margin-bottom: 1rem;
        }

        @media only screen and ( max-width: 1040px ) {
                
                .card-img {
                        height: calc( 125px * .8 );
                        width: calc( 125px * .8 );

                        img {
                                transform: scale(.7) translate(-25%, -25%);
                        }
                }
        }

        @media only screen and ( max-width: 840px ) {
                
                width: 60%;
        }

        @media only screen and ( max-width: 640px ) {
                
                width: 100%;

                .card-img {
                        height: calc( 125px * .7 );
                        width: calc( 125px * .7 );

                        img {
                                transform: scale(.6) translate(-35%, -35%);
                        }
                }
        }
`

const Why = ({ data: { node: { content } } }) => {

        const data = useStaticQuery( graphql`
                query WhyQuery {
                        sanityHomepage(layoutId: {eq: "why-us"}, content: {elemMatch: {position: {eq: "misc"}}}) {
                                content {
                                        items {
                                                media {
                                                        image {
                                                                asset {
                                                                        fixed(height: 125, width: 125) {
                                                                                ...GatsbySanityImageFixed
                                                                        }
                                                                }
                                                        }
                                                }
                                                subheading
                                                heading
                                        }
                                }
                        }
                }

        ` )

        const mainData = extractPosMain('main', content)
        const { items } = data && data.sanityHomepage.content[1]
    
        const { heading } = mainData && mainData.items[0]

        return (
                <Container>
                        <Content className='wrap'>
                                <h2>{heading}</h2>
                                <CardContainer>
                                        {
                                                items && items.map( dt => <WhyCard key={dt.heading} {...dt} /> ) 
                                        }
                                </CardContainer>
                        </Content>
                </Container>
        )
}

const WhyCard = ({ heading, subheading, media }) => (
        <Card>
                <div className='card-img'>
                        <Img fixed={media[0].image.asset.fixed} />
                </div>
                <div>
                        <h3>{heading}</h3>
                        <p>{subheading}</p>
                </div>
        </Card>
)

Why.propTypes = {

        data: PropTypes.objectOf(
                PropTypes.object,
        ).isRequired,
}

export default Why