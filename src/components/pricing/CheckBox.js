import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { reformatOptions } from '../../helper/formatter'

/**
 * 
 * @param data options => should be mapped
 * @param onChange => on change functions
 * @param defaultString => default name for ceckbox, e.g Bahan Kaos, Jenis Kaos usw.
 * @param id => basic name for the seleect box, e.g 'size', 'bahan'
 */
const CheckBox = ({ data, onChange, defaultString, id }) => {

    const toggleClass = () => {
        document.getElementById(`options-${id}`).classList.toggle('active')
        document.querySelector(`#sbox-${id} .icon`).classList.toggle('active')
    }

    const defaultClick = () => {

        toggleClass()
    }

    const radioClick = e => {

        toggleClass()
        document.getElementById(`${id}-selected`).innerHTML = e.target.value
        onChange(reformatOptions(e.target.value))
    }

    return (
        <Container>
            <div onClick={defaultClick} id={`sbox-${id}`} className='default'>
                <span id={`${id}-selected`}>{defaultString}  </span>
                <FontAwesomeIcon className='icon' icon={faChevronDown} />
            </div>
            <Options id={`options-${id}`}>
                {
                    data.map(dt => (
                        <>
                            <Radio onClick={radioClick} name={id} id={dt} value={dt} />
                            <label for={dt}>{dt}</label>
                        </>
                    ))
                }
            </Options>
        </Container>
    )
}

export default CheckBox

const Radio = styled.input.attrs(props => ({
    type: 'radio'
}))`
    display: none;
`

const Options = styled.div`
    
    display: flex;
    flex-direction: column;

    overflow: hidden;
    max-height: 0;
    position: absolute;
    z-index: 2;

    transition: .5s;
    background-color: #000;

    &.active {
        max-height: 100vh;
    }

    label {
        padding: 1vh;

        transition: .2s;
        color: #fff;
        font-family: 'Muli', sans-serif;

        &:hover {

            cursor: pointer;
            border-left: 3px solid #fff;
        }
    }
`

const Container = styled.div`
    
    .default {

        padding: 1vh;
        border: 1px solid #000;

        width: fit-content;
        position: relative;

        &:hover {

            cursor: pointer;
        }

        .icon {

            transform: scale(.7) translateY(3px);
            transition: .5s;

            &.active {

                transform: rotate(180deg) scale(.7) translateY(-3px);
            }
        }
    }
`