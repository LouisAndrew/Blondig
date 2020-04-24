const checkTouch = () => {

      //if the device is a touch screen device..
      const removeNoTouch = () => {
            document.documentElement.classList.remove('no-touch')
      }
      
      document.documentElement.classList.add('no-touch')
      document.addEventListener('touchstart', () => {
            removeNoTouch()

            document.removeEventListener('touchstart', removeNoTouch)
      })
}

export default checkTouch
