import React, { useEffect } from 'react'

const useGoogleFonts = () => {
    
    useEffect(() => {

        const link = document.createElement('link')
        link.rel = 'stylesheet'
        link.href = 'https://fonts.googleapis.com/css2?family=Muli:wght@400;500;600;700&family=Roboto&display=swap'

        document.head.appendChild(link)

        return () => {
            document.head.removeChild(link)
        }
    })
}

export default useGoogleFonts
