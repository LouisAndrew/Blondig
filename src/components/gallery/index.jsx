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
                text-align: center;
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

        position: relative;

        .desc {

                height: 100%;
                width: 100%;
                position: absolute;
                top: 0;
                left: 0;

                ${({ theme }) => theme.center()};
                flex-direction: column;

                background-color: rgba(0, 0, 0, .4);
                opacity: 0;
                transition: .2s;

                h3 {
                        text-align: center;
                        color: #fff;
                }

                a {
                        text-align: center;
                        color: #fff;
                        font-size: 1.5rem;
                        text-decoration: none;

                        margin-top: 5%;
                }
        }

        &:hover {

                cursor: pointer;

                .desc { opacity: 1; }
        }
`

const Gallery = ({ content }) => {

        return (
                <Container>
                        <Content className='wrap'>
                                <h1>Gallery and Testimonials</h1>
                                <ImagesCont>
                                        {
                                                content.map( node => (
                                                        <Image key={node.desc}>
                                                                <Img fluid={node.img.asset.fluid} />
                                                                <div className="desc">
                                                                        <h3>{node.desc} </h3>
                                                                        {
                                                                                node.url && <a href={node.url}>Visit</a>
                                                                        } 
                                                                </div>
                                                        </Image>
                                                ) )
                                        }
                                </ImagesCont>
                        </Content>
                </Container>
        )
}

Gallery.propTypes = {

        content: PropTypes.arrayOf(
                PropTypes.object,
        ).isRequired,
}

export default Gallery