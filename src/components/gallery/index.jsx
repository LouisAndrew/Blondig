import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

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

const Images = styled.div`
        
        width: 100%;

        display: flex;
`

const Gallery = props => {

        return (
                <Container>
                        <Content className='wrap'>
                                <h1>Gallery and Testimonials</h1>
                                <Images>

                                </Images>
                        </Content>
                </Container>
        )
}

Gallery.propTypes = {

}

export default Gallery