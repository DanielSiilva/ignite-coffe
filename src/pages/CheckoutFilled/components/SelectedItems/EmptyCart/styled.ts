import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    gap: 0.5rem;

    p{
        font-size: 2rem;
        text-align: center;
        color:  ${props => props.theme['base-title']};
    }

    svg{
        color: ${props => props.theme['purple-dark']};
        font-size: 2rem;
    }


`