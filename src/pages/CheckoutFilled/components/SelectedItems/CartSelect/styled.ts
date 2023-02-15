import styled from "styled-components";


export const ContainerCart = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    padding: 8px 4px;
    gap: 1rem;

    width: 325px;
    height: 80px;
    margin-bottom: 5px;

    border-bottom: 1px solid #E6E5E5;


    background: ${props => props.theme['base-card']};


`
export const Prince = styled.p`
    width: 55px;
    height: 21px;

    font-family: 'Roboto';
    white-space: nowrap;
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 130%;
  
    display: flex;
    align-items: center;
    text-align: right;

    color: ${props => props.theme['base-text']};

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

    background: ${props => props.theme['base-button']};
    border-radius: 6px;
    border: 0px;


    //Font

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 160%;
 
    text-transform: uppercase;

    color: ${props => props.theme['base-title']};

    :hover{
        cursor: pointer;
    }


    svg{
        color: ${props => props.theme['purple']};
    }

`