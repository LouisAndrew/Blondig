import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import useFilteredData from '../../../hooks/useFilteredData'
import PriceForm from './PriceForm'

const Pricing = ({ DTG, Printable, Polyflex }) => {

    const [ data, setData ] = useState({ })
    const filteredData = useFilteredData(DTG, Printable, Polyflex)

    useEffect(() => {

        if (!data.length) {
            setData(filteredData)
        }
    })

    return (
        <Container>
            <PriceForm {...data} />
        </Container>
    )
}

export default Pricing

const Container = styled.div`

    padding: 10vh 0;
`