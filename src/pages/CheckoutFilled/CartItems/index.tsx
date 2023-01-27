import { CartItem } from "../../../context/ContexCart";
import { useCart } from "../../../hooks/useCart";
import { 
    ContainerCard,
    Card

} from "./styled";



interface CoffeeCartCardProps {
    coffee: CartItem
}



export function CartItems ({coffee}: CoffeeCartCardProps){
     const {cartItems} = useCart()
    

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