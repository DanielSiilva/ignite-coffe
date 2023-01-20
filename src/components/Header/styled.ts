import styled from "styled-components";


export const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2rem 10rem;


    img{
        width: 84.95px;
        height: 40px;
    }


`

export const HeaderItems = styled.div`
    display: flex;
    align-items: center;
    gap: 0.75rem;
`

export const Place = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;
    gap: 0.25rem;

    background-color: ${props=>props.theme['purple-light']};
    border-radius: 6px;

    svg{
        color: ${props=>props.theme['purple']};
    }

    span{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 500;
        font-size: 0.875rem;
        line-height: 130%;
        color: ${props=>props.theme['purple']};
    }

   
`


export const Cart = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;
    gap: 0.25rem;

    width: 2.375rem;
    height: 2.375rem;


    background-color: ${props=>props.theme['yellow-light']};
    border-radius: 6px;

    svg{
        color: ${props=>props.theme['yellow-dark']};
    }

`