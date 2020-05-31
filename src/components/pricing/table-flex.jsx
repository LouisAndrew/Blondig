import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { useNavigate } from '@reach/router'

import Button from '../Button'

const Container = styled.div`

        display: flex;
        align-items: flex-end;
`

const Item = styled.div`
        
        width: 250px;
        padding: 0 1vh;

        display: flex;
        flex-direction: column;

        .img {
                width: 100%;
                height: 200px;
        }

        .button {
                height: 150px;

                ${({ theme }) => theme.center()};

                button { 
                        height: fit-content !important;
                        width: fit-content !important;
                }
        }

        .true {
                text-align: center;

                h4 {
                        padding: 5% 0;
                }
        }

        .header {

                padding: 0 10%;

                h4 {
                        padding: 5% 0;
                }
        }
`

const TableFlex = ({ data }) => {

        const navigate = useNavigate()

        const goTo = addr => navigate(`${addr}`)

        const goToClick = name => {

                const pricing = 'pricing'

                switch (name) {
                        case 'Printable':
                                return goTo(`${pricing}/printable`)
                        case 'Polyflex':
                                return goTo(`${pricing}/polyflex`)
                        case 'DTG': 
                                return goTo(`${pricing}/dtg`)
                        default:
                                return goTo(`/`)
                }
        }

        const upperCase = str => typeof str === 'string' ? str.toUpperCase() : str.toString().toUpperCase()

        console.log(data)

        return (
                <Container>
                        <Item>
                                <div className="header">
                                        <h4>SETRIKA LANGSUNG</h4>
                                        <h4>WARNA TIDAK TERBATAS</h4>
                                        <h4>WARNA GOLD/NEON/SILVER</h4>
                                </div>
                        </Item>
                        {
                                data && data.map( dt => (
                                        <Item>
                                                <div className="img">
                                                        <Img fluid={dt.node.image.asset.fluid} />
                                                </div>
                                                <div className="button">
                                                        <Button onClick={() => goToClick(dt.node.heading)} key={dt.node.heading} bColor='redLight' color='white' text={`PRICELIST ${upperCase(dt.node.heading)}`} />
                                                </div>
                                                <div className="true">
                                                        <h4>{dt.node.iron ? '✔' : '❌'}</h4>
                                                        <h4>{dt.node.color ? '✔' : '❌'}</h4>
                                                        <h4>{dt.node.gold ? '✔' : '❌'}</h4>
                                                </div>
                                        </Item>
                                ) )
                        }
                </Container>
        )
}

TableFlex.propTypes = {

}

export default TableFlex