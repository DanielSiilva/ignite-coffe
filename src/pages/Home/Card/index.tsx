

import { Minus, Plus, ShoppingCartSimple } from "phosphor-react"
import { useState } from "react"



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



export interface Coffee{
    id: number,
    tags:string[],
    name: string,
    info: string,
    image: string,
    price: number
}

interface CoffeeProps{
    coffee: Coffee
}

export function Card({coffee}: CoffeeProps){
    

    const [quantity, setQuantify] = useState(0)

    function handleOnAdd(){
        setQuantify((state)=> state + 1)
    }

    function handleOnSubtract(){
        setQuantify((state)=> state >= 1? state -1: 0)
    }

 

  

    return(
        <Container>
            <img src={coffee.image}/>
            
            <Header>
                <div>
                    {coffee.tags.map((item)=>{
                        return(
                        <p>{item}</p>
                        )
                    })}
                </div>
                
            </Header>
            
            <TitleInfo>
                <p>{coffee.name}</p>
                <p>{coffee.info}</p>
            </TitleInfo>

            <ActionBuy>
                <Price>
                    <p>R$</p>
                    <p>{priceFormatter(coffee.price)}</p>
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