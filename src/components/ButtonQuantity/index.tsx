import { Minus, Plus } from 'phosphor-react'
import { Container } from './styled';


interface QuantifyProps{
    quantify: number;
    onAdd: () => void;
    subtract: () => void;
}

export function ButtonQuantity({quantify, onAdd, subtract}: QuantifyProps){


    return(
        <Container>
            <button onClick={subtract}>
                <Minus weight='fill' />
            </button>

            <input readOnly value={quantify}/>

            <button onClick={onAdd}>
                <Plus weight='fill' />
            </button>


        </Container>
    )
}