import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useNavigate } from '@reach/router'

import useFilteredData from '../../../hooks/useFilteredData'
import PriceForm from './PriceForm'
import Button from '../Button'

const Pricing = ({ allSanityTee: { edges: passedData } }) => {

    //filter by DTG, Printable, Polyflex
    const extractVar = ( variantName, array ) => {
        let toReturn = []
        array.forEach(item => {

            //split jenisBahan => e.g DTG A4 XL => to just find the DTG!
            let filteredVariants = item.node.variants.filter(variants => variants.jenisBahan
                                                            .split(' ')[0] === variantName)

            const temp = filteredVariants.map( data => {
                let combine = {
                    ...data,
                    teeId: item.node.teeId
                }

                return combine
            })

            toReturn = [...toReturn, temp]
        })

        //toReturn is an array of array => containing requested datas
        //flatten the array
        return [].concat.apply([], toReturn)
    }

    const DTG = extractVar( 'DTG', passedData )
    const Polyflex = extractVar( 'Polyflex', passedData )
    const Printable = extractVar( 'Printable', passedData )

    const [ data, setData ] = useState({ })
    const filteredData = useFilteredData(DTG, Printable, Polyflex)
    const goToSizing = useNavigate()

    const click = () => {

        goToSizing('/sizing', { replace: true })
    }

    useEffect(() => {

        if (!data.length) {
            setData(filteredData)
        }
    })

    return (
        <Container>
            <Content className='wrap'>
                <div className='item'>
                    <PriceForm {...data} />
                </div>
                <div className='item'>
                    <Button onClick={click} bColor='redLight' color='white' text='Cek sizing guide' />
                </div>
            </Content>
        </Container>
    )
}

export default Pricing

const Content = styled.section`

    display: flex;

    .item {

        width: 50%;

        &:last-child {

            display: flex;
            flex-direction: column
        }
    }

    @media screen and ( max-width: 464px ) {
        
        flex-direction: column;

        .item {
            width: 100%;

            &:last-child {
                align-items: center;
            }
        }
    }
`

const Container = styled.div`
    padding: 10vh 0;
`