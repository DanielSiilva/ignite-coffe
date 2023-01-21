import { CartItems } from "./CartItems";
import { CompleteOrder } from "./CompleteOrder";

import { 
    Container, 
} from "./styled";



export function CheckoutFilled (){

    return(
        <Container>
            <CompleteOrder />
            <CartItems />
        </Container>
    )
}