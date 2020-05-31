import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'

const Prices = ({ data: { node: { content } } }) => {

    const filterPosition = pos => content.filter(item => item.position === pos)[0]

    const main = filterPosition('main')
    const misc = filterPosition('misc')

    return (
        <Container>
            <Content className='wrap'>
                <h2>{main.items[0].heading} </h2>
                <div className='items'>
                    {
                        misc.items.map(item => <Card heading={item.heading} img={item.media[0].image.asset.fluid} subheading={item.misc} />)
                    }
                </div>
            </Content>
        </Container>
    )
}

const Card = ({ heading, img, subheading }) => (
    <CardContent>
        <Img className='img' fluid={img} />
        <h3>{heading} </h3>
        {
            subheading.map(item => <p>{item}</p>)
        }
    </CardContent>
)

export default Prices

const CardContent = styled.div`
    
    display: flex;
    align-items: center;
    flex-flow: column wrap;
    width: 28%;
    padding: 2% 0;

    /* box-shadow: 2px 2px 4px rgba(0, 0, 0, .5), -2px -2px 2px rgba(211, 211, 211, .25); */
    border-radius: 5px;
    /* background-color: rgba(221, 221, 221, .2); */

    h3 {
        text-align: center;
        margin: 2rem 0 0;
    }

    p {

        margin-top: 2rem;
        text-align: center;
        padding: 0 2rem;
    }

    /* p:last-child {
        margin-bottom: 2rem;
    } */

    .img {

        width: 70%;
        height: 190px;
        display: flex;
        align-items: center;
        justify-content: center;

        @media screen and ( max-width: 464px ) {
            
            height: 160px;
        }
    }

    @media screen and ( max-width: 1400px ) {
        
        width: 40%;
        margin-bottom: 5%;
    }

    @media only screen and ( max-width: 840px ) { 
        
        width: 60%;
    }
    @media screen and ( max-width: 464px ) {
        
        width: 80%;
    }
`

const Content = styled.section`

    width: 100%;
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;

    h2 {
        color: ${({ theme }) => theme.blue};
    }

    .items {

        width: 100%;
        display: flex;
        flex-flow: row wrap;
        justify-content: space-evenly;

        margin-top: 5vh;

        @media screen and ( max-width: 1240px ) {

            justify-content: space-evenly;
        }
    }
`

const Container = styled.div`
    width: 100%;
    padding: 0 0 5vh;

    display: flex;
    justify-content: center;
`