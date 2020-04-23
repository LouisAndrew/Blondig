import React from 'react'
import styled from 'styled-components'

const Button = props => {
      return (
            <Container {...props}>
                  {props.text}
            </Container>
      )
}

export default Button

const Container = styled.button`
      
      padding: 1rem 2rem;
      background-color: ${props => {

            switch (props.color) {
                  case 'red':
                        return props.theme.red
                  case 'blue':
                        return props.theme.blue
                  default:
                        return props.color
            }
      }};
      
      color: ${props => {

            switch (props.color) {
                  case 'red':
                        return props.theme.red
                  case 'blue':
                        return props.theme.blue
                  default:
                        return props.color
            }
      }}
`