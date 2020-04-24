import React, { useEffect } from 'react'
import { ThemeProvider, createGlobalStyle } from 'styled-components'

import checkTouch from '../helper/checkTouch'
import Nav from './Nav'
import Foot from './Foot'

const Layout = props => {

      const theme = {
            red: '#B83C2F',
            blue: '#3C64B1',
            redLight: '#EF6540',
            center: () => (`
                  display: flex;
                  align-itmes: center;
                  justify-content: center;
            `),
            fitContainer: () => (`
                  height: 100%;
                  width: 100%;
            `)
      }

      const GlobalStyle = createGlobalStyle`

      @import url('https://fonts.googleapis.com/css2?family=Muli:wght@500;600;800&family=Roboto&display=swap');
            :root {
                  font-size: 16px;
            }

            * {
                  margin: 0;
                  padding: 0;
                  box-sizing: border-box;
            }

            h1 {
                  font-size: 2.5rem;
            }

            h2 {
                  font-size: 2rem;
            }

            h3 {
                  font-size: 1.5rem;
            }

            h1, h2, h3, h4, h5, h6 {
                  font-family: 'Muli', sans-serif;
                  font-weight: 600;
            }

            p, button, a, span {
                  font-size: 1rem;
                  font-family: 'Roboto', sans-serif;
            }

            h5 {
                  font-size: 0.8rem;
            }

            .wrap {
                  padding: 0 10%;
            }

            @media screen and (max-width: 1150px) {
                  
                  :root {
                        font-size: 14px;
                  }

                  .wrap {
                        padding: 0 10%;
                  }
            }

            @media screen and (max-width: 464px) {
                  
                  :root {
                        font-size: 12px;
                  }

                  .wrap { 
                        padding: 0 10%;
                  }
            }

            @media screen and (min-width: 2000px) {

                  :root {
                        font-size: 20px;
                  }
            }

            @media screen and (min-width: 3000px) {

            :root {
                  font-size: 24px;
            }
}
      `
      
      useEffect(() => {
            checkTouch()
      })

      return (
            <ThemeProvider theme={theme}>
                  <GlobalStyle />
                  <Nav />
                  <main>{props.children} </main>
                  <Foot />
            </ThemeProvider>
      )
}

export default Layout
