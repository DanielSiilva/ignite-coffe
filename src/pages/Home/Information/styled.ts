import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    gap: 2rem;

`

export const Introduction = styled.div`
    display: grid;
    flex-direction: column;
    gap: 3rem;

`

export const TitleSubtitle = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    h1{
        font-family: 'Baloo 2';
        font-style: normal;
        font-weight: 800;
        font-size: 2.8rem;
        line-height: 130%;
     
        color: ${props => props.theme['base-title']};

    }

    p{
  
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 1.3rem;
        line-height: 130%;
       
        color: ${props => props.theme['base-subtitle']};
        font-stretch: 100;
    }

`

const BaseItem = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;

    p{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 1rem;
        white-space: nowrap;

        color: ${props => props.theme['base-text']};
    }

    svg{
        padding: 6px;
        color: ${props => props.theme['background']};
        border-radius:100%;
        width: 1.8rem;
        height: 1.8rem;
    }
`

export const Highlights = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap:1rem;
`

export const Item01 = styled(BaseItem)`
    svg{
        background: ${props => props.theme['purple']};
    }
`

export const Item02 = styled(BaseItem)`
    svg{
        background: ${props => props.theme['base-text']};
    }

`

export const Item03 = styled(BaseItem)`
    svg{
        background: ${props => props.theme['yellow']};
    }

`

export const Item04 = styled(BaseItem)`
    svg{
        background: ${props => props.theme['purple']};
    }

`

export const Logo = styled.img`
    width: 470px;
    height: 330px;  

`