import styled from "styled-components";


export const ContainerCart = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    padding: 8px 4px;
    gap: 59px;

    width: 320px;
    height: 80px;
    margin-bottom: 10px;

    border-bottom: 1px solid #E6E5E5;


    background: ${props => props.theme['base-card']};

    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;


    border:  1px solid red;

`

export const CartDetails = styled.div`
    display: flex;
    gap: 1rem;


    img{
        width: 64px;
        height: 64px;
    }

`

export const CartPurchase = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;


    div{
        display: flex;
        justify-content: center;
        gap: 0.5rem;
        
    }

`

export const ButtonRemove = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px 8px;
    gap: 4px;

    width: 91px;
    height: 40px;

    /* Base/Button */

    background: #E6E5E5;
    border-radius: 6px;
    border: 0px;

    /* Inside auto layout */

    //Font

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 160%;
    /* or 19px */

    text-transform: uppercase;

    /* Base/Text */

    color: #574F4D;

`