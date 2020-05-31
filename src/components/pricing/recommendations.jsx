import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'

const Container = styled.div`

`

const Recom = props => {

        const data = useStaticQuery( graphql`
                query RecomQuery {
                        allSanityMaterials {
                                edges {
                                        node {
                                                color
                                                gold
                                                heading
                                                image {
                                                        asset {
                                                                fluid {
                                                                        ...GatsbySanityImageFluid
                                                                }
                                                        }
                                                }
                                                iron
                                        }
                                }
                        }
                }
        ` )

        console.log(data)

        return (
                <Container>
                        
                </Container>
        )
}

Recom.propTypes = {

}

export default Recom