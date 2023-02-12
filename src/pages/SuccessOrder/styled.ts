import styled from "styled-components";


export const SuccessContainer = styled.div`
    display: flex;
    gap: 5rem;

    padding: 3rem 10rem;


    border: 1px solid red;


`


export const OrderDetails = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;



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

export const Details = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 40px;
    gap: 32px;

    width: 526px;
    height: 270px;
    left: calc(50% - 526px/2 - 297px);
    top: 296px;

    border: 1px solid #8047F8;
    border-radius: 6px 36px;

`


export const Banner = styled.img`
    width: 30.75rem;
    height: 18.313rem;
 
`

export const BaseOrder = styled.section`
    display: flex;
    flex-direction: row;
    gap: 1rem;


`
const BaseIcon = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 8px;
    gap: 8px;

    width: 32px;
    height: 32px;

    border-radius: 100%;

   

`

export const Icon1 = styled(BaseIcon)`
    background: ${props => props.theme['purple-dark']};

    svg{
        color: ${props => props.theme['white']};
    }

`



export const InformationRequests = styled.div`
    display: flex;
    flex-direction: column;
    

`