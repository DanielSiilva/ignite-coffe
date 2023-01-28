import styled from 'styled-components'

export const ItemContainer = styled.div`
  position: relative;
  display: flex;
  gap: 1.25rem;

  width: 23rem;
  padding-bottom: 1.5rem;
  margin-bottom: 1.5rem;

  

  img {
    width: 4rem;
    height: 4rem;
  }

  strong {
    position: absolute;
    right: 0;

    @media (max-width: 768px) {
      right: 40px;
    }
  }
`

export const AmountAndDeleteContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  margin-top: 8px;
`

export const AmountContainer = styled.div`
  display: flex;
  align-items: center;

  max-width: 4rem;
  height: 2rem;
  padding: 8px;
  border-radius: 6px;

  

  input {
    border: 0;
    background-color: transparent;
    text-align: center;

    width: 1.35rem;
  }
`

export const DeleteContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;

  height: 2rem;
  padding: 8px;
  border-radius: 6px;
  border: 0;

  

  font-size: 0.75rem;
  line-height: 160%;
  text-transform: uppercase;

  cursor: pointer;

  transition: background-color 0.1s ease;

  &:hover {
    
  }
`
