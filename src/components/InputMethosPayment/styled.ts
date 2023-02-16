import styled from 'styled-components'

export const PaymentMethodContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.75rem;


`

export const PaymentInputContainer = styled.div`
  cursor: pointer;

  input {
    visibility: hidden;
    appearance: none;
  }

  input:checked + label div {
    background-color: ${props => props.theme['purple-light']};
    border-color: ${props => props.theme['purple']};

    :hover{
        cursor: pointer;
        background-color: ${props => props.theme['purple-light']};
    }
  }
`

export const ContentContainer = styled.div`
  height: 3rem;
  padding: 0 1rem;

  

  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.75rem;

  font-size: 0.75rem;
  text-transform: uppercase;

  border-radius: 6px;
  border: 1px solid ${props => props.theme['base-button']};;
 
  transition: 0.4s;

  svg {
    color: ${props => props.theme['purple']};
  }

  &:hover {
    cursor: pointer;
    background: ${props => props.theme['base-hover']};
  }

  user-select: none;
`
