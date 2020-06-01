import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Container = styled.div`
        
        ${({ theme }) => theme.center()};
`

const Content = styled.div`
        
        margin: 15vh 0;

        h1 {
                color: ${({ theme }) => theme.red};
        }
`

const PriceBasedMaterial = ({ material }) => {

        return (
                <Container>
                        <Content className='wrap'>
                                <h1>{`Pricelist ${material}`}</h1>
                        </Content>
                </Container>
        )
}

PriceBasedMaterial.propTypes = {

}

export default PriceBasedMaterial