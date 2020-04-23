import React from 'react'
import { ThemeProvider, createGlobalStyle } from 'styled-components'

import checkTouch from '../helper/checkTouch'
import Nav from './Nav'

const Layout = props => {

      const theme = {
            red: '#FF8A00',
            blue: '#3C64B1',
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

            @import url('https://fonts.googleapis.com/css2?family=Muli&display=swap');
            :root {
                  font-size: 16px;
                  font-family: 'Muli', sans-serif;
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

            p, button, a {
                  font-size: 1rem;
            }

            h5 {
                  font-size: 0.8rem;
            }

            .wrap {
                  max-width: 950px;
            }

            @media screen and (max-width: 1000px) {
                  
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
      `
      
      checkTouch()

      return (
            <ThemeProvider theme={theme}>
                  <GlobalStyle />
                  <Nav />
                  <main>{props.children} </main>
            </ThemeProvider>
      )
}

export default Layout
