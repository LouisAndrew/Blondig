import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import Table from './table'

const Container = styled.div`
        
        width: 100%;
        ${({ theme }) => theme.center()};
        padding-bottom: 10%;
`

const Content = styled.div`
  
`

const Recom = () => {

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

        const { edges: materials } = data && data.allSanityMaterials

        return (
                <Container>
                        <Content className='wrap'>
                                <Table data={materials} /> 
                        </Content>
                </Container>
        )
}

Recom.propTypes = {

}

export default Recom