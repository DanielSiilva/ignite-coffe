import styled from "styled-components";



export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0rem 1rem 1rem 1rem;
    gap: 1rem;

    width: 235px;
    height: 318px;
    left: 0px;
    top: 0px;
    margin-bottom: 1rem;


    text-align: center;

    background: ${props => props.theme['base-card']};
    border-radius: 6px 36px;

    img {
        margin-top: -1.25rem;
        width: 115px;
        height: 115px;
    }

`

export const Header = styled.div`
    display: flex;

    flex-direction: column;
    justify-content: center;
    gap:0.75rem;

    div{
        display: flex;
        justify-content: center;
        gap: 4px;
    }

     p{
            padding: 4px 8px;

            font-family: 'Roboto';
            font-style: normal;
            font-weight: bold;
            font-size: 0.625rem;
            text-transform: uppercase;

            
            background-color: ${props => props.theme['yellow-light']};
            color: ${props => props.theme['yellow-dark']};
            border-radius: 8px;
    }
    
`

export const TitleInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    p:nth-child(1){
        font-family: 'Baloo 2';
        font-style: normal;
        font-weight: 700;
        font-size: 1.25rem;
        line-height: 130%;

        color: ${props => props.theme['base-title']};
    }

    p:nth-child(2){
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 0.875rem;
        line-height: 130%;

        text-align: center;
        color: ${props => props.theme['base-label']};
    }

`

export const ActionBuy = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    gap: 1rem;

    width: 12.5rem;

    padding: 0.5rem;
    
`

export const Price = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2px;

    p:nth-child(1){
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;

        color: ${props => props.theme['base-text']};
    }


    p:nth-child(2){
        font-size: 20px;
        font-weight: bold;

        color: ${props => props.theme['base-title']};
    }
`

export const Quantify = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

`





export const ItemBuy = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 8px;
    gap: 8px;

    width: 38px;
    height: 38px;

    background:${props => props.theme['purple-dark']};
    border-radius: 6px;

    :hover{
        cursor: pointer;
        background:${props => props.theme['purple']};
    }
    
    svg{
        color: ${props => props.theme['background']};
    }

`

