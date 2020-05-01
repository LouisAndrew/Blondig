//format string => e.g LENGAN_PANJANG => LENGAN PANJANG
export const formatOptions = str => {
        
    const split = str.split('_')
    return split.join(' ')
}

export const reformatOptions = str => {

    const split = str
                    .split(' ')
                    // .forEach(splitted => splitted.toUpperCase())

    return split.join('_')
}