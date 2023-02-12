import styled from "styled-components";


export const ItemsContainer = styled.div`
   display: flex;
    flex-direction: column;
    gap: 1rem;

    width: 640px;
    left: 160px;
    top: 182px;

    

    h2{
        width: 10.625rem;
        height: 1.438rem;
        left:10rem;
        top:9rem;

        font-family: 'Baloo 2';
        font-style: normal;
        font-weight: 700;
        font-size: 1.125rem;
        line-height: 130%;
     
        display: flex;
        align-items: center;

        color: ${props => props.theme['base-subtitle']};
    }


`


export const ContainerOrder = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 2.5rem;
    gap: 1.5rem;

    position: absolute;
    width: 25rem;
    height: 31.125rem;
    top: 11.375rem;


    background: ${props => props.theme['base-card']};
    border-radius: 6px 44px;

`


export const FinalizeOrder = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;

`


export const InformationRequest = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0px;
    gap: 0.5rem;

    width: 20rem;
    height: 1.313rem;


    //font

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 130%;
   
    display: flex;
    align-items: center;
    text-align: right;

    color: ${props => props.theme['base-text']};


    p{
        font-size: 1.25rem;
        font-weight: bold;

    }
`


export const FinishButton = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0.75rem 0.5rem;
    gap: 4px;

    width: 20rem;
    height: 2.875rem;
    margin-top: 0.75rem;


    background: ${props => props.theme['yellow-dark']};
    border-radius: 6px;
    border: 0px;

    cursor: pointer;

    //font

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 0.875rem;
    line-height: 160%;
 
    text-transform: uppercase;

    color: ${props => props.theme['white']};
    font-stretch: 100;

`