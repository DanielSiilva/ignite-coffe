import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 8px;
    gap: 4px;

    width: 72px;
    height: 38px;

 

    background: ${props => props.theme['base-button']};
    border-radius: 6px;
 
    input{
        width: 1rem;
        border: none;
        background: ${props => props.theme['base-button']};

        
        width: 20px;
        height: 21px;

        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 1rem;
        line-height: 130%;
     
        text-align: center;

        color: ${props => props.theme['base-title']};
    }

    button{
        border: none;
        background: ${props => props.theme['base-button']};

        :hover{
            cursor: pointer;
        }

        svg{
            color: ${props => props.theme['purple']};
        }
    }

`