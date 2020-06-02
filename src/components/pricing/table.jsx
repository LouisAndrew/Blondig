import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { useNavigate } from '@reach/router'

import Button from '../Button'

const Container = styled.div`

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

        .mobile {
                display: none;
        }

        @media only screen and ( max-width: 768px ) {
                
                .wide {
                        display: none;
                }

                .mobile {
                        display: block;

                        thead {
                                ${({ theme }) => theme.center()};
                                flex-direction: column;

                                tr {
                                        ${({ theme }) => theme.center()};
                                }
                        }

                        td {
                                text-align: center;
                        }
                }

                th, td {
                        width: 200px;
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

                        <table className="wide">
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
                                                                <th key={`${dt.node.heading}-button`}>
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
                                                                <td key={`${dt.node.heading}-iron`}>{dt.node.iron ? '✔' : '❌'}</td>
                                                        ) )
                                                }
                                        </tr>
                                        <tr>
                                                <td>WARNA TIDAK TERBATAS</td>
                                                {
                                                        data && data.map( dt => (
                                                                <td key={`${dt.node.heading}-color`}>{dt.node.color ? '✔' : '❌'}</td>
                                                        ) )
                                                }
                                        </tr>
                                        <tr>
                                                <td>WARNA GOLD/NEON/SILVER</td>
                                                {
                                                        data && data.map( dt => (
                                                                <td key={`${dt.node.heading}-gold`}>{dt.node.gold ? '✔' : '❌'}</td>
                                                        ) )
                                                }
                                        </tr>
                                </tbody>
                        </table>

                        <table className="mobile">
                                {
                                        data && data.map( dt => (
                                                <React.Fragment key={dt.node.heading}>
                                                        <thead>
                                                                <tr>
                                                                        {/* <th /> */}
                                                                        <th>
                                                                                <div className="img">
                                                                                        <Img fluid={dt.node.image.asset.fluid} />
                                                                                </div>
                                                                        </th>
                                                                </tr>
                                                                <tr>
                                                                        {/* <th /> */}
                                                                        <th>
                                                                                <Button onClick={() => goToClick(dt.node.heading)} key={dt.node.heading} bColor='redLight' color='white' text={`PRICELIST ${upperCase(dt.node.heading)}`} />
                                                                        </th>
                                                                </tr>
                                                        </thead>
                                                        <tbody>
                                                                <tr>
                                                                        <td>SETRIKA LANGSUNG</td>
                                                                        <td>{dt.node.iron ? '✔' : '❌'}</td>
                                                                </tr>

                                                                <tr>
                                                                        <td>WARNA TIDAK TERBATAS</td>
                                                                        <td>{dt.node.color ? '✔' : '❌'}</td>
                                                                </tr>

                                                                <tr>
                                                                        <td>WARNA GOLD/NEON/SILVER</td>
                                                                        <td>{dt.node.gold ? '✔' : '❌'}</td>
                                                                </tr>
                                                        </tbody>
                                                </React.Fragment>
                                        ) )
                                }
                        </table>
                </Container>
        )
}

Table.propTypes = {

        data: PropTypes.arrayOf(
                PropTypes.object,
        ).isRequired,
}

export default Table