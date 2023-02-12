import styled from "styled-components";


export const SuccessContainer = styled.div`
    display: flex;


    padding: 3rem 10rem;


    border: 1px solid red;


`


export const OrderDetails = styled.div`
    display: flex;



    border: 1px solid black;


`


export const TitleAndSubtitle = styled.div`
    display: flex;
    flex-direction: column;
 
    h2{
        font-family: 'Baloo 2';
        font-style: normal;
        font-weight: 800;
        font-size: 2rem;
        line-height: 130%;
        
        color: ${props => props.theme['yellow-dark']};
    }

    span{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 130%;
    
        color: ${props => props.theme['base-subtitle']};
        font-stretch: 100;

    }


`