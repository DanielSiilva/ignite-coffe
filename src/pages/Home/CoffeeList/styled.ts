import styled from "styled-components";

export const Container = styled.div`

    margin-top: 1rem;
    height: auto;

    display: flex;
    flex-direction: column;
    gap: 2rem;

    width: 100%;

   

    section{
        

        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        gap: 1rem;
        
        
    }

`

export const Title = styled.div`

    h2{
        font-family: 'Baloo 2';
        font-style: normal;
        font-weight: 800;
        font-size: 1.75rem;
        line-height: 130%;

        display: flex;
        align-items: center;

        color:${props => props.theme['base-title']};
    }

`