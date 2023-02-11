import styled from "styled-components";


const BaseInput = styled.input`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0.75rem;
    gap: 0.25rem;

    height: 2.625rem;

    background: ${props => props.theme['base-input']};
    
    border: 1px solid ${props => props.theme['base-button']};
    border-radius: 4px;

    flex: none;
    order: 0;
    flex-grow: 0;


    //Font

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 130%;

    color: ${props => props.theme['base-label']};

    :focus{
        border: 1px solid  ${props => props.theme['yellow-dark']};
   }
   
`




export const FormContainer = styled.div`
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

export const Information = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 2.5rem;
    gap: 2rem;

    width: 100%;
    height: auto;
   
    background:${props => props.theme['base-card']};
    border-radius: 0.375rem;

    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;

`

export const BaseInformation = styled.div`
    display: flex;
    justify-content: center;
    gap: 0.5rem;
    
    div{

        p{
            width: 33.125rem;
            height: 1.313rem;

            font-family: 'Roboto';
            font-style: normal;
            font-weight: 400;
            font-size: 1rem;
            line-height: 130%;
     
            display: flex;
            align-items: center;

            color: ${props => props.theme['base-subtitle']};

            flex: none;
            order: 0;
            align-self: stretch;
            flex-grow: 0;

        }

        span{
            width: 33.125rem;
            height: 1.313rem;

            font-family: 'Roboto';
            font-style: normal;
            font-weight: 400;
            font-size: 0.875rem;
            line-height: 130%;
     
            display: flex;
            align-items: center;

            color: ${props => props.theme['base-subtitle']};

            flex: none;
            order: 0;
            align-self: stretch;
            flex-grow: 0;
        }
    }

`


export const AddressContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 1rem;

    width: 35rem;
    height: 13.5rem;

    flex: none;
    order: 1;
    align-self: stretch;
    flex-grow: 0;


`




 

export const Cpf = styled(BaseInput)`
    width: 12.5rem;
`

export const Street = styled(BaseInput)`
    width: 35rem;
`

export const NumberAndComplement = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 0.75rem;

    width: 35rem;
    height: 2.625rem;

`

export const Number = styled(BaseInput)`
    width:12.5rem;
`

export const Complement = styled(BaseInput)`
    width: 21.75rem;
`


export const City = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 0.75rem;

    width: 35rem;
    height: 2.625rem;
`


export const Neighborhood = styled(BaseInput)`
    width: 12.5rem;
`

export const ECity = styled(BaseInput)`
    width: 17.25rem;
`

export const Uf = styled(BaseInput)`
    width: 3.75rem;
`


export const PaymentMethod = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 2.5rem;
    gap: 2rem;

    width: 40rem;
    height: 12.938rem;

    background: ${props => props.theme['base-card']};
    border-radius: 6px;

    

`


export const PaymentButton = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;


    button{
    
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 1rem;
        gap: 0.75rem;

        width: 11.125rem;
        height: 3.188rem;

 
        background: ${props => props.theme['base-button']};
        border-radius: 6px;
        border: 0px;

        flex: none;
        order: 0;
        flex-grow: 1;



        //Font

        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 0.75rem;
        line-height: 160%;
    
        text-transform: uppercase;

        color: ${props => props.theme['base-text']};

        flex: none;
        order: 1;
        flex-grow: 0;


        svg{
            color: ${props => props.theme['purple-dark']};
        }


        :hover{
            cursor: pointer;
            background: ${props => props.theme['base-hover']};
        }

        :focus{
            background: ${props => props.theme['purple-light']};
            
            border: 1px solid ${props => props.theme['purple-dark']};
            border-radius: 6px;
        }
    }


`