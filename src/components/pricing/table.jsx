import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { useNavigate } from '@reach/router'

import Button from '../Button'

const Container = styled.table`

        td {
                font-family: 'Muli', sans-serif;
                font-weight: bold;

                &:not(:first-child) {
                        text-align: center;
                }
        }

        th, td {
                width: 250px;
                padding: 2vh 1rem;
        }

        .img {
                width: 100%;
        }

        @media screen and ( max-width: 464px ) {
                
                th, td {
                        width: 150px;
                }
        }
`

const Table = ({ data }) => {

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

        return (
                <Container>
                        <thead>
                                <tr>
                                        <th />
                                        {
                                                data && data.map( dt => (
                                                        <th key={dt.node.heading}>
                                                                <div className='img'>
                                                                        <Img fluid={dt.node.image.asset.fluid} />
                                                                </div>
                                                        </th>
                                                ) )
                                        }
                                </tr>
                                <tr>
                                        <th />
                                        {
                                                data && data.map( dt => (
                                                        <th>
                                                                <Button onClick={() => goToClick(dt.node.heading)} key={dt.node.heading} bColor='redLight' color='white' text={`PRICELIST ${upperCase(dt.node.heading)}`} />
                                                        </th>
                                                ) )
                                        }
                                </tr>
                        </thead>
                        <tbody>
                                <tr>
                                        <td>SETRIKA LANGSUNG</td>
                                        {
                                                data && data.map( dt => (
                                                        <td>{dt.node.iron ? '✔' : '❌'}</td>
                                                ) )
                                        }
                                </tr>
                                <tr>
                                        <td>WARNA TIDAK TERBATAS</td>
                                        {
                                                data && data.map( dt => (
                                                        <td>{dt.node.color ? '✔' : '❌'}</td>
                                                ) )
                                        }
                                </tr>
                                <tr>
                                        <td>WARNA GOLD/NEON/SILVER</td>
                                        {
                                                data && data.map( dt => (
                                                        <td>{dt.node.gold ? '✔' : '❌'}</td>
                                                ) )
                                        }
                                </tr>
                        </tbody>
                </Container>
        )
}

Table.propTypes = {

}

export default Table