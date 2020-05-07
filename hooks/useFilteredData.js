import React, { useState } from 'react'

const useFilteredData = (DTG, Printable, Polyflex) => {

    //states for the data => ofc after filtered
    const [ fullData, setFullData ] = useState([ ])

    //build a data based on a template.
    const createItem = ({ availableColor, size, jenisBahan, pictureSize, price, priceColor, jenisKaos }) => ({
        availableColor,
        size,
        jenisBahan,
        pictureSize,
        price,
        priceColor,
        jenisKaos
    })

    const filterBasedOnId = (teeId, array) => {

        return array.filter(item => item.teeId === teeId)
    }

    //create an object for every size available on a collection.
    const destructureSize = variant => {

        const { availableColor, jenisBahan, pictureSize, price, priceColor, jenisKaos } = variant

        return variant.availableSizes.map(size => createItem({
            availableColor,
            jenisBahan,
            pictureSize,
            price,
            priceColor,
            jenisKaos,
            size: size.sizeName
            
        }))
    }

    const buildData = dt => {

        const lPendekFull = filterBasedOnId('LENGAN_PENDEK', dt)
        const lPanjangFull = filterBasedOnId('LENGAN_PANJANG', dt)
        const raglanFull = filterBasedOnId('RAGLAN', dt)

        //variants that have same prices but different sizes => create an object for every one of them!
        const createDataPerId = dataFull => {

            let temp = []
            dataFull.forEach(variant => {

                temp = [ ...temp, destructureSize(variant) ]
            })

            return [].concat.apply([], temp)
        }   
        
        const lPendek = createDataPerId(lPendekFull)
        const lPanjang = createDataPerId(lPanjangFull)
        const raglan = createDataPerId(raglanFull)

        return {
            'LENGAN_PENDEK': lPendek,
            'LENGAN_PANJANG': lPanjang,
            'RAGLAN': raglan
        }
    }

    const dtgData = DTG[0] ? buildData(DTG) : null
    const prtData = Printable[0] ? buildData(Printable) : null
    const polyData = Polyflex[0] ? buildData(Polyflex) : null

    const datas = {

        DTG: dtgData,
        Printable: prtData,
        Polyflek: polyData,
        length: 1
    }

    if (!fullData.length) {
        
        setFullData(datas)
    }

    return fullData && fullData
}

export default useFilteredData
