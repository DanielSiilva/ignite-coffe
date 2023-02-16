import { ShoppingCart } from "phosphor-react";
import { Container } from "./styled";



export function EmptyCart (){



    return (
        <Container>
            <ShoppingCart  weight="fill"/>
            <p>está vazio, adcione itens !</p>
        </Container>
    )
}