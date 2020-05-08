import React from 'react'
import styled from 'styled-components'

const Contact = () => {
    return (
        <Container>
            <Content className='wrap'>
                <h2>Hubungi Kami</h2>
            </Content>
        </Container>
    )
}

export default Contact

const Content = styled.section`

    width: 100%;
    ${({ theme }) => theme.center()};
    flex-direction: column;

    h2 {

        text-align: center;
        color: ${({ theme }) => theme.red};
    }
`

const Container = styled.div`

    padding: 10vh 0;
    width: 100%;
    ${({ theme }) => theme.center()};
`