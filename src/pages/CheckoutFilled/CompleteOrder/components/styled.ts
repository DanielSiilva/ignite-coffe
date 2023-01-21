import styled, { css } from 'styled-components'

export const PaymentMethodContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0.75rem;

    
`

export const PaymentInputContainer = styled.div`
    

    input {
        visibility: hidden;
        appearance: none;
        
    }

    input:checked + label div {
        ${(props) =>css`
            background: ${props=> props.theme['purple-light']};
            border-color: ${props=> props.theme['base-text']};

            &:hover {
             background: ${props=> props.theme['base-hover']};
            }
        
        `}
    }
`

export const ContentContainer = styled.div`
  
    height: 3rem;
    padding: 0 1rem;

    background: ${props => props.theme['base-button']};
    color: ${props => props.theme['base-text']};

    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 0.75rem;

    font-size: 0.75rem;
    text-transform: uppercase;

    border-radius: 6px;
    border: 1px solid ${props => props.theme['base-button']};
    transition: 0.4s;

    svg {
        color: ${props => props.theme['purple']};
    }

    &:hover {
        background: ${props => props.theme['base-hover']};
        cursor: pointer;
    }

    

    user-select: none;
`
