
//extract data from misc and main..
export const extractPosMain = (position, array) => {
      const temp = array.filter(content => content.position === position)

      return temp[0] ? temp[0] : false
}

//extract for ex
export const extractPositionId = (id, array) => {
        
      const extractedData = array.filter(dt => dt.node.layoutId === id)
      return extractedData[0] ? extractedData[0] : false
  }