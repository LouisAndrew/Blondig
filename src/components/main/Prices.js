import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'

const Prices = ({ data: { node: { content } } }) => {

    const filterPosition = pos => content.filter(item => item.position === pos)[0]

    const main = filterPosition('main')
    const misc = filterPosition('misc')
    console.log(main)
    console.log(misc)

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
        <h3>{heading} </h3>
        <Img className='img' fluid={img} />
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
    width: 31%;

    h3 {

        margin: 2rem 0;
    }

    p {

        padding: 1rem 0;
        text-align: center;
    }

    .img {

        width: 80%;
        height: 200px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    @media screen and ( max-width: 850px ) {
        
        width: 48%;
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
        justify-content: space-between;

        margin-top: 5vh;

        @media screen and ( max-width: 850px ) {

            justify-content: space-evenly;
        }
    }
`

const Container = styled.div`
    width: 100%;

    display: flex;
    justify-content: center;
`