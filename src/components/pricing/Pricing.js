import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useNavigate } from '@reach/router'
import Img from 'gatsby-image'

import useFilteredData from '../../../hooks/useFilteredData'
import PriceForm from './PriceForm'
import Button from '../Button'

const Container = styled.div`
`

const Content = styled.section`

    display: flex;
    margin: 15vh 0 5%;

    .item {

        width: 50%;

        &:last-child {

            width: fit-content;

            display: flex;
            align-items: center;
            flex-direction: column;

            .img {
                width: 300px;
                margin-bottom: 10%;
            }
        }
    }

    @media only screen and ( max-width: 640px ) {
        
        flex-direction: column-reverse;
        margin: 15vh 0 5vh;

        .item {

            width: 100%;
            margin: 2vh 0%;

            &:last-child {

                align-self: center;

                .img {
                    width: 200px;
                }
            }
        }
    }
`

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
    const [ inFocus, setInFocus ] = useState('')
    const filteredData = useFilteredData(DTG, Printable, Polyflex)
    const goToSizing = useNavigate()

    // get all images available from passed Data
    const images = passedData.map( variants => ({ img: variants.node.productImage, varName: variants.node.teeId, }) )
    // get certain image -> based on inFocus state!
    const displayImg = images.filter( img => img.varName === inFocus )[0]

    const defaultImg = images.filter( img => img.varName === 'TAMBAH_SISI' )[0].img.asset.fluid

    const changeFocus = val => setInFocus(val)

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
                    <PriceForm changeFocus={changeFocus} {...data} />
                </div>
                <div className='item'>
                    <div className='img'>
                        <Img fluid={displayImg ? displayImg.img.asset.fluid : defaultImg} />
                    </div>
                    <Button onClick={click} bColor='redLight' color='white' text='Cek sizing guide' />
                </div>
            </Content>
        </Container>
    )
}

export default Pricing