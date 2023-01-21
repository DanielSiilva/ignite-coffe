import styled from "styled-components";


export const ContainerOrder = styled.section`
    

    display: flex;
    flex-direction: column;
    gap: 1rem;

    width: 40rem;
    height: auto;

`

export const PaymentAndOrder = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
  
`

export const Statement = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;
    gap: 0.5rem;

    width: 35rem;
    height: 3rem;

    svg{
        color: ${props => props.theme['yellow-dark']};
    }

    div{
        p:nth-child(1){
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 400;
            font-size: 1rem;
            line-height: 130%;

            display: flex;
            align-items: center;

            color: ${props => props.theme['base-subtitle']};
        }

        p:nth-child(2){
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 400;
            font-size: 0.875rem;
            line-height: 130%;

            display: flex;
            align-items: center;
            
            color: ${props => props.theme['base-text']};
        }

    }

`

export const ContainerForm = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 2.5rem ;
    gap: 2rem;

    width: 40rem;
    height: 22rem;

    background: ${props => props.theme['base-card']};
    border-radius: 0.375rem;

    section{
        display: grid;
        grid-template-columns: 12.5rem 17.25rem 3.75rem;
        column-gap: 0.75rem;
        row-gap: 1rem;

        #cep {
            grid-column: 1;
        }

        #street {
            grid-column: span 3;
        }

        #complement {
            grid-column: span 2;
        }

        input {
            background: none;
            border: none;
            border-radius: 4px;
            padding: 0.70rem;
            height: 100%;

            font-size: 14px;
            color: ${props => props.theme['base-text']};
            background:${props => props.theme['base-input']};
            
        }
    }
`


export const PaymentMethod = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 2.5rem ;
    gap: 1rem;

    width: 40rem;
    height: 11.875rem;

    background: ${props => props.theme['base-card']};
    border-radius: 0.375rem;

`

