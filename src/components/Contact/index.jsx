import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 100%;
    ${({ theme }) => theme.center()};
`

const Content = styled.section`

    width: 100%;
    margin: 15vh 0;

    ${({ theme }) => theme.center()};
    flex-direction: column;

    h2 {

        text-align: center;
        color: ${({ theme }) => theme.red};
    }
`

const CardCont = styled.div`
    
    display: flex;
`

const Card = styled.div`
  
`

const Contact = () => {
    return (
        <Container>
            <Content className='wrap'>
                <h2>Hubungi Kami</h2>
                <CardCont>
                    
                </CardCont>
            </Content>
        </Container>
    )
}

export default Contact