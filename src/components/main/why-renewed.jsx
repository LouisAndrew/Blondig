import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { useStaticQuery, graphql } from 'gatsby'

import { extractPosMain } from '../../helper/extracts'

const Container = styled.div`

        background-color: #F4ECD8;
`

const Content = styled.div`
        
        padding-top: 8vh !important;
        padding-bottom: 8vh !important;

        h2 { 
                text-align: center; 
                color: ${({ theme }) => theme.red};
        }
`

const CardContainer = styled.div`
        
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;

        margin-top: 4vh
`

const Card = styled.div`
        
        display: flex;

        margin-bottom: 4vh;
        padding: 1rem 2rem;
        width: 40%;

        background-color: #F4ECD8;
        border-radius: 4px;
        box-shadow: 2px 2px 2px rgba(0, 0, 0, .25);

        .card-img {
                height: 125px;
                width: 125px;

                margin-right: 2rem;
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
        const miscData = extractPosMain('misc', content)

        const { items } = data && data.sanityHomepage.content[1]
  
        // const fluid = mainData.items[0].media[0].image.asset.fluid
  
        // const cardsDatas = miscData.items.map(dt => <WhyCards heading={dt.heading} subheading={dt.subheading} img={dt.media[0].image.asset.fluid} />)

        const { heading } = mainData && mainData.items[0]

        console.log(miscData)
        console.log(items)

        return (
                <Container>
                        <Content className='wrap'>
                                <h2>{heading}</h2>
                                <CardContainer>
                                        {
                                                items && items.map( dt => <WhyCard {...dt} /> ) 
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