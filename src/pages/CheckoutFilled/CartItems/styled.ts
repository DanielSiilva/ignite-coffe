import styled from "styled-components";



export const ContainerCard = styled.div`
    display: flex;
    height: 37rem;
    width: auto;

    
`

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 2.5rem;
    gap: 1.5rem;

    position: absolute;
    width: 28rem;
    height: 31.125rem;
    left: 52rem;
    top: 11.375rem;

    background: ${props => props.theme['base-card']};
    border-radius: 0.375rem 2.75rem;

`