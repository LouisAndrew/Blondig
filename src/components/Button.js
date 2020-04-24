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
      color: ${props => {

            switch (props.color) {
                  case 'red':
                        return props.theme.red
                  case 'blue':
                        return props.theme.blue
                  case 'redLight':
                        return props.theme.redLight
                  default:
                        return props.color
            }
      }};
      
      background-color: ${props => {

            switch (props.bColor) {
                  case 'red':
                        return props.theme.red
                  case 'blue':
                        return props.theme.blue
                  case 'redLight':
                        return props.theme.redLight
                  default:
                        return props.bColor
            }
      }};

      border: none;
      border-radius: 15px;
      outline: none;
      box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);
      font-weight: bold;

      html.no-touch &:hover {
            cursor: pointer;
      }
`