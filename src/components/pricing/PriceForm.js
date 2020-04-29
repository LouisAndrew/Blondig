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
    const [ sizeFocus, setSizeFocus ] = useState([ ])
    const [ bigFocus, setBigFocus ] = useState({ })
    const [ bigFocusString, setBigFocusString ] = useState('')
    const [ price, setPrice ] = useState(0)
    const [ priceColor, setPriceColor ] = useState(0)

    const [ size, setSize ] = useState('')
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

    //filter harga sama zg size beda beda !
    const filterBySize = size => {

        if (sizeFocus) {

            //get tee object by original size provided..
            const teeObject = sizeFocus.filter(sz => sz.size === size)[0]
            const price = teeObject.price
            const priceColor = teeObject.priceColor

            const sizes =  sizeFocus
                            .filter(szObject => szObject.price === price)
                            .map(filtered => filtered.size)
            
            return {
                price,
                priceColor,
                sizes
            }
        }
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

            if (JSON.stringify(sizeFocus) !== JSON.stringify(filtered)) {
                setSizeFocus(filtered)
            }
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

    const checkSize = e => {
        
        const el = e.target

        const { sizes, price, priceColor } = filterBySize(el.name)
        const checkboxes = document.querySelectorAll('.checkbox')

        if ( el.checked ) {

            checkboxes.forEach(cbs => sizes.some(size => size === cbs.name) ? cbs.checked = true: cbs.checked = false )
            setPrice(price)
            setPriceColor(priceColor)
        } else {

            checkboxes.forEach(cbs => sizes.some(size => size === cbs.name) ? cbs.checked = false: cbs.checked = false )
            setPrice(0)
            setPriceColor(0)
        }
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

    console.log(sizeFocus)

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
                    {
                        sizeFocus[0] && <> 
                                            {
                                                sizeFocus.map(x => <Label htmlFor={x.size}>{x.size} <CheckBox className='checkbox' name={x.size} onChange={checkSize} /></Label>)
                                            } 
                                        </>
                    }
                    {
                        price > 0 && <h1>Harga Baju Polos: {price} </h1>
                    }
                    {
                        priceColor > 0 ? <h1>Harga Baju Warna {priceColor} </h1> : <h2>Insert ...</h2>
                    }
                </> : <></>
            }
        </Form>
    )
}

export default PriceForm

const Label = styled.label`

`

const CheckBox = styled.input.attrs(props => ({
    type: 'checkbox'
}))`

`

const SelectBox = styled.select`
  
`

const Form = styled.form`
  
`