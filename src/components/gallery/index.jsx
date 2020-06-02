import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Img from 'gatsby-image'

const Container = styled.div`

        width: 100%;
        ${({ theme }) => theme.center()};
`

const Content = styled.div`
        
        margin: 15vh 0;
        min-height: 60vh;

        h1 {
                color: ${({ theme }) => theme.red};
        }
`

const ImagesCont = styled.div`
        
        width: 100%;
        margin: 5% 0;

        display: flex;
        flex-flow: row wrap;
        justify-content: space-evenly;
`

const Image = styled.div`
        
        width: 300px;
        margin: 20px;
`

const Gallery = ({ content }) => {

        (content)

        return (
                <Container>
                        <Content className='wrap'>
                                <h1>Gallery and Testimonials</h1>
                                <ImagesCont>
                                        {
                                                content.map( imgNode => (
                                                        <Image>
                                                                <Img fluid={imgNode.img.asset.fluid} />
                                                        </Image>
                                                ) )
                                        }
                                </ImagesCont>
                        </Content>
                </Container>
        )
}

Gallery.propTypes = {

}

export default Gallery