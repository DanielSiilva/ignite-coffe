import styled from "styled-components";

export const Container = styled.div`
    border: 1px solid red;

    margin-top: 1rem;

    display: flex;
    flex-direction: column;

    

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