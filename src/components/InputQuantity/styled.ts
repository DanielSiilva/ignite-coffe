import styled from "styled-components";

export const InputQuantityContainer = styled.div`
 
  background-color: ${props => props.theme['base-button']};
  max-width: 4.25rem;

  border-radius: 6px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px;

  gap: 4px;

  input {
    background: none;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 130%;

    text-align: center;
    color: ${props => props.theme['base-title']};

    width: 100%;

    border: 0;

    &:focus {
      outline: none;
    }
  }

  button {
    border: 0;
    background: none;
    color: ${props => props.theme['purple']};

    &:hover {
      color: ${props => props.theme['purple-dark']};
    }
  }
`
