import React, { useState } from 'react'
import styled from 'styled-components'
import CheckBox from './CheckBox'
import { formatOptions } from '../../helper/formatter'

const PriceForm = props => {

    const queryTemplate = {
        jenisKaos: '',
        pictureSize: '',
        size: '',
        jenisLengan: ''
    }

    const [ inFocus, setInFocus ] = useState({ })
    const [ sizeFocus, setSizeFocus ] = useState([ ])
    const [ bigFocus, setBigFocus ] = useState(false)
    const [ bigFocusString, setBigFocusString ] = useState('')
    const [ price, setPrice ] = useState(0)
    const [ priceColor, setPriceColor ] = useState(0)

    // const [ size, setSize ] = useState('')
    const [ jenisKaos, setJenisKaos ] = useState('')
    const [ jenisLengan, setJenisLengan ] = useState('')
    const [ sizeGambar, setSizeGambar ] = useState('')

    const values = [ 'LENGAN_PANJANG', 'LENGAN_PENDEK', 'RAGLAN' ]

    //filter the null objects from props (useFilteredData hooks)
    const filterNull = obj => {

        return Object.keys(obj).filter(x => obj[x] !== null && x !== 'length')
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
                // sizes
            }
        }
    }

    //find jenisKaos inside the bigFocus => inside jenisLengan => dependant on bF and jL
    const findJenisKaos = bigFocus => {

        if (bigFocus[jenisLengan]) {
            
            const total = bigFocus[jenisLengan].map(variant => variant.jenisKaos)
            return total.filter((item, index) => total.indexOf(item) === index)
        } 
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
        } else {
            setSizeFocus(false)
        }
    }

    const changeBahan = val => {

        if (val !== 'def') {
            setBigFocus(props[val])
            if ( val === 'DTG' || val === 'Polyflek' ) {
                setBigFocusString(val)
            } else {
                setBigFocusString('')
            }

        } else {
            setBigFocus(false)
            setBigFocusString('')
        }
    }

    const lenganChange = val => {

        val !== 'def' ? setJenisLengan(val) : setJenisLengan('')
    }

    const kaosChange = val => {

        val !== 'def' ? setJenisKaos(val) : setJenisKaos('')
    }

    const sizeGambarChange = val => {

        setSizeGambar(val)
    }

    // const checkSize = e => {
        
    //     const el = e.target

    //     const { sizes, price, priceColor } = filterBySize(el.name)
    //     const checkboxes = document.querySelectorAll('.checkbox')

    //     if ( el.checked ) {

    //         checkboxes.forEach(cbs => sizes.some(size => size === cbs.name) ? cbs.checked = true: cbs.checked = false )
    //         setPrice(price)
    //         setPriceColor(priceColor)
    //     } else {

    //         checkboxes.forEach(cbs => sizes.some(size => size === cbs.name) ? cbs.checked = false: cbs.checked = false )
    //         setPrice(0)
    //         setPriceColor(0)
    //     }
    // }

        const checkSize = e => {
            
            //filter the price by size name
            const { price, priceColor } = filterBySize(e.target.value)
            console.log(e.target.checked)

            //if size is checked => change price with the price provided from filter
            if (e.target.checked) {
                setPrice(price)
                setPriceColor(priceColor)
            } else {
                //if not, set price to 0
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

    return (
        <Form>
            <CheckBox 
                onChange={lenganChange} 
                data={values.map(vl => formatOptions(vl))} 
                defaultString='Jenis Lengan' 
                id='lengan' 
                />
            <CheckBox 
                onChange={changeBahan} 
                data={jenisBahan} 
                defaultString='Jenis Bahan' 
                id='bahan' 
                />
            {   
                //pertama check big focus really exist ga
                ( JSON.stringify(bigFocus) !== JSON.stringify({  }) && bigFocus )

                &&

                <>
                    {
                        //check if the jenisLengan variant rlly exist within bigFocus
                        bigFocus[jenisLengan] && <CheckBox 
                                                    onChange={kaosChange} 
                                                    data={findJenisKaos(bigFocus).map(dt => formatOptions(dt))} 
                                                    defaultString='Jenis Kaos' 
                                                    id='kaos' 
                                                    />
                    }
                    {
                        addition && <CheckBox 
                                        onChange={sizeGambarChange}
                                        data={addition}
                                        defaultString='Size Gambar'
                                        id='size-gambar'
                                        />
                    }
                    {
                        sizeFocus[0] && <div className='size-input'> 
                                            {
                                                sizeFocus.map(x => <>
                                                                        <SizeRadio className='checkbox' value={x.size} id={x.size} name='sizes' onChange={checkSize} />
                                                                        <SizeLabel htmlFor={x.size}>{x.size}</SizeLabel>
                                                                   </>)
                                            } 
                                        </div>
                    }
                    {
                        ( price > 0 && priceColor > 0 ) ? 
                            <>
                                <h4>Harga Baju Polos: {price}</h4>
                                <h4>Harga Baju Warna: {priceColor}</h4>
                            </> :
                            !sizeFocus ? <p>Product is not available</p> : <p>Form belum lengkap</p>
                    }
                </>
            }
        </Form>
    )
}

export default PriceForm

const SizeLabel = styled.label`

    width: 7vh;
    height: 7vh;
    margin: 2vh 1vh 0 0;

    font-family: 'Muli', sans-serif;
    transition: .4s;

    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {

        cursor: pointer;
        background-color: rgba(0, 0, 0, .2);
    }
`

const SizeRadio = styled.input.attrs(props => ({
    type: 'radio'
}))`
    display: none;

    &:checked + label {
        
        background-color: #000;
        color: #fff;
    }
`

// const SelectBox = styled.select`
  
// ` 

const Form = styled.form`
    
    width: 50%;
    padding: 0 5%; 

    display: flex;
    flex-direction: column;
    /* background-color: red; */

    .size-input {

        display: flex;
    }
`