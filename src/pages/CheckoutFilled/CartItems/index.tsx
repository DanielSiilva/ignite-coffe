import { useCart } from "../../../hooks/useCart";
import { 
    ContainerCard,
    Card

} from "./styled";







export function CartItems (){
     const {cartItems} = useCart()
    
     console.log(cartItems)

    return(
        <ContainerCard>
            <h3>Cafés selecionados</h3>

            <Card>
                <div> Aqui Itens do Carrinho</div>

                <div>
                   
                </div>
            </Card>
                
        </ContainerCard>
       
        
    )
}