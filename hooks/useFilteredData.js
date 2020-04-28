import React, { useState } from 'react'

const useFilteredData = (DTG, Printable, Polyflex) => {

    //states for the data => ofc after filtered
    const [ fullData, setFullData ] = useState([ ])
    // const [ dtgData, setDtgData ] = useState({ })
    // const [ printableData, setPrintableData ] = useState({ })
    // const [ polyData, setPolyData ] = useState({ })

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

        return array.filter(item => item.node.teeId === teeId)[0]
    }

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

        const lPendekFull = filterBasedOnId('LENGAN_PENDEK', dt.edges)
        const lPanjangFull = filterBasedOnId('LENGAN_PANJANG', dt.edges)

        const createDataPerId = dataFull => {

            let temp = []
            dataFull.node.variants.forEach(variant => {

                temp = [ ...temp, destructureSize(variant) ]
            })

            return [].concat.apply([], temp)
        }   
        
        const lPendek = createDataPerId(lPendekFull)
        const lPanjang = createDataPerId(lPanjangFull)

        return {
            'LENGAN_PENDEK': lPendek,
            'LENGAN_PANJANG': lPanjang
        }
    }

    const dtgData = DTG.edges[0] ? buildData(DTG) : null
    const prtData = Printable.edges[0] ? buildData(Printable) : null
    const polyData = Polyflex.edges[0] ? buildData(Polyflex) : null

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
