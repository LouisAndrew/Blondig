import React, { useState } from 'react'
import styled from 'styled-components'
import CheckBox from './CheckBox'
import { formatOptions } from '../../helper/formatter'

const Form = styled.form`
    
    width: 80%;
    padding: 0 5%; 

    display: flex;
    flex-direction: column;

    .pricing {

        padding-top: 2vh;

        h3 {

            font-weight: normal;
        }
    }

    .sizes {
        padding-top: 2vh;

        .size-input {

            display: flex;
            flex-flow: row wrap;
            width: 100%;
        }
    }

    .err {
        color: red;
    }

    @media only screen and ( max-width: 640px ) {

        width: 100%;
        align-items: center;

        /* flex-direction: row; */

        /* TODO: forms and prices row flex!! */

        & > div {

            /* width: 50%; */
            display: flex;
            flex-direction: column;
            align-items: center;

            &.check {
                flex-direction: row;
                align-items: flex-start;

                .err {

                    padding-left: 10%;
                    padding-top: 2vh;
                }

                & > div {
                    width: 50%;

                    &.pricing {

                        padding-left: 10%;
                        padding-top: 0;
                    }
                }
            }

            &.sizes {
/* 
                display: flex;
                flex-direction: column-reverse; */

                /* padding-top: 1vh;
                padding-left: 5%; */

                .size-input {
                    justify-content: center;
                }
            }
        }
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

const SizeLabel = styled.label`

    margin: 2vh 1vh 3vh 0;
    padding: 2vh;

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

const PriceForm = props => {

    const queryTemplate = {
        jenisKaos: '',
        pictureSize: '',
        size: '',
        jenisLengan: ''
    }

    const [ sizeFocus, setSizeFocus ] = useState([ ])
    const [ bigFocus, setBigFocus ] = useState(false)
    const [ bigFocusString, setBigFocusString ] = useState('')

    const [ price, setPrice ] = useState(0)
    const [ priceColor, setPriceColor ] = useState(0)
    const [ colors, setColors ] = useState([ ])

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
            const { price, priceColor, availableColor } = teeObject

            // const sizes =  sizeFocus
            //                 .filter(szObject => szObject.price === price)
            //                 .map(filtered => filtered.size)
            
            return {
                price,
                priceColor,
                availableColor
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

            //find if the lengan vatiant exists within big focus.

            let filtered = bigFocus[jenisLengan].filter(variant => variant.jenisKaos === jenisKaos)

            //if bigFocus is DTG or Polyflek..
            if ( bigFocusString ) {
                filtered = filtered.filter(variant => variant.pictureSize[0] === sizeGambar)
            }

            //if  the size focus and filtered isn't the same object
            if (JSON.stringify(sizeFocus) !== JSON.stringify(filtered)) {

                setSizeFocus(filtered)
            } else {

                if (filtered.length < 1) {
                    //if filtered return empty array => no product available
                    if (price !== 0 & priceColor !== 0) {
                        setPrice(0)
                        setPriceColor(0)
                        setSizeFocus(false)
                    }
                }
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

    const checkSize = e => {
            
        //filter the price by size name
        const { price, priceColor, availableColor } = filterBySize(e.target.value)

        //if size is checked => change price with the price provided from filter
        if (e.target.checked) {

            setPrice(price)
            setPriceColor(priceColor)
            setColors(availableColor)
        } else {
            //if not, set price to 0
            setPrice(0)
            setPriceColor(0)
            setColors([ ])
        }
    }

    const formatLongString = str => typeof str === 'string' && str.includes('Sz') ? str.split(' ')[1] : str

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
            <div className='check'>
                <div className='form'>
                <CheckBox 
                    onChange={lenganChange} 
                    data={values.map(vl => formatOptions(vl))} 
                    defaultString='Jenis Lengan' 
                    id='lengan' 
                />
                {
                    <CheckBox 
                        onChange={changeBahan} 
                        data={jenisLengan ? jenisBahan : [ ]} 
                        defaultString='Jenis Bahan' 
                        id='bahan' 
                    />
                }
                {
                        //check if the jenisLengan variant rlly exist within bigFocus
                    <CheckBox 
                        onChange={kaosChange} 
                        data={bigFocus[jenisLengan] ? findJenisKaos(bigFocus).map(dt => dt && formatOptions(dt)) : [ ]} 
                        defaultString='Jenis Kaos' 
                        id='kaos' 
                    />
                }
                {
                    <CheckBox 
                        onChange={sizeGambarChange}
                        data={addition ? addition : [ ]}
                        defaultString='Size Gambar'
                        id='size-gambar'
                    />
                }
                </div>
                {
                    ( price > 0 && priceColor > 0 ) ? 
                        <div className='pricing'>
                                    <h3>Harga Baju Polos: <strong>Rp.{price},-</strong></h3>
                                    <h3>Harga Baju Warna: <strong>Rp.{priceColor},-</strong></h3>
                        </div> :
                        !sizeFocus ? <p>Product is not available</p> : <p className='err'>Form belum lengkap</p>
                }
            </div>
            <div className="sizes">
                {
                    sizeFocus[0] && (
                        <>
                        <p>Available sizes:</p>
                        <div className='size-input'> 
                            {
                                sizeFocus.map(x => (
                                    <>
                                        <SizeRadio className='checkbox' value={x.size} id={x.size} name='sizes' onChange={checkSize} />
                                        <SizeLabel htmlFor={x.size}>{formatLongString(x.size)}</SizeLabel>
                                    </>
                                ))
                            } 
                        </div>
                        </>
                    )
                }
            </div>
        </Form>
    )
}

export default PriceForm