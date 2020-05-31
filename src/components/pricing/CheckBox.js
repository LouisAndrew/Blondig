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

    const disabled = !data.length > 0

    const toggleClass = () => {

        document.getElementById(`options-${id}`).classList.toggle('active')
        document.querySelector(`#sbox-${id} .icon`).classList.toggle('active')
    }

    const defaultClick = () => {

        if ( !disabled ) {
            toggleClass()
        }
    }

    const radioClick = e => {

        toggleClass()
        document.getElementById(`${id}-selected`).innerHTML = e.target.value
        onChange(reformatOptions(e.target.value))
    }

    console.log(disabled, `at ${defaultString}`)

    return (
        <Container $disabled={disabled}>
            <div onClick={defaultClick} id={`sbox-${id}`} className='default'>
                <span id={`${id}-selected`}>{defaultString}</span>
                <FontAwesomeIcon className='icon' icon={faChevronDown} />
            </div>
            <Options $disabled={disabled} id={`options-${id}`}>
                {
                    data && data.map(dt => (
                        <>
                            <Radio onClick={radioClick} name={id} id={dt} value={dt} />
                            <label  for={dt}>{dt}</label>
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

    transition: .2s;
    background-color: #fff;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, .25);

    &.hover {
        max-height: 5vh;
    }

    &.active {
        max-height: ${props => props.$disabled ? 0 : '100vh'};
    }

    label {
        padding: 1vh;

        transition: .2s;
        /* color: #fff; */
        font-family: 'Muli', sans-serif;

        &:hover {

            cursor: pointer;
            /* border-left: 5px solid #000; */
            color: #fff;
            background-color: #000;
        }
    }
`

const Container = styled.div`
    
    margin: 1vh 0;

    .default {

        padding: 1vh;
        border: 1px solid ${props => props.$disabled ? '#888' : '#000'};

        width: fit-content;
        position: relative;

        color: ${props => props.$disabled ? '#888' : '#000'};

        &:hover {

            cursor: ${props => props.$disabled ? 'not-allowed' : 'pointer'};
        }

        .icon {

            transform: scale(.7) translateX(5px);
            transition: .2s;

            &.active {

                transform: rotate(180deg) scale(.7) translateX(-5px);
            }
        }
    }
`