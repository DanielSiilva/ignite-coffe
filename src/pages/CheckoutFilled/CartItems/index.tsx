import { CartItem } from "../../../context/ContexCart";
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
                    {cartItems.map((item) =>{
                        return <img key={item.id} src={item.image}/>
                    })}
                   
                </div>
            </Card>
                
        </ContainerCard>
       
        
    )
}