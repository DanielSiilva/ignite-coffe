import styled, { css } from "styled-components";


export const InputContainer = styled.div`

    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 16px;
    gap: 12px;

    width: 178.67px;
    height: 51px;

    /* Brand/Purple Light */

    background: ${props => props.theme['purple-light']};
    border-radius: 6px;

    input {
        visibility: hidden;
        appearance: none;

    }

    :hover{
        cursor: pointer;
        border: 1px solid ${props => props.theme['base-hover']};
    }


    label{


        div{
            display: flex;
            align-items: center;
            gap: 5px;


            //Font
            white-space: nowrap;

            font-family: 'Roboto';
            font-style: normal;
            font-weight: 400;
            font-size: 12px;
            line-height: 160%;
            text-transform: uppercase;

            color: ${props => props.theme['base-text']};

            :hover{
                cursor: pointer;
            }
        }
    }

    user-select: none;
`