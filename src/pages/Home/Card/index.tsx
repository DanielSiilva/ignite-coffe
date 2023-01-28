

import { Minus, Plus, ShoppingCartSimple } from "phosphor-react"
import { useContext, useState } from "react"
import { OrderContext } from "../../../context/CartContext"



import { priceFormatter } from "../../../utils/formatter"
import {
    Container,
    Header,
    TitleInfo,
    ActionBuy,
    Price,
    ItemBuy,
    Quantify,
    

} from "./styled"



interface ItemCardProps {
    item: {
        id: number,
        tags:string[],
        name: string,
        info: string,
        image: string,
        price: number,
        amount: number
    }
}


export function Card({item}: ItemCardProps){
    const {addItemToCart} = useContext(OrderContext)

    const [quantity, setQuantify] = useState(0)

    function handleOnAdd(){
        setQuantify((state)=> state + 1)
    }

    function handleOnSubtract(){
        setQuantify((state)=> state >= 1? state -1: 0)
    }

    // function handleAddItensToCart() {
    //     addItemToCart()
    // }

  

    return(
        <Container>
            <img src={item.image}/>
            
            <Header>
                <div>
                    {item.tags.map((item)=>{
                        return(
                        <p>{item}</p>
                        )
                    })}
                </div>
                
            </Header>
            
            <TitleInfo>
                <p>{item.name}</p>
                <p>{item.info}</p>
            </TitleInfo>

            <ActionBuy>
                <Price>
                    <p>R$</p>
                    <p>{priceFormatter(item.price)}</p>
                </Price>

                <Quantify>
                    <div>
                       <Minus 
                            onClick={handleOnSubtract}
                            weight="bold"
                       />

                        <input 
                            readOnly 
                            value={quantity} 
                            // type='number' 
                            min={1} 
                            max={99} 
                        />
                       
                       <Plus 
                         onClick={handleOnAdd}
                         weight="bold"
                       
                       />
                    </div>
                    
                    <ItemBuy>
                        <ShoppingCartSimple size={22} weight="fill" />
                    </ItemBuy>
                </Quantify>
            </ActionBuy>
           
        
        </Container>
    )
}

function addItemToCart() {
    throw new Error("Function not implemented.")
}
