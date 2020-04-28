import React, { useState } from 'react'
import styled from 'styled-components'

const PriceForm = props => {

    const queryTemplate = {
        jenisKaos: '',
        pictureSize: '',
        size: '',
        jenisLengan: ''
    }

    const [ inFocus, setInFocus ] = useState({ })
    const [ bigFocus, setBigFocus ] = useState({ })
    const [ bigFocusString, setBigFocusString ] = useState('')

    const [ jenisKaos, setJenisKaos ] = useState('')
    const [ jenisLengan, setJenisLengan ] = useState('')
    const [ sizeGambar, setSizeGambar ] = useState('')

    //filter the null objects from props (useFilteredData hooks)
    const filterNull = obj => {

        return Object.keys(obj).filter(x => obj[x] !== null && x !== 'length')
    }

    //format string => e.g LENGAN_PANJANG => LENGAN PANJANG
    const formatString = str => {
        
        const split = str.split('_')
        return split.join(' ')
    }

    //find jenisKaos inside the bigFocus => inside jenisLengan => dependant on bF and jL
    const findJenisKaos = bigFocus => {

        const total = bigFocus[jenisLengan].map(variant => variant.jenisKaos)

        return total.filter((item, index) => total.indexOf(item) === index)
    }

    const searchBasedOnQuery = query => {

        const { bigFocus, jenisKaos, jenisLengan } = query

        if ( bigFocus[jenisLengan] ) {
            let filtered = bigFocus[jenisLengan].filter(variant => variant.jenisKaos === jenisKaos)

            if ( bigFocusString ) {
                filtered = filtered.filter(variant => variant.pictureSize[0] === sizeGambar)
            }

            console.log(filtered)
        }
    }

    const changeBahan = e => {

        if (e !== 'def') {
            setBigFocus(props[e.target.value])
            
            if ( e.target.value === 'DTG' || e.target.value === 'Polyflek' ) {
                setBigFocusString(e.target.value)
            } else {
                setBigFocusString('')
            }

        } else {
            setBigFocus(false)
            setBigFocusString('')
        }
    }

    const lenganChange = e => {

        e.target.value !== 'def' ? setJenisLengan(e.target.value) : setJenisLengan('')
    }

    const kaosChange = e => {

        e.target.value !== 'def' ? setJenisKaos(e.target.value) : setJenisKaos('')
    }

    const sizeChange = e => {

        setSizeGambar(e.target.value)
    }

    //queried by the select menus..
    const query = {
        jenisKaos,
        jenisLengan,
        bigFocus
    }

    bigFocus && searchBasedOnQuery(query)

    const jenisBahan = filterNull(props)

    let addition = [ ]
    if ( bigFocusString ) {

        addition = bigFocusString === 'DTG' ? [ 'A3', 'A4', 'A5', 'A6' ] : [ '10x10cm', '10x30cm', '20x30xm', '30x30cm', '40x30cm' ]
    }

    return (
        <Form>
            <SelectBox onChange={changeBahan}>
                <option value='def'>JENIS BAHAN</option>
                {
                    jenisBahan.map(bh => <option value={bh}>{bh} </option>)
                }
            </SelectBox>
            {
                JSON.stringify(bigFocus) !== JSON.stringify({ }) && bigFocus ? 
                <>
                    <SelectBox onChange={lenganChange}>
                        <option value='def'>JENIS LENGAN</option>
                        {
                            Object.keys(bigFocus).map(bg => <option value={bg}>{formatString(bg)} </option>)
                        }
                    </SelectBox>
                    <SelectBox onChange={kaosChange}>
                        <option value='def'>JENIS KAOS</option>
                        {
                            bigFocus && jenisLengan ? findJenisKaos(bigFocus).map(item => <option value={item}>{formatString(item)} </option>) : <></>
                        }
                    </SelectBox>
                    {
                        addition && <SelectBox onChange={sizeChange}>
                                        {
                                            addition.map(data => <option val={data}>{data} </option>)
                                        }
                                    </SelectBox>
                    }
                </> : <></>
            }
        </Form>
    )
}

export default PriceForm

const SelectBox = styled.select`
  
`

const Form = styled.form`
  
`